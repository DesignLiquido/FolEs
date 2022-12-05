# FolEs

Folhas de Estilo em Português, para geração de CSS.

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

## Mapeamentos


| FolEs         | CSS       |
| ------------- | ----------|
| agrupar-palavra | word-wrap |
| agrupar-vazamento | overflow-wrap |
| ajustar-objeto | object-fit |
| ajustar-tamanho-fonte | font-size-adjust |
| ajuste-cor-forcado | forced-color-adjust |
| ajuste-cor-forçado | forced-color-adjust |
| alinhar-conteudo | align-content |
| alinhar-conteúdo | align-content |
| alinhar-encaixe-rolagem-mouse | scroll-snap-align |
| alinhar-itens | align-items |
| alinhar-se | align-self |
| alinhar-texto | text-align |
| alinhar-ultimo-item | text-align-last |
| alinhar-último-item | text-align-last |
| alinhar-vertical | vertical-align |
| altura | height |
| altura-linha | line-height |
| altura-maxima | max-height |
| altura-máxima | max-height |
| altura-minima | min-height |
| altura-mínima | min-height |
| animacao | animation |
| animação | animation |
| animacao-velocidade | animation-timing-function |
| animação-velocidade | animation-timing-function |
| ao-mudar | will-change |
| aparencia | appearance |
| aparência | appearance |
| area-mascara | mask-clip |
| área-máscara | mask-clip |
| aspas | quotes |
| atraso-animacao | animation-delay |
| atraso-animação | animation-delay |
| atraso-transicao | transition-delay |
| atraso-transição | transition-delay |
| borda | border |
| borda-direita | border-right |
| borda-em-bloco | border-block |
| borda-em-linha | border-inline |
| borda-esquerda | border-left |
| borda-inferior | border-bottom |
| borda-mascara | mask-border |
| borda-máscara | mask-border |
| borda-superior | border-top |
| calha-barra-rolagem | scrollbar-gutter |
| celulas-vazias | empty-cells |
| células-vazias | empty-cells |
| coluna-em-grade | grid-column |
| colunas | columns |
| combinar-texto-vertical | text-combine-upright |
| comportamento-em-bloco-rolagem-mouse | overscroll-behavior-block |
| comportamento-em-linha-rolagem-mouse | overscroll-behavior-inline |
| comportamento-horizontal-rolagem-mouse | overscroll-behavior-x |
| comportamento-rolagem | scroll-behavior |
| comportamento-rolagem-mouse | overscroll-behavior |
| comportamento-vertical-rolagem-mouse | overscroll-behavior-y |
| composicao-mascara | mask-composite |
| composição-máscara | mask-composite |
| configuracoes-variacao-fonte | font-variation-settings |
| configurações-variação-fonte | font-variation-settings |
| contar-coluna | column-count |
| contem | contain |
| contém | contain |
| conteudo | content |
| conteúdo | content |
| contorno | outline |
| coordenadas | translate |
| cor | color |
| cor-barra-rolagem | scrollbar-color |
| cor-borda | border-color |
| cor-borda-direita | border-right-color |
| cor-borda-em-bloco | border-block-color |
| cor-borda-em-linha | border-inline-color |
| cor-borda-esquerda | border-left-color |
| cor-borda-inferior | border-bottom-color |
| cor-borda-superior | border-top-color |
| cor-contorno | outline-color |
| cor-cursor | caret-color |
| cor-destaque | accent-color |
| cor-enfase-texto | text-emphasis-color |
| cor-ênfase-texto | text-emphasis-color |
| cor-fim-borda-em-bloco | border-block-end-color |
| cor-fim-borda-em-linha | border-inline-end-color |
| cor-fundo | background-color |
| cor-inicio-borda-em-bloco | border-block-start-color |
| cor-início-borda-em-bloco | border-block-start-color |
| cor-inicio-borda-em-linha | border-inline-start-color |
| cor-início-borda-em-linha | border-inline-start-color |
| cursor | cursor |
| decoracao-cor-texto  | text-decoration-color |
| decoração-cor-texto  | text-decoration-color |
| decoracao-espessura-texto | text-decoration-thickness |
| decoração-espessura-texto | text-decoration-thickness |
| decoracao-estilo-texto | text-decoration-style |
| decoração-estilo-texto | text-decoration-style |
| decoracao-linha-texto | text-decoration-line |
| decoração-linha-texto | text-decoration-line |
| decoracao-texto | text-decoration |
| decoração-texto | text-decoration |
| decoracao-texto-sublinhado | text-decoration-skip-ink |
| decoração-texto-sublinhado | text-decoration-skip-ink |
| definir-contador | counter-set |
| design-tabela | table-layout |
| deslocamento | offset |
| deslocamento-em-ancora | offset-anchor |
| deslocamento-em-âncora | offset-anchor |
| deslocamento-texto-sublinhado | text-underline-offset |
| deslocar-contorno | outline-offset |
| direcao | direction |
| direção | direction |
| direcao-animacao | animation-direction |
| direção-animação | animation-direction |
| distancia-deslocamento | offset-distance |
| distância-deslocamento | offset-distance |
| duracao-animacao | animation-duration |
| duração-animação | animation-duration |
| duracao-transicao | transition-duration |
| duração-transição | transition-duration |
| enfase-texto | text-emphasis |
| ênfase-texto | text-emphasis |
| escala | scale |
| espacamento | gap |
| espaçamento | gap |
| espacamento-coluna  | column-gap |
| espaçamento-coluna | column-gap |
| espacamento-coluna-em-grade | grid-column-gap |
| espaçamento-coluna-em-grade | grid-column-gap |
| espacamento-em-grade | grid-gap |
| espaçamento-em-grade | grid-gap |
| espacamento-fonte | font-kerning |
| espaçamento-fonte | font-kerning |
| espacamento-letras | letter-spacing |
| espaçamento-letras | letter-spacing |
| espacamento-linha-em-grade | grid-row-gap |
| espaçamento-linha-em-grade | grid-row-gap |
| espacamento-linhas | row-gap |
| espaçamento-linhas | row-gap |
| espacamento-palavras | word-spacing |
| espaçamento-palavras | word-spacing |
| espaco-borda | border-spacing |
| espaço-borda | border-spacing |
| espaco-em-branco | white-space |
| espaço-em-branco | white-space |
| espessura-fonte | font-weight |
| esquema-cor | color-scheme |
| estender-borda-imagem | border-image-outset |
| estender-coluna | column-span |
| esticar-fonte | font-stretch |
| estilo-borda | border-style |
| estilo-borda-direita | border-right-style |
| estilo-borda-em-bloco | border-block-style |
| estilo-borda-em-linha | border-inline-style |
| estilo-borda-esquerda | border-left-style |
| estilo-borda-inferior | border-bottom-style |
| estilo-borda-superior | border-top-style |
| estilo-contorno | outline-style |
| estilo-enfase-texto | text-emphasis-style |
| estilo-ênfase-texto | text-emphasis-style |
| estilo-fim-borda-em-bloco | border-block-end-style |
| estilo-fim-borda-em-linha | border-inline-end-style |
| estilo-fonte | font-style |
| estilo-inicio-borda-em-bloco | border-block-start-style |
| estilo-início-borda-em-bloco | border-block-start-style |
| estilo-inicio-borda-em-linha | border-inline-start-style |
| estilo-início-borda-em-linha | border-inline-start-style |
| estilo-lista | list-style |
| estilo-lista-imagem | list-style-image |
| estilo-lista-posicao | list-style-position |
| estilo-lista-posição | list-style-position |
| estilo-lista-tipo | list-style-type |
| eventos-ponteiro | pointer-events |
| exibicao | display |
| exibição | display |
| fatiar-borda-mascara | mask-border-slice |
| fatiar-borda-máscara | mask-border-slice |
| fatiar-imagem-borda | border-image-slice |
| filtro | filter |
| filtro-fundo | backdrop-filter |
| fim-borda-em-bloco | border-block-end |
| fim-borda-em-linha | border-inline-end |
| fim-coluna-em-grade | grid-column-end |
| fim-linha-em-grade | grid-row-end |
| fixar-fundo | background-attachment |
| flex | flex |
| flex-agrupar | flex-wrap |
| flex-comprimento | flex-basis |
| flex-crescimento | flex-grow |
| flex-direcao | flex-direction |
| flex-direção | flex-direction |
| flex-fluxo | flex-flow |
| flex-reduzir | flex-shrink |
| flutuar | float |
| fluxo | clear |
| fluxo-em-grade | grid-auto-flow |
| fonte | font |
| fonte-texto | font-family |
| forma-externa | shape-outside |
| forma-margem | shape-margin |
| fundo | background |
| girar | rotate |
| grade | grid |
| hifens | hyphens |
| hífens | overflow |
