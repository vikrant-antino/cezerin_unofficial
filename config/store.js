// config used by store client side only
module.exports = {
	// store UI language
	language: 'en',
	ajaxBaseUrl:`http://localhost:${process.env.PORT}/ajax` || 'http://localhost:3001/ajax'
};
