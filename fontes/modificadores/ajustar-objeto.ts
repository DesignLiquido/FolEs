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

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("ajustar-objeto", "object-fit", pragmas);

        validarValores("ajustar-objeto", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
