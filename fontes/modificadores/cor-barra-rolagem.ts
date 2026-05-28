import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorBarraRolagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "scrollbar-color";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-barra-rolagem", CorBarraRolagem.nomeCss, pragmas);

        if (!variavel) validarValorCor("cor-barra-rolagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
