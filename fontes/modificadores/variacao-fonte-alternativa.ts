import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VariacaoFonteAlternativa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "formas-historicas": "historical-forms",
        "formas-históricas": "historical-forms",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["variacao-fonte-alternativa", "variação-fonte-alternativa"],
            "font-variant-alternates", 
            pragmas
        );
        
        validarValores('variação-fonte-alternativa', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
