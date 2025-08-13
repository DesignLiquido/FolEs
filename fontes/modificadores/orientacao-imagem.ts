import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrientacaoImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        "da-imagem": "from-image",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super(
            ["orientacao-imagem", "orientação-imagem"],
            "image-orientation",
            pragmas,
        );

        validarValores("orientação-imagem", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
