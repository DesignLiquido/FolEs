import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "inicio": "start",
        "início": "start",
        "fim": "end",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alinhar-encaixe-rolagem-mouse", "scroll-snap-align", pragmas);
        
        validarValores("alinhar-encaixe-rolagem-mouse", valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
