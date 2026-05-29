import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class SubstituirIdiomaFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
    };

    static nomeCss: string = "font-language-override";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("substituir-idioma-fonte", SubstituirIdiomaFonte.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) {
            validarValores(
                "substituir-idioma-fonte",
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
