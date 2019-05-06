import { Component } from '@angular/core';
import { TeamworkService } from './teamwork.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  isOpen = false;
  page = [0,0,0,0,0];
  activate = 0;
  constructor(
    private teamworkService: TeamworkService) { 

  }
  move_daily(){

    this.teamworkService.getUserList().subscribe(
      response => {
        this.page[this.activate] = 0;
        this.activate = 0;
        this.page[0]= 1;
      }
    )
  }

  move_planner(){
    this.teamworkService.getUserList().subscribe(
      response => {
        this.page[this.activate] = 0;
        this.activate = 1;
        this.page[1]= 1;
      }
    )
  }
  changeOpen(){
    this.isOpen = !this.isOpen;
  }

 /* $('.card').height(height-100);
  $('#center').height(height-100);

 var activate = $('#daily-checklist');
 pageMove(activate);
  pageMove(target){

    activate.animate({opacity: "0.0"}, 500).css("z-index",0);
    target.delay(500).animate({opacity: "1.0"},1000).css("z-index",5);
    activate = target;
}*/

  menu_action(){
    
  }
  ngOnInit(){
    let height = window.innerHeight-100;
    document.getElementById("center").style.height = height+"px";
  }
}
