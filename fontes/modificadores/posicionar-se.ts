import { Valor } from "../valores";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class PosicionarSe extends Modificador {
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
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("posicionar-se", "place-self", pragmas);

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "condição-extra", 
                "posicionar-se", 
                valores, 
                posicoes, 
                this.valoresAceitos
            );
        } else {
            validarValoresAdicionais(
                "posicionar-se", 
                valores, 
                posicoes, 
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
