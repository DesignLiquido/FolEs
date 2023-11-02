import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class FixarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fixo": "fixed",
        "local": "local",
        "rolar": "scroll",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fixar-fundo", "background-attachment", pragmas);

        validarValores('fixar-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
