class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
const personas = [
    // new Persona('Juan', 'Perez'),
    // new Persona('Carlos', 'Hernandez')
]
function mostrarPersonas() {
    let texto;
    for (let humano of personas) {
        texto += `<li>${humano._nombre} ${humano._apellido}</li>`
        document.getElementById('personas').innerHTML = texto
    };

    // personas.forEach(humano => {
    //     console.log(humano)
    //texto+=`<li>${humano.nombre} ${}</li>`
    // });
}
function agregarPersona() {
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'].value;
    const apellido = formulario['apellido'].value;
    if (nombre == "" || apellido=="") {
        alert("Campos vacios");
    }else {
        /*Se esta pasando como parametros las variables*/
        const persona = new Persona(nombre, apellido);
        //console.log(persona);
        personas.push(persona);
        mostrarPersonas();
        formulario.reset();
    }

};



