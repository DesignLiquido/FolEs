import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class InsercaoEmBloco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["insercao-em-bloco", "inserção-em-bloco"],
            "inset-block",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "inserção-em-bloco",
                valor,
                this.valoresAceitos,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "inserção-em-bloco",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
