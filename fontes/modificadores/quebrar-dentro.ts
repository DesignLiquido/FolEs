import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse/modificador";

export class QuebrarDentro extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "evitar": "avoid",
        "evitar-pagina": "avoid-page",
        "evitar-página": "avoid-page",
        "evitar-coluna": "avoid-column",
        "evitar-regiao": "avoid-region",
        "evitar-região": "avoid-region",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("quebrar-dentro", "break-inside");

        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'quebrar-dentro' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
