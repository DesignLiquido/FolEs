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
        
        if (valor.includes(',')) {
            const separarValores = valor.split(', ');
            
            separarValores.forEach((valorIndividual) => {
                validarValorNumerico('atraso-transição', valorIndividual);
            });
        } else {
            validarValorNumerico('atraso-transição', valor);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('atraso-transição', quantificador, valoresTemporais);

            this.quantificador = quantificador;
        }
    }
}
