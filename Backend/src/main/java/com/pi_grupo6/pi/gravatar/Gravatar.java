package com.pi_grupo6.pi.gravatar;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.*;
import org.apache.commons.io.IOUtils;

import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

public final class Gravatar {

    private final static int DEFAULT_SIZE = 80;
    private final static String GRAVATAR_URL = "http://www.gravatar.com/avatar/";
    private static final GravatarRating DEFAULT_RATING = GravatarRating.GENERAL_AUDIENCES;
    private static final GravatarDefaultImage DEFAULT_DEFAULT_IMAGE = GravatarDefaultImage.LOGO_HOMU;

    private int size = DEFAULT_SIZE;
    private GravatarRating rating = DEFAULT_RATING;
    private GravatarDefaultImage defaultImage = DEFAULT_DEFAULT_IMAGE;

    public void setSize(int sizeInPixels) {
        Validate.isTrue(sizeInPixels >= 1 && sizeInPixels <= 512,
                "sizeInPixels needs to be between 1 and 512");
        this.size = sizeInPixels;
    }

    public void setRating(GravatarRating rating) {
        Validate.notNull(rating, "rating");
        this.rating = rating;
    }

    public void setDefaultImage(GravatarDefaultImage defaultImage) {
        Validate.notNull(defaultImage, "imagen default");
        this.defaultImage = defaultImage;
    }

    public String getUrl(String email) {
        Validate.notNull(email, "email");
        String emailHash = DigestUtils.md5Hex(email.toLowerCase().trim());
        String params = formatUrlParameters();
        return GRAVATAR_URL + emailHash + ".png" + params;
    }

    public byte[] download(String email) throws GravatarDownloadException {
        InputStream stream = null;
        try {
            URL url = new URL(getUrl(email));
            stream = url.openStream();
            return IOUtils.toByteArray(stream);
        } catch (FileNotFoundException e) {
            return null;
        } catch (Exception e) {
            throw new GravatarDownloadException(e);
        } finally {
            IOUtils.closeQuietly(stream);
        }
    }

    private String formatUrlParameters() {
        List<String> params = new ArrayList<String>();

        if (size != DEFAULT_SIZE)
            params.add("s=" + size);
        if (rating != DEFAULT_RATING)
            params.add("r=" + rating.getCode());
        if (defaultImage != GravatarDefaultImage.GRAVATAR_ICON) {
            String defaultImageCode = null;

            try {
                defaultImageCode = URLEncoder.encode(defaultImage.getCode(), StandardCharsets.UTF_8.name());
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            params.add("d=" + defaultImageCode);
        }

        if (params.isEmpty()) {
            return "";
        }
        else {
            return "?" + StringUtils.join(params.iterator(), "&");
        }
    }
}