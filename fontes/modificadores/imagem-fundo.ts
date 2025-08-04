import { Valor } from "../valores";
import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        url: "url",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
    ) {
        super("imagem-fundo", "background-image", pragmas);

        // TODO: Repensar
        //     if (valor instanceof Metodo) {
        //         this.valores = valores;
        //     } 
        
        validarValores("imagem-fundo", valores, this.valoresAceitos);

        this.valores = valores;
    }
}
