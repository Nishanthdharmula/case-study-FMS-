package com.Producer.model;

import java.io.Serializable;

import lombok.ToString;
import org.springframework.data.annotation.Id;


@ToString
public class Review implements Serializable {

    @Id
    private String username;
    private String rating;
    private String feedback;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    /*@Override
    public String toString()
    {
        return "Review [UserName=" + username + ", experience=" + experience + ", description=" + feedback
                + "]";
    }*/


}
