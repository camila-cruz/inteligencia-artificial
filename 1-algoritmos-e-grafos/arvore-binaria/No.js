class No {
    constructor(valor) {
        this.esquerdo = null;
        this.direito = null;
        this.valor = valor;
    }

    addEsquerdo(no) {
        if (this.esquerdo == null) {
            this.esquerdo = no;
        } else if (no.valor < this.esquerdo.valor) {
            this.esquerdo.addEsquerdo(no);
        } else {
            this.esquerdo.addDireito(no);
        }
    }

    addDireito(no) {
        if (this.direito == null) {
            this.direito = no;
        } else if (no.valor < this.direito.valor) {
            this.direito.addEsquerdo(no);
        } else {
            this.direito.addDireito(no);
        }
    }
}