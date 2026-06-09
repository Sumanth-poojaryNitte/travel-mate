package com.travelmate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.travelmate")
@EnableJpaRepositories("com.travelmate.repository")
@EntityScan("com.travelmate.model")
public class TravelmateBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelmateBackendApplication.class, args);
    }
}