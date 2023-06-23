import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class AlinharUltimoItem extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "justificar": "justify",
        "auto": "auto",
        "inicio": "start",
        "início": "start",
        "fim": "end",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["alinhar-ultimo-item", "alinhar-último-item"],
            "text-align-last"
        );

        // O modificador não aceita os valores posicionais 'superior' e 'inferior'
        const posicoesAceitas = Object.keys(posicoesBasicas).filter(
            (posicao) => posicao !== 'superior' && posicao !== 'inferior'
        );

        // Transforma array em objeto para processo de validação
        const posicoesValidas = {};
        posicoesAceitas.forEach((posicao, index) => {
            posicoesValidas[posicao] = posicoesAceitas[index]
        })

        validarValoresAdicionais('alinhar-último-item', valor, posicoesValidas, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
