import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarConteudo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "seguro": "safe",
        "inseguro": "unsafe",
        "espaco-entre": "space-between",
        "espaço-entre": "space-between",
        "espaco-ao-redor": "space-around",
        "espaço-ao-redor": "space-around",
        "espaco-uniforme": "space-evenly",
        "primeira-linha-base": "first baseline",
        "ultima-linha-base": "last baseline",
        "última-linha-base": "last baseline",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["justificar-conteudo", "justificar-conteúdo"],
            "justify-content"
        );

        // Além dos valores listados, aceita também todos os valores da Lista 
        // de Posições - exceto 'top' e 'bottom' - 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoes).filter((posicao) =>
            posicao !== 'superior' && posicao !== 'inferior'
        );

        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index]
        })

        validarValoresAdicionais('justificar-conteúdo', valor, posicoesValidas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
