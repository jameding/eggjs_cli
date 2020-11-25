'use strict';

const Service = require('egg').Service;

class BeneficiaryService extends Service {
	// 创建受益用户
	async insert(insertData) {
		const resData = await this.app.mysql.insert('beneficiary_users', insertData);
		return resData;
	}
	// 删除一个账户
	async delete(benefit_id) {
		const resData = await this.app.mysql.delete('beneficiary_users', { benefit_id: benefit_id });
		return resData;
	}
	// ？？查询单个机器的信息
	async detail(mattess_id) {
		const resData = await this.app.mysql.get('mattess_equipment', { mattess_id: mattess_id });
		return resData;
	}
}

module.exports = BeneficiaryService;
