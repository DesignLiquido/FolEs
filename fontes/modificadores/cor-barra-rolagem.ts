import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("cor-barra-rolagem", "scrollbar-color", pragmas);

        if (!valorVariavel) {
            validarValorCor('cor-barra-rolagem', valor, this.valoresAceitos);
        }
        
        this.valor = valor;
    }
}
