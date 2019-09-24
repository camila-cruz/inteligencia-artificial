let inp, btn, arv;

function setup() {
    createCanvas(500, 500);
    background(200);
    arv = new Arvore();
    inp = createInput();
    btn = createButton("clique");
    btn.mousePressed(() => {
        arv.insereNo(int(inp.value()));
        inp.value("");
    });
    arv.insereNo(10);
    arv.insereNo(8);
    arv.insereNo(5);
    arv.insereNo(6);
    arv.insereNo(15);
    console.log(arv);
    arv.percorreNos();
}

function draw() {
    
}