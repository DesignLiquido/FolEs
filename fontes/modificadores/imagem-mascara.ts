import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image", pragmas);

        // OBS.: Também pode receber a função image()
        // Ex.: mask-image: image(url(mask.png), skyblue);
        const valoresExtra = ["url", "linear-gradient"];

        if (!variavel) {
            validarValores(
                "imagem-máscara",
                valores,
                this.valoresAceitos,
                valoresExtra,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
