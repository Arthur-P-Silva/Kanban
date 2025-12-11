const dbExemplo = require('../db/dbConnect.js')

// CRUD PARA CADA CLASSE DA TABELA
class Tarefa {


    //CREATE
    //==============================================================================
    static async createTarefa(dados){

        const { titulo, nome, descricao } = dados
        // debug da função
        console.log('mainModel.js','Exemplo.createExemplo()')
        console.log(arguments);


        return await dbExemplo.executarQuery(
            'INSERT INTO tarefa(titulo, nome, descricao) VALUES (?, ?, ?)',
            [titulo, nome, descricao]
        )

    }        

    //READ
    //==============================================================================
    static async readAllExemplos(){
        
        // debug da função
        console.log('mainModel.js','Exemplo.readAllExemplos');
        console.log(arguments);


        return await dbExemplo.executarQuery('SELECT * FROM tarefa');
    }


    static async readExemplos(filtros = {}){

        // debug da função
        console.log('mainModel.js','Exemplo.readExemplos()')
        console.log(arguments);


        const {id_tarefa,titulo,nome,descricao} = filtros
 
        var query = 'SELECT * FROM tarefa WHERE '
        query+= 'id_tarefa LIKE ? '
        query+= 'AND titulo LIKE ? '
        query+= 'AND nome LIKE ? '
        query+= 'AND descricao LIKE ? '
        

        return  await dbExemplo.executarQuery(query,[`%${id_tarefa||''}%`, `%${titulo||''}%`,`%${nome||''}%`,`%${descricao||''}%`])
    }

    static async readExemplo(id){

        // debug da função
        console.log('mainModel.js','Exemplo.readExemplo()')
        console.log(arguments);

        return await dbExemplo.executarQuery('SELECT * FROM tarefa where id_tarefa = ?',[id]);

    }

    //UPDATE
    //==============================================================================
    static async updateExemplo(id,dados = {}){
        
        // debug da função
        console.log('mainModel.js','Exemplo.updateExemplo()')
        console.log(arguments);

        const {campo1,campo2,campo3} = dados

        const query = 'UPDATE tarefa SET titulo = ?, nome = ?, descricao = ? WHERE id_tarefa = ?';

        return dbExemplo.executarQuery(query,[campo1,campo2,campo3, id]);
    }

    
    //DELETE
    //==============================================================================
    static async deleteExemplo(id){
        
        // debug da função
        console.log('mainModel.js','Exemplo.deleteExemplo()')
        console.log(arguments);

        return await dbExemplo.executarQuery('DELETE FROM tarefa where id_tarefa = ?',[id]);
    }


}

module.exports = Tarefa;