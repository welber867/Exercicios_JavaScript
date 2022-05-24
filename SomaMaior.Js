function Somamaior() {
    let Num1 = parseFloat(prompt("Digite o Número 1"));
    let Num2 = parseFloat(prompt("Digite o Número 2"));
    let Num3 = parseFloat(prompt("Digite o Número 3"));
    let NumMaior1 = 0;
    let NumMaior2 = 0;
    
    if (Num1 < Num2 && Num1 < Num3) {
          NumMaior1 = Num2
          NumMaior2 = Num3
    }
    else if (Num2 < Num1 && Num2 < Num3) {
            NumMaior1 = Num1
            NumMaior2 = Num3
    }
    else if (Num3 < Num1 && Num3 < Num2) {
            NumMaior1 = Num1
            NumMaior2 = Num2
    }
    
    Soma = NumMaior1 + NumMaior2
    
    alert("Maiores Números são: "+ NumMaior1+ " e "+ NumMaior2)
    alert("Soma: "+ Soma)
    
    }