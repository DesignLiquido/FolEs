import { ListaDeValorPercentual } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";
import { validarQuantificador } from "./validacoes/quantificador";

export class EsticarFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "ultra-condensada": "ultra-condensed",
        "extra-condensada": "extra-condensed",
        "condensada": "condensed",
        "semi-condensada": "semi-condensed",
        "normal": "normal",
        "semi-expandida": "semi-expanded",
        "expandida": "expanded",
        "extra-expandida": "extra-expanded",
        "ultra-expandida": "ultra-expanded",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("esticar-fonte", "font-stretch", pragmas);

        validarValorNumerico('esticar-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // O único quantificador aceito pelo seletor é o Percentual (%)
        if (Number(parseInt(valor))) {
            validarQuantificador('esticar-fonte', quantificador, ListaDeValorPercentual);

            this.quantificador = quantificador;
        }
    }
}
