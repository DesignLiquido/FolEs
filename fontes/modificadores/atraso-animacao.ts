import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AtrasoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["atraso-animacao", "atraso-animação"],
            "animation-delay", 
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('atraso-animação', valor);

            if (Number(parseInt(valor))) {
                validarQuantificador('atraso-animação', quantificador, valoresTemporais);
    
                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
