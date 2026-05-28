import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Direcao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esquerda-direita": "ltr",
        "direita-esquerda": "rtl",
    };

    static nomeCss: string = "direction";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["direcao", "direção"], Direcao.nomeCss, pragmas);

        if (!variavel) validarValores("direção", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
