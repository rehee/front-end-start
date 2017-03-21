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
Object.defineProperty(exports, "__esModule", { value: true });
var Vue = require("vue");
var vts = require("vue-typescript-component");
var Counter = require("./counter.vue");
var Parent = require("./parent.vue");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signChangeCount = 0;
        return _this;
    }
    App.prototype.childSignChanged = function () {
        this.signChangeCount++;
    };
    return App;
}(Vue));
App = __decorate([
    vts.component({ components: { Counter: Counter, Parent: Parent } })
], App);
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUMzQiw4Q0FBK0M7QUFDL0MsdUNBQXdDO0FBQ3hDLHFDQUFzQztBQUd0QyxJQUFxQixHQUFHO0lBQVMsdUJBQUc7SUFEcEM7UUFBQSxxRUFNQztRQUpBLHFCQUFlLEdBQUcsQ0FBQyxDQUFBOztJQUlwQixDQUFDO0lBSEEsOEJBQWdCLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFDRixVQUFDO0FBQUQsQ0FBQyxBQUxELENBQWlDLEdBQUcsR0FLbkM7QUFMb0IsR0FBRztJQUR2QixHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsRUFBQyxDQUFDO0dBQzFCLEdBQUcsQ0FLdkI7a0JBTG9CLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlID0gcmVxdWlyZSgndnVlJylcbmltcG9ydCAqIGFzIHZ0cyBmcm9tICd2dWUtdHlwZXNjcmlwdC1jb21wb25lbnQnXG5pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vY291bnRlci52dWUnXG5pbXBvcnQgKiBhcyBQYXJlbnQgZnJvbSAnLi9wYXJlbnQudnVlJ1xuXG5AdnRzLmNvbXBvbmVudCh7Y29tcG9uZW50czoge0NvdW50ZXIsIFBhcmVudH19KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgVnVlIHtcblx0c2lnbkNoYW5nZUNvdW50ID0gMFxuXHRjaGlsZFNpZ25DaGFuZ2VkKCkge1xuXHRcdHRoaXMuc2lnbkNoYW5nZUNvdW50Kytcblx0fVxufVxuIl19