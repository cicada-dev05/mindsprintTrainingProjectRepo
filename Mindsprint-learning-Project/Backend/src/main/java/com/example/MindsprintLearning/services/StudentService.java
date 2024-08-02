package com.example.MindsprintLearning.services;

import com.example.MindsprintLearning.models.Student;

import java.util.List;

public interface StudentService {

    public Student addStudent(Student s);
    public List<Student> getAllStudent();
    public Student getStudentById(Long Id);
    public boolean updateStudentById(Long id,Student student);
    public boolean registerCourse(Long sid,Long cid);
    public boolean deleteStudentById(Long id);
    public Student login(String email, String password);
    public boolean makeAdmin(Long id);
}
