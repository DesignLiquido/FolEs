import { Valor } from "../valores";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Recuo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recuo", "padding", pragmas);

        if (valores.length > 1) {
            const quantificadoresAceitos: { [nome: string]: string } = {...comprimentos, ...ListaDeValorPercentual}; 
            validarAtribuicaoAbreviada(
                "numérica", 
                "recuo", 
                valores,
                null,
                null,
                quantificadoresAceitos
            );
        } else {
            validarValorNumerico(
                "recuo", 
                valores,
                null,
                null,
                comprimentos,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
    }
}
