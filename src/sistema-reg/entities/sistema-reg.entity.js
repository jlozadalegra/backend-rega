"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SistemaReg = void 0;
var sistema_nombres_reg_1 = require("../../../../../../../../src/sistema-nombres-reg");
var sistema_proc_dest_1 = require("../../../../../../../../src/sistema-proc-dest");
var sistema_tip_doc_cal_1 = require("../../../../../../../../src/sistema-tip-doc-cal");
var sistema_tip_sal_entity_1 = require("../../../../../../../../src/sistema-tip-sal/entities/sistema-tip-sal.entity");
var sistema_unidad_reg_1 = require("../../../../../../../../src/sistema-unidad-reg");
var typeorm_1 = require("typeorm");
var sistema_reg_enum_1 = require("./sistema-reg.enum");
var SistemaReg = /** @class */ (function () {
    function SistemaReg() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SistemaReg.prototype, "Co_reg");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sistema_nombres_reg_1.SistemaNombresReg; }, function (sistemanombresReg) { return sistemanombresReg.sistemareg; }),
        (0, typeorm_1.JoinColumn)({ name: 'Co_nombre' })
    ], SistemaReg.prototype, "Co_nombre");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sistema_unidad_reg_1.SistemaUnidadReg; }, function (sistemaUnidadReg) { return sistemaUnidadReg.sistemareg; }),
        (0, typeorm_1.JoinColumn)({ name: 'Num_unidad_reg' })
    ], SistemaReg.prototype, "Num_unidad_reg");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": sistema_reg_enum_1.ENT_SAL_ENUM,
            "default": [sistema_reg_enum_1.ENT_SAL_ENUM.RS]
        })
    ], SistemaReg.prototype, "ent_sal");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sistema_tip_doc_cal_1.SistemaTipDocCal; }, function (sistemaTipDocCal) { return sistemaTipDocCal.sistemareg; }),
        (0, typeorm_1.JoinColumn)({ name: 'Co_tdoc' })
    ], SistemaReg.prototype, "Co_tdoc");
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', width: 20 })
    ], SistemaReg.prototype, "num_reg");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 50 })
    ], SistemaReg.prototype, "aclar_adic");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date', "default": '0000-00-00' })
    ], SistemaReg.prototype, "fecha");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 200 })
    ], SistemaReg.prototype, "denomindoc");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sistema_proc_dest_1.SistemaProcDest; }, function (sistemaProcDest) { return sistemaProcDest.sistemareg; }),
        (0, typeorm_1.JoinColumn)({ name: 'Co_pdest' })
    ], SistemaReg.prototype, "Co_pdest");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sistema_tip_sal_entity_1.SistemaTipSal; }, function (sistemaTipSal) { return sistemaTipSal.sistemareg; }),
        (0, typeorm_1.JoinColumn)({ name: 'Co_tipsal' })
    ], SistemaReg.prototype, "Co_tipsal");
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', width: 10 })
    ], SistemaReg.prototype, "numejemp");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 4 })
    ], SistemaReg.prototype, "year");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 4, "default": 'R' })
    ], SistemaReg.prototype, "repartir");
    SistemaReg = __decorate([
        (0, typeorm_1.Unique)('co_reg_nr', [
            'Num_unidad_reg',
            'num_reg',
            'ent_sal',
            'year',
            'Co_pdest',
            'repartir',
        ]),
        (0, typeorm_1.Entity)('sistema_reg')
    ], SistemaReg);
    return SistemaReg;
}());
exports.SistemaReg = SistemaReg;
