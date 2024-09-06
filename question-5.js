// Escreva um programa que inverta os caracteres de um string.

const initialString = "Eu adoro fazer exercícios Javascript!"

const invertString = (string) => {

    const invertedString = []

    for (let i = string.length - 1; i >= 0; i--) {
        invertedString.push(string[i])
    }


    return invertedString.join("")
}

console.log(invertString(initialString))