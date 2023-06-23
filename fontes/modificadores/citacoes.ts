import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Citacoes extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["citacoes", "citações"], "quotes");

        // OBS.: Também pode receber valores <string>.
        // Ex.: citações: "«" "»" "‹" "›";
        // OBS.2: É uma sintaxe bizarra.

        // https://developer.mozilla.org/en-US/docs/Web/CSS/string 
        // https://developer.mozilla.org/en-US/docs/Web/CSS/quotes 

        // A lógica abaixo cobre somente o recebimento dos Valores Aceitos
        // TODO: Adaptar lógica para cobrir o caso de valores <string>.
        validarValores("citações", valor, this.valoresAceitos);

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
