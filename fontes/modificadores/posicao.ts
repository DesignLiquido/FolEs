import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Posicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "static",
        relativa: "relative",
        absoluta: "absolute",
        fixa: "fixed",
        colada: "sticky",
    };

    static nomeCss: string = "position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["posicao", "posição"], Posicao.nomeCss, pragmas);

        if (!variavel) validarValores("posição", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
