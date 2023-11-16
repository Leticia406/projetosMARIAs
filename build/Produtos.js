class Produtos {
    imagem;
    titulo;
    desc;
    preco;
    constructor(imagem, titulo, desc, preco) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.desc = desc;
        this.preco = preco;
    }
    getImg() {
        return this.imagem;
    }
    getTitulo() {
        return this.titulo;
    }
    getDescricao() {
        return this.desc;
    }
    getPreco() {
        return this.preco;
    }
}
export let lista_objetos = [
    new Produtos("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERvDul3SuBOKWWJWSgJIHtDuuaopVWX2aXA&usqp=CAU", "Base Líquida Melu", "Rubyrose", "R$ 26,04"),
    new Produtos("https://img.lojasrenner.com.br/item/823246845/large/1.jpg", "Batom líquido MATTE 12H", "SAPATILHA", "R$ 39,90"),
    new Produtos("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9feTXE0gLLUMtkhWQmED1mZQjtV6E3Lof7A&usqp=CAU", "Sabonete Demaquilante", "Rubyrose", "R$ 34,72"),
    new Produtos("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9feTXE0gLLUMtkhWQmED1mZQjtV6E3Lof7A&usqp=CAU", "Blush 3 em 1 Bronze Natural", "Vult", "R$ 29,99"),
    new Produtos("https://static.cdnlive.com.br/uploads/724/produto/16857171766666_detalhe.jpg", " Corretivo Liquido Melu ", "Rubyrose", " R$ 24,50"),
    new Produtos("https://www.marimariamakeup.com/arquivos/ids/163768-undefined-undefined/Batom-liquido-matte-laranja-mari-maria-Must-Nude.png?v=638270300043370000", " Batom Creamy Matte", "Mari Maria Makeup", "R$ 34,90"),
];
