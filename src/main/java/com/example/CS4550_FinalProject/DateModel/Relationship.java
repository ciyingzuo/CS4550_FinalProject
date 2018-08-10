package com.example.CS4550_FinalProject.DateModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;
import java.util.List;

public class Relationship {

    public static enum messageType {
        FRIEND,
        BLOCK,
        PENDING
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Enumerated(EnumType.STRING)
    private messageType type;
    @Column(name = "date")
    @CreatedDate
    private Date date;
    private User to;
    @ManyToOne
    @JsonIgnore
    private User from;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public messageType getType() {
        return type;
    }

    public void setType(messageType type) {
        this.type = type;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getTo() {
        return to;
    }

    public void setTo(User to) {
        this.to = to;
    }

    public User getFrom() {
        return from;
    }

    public void setFrom(User from) {
        this.from = from;
    }

}
