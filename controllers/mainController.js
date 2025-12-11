const mostraPaginaInicial = (req, res) => {

    dados = {
        mensagem:'rota raiz', 
        titulo:'pagina principal',

        // É possível enviar dados diretamente para testes da view sem precisar consultar o banco
        exemplos:[ 
            {
                campo1: 'L1 - Dados 1',
                campo2: 'L1 - Dados 2',
                campo3: 'L1 - Dados 3',
            },
            {
                campo1: 'L2 - Dados 1',
                campo2: 'L2 - Dados 2',
                campo3: 'L2 - Dados 3',
            }            
        ]
    }
    
    res.render('index', { dados:dados})

}

const mostraPaginaUsuario = (req, res) => {

    console.log('mainController.js','mostraPaginaUsuario()')

    dados = {
        mensagem:'rota usuario', 
        titulo:'Usuario exemplo',
    }

    res.render('novousuario', { dados:dados})

}

const mostraPaginaTarefa = (req, res) => {

    console.log('mainController.js','mostraPaginaTarefa()')

    dados = {
        mensagem:'rota tarefa', 
        titulo:'Tarefa exemplo',
    }

    res.render('novatarefa', { dados:dados})

}

module.exports =  {
    mostraPaginaInicial,
    mostraPaginaUsuario,
    mostraPaginaTarefa
};