console.log("esta con esta")

for(i=0; i<10; i++){
console.log(i)
}
let a =100;

const sumar =()=>{
    
     b = 100;
return a+b
}



let z = 10
let x =z

console.log(z)
console.log(x)

z=11
console.log(z)
console.log(x)
const texto = "chabala dasd alidw dasidfnlaw"
const otexto= `dasmfdas fasñlfmas fas ff ${texto} ${z}`
console.log(otexto)

const persona = {
}

persona.edad=25
persona.nombre="pepe"
persona.sexo="mas"
console.log(persona)

console.log("edad" in persona )

for(const h in persona){
    console.log(persona[h] + "esta")
}

const persona2 = {
    nombres:{nombre1:"a",nombre2:"b"},
    edad: 55,
    sexo:"masc"
}
nuevo= persona2.nombres.nombre2
persona2.nombres.nombre2= "jaime"
console.log(nuevo)
persona2.ciudad="california"

Object.defineProperty(persona2, "preferencia", {"value":"macrista"})



console.log(persona2)

const {nombres: {nombre1: name}, edad:age} = persona2

const suma=(a)=>{
    return a + parseInt(age)
}

console.log(suma(5))

console.log(name)

class Persona{
    provincia="cordoba"
    constructor(nombre, edad){
        this.nombre = nombre.toUpperCase();
        this.edad=edad
    }
    hola(){return "soy " + this.nombre}
    adios(x){return "soy"+ this.nombre + "chau" + x}
    otro(x){return `soy ${x} adios ${this.nombre}`}
}


let e="jorge"

personax = new Persona("pepe", 6)
console.log(personax.hola())
console.log(personax.otro(e))
personax.hola()
console.log(personax)




class Personaje {
    name;
    energy;
  
    constructor(name, energy = 10) {
      this.name = name;
      this.energy = energy;
      console.log("soy un nuevo" + this.name + this.energy )
      console.log("agarrameW")
    }
    
    static despedida(){
        return "chau"
    }
    saludo(){
        return "adios"
    }
    
    get status() {
      return 'a'.repeat(this.energy);
    }
  
    set status(a) {
      this.energy = a.length;
    }
  }
  
  const mario = new Personaje("Mario");
  mario.energy    // 10
  mario.status = 'aaaaa'
  console.log(mario.energy)    // 3
  mario.status    // '⭐⭐⭐'
  console.log(mario.status
    )

    console.log(Personaje.despedida())
console.log(mario.saludo())

class Forma {
    type = "geométrica";
    color = "naranja";
  
    constructor() {
      console.log("Constructor padre finalizado.");
    }
  
    show() {
      console.log(`Soy una forma ${this.type} de color ${this.color}`);
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Cuadrado extends Forma {
    type = "cuadrada";
  
    constructor() {
      super();
console.log("Constructor hijo finalizado.");
    }
  }
  
  const c1 = new Cuadrado();
  c1.show();    // Soy una forma cuadrada de color naranja
  
  c1.setColor("amarillo");
  c1.show();