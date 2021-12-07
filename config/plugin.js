'use strict';

/** @type Egg.EggPlugin */
module.exports = {
	// had enabled by egg
	// static: {
	//   enable: true,
	// }
	mysql: {
		enable: true,
		package: 'egg-mysql'
	},
	validate: {
		enable: true,
		package: 'egg-validate'
	},
	// 登录token生成以及验证
	jwt: {
		enable: true,
		package: 'egg-jwt'
	}
};
