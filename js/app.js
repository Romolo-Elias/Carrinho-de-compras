let totalGeral = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 0

function adicionar(){
    let produto = document.getElementById('produto');
    produto = produto.value
    let quantidade = parseInt(document.getElementById('quantidade').value);

    //Separa nome e preco do produto;
    let partesProduto = produto.split('R$');
    let preco = parseInt(partesProduto[1] * quantidade);
    let nomeProduto = partesProduto[0];
    
    //Envia os produtos para o carrinho;
    let listaCarrinho = document.getElementById('lista-produtos');
    let sectionProdutos = document.createElement('section');
        if (!quantidade || quantidade <= 0) {
            alert("Informe uma quantidade válida!");
        return;
}


    sectionProdutos.classList.add('carrinho__produtos__produto');
    sectionProdutos.innerHTML = `<span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>`;

    listaCarrinho.appendChild(sectionProdutos);

    //Soma de todos os produtos
    totalGeral = totalGeral + preco 

    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`
    valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;
    document.getElementById('quantidade').value = 0
   
    
}

function limpar(){
    document.getElementById('valor-total').innerHTML = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    

}
