package com.Producer.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.Producer.reciver.MessageReciver;
import java.util.concurrent.CountDownLatch;


@Configuration
@EnableAutoConfiguration
public class RabbitMQConfig
{
final static String queueName = "message_queue";

@Autowired
    RabbitTemplate rabbitTemplate;

@Bean
public ConnectionFactory connectionFactory()
        {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory("localhost");
        connectionFactory.setPort(5672);
        connectionFactory.setUsername("guest");
        connectionFactory.setPassword("guest");
        return connectionFactory;
        }

@Bean
Queue queue()
            {
            return new Queue(queueName, false);
            }

@Bean
TopicExchange exchange()
            {
            return new TopicExchange("message_queue_exchange");
            }

@Bean
Binding binding(Queue queue, TopicExchange exchange)
            {
            return BindingBuilder.bind(queue).to(exchange).with(queueName);
            }
            @Bean
    SimpleMessageListenerContainer container(
            ConnectionFactory connectionFactory,
            MessageListenerAdapter listenerAdapter)
    {
        System.out.println("host = " + connectionFactory.getHost());
        SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(queueName);
        container.setMessageListener(listenerAdapter);
        return container;
    }

    @Bean
    MessageReciver receiver()
    {
        return new MessageReciver();
    }


    @Bean
    MessageListenerAdapter listenerAdapter(MessageReciver receiver)
    {
        return new MessageListenerAdapter(receiver, "receiveMsg");
    }



}