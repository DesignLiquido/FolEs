import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoOpticoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    static nomeCss: string = "font-optical-sizing";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["tamanho-optico-fonte", "tamanho-óptico-fonte"],
            TamanhoOpticoFonte.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("tamanho-óptico-fonte", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
