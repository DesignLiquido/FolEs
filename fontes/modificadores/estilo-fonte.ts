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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-fonte", "font-style", pragmas);

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                validarAtribuicaoAbreviada("numérica", "estilo-fonte", valor, this.valoresAceitos);
            } else {
                validarValores("estilo-fonte", valor, this.valoresAceitos);
            }
            
            if (valor.includes("obliqua") || valor.includes("oblíqua")) {
                validarQuantificador("estilo-fonte", quantificador, angulos);

                this.quantificador = quantificador;
            }
        }

        this.valor = valor;
    }
}
