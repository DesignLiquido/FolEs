import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        suave: "smooth",
    };

    static nomeCss: string = "scroll-behavior";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("comportamento-rolagem", ComportamentoRolagem.nomeCss, pragmas);

        if (!variavel) validarValores("comportamento-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
