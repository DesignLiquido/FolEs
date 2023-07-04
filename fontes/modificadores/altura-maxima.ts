import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AlturaMaxima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["altura-maxima", "altura-máxima"], "max-height");

        // Também pode receber a função fit-content(<length-percentage>);
        // A lógica abaixo cobre o recebimento de valores próprios ou numéricos
        const valoresExtra = ['fit-content'];
        validarValorNumerico('altura-máxima', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('altura-máxima', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
