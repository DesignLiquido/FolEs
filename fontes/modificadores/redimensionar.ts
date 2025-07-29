import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("redimensionar", "resize", pragmas);

        validarValores("redimensionar", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
