# Sistemas Unesp

Este é o template proposta para novos sistemas da Unesp. Este template é baseado no Framework **Foundation for Sites 6**. Para mais informações sobre a utilização do framework, acesse [este link](http://foundation.zurb.com/sites/docs/).

## Instalação

Para customizar as configurações padrão deste template, seu ambiente de desenvolvimento vai precisar de:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Opção 1) Instalação do source para customização dos componentes

Primeiro, faça o download utilizando o Git:

```bash
git clone https://github.com/damiansb/sistemas-unesp nome-do-seu-projeto
```

Então, abra a pasta do seu projeto pela linha de comando e instale as dependências necessárias:

```bash
cd nome-do-seu-projeto
npm install
bower install
```

Finalmente, rode `gulp` para ativar o compilador de Sass. Ele vai rodar novamente sempre que você alterar um arquivo Scss.

### Opção 2) Utilização do template compilado, localmente

Se tudo que você quer é utilizar o template já compilado, basta baixar a pasta "dist" que existe dentro deste repositório. Elá já possui todos os arquivos necessários para utilização.

### Opção 3) Utilização com link direto para o Portal de Sistemas

Se você não quer fazer o download de nada e pretende utilizar sempre a versão mais rececente do template, pode incluir os arquivos diretamente do Portal de Sistemas da Unesp. Basta fazer da seguinte forma:

Antes do ```</head>``` de sua aplicação, cole o seguinte código:

```html
<link rel="stylesheet" href="https://sistemas.unesp.br/css/style.css">
```

Se você pretende usar o JavaScript (não obrigatório) do template, antes do ```</body>``` de sua aplicação, cole o seguinte código:

```html
<script src="https://sistemas.unesp.br/js/app.js"></script>
```

É importante salientar que alguns componentes do template **não irão funcionar** sem o JavaScript. Para mais informações, veja a [documentação oficial do Foundation 6](http://foundation.zurb.com/sites/docs/) e verifique se o componente que você deseja utilizar necessita ou não do JavaScript.