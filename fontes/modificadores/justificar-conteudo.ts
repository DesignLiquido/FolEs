import { ListaDeValoresGlobais } from "./atributos/globais";
import { ListaDePosições } from "./atributos/posição";
import { Modificador } from "./superclasse/modificador";

export class JustificarConteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "seguro": "safe",
        "inseguro": "unsafe",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "primeira-linha-de-base": "first baseline",
        "ultima-linha-de-base": "last baseline",
        "última-linha-de-base": "last baseline",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["justificar-conteudo", "justificar-conteúdo"], 
            "justify-content"
        );

        // Além dos valores listados, aceita também todos os valores da Lista 
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(ListaDePosições).filter((posicao) => 
            posicao !== 'superior' && posicao !== 'inferior'
        );

        if (!(valor in this.valoresAceitos) && 
            !(posicoesAceitas.includes(valor)) &&
            !(valor in ListaDeValoresGlobais)
        ) {
            throw new Error(`Valor ${valor} inválido para 'justificar-conteúdo'. Valores aceitos:
            ${posicoesAceitas.reduce((final, atual) => final += `, ${atual}`)}, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
