import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment16';
  person :any;                                                        //Instance for storing one entry
  namePattern = /^[a-zA-Z]+[a-zA-Z]$/;                                //Regular expression for validating Firstname and Lastname
  userNamePattern = /^[a-zA-Z]+[A-Za-z0-9_-]/;                        //Regular expression for validating Username
  agePattern = /[0-9]/;                                               //Regular expression for validating Age
  mailIdPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Regular expression for validating Mail Id
  phoneNumberPattern = /[0-9\+\-\ ]/;                                 //Regular expression for validating Phone Number
  addedElement : any;                                                 //Variable for storing additional element
  addedElementValue:any;                                              //variable for stroting additional element value
  submitStatus : boolean = false;                                     //Boolean variable to store Common component status
  
  formData = new FormGroup({                                          // Creating new Form group
    firstNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.namePattern), Validators.minLength(3),Validators.maxLength(256)])),
    // Created a form control instance for Firstname
    lastNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.namePattern), Validators.minLength(3),Validators.maxLength(256)])),
    // Created a form control instance for Lastname
    userNameControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.userNamePattern), Validators.minLength(3),Validators.maxLength(256)])),
    // Created a form control instance for Username
    ageControl : new FormControl("", Validators.compose([Validators.required, Validators.pattern(this.agePattern), Validators.max(999), Validators.min(1)])),
    // Created a form control instance for Age
    mailIdControl : new FormControl("", Validators.compose([ Validators.required, Validators.pattern(this.mailIdPattern)])),
    // Created a form control instance for Mail Id
    phoneNumberControl : new FormControl("", Validators.compose([ Validators.required, Validators.pattern(this.phoneNumberPattern), Validators.maxLength(10), Validators.minLength(10)])),
    // Created a form control instance for Phone Number
    addedElementControl : new FormControl("",Validators.compose([Validators.required, Validators.minLength(1)]))
    // Created a form control instance for Additional data
  });
  constructor(private router : Router){}
  
  ngOnInit(){
  }
  onAdd(){                                                     //Additional input Onkeyup function to store additional element value
    this.addedElement = this.formData.controls['addedElementControl'].value;}   //Reading and storing additional element value
  // additionalElementStatus = this.formData.controls['addedElementControl']?.invalid && this.formData.controls['addedElementControl']?.touched;
  submitForm(formDetails:any){                                 // Function that invokes on submitting form
    this.person  = {
      firstName: formDetails.firstNameControl,                                        
      lastName: formDetails.lastNameControl,
      userName: formDetails.userNameControl,
      age: formDetails.ageControl,
      mailId: formDetails.mailIDControl,
      phoneNumber: formDetails.phoneNumberControl,
      additionalElement : this.addedElement,
      additionalElementValue : this.addedElement
      }
      this.router.navigate(['display'],{state:{savedData : this.person}})
  }
  
  getValue(val:any){                                           //Function to get additional element value from dropdown.component
    this.addedElementValue=val;                                //Storing the additional element value
  }
  getStatus(val:any){                                          //Function to get dropDownForm status from dropdown.component
    this.submitStatus=val;                                      //Storing the dropDownForm status
  }

  get getFirstName(){return this.formData.get('firstNameControl')};   // Function to get the firstNameControl instance of formData formGroup
  get getLastName(){return this.formData.get('lastNameControl')};     // Function to get the lastNameControl instance of formData formGroup
  get getUserName(){return this.formData.get('userNameControl')};     // Function to get the userNameControl instance of formData formGroup
  get getAge(){return this.formData.get('ageControl')};               // Function to get the ageControl instance of formData formGroup
  get getMailId(){return this.formData.get('mailIdControl')};         // Function to get the mailIDControl instance of formData formGroup
  get getPhoneNumber(){return this.formData.get('phoneNumberControl')};   // Function to get the phoneNumberControl instance of formData formGroup
  get getAddedElement(){return this.formData.get('addedElementControl')}; // Function to get the additionalElementControl instance of formData formGroup

}
