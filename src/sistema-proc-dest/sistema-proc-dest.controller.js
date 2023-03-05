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
exports.SistemaProcDestController = void 0;
var common_1 = require("@nestjs/common");
var SistemaProcDestController = /** @class */ (function () {
    function SistemaProcDestController(sistemaProcDestService) {
        this.sistemaProcDestService = sistemaProcDestService;
    }
    SistemaProcDestController.prototype.create = function (createSistemaProcDestDto) {
        return this.sistemaProcDestService.create(createSistemaProcDestDto);
    };
    SistemaProcDestController.prototype.findAll = function () {
        return this.sistemaProcDestService.findAll();
    };
    SistemaProcDestController.prototype.findOne = function (id) {
        return this.sistemaProcDestService.findOne(id);
    };
    SistemaProcDestController.prototype.editRecord = function (id, updateSistemaProcDestDto) {
        return this.sistemaProcDestService.editRecord(id, updateSistemaProcDestDto);
    };
    SistemaProcDestController.prototype.remove = function (id) {
        return this.sistemaProcDestService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], SistemaProcDestController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], SistemaProcDestController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaProcDestController.prototype, "findOne");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SistemaProcDestController.prototype, "editRecord");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], SistemaProcDestController.prototype, "remove");
    SistemaProcDestController = __decorate([
        (0, common_1.Controller)('sistemaprocdest')
    ], SistemaProcDestController);
    return SistemaProcDestController;
}());
exports.SistemaProcDestController = SistemaProcDestController;
