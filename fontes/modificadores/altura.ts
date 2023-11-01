import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Altura extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("altura", "height", pragmas);

        const valoresExtra = ['fit-content', 'clamp'];
        validarValorNumerico('altura', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('altura', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
