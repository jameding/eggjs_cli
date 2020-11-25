/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {});

	// 以后关闭   https://eggjs.org/zh-cn/basics/router.html
	config.security = {
		csrf: {
			enable: false
		}
	};

	// 表单验证的时候，string转number类型.   https://blog.csdn.net/qq_32674347/article/details/104103168
	config.validate = {
		convert: true,
		widelyUndefined: true
	};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1605175163235_6080';

	// add your middleware config here
	config.middleware = ['setResult'];
	// 设置中间件的配置数据，案例
	config.setResult = {
		threshold: 1024 // 小于 1k 的响应体不压缩
	};

	// 启动项配置
	config.cluster = {
		listen: {
			port: 5002,
			hostname: '127.0.0.1' // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
			// path: '/var/run/egg.sock',
		}
	};

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	// mysql config here
	config.mysql = {
		// 单数据库信息配置
		client: {
			// host
			host: '192.168.64.2',
			// 端口号
			port: '3306',
			// 用户名
			user: 'root',
			// 密码
			password: '',
			// 数据库名
			database: 'center_server'
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false
	};

	return {
		...config,
		...userConfig
	};
};
