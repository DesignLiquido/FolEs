import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class RecursosFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "font-feature-settings";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("recursos-fonte", RecursosFonte.nomeCss, pragmas);

        let validarString: boolean = false;
        let validarTagValue: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);

                validarTagValue = valor.literalTexto.length === 6;
                if (!validarTagValue) {
                    throw new Error(`Modificador ou variável 'recursos-fonte' com valor ${valor.literalTexto} inválido`);
                }
            }
        });

        if (!variavel && !validarString) {
            validarValores(
                "recursos-fonte",
                valores,
                this.valoresAceitos,
                null
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
