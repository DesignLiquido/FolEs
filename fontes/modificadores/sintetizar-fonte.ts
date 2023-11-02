import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class SintetizarFonte extends Modificador {
    
    // As traduções dos valores parecem estar erradas ou forçadas, mas estão de acordo com a documentação:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis 

    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "negrito": "weight",
        "italico": "style",
        "itálico": "style",
        "maiusculas-pequenas": "small-caps",
        "maiúsculas-pequenas": "small-caps",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("sintetizar-fonte", "font-synthesis", pragmas);

        validarValores('sintetizar-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
