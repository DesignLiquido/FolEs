import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecortarMargemVazada extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteúdo-caixa": "content-box",
        "conteudo-caixa": "content-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("recortar-margem-vazada", "overflow-clip-margin", pragmas);

        validarValorNumerico(
            "recortar-margem-vazada",
            valores,
            this.valoresAceitos,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
