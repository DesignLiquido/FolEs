import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarEstilo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        achatar: "flat",
        "espaco-3d": "preserve-3d",
        "espaço-3d": "preserve-3d",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("transformar-estilo", "transform-style", pragmas);

        if (!valorVariavel)
            validarValores("transformar-estilo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
