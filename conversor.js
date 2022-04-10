import entradaDados from 'readline-sync';

let escolha;
let mi;
let km;
let celsius;
let kelvin;
let base;
let altura;
let area;


do {

    console.log("\nFerramenta Top!\n");
    console.log(`
    1 - Milhas para Quilômetros
    2 - Celsius para Kelvin
    3 - Calcular Área do Triangulo
    4 - Sair
    `);

    escolha = entradaDados.question('Qual Conversor Deseja Utilizar? \n');
    escolha = Number(escolha);

    switch (escolha) {
        case 1:
            mi = entradaDados.question('Digite o valor em Milhas(mi): \n');
            km = Math.round(Number(mi) / 0.62137);
            console.log(`${mi}mi equivale a ${km}km\n`);
            break;

        case 2:
            celsius = entradaDados.question('Digite o valor em Celsius °C: \n');
            kelvin = Math.round(Number(celsius) + 273.15);
            console.log(`${celsius}°C equivale a ${kelvin}K\n`);
            break;

        case 3:
            base = entradaDados.question('Digite o valor da Base: ');
            altura = entradaDados.question('Digite o valor da Altura: ');
            area = Math.round(Number(base * altura) / 2);
            console.log(`\nA área do triangulo é ${area}\n`);
            break;

        case 4:
            console.log(`Conversor Finalizado.`);
            break;

        default:
            break;
    }

} while (escolha != 4);