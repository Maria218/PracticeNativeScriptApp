import { Component } from "@angular/core";
import { User } from "../shared/user/user.model";
import { UserService } from '../shared/user/user.service';

@Component({
  selector: "gr-login",
  providers: [UserService],
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})

export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "maria@gmail.com";
    this.user.password = "password";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {

  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created!");
          this.toggleDisplay();
        },
        () => alert("Unfortunately, we were unable to create your account...")
      )
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}