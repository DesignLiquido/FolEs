import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class VazamentoTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        recorte: "clip",
        reticencias: "ellipsis",
        reticências: "ellipsis",
    };

    static nomeCss: string = "text-overflow";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("vazamento-texto", VazamentoTexto.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) validarValores("vazamento-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
