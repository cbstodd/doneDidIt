import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    items$: Observable<Item[]>;
    itemsCollection: AngularFirestoreCollection<Item[]>;

    constructor(private itemService: ItemService) { }

    onDeleteItem(event, item) {
        this.itemService.deleteItem(item);
        console.log(`event: ${event}`);
        console.log(`item: ${item}`);

    }

    ngOnInit() {
        //this.itemService.getItems().subscribe((items) => { this.items$ = items });
        this.items$ = this.itemService.getItems();
    }

}
