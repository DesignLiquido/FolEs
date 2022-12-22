import { ListaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RepetirImagemBorda extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "esticar": "stretch",
        "repetir": "repeat",
        "completar": "round",
        "espacar": "space",
        "espaçar": "space",
    }

    constructor(valor: string, quantificador?: string) {
        super("repetir-imagem-borda", "border-image-repeat");
        
        if (!(valor in this.valoresAceitos) && !(valor in ListaDeValoresGlobais)) {
            throw new Error(`Propriedade 'repetir-imagem-borda' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(ListaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }
    
        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
