let inp, btn, arv;

function setup() {
    createCanvas(700, 500);
    arv = new Arvore();

    inp = select(".txt-elm");
    btn = select(".btn-elm");

    btn.mousePressed(() => {
        if (inp.value() == "" || isNaN(inp.value())) {
            alert("Preencha um valor válido!");
        } else {
            arv.insereNo(int(inp.value()));
            inp.value("");
        }
    });
}

function draw() {
    background(200);
    if (arv.niveis != 0) {
        arv.percorreNos();
    }
}