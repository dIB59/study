package dev.byteschool.byteschoolapp.course;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.Set;

import static jakarta.persistence.GenerationType.SEQUENCE;


@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Getter
public class Student {

    @Id
    @GeneratedValue(strategy = SEQUENCE)
    @Column(name = "id", nullable = false)
    private int id;

    private String name;
    private String email;

    @ManyToMany
    @JsonBackReference
    private Set<Course> course;

    public Student(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Student() {}
}
