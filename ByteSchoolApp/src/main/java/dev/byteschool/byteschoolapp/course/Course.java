package dev.byteschool.byteschoolapp.course;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.*;

import static jakarta.persistence.GenerationType.SEQUENCE;
import static java.time.DayOfWeek.MONDAY;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Getter
@Entity
public class Course implements HasStudents {

    @Id
    @GeneratedValue(strategy = SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;
    private LocalDate startDate;
    private LocalDate endDate;
    private String name;
    private Module type;
    private Slot slot;
    private int maxCapacity;
    @ManyToMany
    private Set<Student> currentStudents;

    public Course(String name, Module type, int maxCapacity, Slot slot) {
        this.name = name;
        this.slot = slot;
        this.type = type;
        this.maxCapacity = maxCapacity;
        this.currentStudents = new HashSet<>();
        this.startDate = getNextMonday();
        this.endDate = startDate.plusWeeks(2);
    }

    public Course() {
        this.maxCapacity = 4;
        this.currentStudents = new HashSet<>();
        this.startDate = getNextMonday();
        this.endDate = startDate.plusWeeks(2);
    }

    public boolean canAddStudent() {
        return currentStudents.size() < maxCapacity;
    }

    public Student addStudent(Student student) {
        if (canAddStudent()) {
            currentStudents.add(student);
            return student;
        }
        throw new IllegalArgumentException("Can't add student to course. Max size reached");
    }

    private LocalDate getNextMonday() {
        LocalDate currentDate = LocalDate.now();
        DayOfWeek currentDayOfWeek = currentDate.getDayOfWeek();
        int daysToAdd = MONDAY.getValue() - currentDayOfWeek.getValue();
        if (daysToAdd <= 0) {
            daysToAdd += 7;
        }
        return currentDate.plusDays(daysToAdd);
    }
}
