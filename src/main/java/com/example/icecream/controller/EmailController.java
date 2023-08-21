package com.example.icecream.controller;

import com.example.icecream.dto.incoming.EmailFormData;
import com.example.icecream.service.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/order")
public class EmailController {

    private EmailService emailService;

    public ResponseEntity<Void> sendEmail(EmailFormData data) {
        emailService.sendEmail(data);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
