import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RecuoEmBlocoFim extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("recuo-em-bloco-fim", "padding-block-end", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('recuo-em-bloco-fim', valor);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('recuo-em-bloco-fim', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
