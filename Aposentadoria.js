function Aposentadoria(){

    let idade = parseInt(prompt("Digite Sua Idade "));
    let temptrab = parseInt(0);
    let nome = prompt("Digite Seu Nome");
    let ano = parseInt(prompt("Digite Seu Ano De Nascimento"));
    let anoad = parseInt(prompt("Digite O Ano admissão: "));

    idade = (2022 - ano)
    temptrab = (2022 - anoad)

    if(idade >= 60 && temptrab>=25){

        document.write(nome + ": "+ " tem "+ idade + " Anos ")

        document.write("Trabalhou: " + temptrab + " Anos " +"  E Requer aposentadoria")

    }

    else {

        document.write(nome +": "+ " tem " + idade + " Anos ")
        document.write("Trabalhou: " + temptrab + " Anos " +" E Não Requer Aposentadoria")

    }

    console.log(idade)
    console.log(ano)
    console.log(anoad)

}