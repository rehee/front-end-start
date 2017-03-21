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
var Child = require("./child.vue");
var ParentTs = (function (_super) {
    __extends(ParentTs, _super);
    function ParentTs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'parent';
        _this.count = 0;
        return _this;
    }
    Object.defineProperty(ParentTs.prototype, "opposite", {
        get: function () {
            return -this.count;
        },
        enumerable: true,
        configurable: true
    });
    ParentTs.prototype.inc = function () {
        this.count++;
    };
    ParentTs.prototype.dec = function () {
        this.count--;
    };
    ParentTs.prototype.greet = function (text) {
        if (text === 'child') {
            this.$emit('signChanged');
            this.count = -this.count;
        }
    };
    return ParentTs;
}(Vue));
__decorate([
    vts.prop({ type: String, required: false }),
    __metadata("design:type", String)
], ParentTs.prototype, "fromParent", void 0);
ParentTs = __decorate([
    vts.component({ components: { Child: Child } })
], ParentTs);
exports.default = ParentTs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUMzQiw4Q0FBK0M7QUFLL0MsbUNBQW9DO0FBR3BDLElBQXFCLFFBQVE7SUFBUyw0QkFBRztJQUR6QztRQUFBLHFFQXlCQztRQXBCQSxVQUFJLEdBQUcsUUFBUSxDQUFBO1FBQ2YsV0FBSyxHQUFHLENBQUMsQ0FBQTs7SUFtQlYsQ0FBQztJQWpCQSxzQkFBSSw4QkFBUTthQUFaO1lBQ0MsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDOzs7T0FBQTtJQUdELHNCQUFHLEdBQUg7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0Qsc0JBQUcsR0FBSDtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFDRCx3QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBQ0YsZUFBQztBQUFELENBQUMsQUF4QkQsQ0FBc0MsR0FBRyxHQXdCeEM7QUF0QkE7SUFEQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQzlCLE1BQU07NENBQUE7QUFGRSxRQUFRO0lBRDVCLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBQyxVQUFVLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBQyxFQUFDLENBQUM7R0FDaEIsUUFBUSxDQXdCNUI7a0JBeEJvQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpXG5pbXBvcnQgKiBhcyB2dHMgZnJvbSAndnVlLXR5cGVzY3JpcHQtY29tcG9uZW50J1xuXG4vLyB0aGUgdHlwZS1zYWZlIExpc3RlbmVyIGludGVyZmFjZSBvZiB0aGUgY2hpbGRcbmltcG9ydCB7IENoaWxkTGlzdGVuZXIgfSBmcm9tICcuL2NoaWxkJ1xuLy8gdGhlIGNoaWxkIGNvbXBvbmVudFxuaW1wb3J0ICogYXMgQ2hpbGQgZnJvbSAnLi9jaGlsZC52dWUnXG5cbkB2dHMuY29tcG9uZW50KHtjb21wb25lbnRzOiB7Q2hpbGR9fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmVudFRzIGV4dGVuZHMgVnVlIGltcGxlbWVudHMgQ2hpbGRMaXN0ZW5lciB7XG5cdEB2dHMucHJvcCh7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2V9KVxuXHRmcm9tUGFyZW50OiBTdHJpbmdcblxuXHRuYW1lID0gJ3BhcmVudCdcblx0Y291bnQgPSAwXG5cblx0Z2V0IG9wcG9zaXRlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIC10aGlzLmNvdW50XG5cdH1cblxuXHQvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgaW1wbGVtZW50IHRoZSBDaGlsZExpc3RlbmVyIGludGVyZmFjZVxuXHRpbmMoKTogdm9pZCB7XG5cdFx0dGhpcy5jb3VudCsrXG5cdH1cblx0ZGVjKCk6IHZvaWQge1xuXHRcdHRoaXMuY291bnQtLVxuXHR9XG5cdGdyZWV0KHRleHQ6IFN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0ZXh0ID09PSAnY2hpbGQnKSB7XG5cdFx0XHR0aGlzLiRlbWl0KCdzaWduQ2hhbmdlZCcpXG5cdFx0XHR0aGlzLmNvdW50ID0gLXRoaXMuY291bnRcblx0XHR9XG5cdH1cbn1cbiJdfQ==