"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var vts = require("vue-typescript-component");
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'child';
        return _this;
    }
    Child.prototype.inc = function () {
        this.listener.inc();
    };
    Child.prototype.dec = function () {
        this.listener.dec();
    };
    Child.prototype.greet = function (msg) {
        this.listener.greet(msg);
    };
    Child.prototype.created = function () {
        this.inc();
    };
    return Child;
}(Vue));
__decorate([
    vts.prop(),
    __metadata("design:type", Object)
], Child.prototype, "listener", void 0);
Child = __decorate([
    vts.component()
], Child);
exports.default = Child;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBMkI7QUFDM0IsOENBQStDO0FBVS9DLElBQXFCLEtBQUs7SUFBUyx5QkFBRztJQUR0QztRQUFBLHFFQW9CQztRQWZBLFVBQUksR0FBRyxPQUFPLENBQUE7O0lBZWYsQ0FBQztJQWJBLG1CQUFHLEdBQUg7UUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFDRCxtQkFBRyxHQUFIO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBQ0QscUJBQUssR0FBTCxVQUFNLEdBQVc7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBQ0YsWUFBQztBQUFELENBQUMsQUFuQkQsQ0FBbUMsR0FBRyxHQW1CckM7QUFqQkE7SUFEQyxHQUFHLENBQUMsSUFBSSxFQUFFOzt1Q0FDWTtBQUZILEtBQUs7SUFEekIsR0FBRyxDQUFDLFNBQVMsRUFBRTtHQUNLLEtBQUssQ0FtQnpCO2tCQW5Cb0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgPSByZXF1aXJlKCd2dWUnKVxuaW1wb3J0ICogYXMgdnRzIGZyb20gJ3Z1ZS10eXBlc2NyaXB0LWNvbXBvbmVudCdcblxuLy8gaXQgaXMgYWxzbyBwb3NzaWJsZSB0byB1c2UgYSBjb21wbGV4IGludGVyZmFjZSB0aGF0IGFsbG93cyBjb21waWxlLXRpbWUgdHlwZSBjaGVja2luZ1xuZXhwb3J0IGludGVyZmFjZSBDaGlsZExpc3RlbmVyIHtcblx0aW5jKCk6IHZvaWRcblx0ZGVjKCk6IHZvaWRcblx0Z3JlZXQodGV4dDogU3RyaW5nKTogdm9pZFxufVxuXG5AdnRzLmNvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGlsZCBleHRlbmRzIFZ1ZSB7XG5cdEB2dHMucHJvcCgpXG5cdGxpc3RlbmVyOiBDaGlsZExpc3RlbmVyXG5cblx0bmFtZSA9ICdjaGlsZCdcblxuXHRpbmMoKSB7XG5cdFx0dGhpcy5saXN0ZW5lci5pbmMoKVxuXHR9XG5cdGRlYygpIHtcblx0XHR0aGlzLmxpc3RlbmVyLmRlYygpXG5cdH1cblx0Z3JlZXQobXNnOiBTdHJpbmcpIHtcblx0XHR0aGlzLmxpc3RlbmVyLmdyZWV0KG1zZylcblx0fVxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0dGhpcy5pbmMoKVxuXHR9XG59XG4iXX0=