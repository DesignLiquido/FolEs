import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaPosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(
            ["estilo-lista-posicao", "estilo-lista-posição"],
            "list-style-position",
            pragmas,
        );

        if (!valorVariavel)
            validarValores("estilo-lista-posição", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
