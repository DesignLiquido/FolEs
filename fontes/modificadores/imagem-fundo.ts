import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "url": "url",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("imagem-fundo", "background-image");

        // Valor deve ser um link URL ou 'nenhuma' (none)
        validarValores('imagem-fundo', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
