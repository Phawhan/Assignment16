import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  person:any;
  constructor(private router: Router, private route:ActivatedRoute){
    this.person=this.router.getCurrentNavigation()?.extras.state?.['savedData'];
    console.log("received succes",this.person)

  }

}
