import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    static nomeCss: string = "outline-width";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("largura-contorno", LarguraContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                "largura-contorno",
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
