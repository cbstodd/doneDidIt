import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../item';

@Component({
    selector: 'app-item-new',
    templateUrl: './item-new.component.html',
    styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

    @Input() item: Item = {
        title: '',
        description: ''
    };

    constructor(private itemService: ItemService) { }

    onAddItem() {
        if (this.item.title !== '' && this.item.description !== '') {
            this.itemService.addItem(this.item);
            this.item.title       = '';
            this.item.description = '';
        }
    }

    ngOnInit() {
    }

}
