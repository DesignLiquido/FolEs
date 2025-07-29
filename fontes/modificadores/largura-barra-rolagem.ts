import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class LarguraBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        fina: "thin",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("largura-barra-rolagem", "scrollbar-width", pragmas);

        validarValores("largura-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
