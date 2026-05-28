import { Valor } from "../valores";
import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class FatiarImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        preencher: "fill",
    };

    static nomeCss: string = "border-image-slice";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("fatiar-imagem-borda", FatiarImagemBorda.nomeCss, pragmas);
        
        const valoresExtra = ["url"];
        
        if (!variavel) {
            validarValorNumerico(
                "fatiar-imagem-borda",
                valores,
                this.valoresAceitos,
                valoresExtra,
                ListaDeValorPercentual
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
