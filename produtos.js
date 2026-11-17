import { db } from "./firebase-config.js";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const catalogoDemonstrativo = [
  {
    id: "gel-classea",
    nome: "ClasseA - Gel Cera Hidratante",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/gclassea.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "gel-cola",
    nome: "Gel Cola - Fixação Extra Forte",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/gelcola.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "maquina-kemei",
    nome: "Kemei - Máquina de Aparar Pelos",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/kemei.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "maquina-comum",
    nome: "LT-808 - Máquina para Aparar Pelos",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/mcabelo.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pomada-black",
    nome: "Fox For Men - Pasta Black Premium",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/pblack.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pomada-caramelo",
    nome: "Fox For Men - Cera Hair Caramelo",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/pcaramelo.png",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pomada-gromming",
    nome: "Zoteri - Pomada Capilar Gromming",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/pgromming.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pomada-po",
    nome: "Zoteri - Pomada Capilar em Pó",
    categoria: "Cabelo",
    preco: "1.00",
    imagem: "assets/produtos/cabelo/ppo.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "beard-oil",
    nome: "Beard Oil - Óleo para Barba",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/beardoil.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "ffmen-oil",
    nome: "Fox For Men - Óleo Para Barba",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/fmen.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "locaob",
    nome: "Zoteri - Loção para Barba",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/locaob.png",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "perfume-bc",
    nome: "Zoteri - Freedom Colônia Barba e Corpo",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/pbc.png",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pgromming",
    nome: "Zoteri - Pomada Gromming",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/pgromming.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "pomadapo",
    nome: "Zoteri - Pomada em Pó",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/ppo.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "thedodger",
    nome: "The Dodger - Óleo para Barba",
    categoria: "Barba",
    preco: "1.00",
    imagem: "assets/produtos/barba/tdodger.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "asl-turbo",
    nome: "ASL TURBO - Carregador Tipo C Lightning",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/asl-turbo.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "asl-uni",
    nome: "ASL TURBO - Carregador Universal",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/asl-uni.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "caboc",
    nome: "Peining - Cabo Tipo C",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/caboc.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "caboios",
    nome: "Peining - Cabo Tipo C Lightning",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/caboios.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "caboioshm",
    nome: "H'Maston - Cabo Tipo C Lightning",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/caboioshm.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "cabom",
    nome: "Peining - Cabo Tipo Micro USB",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/cabom.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "cbasike",
    nome: "Basike - Carregador Inteligente Duas Portas",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/cbasike.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "cgold",
    nome: "A'Gold - Carregador Rápido",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/cgold.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "clelong",
    nome: "Lelong - Carregador Rápido",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/clelong.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "fonegold",
    nome: "A'Gold Plus - Fone de Ouvido",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/fonegold.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
  {
    id: "fonelelong",
    nome: "Lelong - Fone de Ouvido Estéreo",
    categoria: "Eletronicos",
    preco: "1.00",
    imagem: "assets/produtos/eletronicos/fonelelong.jpg",
    descricao: "...",
    uso: "...",
    disponivel: true,
  },
];

function escaparHTML(valor) {
  return String(valor ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

function renderizarCatalogo(lista) {
  const gradeProdutos = document.getElementById("gradeProdutos");
  if (!gradeProdutos) return;

  // Preserva quantidades já digitadas pelo cliente caso o admin atualize algo em tempo real
  const quantidadesAtuais = {};
  gradeProdutos.querySelectorAll('input[type="number"]').forEach((inp) => {
    quantidadesAtuais[inp.dataset.produto] = inp.value;
  });

  gradeProdutos.innerHTML = lista
    .map((p, i) => {
      const id = escaparHTML(p.id);
      const nome = escaparHTML(p.nome);
      const numero = String(i + 1).padStart(2, "0");
      const preco = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(p.preco));
      const disponivel = p.disponivel !== false;
      const qtdSalva = disponivel ? (quantidadesAtuais[p.id] || "0") : "0";
      const imagemSrc = p.imagem ? escaparHTML(p.imagem) : "assets/logo.png";

      return `<article class="produto" data-categoria="${escaparHTML(p.categoria)}" data-busca="${nome}" aria-labelledby="titulo-${id}">
  <div class="produto-foto"><img src="${imagemSrc}" alt="Embalagem ilustrativa de ${nome}" width="480" height="400" ${i ? 'loading="lazy"' : ""}><span class="numero-produto">${numero}</span><span class="categoria">${escaparHTML(p.categoria)}</span></div>
  <div class="produto-corpo"><h3 id="titulo-${id}">${nome}</h3><p class="descricao">${escaparHTML(p.descricao || "Consulte detalhes com o barbeiro.")}</p><details><summary>Como usar</summary><p>${escaparHTML(p.uso || "Siga as orientações da embalagem ou pergunte ao Denilson.")}</p></details>
  <div class="produto-preco"><strong>${preco}</strong><span>por unidade</span></div><p class="disponibilidade" id="disponibilidade-${id}">${disponivel ? "Disponibilidade a confirmar" : "Indisponível no momento"}</p>
  <input hidden type="checkbox" name="produtos" id="${id}" value="${Number(p.preco).toFixed(2)}" data-nome="${nome}" data-disponivel="${disponivel}" data-quantidade="quantidade-${id}">
  <div class="quantidade-linha"><label for="quantidade-${id}">Quantidade</label><div class="controle-quantidade"><button type="button" data-alterar="-1" data-produto="${id}" aria-label="Diminuir quantidade de ${nome}" disabled>−</button><input type="number" id="quantidade-${id}" aria-label="Quantidade de ${nome}" data-produto="${id}" min="0" max="25" step="1" value="${qtdSalva}" inputmode="numeric" aria-describedby="disponibilidade-${id} limiteQuantidade"><button type="button" data-alterar="1" data-produto="${id}" aria-label="Aumentar quantidade de ${nome}">+</button></div></div></div></article>`;
    })
    .join("");

  // Avisa script.js e filtros.js que os cards foram montados/atualizados
  document.dispatchEvent(new CustomEvent("catalogo:atualizado"));
}

// Inicia escuta em tempo real na coleção "produtos" do Firestore
if (document.getElementById("gradeProdutos")) {
  const q = query(collection(db, "produtos"), orderBy("nome"));
  onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        // Se o banco ainda não foi populado no Admin, exibe os demonstrativos
        renderizarCatalogo(catalogoDemonstrativo);
      } else {
        const produtosNuvem = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        renderizarCatalogo(produtosNuvem);
      }
    },
    (erro) => {
      console.error("Erro ao ler Firestore, carregando fallback local:", erro);
      renderizarCatalogo(catalogoDemonstrativo);
    },
  );
}