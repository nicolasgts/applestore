"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var util_1 = require("util");
var ShoppingListComponent = (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
        console.log('jdjdjdj');
        this.products = new Array();
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (util_1.isUndefined(this.shoppingList)) {
            this.slService.geCurrentShoppingList().subscribe(function (shoppingList) {
                _this.shoppingList = shoppingList;
                _this.products = _this.shoppingList.products;
                console.log(util_1.isUndefined(_this.shoppingList));
            });
        }
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    core_1.Component({
        selector: 'app-shopping-list',
        templateUrl: './shopping-list.component.html',
        styleUrls: ['./shopping-list.component.css']
    })
], ShoppingListComponent);
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map