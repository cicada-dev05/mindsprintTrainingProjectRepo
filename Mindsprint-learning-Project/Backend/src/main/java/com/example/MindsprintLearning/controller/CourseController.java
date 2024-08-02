package com.example.MindsprintLearning.controller;


import com.example.MindsprintLearning.models.Course;
import com.example.MindsprintLearning.services.CourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/courses/")
public class CourseController {

    @Autowired
    private CourseServices courseServices;

    @GetMapping
    public List<Course> getAllCourses(){
        return courseServices.getAllCourses();
    }


    @GetMapping("{id}")
    public Course getCourseById(@PathVariable Long id){
        return courseServices.getCourseById(id);
    }

    @PostMapping
    public Course addCourse(@RequestBody Course c){
        return courseServices.addCourse(c);
    }

    @DeleteMapping("{id}")
    public boolean deleteCourse(@PathVariable Long id){
        return courseServices.deleteCourseById(id);
    }

    @PutMapping("{id}")
    public boolean updateCourse(@PathVariable Long id, @RequestBody Course c){
        return courseServices.updateCourseById(id,c);
    }


}
