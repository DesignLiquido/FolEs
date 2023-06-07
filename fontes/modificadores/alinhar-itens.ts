import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharItens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "inicio-linha-base": "first baseline",
        "início-linha-base": "first baseline",
        "fim-linha-base": "last baseline",
        "linha-base": "baseline",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
        "seguro": "safe",
        "inseguro": "unsafe",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("alinhar-itens", "align-items");

        // O modificador não aceita os valores posicionais 'esquerda' e 'direita'
        const posicoesAceitas = Object.keys(posicoes).filter(
            (posicao) => posicao !== 'esquerda' && posicao !== 'direita'
        );

        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index]
        })

        validarValoresAdicionais('alinhar-itens', valor, posicoesValidas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
