# 👨🏻‍🎓My profile
O "My Profile" é uma aplicação que atualmente contém um resumo de quem sou eu e os videos mais interessantes, na minha opinião, postados pela [Rocketseat](http://rocketseat.com.br), empresa no qual sou aluno. 

# Publicação
Em breve será atualizado para um possivel publicação. Essa atualização terá o meu portifolio de aplicações criadas. 

# 👁‍🗨 Preview

<img src="https://ik.imagekit.io/thiagonfss/Site-About/about-perfil_U6di-m5QzR.png">
<img src=https://ik.imagekit.io/thiagonfss/Site-About/about-highlights_7ST5zDRmG.png>
<img src=https://ik.imagekit.io/thiagonfss/Site-About/about-video_8hdemjL4N.png>


# 📖Índice
- [Sobre](#-Sobre)
- [Tecnologias Utilizadas](#-Tenologias-Utilizadas)
- [Como baixar o projeto](#-Como-baixar-o-projeto)
    - [Necessário](#-Necessário)
    - [Executando como localhost](#-Executando-como-localhost)

## Sobre
    O projeto My Profile é um site desenvolvido para apresentar o que está sendo praticado no curso Bootcamp 🚀 Launchbase e demonstrar o meu desenvolvimento ao durante o curso.

## 💻 Tecnologias Utilizadas
+ [Java Script](https://www.javascript.com) Fazendo as interações entre o Frontend e o Backend.
+ [Node](https://nodejs.org) usado como servidor.
    <br>Alguns pacotes instalados:
    + [Express]() um framework que ajuda gerenciar requisições dos verbos HTTP, integrar "view engines" para inserir dados nos templates, definindo a porta a ser usada pela conexão e na localização dos modelos usados para renderizar a resposta.
    + [Nunjucks](https://www.npmjs.com/package/nunjucks) para fazer a templates engine facilitando o reuso dos códigos nas paginas com extensão .njk ; 

## 🚧 Desenvolvimento
    Por se tratar de um site que ainda não está disponível, para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

## ❓ Como baixar o projeto
---
```bash
$ cd "diretorio de sua preferencia"
$ git clone https://github.com/thiagonfss/Front_HtmlCssJS_Perfil
```

### 🔥 Necessário:
Instalação do Node através desse [link](https://nodejs.org/).

#### No Windows usando o [chocolatey](https://chocolatey.org/) ou com o comando abaixo no terminal 
```bash
cinst nodejs
# ou para a instalação completa com npm
cinst nodejs.install
```
#### No Mac usando [ macOS Installer](https://nodejs.org/pt-br/#home-downloadhead) ou com o comando abaixo no terminal
```bash
curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
```

## Executando como localhost
---
Para rodar o projeto com o Node, execute os comandos abaixo:
```bash
#abra terminal que desejar
$ npm install #esse comando irá instalar as dependências necessárias para o funcionamento da aplicação.
$ npm start #irá colocar o servidor para rodar
```
>Ao aparecer "***server is running***" no terminal, mostra que o servidor está rodando. A porta utilizada para o servidor é a 5000 e para acessar o site, agora local, acesse [localhost:5000](localhost:5000). Para parar o servidor, digite <code>CTRL + C</code> no Windows ou <code>Command + C</code> no Mac.
