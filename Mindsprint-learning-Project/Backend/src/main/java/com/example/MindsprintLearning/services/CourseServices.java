package com.example.MindsprintLearning.services;

import com.example.MindsprintLearning.models.Course;

import java.util.List;

public interface CourseServices {

    public Course addCourse(Course c);
    public List<Course> getAllCourses();
    public Course getCourseById(Long id);
    public boolean updateCourseById(Long id,Course c);
    public boolean deleteCourseById(Long id);

}
