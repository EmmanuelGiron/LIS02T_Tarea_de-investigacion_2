//1- Se invoca express
const express=require('express');
const app =express();

//2- Se setea urlencode para capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3- invocar dtoenv para variables de entorno (.env)
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'})

//4 - Directorio Public
app.use('/resources',express.static('public'));
app.use('/resources',express.static(__dirname+ '/public'));

//5-Estrablecer el motor de plantillas
app.set('view engine','ejs');

//6- Invocar bcryptjs
const bcrypt=require('bcryptjs');

//7-Variables de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true

}));

//8-Invocamos al modulo de conexion
const connection= require('./database/db')





//9- Estableciendo las rutas
app.get('/',(req,res)=>{
    res.render('login');
})

app.get('/index',(req,res)=>{
    res.render('index', {msg: 'Anderson' });
})

app.get('/menu',(req,res)=>{
    res.render('menu');
})

app.get('/ver_c',(req,res)=>{
    res.render('ver_cupon');
})

app.get('/update',(req,res)=>{
    res.render('update');
})


//10 - Metodo para la autenticacion (login)
app.post('/auth', async (req, res)=> {
    //Capturando el valor con req.body.correo, correo es el nombre del input
	const correo = req.body.correo;
	const pass = req.body.pass;    
	if (correo&&pass) {
		connection.query('SELECT * FROM usuario WHERE Correo=?', [correo], async (error, results, fields)=> {
			if( results.length == 0||(pass!=results[0].Contrasenia)) {    
				res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "USUARIO y/o PASSWORD incorrectas",
                    alertIcon:'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login	'    
                });
				
				//Mensaje simple y poco vistoso
                //res.send('Incorrect correo and/or Password!');				
			} else {         
				//creamos una var de session y le asignamos true si INICIO SESSION       
				req.session.loggedin = true;                
				req.session.name = results[0].name;
				res.render('menu', {
					alert: true,
					alertTitle: "Conexión exitosa",
					alertMessage: "¡LOGIN CORRECTO!",
					alertIcon:'success',
					showConfirmButton: false,
					timer: 1500,
					ruta: ''
				});    	
			}			
			res.end();
		});
	} else {	
		res.send('Please enter user and Password!');
		res.end();
	}
});


/*Para verificar que las rutas funcionan*/
app.listen(5000, (req, res)=>{
    console.log('SERVER RUNNING IN http://Localhost:5000');
});