import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  items=['Leo','Daniel','Maria','Cris'];

  addItem(){
    this.items.push('Nuevo item');
  }

  deleteItem(index:number){
    this.items.splice(index,1);
  }
}
