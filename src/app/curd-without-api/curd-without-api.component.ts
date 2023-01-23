import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curd-without-api',
  templateUrl: './curd-without-api.component.html',
  styleUrls: ['./curd-without-api.component.css']
})
export class CurdWithoutAPIComponent {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    marks: new FormControl('', [Validators.required]),
  })

  edit: any;

  deleteRow(item: any) {
    this.student.splice(item, 1);
  }
  onSubmit() {
    let value = this.contactForm.value
    if (this.edit !== '') {
      this.student[this.edit] = { name:value.name, subject:value.subject, marks:value.marks };
      this.edit = '';
      this.clearForm();
    }
    else{
      this.student.push(value);
      this.clearForm();
    }
  }

  editRow(student: any, index: any) {
    this.edit = index
    this.contactForm.patchValue({
      name: student.name,
      subject: student.subject,
      marks: student.marks
    })
  }

  clearForm() {
    this.contactForm.reset();
  };

  student: any = [
    { name: 'Abhishek', subject: 'Sub1', marks: '65' },
    { name: 'Abhishek', subject: 'Sub2', marks: '50' },
    { name: 'Arti', subject: 'Sub1', marks: '30' },
    { name: 'Arti', subject: 'Sub2', marks: '80' },
    { name: 'Ankit', subject: 'Sub1', marks: '15' },
    { name: 'Ankit', subject: 'Sub2', marks: '27' },
  ]
  getClass(params: any) {
    if (params >= 50 && params <= 100) {
      return 'highColor';
    } else if (params < 50 && params >= 30) {
      return 'avgColor'
    } else {
      return 'lowColor'
    }
  }
}

class Student {
  name: string | undefined;
  subject: string | undefined;
  marks: string | undefined;
}
