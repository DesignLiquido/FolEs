import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmAncora extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["vazamento-em-ancora", "vazamento-em-âncora"],
            "overflow-anchor",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("vazamento-em-âncora", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
