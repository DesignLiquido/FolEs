import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ModoPreenchimentoAnimacao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "para-frente": "forwards",
        "para-tras": "backwards",
        "para-trás": "backwards",
        "ambos": "both"
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["modo-preenchimento-animacao", "modo-preenchimento-animação"], 
            "animation-fill-mode", 
            pragmas
        );

        if (!valorVariavel) validarValores('modo-preenchimento-animação', valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
