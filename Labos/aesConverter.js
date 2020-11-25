const crypto = require('crypto');
const fs = require('fs');

function aesConverter(archivo, contraseña){

    if(!archivo) return console.error('El primer parametro debe ser el path del archivo a encriptar');
    if(!contraseña) return console.error('El segundo parametro debe ser la contraseña');

    let algoritmo = 'aes-256-cbc';

    let password_hash = crypto.createHash('md5').update(contraseña, 'utf-8').digest('hex').toUpperCase();

    let data = fs.readFileSync(archivo);

    let vector = new Buffer.alloc(16);

    let cipher = crypto.createCipheriv(algoritmo, password_hash, vector);
    let encryptedData = cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
    return encryptedData;
}

console.log(aesConverter("./archivo-ejemplo.txt", "una_password"))