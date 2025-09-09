import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class EstiloEnfaseTexto extends Modificador {
    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        preenchido: "filled",
        abrir: "open",
        ponto: "dot",
        circulo: "circle",
        círculo: "circle",
        "circulo-duplo": "double-circle",
        "círculo-duplo": "double-circle",
        triangulo: "triangle",
        triângulo: "triangle",
        sesamo: "sesame",
        sésamo: "sesame",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ["estilo-enfase-texto", "estilo-ênfase-texto"],
            "text-emphasis-style",
            pragmas,
        );

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) validarValores("estilo-ênfase-texto", valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
