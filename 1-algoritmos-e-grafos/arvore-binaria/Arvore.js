class Arvore {
    constructor() {
        this.raiz = null;
        this.niveis = 0;
    }

    insereNo(valor) {
        let n = 1;
        if (this.raiz == null) {
            this.raiz = new No(valor);
            this.raiz.pos.y = 1;
            this.raiz.pos.x = width/2;
            this.niveis = n;
        } else if (valor < this.raiz.valor) {
            n = this.raiz.addEsquerdo(new No(valor), 1);
        } else {
            n = this.raiz.addDireito(new No(valor), 1);
        }
        //this.percorreNos();
        
        if (n > this.niveis) {
            this.niveis = n;
        }
        
      console.log(this);
    }

    percorreNos() {
        this.raiz.visita(this.niveis);
    }
}