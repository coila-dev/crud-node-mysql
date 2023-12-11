const panelApiRouter = require('../routes/apiRest');

exports.init = (app) => {
    app.use('/api', panelApiRouter);
};