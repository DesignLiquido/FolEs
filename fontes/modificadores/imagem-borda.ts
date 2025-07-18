import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class ImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        url: "url",
        nenhum: "none",
        preencher: "fill",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("imagem-borda", "border-image", pragmas);

        // TODO: Também aceita o método linear-gradient

        const valoresExtra = ["url"];

        // TODO: Repensar
        // if (!valorVariavel) {
        //     if (typeof valor === 'string' && (valor.includes(" ") || valor.includes("/"))) {
        //         validarAtribuicaoAbreviada("numérica", "imagem-borda", valores, this.valoresAceitos, valoresExtra);
        //     } else {
        //         validarValorNumerico("imagem-borda", valores, this.valoresAceitos, valoresExtra);
        //     }

        //     if (quantificador && typeof valor === 'string' && Number(parseInt(valor))) {
        //         validarQuantificador("imagem-borda", quantificador, unidadesMedida);

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
