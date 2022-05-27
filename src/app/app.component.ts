import { Component } from '@angular/core';
import { User } from './model/user.model';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app';

  constructor(private authentificationService: AuthentificationService){}

  onLogOut (){
    this.authentificationService.logOut();
  }
}
