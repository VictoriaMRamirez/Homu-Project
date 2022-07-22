package com.pi_grupo6.pi.gravatar;

public enum GravatarDefaultImage {

    GRAVATAR_ICON(""),
    IDENTICON("identicon"),
    MONSTERID("monsterid"),
    WAVATAR("wavatar"),
    HTTP_404("404"),
    LOGO_HOMU("https://bucket-pig6.s3.us-east-2.amazonaws.com/Logos+Homu/LogoH.png");

    private String code;

    private GravatarDefaultImage(String code) { this.code = code; }

    public String getCode() { return code; }
}
