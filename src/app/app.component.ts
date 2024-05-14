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


  submitTopic(event: Event) {
    event.preventDefault();
    this.topicSubmit = true;
  }

  topicForm() {
    this.showForm = !this.showForm;
  }

  btnShowMore() {
    this.showMoreText = !this.showMoreText;
    this.buttonText = this.showMoreText ? 'Ver Menos': 'Ver Mais';
  }
  
}


