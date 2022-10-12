import { Routes } from '@angular/router';

// import { UserComponent } from './user/user.component';
import { DeveloperComponent } from './developer/developer.component';

// import { SignupComponent } from './signup/signup.component';
// import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { ButtonComponent } from './button/button.component';


const ROUTES: Routes = [

  { path: 'button', component: ButtonComponent },

  { path: 'developer', component: DeveloperComponent },


];


export { ROUTES };