import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Espacamento extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(["espacamento", "espaçamento"], "gap", pragmas);

        // Pode receber também dois valores. Ex.: espacamento: 10px 2mm;
        // Também pode receber a função calc. Ex.: espacamento: calc(20% + 20px);

        const valoresExtra = ['calc'];

        if (!valorVariavel) {
            validarValorNumerico('espaçamento', valor, undefined, valoresExtra);
                        
            if (Number(parseInt(valor))) {
                validarQuantificador('espaçamento', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
