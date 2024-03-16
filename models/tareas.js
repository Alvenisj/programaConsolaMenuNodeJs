import { Tarea } from "./tarea.js";

export class Tareas {

    // INICIALIZAMOS EL OBJETO DE LA CLASE TAREAS EN PLURAL
    _listado = {};

    // GETTER QUE SE ENCARGA DE CREAR UN ARRAY DE OBJETOS
    get listadoArr() {
        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea )
        });
        return listado;
    }

        // CONSTRUCTOR DE LA CLASE TAREAS
        constructor( ) {
             this._listado = {};
        }

        // MÉTODO QUE CARGA LAS TAREAS DESDE EL ARRAY
        cargarTareasFromArray( tareas = [ ] ) {

            tareas.forEach( tarea => {
                this._listado[tarea.id] = tarea;
                // console.log(tarea);
            })

        }

        // MÉTODO QUE SE ENCARGA DE BORRAR TAREAS
        borrarTarea( id = '' ) {

            if( this._listado[id] ) {
                delete this._listado[id];
            }
        }

        // MÉTODO CON EL QUE CREAMOS LA TAREA
        crearTarea( desc = '' ) {
            
            const tarea = new Tarea(desc);
            this._listado[tarea.id] = tarea

        }

        // MÉTODO QUE SE ENCARGA DE MOSTRAR EL LISTADO COMPLETO DE LAS TAREAS
        listadoCompletoTareas( ) {
            
            console.log();
            this.listadoArr.forEach( (tarea, index ) => {
                const idx = `${index + 1}`.green;
                const { desc, completadoEn } = tarea;

                const estado = ( completadoEn )
                             ? 'Completada'.green
                             : 'Pendiente'.red

                console.log(` ${ idx }. ${ desc } :: ${ estado } `);

               
            })
        }

        // MÉTODO QUE SE ENCARGA DE LISTAR TAREAS COMPLETADAS O PENDIENTES
        listarCompletadasPendientes( completadas = true ) {

            console.log();
            let contador = 0;
            this.listadoArr.forEach( tarea => {
                const { desc, completadoEn } = tarea;
                const estado = ( completadoEn )
                             ? 'Completada'.green
                             : 'Pendiente'.red

                if( completadas ) {
                    // MOSTRAR TAREAS COMPLETADAS
                    if( completadoEn ) {
                        contador += 1;
                        console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                    }

                } else {
                    // MOSTRAR TAREAS NO COMPLETADAS
                    if( !completadoEn ) {
                        contador += 1;
                        console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                    }

                }
            })

        }



        // MÉTODO QUE SE ENCARGA DE CAMBIAR LAS TAREAS A COMPLETADAS
        toggleTareasCompletadas( ids = [] ) {
                // SACAMOS TODOS LOS ID QUE FUERON SELECCIONADOS, ES DECIR, QUEDAN "COMPLETADA" LA TAREA
                ids.forEach( id => {
                    const tarea = this._listado[id];
                    // console.log(tarea)
                    if( !tarea.completadoEn ) {
                        tarea.completadoEn = new Date().toISOString()
                    }
                });

                // SACAMOS TODOS LOS ID QUE NO FUERON SELECCIONADOS, ES DECIR, QUEDAN "PENDIENTE" LA TAREA
                this.listadoArr.forEach( tarea => {

                    if( !ids.includes( tarea.id ) ) {
                        this._listado[tarea.id].completadoEn = null;
                    }
                })  


        }

}