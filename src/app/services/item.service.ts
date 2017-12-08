import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Item } from '../items/item';

@Injectable()
export class ItemService {
    itemCollection: AngularFirestoreCollection<Item>;
    itemDoc: AngularFirestoreDocument<Item>;

    constructor(public afs: AngularFirestore) {}

    getItems(): Observable<any[]> {
        // Ref, and order by title
        this.itemCollection = this.afs.collection(`items`,
            ref => ref.orderBy('title', 'asc')
        );
        //return this.afs.collection(`items`).valueChanges();
        return this.itemCollection.snapshotChanges()
                   .map((changes) => {
                       return changes.map((a) => {
                           const data = a.payload.doc.data() as Item;
                           data.id    = a.payload.doc.id;
                           return data;
                       })
                   })
    }

    addItem(item: Item): void {
        this.itemCollection.add(item);
        console.log(`Item was added to Todos: ${item.title}`);
    }

    deleteItem(item: Item): void {
        this.itemDoc = this.afs.doc(`items/${item.id}`);
        this.itemDoc.delete();
    }

    updateItem(item: Item): void {
        this.itemDoc = this.afs.doc(`items/${item.id}`);
        this.itemDoc.update(item);
    }

}
