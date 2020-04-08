
const app = require('./api/routes/routes')

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
        return res.status(200).json({});
    }
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error
    });
});

app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status = 404;
    next(error);    
});
module.exports = app;