package com.example.MindsprintLearning.services;

import com.example.MindsprintLearning.models.Course;
import com.example.MindsprintLearning.models.Student;
import com.example.MindsprintLearning.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    private StudentRepo studentRepo;
    @Override
    public Student addStudent(Student s) {
        return studentRepo.save(s);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepo.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepo.findById(id).orElse(null);
    }

    @Override
    public boolean updateStudentById(Long id,Student updateStudent) {
        if(studentRepo.findById(id).isPresent()) {
            Student oldUser = studentRepo.findById(id).get();
            oldUser.setStudentName(updateStudent.getStudentName());
            oldUser.setId(oldUser.getId());
            oldUser.setCourses(updateStudent.getCourses());
            studentRepo.save(oldUser);
            return true;
        }
        return false;
    }

    @Override
    public boolean registerCourse(Long sid, Long cid) {

        Student st = studentRepo.findById(sid).orElse(null);
        if(st != null){
            Course c = new Course();
            c.setId(cid);
            Set<Course> courseSet = st.getCourses();
            courseSet.add(c);
            st.setCourses(courseSet);
            studentRepo.save(st);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteStudentById(Long id) {
        if(studentRepo.findById(id).isPresent()) {
            studentRepo.deleteById(id);
            return true;
        }
        else return false;
    }

    @Override
    public Student login(String email, String password) {
        Student found = studentRepo.findByEmail(email);
        if (found!=null){
            if(Objects.equals(found.getPassword(), password)) return found;
        }

        return null;
    }

    @Override
    public boolean makeAdmin(Long id) {
        Student st = studentRepo.findById(id).orElse(null);

        if(st!=null){
            st.setRole(true);
            studentRepo.save(st);
            return true;
        }
        return false;

    }

}
