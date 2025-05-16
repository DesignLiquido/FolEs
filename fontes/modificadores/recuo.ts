import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
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
                validarAtribuicaoAbreviada("numérica", "recuo", valor);
            } else {
                validarValorNumerico("recuo", valor);
                
                if (Number(parseInt(valor))) {
                    validarQuantificador("recuo", quantificador, comprimentos, ListaDeValorPercentual);
                    
                    this.quantificador = quantificador;
                }
            }
        }
        
        this.valor = valor;
    }
}
