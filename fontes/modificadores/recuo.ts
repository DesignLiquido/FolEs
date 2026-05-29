import { Valor } from "../valores";
import { comprimentos, ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class Recuo extends Modificador {
    static nomeCss: string = "padding";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recuo", Recuo.nomeCss, pragmas);

        const quantificadoresAceitos: { [nome: string]: string } = { ...comprimentos, ...ListaDeValorPercentual };

        if (!variavel) {
            if (valores.length > 1) {
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
                    quantificadoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
