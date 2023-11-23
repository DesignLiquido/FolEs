import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class IndentacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "cada-linha": "each-line",
        "inverter": "hanging",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["indentacao-texto", "indentação-texto"], "text-indent", pragmas);

        validarValorNumerico('indentação-texto', valor, this.valoresAceitos);

        this.valor = valor;
    
        if (Number(parseInt(valor))) {
            validarQuantificador('indentação-texto', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
