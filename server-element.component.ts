import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',  
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //4 here v r creating element property and add type by assigning colon ie element:{} here curly braces are js object
  //5 nxt go back to serverelemcmp.html and check the javascript object key =values ie type,,name,desc
//6  element:{type:string, name:string,desc:string};//this is type defination  //you have to use  name 'element' for binding in parent component
//7 now we can use propety in html // this can be used in only same component we cant access outside 
  //8 to access now go to app.comp.ts
 
//   13 ur not able to access  element:{type:string, name:string,desc:string};//here u can access inside the component   
  //14 PARENT COMPT TO BE ABLE TO BIND THIS PROPERTY  (if u want to access at outside component)  so u need to assign @inputdecorator//
  //HERE WE ADDED DECORATOR TO PROPETY
   // @Input() element:{type:string, name:string,desc:string}; // U CAN USE THIS OR BELOW ONE
  @Input('srvElement') element:{type:string, name:string,desc:string}; //if u want property with capital leters so pass parameter nd use it in html
//sometimes u dont want touse  same proptery to inside compt and outside comp so we crated srvElemnt name
  //if u want to use other name for binding then use a parameter and the old element will not work if der is parameter

  constructor() { }

  ngOnInit() {
  }

}
