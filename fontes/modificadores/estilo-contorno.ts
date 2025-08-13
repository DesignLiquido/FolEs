import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("estilo-contorno", "outline-style", pragmas);

        validarValoresAdicionais(
            "estilo-contorno",
            valores,
            estilos,
            this.valoresAceitos,
        );

        this.valores = valores;
    }
}
