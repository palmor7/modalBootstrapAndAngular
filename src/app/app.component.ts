import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from './userModel';
import $ from 'node_modules/jquery';
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: user[] = [];

  registerUser(registerForm: NgForm){
    let newUser: user= {
      amka: registerForm.value.registerAmka,
      firstName: registerForm.value.registerfName,
      lastName: registerForm.value.registerlName,
      email: registerForm.value.registerEmail,
      userName: registerForm.value.registerUsername,
      password: registerForm.value.registerPassword,
      phone: registerForm.value.registerPhone
    }
    
    console.log(newUser);
    registerForm.reset();
    $("#registerModal").modal("hide");
    //$("#registerModal .close").click();
    // $('.modal.in').modal('hide');
    
  }

  ngOnInit(){

  }
}
