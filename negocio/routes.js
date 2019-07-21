var control = require('./controlador');
//you can include all your controllers

module.exports = function (app) {
    //llamdo get
    app.get('/',control.consultaDatos);
    app.get('/consultar',control.consultaDatos);
    app.get('/update/:id', control.editar);
    app.get('/delete/:id', control.borrar);
    //llamdo post
    app.post('/insertar', control.insertar);
    app.post('/update/:id', control.actualiza);
    
}
