import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RenderizacaoImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "bordas-nitidas": "crisp-edges",
        "bordas-nítidas": "crisp-edges",
        "pixelado": "pixelated",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["renderizacao-imagem", "renderização-imagem"],
            "image-rendering", 
            pragmas
        );

        if (!valorVariavel) validarValores('renderização-imagem', valor, this.valoresAceitos);

        this.valor = valor;
    }
}
