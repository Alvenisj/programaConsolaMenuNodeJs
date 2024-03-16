


























// FORMA MUY BÁSICA PARA ENTENDER LA CREACIÓN DE UN PROGRAMA DE CONSOLA QUE PERMITA SELECCIONAR OPCIONES  

// require('colors');


// const mostrarMenu =  ( ) => {

//     return new Promise( ( resolve ) => {
//         console.clear();
//         console.log('============================================'.green);
//         console.log('       Seleccione una opción  '.green);
//         console.log('============================================\n'.green);

//         console.log(`${ '1.'.green } Crear tarea`);
//         console.log(`${ '2.'.green } Listar tareas`);
//         console.log(`${ '3.'.green } Listar tareas completada`);
//         console.log(`${ '4.'.green } Listar tareas pendientes`);
//         console.log(`${ '5.'.green } Completar tarea(s)`);
//         console.log(`${ '6.'.green } Borrar tarea`);
//         console.log(`${ '0.'.green } Salir\n`);

//         // USAMOS EL PAQUETE readline QUE YA VIENE CON NODEJS Y USAMOS EL MÉTODO createInterface({})
//         const readline = require('readline')
//                             .createInterface({
//                                 input: process.stdin,
//                                 output: process.stdout
//                             });

//         // USAMOS LA INSTANCIA CREADA DE readline
//         readline.question('Seleccione una opción: ', ( opt ) => {
//             readline.close();
//             resolve( opt );
//         })  

//         });

// }


// const pause = ( ) => {

//      return new Promise( ( resolve, reject ) => {
//         // USAMOS EL PAQUETE readline QUE YA VIENE CON NODEJS Y USAMOS EL MÉTODO createInterface({})
//         const readline = require('readline')
//         .createInterface({
//            input: process.stdin,
//            output: process.stdout
//          });

//        // USAMOS LA INSTANCIA CREADA DE readline
//        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, ( opt ) => {
//        readline.close();
//        resolve( opt );
//        })  
//      })

// }


// module.exports = {
//     mostrarMenu,
//     pause
// }