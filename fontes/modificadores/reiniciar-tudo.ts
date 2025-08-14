import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ReiniciarTudo extends Modificador {
    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("reiniciar-tudo", "all", pragmas);

        validarValores("reiniciar-tudo", valores, {});

        this.valores = valores;
    }
}
