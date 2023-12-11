const controller = {};
controller.list = (req, res)=>{
    res.send('list world');
};
controller.save = (req, res)=>{
    res.send('save world');
};
controller.delete = (req, res)=>{
    res.send('delete world');
};
module.exports = controller;