import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Note } from './pages/note/note';


export const routes: Routes = [

{path:"", redirectTo :"home",pathMatch:"full"},
{path:"home",component:Home},
{path:"login",component:Login},
{path:"logout", component:Home},
{path:"note", component:Note}


   

];
