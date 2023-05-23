package com.example.icecream.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class IceCream {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    String name;

    @Column(name = "taste")
    String taste;

    @Column(name = "color")
    String color;

    @Column(name = "imgUrl")
    String imgUrl;

}
