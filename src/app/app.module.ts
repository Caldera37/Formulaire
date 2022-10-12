import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from "./app.component";
import { UserComponent } from './user/user.component';
// import { SignupComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './developer/skill/skill.component';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { CreateonomatopiaComponent } from './createonomatopia/createonomatopia.component';
import { ButtonComponent } from './button/button.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';



@NgModule({
  declarations: [AppComponent, UserComponent, MenuComponent, DeveloperComponent, SkillComponent, LoginFormComponentComponent, CreateonomatopiaComponent,ButtonComponent, CocktailListComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
