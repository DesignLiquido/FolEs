import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Flutuar extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        esquerda: "left",
        direita: "right",
        nenhum: "none",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("flutuar", "float", pragmas);

        if (!variavel) validarValores("flutuar", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
