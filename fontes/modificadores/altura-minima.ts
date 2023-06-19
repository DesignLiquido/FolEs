import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class AlturaMinima extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["altura-minima", "altura-mínima"], "min-height");

        // Também pode receber a função fit-content(<length-percentage>);
        // A lógica abaixo cobre o recebimento de valores próprios ou numéricos
        validarValorNumerico('altura-mínima', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('altura-mínima', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
