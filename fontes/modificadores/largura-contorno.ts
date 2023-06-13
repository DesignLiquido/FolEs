import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class LarguraContorno extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "fina": "thin",
        "media": "medium",
        "média": "medium",
        "grossa": "thick",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("largura-contorno", "outline-width");

        validarValorNumerico('largura-contorno', valor, this.valoresAceitos);

        this.valor = valor;

        if (Number(parseInt(valor))) {
            if (
                !(quantificador in comprimentos) ||
                quantificador === undefined
            ) {
                throw new Error(
                    `Propriedade 'largura-contorno' com quantificador inválido. Valores aceitos:
        ${Object.keys(comprimentos).reduce((final, atual) => final += `, ${atual}`)}.`);
            }

            this.quantificador = quantificador;
        }
    }
}
