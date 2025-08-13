import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacoEmBranco extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "nao-quebrar": "nowrap",
        "não-quebrar": "nowrap",
        preservar: "pre",
        "preservar-quebra": "pre-wrap",
        "preservar-linha": "pre-line",
        "quebrar-espacos": "break-spaces",
        "quebrar-espaços": "break-spaces",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["espaco-em-branco", "espaço-em-branco"], "white-space", pragmas);

        validarValores("espaço-em-branco", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
