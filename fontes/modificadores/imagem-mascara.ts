import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ImagemMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
    }

    constructor(valor: string, quantificador: string) {
        super(["imagem-mascara", "imagem-máscara"], "mask-image");

        // OBS.: Também pode receber funções específicas do grupo <image>
        // Ex.: mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
        // Ex.: mask-image: image(url(mask.png), skyblue);

        // A validação abaixo cobre os valores aceitos e extras
        // TODO: Implementar modificador para também aceitar as funções específicas

        const valoresExtra = ['url'];
        validarValores('imagem-máscara', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
