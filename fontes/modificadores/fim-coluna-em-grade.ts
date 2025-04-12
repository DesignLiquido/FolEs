import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class FimColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("fim-coluna-em-grade", "grid-column-end", pragmas);

        if (!valorVariavel)
            validarValorNumerico(
                "fim-coluna-em-grade",
                valor,
                this.valoresAceitos,
            );

        this.valor = valor;

        proibirQuantificador("fim-coluna-em-grade", quantificador);
    }
}
