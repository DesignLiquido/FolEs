import { Modificador } from "./superclasse/modificador";

export class PosicaoHorizontalFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "superior": "top",
        "inferior": "bottom",
        "esquerda": "left",
        "direita": "right",
        "centro": "center",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["posicao-horizontal-fundo", "posição-horizontal-fundo"],
            "background-position-x"
        );

        // Aceita valores listados e valores numéricos
        if (
            Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos)
        ) {
            throw new Error(`Propriedade 'posição-horizontal-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;
        
        if (Number(parseInt(valor))){
            const quantificadoresAceitos = [
                'px', '%', 'rem', 'vmin', 'vmax'
            ];
    
            if (!quantificadoresAceitos.includes(quantificador)) {
                throw new Error(`Propriedade 'posição-horizontal-fundo' com quantificador ${quantificador} inválido. Valores aceitos: ${quantificadoresAceitos} .`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
