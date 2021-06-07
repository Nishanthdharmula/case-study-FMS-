package com.Producer;

import com.Producer.reciver.MessageReciver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.Producer.config.RabbitMQConfig;

import java.util.concurrent.TimeUnit;


@SpringBootApplication
@EnableDiscoveryClient
public class MsgProducerApplication {

	public static void main(String[] args) throws InterruptedException {
		
			AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(RabbitMQConfig.class);
		    MessageReciver receiver = (MessageReciver) ctx.getBean("receiver");receiver.getCountDownLatch().await(200000, TimeUnit.SECONDS);
			SpringApplication.run(MsgProducerApplication.class, args);
		
	}
}
