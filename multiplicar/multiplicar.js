const fs = require("fs");
const colors = require('colors'); 

const listarTabla = (base, limite = 10 ) =>{

    console.log('========================='.green);
    console.log(`=== Tabla de  ${base} ===`.green);
    console.log('========================='.green);
    for(let i = 1; i <= limite; i++){
        console.log(`${base} x ${i} == ${base * i}`);
    }
}

const crearArchivo = (base, limite = 10) =>{
    return new Promise( (resolve, reject) =>{
        // Valida que la base sea un número
        if(isNaN(base)){
            reject(`Èl valor introducido ${base} no es un número.`);
            return;
        }
        let data = "";
        
        for(let i = 1; i <= limite; i++){
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}