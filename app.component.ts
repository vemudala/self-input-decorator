import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //9 now below line added
  //10 go to app,html
  serverElements=[{type:'server',name:'Tester server ', desc:'jsut a test',a:'b'}];
  constructor(){}
  
}
