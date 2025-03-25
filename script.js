const livros = [
    {
        nome: "Orgulho e Preconceito",
        imagem: "orgulho.jpg",
        descricao: "Um clássico romance de Jane Austen sobre amor e orgulho.",
        link: "https://www.google.com/search?q=Orgulho+e+Preconceito+livro"
    },
    {
        nome: "O Pequeno Príncipe",
        imagem: "principe.jpg",
        descricao: "Uma história encantadora sobre amizade e amor.",
        link: "https://www.google.com/search?q=O+Pequeno+Príncipe+livro"
    },
    {
        nome: "1984",
        imagem:"1984.jpg",
        descricao: "Um romance distópico de George Orwell sobre um regime totalitário.",
        link: "https://www.google.com/search?q=1984+livro"
    },
    {
        nome: "Dom Casmurro",
        imagem: "doncas.jpg",
        descricao: "Uma história intrigante de Machado de Assis sobre amor e ciúmes.",
        link: "https://www.google.com/search?q=Dom+Casmurro+livro"
    },
    {
        nome: "A Revolução dos Bichos",
        imagem: "revolu.jpg",
        descricao: "Uma alegoria política sobre poder e corrupção.",
        link: "https://www.google.com/search?q=A+Revolução+dos+Bichos+livro"
    },
    {
        nome: "O Nome da Rosa",
        imagem: "rosa.jpg",
        descricao: "Um romance histórico e filosófico que acompanha um monge franciscano investigando assassinatos misteriosos em um mosteiro medieval.",
        link: "https://www.google.com/search?q=O+Nome+da+Rosa+resumo"
    },
    {
        nome: "A Metamorfose",
        imagem:"meta.jpg",
        descricao: "A perturbadora história de Gregor Samsa, um homem que acorda transformado em um inseto e enfrenta o isolamento e o desprezo da sociedade.",
        link: "https://www.google.com/search?q=A+Metamorfose+resumo"
    },
    {
        nome: "O Morro dos Ventos Uivantes",
        imagem: "morro.jpg",
        descricao: "Uma trágica história de amor e vingança entre Catherine e Heathcliff, ambientada nos campos sombrios da Inglaterra rural.",
        link: "https://www.google.com/search?q=O+Morro+dos+Ventos+Uivantes+resumo"
    },
    {
        nome: "Memórias Póstumas de Brás Cubas",
        imagem:"memo.jpg",
        descricao: "Uma narrativa irreverente e inovadora, onde o narrador conta sua história após a morte, criticando a sociedade do século XIX.",
        link: "https://www.google.com/search?q=Memórias+Póstumas+de+Brás+Cubas+resumo"
    }
];

function gerarResultados(filtrados) {
    let section = document.getElementById('resultados-pesquisa');
    let resultados = "";

    for (let livro of filtrados) {
        resultados += `
        <div class="item-resultado">
            <img src="${livro.imagem}" alt="${livro.nome}">
            <div class="info">
                <h2>${livro.nome}</h2>
                <p>${livro.descricao}</p>
                <a href="${livro.link}" target="_blank">Mais Informações</a>
            </div>
        </div>`;
    }

    section.innerHTML = resultados || "<p>Nenhum resultado encontrado</p>";
}

function pesquisar() {
    let termo = document.getElementById('campo-pesquisa').value.toLowerCase();
    let filtrados = livros.filter(livro => livro.nome.toLowerCase().includes(termo));
    gerarResultados(filtrados);
}

// Inicializa com todos os livros
gerarResultados(livros);
