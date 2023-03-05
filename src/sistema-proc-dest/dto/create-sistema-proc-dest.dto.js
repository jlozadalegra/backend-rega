"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSistemaProcDestDto = void 0;
var class_validator_1 = require("class-validator");
var sistema_proc_dest_enum_1 = require("../entities/sistema-proc-dest.enum");
var CreateSistemaProcDestDto = /** @class */ (function () {
    function CreateSistemaProcDestDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: 'Debe escribir un Texto como código' }),
        (0, class_validator_1.IsNotEmpty)({
            message: 'El campo Código ProcDest no puede estar vacio'
        })
    ], CreateSistemaProcDestDto.prototype, "Co_pdest");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateSistemaProcDestDto.prototype, "descripcionpdest");
    __decorate([
        (0, class_validator_1.IsEnum)(sistema_proc_dest_enum_1.DEL_SIT)
    ], CreateSistemaProcDestDto.prototype, "del_sit");
    return CreateSistemaProcDestDto;
}());
exports.CreateSistemaProcDestDto = CreateSistemaProcDestDto;
