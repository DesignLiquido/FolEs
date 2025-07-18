import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class Ordenar extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("ordenar", "order", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("ordenar", valores);

            // TODO: Repensar
            // proibirQuantificador("ordenar", quantificador);
        }

        this.valores = valores;
    }
}
