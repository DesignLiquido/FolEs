import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EstenderBordaImagem extends Modificador {
    static nomeCss: string = "border-image-outset";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estender-borda-imagem", EstenderBordaImagem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "estender-borda-imagem",
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
