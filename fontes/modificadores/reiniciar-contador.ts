import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ReiniciarContador extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhum": "none",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("reiniciar-contador", "counter-reset");

        // OBS.: A sintaxe desse modificador espera receber:
        // 1. o NOME do contador (<custom-ident>);
        // 2. um NÚMERO INTEIRO que represente a incrementação do contador.

        // Ex.: reiniciar-contador: meu-contador -4;

        // O modificador também aceita receber a função 'reverter' (reversed);
        // Ex.: reiniciar-contador: reverter(meu-contador) -1;

        // A lógica abaixo cobre somente o recebimento de 'nenhum' (único valor aceito) e dos Globais.
        // TODO: Adaptar lógica de acordo com a sintaxe do modificador.
        if (!(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'reiniciar-contador' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;
    }
}
