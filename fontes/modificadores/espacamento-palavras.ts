import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacamentoPalavras extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["espacamento-palavras", "espaçamento-palavras"],
            "word-spacing",
            pragmas,
        );

        if (!valorVariavel) {
            validarValorNumerico(
                "espaçamento-palavras",
                valor,
                this.valoresAceitos,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "espaçamento-palavras",
                    quantificador,
                    comprimentos,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
