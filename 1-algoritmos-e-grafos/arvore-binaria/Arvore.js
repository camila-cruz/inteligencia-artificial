class Arvore {
    constructor() {
        this.raiz = null;
        this.niveis = 0;
    }

    insereNo(valor) {
        if (this.raiz == null) {
            this.raiz = new No(valor);
            this.raiz.pos = (1, 1);
        } else if (valor < this.raiz.valor) {
            this.raiz.addEsquerdo(new No(valor));
        } else {
            this.raiz.addDireito(new No(valor));
        }
    }

    percorreNos() {
        this.raiz.visita();
    }
}