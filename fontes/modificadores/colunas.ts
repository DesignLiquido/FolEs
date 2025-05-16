import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Colunas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("colunas", "columns", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "colunas", valor, this.valoresAceitos);
            } else {
                validarValorNumerico("colunas", valor, this.valoresAceitos);

                if (quantificador !== undefined) {
                    validarQuantificador("colunas", quantificador, unidadesMedida);

                    this.quantificador = quantificador;
                }
            }
        }

        this.valor = valor;
    }
}
