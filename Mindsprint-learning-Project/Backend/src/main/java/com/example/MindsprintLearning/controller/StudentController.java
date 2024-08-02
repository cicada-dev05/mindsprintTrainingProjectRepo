package com.example.MindsprintLearning.controller;


import com.example.MindsprintLearning.models.Student;
import com.example.MindsprintLearning.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService stdService;

    @GetMapping
    public List<Student> getAllStudents(){
        return stdService.getAllStudent();
    }

    @GetMapping("{id}")
    public Student getStudentById(@PathVariable Long id){
        return stdService.getStudentById(id);
    }
    @PostMapping
    public Student addStudent(@RequestBody Student s){
        return stdService.addStudent(s);
    }


    @PostMapping("{sid}/addCourse/{cid}")
    public Boolean registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        return stdService.registerCourse(sid,cid);
    }

    @DeleteMapping("{id}")
    public boolean delteStudentById(@PathVariable Long id){
        return stdService.deleteStudentById(id);
    }

    @PutMapping
    public boolean updateStudentById(@RequestBody Student s,@PathVariable String id){

        return stdService.updateStudentById(Long.valueOf(id),s);
    }


    @PostMapping("/login")
    public String[] login(@RequestBody Student student){
        String email = student.getEmail();
        Student found = stdService.login(email,student.getPassword());

        if(found != null && found.isRole()) return new String[]{"2", String.valueOf(found.getId())};
        else if(found != null && !found.isRole()) return new String[]{"1", String.valueOf(found.getId())};
        return new String[]{"0","0"};
    }

    @GetMapping("/makeadmin/{id}")
    public boolean makeAdmin(@PathVariable Long id){
        return stdService.makeAdmin(id);
    }
}
