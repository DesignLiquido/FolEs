import { posicoes } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class JustificarItens extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "seguro": "safe",
        "inseguro": "unsafe",
        "legado": "legacy",
        "auto-inicio": "self-start",
        "auto-início": "self-start",
        "auto-fim": "self-end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("justificar-itens", "justify-items");

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

        // Também pode receber dois valores. A lógica abaixo cobre somente o recebimento de um.
        // TODO: Ajustar lógica para cobrir todos os casos
        validarValoresAdicionais('justificar-itens', valor, posicoesValidas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
