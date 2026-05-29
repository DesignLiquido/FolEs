import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Recortar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "clip";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recortar", Recortar.nomeCss, pragmas);

        if (!variavel) validarValores("recortar", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
