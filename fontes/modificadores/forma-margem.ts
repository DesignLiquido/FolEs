import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class FormaMargem extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("forma-margem", "shape-margin", pragmas);

        if (!valorVariavel) {
            validarValorNumerico('forma-margem', valor);
                
            if (Number(parseInt(valor))) {
                validarQuantificador('forma-margem', quantificador, unidadesMedida);
                
                this.quantificador = quantificador;
            }
        }
        
        this.valor = valor;
    }
}
