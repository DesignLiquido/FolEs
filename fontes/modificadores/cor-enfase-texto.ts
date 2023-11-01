import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorEnfaseTexto extends Modificador {
    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador) {
        super(
            ["cor-enfase-texto", "cor-ênfase-texto"],
            "text-emphasis-color", 
            pragmas
        );

        validarValorCor('cor-ênfase-texto', valor);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
