package com.project.AddSearchUsers.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration

public class SecurityConfig {



	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        http
	            // Disable CSRF (not needed for API testing)
	            .csrf(csrf -> csrf.disable())

	            // Allow all endpoints without authentication
	            .authorizeHttpRequests(auth -> auth
	                .anyRequest().permitAll()
	            )

	            // Enable CORS (so @CrossOrigin works)
	            .cors(cors -> {});

	        return http.build();
	    }
	}
