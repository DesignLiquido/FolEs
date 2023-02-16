import { listaDeValoresGlobais } from "./atributos/globais";
import { Modificador } from "./superclasse/modificador";

export class RenderizacaoTexto extends Modificador {
    
    // Valores são em camelCase mesmo.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering
    valoresAceitos: { [valorFoles: string]: string } = {
        "auto": "auto",
        "otimizarVelocidade": "optimizeSpeed",
        "otimizarLegibilidade": "optimizeLegibility",
        "precisaoGeometrica": "geometricPrecision",
        "precisãoGeométrica": "geometricPrecision",
    }

    constructor(valor: string, quantificador?: string) {
        super(
            ["renderizacao-texto", "renderização-texto"],
            "text-rendering"
        );

        if (!(valor in this.valoresAceitos) &&
            !(valor in listaDeValoresGlobais)) {
            throw new Error(`Propriedade 'renderização-texto' com valor ${valor} inválido. Valores aceitos: 
            ${Object.keys(this.valoresAceitos).reduce((final, atual) => final += `, ${atual}`)},
            ${Object.keys(listaDeValoresGlobais).reduce((final, atual) => final += `, ${atual}`)}.`);
        }

        this.valor = valor;

        // Quantificador não é usado aqui.
        // this.quantificador = quantificador;
    }
}
