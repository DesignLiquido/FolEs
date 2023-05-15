import { valoresGlobais } from "./atributos/globais";
import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";

export class AlinharConteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "espaço-uniforme": "space-evenly",
        "seguro": "safe",
        "inseguro": "unsafe",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    }
    
    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["alinhar-conteudo", "alinhar-conteúdo"], "align-content");

        // Não aceita os valores 'esquerda' e 'direita'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== 'esquerda' && posicao !== 'direita'
        );

        // Pode receber valores próprios ou valores da lista de posições
        if (!(valor in this.valoresAceitos) && 
            !(valor in posicoesAceitas) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'alinhar-conteúdo' com valor ${valor} inválido. Valores aceitos:
            ${Object.keys(posicoesAceitas).reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
