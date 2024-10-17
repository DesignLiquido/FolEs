import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LinhaEmGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("linha-em-grade", "grid-row", pragmas);

        if (valor.includes('/')) {
            const separarValores = valor.split(' / ');
            separarValores.forEach((valorIndividual) => {
                validarValorNumerico('linha-em-grade', valorIndividual, this.valoresAceitos);
            });
        } else {
            validarValorNumerico('linha-em-grade', valor, this.valoresAceitos);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
