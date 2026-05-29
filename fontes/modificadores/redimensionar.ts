import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Redimensionar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        ambos: "both",
        horizontal: "horizontal",
        vertical: "vertical",
        "em-bloco": "block",
        "em-linha": "inline",
    };

    static nomeCss: string = "resize";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("redimensionar", Redimensionar.nomeCss, pragmas);

        if (!variavel) validarValores("redimensionar", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
