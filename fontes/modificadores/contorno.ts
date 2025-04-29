import { cores } from "./atributos/cores";
import { estilos } from "./atributos/estilo";
import { valoresGlobais } from "./atributos/globais";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarQuantificador } from "./validacoes/quantificador";

export class Contorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        fina: "thin",
        media: "medium",
        média: "medium",
        grossa: "thick",
    };

    constructor(
        valor: string,
        quantificador?: string,
        pragmas?: PragmasModificador,
        valorVariavel: boolean = false,
    ) {
        super("contorno", "outline", pragmas);

        const valorString = valor.toString();

        const validaçõesCor =
            !valorString.includes("rgb") &&
            !valorString.includes("rgba") &&
            !valorString.includes("hsl") &&
            !valorString.includes("hsla");

        const validaçõesHEX = !(
            valorString.startsWith("#") && valorString.length <= 7
        );

        if (!valorVariavel) {
            if (valor.includes(" ")) {
                const separarValores = valor.split(" ");
                separarValores.forEach((valorIndividual) => {
                    if (
                        !(valorIndividual in this.valoresAceitos) &&
                        validaçõesCor &&
                        validaçõesHEX &&
                        Number.isNaN(parseInt(valor)) &&
                        !(valorIndividual in estilos) &&
                        !(valorIndividual in cores) &&
                        !(valorIndividual in valoresGlobais)
                    ) {
                        throw new Error(`Propriedade 'contorno' com valor ${valorIndividual} inválido. Valores aceitos: 
                            número-quantificador, 
                            ${Object.keys(this.valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                            ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                            ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                            ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
                    }

                    if (Number(parseInt(valor))) {
                        validarQuantificador("contorno", quantificador, comprimentos);

                        this.quantificador = quantificador;
                    }
                })
            } else {
                if (
                    !(valor in this.valoresAceitos) &&
                    validaçõesCor &&
                    validaçõesHEX &&
                    Number.isNaN(parseInt(valor)) &&
                    !(valor in estilos) &&
                    !(valor in cores) &&
                    !(valor in valoresGlobais)
                ) {
                    throw new Error(`Propriedade 'contorno' com valor ${valor} inválido. Valores aceitos: 
                    número-quantificador, 
                    ${Object.keys(this.valoresAceitos).reduce((final, atual) => (final += `, ${atual}`))},
                    ${Object.keys(estilos).reduce((final, atual) => (final += `, ${atual}`))},
                    ${Object.keys(cores).reduce((final, atual) => (final += `, ${atual}`))},
                    ${Object.keys(valoresGlobais).reduce((final, atual) => (final += `, ${atual}`))}.`);
                }

                if (Number(parseInt(valor))) {
                    validarQuantificador("contorno", quantificador, comprimentos);

                    this.quantificador = quantificador;
                }
            }
        }

        this.valor = valor;
    }
}
