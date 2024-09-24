int tarefas = [];
let inputcaixa_01 = document.getElementById("caixa_01");
let btnAdicionar = document.getElementById("adicionar tarefa");
let adicionar_tarefa = document.getElementById("lista_tarefa");
//função de cadastro
btnAdicionar onclick = () => {
    //estou definindo uma ação para ser realizada quando o botão for clicado
    let caixa_01 = inputcaixa_01.ariaValue.trim();

    if (caixa_01){
        tarefa.push (Caixa_01);   
}
};

function atualizarlista(){
    tarefas.forEach((tarefa, index) => {
    let li = getElementById('li');
    li.textContent = tarefa;
    listatarefas.appendChild(li)

}

);
}

