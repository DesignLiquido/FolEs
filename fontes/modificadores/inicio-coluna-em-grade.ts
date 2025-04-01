import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { proibirQuantificador } from "./validacoes/proibir-quantificador";

export class InicioColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["inicio-coluna-em-grade", "início-coluna-em-grade"],
            "grid-column-start",
            pragmas
        );

        if (!valorVariavel) {
            validarValorNumerico('início-coluna-em-grade', valor, this.valoresAceitos);

            proibirQuantificador('início-coluna-em-grade', quantificador);
        }

        this.valor = valor;
    }
}
