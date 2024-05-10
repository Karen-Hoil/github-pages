import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'she Hulk', 'Thor'];
  public deleteHero?:string;

  revomeLastHero():void {
    this.deleteHero = this.heroNames.pop();

  }
}
