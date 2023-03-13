package com.in28minutes.springboot.myfirstwebapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import java.util.function.Function;

@Configuration
public class SpringSecurityConfiguration {
    //LDAP or Database
    // In Memory

    @Bean
    public InMemoryUserDetailsManager createUserDetailsManager() {
        Function<String, String> passwordEncoder =
                input -> passwordEncoder().encode(input);

        // pwd is encoded here
        UserDetails userDetails = User.builder()
                .passwordEncoder(passwordEncoder)
                .username("omer")
                .password("123")
                .roles("USER", "ADMIN")
                .build();

        // withDefaultPasswordEncoder is deprecated
        /*UserDetails userDetails = User.withDefaultPasswordEncoder()
                .username("omer")
                .password("123")
                .roles("USER", "ADMIN")
                .build();*/

        return new InMemoryUserDetailsManager(userDetails);
    }

    // used as decoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
