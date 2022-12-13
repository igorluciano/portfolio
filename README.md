## Portfolio

### Sobre
- Portfolio e blog pessoal integrado a API do Notion.

### Primeiros passos

- Clonar o repositório;

- Preparar arquivos `.env`;

```bash
# Criar o .env com os detalhes de infra
cp .env-infra .env

# Criar o .env com os detalhes do app
cp app/.env-dev app/.env
```

- Configurar as variáveis de ambiente dos arquivos `.env`.

```python
# Preencher o arquivo .env de infra
CONTAINER_PORT=

# Preencher o arquivo .env do app
...
```

### Criar o ambiente pela primeira vez

- Para realizar a criação de ambiente na primeira vez, utilize:

```bash
# Criar o container: 
docker-compose up --build -d 
```
### Subir o ambiente no dia a dia
- Após ter criado o ambiente, nas demais ocasiões que for necessário subir o ambiente para inicar a codificação, basta executar:

```bash
# Iniciar a aplicação
docker-compose up
```

- E para consultar os logs da aplicação, basta executar o comando: 

```bash
# Ver logs da aplicação
docker-compose logs -f
```

### Comandos importantes no dia a dia de desenvolvimento
```bash
# Instalar uma dependência no package.json
docker exec -i portfolio sh -c "npm install <nome-pacote>"

# Executar o linter para validar o código
docker exec -i portfolio sh -c "npm run lint"

# Instalar uma dependência apenas de desenvolvimento no package.json
docker exec -i portfolio sh -c "npm install --save-dev <nome-pacote>"

# Atualizar dependências da aplicação
docker exec -i portfolio sh -c "npm update"

# Executar um dos scripts do package.json 
docker exec -i portfolio sh -c "npm run <script>"
```