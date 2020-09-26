import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-grade',
  templateUrl: './register-grade.component.html',
  styleUrls: ['./register-grade.component.css']
})
export class RegisterGradeComponent implements OnInit {

  gradeForm = this.fb.group({
    lessonCode: ['', [Validators.required]],
    classNumber : ['', [Validators.required]],
    studentRegistration: ['', [Validators.required]],
    studentGrade: ['', [Validators.required]]
  });

  url: Array<string>;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.url = router.url.split('/');
  }

  ngOnInit(): void {
    this.checkUrl(this.url);
  }

  checkUrl(url: Array<string>): void {
    if(url[3] === 'editar-nota') {
      this.isEdit = true;
    }
  }

}
