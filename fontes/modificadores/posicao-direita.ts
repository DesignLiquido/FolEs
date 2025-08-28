import { Valor } from "../valores";
import { ListaDeValorPercentual, unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class PosicaoDireita extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao-direita", "posição-direita"], "right", pragmas);

        const quantificadoresAceitos: { [nome: string]: string } = { ...unidadesMedida, ...ListaDeValorPercentual };

        if (!variavel) {
            validarValorNumerico(
                "posição-direita",
                valores,
                this.valoresAceitos,
                null,
                quantificadoresAceitos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
