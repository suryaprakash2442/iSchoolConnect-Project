import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule} from '@angular/material/expansion'
import { AuthenticationService } from './authentication.service'
import { PostsService } from './posts/posts.service'
import { CreateService } from './posts/post-create/create.service';


import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { appRoutingModule } from './app.routing';
import { PostsComponent } from './posts/orders';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';1
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { UserCreateService } from './register/user.service';
import { AdminComponent } from './adminpage/admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, PostCreateComponent, 
    HeaderComponent, PostListComponent,
    HomeComponent, LoginComponent, RegisterComponent, 
    PostsComponent, AdminComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    BrowserAnimationsModule, MatInputModule,
    MatCardModule, MatButtonModule,
    MatToolbarModule, MatExpansionModule,
    appRoutingModule, ReactiveFormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), HotToastModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, AngularFireDatabaseModule, HttpClientModule
  ],
  providers: [PostsService,AuthenticationService, CreateService, UserCreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
