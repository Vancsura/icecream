package com.example.icecream.dto.incoming;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class EmailFormData {

    @NotBlank
    @NotNull
    @Size(max = 50)
    private String from;
    private String text;
    private final String to = "sill_fagyizo@gmail.com";
    private final String subject = "Rendelés";
}
