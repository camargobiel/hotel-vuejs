# Sobre o projeto

### Tecnologias
Foram utilizadas para o front-end **Vuejs 3** e para o back-end **Node.js, Express e Knex**.

### Banco de dados
Foi escolhido o **SQLite3** por motivos de configuração, por ser um projeto rápido, optei por usar uma tecnologia que não precise de configuração para rodar o projeto.

### Como rodar
Para rodar ambas as aplicações, instale o gerenciador de pacotes `pnpm`, para isso use `npm i -g pnpm` ou acesse o site https://pnpm.io/installation para mais informações.

#### Front
Entre na pasta `/front`, execute `pnpm i` e `pnpm dev`

#### Back
Entre na pasta `/server` e execute os seguintes comandos:
- `pnpm i` para instalar os pacotes
- `pnpm migrate` para rodar as migrações e criar seu banco de dados
- `pnpm dev` para iniciar o servidor
