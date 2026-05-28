import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaPosicao extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        dentro: "inside",
        fora: "outside",
    };

    static nomeCss: string = "list-style-position";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["estilo-lista-posicao", "estilo-lista-posição"],
            EstiloListaPosicao.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("estilo-lista-posição", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
