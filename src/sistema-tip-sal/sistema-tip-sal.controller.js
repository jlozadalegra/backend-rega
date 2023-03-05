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
exports.SistemaTipSalController = void 0;
var common_1 = require("@nestjs/common");
var SistemaTipSalController = /** @class */ (function () {
    function SistemaTipSalController(sistemaTipSalService) {
        this.sistemaTipSalService = sistemaTipSalService;
    }
    SistemaTipSalController.prototype.create = function (createSistemaTipSalDto) {
        return this.sistemaTipSalService.create(createSistemaTipSalDto);
    };
    SistemaTipSalController.prototype.findAll = function () {
        return this.sistemaTipSalService.findAll();
    };
    SistemaTipSalController.prototype.findOne = function (id) {
        return this.sistemaTipSalService.findOne(id);
    };
    SistemaTipSalController.prototype.editRecord = function (id, updateSistemaTipSalDto) {
        return this.sistemaTipSalService.editRecord(id, updateSistemaTipSalDto);
    };
    SistemaTipSalController.prototype.remove = function (id) {
        return this.sistemaTipSalService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SistemaTipSalController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SistemaTipSalController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaTipSalController.prototype, "findOne");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SistemaTipSalController.prototype, "editRecord");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaTipSalController.prototype, "remove");
    SistemaTipSalController = __decorate([
        (0, common_1.Controller)('sistema-tip-sal')
    ], SistemaTipSalController);
    return SistemaTipSalController;
}());
exports.SistemaTipSalController = SistemaTipSalController;
