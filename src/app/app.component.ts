import { Component, VERSION, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  name = 'Angular ' + VERSION.major;
  Games: string[] = ['Cricket', 'Chess', 'Football'];

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.signUpForm.reset();
  }
}
