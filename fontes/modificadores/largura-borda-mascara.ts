import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraBordaMascara extends Modificador {
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
            ["largura-borda-mascara", "largura-borda-máscara"],
            "mask-border-width",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "largura-borda-máscara",
                valor,
                this.valoresAceitos,
            );

            // Também pode receber somente o valor numérico, sem quantificador
            if (quantificador !== undefined) {
                validarQuantificador(
                    "largura-borda-máscara",
                    quantificador,
                    unidadesMedida,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
