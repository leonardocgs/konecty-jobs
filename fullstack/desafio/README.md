# Desafio

## Tabela de Conteúdos

- [Instalação de Dependências](#instalação-de-dependências)
- [Execução em Desenvolvimento](#execução-em-desenvolvimento)
- [Testes](#testes)
- [Configuração da URL da API](#configuração-da-url-da-api)

## Instalação de Dependências

Instale as dependências do projeto:

```bash
npm install
```

## Execução em Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o comando:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## Testes

Para rodar os testes com Jest, execute:

```bash
npm test
```

## Configuração da URL da API

A API está dentro do Next.js, que por sua vez está sendo refenrenciado hardcoded para `localhost:3000`. Certifique-se de que o Next.js esteja rodando dentro do Next.js na porta 3000.
