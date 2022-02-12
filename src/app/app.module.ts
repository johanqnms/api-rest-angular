import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { LoginComponent } from './pages/login/login.component';
import { UserviewComponent } from './pages/userview/userview.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HomepageComponent,
    HeaderComponent,
    CreateUserComponent,
    UpdateUserComponent,
    LoginComponent,
    UserviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
