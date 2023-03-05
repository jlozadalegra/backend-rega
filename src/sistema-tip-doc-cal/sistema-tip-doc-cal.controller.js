"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.SistemaTipDocCalController = void 0;
var common_1 = require("@nestjs/common");
var SistemaTipDocCalController = /** @class */ (function () {
    function SistemaTipDocCalController(sistemaTipDocCalService) {
        this.sistemaTipDocCalService = sistemaTipDocCalService;
    }
    SistemaTipDocCalController.prototype.create = function (createSistemaTipDocCalDto) {
        return this.sistemaTipDocCalService.create(createSistemaTipDocCalDto);
    };
    SistemaTipDocCalController.prototype.findAll = function () {
        return this.sistemaTipDocCalService.findAll();
    };
    SistemaTipDocCalController.prototype.findOne = function (id) {
        return this.sistemaTipDocCalService.findOne(id);
    };
    SistemaTipDocCalController.prototype.editRecord = function (id, updateSistemaTipDocCalDto) {
        return this.sistemaTipDocCalService.editRecord(id, updateSistemaTipDocCalDto);
    };
    SistemaTipDocCalController.prototype.remove = function (id) {
        return this.sistemaTipDocCalService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SistemaTipDocCalController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SistemaTipDocCalController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaTipDocCalController.prototype, "findOne");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SistemaTipDocCalController.prototype, "editRecord");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaTipDocCalController.prototype, "remove");
    SistemaTipDocCalController = __decorate([
        (0, common_1.Controller)('sistema-tip-doc-cal')
    ], SistemaTipDocCalController);
    return SistemaTipDocCalController;
}());
exports.SistemaTipDocCalController = SistemaTipDocCalController;