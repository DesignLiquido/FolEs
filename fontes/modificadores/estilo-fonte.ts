import { angulos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarQuantificador } from "./validacoes/quantificador";

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

        validarValores('estilo-fonte', valor, this.valoresAceitos);

        this.valor = valor;

        // OBS.: O valor 'oblíqua' pode vir acompanhado de um número-quantificador
        // que representa o ÂNGULO de inclinação da fonte.

        // EX.: estilo-fonte: obliqua 10deg;
        // TODO: Descomentar lógica abaixo quando permitido atribuir múltiplos valores a um seletor FolEs

        // if (valor === 'obliqua' || valor === 'oblíqua') {
        //     validarQuantificador('estilo-fonte', quantificador, angulos);

        //     this.quantificador = quantificador;
        // }
    }
}
