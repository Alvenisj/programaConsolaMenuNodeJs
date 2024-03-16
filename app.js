// FORMA MÁS EFICIENTE Y MODERNA DE HACER UN PROGRAMA DE CONSOLA USANDO EL PAQUETE INQUIRER
import colors from 'colors';
// import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

import { 
    inquirerMenu, 
    pause, 
    leerInputs, 
    listadoTareasBorrar, 
    confirmarTareaEliminada,
    mostrarListadoChecklist} from './helpers/inquirer.js';

import { guardarInformacion, 
        leerInformacion } from './helpers/guardarArchivo.js';




const main = async ( ) => {

    let opt = '';
    // INSTANCIA DE LAS TAREAS
    const tareas = new Tareas();

    // LEEMOS LA INFORMACIÓN 
    const tareasDB = leerInformacion();
    if( tareasDB ) {
        // ENVIAMOS EL ARRAY QUE RECIBIMOS DESDE LA FUNCIÓN leerInformacion()
       tareas.cargarTareasFromArray( tareasDB);

    }

        // await pause();

        do {
            // IMPRIME EL MENÚ
            opt = await inquirerMenu();
            // console.log({ opt });
            switch ( opt ) {
                case '1':
                    // CREAR TAREA
                    const desc = await leerInputs('Descripcion: ');
                    tareas.crearTarea( desc )
                    break;
                case '2':
                    // LISTAR TAREAS
                    tareas.listadoCompletoTareas( );
                    break;
                case '3':
                    // LISTAR TAREAS COMPLETADAS
                    tareas.listarCompletadasPendientes(true);
                    break;
                case '4':
                    // LISTAR TAREAS PENDIENTES
                    tareas.listarCompletadasPendientes(false);
                    break;
                case '5':
                    // COMPLETAR TAREAS
                    const ids = await mostrarListadoChecklist( tareas.listadoArr );
                    tareas.toggleTareasCompletadas( ids );
                    break;
                case '6':
                    // BORRAR TAREA
                    const id = await listadoTareasBorrar( tareas.listadoArr );
                    if( id !== '0' ) {
                        // HACEMOS LA CONFIRMACIÓN
                     const borrar = await confirmarTareaEliminada('¿Seguro deseas eliminar la tarea?');
                        if( borrar ) {
                            tareas.borrarTarea(id);
                            console.log('\n');
                            console.log( `\tTarea borrada exitosamente...`.green );
                        }
                    }
                    
                    break;
            }

            guardarInformacion( tareas.listadoArr  );
             console.log('\n');
             await pause();

        } while( opt !== '0' );

}



main();



            // EJEMPLO Y CORRIDA EN FRÍO DE LAS DOS CLASES CREADAS
            //   const tarea = new Tarea('Comprar comida');
            //   const tareas = new Tareas();
            //   tareas._listado[tarea.id] = tarea;

            //     // ESTAMOS CREANDO LO SIGUIENTE:
            //     // Tareas {
            //     //     _listado: {
            //     //       '8eddc95c-3e88-431d-abe0-a558fb92d9ca': Tarea {
            //     //         id: '8eddc95c-3e88-431d-abe0-a558fb92d9ca',
            //     //         desc: 'Comprar comida',
            //     //         completadoEn: null
            //     //       }
            //     //     }
            //     //   }
            // //  console.log(tarea)



// FORMA MUY BÁSICA PARA ENTENDER LA CREACIÓN DE UN PROGRAMA DE CONSOLA QUE PERMITA SELECCIONAR OPCIONES  

// require('colors');

// const { mostrarMenu, pause } = require('./helpers/mensajes');

// console.clear();

// const main = async (  ) => {

    
//     console.log('Hola mundo con nodejs');
//     let opt = '';
//     do {

//        opt = await mostrarMenu();
//         console.log({ opt })
//         if( opt !== '0' )  await pause();

//     } while( opt !== '0' );


// }

// main();