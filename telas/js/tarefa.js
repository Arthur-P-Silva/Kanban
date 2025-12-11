// Carregar os usuários no select assim que a página abre
window.onload = function() {
    const select = document.getElementById("executante");
    const usuarios = JSON.parse(localStorage.getItem("kanban_usuarios")) || [];

    // Limpa opções padrão
    select.innerHTML = "";

    usuarios.forEach(user => {
        const option = document.createElement("option");
        option.value = user.nome;
        option.innerText = user.nome;
        select.appendChild(option);
    });

    // Gera um ID aleatório para visualização
    document.querySelector(".row p").innerText = Math.floor(Math.random() * 10000);
};

function cadastrar() {
    const executante = document.getElementById("executante").value;
    const titulo = document.getElementById("titulo").value;
    const descricao = document.getElementById("descricao").value;

    if (!titulo || !descricao) {
        alert("Preencha todos os campos!");
        return;
    }

    let tarefas = JSON.parse(localStorage.getItem("kanban_tarefas")) || [];

    const novaTarefa = {
        id: Date.now(), // Gera um ID único baseado no tempo
        titulo: titulo,
        descricao: descricao,
        executante: executante,
        status: 1 // 1 = A Fazer, 2 = Em Andamento, 3 = Executado
    };

    tarefas.push(novaTarefa);
    localStorage.setItem("kanban_tarefas", JSON.stringify(tarefas));

    alert("Tarefa cadastrada com sucesso!");
    window.location.href = "../index.html"; // Volta para o Kanban
}

function voltar() {
    window.location.href = "../index.html";
}