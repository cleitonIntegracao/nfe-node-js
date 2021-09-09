// Exemplo de cancelamento de NFe

const cancelarNFe = require('./src/nfe_module/eventos/cancelamento')
const util = require('./src/nfe_module/commons/util')

let corpo = new cancelarNFe.body(
    "chave da nota",
    "tipo de ambiente",
    util.dhEmiGet(),
    "nProt",
    "CANCELAMENTO REALIZADO PARA TESTES DE INTEGRACAO EXEMPLO NODE JS"
)

cancelarNFe.sendPostRequest(corpo, "XP", "NFe/Eventos").then(getResponse => { console.log(getResponse) })