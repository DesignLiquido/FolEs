import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class DuracaoAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["duracao-animacao", "duração-animação"],
            "animation-duration", 
            pragmas
        );
        
        validarValorNumerico('duração-animação', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('duração-animação', quantificador, valoresTemporais);

            this.quantificador = quantificador;
        }
    }
}
