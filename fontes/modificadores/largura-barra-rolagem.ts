import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class LarguraBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "fina": "thin",
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("largura-barra-rolagem", "scrollbar-width", pragmas);

        if (!valorVariavel) validarValores('largura-barra-rolagem', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
