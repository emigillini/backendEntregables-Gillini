console.log("asdsadasd")
console.log(1
    )
let persona={
    nombre:"juan",
    apellido:"roto",
    edad:45

}
let zz = 5;

let xx = `defmwekl efwefwe ${zz}`

console.log(persona.nombre + persona.edad+ "esta")

persona.nombre="pepe"
persona.pais="arg"
delete persona.nombre
console.log(xx)


const suma = (a, b)=>{
  
    return a+b

}

let z=suma(5,1)

console.log(z+5)

const lista = [2, 4, 5, 8, 10];

lista.forEach(element => {
    console.log(element+1)
    
});



console.log(lista.find((elemento) => elemento === 5)); // Salida: 5


class contador{
    constructor(responsable){
        this.responsable=responsable;
        this.conteo=0
    }

    static contador =0;

    getResponsable =()=>{
        return this.responsable

    }
    contar=()=>{
        this.conteo++;
        contador.contador++;
    }
    getCuentaindiv=()=>{
        return this.conteo

    }
    getVuentaGlobal=()=>{
        return contador.contador
    }
}

const contadir = new contador("mauru")
const conta = new contador("xxx")
contadir.contar()
contadir.contar()
contadir.contar()
console.log(contadir.conteo)
console.log(contadir.getResponsable())
console.log(contadir.conteo)
console.log(contadir.getCuentaindiv())
console.log(contadir.getVuentaGlobal())
console.log(conta.getVuentaGlobal())