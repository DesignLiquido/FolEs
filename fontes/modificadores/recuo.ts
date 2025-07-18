import { Valor } from "../valores";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Recuo extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("recuo", "padding", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "recuo", valor);
        //     } else {
        //         validarValorNumerico("recuo", valor);
                
        //         if (Number(parseInt(valor))) {
        //             validarQuantificador("recuo", quantificador, comprimentos, ListaDeValorPercentual);
                    
        //             this.quantificador = quantificador;
        //         }
        //     }
        // }
        
        this.valores = valores;
    }
}
