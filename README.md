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

### Estrutura do banco de dados
- Nome da DataBase: testedb
- Nome das collections: produtos, marcas
- Estrutura dos produtos:
  - _id, thumb, description, brand, active, inactive_date
- Estrutura das marcas:
  - _id, Name, Description

### Para executar
Primeiro, clonar o repositório:

    git clone https://github.com/DRKn1ght/CollectionTeste.git
Após clonar o repositório, instalar as dependências com:

    npm install

É preciso adicionar um arquivo nomeado como ".env" na root do projeto, para inicializar a variável de ambiente, que é a URI do MongoDB.
Para isso, crie um arquivo com o nome ".env" e adicione nele a seguinte linha:

    REACT_APP_MONGOURI="URI DO MONGO AQUI"
Por fim, execute o projeto com:

    npm run start

A API e o Front-End devem iniciar em seguida.
