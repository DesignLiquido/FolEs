import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image", pragmas);

        // OBS.: Também pode receber a função image
        // Ex.: mask-image: image(url(mask.png), skyblue);
        const valoresExtra = ["url", "linear-gradient"];

        let metodoResolvido = "";
        if (valor instanceof Metodo) {
            metodoResolvido = valor.traducao;
        } else if (valor instanceof MetodoCss) {
            metodoResolvido = valor.traducao;
        } else {
            metodoResolvido = valor;
        }

        if (!valorVariavel)
            validarValores(
                "imagem-máscara",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
