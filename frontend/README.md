# 📑 Documentação do Frontend Avasoft

## 📚 Visão Geral
Este documento fornece uma visão geral sobre como configurar e desenvolver o frontend do projeto Avasoft. O frontend utiliza Vue.js, Tailwind CSS e Electron para criar uma aplicação desktop moderna e responsiva.

## 🗂 Estrutura do Projeto
    frontend/
    │    ├── public/                # Arquivos públicos
    │    ├── src/                   # Código-fonte do projeto
    │    │   ├── assets/            # Recursos estáticos (imagens, fontes, etc.)
    │    │   ├── components/        # Componentes Vue.js
    │    │   │   ├── AssessmentPage.vue
    │    │   │   ├── AssessmentUser.vue
    │    │   │   ├── EditPage.vue
    │    │   │   ├── HeaderContent.vue
    │    │   │   ├── HomePage.vue
    │    │   │   ├── ListUser.vue
    │    │   │   ├── LoginPage.vue
    │    │   │   ├── PhysicalAssessments.vue
    │    │   │   ├── RegisterUser.vue
    │    │   │   └── SidebarContent.js
    │    │   ├── App.vue            # Componente raiz
    │    │   ├── background.js
    │    │   ├── index.js
    │    │   ├── main.js            # Arquivo principal de inicialização
    │    │   └── router.js          # Rotas
    │    ├── .gitignore
    │    ├── babel.config.js
    │    ├── jsconfig.json
    │    ├── postcss.config.js
    │    ├── README.md
    │    ├── tailwind.config.js     # Configuração do Tailwind CSS
    │    ├── vue.config.js          # Configuração do Vue CLI
    │    └── package.json           # Configurações e dependências do npm
    └──

## Requisitos para rodar localmente

### 🗃 Requisitos iniciais

Antes de iniciar o desenvolvimento, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Vue CLI](https://cli.vuejs.org/) (se ainda não estiver instalado, você pode instalá-lo globalmente com `npm install -g @vue/cli`)

##   🛠️ Instalação
Instalação das Dependências
Para instalar todas as dependências necessárias, execute o seguinte comando no diretório raiz do projeto:
```
npm install
```

## Compilação e Recarga Automática para Desenvolvimento
Para iniciar o servidor de desenvolvimento com recarga automática, utilize o comando:
```
npm run serve
```
## Compilação e Minificação para Produção
Para compilar o projeto para produção, gerando arquivos otimizados e minificados, execute:
```
npm run build
```

## Verificação e Correção de Código
Para verificar e corrigir automaticamente problemas de formatação e erros de código, utilize:
```
npm run lint
```

## 🌐 Tecnologias Utilizadas
### Vue.js
Vue.js é um framework JavaScript progressivo para a construção de interfaces de usuário. Para mais informações, consulte a documentação oficial do Vue.js.

### Tailwind CSS
Tailwind CSS é um framework de CSS utilitário que permite criar layouts personalizados rapidamente. Para mais detalhes, acesse a documentação do Tailwind CSS.

### Electron
Electron é um framework para a criação de aplicações desktop utilizando JavaScript, HTML e CSS. Para saber mais, visite a documentação do Electron.

## 📖 Recursos Adicionais
Para obter mais informações e guias detalhados sobre como utilizar as tecnologias e configurar o projeto, confira os links abaixo:

- [Guia de Introdução ao Vue.js](https://vuejs.org/v2/guide/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Guia de Introdução ao Electron](https://www.electronjs.org/docs/tutorial/quick-start)


## 🤝 Contribuição
Se você deseja contribuir para o projeto, siga as diretrizes descritas no arquivo README.md localizado na raiz do projeto.
Veja [Configuration Reference](https://cli.vuejs.org/config/).
