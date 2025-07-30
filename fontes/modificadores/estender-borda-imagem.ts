import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EstenderBordaImagem extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estender-borda-imagem", "border-image-outset", pragmas);

        validarValorNumerico(
            "estender-borda-imagem", 
            valores,
            null,
            null,
            comprimentos
        );

        this.valores = valores;
    }
}
