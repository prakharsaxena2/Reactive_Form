import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl ,Validators  }from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'relativeforms';
  employeeForm:FormGroup;
  constructor(){ }
  ngOnInit(){


    this.employeeForm= new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.pattern("[^@]*@[^@]*")]),
      mobileNo : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]

      ),
      // skills: new FormGroup({
      //   skillName:new FormControl(),
      //   experienceInYears:new FormControl(),
      //   proficiency: new FormControl(),

      // })
      address: new FormGroup({
        line1: new FormControl(),
        line2: new FormControl(),
        district: new FormControl(),
        city : new FormControl(),
        pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])


      })

      
    })
  }
  onSubmit():void{
     console.log(this.employeeForm.value)
    // console.log(this.employeeForm.touched)
    // console.log(this.employeeForm.dirty)

    // console.log(this.employeeForm.controls.fullName.dirty)
    // console.log(this.employeeForm.controls.email.dirty)


    // console.log(this.employeeForm.controls.fullName.touched)




  }
}
 