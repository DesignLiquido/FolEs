import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EspacoBorda extends Modificador {
    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["espaco-borda", "espaço-borda"], "border-spacing", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     validarValorNumerico("espaço-borda", valor);

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("espaço", quantificador, comprimentos);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
