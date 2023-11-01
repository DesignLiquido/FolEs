import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class EstiloFonte extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        "normal": "normal",
        "italica": "italic",
        "itálica": "italic",
        "obliqua": "oblique",
        "oblíqua": "oblique",
    }

    constructor(valor: string, quantificador?: string, pragmas?: PragmasModificador) {
        super("estilo-fonte", "font-style", pragmas);

        // OBS.: O valor 'oblíqua' pode vir acompanhado de um número-quantificador
        // que representa o ÂNGULO de inclinação da fonte.

        // EX.: estilo-fonte: obliqua 10deg;

        // A lógica abaixo cobre somente o recebimento dos valores aceitos listados.
        // TODO: Adaptar lógica para cobrir os demais casos. 
        // Para tal, utilizar lista de ângulos de './atributos/quantificadores.ts'.   

        validarValores('estilo-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // Não recebe quantificador
        // this.quantificador = quantificador;
    }
}
