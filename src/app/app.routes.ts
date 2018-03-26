import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },

];

export const AppRoutes = RouterModule.forRoot(appRoutes,{useHash:true});