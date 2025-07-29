import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Coordenadas extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("coordenadas", "translate", pragmas);

        // TODO: Repensar
        //     validarValorNumerico("coordenadas", valores, this.valoresAceitos);

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "coordenadas",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }

        this.valores = valores;
    }
}
