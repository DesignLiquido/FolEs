import { MetodoCss } from "../valores/metodos/css/metodo-css";
import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class OrigemImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valor: Metodo | MetodoCss | string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("origem-imagem-borda", "border-image-source", pragmas);

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
                "origem-imagem-borda",
                metodoResolvido,
                this.valoresAceitos,
                valoresExtra,
            );

        this.valor = valor;
    }
}
