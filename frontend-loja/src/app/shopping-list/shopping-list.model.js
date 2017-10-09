"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Nicolas on 09.10.2017.
 */
var ShoppingList = (function () {
    function ShoppingList() {
        this.products = [];
        this.totalValue = 0;
        this.approved = false;
    }
    ShoppingList.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ShoppingList.prototype.removeProduct = function (product) {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
    };
    ShoppingList.prototype.approvePurchase = function () {
        this.approved = true;
    };
    return ShoppingList;
}());
exports.ShoppingList = ShoppingList;
//# sourceMappingURL=shopping-list.model.js.map