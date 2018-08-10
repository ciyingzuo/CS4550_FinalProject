package com.example.CS4550_FinalProject.DateModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;
import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;
    private String firstName;
    private String lastName;
    private String password;
    private String username;
    private boolean isAdmin;
    private String phoneNumber;
    private Email emailAddress;
    @Column(name = "registerDate")
    @CreatedDate
    private Date registerDate;
    @OneToMany(mappedBy = "user")
    private List<RelationList> relationship;
    @OneToMany(mappedBy = "user")
    private List<Post> post;
    @OneToMany(mappedBy = "user")
    private List<Conversation> conversation;
    @ManyToOne
    @JsonIgnore
    private Group group;


}
