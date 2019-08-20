import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',  
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
// @Input() element:{type:string, name:string,desc:string}; //you have to use  name 'element' for binding in parent component
@Input('srvElement') element:{type:string, name:string,desc:string};
//if u want to use other name for binding then use a parameter and the old element will not work if der is parameter

  constructor() { }

  ngOnInit() {
  }

}
