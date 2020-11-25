'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const { ctx, app } = this;
		// 校验参数
		const paramsRule = { title: { type: 'string' }, content: { type: 'string' } };
		if (ctx.service.validator.validate(paramsRule, ctx.query)) return;

		// 验证成功，继续走业务逻辑
		ctx.body = '这是home页面';
		// const client1 = await app.mysql.get('mattess_tcp_signal');
	}
}
module.exports = HomeController;
