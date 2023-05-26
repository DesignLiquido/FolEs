interface InterfaceLexador {
    simbolos: Array<Simbolos>
}

interface Simbolos {
    tipo: string,
    lexema: string,
    literal: string,
    linha: number,
    colunaInicial: number,
    colunaFinal: number,
    paraTexto: () => string
}
