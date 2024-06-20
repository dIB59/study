package dev.byteschool.byteschoolapp.course;


import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("v1/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;
    private final StudentRepository studentRepository;

    public CourseController(CourseRepository courseRepository, StudentRepository studentRepository) {
        this.courseRepository = courseRepository;
        this.studentRepository = studentRepository;
    }

    @PostMapping("students")
    public Optional<Student> addStudent(
            @RequestParam int courseId,
            @RequestParam int studentId
    ) {
        return courseRepository.findById(courseId)
                .filter(Course::canAddStudent)
                .flatMap(c -> c.addStudent(studentRepository.findById(studentId).orElseThrow()));
    }

    @PostMapping
    public Course createCourse(
            @RequestParam String name,
            @RequestParam Module module,
            @RequestParam Slot slot
    ) {
       return courseRepository.save(new Course(name, module, 4, slot));
    }

    @GetMapping
    public List<Course> getAllStudents() {
        return courseRepository.findAll();
    }
}
