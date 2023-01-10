function areaTriangulo() {
    const base = prompt("Informe a base do Triângulo:")
    const altura = prompt("Informe a altura do Triângulo:")
    return (base * altura) / 2
}

function areaRetangulo() {
    const base = prompt("Informe a base do Retângulo:")
    const altura = prompt("Informe a altura do Retângulo:")
    return base * altura
}

function areaQuadrado() {
    const base = prompt("Informe a base do Quadrado:")
    return base * base
}

function areaTrapezio() {
    const baseMaior = prompt("Informe a base maior do Trapézio:") 
    const baseMenor = prompt("Informe a base menor do Trapézio:") 
    const altura = prompt("Informe a altura Trapézio:") 
    return ((baseMaior + baseMenor) * altura) /2
}

function areaCirculo() {
    const raio = prompt("Informe a raio do Círculo:")
    return 3.14 * (raio * raio)
}

function mostraMenu(){
return prompt("Seja bemvindo à Calculadora geométrica\n" +
    "Escolha uma das opções abaixo para calcular:\n" +
    "1-Calcular área do triângulo\n" +
    "2-Calcular área do retângulo\n" +
    "3-Calcular área do quadrado\n" +
    "4-Calcular área do trapézio\n" +
    "5-Calcular área do círculo\n" +
    "6-Sair"
    )
}

function executar(){
    let opcao = ""
    let resultado = ""
    do {
        opcao = mostraMenu()
        switch(opcao){
            case "1": 
                resultado = alert("A área do seu Triângulo é " + areaTriangulo())
            break
            case "2": 
                resultado = alert("A área do seu Retângulo é " + areaRetangulo())
            break
            case "3": 
                resultado = alert("A área do seu Quadrado é " + areaQuadrado())
            break
            case "4": 
                resultado = alert("A área do seu Trapézio é " + areaTrapezio())
            break
            case "5": 
                resultado = alert("A área do seu Círculo é " + areaCirculo())
            }
    } while (opcao !== "6"){
        alert("Finalizando programa...")
    }
}


executar()