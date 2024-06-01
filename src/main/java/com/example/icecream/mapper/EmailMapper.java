package com.example.icecream.mapper;

import com.example.icecream.dto.incoming.EmailFormData;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class EmailMapper {

    public SimpleMailMessage toEmail(EmailFormData data)
    {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(data.getFrom());
        message.setTo(data.getTo());
        message.setText(data.getText());
        message.setSubject(data.getSubject());

        return message;
    }
}
