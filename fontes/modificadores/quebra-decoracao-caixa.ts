import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class QuebraDecoracaoCaixa extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "quebrar": "slice",
        "clonar": "clone",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(
            ["quebra-decoracao-caixa", "quebra-decoração-caixa"], 
            "box-decoration-break"
        );
        
        if (!(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'quebra-decoração-caixa' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;        r;
    }
}
