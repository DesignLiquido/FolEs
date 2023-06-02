export interface SimboloInterface {
    tipo: string,
    lexema: string,
    literal: string,
    linha: number,
    colunaInicial: number,
    colunaFinal: number,
    paraTexto: () => string
}
