import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName:string="";
  newServerContent:string="";
  constructor() { }

  ngOnInit() {
  }
  onAddServer(){
    // this.dataa.push({ 
    //   name:this.newServerName,
    //   desc:this.newServerContent,
    //   type:"server"
    // });

  }
  onAddBluprint(){
    // this.dataa.push({
    //   type:'blue',
    //   name:this.newServerName,
    //   desc:this.newServerContent
    // })
  }
}
