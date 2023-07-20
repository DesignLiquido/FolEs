# FolEs

<p align="center">
  <img src="./recursos/imagens/icone-foles.png" alt="FolEs" width="auto" height="268px">

  <p align="center">
    Linguagem de Folhas de Estilo em Português, para geração de CSS.
  </p>

  <p align="center">
    <img src="./recursos/imagens/badge-statements.svg" />
    <img src="./recursos/imagens/badge-lines.svg" />
    <img src="./recursos/imagens/badge-functions.svg" />
    <img src="./recursos/imagens/badge-branches.svg" />
    <a href="https://github.com/DesignLiquido/FolEs/issues" target="_blank">
      <img src="https://img.shields.io/github/issues/Designliquido/FolEs" />
    </a>
    <img src="https://img.shields.io/github/stars/Designliquido/FolEs" />
    <img src="https://img.shields.io/github/forks/Designliquido/FolEs" />
    <a href="https://www.npmjs.com/package/@designliquido/foles" target="_blank">
      <img src="https://img.shields.io/npm/v/@designliquido/foles" />
    </a>
    <img src="https://img.shields.io/github/license/Designliquido/FolEs" />
  </p>

  <p align="center">
    Acompanhe a Design Líquido nas redes sociais:
  </p>

  <p align="center">
    <a href="https://twitter.com/designliquido" target="_blank"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=Twitter&color=1DA1F2&logo=Twitter&logoColor=FFFFFF&label=" /></a>
    <a href="https://www.instagram.com/design.liquido" target="_blank"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=Instagram&color=E4405F&logo=Instagram&logoColor=FFFFFF&label=" /></a>
    <a href="https://www.youtube.com/channel/UCJRn3B7r0aex6LCaOyrQtZQ" target="_blank"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=YouTube&color=FF0000&logo=YouTube&logoColor=FFFFFF&label=" /></a>
    <a href="https://www.linkedin.com/company/design-liquido" target="_blank"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=LinkedIn&color=0A66C2&logo=LinkedIn&logoColor=FFFFFF&label=" /></a>
    <a href="https://www.tiktok.com/@designliquido" target="_blank"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=TikTok&color=000000&logo=TikTok&logoColor=FFFFFF&label=" /></a>
  </p>
</p>

## Motivação

Assim como linguagens de programação e de marcação, linguagens de estilo como CSS podem ser difíceis de aprender em português.

