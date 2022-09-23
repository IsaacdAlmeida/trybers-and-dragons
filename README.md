# Trybers & Dragons

## Introdução

O projeto consiste em criar um mini jogo de RPG seguindo os princípios de SOLID e POO utilizando Typescript!

## Sumário

- [Introdução](#introdução)
- [Ferramentas utilizadas](#ferramentas-utilizada)
- [POO](#poo)
- [SOLID](#solid)
- [Aprendizados](#Aprendizados)
- [Instruções para utilizar a aplicação](#instruções-para-utilizar-a-aplicação)
- [Histórico de Commits](#histórico-de-commits)

## Ferramentas utilizada

**Back End:** Docker, TypeScript.
**Princípios:** SOLID, POO.

## POO

POO, programação orientada a objetos, é um dos paradigmas da programação. Sendo o objeto a junção de diversos comportamentos e estados, esse conceito está suportado na ideia de classes, que nada mais é que um conjunto de objetos que tem características comuns. A classe define o comportamento do objeto e esse, por sua vez, é definido por métodos e atributos. Nesse projeto foi possível praticar POO e consolidar os conhecimentos nos seus quatro pilares: herança, polimorfismo, abstração e encapsulamento.

## SOLID

SOLID ou S.O.L.I.D é um acrônimo para 5 princípios diferentes, cada princípio foi utilizado nesse projeto e ajudou a criar um código mais limpo e organizado, podendo o código ser reaproveitado por estar componetizado e de fácil refatoração. Cada letra do SOLID tem o seguinte significado: 
- S — Single Responsiblity Principle (Princípio da responsabilidade única)
- O — Open-Closed Principle (Princípio Aberto-Fechado)
- L — Liskov Substitution Principle (Princípio da substituição de Liskov)
- I — Interface Segregation Principle (Princípio da Segregação da Interface)
- D — Dependency Inversion Principle (Princípio da inversão da dependência)

Você pode encontrar mais informações nesse [link](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)

## Aprendizados

Fui capaz de desenvolver fazer uma aplicação que simula um mini jogo de RPG em typescript, fui capaz de criar Classes e aplicar os conceitos de herança e implementação, bem como encapsular um código para que ele funcione de forma independente, assim a refatoração e possíveis alterações fiquem mais fáceis e acessíveis sem quebrar toda a aplicação fazer alterações em diversos arquivos. Consolidar o conhecimento em typescript foi excelente, fiz uma aplicação divertida e gostei de codar cada linha. 

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o repositório, você precisará usar o comando `docker-compose up -d` para criar e iniciar o container e depois executar o terminal bash do container e instalar as dependências do projeto com o comando `npm install` . O comando deverá ser feito via terminal no diretório em que está o arquivo **docker-compose.yml**.
Após o container subir você poderá fazer as requisições utilizando um cliente HTTP (insomnia, postman, httpie e etc);

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
***
  <a href="https://www.linkedin.com/in/isaacalmeidafilho/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
