import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEsquerda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("margem-esquerda", "margin-left", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('margem-esquerda', valor, this.valoresAceitos);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('margem-esquerda', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
