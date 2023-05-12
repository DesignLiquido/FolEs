import { valoresGlobais } from "./atributos/globais";
import { Modificador, PragmasModificador } from "./superclasse";

export class ProporcaoTela extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["proporcao-tela", "proporção-tela"], "aspect-ratio");

        // OBS.: Também pode receber dois números separados por uma barra
        // Ex.: proporcao-tela: 1 / 1;
        // Essa sintaxe é chamada de <ratio>.
        // TODO: Implementar lógica restante no futuro, tendo em vista a estrutura do Av.Sintático.
        
        // A lógica abaixo cobre somente o recebimento de UM valor numérico.
        if (Number.isNaN(parseInt(valor)) &&
            !(valor in this.valoresAceitos) &&
            !(valor in valoresGlobais)
        ) {
            throw new Error(`Propriedade 'proporção-tela' com valor ${valor} inválido. Valor deve ser numérico ou um dos valores:
        ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)}, 
        ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`)
        }

        this.valor = valor;

        // Não recebe quantificador, apenas o valor numérico.
        // this.quantificador = quantificador;
    }
}
