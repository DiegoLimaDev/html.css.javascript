function calculadora() {
    const operacao = prompt("Escolha uma das operações abaixo:\n1- Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão Real\n5 - Divisão inteira\n6 - Potenciação");

    if (!operacao || operacao >= 7) {
            alert("Opção inválida.");
            calculadora();
    } else {
        let n1 = Number(prompt("Digite seu primeiro número:"));

        if (!n1) {
                alert("Sua entrada precisa ser numérica.");
                calculadora();
          
        } 
        let n2 = Number(prompt("Digite seu segundo número:"));
        let resultado;
        if (!n2) {
                alert("Sua entrada precisa ser númerica.");
                calculadora();


        } else { function adicao() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                nova_operacao();
            }
        
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                nova_operacao();
            }
        
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                nova_operacao();
            }
        
            function divisao_real() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                nova_operacao();
            }
        
            function divisao_inteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}.`);
                nova_operacao();
            }
        
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}.`);
                nova_operacao();
            }
        
            function nova_operacao(){
                let opcao = Number(prompt("Você deseja fazer uma nova operação?\n1 - Sim\n2 - Não."));
                if (opcao == 1) {
                        calculadora();
                }   else if (opcao == 2) {
                        alert("Até depois.");
                }   else {
                        alert("Digite uma opção válida.");
                        nova_operacao();
                }
            }
        }

        }

    if (operacao == 1) {
            adicao();
    }   else if (operacao == 2) {
            subtracao();
    }   else if (operacao == 3) {
            multiplicacao();
    }   else if (operacao == 4) {
            divisao_real();
    }   else if (operacao == 5) {
            divisao_inteira();
    }   else if (operacao == 6) {
            potenciacao();
    }
}

calculadora();