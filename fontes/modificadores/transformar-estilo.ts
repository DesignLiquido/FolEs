import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TransformarEstilo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        achatar: "flat",
        "espaco-3d": "preserve-3d",
        "espaço-3d": "preserve-3d",
    };

    static nomeCss: string = "transform-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("transformar-estilo", TransformarEstilo.nomeCss, pragmas);

        if (!variavel) validarValores("transformar-estilo", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
