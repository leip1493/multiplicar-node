const argv = require('./config/yargs').argv; // Archivo para pasar parametros por consola   
const colors = require('colors/safe'); // Libreria para pintar los textos en la consola        
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla( argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then( archivo => console.log(`Archivo creado: ${colors.green(archivo)}`) )
            .catch( err => console.log(err) );
    break;
    default:
        console.log("Comando no reconocido");

}
