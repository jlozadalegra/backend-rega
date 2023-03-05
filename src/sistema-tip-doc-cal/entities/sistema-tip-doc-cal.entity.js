"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SistemaTipDocCal = void 0;
var sistema_reg_1 = require("../../../../../../../../src/sistema-reg");
var typeorm_1 = require("typeorm");
var SistemaTipDocCal = /** @class */ (function () {
    function SistemaTipDocCal() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 4 })
    ], SistemaTipDocCal.prototype, "Co_docu");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 50 })
    ], SistemaTipDocCal.prototype, "Desc_docu");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sistema_reg_1.SistemaReg; }, function (sistemaReg) { return sistemaReg.Co_tdoc; })
    ], SistemaTipDocCal.prototype, "sistemareg");
    SistemaTipDocCal = __decorate([
        (0, typeorm_1.Entity)('sistema_tipdocumcal')
    ], SistemaTipDocCal);
    return SistemaTipDocCal;
}());
exports.SistemaTipDocCal = SistemaTipDocCal;
