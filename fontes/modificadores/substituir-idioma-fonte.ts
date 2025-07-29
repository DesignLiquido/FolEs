import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class SubstituirIdiomaFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("substituir-idioma-fonte", "font-language-override", pragmas);

        // TODO: Repensar
        // const validacaoString = validarValorString(valor);

        // if (validacaoString) {
        //     this.valoresAceitos[valor] = valor;
        // }

        validarValores(
            "substituir-idioma-fonte",
            valores,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
