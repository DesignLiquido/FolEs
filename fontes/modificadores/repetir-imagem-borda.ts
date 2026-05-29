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

    static nomeCss: string = "border-image-repeat";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super("repetir-imagem-borda", RepetirImagemBorda.nomeCss, pragmas);

        if (!variavel) validarValores("repetir-imagem-borda", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
