function media() {
    let nota1 = Number(prompt("Digite sua primeira nota."));
    console.log(nota1);
    let nota2 = Number(prompt("Digite sua segunda nota."));
    console.log(nota2);
    let nota3 = Number(prompt("Digite sua terceira nota."));
    console.log(nota3);
    let nota4 = Number(prompt("Digite sua quarta nota."));
    console.log(nota4);

    var resultado = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(resultado);

    if (resultado >= 7) {
            console.log ("Você foi aprovado.");
    }   else if (resultado <7 && resultado >= 5) {
            console.log("Você precisa fazer recuperação.");
    }   else if (resultado < 5) {
            console.log("Você está reprovado.");
    }
}

media();

