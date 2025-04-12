import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valor: string,
        quantificador: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image", pragmas);

        // OBS.: Também pode receber a função image
        // Ex.: mask-image: image(url(mask.png), skyblue);
        const valoresExtra = ["url", "linear-gradient"];

        if (!valorVariavel)
            validarValores(
                "imagem-máscara",
                valor,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
