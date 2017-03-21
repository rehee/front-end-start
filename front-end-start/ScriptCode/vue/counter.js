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
var CounterTs = (function (_super) {
    __extends(CounterTs, _super);
    function CounterTs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'counter';
        _this.count = 0;
        return _this;
    }
    CounterTs.prototype.inc = function () {
        this.count++;
    };
    CounterTs.prototype.dec = function () {
        this.count--;
    };
    Object.defineProperty(CounterTs.prototype, "opposite", {
        get: function () {
            return -this.count;
        },
        set: function (value) {
            this.count = -value;
        },
        enumerable: true,
        configurable: true
    });
    CounterTs.prototype.watchForSignChange = function (val, oldVal) {
        if (val === -oldVal) {
            this.$emit('signChanged');
        }
    };
    CounterTs.prototype.created = function () {
        this.count++;
    };
    return CounterTs;
}(Vue));
__decorate([
    vts.prop({ type: String, required: false }),
    __metadata("design:type", String)
], CounterTs.prototype, "fromParent", void 0);
__decorate([
    vts.watch('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], CounterTs.prototype, "watchForSignChange", null);
CounterTs = __decorate([
    vts.component()
], CounterTs);
exports.default = CounterTs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJCO0FBQzNCLDhDQUErQztBQUcvQyxJQUFxQixTQUFTO0lBQVMsNkJBQUc7SUFEMUM7UUFBQSxxRUFnQ0M7UUEzQkEsVUFBSSxHQUFHLFNBQVMsQ0FBQTtRQUNoQixXQUFLLEdBQUcsQ0FBQyxDQUFBOztJQTBCVixDQUFDO0lBeEJBLHVCQUFHLEdBQUg7UUFDQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDYixDQUFDO0lBQ0QsdUJBQUcsR0FBSDtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0MsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNuQixDQUFDO2FBQ0QsVUFBYSxLQUFhO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFDcEIsQ0FBQzs7O09BSEE7SUFNRCxzQ0FBa0IsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLE1BQWM7UUFDN0MsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLENBQUM7SUFDRixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFDRixnQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBdUMsR0FBRyxHQStCekM7QUE3QkE7SUFEQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUM7OEJBQzlCLE1BQU07NkNBQUE7QUFvQmxCO0lBREMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7Ozs7bURBS2xCO0FBMUJtQixTQUFTO0lBRDdCLEdBQUcsQ0FBQyxTQUFTLEVBQUU7R0FDSyxTQUFTLENBK0I3QjtrQkEvQm9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlID0gcmVxdWlyZSgndnVlJylcbmltcG9ydCAqIGFzIHZ0cyBmcm9tICd2dWUtdHlwZXNjcmlwdC1jb21wb25lbnQnXG5cbkB2dHMuY29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXJUcyBleHRlbmRzIFZ1ZSB7XG5cdEB2dHMucHJvcCh7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2V9KVxuXHRmcm9tUGFyZW50OiBTdHJpbmdcblxuXHRuYW1lID0gJ2NvdW50ZXInXG5cdGNvdW50ID0gMFxuXG5cdGluYygpIHtcblx0XHR0aGlzLmNvdW50Kytcblx0fVxuXHRkZWMoKSB7XG5cdFx0dGhpcy5jb3VudC0tXG5cdH1cblxuXHRnZXQgb3Bwb3NpdGUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gLXRoaXMuY291bnRcblx0fVxuXHRzZXQgb3Bwb3NpdGUodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuY291bnQgPSAtdmFsdWVcblx0fVxuXG5cdEB2dHMud2F0Y2goJ2NvdW50Jylcblx0d2F0Y2hGb3JTaWduQ2hhbmdlKHZhbDogbnVtYmVyLCBvbGRWYWw6IG51bWJlcikge1xuXHRcdGlmICh2YWwgPT09IC1vbGRWYWwpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ3NpZ25DaGFuZ2VkJylcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVkKCk6IHZvaWQge1xuXHRcdHRoaXMuY291bnQrK1xuXHR9XG59XG4iXX0=