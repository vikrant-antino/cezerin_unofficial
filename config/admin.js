// config used by dashboard client side only
module.exports = {
	// dashboard UI language
	language: 'en',
	apiBaseUrl: `http://localhost:${process.env.PORT}/api/v1` || 'http://localhost:3001/api/v1',
	apiWebSocketUrl: `ws://localhost:${process.env.PORT}` || 'ws://localhost:3001',
	developerMode: true
};
