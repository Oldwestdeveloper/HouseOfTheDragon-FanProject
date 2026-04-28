# 🐉 Enciclopédia de Dragões | House of the Dragon

Uma aplicação web interativa e responsiva dedicada a catalogar os majestosos dragões de Westeros, focada no período da Dança dos Dragões. Este projeto foi construído com as tecnologias mais modernas do ecossistema React para entregar uma experiência imersiva e de alta performance.

🌐 <a href="https://oldwestdeveloper-hotd.vercel.app/" target="_blank">Acesse o projeto online aqui</a>

---

## ⚡ Funcionalidades

* **Catálogo Dinâmico:** Listagem completa de dragões com imagens otimizadas e design em grid.
* **Filtros por Facção:** Sistema de filtragem instantânea de estado (Pretos, Verdes ou Neutros/Selvagens).
* **Rotas Dinâmicas:** Páginas de detalhes geradas dinamicamente para cada dragão (`/dragon/[id]`).
* **Tipagem Estrita:** Dados estruturados com `Interfaces` do TypeScript para garantir consistência.
* **Tipografia Imersiva:** Integração de fonte local personalizada (Game of Thrones font) otimizada pelo Next.js.
* **Deploy Automatizado:** Hospedagem contínua via Vercel conectada ao GitHub.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com a seguinte stack:

* **[Next.js](https://nextjs.org/)** (App Router) - Framework React
* **[React](https://reactjs.org/)** - Biblioteca de UI
* **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto JavaScript tipado
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário para estilização rápida e responsiva
* **[Vercel](https://vercel.com/)** - Plataforma de hospedagem

---

## 📂 Arquitetura de Dados

O projeto utiliza um banco de dados estático local, localizado em `data/dragons.ts`. Os dados são tipados através de uma interface rigorosa, garantindo que todas as informações (nome, montador, cor, facção, imagem e história) sejam renderizadas corretamente nos componentes e rotas dinâmicas, sem necessidade de requisições a servidores externos.

---

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para rodar a enciclopédia na sua máquina:

1. Clone este repositório:
```bash
git clone https://github.com/CodeWrangler-DevGui/HouseOfTheDragon-FanProject.git
   ```
2. Acesse a pasta do projeto:
```bash
cd HouseOfTheDragon-FanProject
```
3. Instale as dependências:
```bash
npm install
```
4. Execute o servidor local:
```bash
npm run dev
```
5. Acesse o servidor em http://localhost:3000

---
✒️ Autor
Desenvolvido com fogo e sangue por **CODEWRANGLER-DEVGUI**.

GitHub: [@CodeWrangler-DevGui](https://github.com/CodeWrangler-DevGui)

LinkedIn: [Guilherme Araujo](https://www.linkedin.com/in/guilherme-araujo-lacerda)

---

```
HouseOfTheDragon-FanProject
│
├── 📁 app
│   ├── 📁 dragon
│   │   └── 📁 [id]
│   │       └── 📄 page.tsx
│   ├── 📁 font
│   │   └── 📄 GOT.ttf
│   ├── 🎨 globals.css
│   ├── 🖼️ icon.png
│   ├── 📄 layout.tsx
│   └── 📄 page.tsx
├── 📁 data
│   └── 📄 dragons.ts
├── 📁 public
│   └── 📁 img
│       ├── 🖼️ arrax.png
│       ├── 🖼️ balerion.png
│       ├── 🖼️ canibal.png
│       ├── 🖼️ dragoes.png
│       ├── 🖼️ dreamfyre.png
│       ├── 🖼️ grey-ghost.png
│       ├── 🖼️ meleys.png
│       ├── 🖼️ meraxes.png
│       ├── 🖼️ moondancer.png
│       ├── 🖼️ morning.png
│       ├── 🖼️ quicksilver.png
│       ├── 🖼️ seasmoke.png
│       ├── 🖼️ sheepstealer.png
│       ├── 🖼️ silverwing.png
│       ├── 🖼️ stormcloud.png
│       ├── 🖼️ sunfyre.png
│       ├── 🖼️ syrax.png
│       ├── 🖼️ tessarion.png
│       ├── 🖼️ tyraxes.png
│       ├── 🖼️ vermax.png
│       ├── 🖼️ verme-sangrento.png
│       ├── 🖼️ vermithor.png
│       └── 🖼️ vhagar.png
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```


