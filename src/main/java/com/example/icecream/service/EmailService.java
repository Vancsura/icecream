package com.example.icecream.service;

import com.example.icecream.dto.incoming.EmailFormData;
import com.example.icecream.mapper.EmailMapper;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@AllArgsConstructor
public class EmailService {

    private final JavaMailSender emailSender;
    private final EmailMapper emailMapper;

    public void sendEmail(EmailFormData mapper) {
        SimpleMailMessage message = emailMapper.toEmail(mapper);
        emailSender.send(message);
    }

}
