# Case Paggo OCR - Back-End


##### Clone o repositório:
```sh
$ git clone https://github.com/AirtonOliveiraS/paggo_ocr_backend.git
```

##### Acesse a pasta :
```sh
$ cd paggo_ocr_backend
```

## Variáveis de ambiente

```bash
Duplique o arquivo .env.local e renomeio com .env e insira as variaveis de ambiente necessarias

DATABASE_URL: estou usando o sqlite entao por padrão : "file:./dev.db"
JWT_SECRET hambiente de desenvolvimento ex: 'desenvolvimento'
JWT_EXPIRE: tempo de expiraçã do token de acesso ex:  '5 days'
```




### Instalação

```bash
npm install
#&
npm build 
#&
npm run start:dev

```
### Banco
Os Comandos abaixo podem ser execultados  pra garantir o funcionamento do banco localmente.

```bash
npx prisma migrate dev --name init
#&
npx prisma generate

```


### API
A pode ser acessada em 
[http://localhost:8000] (http://localhost:8000) 



## Deploy na  Railway

O projeto do backend  esta hospedado na railway e  a api pode ser requisitada a partir do link  acessado clicando em ->  [BackEnd](https://paggoocrbackend-production.up.railway.app/) 