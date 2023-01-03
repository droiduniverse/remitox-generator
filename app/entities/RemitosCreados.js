"use strict";
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
exports.RemitosCreados = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let RemitosCreados = class RemitosCreados {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "id_item", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "nro_remito", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente, (cliente) => cliente.id),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "cliente_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "sin descripcion" }),
    __metadata("design:type", String)
], RemitosCreados.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], RemitosCreados.prototype, "total_item", void 0);
RemitosCreados = __decorate([
    (0, typeorm_1.Entity)("remitos_creados")
], RemitosCreados);
exports.RemitosCreados = RemitosCreados;
//# sourceMappingURL=RemitosCreados.js.map