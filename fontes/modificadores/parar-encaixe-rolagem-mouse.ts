import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PararEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "sempre": "always",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("parar-encaixe-rolagem-mouse", "scroll-snap-stop");

        validarValores('parar-encaixe-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
