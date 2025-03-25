import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmBlocoFim extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("margem-em-bloco-fim", "margin-block-end", pragmas);
        
        if (!valorVariavel) {
            validarValorNumerico('margem-em-bloco-fim', valor, this.valoresAceitos);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('margem-em-bloco-fim', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
