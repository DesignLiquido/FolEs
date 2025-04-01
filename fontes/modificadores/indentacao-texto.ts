import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class IndentacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        "inverter": "hanging",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["indentacao-texto", "indentação-texto"], "text-indent", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('indentação-texto', valor, this.valoresAceitos);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('indentação-texto', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
