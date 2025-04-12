import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacoBorda extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["espaco-borda", "espaço-borda"], "border-spacing", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("espaço-borda", valor);

            if (Number(parseInt(valor))) {
                validarQuantificador("espaço", quantificador, comprimentos);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
