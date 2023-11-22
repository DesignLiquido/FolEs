import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstiloLista extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 3 valores.

    valoresAceitos: { [valorFoles: string]: string } = {
        "dentro": "inside",
        "fora": "outside",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-lista", "list-style", pragmas);

        // O valor é recebido como objeto, o que impossibilita de utilizar a função includes().
        // A constante abaixo é criada para ser possível fazer as validações.
        const valorString = valor.toString();

        const valoresExtra = ['url'];
        validarValorNumerico('estilo-lista', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        if (quantificador !== undefined) {
            validarQuantificador('estilo-lista', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
