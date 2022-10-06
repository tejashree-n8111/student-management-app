import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: any;

  studentForm = this.fb.group(
    {
      name: this.fb.control('', Validators.required),
      mobile: this.fb.control(''),
      address: this.fb.control(''),
      skills: this.fb.control(''),
      hobbies: this.fb.control(''),
      photo: this.fb.control(''),
    }
  )

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudentData().subscribe(
      (students: any) => {
        console.log(students)
        this.students = students
      },
      (error) => { console.log(error) }
    )

  }

  submitFn() {
    this.students.push(this.studentForm.value)
  }

}
