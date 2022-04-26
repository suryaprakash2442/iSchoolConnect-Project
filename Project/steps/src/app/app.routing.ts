import { Routes, RouterModule} from '@angular/router'
// import { AppComponent } from './app.component';
// import { AppModule } from './app.module';

import { HomeComponent } from './home'
import { LoginComponent } from './login'
import { PostListComponent } from './posts/post-list/post-list.component';
import { RegisterComponent } from './register'
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostsComponent } from './posts/orders';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo  } from '@angular/fire/auth-guard'; 
import { HasRoleGuard } from './has-role.guard';
import { AdminComponent } from './adminpage/admin.component';
import { EmailGuard } from './guards/email.guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
    { path : '',component: HomeComponent},
    { path : 'login',component: LoginComponent},
    { path : 'orders',component: PostsComponent, canActivate: [HasRoleGuard]},
    { path : 'register',component: RegisterComponent, ...canActivate(redirectToHome)},
    { path : 'admin', component: AdminComponent, canActivate: [EmailGuard]},
        { path: '**', redirectTo: ''}
];



export const appRoutingModule = RouterModule.forRoot(routes)