package com.example.CS4550_FinalProject.DateModel;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Message {

    public static enum messageType {
        POST,
        REPLY,
        PRIVATE,
        GROUP
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private User from;
    private int to;
    @Enumerated(EnumType.STRING)
    private messageType isPrivate;
    @Column(name = "date")
    @CreatedDate
    private Date date;
    private String text;
    @ManyToOne
    @JsonIgnore
    private Conversation conversation;
    @ManyToOne
    @JsonIgnore
    private Post post;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public User getFrom() {
        return from;
    }

    public void setFrom(User from) {
        this.from = from;
    }

    public int getTo() {
        return to;
    }

    public void setTo(int to) {
        this.to = to;
    }

    public messageType getIsPrivate() {
        return isPrivate;
    }

    public void setIsPrivate(messageType isPrivate) {
        this.isPrivate = isPrivate;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Conversation getConversation() {
        return conversation;
    }

    public void setConversation(Conversation conversation) {
        this.conversation = conversation;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

}

