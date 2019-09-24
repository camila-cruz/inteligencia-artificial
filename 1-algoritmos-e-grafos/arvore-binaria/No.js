class No {
    constructor(valor) {
        this.esquerdo = null;
        this.direito = null;
        this.valor = valor;
        this.pos = createVector(0, 1);
        this.pai = null;
    }

    addEsquerdo(no) {
        no.pos.y += 1;
        no.pos.x += 1;
        if (this.esquerdo == null) {
            no.pai = this;
            this.esquerdo = no;
        } else if (no.valor < this.esquerdo.valor) {
            this.esquerdo.addEsquerdo(no);
        } else {
            this.esquerdo.addDireito(no);
        }
    }

    addDireito(no) {
        no.pos.y += 1;
        no.pos.x += 2;
        if (this.direito == null) {
            no.pai = this;
            this.direito = no;
        } else if (no.valor < this.direito.valor) {
            this.direito.addEsquerdo(no);
        } else {
            this.direito.addDireito(no);
        }
    }

    visita() {
        if (this.esquerdo != null) {
            this.esquerdo.visita();
        }

        //text(this.valor, this.pos.x*100, this.pos.y * 100);
        this.desenhaNo(4);

        if (this.direito != null) {
            this.direito.visita();
        }
    }

    desenhaNo(niveis) {
        let distY = height/niveis;
        let distX = width/this.pos.y;
        console.log(distY);
        console.log(distX);
        ellipse(distX * this.pos.x, distY * this.pos.y, 10);
        text(this.valor, distX * this.pos.x, distY * this.pos.y);
    }
}