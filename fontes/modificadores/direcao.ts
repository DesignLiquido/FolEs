import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Direcao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda-direita": "ltr",
        "direita-esquerda": "rtl",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(["direcao", "direção"], "direction", pragmas);

        validarValores("direção", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
