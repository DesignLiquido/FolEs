import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class RecolherBorda extends Modificador {
    static nomeFolEs: string = "recolher-borda";
    static nomeCss: string = "border-collapse";
    static descricao: string = 'Define se as células dentro de uma tabela têm bordas compartilhadas ou separadas.';
    static documentacao: string = '# `recolher-borda`\nQuando as células são recolhidas, o valor da propriedade estilo-borda é diretamente afetado. Quando as células são separadas, a distância entre as células é definida pela propriedade espaço-borda.';
    static exemploCodigo: string = 'celula {\n  recolher-borda: separar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        recolher: "collapse",
        separar: "separate",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecolherBorda.nomeFolEs, RecolherBorda.nomeCss, pragmas);

        if (!variavel) validarValores(RecolherBorda.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
