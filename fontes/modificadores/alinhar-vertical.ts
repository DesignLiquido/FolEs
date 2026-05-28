import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class AlinharVertical extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "linha-base": "baseline",
        "linha-inferior": "sub",
        "linha-superior": "super",
        "topo-texto": "text-top",
        "base-texto": "text-bottom",
        meio: "middle",
        superior: "top",
        inferior: "bottom",
    };

    static nomeCss: string = "vertical-align";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("alinhar-vertical", AlinharVertical.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "alinhar-vertical",
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
