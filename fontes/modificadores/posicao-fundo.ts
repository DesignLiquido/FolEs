import { valoresGlobais } from "./atributos/globais";
import { posicoesBasicas } from "./atributos/posicoes";
import { Modificador } from "./superclasse/modificador";

export class PosicaoFundo extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(["posicao-fundo", "posição-fundo"], "background-position");

        // OBS.: posição-fundo pode receber dois valores-quantificadores também
        // Exemplo: posição-fundo: 25% 75%;
        // No momento, as validações desse modificador cobrem somente os casos de 
        // 1 valor-quantificador e as palavras reservadas aceitas.
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in posicoesBasicas) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'posição-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores: 
            ${Object.keys(posicoesBasicas).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))){
            const quantificadoresAceitos = [
                'px', '%', 'rem', 'vmin', 'vmax'
            ];
    
            if (!quantificadoresAceitos.includes(quantificador) || quantificador === undefined) {
                throw new Error(`Propriedade 'posição-fundo' com quantificador ${quantificador} inválido. Valores aceitos: ${quantificadoresAceitos}.`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
