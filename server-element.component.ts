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
  // @Input() element:{type:string, name:string,desc:string};
  @Input('srvElement') element:{type:string, name:string,desc:string};
//if u want to use other name for binding then use a parameter and the old element will not work if der is parameter

  constructor() { }

  ngOnInit() {
  }

}
