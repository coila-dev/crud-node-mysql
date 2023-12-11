// const controller = {};
exports.lstData = (req, res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM datamigracion',(err,dataM)=>{
            if (err) {
                res.json(err);
            }
            console.log(dataM);
            res.json({
                data:dataM,
                success: true, 
                message: 'Listado'
            });
        });
    });
};
exports.save = (req,res)=>{
    const data = req.body;
    // console.log(data);
    // res.send('save world');
    // res.json({ data:data });
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO datamigracion SET ?',[data],(err,dataM)=>{
            if (err) {
                res.json(err);
            }
            res.json({
                data:dataM,
                success: true, 
                message: 'Guardado Correctamente'
            });
        });
    });
};

// module.exports = controller;