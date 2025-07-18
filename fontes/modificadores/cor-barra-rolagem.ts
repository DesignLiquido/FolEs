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
        valorVariavel: boolean = false,
    ) {
        super("cor-barra-rolagem", "scrollbar-color", pragmas);

        if (!valorVariavel) {
            validarValorCor("cor-barra-rolagem", valores, this.valoresAceitos);
        }

        this.valores = valores;
    }
}
