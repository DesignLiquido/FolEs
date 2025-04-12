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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("redimensionar", "resize", pragmas);

        if (!valorVariavel)
            validarValores("redimensionar", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
