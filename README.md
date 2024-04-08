# PROJETO AMIGO SECRETO

Painel de administração:
- Cadastrar EVENTOS
- Cadastrar GRUPOS
- Cadastrar PESSOAS


Site: 
- Acessar ela do EVENTO

Características:
- O sorteio acontece na hora do CADASTRO, não na hora da identificação.
- No banco de dados, não podemos identificar uem tirou quem.
- O painel de administração vai ter uma senha única.


# PLANEJAMENTO DE BANCO DE DADOS: 

- EVENTOS
- GRUPOS
- PESSOAS

TABELA events
- id INT PK AUTO_INCREMENT
- status BOOLEAN deafault=false
- title STRING
- description STRING
- gruoped BOOLEAN deafault=false

TABELA eventGroups
- id INT PK AUTO_INCREMENT
- id_event INT (RELACIONADOS a events.id)
- name STRING

TABELA  eventPeople
- id INT PK AUTO_INCREMENT
- id_event INT (RELACIONADO a events.id)
- id_group INT (RELACIONADO a eventGroups.id)
- name STRING
- cpf STRING
- matched STRING deafault=""


# PLANEJAMENTO DE ROTAS:

CRUD = Create, Read, Update, Delete; 
Soft delete = não deleta de fato mas o torna oculto de alguma forma, nesse caso perimitindo a leitura 
apenas de produtos que estejam com status=true, mantendo o oculto como false.


# SISTEMA
- POST  /admin/login
- GET /events/:id_events/person/:cpf


# EVENTOS
- GET /admin/events 
- GET /events/:id
- POST /admin/events
- PUT /admin/events/:id
- DELETE /admin/events/:id

# GRUPOS
- GET /admin/events/:id_event/groups
- GET /admin/events/:id_event/groups/:id
- POST /admin/events/:id_event/groups
- PUT /admin/events/:id_event/groups/:id
- DELETE /admin/events/:id_event/groups/:id

# PESSOA
- GET /admin/events/:id_event/groups/:id_group/people
- GET /admin/events/:id_event/groups/:id_group/people/:id
- POST /admin/events/:id_event/groups/:id_group/people
- PUT /admin/events/:id_event/groups/:id_group/people/:id
- DELETE /admin/events/:id_event/groups/:id_group/people/:id



# BIBLIOTECAS IMPLANTADAS:

- dotenv:

O dotenv é uma biblioteca que ajuda a carregar variáveis de ambiente de arquivos .env em Node.js. Variáveis de ambiente são variáveis ​​que são definidas
 fora do código-fonte do aplicativo e fornecidas ao ambiente de execução. Isso é útil para armazenar informações sensíveis, como credenciais de banco 
 de dados, chaves de API e outras configurações específicas do ambiente.

- CORS

CORS significa Cross-Origin Resource Sharing (Compartilhamento de Recursos de Origem Cruzada). É uma política de segurança implementada pelos 
navegadores da web para controlar como os recursos de um site podem ser acessados por outros sites.

Sem a configuração correta do CORS no servidor da API de terceiros, seu aplicativo da web não poderá acessar 
os recursos fornecidos pela API, resultando em uma experiência de usuário ruim e funcionalidades não funcionais. 
Portanto, é crucial que os desenvolvedores configurem o CORS adequadamente em seus servidores para permitir o acesso controlado aos recursos de suas APIs.

- NPX

A principal diferença entre npx e npm é que o npx é usado para executar comandos de pacotes sem precisar instalá-los globalmente ou localmente no projeto.
Ele instala temporariamente o pacote necessário, executa o comando e, em seguida, remove o pacote, mantendo seu sistema de arquivos limpo e evitando
a poluição desnecessária com pacotes globais ou locais.

- npm i -D typescript ts-node  


ts-node é uma ferramenta que permite executar arquivos TypeScript diretamente no Node.js, sem a necessidade de compilar manualmente para JavaScript. 
Ele facilita o desenvolvimento em TypeScript, permitindo que você execute e depure seu código TypeScript de forma rápida e conveniente.


# PRISMA

nós usamos o migration (npx prisma migration dev) em vez de push pois ele cria uma aqruivo no próprio projeto que pode ser manipulado em outros ambientes 
e computadores.


# MVC(Model-View-Controller)

- Controllers: 

Os controllers são responsáveis por lidar com as requisições HTTP recebidas pelo servidor e retornar uma resposta adequada.

Eles atuam como intermediários entre as rotas definidas na aplicação e a lógica de negócios.

Os controllers geralmente contêm métodos que correspondem às operações CRUD (Create, Read, Update, Delete) relacionadas a um recurso específico.

Eles são responsáveis por validar os dados recebidos, chamar os serviços apropriados e enviar uma resposta HTTP adequada de volta ao cliente.

Os controllers não devem conter lógica de negócios complexa; em vez disso, eles delegam essa responsabilidade aos services.