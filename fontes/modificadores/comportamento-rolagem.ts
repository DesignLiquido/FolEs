import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComportamentoRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        suave: "smooth",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("comportamento-rolagem", "scroll-behavior", pragmas);

        validarValores("comportamento-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
