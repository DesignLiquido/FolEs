import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    static nomeCss: string = "outline-style";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("estilo-contorno", EstiloContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                "estilo-contorno",
                valores,
                estilos,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
