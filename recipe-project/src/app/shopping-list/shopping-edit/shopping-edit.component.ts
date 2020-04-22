import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    f1 = true;
    editMode = false;
    editedItemNumber: number;
    subscription: Subscription;
    editedItem: Ingredient;
    @ViewChild('f', {static: false}) slForm: NgForm;

    constructor(private slService: ShoppingListService) {
    }
    ngOnInit() {
        this.subscription = this.slService.startedEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editedItemNumber = index;
                this.editedItem = this.slService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount
                });
            }
        );
     }
     ngOnDestroy() {
         this.subscription.unsubscribe();
     }
    addItem(form: NgForm) {
        const value = form.value;
        const newIngData = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemNumber, newIngData);
        } else {
            this.slService.addIngredient(newIngData);
        }
        this.editMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
    }
    onDelete() {
        this.slService.deleteIngredient(this.editedItemNumber);
        this.onClear();
    }
}
