// Exemplo de Listagem de nsNRec
const nsNRecListagem = require('./src/nfe_module/util/listarNSNrec')

let corpo = new nsNRecListagem.body(
    "chave da nota",
)

nsNRecListagem.sendPostRequest(corpo, "XP", "NFe/Eventos").then(getResponse => { console.log(getResponse) })