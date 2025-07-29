import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Escala extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("escala", "scale", pragmas);

        validarValorNumerico("escala", valores, this.valoresAceitos);

        // TODO: Repensar
        // if (Number(parseInt(valor))) {
        //     validarQuantificador("escala", quantificador, unidadesMedida);

        //     this.quantificador = quantificador;
        // }

        this.valores = valores;
    }
}
