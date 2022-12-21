import { Modificador } from "./superclasse/modificador";

export class TamanhoFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "alargar": "contain",
        "diminuir": "cover",
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string) {
        super("tamanho-fundo", "background-size");

        // Aceita valores listados e valores numéricos
        if (
            Number.isNaN(parseInt(valor)) && 
            !(valor in this.valoresAceitos)
        ) {
            throw new Error(`Propriedade 'tamanho-fundo' com valor ${valor} inválido. Valor deve ser um número ou um dos valores aceitos: ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        if (Number(parseInt(valor))){
            const quantificadoresAceitos = [
                'px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt'
            ];
    
            if (!quantificadoresAceitos.includes(quantificador)) {
                throw new Error(`Propriedade 'tamanho-fundo' com quantificador ${quantificador} inválido. Valores aceitos: ${quantificadoresAceitos} .`);
            }
    
            this.quantificador = quantificador;
        }
    }
}
