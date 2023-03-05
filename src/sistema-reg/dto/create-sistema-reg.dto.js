"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSistemaRegDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var sistema_nombres_reg_1 = require("../../../../../../../../src/sistema-nombres-reg");
var sistema_proc_dest_1 = require("../../../../../../../../src/sistema-proc-dest");
var sistema_tip_doc_cal_1 = require("../../../../../../../../src/sistema-tip-doc-cal");
var sistema_tip_sal_entity_1 = require("../../../../../../../../src/sistema-tip-sal/entities/sistema-tip-sal.entity");
var sistema_unidad_reg_1 = require("../../../../../../../../src/sistema-unidad-reg");
var sistema_reg_enum_1 = require("../entities/sistema-reg.enum");
var CreateSistemaRegDto = /** @class */ (function () {
    function CreateSistemaRegDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateSistemaRegDto.prototype, "Co_nombre");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateSistemaRegDto.prototype, "Num_unidad_reg");
    __decorate([
        (0, class_validator_1.IsEnum)(sistema_reg_enum_1.ENT_SAL_ENUM)
    ], CreateSistemaRegDto.prototype, "ent_sal");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateSistemaRegDto.prototype, "Co_tdoc");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateSistemaRegDto.prototype, "aclar_adic");
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_transformer_1.Type)(function () { return Date; })
    ], CreateSistemaRegDto.prototype, "fecha");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateSistemaRegDto.prototype, "denomindoc");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateSistemaRegDto.prototype, "Co_pdest");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateSistemaRegDto.prototype, "Co_tipsal");
    __decorate([
        (0, class_validator_1.IsNumber)()
    ], CreateSistemaRegDto.prototype, "numejemp");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateSistemaRegDto.prototype, "year");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateSistemaRegDto.prototype, "repartir");
    return CreateSistemaRegDto;
}());
exports.CreateSistemaRegDto = CreateSistemaRegDto;
