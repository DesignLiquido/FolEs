import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class EstiloLista extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-lista", "list-style", pragmas);

        const valoresExtra = ["url"];

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "estilo-lista", 
                valores, 
                this.valoresAceitos, 
                valoresExtra, 
                unidadesMedida,
            );
            // TODO: Recebia validacaoPersonalizada como true
        } else {
            validarValorNumerico(
                "estilo-lista", 
                valores, 
                this.valoresAceitos, 
                valoresExtra,
                unidadesMedida
            );
        }

        this.valores = valores;
    }
}
