import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
h1color = 'red';
  constructor() { }

  ngOnInit() {
  }

  changeColor(){
    if(this.h1color == 'red'){
      this.h1color = 'green' ;
    } else
    if(this.h1color == 'green'){
      this.h1color = 'blue' ;
    } else
    if(this.h1color == 'blue'){
      this.h1color = 'pink' ;
    } else
    if(this.h1color == 'pink'){
      this.h1color = 'brown' ;
    }  else
    if(this.h1color == 'brown'){
      this.h1color = 'purple' ;
    } else {
      this.h1color = 'red'
    }
  }
}
