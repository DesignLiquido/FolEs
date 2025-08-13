import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RepetirImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        esticar: "stretch",
        repetir: "repeat",
        completar: "round",
        espacar: "space",
        espaçar: "space",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("repetir-imagem-borda", "border-image-repeat", pragmas);

        validarValores("repetir-imagem-borda", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
