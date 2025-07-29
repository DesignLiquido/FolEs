import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class ContarColuna extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("contar-coluna", "column-count", pragmas);

        validarValorNumerico("contar-coluna", valores, this.valoresAceitos);

        // Não recebe quantificador, apenas o valor numérico.
        // TODO: Repensar.
        // proibirQuantificador("contar-coluna", quantificador);

        this.valores = valores;
    }
}
