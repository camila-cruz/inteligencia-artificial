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
}

function draw() {
    
}