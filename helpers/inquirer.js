// FORMA MÁS EFICIENTE Y MODERNA DE HACER UN PROGRAMA DE CONSOLA USANDO EL PAQUETE INQUIRER
import inquirer from 'inquirer';

// LAS PREGUNTAS DEL MENÚ INICIAL
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green }  Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.green } Salir`
            }
        ]
    }
]

// CREAMOS EL MENÚ USANDO EL PAQUETE INQUIRER
export const inquirerMenu = async ( ) => {

    console.clear();
    console.log('============================================'.green);
    console.log('       Seleccione una opción  '.white);
    console.log('============================================\n'.green);

    const  { opcion }  = await inquirer.prompt(preguntas);

    return opcion;
}

// CREAMOS LA PAUSA
export const pause = async ( ) => {

    const preguntas = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'ENTER'.green } para continuar`
        }
    ];


    await inquirer.prompt(preguntas);

}


// FUNCIÓN QUE SE ENCARGA DE, esperar que el usuario ingrese algún valor. Si el usuario no ingresa nada, se le solicitará que lo haga nuevamente.
export const leerInputs = async ( message ) => {

    const pregunta = [
        {
            type: 'input',
            name: 'desc',
            message, // EL MENSAJE QUE RECIBE
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor, ingrese un valor';
                }
                return true;
            }
        }
    ];


    const { desc } = await inquirer.prompt(pregunta);

    return desc;

}


// FUNCIÓN QUE SE ENCARGA DE RETORNAR EL ID DE LA TAREA QUE QUEREMOS ELIMINAR
export const listadoTareasBorrar = async ( tareas = [] ) => {

    const choices = tareas.map( (tarea, index ) => {
        const idx = `${ index + 1 }.`.green;
        
        return {
           value: tarea.id,
           name: `${ idx } ${ tarea.desc }`
        }
    });

    // AGREGAMOS A LAS OPCIONES EL CANCELAR
    choices.unshift({
        value: '0',
        name: '0.'.green + ' - Cancelar -'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt( preguntas );
    return id;

}


// FUNCIÓN QUE SE ENCARGA DE CONFIRMAR LA ELIMINACIÓN DE LA TAREA RETORNANDO TRUE O FALSE
export const confirmarTareaEliminada = async ( message ) => {

    const  preguntas = [ 
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt( preguntas );
    return ok;

}


// FUNCIÓN QUE SE ENCARGA DE RETORNAR LAS TAREAS SELECCIONADAS COMO COMPLETADAS
export const mostrarListadoChecklist = async ( tareas = [] ) => {

    const choices = tareas.map( ( tarea, index ) => {

        const idx = `${ index + 1 }`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

   const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
   ]

   const { ids } = await inquirer.prompt( preguntas );
//    console.log(ids)
   return ids;

}



