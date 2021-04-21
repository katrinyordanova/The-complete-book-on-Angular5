import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  form: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      sku: ['', Validators.required]
    });

    this.sku = this.form.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log(value);
      }
    );

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
