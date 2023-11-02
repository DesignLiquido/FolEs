import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoEscrita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "horizontal": "horizontal-tb",
        "vertical-direita-esquerda": "vertical-rl",
        "vertical-esquerda-direita": "vertical-lr",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("modo-escrita", "writing-mode", pragmas);

        validarValores('modo-escrita', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
