package com.example.MindsprintLearning.repo;

import com.example.MindsprintLearning.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {

    public Student findByEmail(String email);
}
