class No {
    constructor(valor) {
        this.esquerdo = null;
        this.direito = null;
        this.valor = valor;
        this.pos = createVector(0, 1);
        this.pai = null;
    }

    addEsquerdo(no, n) {
        n++;
        let w = width-50;
        if (this.esquerdo == null) {
            no.pos.y = this.pos.y + 1;
            //no.pos.x += this.pos.x/2;
            no.pos.x = this.pos.x - w/pow(2, n);
            no.pai = this.pos;
            this.esquerdo = no;
            return n;
        } else if (no.valor < this.esquerdo.valor) {
            n = this.esquerdo.addEsquerdo(no, n);
        } else {
            n = this.esquerdo.addDireito(no, n);
        }
        return n;
    }

    addDireito(no, n) {
        n++;
        let w = width-50;
        if (this.direito == null) {
            no.pos.y = this.pos.y + 1;
            //no.pos.x = this.pos.x + 1/2*this.pos.x;
            no.pos.x = this.pos.x + w/pow(2, n);
            no.pai = this.pos;
            this.direito = no;
            return n;
        } else if (no.valor < this.direito.valor) {
            n = this.direito.addEsquerdo(no, n);
        } else {
            n = this.direito.addDireito(no, n);
        }
      return n;
    }

    visita(n) {
        if (this.esquerdo != null) {
            this.esquerdo.visita(n);
        }

        //text(this.valor, this.pos.x*100, this.pos.y * 100);
        this.desenhaNo(n+1); // n + 1, 5

        if (this.direito != null) {
            this.direito.visita(n);
        }
    }

    desenhaNo(niveis) {
        let d = 20;  // diametro do círculo
        let distY = height/niveis;
        if (this.pai != null) {
          line(this.pos.x, distY * this.pos.y, this.pai.x, distY * this.pai.y + d/2);
        }
        ellipse(this.pos.x, distY * this.pos.y, d);
        textAlign(CENTER, CENTER);
        text(this.valor, this.pos.x, distY * this.pos.y);
        
    }
}