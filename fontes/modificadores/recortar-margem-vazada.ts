import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecortarMargemVazada extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteúdo-caixa": "content-box",
        "conteudo-caixa": "content-box",
    };

    static nomeCss: string = "overflow-clip-margin";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recortar-margem-vazada", RecortarMargemVazada.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "recortar-margem-vazada",
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
