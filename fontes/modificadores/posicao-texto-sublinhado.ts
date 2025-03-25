import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class PosicaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "direita": "right",
        "esquerda": "left",
        "debaixo": "under",
        "de-frente": "from-front",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador, valorVariavel: boolean = false) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"],
            "text-underline-position", 
            pragmas
        );

        if (!valorVariavel) validarValores('posição-texto-sublinhado', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
