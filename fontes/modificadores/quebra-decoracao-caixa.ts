import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class QuebraDecoracaoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "quebrar": "slice",
        "clonar": "clone",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"], 
            "box-decoration-break"
        );
        
        if (!(valor in this.valoresAceitos) && 
            !(valor in listaDeValoresGlobais)
        ) {
            throw new Error(`Propriedade 'quebra-decoração-caixa' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;        r;
    }
}
