import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      address: [null],
      country: [null],
      gender: [null],
      dob: [null, [Validators.required]]
    });
  }
  
  edit: any;

  deleteRow(item: any) {
    this.employ.splice(item, 1);
  }

  onSubmit() {
    let value = this.form.value
    if (this.edit !== '') {
      this.employ[this.edit] = { name:value.name, email:value.email, address:value.address, country:value.country, gender:value.gender, dob:value.dob };
      this.edit = '';
      this.clearForm();
    }
    else{
      this.employ.push(value);
      this.clearForm();
    }
  }

  editRow(employ: any, index: any) {
    this.edit = index
    this.form.patchValue({
      name: employ.name,
      email: employ.email,
      address: employ.address,
      country: employ.country,
      gender: employ.gender,
      dob: employ.dob
    })
  }
  
  clearForm() {
    this.form.reset();
  };

  employ: any = []

  // saveDetails(form: any) {
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  // }
}
// class employ {
//   name: string | undefined;
//   email: string | undefined;
//   address: string | undefined;
//   country: string | undefined;
//   gender: string | undefined;
//   dob: string | undefined;
// }