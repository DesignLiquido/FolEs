import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class LarguraContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("largura-contorno", "outline-width", pragmas);

        if (!valorVariavel) {
            validarValorNumerico(
                "largura-contorno",
                valor,
                this.valoresAceitos,
            );

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "largura-contorno",
                    quantificador,
                    comprimentos,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
