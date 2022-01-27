import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
