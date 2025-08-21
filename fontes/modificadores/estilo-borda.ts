import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBorda extends Modificador {
    valoresAceitos = estilos;
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-borda", "border-style", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "comum", 
                "estilo-borda", 
                valores, 
                this.valoresAceitos
            );
        } else {
            validarValores(
                "estilo-borda", 
                valores, 
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
