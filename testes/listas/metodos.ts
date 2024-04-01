export const MetodoEncaixarConteudo: Array<string> = [
    'altura-maxima',
    'altura-máxima',
    'altura-minima',
    'altura-mínima',
    'altura',
    'largura-maxima',
    'largura-máxima',
    'largura-minima',
    'largura-mínima',
    'largura',
    'tamanho-colunas-em-grade',
    'tamanho-em-linha',
    'tamanho-linhas-em-grade',
    'tamanho-maximo-em-bloco',
    'tamanho-máximo-em-bloco',
    'tamanho-maximo-em-linha',
    'tamanho-máximo-em-linha',
    'tamanho-minimo-em-bloco',
    'tamanho-mínimo-em-bloco',
    'tamanho-minimo-em-linha',
    'tamanho-mínimo-em-linha',
    'modelo-em-grade',
];

export const MetodoLimitar: Array<string> = [
    'altura',
];

export const MetodoMinMax: Array<string> = [
    'grade',
    'tamanho-colunas-em-grade',
    'tamanho-linhas-em-grade',
    'modelo-colunas-em-grade',
    'modelo-linhas-em-grade',
];

export const MetodoPassos: Array<string> = [
    'tempo-transicao',
    'tempo-transição',
    'velocidade-animacao',
    'velocidade-animação',
];

export const MetodoCurvaCubica: Array<string> = [
    'tempo-transicao',
    'tempo-transição',
    'velocidade-animacao',
    'velocidade-animação',
];

export const MetodoLinear: Array<string> = [
    'transicao',
    'transição',
];

export const MetodoCalcular: Array<string> = [
    'espacamento',
    'espaçamento',
];

export const MetodoGradienteLinear: Array<string> = [
    'imagem-mascara',
    'imagem-máscara',
    'origem-imagem-borda',
    'conteudo',
    'conteúdo',
];

export const MetodoContraste: Array<string> = [
    'filtro',
];

export const MetodoBorrar: Array<string> = [
    'filtro',
];

export const MetodoBrilho: Array<string> = [
    'filtro',
];

export const MetodoRaio: Array<string> = [
    'deslocamento',
    'trajeto-deslocamento',
];

export const TraducaoValoresMetodos: Object = {
    'altura-maxima': 'max-height',
    'altura-máxima': 'max-height',
    'altura-minima': 'min-height',
    'altura-mínima': 'min-height',
    'altura': 'height',
    'largura-maxima': 'max-width',
    'largura-máxima': 'max-width',
    'largura-minima': 'min-width',
    'largura-mínima': 'min-width',
    'largura': 'width',
    'tamanho-colunas-em-grade': 'grid-auto-columns',
    'tamanho-em-linha': 'inline-size',
    'tamanho-linhas-em-grade': 'grid-auto-rows',
    'tamanho-maximo-em-bloco': 'max-block-size',
    'tamanho-máximo-em-bloco': 'max-block-size',
    'tamanho-maximo-em-linha': 'max-inline-size',
    'tamanho-máximo-em-linha': 'max-inline-size',
    'tamanho-minimo-em-bloco': 'min-block-size',
    'tamanho-mínimo-em-bloco': 'min-block-size',
    'tamanho-minimo-em-linha': 'min-inline-size',
    'tamanho-mínimo-em-linha': 'min-inline-size',
    'grade': 'grid',
    'tempo-transicao': 'transition-timing-function',
    'tempo-transição': 'transition-timing-function',
    'velocidade-animacao': 'animation-timing-function',
    'velocidade-animação': 'animation-timing-function',
    'transicao': 'transition',
    'transição': 'transition',
    'modelo-colunas-em-grade': 'grid-template-columns',
    'modelo-em-grade': 'grid-template',
    'modelo-linhas-em-grade': 'grid-template-rows',
    'espaçamento': 'gap',
    'espacamento': 'gap',
    'imagem-mascara': 'mask-image',
    'imagem-máscara': 'mask-image',
    'origem-imagem-borda': 'border-image-source',
    'conteudo': 'content',
    'conteúdo': 'content',
    'filtro': 'filter',
    'deslocamento': 'offset',
    'trajeto-deslocamento': 'offset-path',
}
