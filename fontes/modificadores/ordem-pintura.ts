import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrdemPintura extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        tracado: "stroke",
        traçado: "stroke",
        preencher: "fill",
        marcadores: "markers",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("ordem-pintura", "paint-order", pragmas);

        validarValores("ordem-pintura", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
