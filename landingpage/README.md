# 📑 Documentação da Landingpage Avasoft

## 📚 Visão Geral

Este documento fornece uma visão geral sobre como configurar e desenvolver a landingpage do projeto Avasoft. A landingpage utiliza Vue.js, Tailwind CSS e vite para criar uma aplicação web moderna e responsiva que permite o download do sistema desktop Avasoft para diferentes sistemas.

## 🗂 Estrutura do Projeto

    landingpage/
    │    ├── public/                # Arquivos públicos
    │    ├── src/                   # Código-fonte do projeto
    │    │   ├── assets/            # Recursos estáticos (imagens, fontes, etc.)
    │    │   ├── components/        # Componentes Vue.js
    │    │   │   ├── AttributeList.vue
    │    │   │   ├── Avasoft.vue
    │    │   │   ├── Button.vue
    │    │   │   ├── Carousel.vue
    │    │   │   ├── ContactArea.vue
    │    │   │   ├── DownloadHere.vue
    │    │   │   ├── DropDown.vue
    │    │   │   ├── Footer.vue
    │    │   │   ├── GetUpdates.vue
    │    │   │   ├── Header.vue
    │    │   │   ├── NavBar.vue
    │    │   │   └── SimplifyAva.vue
    │    │   ├── router/            # Rotas
    │    │       └── index.js     
    │    │   └── views/             # Views
    │    │       └── HomeView.vue  
    │    │   ├── App.vue            # Componente raiz
    │    │   ├── index.js
    │    │   ├── main.js            # Arquivo principal de inicialização
    │    ├── .gitignore
    │    ├── index.html
    │    ├── postcss.config.js
    │    ├── README.md
    │    ├── tailwind.config.js     # Configuração do Tailwind CSS
    │    ├── vite.config.js          # Configuração do Vue CLI
    │    └── package.json           # Configurações e dependências do npm
    └──

## Requisitos para rodar localmente

### 🗃 Requisitos iniciais

Antes de iniciar o desenvolvimento, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Vue CLI](https://cli.vuejs.org/) (se ainda não estiver instalado, você pode instalá-lo globalmente com `npm install -g @vue/cli`)


## 🛠️ Instalação

Instalação das Dependências
Para instalar todas as dependências necessárias, execute o seguinte comando no diretório raiz do projeto:

```
npm install
```

## Compilação e Recarga Automática para Desenvolvimento

Para iniciar o servidor de desenvolvimento com recarga automática, utilize o comando:

```
npm run dev
```

## Compilação e Minificação para Produção

Para compilar o projeto para produção, gerando arquivos otimizados e minificados, execute:

```
npm run build
```

## Pré-visualização do Build de Produção

Para pré-visualizar o build de produção, utilize o comando:

```
npm run preview
```

## Implantação no GitHub Pages

Para compilar o projeto e implantar no GitHub Pages, utilize o comando:

```
npm run deploy
```

## Verificação e Correção de Código

Para verificar e corrigir automaticamente problemas de formatação e erros de código, utilize:

```
npm run lint
```

## 🌐 Tecnologias Utilizadas

### Vue.js

- **Descrição:** Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário.
- **Uso:** Facilita a criação de componentes reutilizáveis e a organização do código em aplicações de página única (SPA).
- **Documentação:** [Vue.js Documentation](https://vuejs.org/v2/guide/)

### Tailwind CSS

- **Descrição:** Tailwind CSS é um framework de CSS utilitário que permite criar layouts personalizados rapidamente.
- **Uso:** Fornece classes utilitárias para construir interfaces de usuário estilizadas sem sair do HTML.
- **Documentação:** [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Vite

- **Descrição:** Vite é uma ferramenta de construção de frontend que oferece um ambiente de desenvolvimento rápido e otimizado.
- **Uso:** Facilita o desenvolvimento e a construção de aplicações Vue.js, fornecendo uma experiência de desenvolvimento mais rápida.
- **Documentação:** [Vite Documentation](https://vitejs.dev/guide/)

## 📖 Recursos Adicionais

Para obter mais informações e guias detalhados sobre como utilizar as tecnologias e configurar o projeto, confira os links abaixo:

- [Guia de Introdução ao Vue.js](https://vuejs.org/v2/guide/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Guia de Introdução ao Vite](https://vitejs.dev/guide/)

## 🤝 Contribuição

Se você deseja contribuir para o projeto, siga as diretrizes descritas no arquivo README.md localizado na raiz do projeto.
