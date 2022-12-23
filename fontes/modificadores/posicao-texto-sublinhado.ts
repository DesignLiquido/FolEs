import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class PosicaoTextoSublinhado extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "direita": "right",
        "esquerda": "left",
        "debaixo": "under",
        "de-frente": "from-front",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["posicao-texto-sublinhado", "posição-texto-sublinhado"],
            "text-underline-position"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'posição-texto-sublinhado'. Valores aceitos:
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
