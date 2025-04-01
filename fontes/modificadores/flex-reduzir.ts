import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FlexReduzir extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("flex-reduzir", "flex-shrink", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('flex-reduzir', valor);
                        
            proibirQuantificador('flex-reduzir', quantificador);
        }

        this.valor = valor;
    }
}
