import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloListaImagem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super("estilo-lista-imagem", "list-style-image", pragmas);

        const valoresExtra = ['url'];

        if (!valorVariavel) validarValores('estilo-lista-imagem', valor, this.valoresAceitos, valoresExtra);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
