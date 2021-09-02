const url = "https://nfe.ns.eti.br/nfe/issue/status"

class body {
   constructor(CNPJ, nsNRec, tpAmb) {
       this.CNPJ = CNPJ;
       this.nsNRec = nsNRec;
       this.tpAmb = tpAmb
   }
}

class response {
    constructor({status, motivo, chNFe, cStat,xMotivo, xml, nProt, dhRecbto, erro}) {
        this.status = status;
        this.motivo = motivo;
        this.chNFe = chNFe;
        this.cStat = cStat;
        this.xMotivo = xMotivo;
        this.nProt = nProt;
        this.xml = xml;
        this.dhRecbto = dhRecbto;
        this.erro = erro
    }
}

module.exports = { url, body, response }