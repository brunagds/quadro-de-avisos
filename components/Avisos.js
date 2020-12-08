const db = require('../knexfile')

/**
+ Inserir um aviso no banco de dados
+ @param {object} aviso O aviso deve estar no seguinte formato:
+ {titulo: <string>, data: <date>, mensagem: <string>}
+ @returns {object} Mensagem de sucesso ou de erro
*/

function salvar(aviso){
  
  return db.insert(aviso).into('avisos').then(_ =>{
    return {tipo:"sucesso", corpo:"Aviso cadastro com sucesso!"}
  })
  .catch(err =>{
    return {tipo:"erro", corpo:"Erro: "+erro}
  })
} //fim do salvar

module.exports = {salvar}