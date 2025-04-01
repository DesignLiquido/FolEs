import { Metodo } from "../valores/metodos/foles/metodo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
        "url": "url",
    }

    constructor(valor: Metodo | string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("imagem-fundo", "background-image", pragmas);

        if (!valorVariavel) {
            if (valor instanceof Metodo) {
                this.valor = valor;
            } else {
                validarValores('imagem-fundo', valor, this.valoresAceitos);
                this.valor = valor;
            }
        }
    }
}
