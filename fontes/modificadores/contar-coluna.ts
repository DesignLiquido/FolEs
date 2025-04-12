import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class ContarColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("contar-coluna", "column-count", pragmas);

        if (!valorVariavel) {
            validarValorNumerico("contar-coluna", valor, this.valoresAceitos);

            // Não recebe quantificador, apenas o valor numérico.
            proibirQuantificador("contar-coluna", quantificador);
        }

        this.valor = valor;
    }
}
