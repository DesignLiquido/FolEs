import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class EsquemaCor extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "claro": "light",
        "escuro": "dark",
        "apenas": "only",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("esquema-cor", "color-scheme");
        
        // OBS.: Também pode receber duas palavras dos valores aceitos.
        // Ex.: esquema-cor: apenas claro;

        // A lógica abaixo cobre o recebimento de uma única palavra
        // TODO: Adaptar lógica para cobrir recebimento de duas palavras.
    
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'esquema-cor' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
