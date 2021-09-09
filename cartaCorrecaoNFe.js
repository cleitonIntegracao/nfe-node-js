// Exemplo de carta de correcao de NFe

const cartaCorrecaoNFe = require('./src/nfe_module/eventos/cartaCorrecao')
const util = require('./src/nfe_module/commons/util')

let corpo = new cartaCorrecaoNFe.body(
    "chave da nota",
    "tipo de ambiente",
    util.dhEmiGet(),
    "sequencia do evento ",
    "CARTA DE CORRECAO ADICIONADA PARA TESTES DE INTEGRACAO COM EXEMPLO NODE JS"
)

cartaCorrecaoNFe.sendPostRequest(corpo, "X", "NFe/Eventos").then(getResponse => { console.log(getResponse) })