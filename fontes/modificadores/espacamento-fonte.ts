import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EspacamentoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        normal: "normal",
        nenhum: "none",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["espacamento-fonte", "espaçamento-fonte"],
            "font-kerning",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("espaçamento-fonte", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
