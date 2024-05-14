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
  showForm = false;
  topicSubmit = false;


  submitT() {
    setTimeout(() => {
      this.topicSubmit = true;
    }, 2000);
  }

  topicForm() {
    this.showForm = !this.showForm;
  }

  btnShowMore() {
    this.showMoreText = !this.showMoreText;
    this.buttonText = this.showMoreText ? 'Ver Menos': 'Ver Mais';
  }
  
}


