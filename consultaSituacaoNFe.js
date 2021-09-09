// Exemplo de consulta de situacao
const consultaSituacaoNFe = require('./src/nfe_module/util/consultarNFe')
const util = require('./src/nfe_module/commons/util')

let corpo = new consultaSituacaoNFe.body(
    "cnpj emitente",
    "chave da nota",
    "tipo de ambiente",
    "4.00"
)

consultaSituacaoNFe.sendPostRequest(corpo, "X", "NFe/Eventos").then(getResponse => { console.log(getResponse) })