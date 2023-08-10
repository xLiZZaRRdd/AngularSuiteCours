import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { FakeAuthService } from 'src/app/shared/services/fake-auth.service';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {
  connectedUser : User | undefined;
  email : string = '';
  password : string = '';
  errorMsg : string = '';

  //Injection de notre service
  constructor(private _fauthService : FakeAuthService) { //Souvent privé comme ça ne reviens pas dans l'HTML, tiret du bas si variable privée

  }

  connect() : void{
    this.connectedUser = this._fauthService.login(this.email, this.password);
    if(this.connectedUser){
      this.email = '';
      this.password = '';
      this.errorMsg = '';
    }
    else{
      this.errorMsg = 'Email ou mot de passe invalide'
    }
  }

  disconnect() : void{
    this.connectedUser = this._fauthService.logout();
  }
}
