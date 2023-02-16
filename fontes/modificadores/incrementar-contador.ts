import { valoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class IncrementarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string) {
        super("incrementar-contador", "counter-increment");

        // OBS.: A sintaxe desse modificador espera receber:
        // 1. o NOME do contador (<custom-ident>);
        // 2. um NÚMERO INTEIRO que represente a incrementação do contador.

        // Ex.: incrementar-contador: meu-contador -4;
        
        // A lógica abaixo cobre somente o recebimento de 'nenhum' (único valor aceito) e dos Globais.
        // TODO: Adaptar lógica de acordo com a sintaxe do modificador.
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'incrementar-contador' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;
    }
}
