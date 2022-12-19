import { Modificador } from "./superclasse/modificador";

export class RepetirAnimacao extends Modificador {
    constructor(valor: string, quantificador?: string) {
        super(
            ["repetir-animacao", "repetir-animação"], 
            "animation-iteration-count"
        );
        
        // Aceita somente 'infinito' e valores numéricos
        if (Number.isNaN(parseInt(valor)) && valor !== 'infinito') {
            throw new Error(`Propriedade 'repetir-animação' com valor ${valor} inválido. Valor deve ser um número ou 'infinito'`)
        } 

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
