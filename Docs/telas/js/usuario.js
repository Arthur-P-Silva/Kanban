function cadastrar() {
    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;

    if (!email || !nome) {
        alert("Preencha todos os campos!");
        return;
    }

    // Pega a lista de usuários existente ou cria uma vazia
    let usuarios = JSON.parse(localStorage.getItem("kanban_usuarios")) || [];

    // Adiciona o novo usuário
    usuarios.push({ nome: nome, email: email });

    // Salva de volta no navegador
    localStorage.setItem("kanban_usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "../telas/novousuario.html";
}

function voltar() {
    window.location.href = "../index.html";
}