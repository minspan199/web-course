import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Mingsen';
  title = 'My Title';
  serverName = 'Candy';
  serverStatus = 'offline';
  first_name = '';
  studentNames = ['Aaron', 'Bryan', 'Chris', 'David', 'Ethan'];
  currentName = '';
  serverStatusFlag = false;
  buttonState = true;
  ngif_flag = true;
  toggleState = false;
  counter = [0];
  constructor(){
    setTimeout(()=>{
      this.buttonState = false;
    }, 2500);
  }
  //binding to an event
  toogleServerStatus(){
    this.serverStatusFlag = !this.serverStatusFlag;
    if(this.serverStatusFlag){
      this.serverStatus='online';
    }else{
      this.serverStatus='offline';
    }
    return this.serverStatus;
  }

  resetName(){
    this.first_name = '';
  }

  isNameNull(){
    return this.first_name == '';
  }

  toggleFlag(){
    this.ngif_flag = !this.ngif_flag;
    return this.ngif_flag;
  }

  getColor(){
    if(this.ngif_flag){
      return 'red';
    } else{
      return 'blue';
    }
  }

  addName(){
    this.studentNames.push(this.currentName);
  }

  toggleDisplay(){
    this.toggleState = !this.toggleState;
    this.counter.push(this.counter.length);
  }

  getLength(){
    if(this.counter.length > 4){
    return 'blue';
    } else{
      return 'orange';
    }
  }
}
