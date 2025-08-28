import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Recortar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recortar", "clip", pragmas);

        if (!variavel) validarValores("recortar", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
