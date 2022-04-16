package com.example.TestingDocker4.Auth.filters;

import com.example.TestingDocker4.Exceptions.JWTFilterException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;

//@Component
public class JwtTokenFilter extends OncePerRequestFilter {
    private String signing = "SECRETSIGNINGKEY548q9anreqfewiqupre9qr32qfwqj09032[mr2q";


    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String jwt = request.getHeader("Authorization");

        if(jwt== null){
            throw new JWTFilterException("Authentication error");
        }


        SecretKey key = Keys.hmacShaKeyFor(
                signing.getBytes(StandardCharsets.UTF_8)
        );
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwt)
                .getBody();
        String username = String.valueOf(claims.get("username"));
        GrantedAuthority authority = new SimpleGrantedAuthority("user");
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(
                username,
                null,
                List.of(authority)
        );
        SecurityContextHolder.getContext().setAuthentication(auth);
        filterChain.doFilter(request,response);


    }



    @Override
    protected boolean shouldNotFilter(HttpServletRequest request){
        String path = request.getServletPath();
        // also need to add /api/v1/users/recover/email to this list
        // So when this is true the filter won't apply.
        String[] urls = {"/api/v1/user/auth"};
       // Boolean didPathMatchUrls = Arrays.stream(urls).anyMatch((s) -> !s.equals(path)); // should only apply to
        return !request.getServletPath().equals("/api/v1/user/auth"); //only apply to these

    }
}
