import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaPosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["estilo-lista-posicao", "estilo-lista-posição"],
            "list-style-position",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("estilo-lista-posição", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
