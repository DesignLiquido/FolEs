import { TraducaoMetodoInterface, TraducaoValoresMetodoInterface } from "../interfaces/listas-testes-interface";

export const TraducaoReversa: TraducaoMetodoInterface[] = [
    {
        foles: 'estender-borda-imagem',
        css: 'border-image-outset',
    },
    {
        foles: 'deslocar-contorno',
        css: 'outline-offset',
    },
    {
        foles: 'largura-contorno',
        css: 'outline-width',
    },
    {
        foles: 'recortar-margem-vazada',
        css: 'overflow-clip-margin',
    },
    {
        foles: 'margem-inferior-rolagem-mouse',
        css: 'scroll-margin-bottom',
    },
    {
        foles: 'margem-esquerda-rolagem-mouse',
        css: 'scroll-margin-left',
    },
    {
        foles: 'margem-direita-rolagem-mouse',
        css: 'scroll-margin-right',
    },
    {
        foles: 'margem-superior-rolagem-mouse',
        css: 'scroll-margin-top',
    },
    {
        foles: 'tabulacao',
        css: 'tab-size',
    },
    {
        foles: 'espacamento-palavras',
        css: 'word-spacing',
    },
    {
        foles: 'raio-borda',
        css: 'border-radius',
    },
    {
        foles: 'recuo',
        css: 'padding',
    },
    {
        foles: 'regras-coluna',
        css: 'column-rule',
    },
];

export const TraducaoReversaValorNumericoFracionario: Array<string> = [
    'tab-size',
    'line-height',
    'columns',
];

export const TraducaoReversaMetodos: TraducaoValoresMetodoInterface[] = [
    {
        modificador: 'backdrop-filter',
        css: 'blur',
        valor: '10',
        traducao: '10',
    },
    {
        modificador: 'gap',
        css: 'calc',
        valor: '100px - 10px',
        traducao: '100px - 10px',
    },
    {
        modificador: 'filter',
        css: 'contrast',
        valor: '50',
        traducao: '50',
    },
    {
        modificador: 'height',
        css: 'fit-content',
        valor: '10%',
        traducao: '10%',
    },
    {
        modificador: 'transform',
        css: 'scaleX',
        valor: '20',
        traducao: '20',
    },
    {
        modificador: 'transform',
        css: 'scaleY',
        valor: '20',
        traducao: '20',
    },
    {
        modificador: 'transform',
        css: 'scaleZ',
        valor: '20',
        traducao: '20',
    },
    {
        modificador: 'transform',
        css: 'scale',
        valor: '20',
        traducao: '20',
    },
    {
        modificador: 'backdrop-filter',
        css: 'grayscale',
        valor: '10%',
        traducao: '10%',
    },
    {
        modificador: 'transform',
        css: 'scale3d',
        valor: '1, 1, 1',
        traducao: '1, 1, 1',
    },
    {
        modificador: 'border-image-source',
        css: 'linear-gradient',
        valor: '45deg, blue, red',
        traducao: '45deg, azul, vermelho',
    },
    {
        modificador: 'height',
        css: 'clamp',
        valor: '1.5rem, 2.5vw, 4rem',
        traducao: '1.5rem, 2.5vw, 4rem',
    },
    {
        modificador: 'background-color',
        css: 'rgba',
        valor: '150, 0, 150',
        traducao: '150, 0, 150',
    },
    {
        modificador: 'background-color',
        css: 'hsl',
        valor: '50 80% 40%',
        traducao: '50 80% 40%',
    },
      {
        modificador: 'background-color',
        css: 'hsla',
        valor: '50 80% 40%',
        traducao: '50 80% 40%',
    },
    {
        modificador: 'transform',
        css: 'skewY',
        valor: '15deg',
        traducao: '15deg',
    },
    {
        modificador: 'backdrop-filter',
        css: 'invert',
        valor: '50%',
        traducao: '50%',
    },
    {
        modificador: 'grid-template-columns',
        css: 'minmax',
        valor: '100px, max-content',
        traducao: '100px, conteudo-máximo',
    },
    {
        modificador: 'transition-timing-function',
        css: 'steps',
        valor: '4, jump-both',
        traducao: '4, salto-conjunto',
    },
    {
        modificador: 'backdrop-filter',
        css: 'drop-shadow',
        valor: '5px 5px 15px',
        traducao: '5px 5px 15px',
    },
    {
        modificador: 'offset-path',
        css: 'ray',
        valor: '200deg',
        traducao: '200deg',
    },
    {
        modificador: 'background-color',
        css: 'rgb',
        valor: '230, 200, 150',
        traducao: '230, 200, 150',
    },
    {
        modificador: 'transform',
        css: 'rotateZ',
        valor: '0',
        traducao: '0',
    },
];
