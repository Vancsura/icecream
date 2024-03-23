package com.example.icecream.controller;

import com.example.icecream.dto.incoming.EmailFormData;
import com.example.icecream.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/order")
public class EmailController {

    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> sendEmail(@RequestBody EmailFormData data) {
        try {
            emailService.sendEmail(data);
            return ResponseEntity.ok("Email sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email.");
        }
    }
}
