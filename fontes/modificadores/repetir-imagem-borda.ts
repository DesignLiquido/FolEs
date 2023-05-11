import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class RepetirImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esticar": "stretch",
        "repetir": "repeat",
        "completar": "round",
        "espacar": "space",
        "espaçar": "space",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("repetir-imagem-borda", "border-image-repeat");
        
        if (!(valor in this.valoresAceitos) && 
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'repetir-imagem-borda' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
