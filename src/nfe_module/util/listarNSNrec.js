const nsAPI = require('../commons/nsAPI')
const url = "https://nfe.ns.eti.br/util/list/nsnrecs"

class body {
    constructor(CNPJCont, UF, tpAmb, versao) {
        this.CNPJCont = CNPJCont;
        this.UF = UF;
        this.tpAmb = tpAmb;
        this.versao = versao;
    }
}

class response {
    constructor({ status, motivo, retStatusServico, erros }) {
        this.status = status;
        this.motivo = motivo;
        this.retStatusServico = JSON.parse(retStatusServico);
        this.erros = erros
    }
}

async function listarNSNrec(body) {
    nsAPI.PostRequest(url, body)
}

module.exports = { url, body, response, listarNSNrec }
