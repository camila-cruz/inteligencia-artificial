class Arvore {
    constructor() {
        this.raiz = null;
    }

    insereNo(valor) {
        if (this.raiz == null) {
            this.raiz = new No(valor);
        } else if (valor < this.raiz.valor) {
            this.raiz.addEsquerdo(new No(valor));
        } else {
            this.raiz.addDireito(new No(valor));
        }
    }
}