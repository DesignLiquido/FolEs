import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AjustarObjeto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        conter: "contain",
        cobrir: "cover",
        preencher: "fill",
        nenhum: "none",
        "diminuir-escala": "scale-down",
    };

    static nomeCss: string = "object-fit";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super("ajustar-objeto", AjustarObjeto.nomeCss, pragmas);

        if (!variavel) validarValores("ajustar-objeto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
