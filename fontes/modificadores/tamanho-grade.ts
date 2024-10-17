import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class TamanhoGrade extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tamanho-grade", "grid-area", pragmas);

        if (valor.includes('/')) {
            const separarValores = valor.split(' / ');
            separarValores.forEach((valorIndividual) => {
                validarValorNumerico('tamanho-grade', valorIndividual, this.valoresAceitos);
            });
        } else {
            validarValorNumerico('tamanho-grade', valor, this.valoresAceitos);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
