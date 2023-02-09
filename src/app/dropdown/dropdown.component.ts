import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  addedElementPattern:any=/^[0-9]+[0-9]$/;              //variable to hold ragular expression pattern
  addTypes=["Number","String","Boolean","Hexadecimal"]; //array of acceptable input types
  addedElement:any;                                     //variable to store added element
  addedElementValue:any;                                //variable to store added element value
  addedElementStatus : boolean = false;                 //variable to store added element validation status 
  dropDownForm = new FormGroup({                        //creating a new formgroup
    addElementValueControl : new FormControl(''),       //created new formcontrol for added value
    addElementControl:new FormControl('')               //created new formcontrol for selected type
  });
  
  @Output() addedElementValueEmitter = new EventEmitter<any>;     //sending the added value to app component
  @Output() addedElementStatusEmitter = new EventEmitter<any>;    //sending the added value status to app component
  
onInit(){
  this.addedElementStatus = false;                 //variable to store added element validation status 

}

selectedType(type:string){                              //Function invoking on keyup.tab to find which input type selected, sets required regular expression
  if(type=="Number"){
    this.addedElementPattern =/^[0-9]+[0-9]$/;
  }
  else if(type=="String"){
    this.addedElementPattern =/^[a-zA-Z]+[a-zA-Z]$/;
  }
  else if(type=="Boolean"){
    this.addedElementPattern =/[0-1]/;
  }
  else if(type=="Hexadecimal"){
    this.addedElementPattern =/^[a-f0-9]+[a-f0-9]$/;
  }
}
sendElement(){                                          //Function invoking on keyup.enter to validate entered data with selected tyoe
  this.addedElementValue=this.dropDownForm.controls['addElementValueControl'].value;
  if(this.addedElementPattern.test(this.addedElementValue)){
    this.addedElementStatus=false;
    this.addedElementStatusEmitter.emit(true);
    this.addedElementValueEmitter.emit(this.addedElementValue);
  }
  else{
    this.addedElementStatusEmitter.emit(false);
    this.addedElementStatus=true;
  }
}
}
