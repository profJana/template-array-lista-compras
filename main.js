//Array consegue armazenar vários valores na mesma variável
//exemplo de um pronto:

//cada fruta dentro do array tem um índice, exemplo: 0, 1, 2
let idades = [28, 10, 15];

//criando um array vazio para representar o carrinho de compras
let carrinho = [];

//criando uma função que permite que o usuário adicione um item ao carrinho
function adicionarItem(){
    let item = prompt("Digite o nome do item:");
    carrinho.push(item)
    console.log(carrinho)
    console.log("clicou")
}

// criando uma função que permite que o usuário remova um item do carrinho
function removerItem(){
    let item = prompt("Digite o nome do item a ser removido:");

    //encontra a posição do item a ser removido na qual voce digitou
    if(index > -1){ //verifica se o item foi encontrado, pois o primeiro item tem que ser de 0 em diante, - 1 não existe
        
        //splice é usado para remover, o index é a posição do item correta e o 1 é apenas para removar 1 item
    }
}

function exibirCarrinho(){
    let carrinhoUl = document.getElementById("carrinho");
    carrinhoUl.innerHTML = ""; //limpa a lista antes de adicionar novamente
    for(let i=0; i < carrinho.length; i++){
        let itemLi = document.createElement("li"); //cria um elemento li (linha de uma lista)
        itemLi.innerText = carrinho[i]; //para cada li criada, coloca o nome de cada item
        
        //adicionando o elemento li como filho do elemento pai ul
    }
}
