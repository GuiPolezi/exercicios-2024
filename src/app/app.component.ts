import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  showMoreText = false;
  buttonText = 'Ver Mais';

  btnShowMore() {
    this.showMoreText = !this.showMoreText;
    this.buttonText = this.showMoreText ? 'Ver Menos': 'Ver Mais';
  }
  
}


