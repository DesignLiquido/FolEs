import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        alfa: "alpha",
        luminancia: "luminance",
        luminância: "luminance",
    };

    static nomeCss: string = "mask-type";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["tipo-mascara", "tipo-máscara"], TipoMascara.nomeCss, pragmas);

        if (!variavel) validarValores("tipo-máscara", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
