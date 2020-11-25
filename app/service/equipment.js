'use strict';

const Service = require('egg').Service;

class EquipmentService extends Service {
	// 根据controller传来的参数进行数据校验，如果错误直接抛出错误状态给前端
	async check(where = {}, page = 1, pagesize = 2, columns = '', orders = [['create_time', 'desc']]) {
		let sqlParam = {
			where: where, // 查询条件  { status: 'draft', author: ['author1', 'author2'] }
			columns: columns, // 要查询的表字段 ['author', 'title']
			orders: orders, // 排序方式  [['created_at','desc'], ['id','desc']]
			limit: pagesize, // 返回数据量
			offset: (page - 1) * pagesize // 数据偏移量
		};
		const resData = await this.app.mysql.select('mattess_equipment', sqlParam);
		return resData;
	}
	// 查询单个机器的信息
	async detail(mattess_id) {
		const resData = await this.app.mysql.get('mattess_equipment', { mattess_id: mattess_id });
		return resData;
	}
}

module.exports = EquipmentService;
