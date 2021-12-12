<h1 align="center">Projeto Previsão de chuva</h1>

<img align="center" src="https://github.com/Pyedrown/projeto-previsao-chuva-nimbus/blob/master/presentation/screenShot1.PNG" alt="presentation image"/>
<img align="center" src="https://github.com/Pyedrown/projeto-previsao-chuva-nimbus/blob/master/presentation/screenShot2.PNG" alt="presentation image"/> 
<img align="center" src="https://github.com/Pyedrown/projeto-previsao-chuva-nimbus/blob/master/presentation/screenShot3.PNG" alt="presentation image"/> 

<p align="center">Projeto que mostra a previsão de tempo de cada bairro</p>

<!--ts-->
  * [Tecnologias](#Tecnologias)
  * [Pre Requisitos](#Pre-requisitos)
  * [Como usar](#Como-usar)
    * [Pasta front-end](#pasta-front-end)
    * [Pasta back-end](#pasta-back-end)
    * [Aviso](#aviso)
  * [Agradecimentos](#Agradecimentos)
<!--te-->

## Tecnologias

### front-end

- [Reactjs](https://pt-br.reactjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com)


### back-end

- [Typescript](https://www.typescriptlang.org)
- [Expressjs](https://expressjs.com/pt-br/)

## Pre Requisitos
Precisa estar com o node.js instalado em sua máquina através desse link

- [NodeJs](https://nodejs.org/en/)

Precisa estar com um navegador para testar a interface do projeto

Caso queira testar a api que criei em node.js, você pode usar o insomnia ou postman,
pode usar qualquer ferramenta que quiser

- [Insomnia](https://insomnia.rest/download)
- [Postman](https://www.postman.com/downloads/)

para testar a api usei o insomnia

## Como usar

Clona o meu repositório

```
  git clone https://github.com/Pyedrown/projeto-previsao-chuva-nimbus.git
```

e em seguida use

``` 
  cd projeto-previsao-chuva-nimbus
```

entre nas pasta de projetos e use

```
  code .
```

Caso queira usar um terminal

pegue o caminho da pasta "front-end" através do windows explorar caso esteja usando windows
e coloque no cmd ou qualquer terminal

No Windows com o prompt de comando é mais o menos assim

```
  cd "C:\Users\<Seu usuário>\Documents\<Caminho da pasta>"  
```

Ou você pode abrir pela seu Visual Studio Code e usar o terminal de lá

Mesma coisa para a pasta back-end

### Pasta front-end

Execute o seguinte comando:

```
  yarn start
```

### Pasta back-end

Execute o seguinte comando:

```
  yarn serve
```

### Aviso

Abre esses dois servidores locais ao mesmo tempo para não gerar conflito

Um bom exemplo é executar o "yarn start" do front-end e não executar a tempo
o "yarn serve" do back-end e acabar dando error no servidor local do front-end

A interface feita em react não vai conseguir fazer o fetch por não ter abrido o servidor do back-end

## Agradecimentos

Muito obrigado a equipe Nimbus pela oportunidade, gostei muito de todo o processo que passei para criar a solução, Aprendi muita coisa e aperfeiçoei o que 
ja tinha aprendido com react js e express js, abraço e até as próxima etapas 👋🏽☺
