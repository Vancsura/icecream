package com.example.icecream.controller;

import lombok.AllArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/ice-cream")
@AllArgsConstructor
public class IceCreamController {

    private static final Logger logger = (Logger) LoggerFactory.getLogger(IceCreamController.class);


}
