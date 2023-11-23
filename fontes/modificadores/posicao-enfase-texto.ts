import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "sobre": "over",
        "abaixo": "under",
        "direita": "right",
        "esquerda": "left",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-enfase-texto", "posição-ênfase-texto"],
            "text-emphasis-position", 
            pragmas
        );

        validarValores('posição-ênfase-texto', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
