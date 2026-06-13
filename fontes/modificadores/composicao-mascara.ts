import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ComposicaoMascara extends Modificador {
    static nomeFolEs: string[] = ["composicao-mascara", "composição-máscara"];
    static nomeCss: string = "mask-composite";
    static descricao: string = 'Representa uma operação de composição usada na camada de máscara atual com as camadas de máscara abaixo dela.';
    static documentacao: string = '# `composicao-mascara`\nPara a composição, a camada de máscara atual é referida como origem, enquanto todas as camadas abaixo dela são referidas como destino.';
    static exemploCodigo: string = 'p {\n  composicao-mascara: adicionar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        adicionar: "add",
        subtrair: "subtract",
        cruzar: "intersect",
        excluir: "exclude",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            ComposicaoMascara.nomeFolEs,
            ComposicaoMascara.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(ComposicaoMascara.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
