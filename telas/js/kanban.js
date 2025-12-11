let tarefaEditandoId = null;

window.onload = function() {
    atualizarColunas();
};

function atualizarColunas() {
    document.getElementById('todo').innerHTML = '<h2>A Fazer</h2>';
    document.getElementById('doing').innerHTML = '<h2>Em andamento</h2>';
    document.getElementById('done').innerHTML = '<h2>Executado</h2>';

    const tarefas = JSON.parse(localStorage.getItem("kanban_tarefas")) || [];

    tarefas.forEach(tarefa => {
        criarCardNaTela(tarefa);
    });
}

function criarCardNaTela(tarefa) {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    // Mostra o Título e o Executante no card
    card.innerText = `${tarefa.titulo}\n(${tarefa.executante})`;
    
    card.onclick = function() { editar(tarefa.id); };

    let colunaDestino;
    if (tarefa.status == 1) colunaDestino = 'todo';
    else if (tarefa.status == 2) colunaDestino = 'doing';
    else colunaDestino = 'done';

    document.getElementById(colunaDestino).appendChild(card);
}

function editar(id) {
    tarefaEditandoId = id;
    const tarefas = JSON.parse(localStorage.getItem("kanban_tarefas")) || [];
    const tarefa = tarefas.find(t => t.id === id);

    if (tarefa) {
        const modal = document.getElementById('editBox');
        modal.style.display = 'block';

        // 1. Carregar Status Atual
        document.getElementById("status").value = tarefa.status;

        // 2. Carregar Título Atual
        document.getElementById("editTitulo").value = tarefa.titulo;

        // 3. Carregar Usuários no Select
        const selectUsuarios = document.getElementById("editExecutante");
        const usuarios = JSON.parse(localStorage.getItem("kanban_usuarios")) || [];
        
        selectUsuarios.innerHTML = ""; // Limpa opções antigas
        
        usuarios.forEach(user => {
            const option = document.createElement("option");
            option.value = user.nome;
            option.innerText = user.nome;
            
            // Se for o executante atual, já deixa selecionado
            if (user.nome === tarefa.executante) {
                option.selected = true;
            }
            selectUsuarios.appendChild(option);
        });
    }
}

function salvar() {
    // Pega os valores dos campos pelo ID que criamos
    const novoStatus = document.getElementById("status").value;
    const novoTitulo = document.getElementById("editTitulo").value;
    const novoExecutante = document.getElementById("editExecutante").value;
    
    let tarefas = JSON.parse(localStorage.getItem("kanban_tarefas")) || [];
    
    const index = tarefas.findIndex(t => t.id === tarefaEditandoId);
    if (index !== -1) {
        // Atualiza o objeto da tarefa
        tarefas[index].status = novoStatus;
        tarefas[index].titulo = novoTitulo;
        tarefas[index].executante = novoExecutante;
        
        localStorage.setItem("kanban_tarefas", JSON.stringify(tarefas));
    }

    document.getElementById('editBox').style.display = 'none';
    atualizarColunas(); // Recarrega a tela para mostrar as mudanças
}

function fecharEdicao() {
    document.getElementById('editBox').style.display = 'none';
}