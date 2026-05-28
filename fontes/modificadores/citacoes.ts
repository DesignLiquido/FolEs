import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class Citacoes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    static nomeCss: string = "quotes";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean

    ) {
        super(["citacoes", "citações"], Citacoes.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });


        if (!variavel && !validarString) validarValores("citações", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
