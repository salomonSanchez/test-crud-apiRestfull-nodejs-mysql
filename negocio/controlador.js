const axios = require('axios');

//consultar, traer y redirigir datos a la vista.
exports.consultaDatos = function (req, res) {
	axios.get('http://localhost:3000/consultar')
		.then(response => {
			console.log(response.data);
			res.render("index", { Data: response.data })
		})
		.catch(error => {
			console.log(error);
		});
}

//insercion de datos en la BD
exports.insertar = (req, res) => {
	axios.post('http://localhost:3000/insertar', {
		nombre: req.body.nombre,
		peso: req.body.peso,
		genero: req.body.genero
	})
		.then(response => {
			console.log("RESPUESTA DEL SERVIDOR")
			console.log(response.data);
			res.redirect("/")

		})
		.catch(error => {
			console.log(error);
		});

}

//eliminacionde datos de la BD
exports.borrar = function (req, res) {
	var ID = req.params.id
	axios.get('http://localhost:3000/delete/' + ID)
		.then(response => {
			console.log(response.data);
			res.redirect("/")
		})
		.catch(error => {
			console.log(error);
		});
}

//modificacion de datos
exports.editar = function (req, res) {
	var ID = req.params.id
	axios.get('http://localhost:3000/update/' + ID)
		.then(response => {
			console.log(response.data);
			res.render("resultadosEditar", { Data: response.data })
		})
		.catch(error => {
			console.log(error);
		});
}

//actualizacion de datos
exports.actualiza = function (req, res) {
	var ID = req.params.id;

	axios.post('http://localhost:3000/update/' + ID, {
		nombre: req.body.nombre,
		peso: req.body.peso,
		genero: req.body.genero
	})
		.then(response => {
			console.log("RESPUESTA DEL SERVIDOR")
			console.log(response.data);
			res.redirect("/")
		})
		.catch(error => {
			console.log(error);
		});
}
