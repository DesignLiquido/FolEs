import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class DecoracaoEstiloTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "solido": "solid",
        "sólido": "solid",
        "duplicado": "double",
        "tracejado": "dashed",
        "pontilhado": "dotted",
        "ondulado": "wavy",
        "nenhum": "none",
    }
    
    constructor(valor: string, quantificador?: string) {
        super(
            ["decoracao-estilo-texto", "decoração-estilo-texto"], 
            "text-decoration-style"
        );

        if (!(valor in this.valoresAceitos) && !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'decoração-estilo-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
