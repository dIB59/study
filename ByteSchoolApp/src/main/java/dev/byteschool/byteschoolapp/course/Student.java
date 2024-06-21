package dev.byteschool.byteschoolapp.course;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.HashSet;
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
    @JsonIgnoreProperties(value = "currentStudents")
    private final Set<Course> courses = new HashSet<>();

    public Student(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Student() {}

    public Student addCourse(Course course){
        this.courses.add(course);
        return this;
    }
}
