# Resumo

Aplicação Front e Back feita para um fã de Star Wars assim como eu :)

## Instalação

Foi utilizada um ferramenta chamada kool para execução do docker e rodar o BackEnd, ela básicamente gera o docker-compose.yml de forma atumática e rápida. (https://blog.kool.dev)

Para rodar o BackEnd:

```bash
composer install
php ./bin/console doctrine:database:create
php ./bin/console doctrine:migrations:migrate

```
Com o kool
```bash
kool run setup
kool exec app ./bin/console doctrine:database:create
kool exec app ./bin/console doctrine:migrations:migrate
```

Para rodar o FrontEnd:
```bash
npm install
npm run start
```
ou
```bash
yarn
yarn start
```

## Notas

Devido ao tempo e as features que coloquei, não deu tempo de deixar a aplicação responsiva para mobile, farei futuros commits para esse déficit, peço perdão.

## Desenvolvedor
Kleber Fernand dos Santos Canedo, animações e estilos feitos todos a mão por mim.
