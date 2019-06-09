import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";

@Component({
  selector: "gr-login",
  templateUrl: "login/login.component.html",
  styleUrls: ["login/login.component.css"]
})

export class AppComponent {
  email = "mariasitumbeko@gmail.com";
  isLoggingIn = true;

  submit() {
    alert("You're using: " + this.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}