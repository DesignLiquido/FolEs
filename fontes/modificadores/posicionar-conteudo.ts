import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicionarConteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        seguro: "safe",
        inseguro: "unsafe",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        "primeira-linha-base": "first baseline",
        "ultima-linha-base": "last baseline",
        "última-linha-base": "last baseline",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["posicionar-conteudo", "posicionar-conteúdo"],
            "place-content",
            pragmas,
        );

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("condição-extra", "posicionar-conteúdo", valores, posicoes, this.valoresAceitos);
        //     }

        validarValoresAdicionais("posicionar-conteúdo", valores, posicoes, this.valoresAceitos);

        this.valores = valores;
    }
}
