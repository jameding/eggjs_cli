module.exports = (options, app) => {
	return async function setResult(ctx, next) {
		await next();
		// console.log('~~~~~~~~~~~~~~~~~~~~', options, app);
		if (ctx.body && !ctx.body.code) {
			// 如果返回结果里没有包含外层的结果信息，就包一层
			ctx.body = {
				code: 200,
				message: '',
				result: ctx.body
			};
		}
	};
};
