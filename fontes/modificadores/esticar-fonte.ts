import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EsticarFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        condensada: "condensed",
        "semi-condensada": "semi-condensed",
        normal: "normal",
        "semi-expandida": "semi-expanded",
        expandida: "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("esticar-fonte", "font-stretch", pragmas);

        if (!variavel) {
            validarValorNumerico(
                "esticar-fonte",
                valores,
                this.valoresAceitos,
                null,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
