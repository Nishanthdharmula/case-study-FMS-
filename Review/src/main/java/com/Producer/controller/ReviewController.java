package com.Producer.controller;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Producer.config.RabbitMQConfig;
import com.Producer.model.Review;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/review")
public class ReviewController  {



    final static String queueName = "message_queue";

    @PostMapping("/post")
    private Review getpost(@RequestBody Review review)
    {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(RabbitMQConfig.class);
        RabbitTemplate rabbitTemplate = (RabbitTemplate) ctx.getBean("rabbitTemplate");
        review.setRating(review.getRating());
        review.setUsername(review.getUsername());
        review.setFeedback(review.getFeedback());
        rabbitTemplate.convertAndSend(queueName, review);
        System.out.println("product object has been sent successfully to Queue");
//        ctx.close();
        return review;
    }

}