import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { Valor } from "../valores";

export class AoMudar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "posicao-rolagem": "scroll-position",
        "posição-rolagem": "scroll-position",
        "mudar-conteudo": "contents",
        "mudar-conteúdo": "contents",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("ao-mudar", "will-change", pragmas);

        if (!variavel) {

            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "comum",
                    "ao-mudar",
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValores("ao-mudar", valores, this.valoresAceitos);
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
