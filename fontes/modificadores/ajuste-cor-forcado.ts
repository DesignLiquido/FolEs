import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AjusteCorForcado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    static nomeCss: string = "forced-color-adjust";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["ajuste-cor-forcado", "ajuste-cor-forçado"],
            AjusteCorForcado.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("ajuste-cor-forçado", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
