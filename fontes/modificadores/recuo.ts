import {
    comprimentos,
    ListaDeValorPercentual,
} from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Recuo extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recuo", "padding", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                const separarValores = valor.split(" ");
                separarValores.forEach((valorIndividual) => validarValorNumerico("recuo", valorIndividual))
            } else {

                validarValorNumerico("recuo", valor);
                
                if (Number(parseInt(valor))) {
                    validarQuantificador(
                        "recuo",
                        quantificador,
                        comprimentos,
                        ListaDeValorPercentual,
                    );
                    
                    this.quantificador = quantificador;
                }
            }
        }
        // console.log(valor);
        
        this.valor = valor;
    }
}
