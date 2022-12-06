const fs=require('fs');

let listadoporhacer=[];

const guardardb=()=>{
    let data=JSON.stringify(listadoporhacer);
    fs.writeFile('bd/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo grabar',err);
    });
}
const cargardb=()=>{
    try{
        listadoporhacer=require('../bd/data.json');
    }catch(error){
        listadoporhacer=[];
    }   
}

const crear=(descripcion)=>{
    let porhacer={
        descripcion,
        completado: false
    };
    cargardb();
    listadoporhacer.push(porhacer);
    guardardb();
    return porhacer;
}

const getlistado=()=>{
    cargardb();
    return listadoporhacer;
}

const actualizar=(descripcion,completado=true)=>{
    cargardb();
    let index=listadoporhacer.findIndex(tarea=>{
        return tarea.descripcion===descripcion;
    });
    if(index>=0){
        listadoporhacer[index].completado=completado;
        guardardb();
        return true;
    }else{
        
        return false;
    }
}

const borrar=(descripcion)=>{
    cargardb();
    let index=listadoporhacer.findIndex(tarea=>{
        return tarea.descripcion==descripcion;
        
    });
    if(index>=0){
        listadoporhacer.splice(index,1);
        guardardb();
        return true;
    }else{
        console.log(index);
        return false;
    }

}

module.exports={
    crear,
    getlistado,
    actualizar,
    borrar
}