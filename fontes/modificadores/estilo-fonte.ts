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

        if (valores.length > 1) {
            validarAtribuicaoAbreviada(
                "numérica", 
                "estilo-fonte", 
                valores, 
                this.valoresAceitos,
                null,
                angulos
            );
        } else {
            validarValores(
                "estilo-fonte", 
                valores, 
                this.valoresAceitos
            );
        }

        this.valores = valores;
    }
}
