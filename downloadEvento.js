// Exemplo Download de Evento
const downloadEvento = require('./src/nfe_module/eventos/downloadEvento')

let corpo = new downloadEvento.body(
    "chave da nota",
    "tipo de ambiente",
    "tipo de download",
    "tipo do evento",
    "sequencia do evento"
)

downloadEvento.sendPostRequest(corpo, "XP", "NFe/Eventos").then(getResponse => { console.log(getResponse) })