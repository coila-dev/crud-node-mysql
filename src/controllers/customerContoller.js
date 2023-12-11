const controller = {};
controller.list = (req, res)=>{
    // res.send('list world');
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err,customers)=>{
            if (err) {
                res.json(err);
            }
            console.log(customers);
            res.render('customers');
        });
    });
};
// controller.save = (req, res)=>{
//     res.send('save world');
// };
// controller.delete = (req, res)=>{
//     res.send('delete world');
// };
module.exports = controller;