import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './services/item.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        ItemsComponent,
        NavbarComponent,
        ItemNewComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'afs-todo'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        FormsModule,
    ],
    providers: [ItemService],
    bootstrap: [AppComponent]
})
export class AppModule {}
