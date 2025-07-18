import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class IndiceZ extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["indice-z", "índice-z"], "z-index", pragmas);

        if (!valorVariavel)
            validarValorNumerico("índice-z", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
