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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["orientacao-texto", "orientação-texto"],
            "text-orientation",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("orientação-texto", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
