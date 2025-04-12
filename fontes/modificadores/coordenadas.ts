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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("coordenadas", "translate", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("coordenadas", valor, this.valoresAceitos);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "coordenadas",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
