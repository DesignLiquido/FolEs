import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class TamanhoOpticoFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["tamanho-optico-fonte", "tamanho-óptico-fonte"],
            "font-optical-sizing",
            pragmas,
        );

        validarValores("tamanho-óptico-fonte", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
