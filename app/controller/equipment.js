'use strict';

const Controller = require('egg').Controller;

class EquipmentController extends Controller {
	// 条件查询
	async check() {
		const { ctx, app } = this;
		// 校验参数
		const paramsRule = { page: { type: 'number', min: 1 }, pagesize: { type: 'number', max: 10, min: 1 } };
		if (ctx.service.validator.validate(paramsRule, ctx.query)) return;
		// 开始查询
		try {
			let resData = await ctx.service.equipment.check('', ctx.query.page, ctx.query.pagesize ? 1 : 10);
			console.log('查询到奥了~~112233');
			ctx.body = resData;
		} catch (e) {
			// 操作失败的情况
			ctx.body = this.ctx.helper.errorCode(1005);
		}
	}
	// 设备详情
	async detail() {
		const { ctx, app } = this;
		// 校验参数
		const paramsRule = { id: 'number' };
		if (ctx.service.validator.validate(paramsRule, ctx.params)) return;
		// 开始查询数据
		try {
			let resData = await ctx.service.equipment.detail(ctx.params.id);
			if (resData) {
				ctx.body = resData;
			} else {
				ctx.body = {};
			}
		} catch (e) {
			// 操作失败的情况
			ctx.body = this.ctx.helper.errorCode(1005);
		}
	}
}

module.exports = EquipmentController;
