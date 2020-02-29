// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:
// Usuários e tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["Javascript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "NODE.js"] }
]

for (let _usuario of usuarios) {
    console.log(`${_usuario.nome} trabalha com ${_usuario.tecnologias}`)
}


// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
// Busca por tecnologia

function retornaSeUsaCSS(usuario) {
    for (let string of usuario.tecnologias) {
        if (string == "CSS") return true
        }
        return false
}

for (let i = 0; i < usuarios.length; i++){
    const usuarioTrabalhaComCSS = retornaSeUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O ${usuarios[i].nome} trabalha com CSS`);
    }
}
