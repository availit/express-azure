
/*
 * Routes Index
 */

 const apiRoutes = require('./api_routes');
 const userRoutes = require('./user');

 module.exports = (app, pool, sql) => {
 	apiRoutes(app, pool, sql);
 	userRoutes(app, pool, sql);
 };
