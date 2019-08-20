import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements=[{type:'server',name:'Tester server ', desc:'jsut a test',a:'b'}];
  constructor(){}
  
}
