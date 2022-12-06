const descripcion={
    demand:true,
    alias:'d',
    desc:'Descripcion de la tarea por hacer'
};

const completado={
    default:true,
    alias:'c',
    desc: 'Marca como compoletado o pendiente la tarea'
};


const argv =require('yargs')
    .command('crear','Crea un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualizar un elemento por hacer',{
        descripcion,
        completado
    }) 
    .command('borrar','Borra un elemento por hacer',{
            descripcion
    })
    .help()    
    .argv;

module.exports={
    argv
}
