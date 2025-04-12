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
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("repetir-imagem-borda", "border-image-repeat", pragmas);

        if (!valorVariavel)
            validarValores("repetir-imagem-borda", valor, this.valoresAceitos);

        this.valor = valor;
    }
}
