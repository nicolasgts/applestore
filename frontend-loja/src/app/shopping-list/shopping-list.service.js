"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Nicolas on 09.10.2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ShoppingListService = (function () {
    function ShoppingListService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.productsBought = [];
        this.serverApi = 'http://localhost:3003/api/';
        this.userId = this.userService.getIDauth();
    }
    ShoppingListService.prototype.getProducts = function () {
        return this.productsBought;
    };
    ShoppingListService.prototype.addProduct = function (product) {
        this.productsBought.push(product);
    };
    ShoppingListService.prototype.geCurrentShoppingList = function () {
        return this.http.get(this.serverApi + "/user/" + this.userId + "/purchases/false")
            .map(function (res) { return res.json(); });
    };
    ShoppingListService.prototype.newShoppingList = function (shop) {
        var URI = this.serverApi + "/purchase/";
        var headers = new http_1.Headers;
        var body = JSON.stringify({ totalValue: shop.totalValue });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ShoppingListService;
}());
ShoppingListService = __decorate([
    core_1.Injectable()
], ShoppingListService);
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map