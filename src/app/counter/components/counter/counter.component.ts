import { Component } from "@angular/core";

@Component({
  selector:'app-counter', //*nombrar componente
  template: `
  <h1>Caunter: {{ counter }}</h1>

  <button (click)="increaseyBy(1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="increaseyBy(-1)">-1</button>

  `
})
export class CounterComponent{
  public counter:number = 10

  increaseyBy (value:number):void{
    this.counter += value;
  }
  resetBy ():void{
    this.counter = 10;
  }
}
