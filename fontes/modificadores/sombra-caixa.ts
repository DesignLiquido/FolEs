import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class SombraCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("sombra-caixa", "box-shadow", pragmas);

        if (!variavel) validarMultiplosQualitativos("sombra-caixa", valores, null, unidadesMedida);

        this.valores = valores;
        this.variavel = variavel;
    }
}
