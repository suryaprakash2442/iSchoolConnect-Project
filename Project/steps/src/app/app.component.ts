import { Component, OnInit } from '@angular/core';
import { Post } from './posts/post.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  storedPosts: Post[] = []

  

  onPostAdded(post){
    this.storedPosts.push(post)
    
  }
  
}


