package com.pi_grupo6.pi.security;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthenticationResponse {
    private String jwt;

    public AuthenticationResponse() {}

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }
}
