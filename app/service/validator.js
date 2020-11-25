'use strict';

const Service = require('egg').Service;

class DataValidator extends Service {
	// 根据controller传来的参数进行数据校验，如果错误直接抛出错误状态给前端
	validate(paramsRule, params) {
		let errs = this.app.validator.validate(paramsRule, params);
		if (errs) {
			// 验证失败，直接返回错误结果
			this.ctx.body = {
				code: 2001,
				message: '参数错误',
				result: errs
			};
			return true;
		} else {
			return false;
		}
	}
}

module.exports = DataValidator;
