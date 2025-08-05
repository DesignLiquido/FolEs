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
    ) {
        super("sombra-caixa", "box-shadow", pragmas);

        validarMultiplosQualitativos("sombra-caixa", valores, null, unidadesMedida);

        this.valores = valores;
    }
}
