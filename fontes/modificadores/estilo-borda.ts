import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBorda extends Modificador {
    valoresAceitos = estilos;
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda", "border-style", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("condição-extra", "estilo-borda", valores, estilos);
        //     } else {
        //         validarValoresAdicionais("estilo-borda", valores, estilos);
        //     }

        this.valores = valores;
    }
}
