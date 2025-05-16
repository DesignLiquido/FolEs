import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBorda extends Modificador {
    valoresAceitos = estilos;
    constructor(
        valor: string,
        quantificador: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-borda", "border-style", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("condição-extra", "estilo-borda", valor, estilos);
            } else {
                validarValoresAdicionais("estilo-borda", valor, estilos);
            }
        }

        this.valor = valor;
    }
}
