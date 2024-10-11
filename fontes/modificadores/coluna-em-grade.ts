import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ColunaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("coluna-em-grade", "grid-column", pragmas);

        if (valor.includes('/')) {
            const separarValores = valor.split(' / ');
            separarValores.forEach((valorIndividual) => {
                validarValorNumerico('coluna-em-grade', valorIndividual, this.valoresAceitos);
            })
        } else {
            validarValorNumerico('coluna-em-grade', valor, this.valoresAceitos);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
