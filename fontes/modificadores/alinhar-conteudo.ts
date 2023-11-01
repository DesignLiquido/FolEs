import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

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
        super(["alinhar-conteudo", "alinhar-conteúdo"], "align-content", pragmas);

        // Não aceita os valores 'esquerda' e 'direita'
        let posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== 'esquerda' && posicao !== 'direita'
        );
        
        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index]
        })

        validarValoresAdicionais('alinhar-conteúdo', valor, posicoesValidas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
