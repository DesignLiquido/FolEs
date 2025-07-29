import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class EspessuraFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        negrito: "bold",
        "mais-clara": "lighter",
        "mais-escura": "bolder",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("espessura-fonte", "font-weight", pragmas);

        validarValorNumerico("espessura-fonte", valores, this.valoresAceitos);

        // TODO: Repensar
        // proibirQuantificador("espessura-fonte", quantificador);

        this.valores = valores;
    }
}
