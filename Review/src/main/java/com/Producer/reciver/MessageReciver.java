package com.Producer.reciver;

import com.Producer.model.Review;

import java.util.concurrent.CountDownLatch;

public class MessageReciver {
        private CountDownLatch countDownLatch = new CountDownLatch(1);

        public void receiveMsg(Review review1) {
        System.out.println("product object is Received: " + review1);
        countDownLatch.countDown();
    }

        public CountDownLatch getCountDownLatch()
        {
            return countDownLatch;
        }
    }


