import { Valor } from "../valores";
import { valoresGlobais } from "./atributos/globais";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class BordaMascara extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
        preencher: "fill",
        auto: "auto",
        esticar: "stretch",
        repetir: "repeat",
        arredondar: "round",
        espacar: "space",
        espaçar: "space",
        luminancia: "luminance",
        luminância: "luminance",
        alfa: "alpha",
    };

    constructor(
        valores: Valor[],
        
        pragmas?: PragmasModificador
    ) {
        super(["borda-mascara", "borda-máscara"], "mask-border", pragmas);

        let valorURL;

        // TODO: Repensar
        // if (valor["traducao"] !== undefined) {
        //     valorURL = valor["traducao"];
        // }

        // if (!valorVariavel) {
        //     if (
        //         !(valor in this.valoresAceitos) &&
        //         Number.isNaN(parseInt(valor)) &&
        //         !valorURL.includes("url") &&
        //         !(valor in valoresGlobais)
        //     ) {
        //         throw new Error(`Modificador ou variável 'borda-mascara' com valor ${valor} inválido. Valores aceitos: 
        //             número-quantificador, URL, 
        //             ${Object.keys(this.valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
        //             ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
        //     }

        //     if (Number(parseInt(valor))) {
        //         validarQuantificador(
        //             "borda-máscara",
        //             quantificador,
        //             unidadesMedida,
        //         );

        //         this.quantificador = quantificador;
        //     }
        // }

        this.valores = valores;
    }
}
