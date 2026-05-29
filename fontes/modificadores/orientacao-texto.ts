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

    static nomeCss: string = "text-orientation";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["orientacao-texto", "orientação-texto"],
            OrientacaoTexto.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("orientação-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
