// Exemplo de Download de NFe
const downloadNFe = require('./src/nfe_module/emissao/download')

let corpo = new downloadNFe.body(
    "Chave da nota",
    "tipo de download",
    "tipo de ambiente",
)

downloadNFe.sendPostRequest(corpo, "XP", "NFe/Eventos").then(getResponse => { console.log(getResponse) })