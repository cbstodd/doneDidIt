import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    items$: Observable<Item[]>;
    editState: boolean;
    itemToEdit: object;

    constructor(private itemService: ItemService) { }


    onEditItem(event, item: Item) {
        this.editState  = true;
        this.itemToEdit = item;
    }

    onCancelEdit() {
        this.editState = false;
    }

    onUpdateItem(item: Item) {
        this.itemService.updateItem(item);
        this.editState = false;
    }

    onDeleteItem(event, item: Item) {
        this.onCancelEdit();
        this.itemService.deleteItem(item);
        console.log(`event: ${event}`);
        console.log(`item: ${item}`);

    }

    ngOnInit() {
        //this.itemService.getItems().subscribe((items) => { this.items$ = items });
        this.items$ = this.itemService.getItems();
    }

}
