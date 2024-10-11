import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class ProporcaoTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio", pragmas);

        if (valor.includes('/')) {
            const separarValores = valor.split(' / ');
            separarValores.forEach((valorIndividual) => {
                validarValorNumerico('proporção-tela', valorIndividual, this.valoresAceitos);
            })
        } else {
            validarValorNumerico('proporção-tela', valor, this.valoresAceitos);
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // this.quantificador = quantificador;
    }
}
