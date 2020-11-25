'use strict';

const Controller = require('egg').Controller;

class BeneficiaryController extends Controller {
	// 创建一个受益用户
	async insert() {
		const { ctx, app } = this;
		// 校验参数
		const paramsRule = {
			name: { type: 'string', max: 20 },
			sex: ['0', '1', '2'],
			nursing_level: ['1', '2', '3'],
			card_type: ['1', '2'],
			card_id: 'string',
			birthday: 'dateTime',
			anti_bedsore: ['0', '1']
		};
		if (ctx.service.validator.validate(paramsRule, ctx.request.body)) return;
		// 开始插入新数据
		try {
			let resData = await ctx.service.beneficiary.insert(ctx.request.body);
			ctx.body = resData;
		} catch (e) {
			// 操作失败的情况
			ctx.body = this.ctx.helper.errorCode(1005);
		}
	}
	// 删除一个账户
	async delete() {
		const { ctx, app } = this;
		// 校验参数
		const paramsRule = { id: 'number' };
		if (ctx.service.validator.validate(paramsRule, ctx.params)) return;
		// 开始删除数据
		try {
			let resData = await ctx.service.beneficiary.delete(ctx.params.id);
			if (resData.affectedRows === 1) {
				ctx.body = '删除成功';
			} else {
				// 没有此用户的情况
				ctx.body = this.ctx.helper.errorCode(3003);
			}
		} catch (e) {
			// 操作失败的情况
			ctx.body = this.ctx.helper.errorCode(1005);
		}
	}
}

module.exports = BeneficiaryController;
