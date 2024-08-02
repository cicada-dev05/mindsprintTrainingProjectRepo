package com.example.MindsprintLearning.repo;

import com.example.MindsprintLearning.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {
}
