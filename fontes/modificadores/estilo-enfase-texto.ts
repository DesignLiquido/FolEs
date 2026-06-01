import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class EstiloEnfaseTexto extends Modificador {
    static nomeFolEs: string[] = ["estilo-enfase-texto", "estilo-ênfase-texto"];
    static nomeCss: string = "text-emphasis-style";
    static descricao: string = 'Define a aparência das marcas de ênfase.';
    static documentacao: string = '# `estilo-enfase-texto`\nEste estilo também pode ser definido e redefinido usando a propriedade de atribuição abreviada `ênfase-texto`.';
    static exemploCodigo: string = 'p {\n  estilo-enfase-texto: triângulo;\n}';

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
            EstiloEnfaseTexto.nomeFolEs,
            EstiloEnfaseTexto.nomeCss,
            pragmas,
        );

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) validarValores(
            EstiloEnfaseTexto.nomeFolEs[1],
            valores,
            this.valoresAceitos
        );

        this.valores = valores;
        this.variavel = variavel;
    }
}
