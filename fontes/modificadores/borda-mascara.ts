import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaMascara extends Modificador {
    // Seletor de Atribuição Abreviada (Shorthand).
    // Pode receber de 1 a 6 valores.
    valoresAceitos: { [valorFoles: string]: string } = {
        "nenhuma": "none",
        "preencher": "fill",
        "auto": "auto",
        "esticar": "stretch",
        "repetir": "repeat",
        "arredondar": "round",
        "espacar": "space",
        "espaçar": "space",
        "luminancia": "luminance",
        "luminância": "luminance",
        "alfa": "alpha",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super(["borda-mascara", "borda-máscara"], "mask-border", pragmas);

        let valorURL;
        if(valor['traducao'] !== undefined) {
            valorURL = valor['traducao'];
        }
        
        // TODO: Adaptar lógica no futuro para cobrir casos de recebimento de MÚLTIPLOS valores
        if (!(valor in this.valoresAceitos) &&
            Number.isNaN(parseInt(valor)) &&
            !(valorURL.includes('url')) &&
            !(valor in valoresGlobais)) {
            throw new Error(`Propriedade 'borda-mascara' com valor ${valor} inválido. Valores aceitos: 
            número-quantificador, URL, 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(valoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        if (Number(parseInt(valor))) {
            validarQuantificador('borda-máscara', quantificador, unidadesMedida);

            this.quantificador = quantificador;
        }
    }
}