FolEs começa do mesmo ponto que [SASS](https://sass-lang.com/), como uma linguagem de extensão que gera CSS. A base de CSS é HTML. A base de FolEs é [LMHT](https://github.com/DesignLiquido/LMHT).

Adicionalmente, FolEs possui um recurso de tradução reversa. Em outras palavras, FolEs pode ingerir um arquivo CSS e devolver seu correspondente em FolEs.

## Exemplos

Se queremos definir estilos para um documento inteiro, podemos usar:

```
lmht {
    tamanho-fonte: 12px;
}
```

Isso traduz para o seguinte CSS:

```css
html {
    font-size: 12px;
}
```

## Instalação

Para instalar FolEs globalmente, use o seguinte comando:

```sh
npm i -g @designliquido/foles
```

## Execução

Após instalar globalmente pelo npm, para executar FolEs traduzindo um arquivo chamado `exemplo.foles`, use:

```sh
foles exemplo.foles
```

Para tradução reversa:

```sh
foles exemplo.css
```

### VSCode

No Visual Studio Code, adicione no seu `launch.json` o seguinte:

```jsonc
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "FolEs",
            "skipFiles": ["<node_internals>/**", "node_modules/**"],
            "cwd": "${workspaceRoot}",
            "console": "integratedTerminal",
            "args": [
                "${workspaceFolder}${pathSeparator}execucao.ts",
                "${workspaceFolder}${pathSeparator}exemplos${pathSeparator}exemplo.foles"
            ],
            "runtimeExecutable": "node",
            "runtimeArgs": ["--nolazy", "-r", "ts-node/register/transpile-only"]
        },
    ]
```

## Arquitetura

FolEs copia vários elementos de [Delégua](https://github.com/DesignLiquido/delegua), como um Lexador e um Avaliador Sintático, mas contém um elemento original (um Tradutor, que usa o retorno do Avaliador Sintático para gerar uma folha de estilo em CSS). 

### Seletores

Um seletor é uma expressão que encontra N elementos em um documento LMHT que possuem certas características, como por exemplo o nome de uma estrutura, um id, uma classe e atributos dessa estrutura. Por exemplo:

```foles
ligacao {

}
```

Encontra todas as estruturas de um documento LMHT cujo nome da estrutura seja ligação:

```xml
<lmht>
    <cabeça>
    </cabeça>
    <corpo>
        <ligacao destino="https://github.com/DesignLiquido">GitHub da Design Líquido</ligacao>
        <ligacao destino="https://github.com/DesignLiquido/delegua">Linguagem Delégua</ligacao>
        <ligacao destino="https://github.com/DesignLiquido/FolEs">Linguagem FolEs</ligacao>
    </corpo>
</lmht>
```

Neste exemplo, portanto, irá encontrar três estruturas.

Podemos ainda selecionar por um identificador único:

```foles
#ligacao1 {

}
```

Para o exemplo modificado:

```xml
<lmht>
    <cabeça>
    </cabeça>
    <corpo>
        <ligacao id="ligacao1" destino="https://github.com/DesignLiquido">GitHub da Design Líquido</ligacao>
        <ligacao id="ligacao2" destino="https://github.com/DesignLiquido/delegua">Linguagem Delégua</ligacao>
        <ligacao id="ligacao3" destino="https://github.com/DesignLiquido/FolEs">Linguagem FolEs</ligacao>
    </corpo>
</lmht>
```

Iremos encontrar uma estrutura. Ainda, podemos usar algo assim:

```foles
.minhaligacao {

}
```

E modificar o exemplo mais uma vez:

```xml
<lmht>
    <cabeça>
    </cabeça>
    <corpo>
        <ligacao classe="minhaligacao" destino="https://github.com/DesignLiquido">GitHub da Design Líquido</ligacao>
        <ligacao classe="outraligacao" destino="https://github.com/DesignLiquido/delegua">Linguagem Delégua</ligacao>
        <ligacao classe="minhaligacao" destino="https://github.com/DesignLiquido/FolEs">Linguagem FolEs</ligacao>
    </corpo>
</lmht>
```

E encontraremos apenas duas das três estruturas.

### Modificadores

Um modificador é toda e qualquer propriedade declarada no escopo de um seletor que irá causar uma modificação em estruturas de um documento. Voltando ao exemplo da seção anterior:

```foles
ligacao {
    tamanho-fonte: 16px;
}
```

Se aplicamos este estilo ao documento do primeiro exemplo, todas as três estruturas receberão uma modificação de estilo, ou seja o tamanho da fonte (texto) passa a ter o tamanho de 16 pixels.

### Atributos de Modificadores: Valores, Quantificadores e Qualitativos

FolEs trabalha com três conceitos de atributos em todas as etapas dos ciclos de ingestão de arquivos:

- **Valores**: são os atributos que acompanham modificadores. No exemplo `tamanho-fonte: 16px;`, `tamanho-fonte` é o modificador, e `16px` é o valor. Valores podem ser formados por números absolutos, números acompanhados de quantificadores, quantitativos ou ainda uma combinação de todos esses;
- **Quantificadores**: são complementos de valores. No exemplo anterior, `px` é o quantificador, e acompanha o número `16`, a parte numérica do valor;
- **Qualitativos**: são valores adjetivos. Nem todo valor é expresso por um número e uma unidade de medida. Explorando um outro exemplo:

```foles
ligacao {
    estilo-contorno: pontilhado;
}
```

`estilo-contorno` é um modificador que pede um qualitativo. `pontihado` é um qualitativo.

## Mapeamentos


| FolEs                                                                                            | CSS       |
| ------------------------------------------------------------------------------------------------ | ----------|
| [agrupar-palavra](https://github.com/DesignLiquido/FolEs/wiki/Modificador-agrupar-palavra)                         | [word-break](https://developer.mozilla.org/pt-BR/docs/Web/CSS/word-break) |
| [agrupar-vazamento](https://github.com/DesignLiquido/FolEs/wiki/Modificador-agrupar-vazamento)                       | overflow-wrap |
| [ajustar-objeto](https://github.com/DesignLiquido/FolEs/wiki/Modificador-ajustar-objeto)                          | object-fit |
| [ajustar-tamanho-fonte](https://github.com/DesignLiquido/FolEs/wiki/Modificador-ajustar-tamanho-fonte)                   | font-size-adjust |
| [ajuste-cor-forcado](https://github.com/DesignLiquido/FolEs/wiki/Modificador-ajuste-cor-for%C3%A7ado)                      | forced-color-adjust |
| [ajuste-cor-forçado](https://github.com/DesignLiquido/FolEs/wiki/Modificador-ajuste-cor-for%C3%A7ado)                      | forced-color-adjust |
| [alinhar-conteudo](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-conte%C3%BAdo)                        | align-content |
| [alinhar-conteúdo](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-conte%C3%BAdo)                        | align-content |
| [alinhar-encaixe-rolagem-mouse](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-encaixe-rolagem-mouse)           | scroll-snap-align |
| [alinhar-itens](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-itens)                           | align-items |
| [alinhar-se](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-se)                              | align-self |
| [alinhar-texto](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-texto)                           | text-align |
| [alinhar-vertical](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-vertical)                        | vertical-align |
| [alinhar-ultimo-item](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-%C3%BAltimo-item)                     | text-align-last |
| [alinhar-último-item](https://github.com/DesignLiquido/FolEs/wiki/Modificador-alinhar-%C3%BAltimo-item)                     | text-align-last |
| [altura](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura)                                  | height |
| [altura-linha](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura-linha)                            | line-height |
| [altura-maxima](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura-m%C3%A1xima)                           | max-height |
| [altura-máxima](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura-m%C3%A1xima)                           | max-height |
| [altura-minima](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura-m%C3%ADnima)                           | min-height |
| [altura-mínima](https://github.com/DesignLiquido/FolEs/wiki/Modificador-altura-m%C3%ADnima)                           | min-height |
| [animacao](https://github.com/DesignLiquido/FolEs/wiki/Modificador-anima%C3%A7%C3%A3o)                                | animation |
| [animação](https://github.com/DesignLiquido/FolEs/wiki/Modificador-anima%C3%A7%C3%A3o)                                | animation |
| [ao-mudar](https://github.com/DesignLiquido/FolEs/wiki/Modificador-ao-mudar)                                | will-change |
| [aparencia](https://github.com/DesignLiquido/FolEs/wiki/Modificador-apar%C3%AAncia)                               | appearance |
| [aparência](https://github.com/DesignLiquido/FolEs/wiki/Modificador-apar%C3%AAncia)                               | appearance |
| [area-mascara](https://github.com/DesignLiquido/FolEs/wiki/Modificador-area-mascara)                            | mask-clip |
| [área-máscara](https://github.com/DesignLiquido/FolEs/wiki/Modificador-area-mascara)                            | mask-clip |
| [atraso-animacao](https://github.com/DesignLiquido/FolEs/wiki/Modificador-atraso-anima%C3%A7%C3%A3o)                         | animation-delay |
| [atraso-animação](https://github.com/DesignLiquido/FolEs/wiki/Modificador-atraso-anima%C3%A7%C3%A3o)                         | animation-delay |
| [atraso-transicao](https://github.com/DesignLiquido/FolEs/wiki/Modificador-atraso-transi%C3%A7%C3%A3o)                        | transition-delay |
| [atraso-transição](https://github.com/DesignLiquido/FolEs/wiki/Modificador-atraso-transi%C3%A7%C3%A3o)                        | transition-delay |
| borda                                   | border |
| borda-direita                           | border-right |
| borda-em-bloco                          | border-block |
| borda-em-linha                          | border-inline |
| borda-esquerda                          | border-left |
| borda-inferior                          | border-bottom |
| borda-mascara                           | mask-border |
| borda-máscara                           | mask-border |
| borda-superior                          | border-top |
| calha-barra-rolagem                     | scrollbar-gutter |
| celulas-vazias                          | empty-cells |
| células-vazias                          | empty-cells |
| citacoes                                | quotes |
| citações                                | quotes |
| coluna-em-grade                         | grid-column |
| colunas                                 | columns |
| combinar-texto-vertical                 | text-combine-upright |
| comportamento-em-bloco-rolagem-mouse    | overscroll-behavior-block |
| comportamento-em-linha-rolagem-mouse    | overscroll-behavior-inline |
| comportamento-horizontal-rolagem-mouse  | overscroll-behavior-x |
| comportamento-rolagem                   | scroll-behavior |
| comportamento-rolagem-mouse             | overscroll-behavior |
| comportamento-vertical-rolagem-mouse    | overscroll-behavior-y |
| composicao-mascara                      | mask-composite |
| composição-máscara                      | mask-composite |
| configuracoes-variacao-fonte            | font-variation-settings |
| configurações-variação-fonte            | font-variation-settings |
| contar-coluna                           | column-count |
| contem                                  | contain |
| contém                                  | contain |
| conteudo                                | content |
| conteúdo                                | content |
| contorno                                | outline |
| coordenadas                             | translate |
| cor                                     | color |
| cor-barra-rolagem                       | scrollbar-color |
| cor-borda                               | border-color |
| cor-borda-direita                       | border-right-color |
| cor-borda-em-bloco                      | border-block-color |
| cor-borda-em-linha                      | border-inline-color |
| cor-borda-esquerda                      | border-left-color |
| cor-borda-inferior                      | border-bottom-color |
| cor-borda-superior                      | border-top-color |
| cor-contorno                            | outline-color |
| cor-cursor                              | caret-color |
| cor-destaque                            | accent-color |
| cor-enfase-texto                        | text-emphasis-color |
| cor-ênfase-texto                        | text-emphasis-color |
| cor-fim-borda-em-bloco                  | border-block-end-color |
| cor-fim-borda-em-linha                  | border-inline-end-color |
| cor-fundo                               | background-color |
| cor-inicio-borda-em-bloco               | border-block-start-color |
| cor-início-borda-em-bloco               | border-block-start-color |
| cor-inicio-borda-em-linha               | border-inline-start-color |
| cor-início-borda-em-linha               | border-inline-start-color |
| cursor                                  | cursor |
| decoracao-cor-texto                     | text-decoration-color |
| decoração-cor-texto                     | text-decoration-color |
| decoracao-espessura-texto               | text-decoration-thickness |
| decoração-espessura-texto               | text-decoration-thickness |
| decoracao-estilo-texto                  | text-decoration-style |
| decoração-estilo-texto                  | text-decoration-style |
| decoracao-linha-texto                   | text-decoration-line |
| decoração-linha-texto                   | text-decoration-line |
| decoracao-texto                         | text-decoration |
| decoração-texto                         | text-decoration |
| decoracao-texto-sublinhado              | text-decoration-skip-ink |
| decoração-texto-sublinhado              | text-decoration-skip-ink |
| definir-contador                        | counter-set |
| design-tabela                           | table-layout |
| deslocamento                            | offset |
| deslocamento-em-ancora                  | offset-anchor |
| deslocamento-em-âncora                  | offset-anchor |
| deslocamento-texto-sublinhado           | text-underline-offset |
| deslocar-contorno                       | outline-offset |
| deslocar-pontuacao                      |	hanging-punctuation |
| deslocar-pontuação                      |	hanging-punctuation |
| direcao                                 | direction |
| direção                                 | direction |
| direcao-animacao                        | animation-direction |
| direção-animação                        | animation-direction |
| distancia-deslocamento                  | offset-distance |
| distância-deslocamento                  | offset-distance |
| duracao-animacao                        | animation-duration |
| duração-animação                        | animation-duration |
| duracao-transicao                       | transition-duration |
| duração-transição                       | transition-duration |
| enfase-texto                            | text-emphasis |
| ênfase-texto                            | text-emphasis |
| escala                                  | scale |
| espacamento                             | gap |
| espaçamento                             | gap |
| espacamento-coluna                      | column-gap |
| espaçamento-coluna                      | column-gap |
| espacamento-coluna-em-grade             | grid-column-gap |
| espaçamento-coluna-em-grade             | grid-column-gap |
| espacamento-em-grade                    | grid-gap |
| espaçamento-em-grade                    | grid-gap |
| espacamento-fonte                       | font-kerning |
| espaçamento-fonte                       | font-kerning |
| espacamento-letras                      | letter-spacing |
| espaçamento-letras                      | letter-spacing |
| espacamento-linha-em-grade              | grid-row-gap |
| espaçamento-linha-em-grade              | grid-row-gap |
| espacamento-linhas                      | row-gap |
| espaçamento-linhas                      | row-gap |
| espacamento-palavras                    | word-spacing |
| espaçamento-palavras                    | word-spacing |
| espaco-borda                            | border-spacing |
| espaço-borda                            | border-spacing |
| espaco-em-branco                        | white-space |
| espaço-em-branco                        | white-space |
| espessura-fonte                         | font-weight |
| esquema-cor                             | color-scheme |
| estender-borda-imagem                   | border-image-outset |
| estender-coluna                         | column-span |
| esticar-fonte                           | font-stretch |
| estilo-borda                            | border-style |
| estilo-borda-direita                    | border-right-style |
| estilo-borda-em-bloco                   | border-block-style |
| estilo-borda-em-linha                   | border-inline-style |
| estilo-borda-esquerda                   | border-left-style |
| estilo-borda-inferior                   | border-bottom-style |
| estilo-borda-superior                   | border-top-style |
| estilo-contorno                         | outline-style |
| estilo-enfase-texto                     | text-emphasis-style |
| estilo-ênfase-texto                     | text-emphasis-style |
| estilo-fim-borda-em-bloco               | border-block-end-style |
| estilo-fim-borda-em-linha               | border-inline-end-style |
| estilo-fonte                            | font-style |
| estilo-inicio-borda-em-bloco            | border-block-start-style |
| estilo-início-borda-em-bloco            | border-block-start-style |
| estilo-inicio-borda-em-linha            | border-inline-start-style |
| estilo-início-borda-em-linha            | border-inline-start-style |
| estilo-lista                            | list-style |
| estilo-lista-imagem                     | list-style-image |
| estilo-lista-posicao                    | list-style-position |
| estilo-lista-posição                    | list-style-position |
| estilo-lista-tipo                       | list-style-type |
| eventos-ponteiro                        | pointer-events |
| exibicao                                | display |
| exibição                                | display |
| fatiar-borda-mascara                    | mask-border-slice |
| fatiar-borda-máscara                    | mask-border-slice |
| fatiar-imagem-borda                     | border-image-slice |
| filtro                                  | filter |
| filtro-fundo                            | backdrop-filter |
| fim-borda-em-bloco                      | border-block-end |
| fim-borda-em-linha                      | border-inline-end |
| fim-coluna-em-grade                     | grid-column-end |
| fim-linha-em-grade                      | grid-row-end |
| fixar-fundo                             | background-attachment |
| flex                                    | flex |
| flex-agrupar                            | flex-wrap |
| flex-comprimento                        | flex-basis |
| flex-crescimento                        | flex-grow |
| flex-direcao                            | flex-direction |
| flex-direção                            | flex-direction |
| flex-fluxo                              | flex-flow |
| flex-reduzir                            | flex-shrink |
| flutuar                                 | float |
| fluxo                                   | clear |
| fluxo-em-grade                          | grid-auto-flow |
| fonte                                   | font |
| fonte-texto                             | font-family |
| forma-externa                           | shape-outside |
| forma-margem                            | shape-margin |
| fundo                                   | background |
| girar                                   | rotate |
| grade                                   | grid |
| hifens                                  | hyphens |
| hífens                                  | overflow |
| imagem-borda                            | border-image |
| imagem-fundo                            | background-image |
| imagem-mascara                          |	mask-image |
| imagem-máscara                          |	mask-image |
| impressao-ajuste-cor                    |    print-color-adjust |
| impressão-ajuste-cor                    |	print-color-adjust |
| incrementar-contador                    |	counter-increment |
| indentacao-texto                        |	text-indent |
| indentação-texto                        |	text-indent |
| indice-z                                |	z-index |
| índice-z                                |	z-index |
| inicio-borda-em-bloco                   |	border-block-start |
| início-borda-em-bloco                   |	border-block-start |
| inicio-borda-em-linha                   |	border-inline-start |
| início-borda-em-linha                   |	border-inline-start |
| inicio-borda-mascara                    |	mask-border-outset |
| início-borda-máscara                    |	mask-border-outset |
| inicio-coluna-em-grade                  |	grid-column-start |
| início-coluna-em-grade                  |	grid-column-start |
| inicio-insercao-em-bloco                |	inset-block-start |
| início-inserção-em-bloco                |	inset-block-start |
| inicio-insercao-em-linha                |	inset-inline-start |
| início-inserção-em-linha                |	inset-inline-start |
| inicio-linha-em-grade                   |	grid-row-start |
| início-linha-em-grade                   |	grid-row-start |
| inicio-margem-em-bloco                  |	margin-block-start |
| início-margem-em-bloco                  |	margin-block-start |
| inicio-margem-em-linha                  |	margin-inline-start |
| início-margem-em-linha                  |	margin-inline-start |
| inicio-recuo-em-bloco                   |	padding-block-start |
| início-recuo-em-bloco                   |	padding-block-start |
| inicio-recuo-em-linha                   |	padding-inline-start |
| início-recuo-em-linha                   |	padding-inline-start |
| insercao                                |	inset |
| inserção                                |	inset |
| insercao-em-bloco                       |	inset-block | 
| inserção-em-bloco                       |	inset-block |
| insercao-em-bloco-fim                   |	inset-block-end |
| inserção-em-bloco-fim                   |	inset-block-end |
| insercao-em-linha                       |	inset-inline |
| inserção-em-linha                       |	inset-inline |
| insercao-em-linha-fim                   |	inset-inline-end |
| inserção-em-linha-fim                   |	inset-inline-end |
| isolamento                              |	isolation |
| justificar-conteudo                     |	justify-content |
| justificar-conteúdo                     |	justify-content |
| justificar-itens                        |	justify-items |
| justificar-se                           |	justify-self |
| justificar-texto                        |	text-justify |
| largura                                 |	width |
| largura-barra-rolagem                   |	scrollbar-width |
| largura-borda                           |	border-width |
| largura-borda-direita                   |	border-right-width |
| largura-borda-em-bloco                  |	border-block-width |
| largura-borda-em-linha                  |	border-inline-width |
| largura-borda-esquerda                  |	border-left-width |
| largura-borda-inferior                  |	border-bottom-width |
| largura-borda-mascara                   |	mask-border-width |
| largura-borda-máscara                   |	mask-border-width |
| largura-borda-superior                  |	border-top-width |
| largura-coluna                          |	column-width |
| largura-contorno                        |	outline-width |
| largura-fim-borda-em-bloco              |	border-block-end-width |
| largura-fim-borda-em-linha              |	border-inline-end-width |
| largura-imagem-borda                    |	border-image-width |
| largura-inicio-borda-em-bloco           |	border-block-start-width |
| largura-início-borda-em-bloco           |	border-block-start-width |
| largura-inicio-borda-em-linha           |	border-inline-start-width |
| largura-início-borda-em-linha           |	border-inline-start-width |
| largura-maxima                          |	max-width |
| largura-máxima                          |    max-width |
| largura-minima                          |	min-width |
| largura-mínima                          |	min-width |
| limite-forma-imagem                     |	shape-image-threshold |
| linha-em-grade                          |	grid-row |
| linhas-inferiores                       |	orphans |
| linhas-superiores                       |	widows |
| margem                                  |	margin |
| margem-direita                          |	margin-right |
| margem-direita-rolagem-mouse            |	scroll-margin-right |
| margem-em-bloco                         |	margin-block          |
| margem-em-bloco-fim                     |	margin-block-end |
| margem-em-bloco-rolagem-mouse           |	scroll-margin-block |
| margem-em-linha                         |	margin-inline |
| margem-em-linha-fim                     |	margin-inline-end |
| margem-em-linha-rolagem-mouse           |	scroll-margin-inline |
| margem-esquerda                         |	margin-left |
| margem-esquerda-rolagem-mouse           |	scroll-margin-left |
| margem-inferior                         |	margin-bottom         |
| margem-inferior-rolagem-mouse           |	scroll-margin-bottom |
| margem-rolagem-mouse                    |	scroll-margin |
| margem-superior                         |	margin-top |
| margem-superior-rolagem-mouse           |	scroll-margin-top |
| mascara                                 |	mask |
| máscara                                 |	mask |
| mesclar-fundo                           |	background-blend-mode |
| modelo-colunas-em-grade                 |	grid-template-column |
| modelo-em-grade                         |	grid-template |
| modelo-geral-em-grade                   |	grid-template-areas |
| modelo-linhas-em-grade                  |	grid-template-rows |
| modo-borda-mascara                      |	mask-border-mode |
| modo-borda-máscara                      |	mask-border-mode |
| modo-escrita                            |	writing-mode |
| modo-mascara                            |	mask-mode |
| modo-máscara                            |	mask-mode |  
| modo-mescla                             |	mix-blend-mode |
| modo-preenchimento-animacao             |	animation-fill-mode |
| modo-preenchimento-animação             |	animation-fill-mode |
| nome-animacao                           |	animation-name |
| nome-animação                           |	animation-name |
| opacidade                               |	opacity |
| ordem-pintura                           |	paint-order |
| ordenar                                 |	order |
| orientacao-imagem                       |	image-orientation |
| orientação-imagem                       |	image-orientation |
| orientacao-texto                        |	text-orientation |
| orientação-texto                        |	text-orientation |
| origem-borda-mascara                    |	mask-border-source |
| origem-borda-máscara                    |	mask-border-source |
| origem-fundo                            |	background-origin |
| origem-imagem-borda	                  | border-image-source |
| origem-mascara                          |	mask-origin |
| origem-máscara                          |	mask-origin |
| origem-perspectiva                      |	perspective-origin |
| parar-encaixe-rolagem-mouse             |	scroll-snap-stop |
| perspectiva                             |	perspective |
| posicao                                 |	position |
| posição                                 |	position |
| posicao-deslocamento                    |	offset-position |
| posição-deslocamento                    |	offset-position |
| posicao-direita                         |	right |
| posição-direita                         |	right |
| posicao-enfase-texto                    |	text-emphasis-position |
| posição-ênfase-texto                    |	text-emphasis-position |
| posicao-esquerda                        |	left |
| posição-esquerda                        |	left |
| posicao-fundo                           |	background-position |
| posição-fundo                           |	background-position |
| posicao-horizontal-fundo                |	background-position-x |
| posição-horizontal-fundo                |	background-position-x |
| posicao-inferior                        |	bottom |
| posição-inferior                        |	bottom |
| posicao-legenda                         |	caption-side |
| posição-legenda                         |	caption-side |
| posicao-mascara                         |	mask-position |
| posição-máscara                         |	mask-position |
| posicao-objeto                          |	object-position |
| posição-objeto                          |	object-position |
| posicao-superior                        |	top |
| posição-superior                        |	top |
| posicao-texto-sublinhado                |	text-underline-position |
| posição-texto-sublinhado                |	text-underline-position |
| posicao-vertical-fundo                  |	background-position-y |
| posição-vertical-fundo                  |	background-position-y |
| posicionar-conteudo                     |	place-content |
| posicionar-conteúdo                     |	place-content |
| posicionar-itens                        |	place-items |
| posicionar-se                           |	place-self |
| preencher-coluna                        |	column-fill |
| proporcao-tela                          |	aspect-ratio |
| proporção-tela                          |	aspect-ratio |
| propriedade-transicao                   |	transition-property |
| propriedade-transição                   |	transition-property |
| quebra-decoracao-caixa                  |	box-decoration-break |
| quebra-decoração-caixa                  |	box-decoration-break |
| quebrar-antes                           |	break-before |
| quebrar-apos                            |	break-after |
| quebrar-após                            |	break-after |
| quebrar-dentro                          |	break-inside |
| quebrar-linha                           |	line-break |
| quebrar-pagina-antes                    |	page-break-before |
| quebrar-página-antes                    |	page-break-before |
| quebrar-pagina-apos                     |	page-break-after |
| quebrar-página-após                     |	page-break-after |
| quebrar-pagina-dentro                   |	page-break-inside |
| quebrar-página-dentro                   |	page-break-inside |
| quebrar-palavra                         |	word-break | 
| raio-borda                              |    border-radius | 
| raio-direito-borda-inferior             |	border-bottom-right-radius |
| raio-direito-borda-superior             |	border-top-right-radius |
| raio-esquerdo-borda-inferior            |	border-bottom-left-radius |
| raio-esquerdo-borda-superior            |	border-top-left-radius |
| recolher-borda                          |	border-collapse |
| recortar                                |	clip |
| recortar-fundo                          |	background-clip |
| recortar-margem-vazada                  |	overflow-clip-margin |
| recuo                                   |	padding |
| recortar-fundo                          |	background-clip |
| recortar-margem-vazada                  |	overflow-clip-margin |
| recuo                                   |	padding |
| recuo-direito                           |	padding-right |
| recuo-direito-rolagem-mouse             |	scroll-padding-right |
| recuo-em-bloco                          |	padding-block |
| recuo-em-bloco-fim                      |	padding-block-end |
| recuo-em-bloco-rolagem-mouse            |	scroll-padding-block |
| recuo-em-linha                          |	padding-inline |
| recuo-em-linha-fim                      |	padding-inline-end |
| recuo-em-linha-rolagem-mouse            |	scroll-padding-inline |
| recuo-esquerdo                          |	padding-left |
| recuo-esquerdo-rolagem-mouse            |	scroll-padding-left |
| recuo-inferior                          |	padding-bottom |
| recuo-inferior-rolagem-mouse            |	scroll-padding-bottom |
| recuo-rolagem-mouse                     |	scroll-padding |
| recuo-superior                          |	padding-top |
| recuo-superior-rolagem-mouse            |	scroll-padding-top |
| recursos-fonte                          |	font-feature-settings |
| redimensionar                           |	resize |
| regras-coluna                           |	column-rule |
| regras-cor-coluna                       |	column-rule-color |
| regras-estilo-coluna                    |	column-rule-style |
| regras-largura-coluna                   |	column-rule-width |
| reiniciar-contador                      |	counter-reset |
| reiniciar-tudo                          |	all |
| renderizacao-imagem                     |	image-rendering |
| renderização-imagem                     |	image-rendering |
| renderizacao-texto                      |	text-rendering |
| renderização-texto                      |	text-rendering |
| repeticao-borda-mascara                 |	mask-border-repeat |
| repetição-borda-máscara                 |	mask-border-repeat |
| repetir-animacao                        |	animation-iteration-count |
| repetir-animação                        |	animation-iteration-count |
| repetir-fundo                           |	background-repeat |
| repetir-imagem-borda                    |	border-image-repeat |        
| repetir-mascara                         |	mask-repeat |
| repetir-máscara                         |	mask-repeat |
| rotacao-deslocamento                    |	offset-rotate |
| rotação-deslocamento                    |	offset-rotate |
| selecao-usuario                         |	user-select |
| seleção-usuario                         |	user-select |
| sintetizar-fonte                        |	font-synthesis |
| sombra-caixa                            |	box-shadow |
| sombra-texto                            |	text-shadow |
| status-animacao                         |	animation-play-state |
| status-animação                         |	animation-play-state |
| substituir-idioma-fonte                 |	font-language-override |
| tabulacao                               |	tab-size |
| tabulação                               |	tab-size |
| tamanho-caixa                           |	box-sizing |
| tamanho-colunas-em-grade                |	grid-auto-columns |
| tamanho-em-bloco                        |	block-size |
| tamanho-em-linha                        |	inline-size |
| tamanho-fonte                           |	font-size |
| tamanho-fundo                           |	background-size |
| tamanho-grade                           |	grid-area |
| tamanho-linhas-em-grade                 |	grid-auto-rows |
| tamanho-mascara                         |	mask-size |
| tamanho-máscara                         |	mask-size |
| tamanho-maximo-em-bloco                 |	max-block-size |
| tamanho-máximo-em-bloco                 |	max-block-size |
| tamanho-maximo-em-linha                 |	max-inline-size |
| tamanho-máximo-em-linha                 |	max-inline-size |
| tamanho-minimo-em-bloco                 |	min-block-size |
| tamanho-mínimo-em-bloco                 |	min-block-size | 
| tamanho-minimo-em-linha                 |	min-inline-size |
| tamanho-mínimo-em-linha                 |	min-inline-size |
| tamanho-optico-fonte                    |	font-optical-sizing |
| tamanho-óptico-fonte                    |	font-optical-sizing |
| tempo-transicao                         |	transition-timing-function |
| tempo-transição                         |	transition-timing-function |
| texto-bidirecional                      |	unicode-bidi |
| tipo-encaixe-rolagem-mouse              |	scroll-snap-type |
| tipo-mascara                            |	mask-type |
| tipo-máscara                            |	mask-type |
| toque-tela                              |	touch-action |
| trajeto-deslocamento                    |	offset-path |
| transformar                             |	transform |
| transformar-caixa                       |	transform-box |
| transformar-estilo                      |	transform-style |
| transformar-origem                      |	transform-origin |
| transformar-texto                       |	text-transform |
| transicao                               |	transition |
| transição                               |	transition |
| variacao-fonte                          |	font-variant |
| variação-fonte                          |	font-variant |
| variacao-fonte-alternativa              |	font-variant-alternates |
| variação-fonte-alternativa              |	font-variant-alternates |
| variacao-fonte-asiatica                 |	font-variant-east-asian |
| variação-fonte-asiática                 |	font-variant-east-asian |
| variacao-fonte-ligacao                  |	font-variant-ligatures |
| variação-fonte-ligação                  |	font-variant-ligatures |
| variacao-fonte-maiuscula                |	font-variant-caps |
| variação-fonte-maiúscula                |	font-variant-caps |
| variacao-fonte-numerica                 |	font-variant-numeric |
| variação-fonte-numérica                 |	font-variant-numeric |
| variacao-fonte-posicao                  |	font-variant-position |
| variação-fonte-posição                  |	font-variant-position |
| vazamento                               |	overflow |
| vazamento-em-ancora                     |	overflow-anchor |
| vazamento-em-âncora                     |	overflow-anchor |
| vazamento-em-bloco                      |	overflow-block |
| vazamento-em-linha                      |	overflow-inline |
| vazamento-horizontal                    |	overflow-x |
| vazamento-texto                         |	text-overflow |
| vazamento-vertical                      |	overflow-y |
| velocidade-animacao                     | animation-timing-function |
| velocidade-animação                     | animation-timing-function |
| visibilidade                            |	visibility |
| visibilidade-conteudo                   |	content-visibility |
| visibilidade-conteúdo                   |	content-visibility |
| visibilidade-fundo                      |	backface-visibility |
