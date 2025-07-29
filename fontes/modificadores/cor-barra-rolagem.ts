import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("cor-barra-rolagem", "scrollbar-color", pragmas);

        validarValorCor("cor-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
