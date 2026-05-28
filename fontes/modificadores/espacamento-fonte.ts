import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacamentoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        normal: "normal",
        nenhum: "none",
    };

    static nomeCss: string = "font-kerning";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["espacamento-fonte", "espaçamento-fonte"],
            EspacamentoFonte.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("espaçamento-fonte", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
