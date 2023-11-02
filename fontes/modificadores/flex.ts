import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class Flex extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "nenhum": "none",
        "inicial": "initial",
        "conteudo-maximo": "max-content",
        "conteúdo-máximo": "max-content",
        "conteudo-minimo": "min-content",
        "conteúdo-mínimo": "min-content",
        "conteudo": "content",
        "conteúdo": "content",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("flex", "flex", pragmas);

        validarValorNumerico('flex', valor, this.valoresAceitos);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('flex', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
