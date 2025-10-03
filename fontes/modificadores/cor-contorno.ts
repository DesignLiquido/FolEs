import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        inverter: "invert",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("cor-contorno", "outline-color", pragmas);

        if (!variavel) validarValorCor("cor-contorno", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
