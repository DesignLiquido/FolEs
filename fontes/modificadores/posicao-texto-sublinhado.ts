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

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"],
            "text-underline-position"
        );

        // Também pode receber dois valores
        // Ex.: posição-texto-sublinhado: debaixo esquerda;

        // TODO: Adaptar lógica para cobrir todos os casos
        validarValores('posição-texto-sublinhado', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
