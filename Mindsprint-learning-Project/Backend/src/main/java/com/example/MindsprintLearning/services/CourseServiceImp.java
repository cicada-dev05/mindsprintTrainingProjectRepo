package com.example.MindsprintLearning.services;

import com.example.MindsprintLearning.models.Course;
import com.example.MindsprintLearning.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImp implements CourseServices{

    @Autowired
    private CourseRepo courserepo;

    @Override
    public Course addCourse(Course c) {
        return courserepo.save(c);
    }

    @Override
    public List<Course> getAllCourses() {
        return courserepo.findAll();
    }

    @Override
    public Course getCourseById(Long id){
        return courserepo.findById(id).orElse(null);
    }

    @Override
    public boolean updateCourseById(Long id,Course updateUser) {
        if(courserepo.findById(id).isPresent()){
            Course oldCourse = courserepo.findById(id).orElse(null);
            assert oldCourse != null;
            oldCourse.setCourseName(updateUser.getCourseName());
            oldCourse.setStudents(updateUser.getStudents());
            oldCourse.setId(updateUser.getId());
            courserepo.save(oldCourse);
            return true;
        }
        return false;
    }

    @Override
    public  boolean deleteCourseById(Long id) {
        if(courserepo.findById(id).isPresent()){
            courserepo.deleteById(id);
            return true;
        }
        else return false;
    }
}
