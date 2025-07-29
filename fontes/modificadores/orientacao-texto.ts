import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrientacaoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        misturado: "mixed",
        "de-pe": "upright",
        "de-pé": "upright",
        "de-lado": "sideways",
        "lateral-direita": "sideways-right",
        "usar-orientacao-glifo": "use-glyph-orientation",
        "usar-orientação-glifo": "use-glyph-orientation",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["orientacao-texto", "orientação-texto"],
            "text-orientation",
            pragmas,
        );

        validarValores("orientação-texto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
