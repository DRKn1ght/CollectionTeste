# Collection - Teste de Estágio - DEV

## Tecnologias utilizadas 
### Front-End
- Linguagem
  - ReactJS
  - CSS para estilização
- Arquitetura
  - Foi utilizado o modelo MVC (Model, View, Controller)
- Design
  - Foi utilizado os componentes [MUI](https://mui.com/) para a estilização do site
- O Frond-End é iniciado na porta 3000 
### Back-End
- Linguagem
  - NodeJS
- Banco de dados
  - MongoDB (obs: Foi utilizado o MongoDB Atlas, para que o banco de dados seja hospedado)
- Rotas e API
  - Foi utilizado Express para a criação das rotas de API e o Mongoose para a conexão com o banco de dados
- A API é iniciada na porta 5000

### Observações
- Por questões de performance, a API para pegar a lista de marcas e de produtos do banco de dados só é feita uma vez, quando a home é acessada. É criado dois vetores para os produtos, productList (uma lista com todos os produtos ativos, retornado pela API) e productToShow (uma lista dos produtos que serão mostrados para o usuário), assim, basta manipular esses vetores para fazer a filtragem e pesquisa enquanto o usuário digita, evitando que a API seja chamada sempre que o usuário digitar algo.
- Seguindo a mesma linha, quando um usuário inativa ou adiciona um produto novo, além de atualizar no banco de dados, é atualizado os vetores productList e productToShow, assim, atualiza em tempo real os produtos adicionados ou inativados para o usuário, sem a necessidade de reiniciar a página, e não é necessário chamar a API para pegar os produtos novamente.

### Estrutura do banco de dados
- Nome da DataBase: testedb
- Nome das collections: produtos, marcas
- Estrutura dos produtos:
  - _id, thumb, description, brand, active, inactive_date
- Estrutura das marcas:
  - _id, Name, Description

## Para executar
Primeiro, clonar o repositório:

    git clone https://github.com/DRKn1ght/CollectionTeste.git
    
Após clonar o repositório, é preciso adicionar um arquivo nomeado como ".env" na root do projeto, para inicializar a variável de ambiente, que é a URI do MongoDB.
Para isso, crie um arquivo com o nome ".env" e adicione nele a seguinte linha:

    REACT_APP_MONGOURI="URI DO MONGO AQUI"

Depois, instale as dependencias com:

    npm install

Por fim, execute o projeto com:

    npm run start

A API e o Front-End devem iniciar em seguida.
