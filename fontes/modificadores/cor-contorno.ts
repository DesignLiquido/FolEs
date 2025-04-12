import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        inverter: "invert",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("cor-contorno", "outline-color", pragmas);

        if (!valorVariavel)
            validarValorCor("cor-contorno", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
