package com.pi_grupo6.pi.gravatar;

public class GravatarDownloadException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public GravatarDownloadException(Throwable cause) {
        super("Gravatar could not be downloaded: " + cause.getMessage(), cause);
    }
}
