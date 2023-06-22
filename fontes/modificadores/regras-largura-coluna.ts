import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class RegrasLarguraColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("regras-largura-coluna", "column-rule-width");

        validarValorNumerico('regras-largura-coluna', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('regras-largura-coluna', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
