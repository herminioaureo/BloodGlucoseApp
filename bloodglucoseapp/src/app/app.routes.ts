import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authenticatedGuard } from './login/authenticated.guard';
import { nonAuthenticatedGuard } from './login/non-authenticated.guard';
import { NewuserComponent } from './newuser/newuser.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [    
    { path: 'login', component: LoginComponent},
    { path: 'newuser', component: NewuserComponent},
    { path: 'about', component: AboutComponent},
    { path: 'home', component: HomeComponent, canActivate: [authenticatedGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

    