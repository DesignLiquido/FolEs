import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloBordaEmBloco extends Modificador {
    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("estilo-borda-em-bloco", "border-block-style", pragmas);

        if (!valorVariavel)
            validarValoresAdicionais("estilo-borda-em-bloco", valor, estilos);

        this.valor = valor;
    }
}
