package com.example.icecream.dto.incoming;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class IceCreamCreationCommand {
    @NotBlank
    @Size(max = 25)
    String name;
    @NotBlank
    String taste;
    String color;
    @Size(max = 200)
    String imgUrl;
}
