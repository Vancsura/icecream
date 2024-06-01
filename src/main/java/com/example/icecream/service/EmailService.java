package com.example.icecream.service;

import com.example.icecream.dto.incoming.EmailFormData;
import com.example.icecream.mapper.EmailMapper;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.internet.MimeMessage;

@Service
@Transactional
@AllArgsConstructor
public class EmailService {

    private final JavaMailSender emailSender;
    private final EmailMapper emailMapper;

    public void sendEmail(EmailFormData emailData) {
        SimpleMailMessage message = emailMapper.toEmail(emailData);
        emailSender.send(message);
    }

}
