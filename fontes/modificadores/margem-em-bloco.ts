import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class MargemEmBloco extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 2 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("margem-em-bloco", "margin-block", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('margem-em-bloco', valor, this.valoresAceitos);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('margem-em-bloco', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
