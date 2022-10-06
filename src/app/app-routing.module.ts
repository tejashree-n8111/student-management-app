import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guard-service/authantication.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'students',
    loadChildren: () => import('./features/module/students/students.module').then(m => m.StudentsModule), canLoad: [AuthenticationGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
