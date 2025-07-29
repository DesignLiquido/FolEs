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
    ) {
        super("cor-contorno", "outline-color", pragmas);

        validarValorCor("cor-contorno", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
