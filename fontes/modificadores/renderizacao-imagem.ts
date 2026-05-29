import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        "bordas-nitidas": "crisp-edges",
        "bordas-nítidas": "crisp-edges",
        pixelado: "pixelated",
    };

    static nomeCss: string = "image-rendering";

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["renderizacao-imagem", "renderização-imagem"],
            RenderizacaoImagem.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores("renderização-imagem", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
