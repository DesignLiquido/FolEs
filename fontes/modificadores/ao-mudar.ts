import { valoresGlobais } from "./atributos/globais";
import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";

export class AoMudar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "posicao-rolagem": "scroll-position",
        "posição-rolagem": "scroll-position",
        "mudar-conteudo": "contents",
        "mudar-conteúdo": "contents",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("ao-mudar", "will-change", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("comum", "ao-mudar", valor, this.valoresAceitos, undefined, false, true);
            } else {
                validarValores("ao-mudar", valor, this.valoresAceitos);
            }
        }

        this.valor = valor;
    }
}
