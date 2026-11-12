import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('.*[A-Z].*'),
      Validators.pattern('.*[0-9].*')
    ]),
    nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('.*[0-9]$')
    ])
  });

  ngOnInit() {
    this.form.controls.email.valueChanges.subscribe((email) => {
      console.log('Email:', email);
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form value:', this.form.value);
    }
  }
}