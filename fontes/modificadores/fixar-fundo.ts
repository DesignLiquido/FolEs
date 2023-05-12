import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class FixarFundo extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fixo": "fixed",
        "local": "local",
        "rolar": "scroll",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("fixar-fundo", "background-attachment");

        if (!(valor in this.valoresAceitos) && !(valor in valoresGlobais)) {
            throw new Error(`Valor ${valor} inválido para 'fixar-fundo'. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
