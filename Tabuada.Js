function Tabuada() {

    let numero = parseFloat(prompt("Digite o número que deseja obter a tabuada"));
    
    if (numero > 0 && numero <= 10) {
        for (i=0; i<=10; i++)
        document.write(numero+ " x"+ i+ " = "+ numero * i + "<br>")
    }
    else{
        alert("Número Inválido!")
    }
    
    }