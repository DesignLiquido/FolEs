import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "horizontal": "x",
        "vertical": "y",
        "em-bloco": "block",
        "em-linha": "inline",
        "ambos": "both",
        "obrigatorio": "mandatory",
        "obrigatório": "mandatory",
        "proximidade": "proximity",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("tipo-encaixe-rolagem-mouse", "scroll-snap-type");

        validarValores('tipo-encaixe-rolagem-mouse', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
