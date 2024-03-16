import fs from 'fs';


const pathArchivo = './db/data.json';

// LA DATA LA RECIBIMO COMO UN ARRAY 
export const guardarInformacion  = ( data ) => {

    // EL MÉTODO writeFileSync() recibe dos parámetros, el primero es el path donde queremos que se guarde el archivo con la información y el segundo es la data -INFORMACIÓN- que se desea guardar permanentemente, pero antes usamos el método JSON.stringify() para convertir la data que llega en un array a cadena de caracteres.
    fs.writeFileSync(pathArchivo, JSON.stringify( data ) );
}


// CON ESTA FUNCIÓN LEEMOS EL ARCHIVO.JSON QUE SE CREA CON LA INFORMACIÓN QUE ALMACENA ADENTRO
export const leerInformacion = ( ) => {

    // CON EL MÉTODO existsSync PODEMOS VERIFICAR SI EL ARCHIVO EXISTE O NO EXISTE
    if( !fs.existsSync(pathArchivo) ) {
        return null;
    }

    // CON EL MÉTODO readFileSync PODEMO LEER EL ARCHIVO CREADO
    const info = fs.readFileSync(pathArchivo, { encoding: 'utf-8'} );
    // RECIBIMOS UN STRING, POR LO QUE DEBEMOS DESSEREALIZAR EL STRING Y PASARLO A ARRAY CON EL JSON.parse()
    const data = JSON.parse(info)
    // console.log(data);

    return data;
}