import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarTudo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("reiniciar-tudo", "all", pragmas);

        if (!variavel) validarValores("reiniciar-tudo", valores, {});

        this.valores = valores;
        this.variavel = variavel;
    }
}
