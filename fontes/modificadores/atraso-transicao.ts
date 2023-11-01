import { valoresTemporais } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AtrasoTransicao extends Modificador {
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["atraso-transicao", "atraso-transição"],
            "transition-delay", 
            pragmas
        );
        
        // Também aceita dois valores separados por vírgula
        // Ex.: atraso-transição: 2s, 4ms;
        // TODO: Adaptar lógica para cobrir todos os casos
        validarValorNumerico('atraso-transição', valor);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('atraso-transição', quantificador, valoresTemporais);

            this.quantificador = quantificador;
        }
    }
}
