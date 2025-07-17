import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates",
            pragmas,
        );

        const valoresExtra = ['annotation', 'character-variant', 'ornaments', 'styleset', 'stylistic', 'swash'];

        let metodoResolvido = "";
        if (valor instanceof Metodo) {
            metodoResolvido = valor.traducao;
        } else if (valor instanceof MetodoCss) {
            metodoResolvido = valor.traducao;
        } else {
            metodoResolvido = valor;
        }
        
        if (!valorVariavel)
            validarValores(
                "variação-fonte-alternativa",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra
            );

        this.valor = valor;
    }
}
