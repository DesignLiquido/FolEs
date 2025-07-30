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
    ) {
        super(["indice-z", "índice-z"], "z-index", pragmas);

        validarValorNumerico("índice-z", valores, this.valoresAceitos);
    
        // TODO: Proibir quantificador?

        this.valores = valores;
    }
}
