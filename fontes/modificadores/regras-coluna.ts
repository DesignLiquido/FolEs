import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class RegrasColuna extends Modificador {
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
        super("regras-coluna", "column-rule", pragmas);

        if (!valorVariavel) {
            validarMultiplosQualitativos("regras-coluna", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador(
                    "regras-coluna",
                    quantificador,
                    comprimentos,
                );

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
