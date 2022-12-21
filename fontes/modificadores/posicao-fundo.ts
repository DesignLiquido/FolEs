import { Modificador } from "./superclasse/modificador";

export class PosicaoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super(["posicao-fundo", "posição-fundo"], "background-position");

        // OBS.: posição-fundo pode receber dois valores-quantificadores também
        // Exemplo: posição-fundo: 25% 75%;
        // No momento, as validações desse modificador cobrem somente os casos de 
        // 1 valor-quantificador e as palavras reservadas aceitas.
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos)
        ) {
            throw new Error(`Propriedade 'posição-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))){
            const quantificadoresAceitos = [
                'px', '%', 'rem', 'vmin', 'vmax'
            ];
    
            if (!quantificadoresAceitos.includes(quantificador)) {
                throw new Error(`Propriedade 'posição-fundo' com quantificador ${quantificador} inválido. Valores aceitos: ${quantificadoresAceitos} .`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
