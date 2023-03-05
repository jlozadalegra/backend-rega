"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SistemaProcDest = void 0;
var sistema_reg_1 = require("../../../../../../../../src/sistema-reg");
var typeorm_1 = require("typeorm");
var sistema_proc_dest_enum_1 = require("./sistema-proc-dest.enum");
var SistemaProcDest = /** @class */ (function () {
    function SistemaProcDest() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({
            type: 'varchar',
            length: 4,
            "default": '0'
        })
    ], SistemaProcDest.prototype, "Co_pdest");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 100
        })
    ], SistemaProcDest.prototype, "descripcionpdest");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": sistema_proc_dest_enum_1.DEL_SIT,
            "default": [sistema_proc_dest_enum_1.DEL_SIT.NO]
        })
    ], SistemaProcDest.prototype, "del_sit");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sistema_reg_1.SistemaReg; }, function (sistemaReg) { return sistemaReg.Co_pdest; })
    ], SistemaProcDest.prototype, "sistemareg");
    SistemaProcDest = __decorate([
        (0, typeorm_1.Entity)('sistema_proc_dest')
    ], SistemaProcDest);
    return SistemaProcDest;
}());
exports.SistemaProcDest = SistemaProcDest;
