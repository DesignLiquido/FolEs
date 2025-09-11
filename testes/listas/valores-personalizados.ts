export const ModificadoresValorPersonalizado: Array<string> = [
    'ao-mudar',
    'coluna-em-grade',
    'definir-contador',
    'estilo-lista-tipo',
    'estilo-lista',
    'fim-coluna-em-grade',
    'fim-linha-em-grade',
    'incrementar-contador',
    'início-coluna-em-grade',
    'inicio-coluna-em-grade',
    'início-linha-em-grade',
    'inicio-linha-em-grade',
    'linha-em-grade',
    'nome-animação',
    'nome-animacao',
    'propriedade-transição',
    'propriedade-transicao',
    'tamanho-grade',
];

export const ValoresPersonalizados: Array<object> = [
    {
        modificador: 'ao-mudar',
        css: 'will-change',
        valor: 'esquerda, direita',
    },
    {
        modificador: 'coluna-em-grade',
        css: 'grid-column',
        valor: 'span 3',
    },
    {
        modificador: 'definir-contador',
        css: 'counter-set',
        valor: 'meu-contador 5 contador2 0',
    },
    {
        modificador: 'estilo-lista',
        css: 'list-style',
        valor: 'georgian lower-roman',
    },
    {
        modificador: 'fim-linha-em-grade',
        css: 'grid-row-end',
        valor: 'span 3',
    },
    {
        modificador: 'fim-coluna-em-grade',
        css: 'grid-column-end',
        valor: 'span 3',
    },
    {
        modificador: 'incrementar-contador',
        css: 'counter-increment',
        valor: 'meu-contador -4',
    },
    {
        modificador: 'início-linha-em-grade',
        css: 'grid-row-start',
        valor: 'span 2',
    },
    {
        modificador: 'início-coluna-em-grade',
        css: 'grid-column-start',
        valor: 'span 2',
    },
    {
        modificador: 'linha-em-grade',
        css: 'grid-row',
        valor: 'span area-em-grade',
    },
    {
        modificador: 'nome-animação',
        css: 'animation-name',
        valor: 'test_05',
    },
    {
        modificador: 'propriedade-transição',
        css: 'transition-property',
        valor: 'test1, animacao4',
    },
    {
        modificador: 'tamanho-grade',
        css: 'grid-area',
        valor: 'span 2',
    },
];

export const ValoresPersonalizadosMultiplos: Array<object> = [
    {
        modificador: 'estilo-lista',
        valor: 'dentro meu-estilo',
        traducao: 'inside meu-estilo',
        css: 'list-style',
    },
    {
        modificador: 'propriedade-transição',
        valor: 'todas, animacao4',
        traducao: 'all, animacao4',
        css: 'transition-property',
    },
    {
        modificador: 'definir-contador',
        valor: 'nenhum meu-contador',
        traducao: 'none meu-contador',
        css: 'counter-set',
    },
    {
        modificador: 'ao-mudar',
        valor: 'posição-rolagem test01',
        traducao: 'scroll-position test01',
        css: 'will-change',
    },
];
