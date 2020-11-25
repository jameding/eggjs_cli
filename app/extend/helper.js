module.exports = {
	errorCode(code) {
		let codeParam = {
			1001: '接口请求时间超限制',
			1002: '接口禁止访问',
			1003: '签名错误',
			1005: '操作失败',

			2001: '参数错误',

			3001: '获取歌曲详情出错',
			3002: '用户非法',
			3003: '用户不存在',
			3003: '数据不存在'
			// 3004:渠道非法
			// 3005:禁止获取详情
			// 3006:歌曲错误
			// 3007:渠道缺失
			// 3008:文件不存在
		};
		return {
			code: code,
			message: codeParam[code]
		};
		// this 是 helper 对象，在其中可以调用其他 helper 方法
		// this.ctx => context 对象
		// this.app => application 对象
	}
};
