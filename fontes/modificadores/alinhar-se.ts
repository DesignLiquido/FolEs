import { valoresGlobais } from "./atributos/globais";
import { posicoes } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class AlinharSe extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "seguro": "safe",
        "inseguro": "unsafe",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("alinhar-se", "align-self");

        // O modificador não aceita os valores posicionais 'esquerda' e 'direita'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== 'esquerda' && posicao !== 'direita'
        );

        // Pode receber valores próprios ou valores da lista de posições
        if (!(valor in this.valoresAceitos) &&
            !(posicoesAceitas.includes(valor)) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'alinhar-se'. Valores aceitos:
            ${Object.keys(posicoes).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
