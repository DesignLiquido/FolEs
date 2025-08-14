import { Valor, ValorNumerico } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Opacidade extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("opacidade", "opacity", pragmas);
        
        // Valor numérico deve estar entre 0 e 1 (<alpha-value>).
        // Caso haja um quantificador %, pode ser qualquer número.        
        const valorTipado = valores[0] as ValorNumerico;

        if (valorTipado.literalNumerico > 1 && valorTipado.quantificador) {
            validarValorNumerico(
                "opacidade", 
                valores,
                null,
                null,
                ListaDeValorPercentual
            );
        } else {
            validarValorNumerico(
                "opacidade", 
                valores,
                null,
                null,
                null,
                null,
                true
            )
        }

        this.valores = valores;
    }
}
