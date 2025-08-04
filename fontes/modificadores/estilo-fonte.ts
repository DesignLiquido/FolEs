import { Valor } from "../valores";
import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValores } from "./validacoes/comum";
import { validarQuantificador } from "./validacoes/quantificador";

export class EstiloFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        normal: "normal",
        italica: "italic",
        itálica: "italic",
        obliqua: "oblique",
        oblíqua: "oblique",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-fonte", "font-style", pragmas);

        // TODO: Repensar
        //     if (valor.includes(" ")) {
        //         validarAtribuicaoAbreviada("numérica", "estilo-fonte", valores, this.valoresAceitos);
        //     } else {
        //     }

        //     if (valor.includes("obliqua") || valor.includes("oblíqua")) {
        //         validarQuantificador("estilo-fonte", quantificador, angulos);

        //         this.quantificador = quantificador;
        //     }

        validarValores("estilo-fonte", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
