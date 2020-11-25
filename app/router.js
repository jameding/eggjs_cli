'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;

	// 查询设备列表，多条件
	router.get('/', controller.home.index);

	/*
	 * 硬件相关的接口
	 */
	// 条件查询所有硬件设备
	router.get('/equipment/check', controller.equipment.check);
	// 查询特定设备，根据ID查询
	router.get('/equipment/:id', controller.equipment.detail);

	/*
	 * 受益用户相关的接口
	 */
	// 创建一个新用户
	router.post('/beneficiary', controller.beneficiary.insert);
	// 删除一个账户
	router.delete('/beneficiary/:id', controller.beneficiary.delete);
};
