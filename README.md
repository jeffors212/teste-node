Minha API de Competições Esportivas

Introdução

Esta API foi desenvolvida para gerenciar competições esportivas, incluindo a criação, atualização, finalização e consulta de competições e atletas.

Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em seu sistema.

Configuração

Siga estes passos para configurar e iniciar a API em seu ambiente local:

 Instalar Dependências
Instale todas as dependências necessárias com o npm:


npm install
 Iniciar o Servidor
Inicie o servidor local:

npm start
Após executar este comando, o servidor deve estar rodando na porta 3000.

Uso da API

A API oferece vários endpoints para a gestão de competições, atletas e resultados. Aqui estão alguns exemplos detalhados de como você pode interagir com a API:

Competições
Criar uma Nova Competição

POST /competitions
Corpo da Requisição:
{
  "name": "Campeonato Mundial",
  "type": "Futebol"
}
Descrição: Este endpoint cria uma nova competição com um nome e tipo especificados.
Atualizar uma Competição

PUT /competitions/:id
Corpo da Requisição:

{
  "name": "Campeonato Mundial Atualizado"
}
Descrição: Atualiza os detalhes de uma competição existente com base no ID fornecido.
Listar Todas as Competições

GET /competitions
Descrição: Retorna uma lista de todas as competições cadastradas.
Obter Detalhes de uma Competição

GET /competitions/:id
Descrição: Retorna os detalhes de uma competição específica, identificada pelo ID.
Atletas
Adicionar um Novo Atleta

POST /athletes
Corpo da Requisição:
{
  "name": "John Doe",
  "age": 30,
  "country": "Brasil"
}
ChatGPT
Para detalhar melhor a seção "Uso da API" no seu README.md, vamos incluir descrições mais completas para cada endpoint, incluindo os endpoints para atletas e resultados. Aqui está como você pode expandir essa seção:

Uso da API

A API oferece vários endpoints para a gestão de competições, atletas e resultados. Aqui estão alguns exemplos detalhados de como você pode interagir com a API:

Competições
Criar uma Nova Competição

POST /competitions
Corpo da Requisição:
json
Copy code
{
  "name": "Campeonato Mundial",
  "type": "Futebol"
}
Descrição: Este endpoint cria uma nova competição com um nome e tipo especificados.
Atualizar uma Competição

PUT /competitions/:id
Corpo da Requisição:
json
Copy code
{
  "name": "Campeonato Mundial Atualizado"
}
Descrição: Atualiza os detalhes de uma competição existente com base no ID fornecido.
Listar Todas as Competições

GET /competitions
Descrição: Retorna uma lista de todas as competições cadastradas.
Obter Detalhes de uma Competição

GET /competitions/:id
Descrição: Retorna os detalhes de uma competição específica, identificada pelo ID.
Atletas
Adicionar um Novo Atleta

POST /athletes
Corpo da Requisição:
json
{
  "name": "John Doe",
  "age": 30,
  "country": "Brasil"
}
Descrição: Cria um novo atleta com nome, idade e país.
Listar Todos os Atletas

GET /athletes
Descrição: Retorna uma lista de todos os atletas cadastrados.
Resultados
Adicionar um Novo Resultado

POST /results
Corpo da Requisição:
{
  "athleteId": 1,
  "competitionId": 2,
  "value": 9.58,
  "unit": "seconds"
}
Descrição: Registra um novo resultado para uma competição, incluindo o ID do atleta, ID da competição, valor e unidade do resultado.
Listar Todos os Resultados

GET /results
Descrição: Retorna todos os resultados registrados.

Conclusão

Esta documentação fornece uma visão geral de como configurar, usar e testar a API de competições esportivas. Se tiver dúvidas ou precisar de mais informações, entre em contato conosco através de [jeffvagas@gmail.com].