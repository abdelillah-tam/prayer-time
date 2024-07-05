import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prayer-time';

  /*constructor(){
    setTimeout(() => {
      console.log('timeout one')
    }, 0);
    console.log('hello');
    console.log('hello 1');
    console.log('hello 2');
    setTimeout(() => {
      console.log('timeout two')
    }, 0);
    console.log('hello 3');
  }*/


}
