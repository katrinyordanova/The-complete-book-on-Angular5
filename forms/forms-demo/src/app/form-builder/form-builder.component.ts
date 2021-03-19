import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      sku: ['', Validators.required]
    })

    this.form.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(formValue: string) {
    console.log(formValue);
  }

}
