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

    static nomeCss: string = "paint-order";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("ordem-pintura", OrdemPintura.nomeCss, pragmas);

        if (!variavel) validarValores("ordem-pintura", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
