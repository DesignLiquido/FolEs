import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoEmLinhaRolagemMouse extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        conter: "contain",
        nenhum: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            "comportamento-em-linha-rolagem-mouse",
            "overscroll-behavior-inline",
            pragmas,
        );

        if (!valorVariavel)
            validarValores(
                "comportamento-em-linha-rolagem-mouse",
                valor,
                this.valoresAceitos,
            );

        this.valor = valor;
    }
}
