package dev.byteschool.byteschoolapp.course;

import java.util.Optional;

@FunctionalInterface
public interface Students {

    Optional<Student> addStudent(Student student);
//    Optional<Student>  removeStudent(Student student);
//    Optional<Student>  getAllStudents();

}
