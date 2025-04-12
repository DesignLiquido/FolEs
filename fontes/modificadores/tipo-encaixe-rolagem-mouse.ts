import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TipoEncaixeRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        horizontal: "x",
        vertical: "y",
        "em-bloco": "block",
        "em-linha": "inline",
        ambos: "both",
        obrigatorio: "mandatory",
        obrigatório: "mandatory",
        proximidade: "proximity",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("tipo-encaixe-rolagem-mouse", "scroll-snap-type", pragmas);

        if (!valorVariavel)
            validarValores(
                "tipo-encaixe-rolagem-mouse",
                valor,
                this.valoresAceitos,
            );

        this.valor = valor;
    }
}
