import { Component } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");
@Component({
  selector: "my-app",
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor(){
    firebase.init({
      // Optionally pass in properties for database, authentication and cloud messaging,
      // see their respective docs.
    }).then(
      instance => {
        console.log("firebase.init done");
      },
      error => {
        console.log(`firebase.init error: ${error}`);
      }
    );

  }

  text : string = "off";
  isShow : boolean = false;
  light : number = 0;
  on(){
    this.isShow = !this.isShow;
    var Time = new Date();
    if (this.isShow) {
      this.text = "on";
      this.light = 0;
    }else{
      this.text = "off";
      this.light = 1;
    }
 
    //set data to  firebase
    firebase.setValue(
      '/light',
      {
        switch: this.light,
        time : Time.toString()
      }
  );
  firebase.push(
    '/log',
    {
      switch: this.light,
      time : Time.toString()
    }
);
  
  }  



}


