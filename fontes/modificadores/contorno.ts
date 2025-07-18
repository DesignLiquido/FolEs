import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";
import { validarQuantificador } from "./validacoes/quantificador";

export class Contorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador
    ) {
        super("contorno", "outline", pragmas);

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("múltiplos-qualitativos", "contorno", valores, this.valoresAceitos);
        //     } else {
        //         validarMultiplosQualitativos("contorno", valores, this.valoresAceitos);
        //     }
        //     if (Number(parseInt(valor))) {
        //         validarQuantificador("contorno", quantificador, comprimentos);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
