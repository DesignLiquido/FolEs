import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarMultiplosQualitativos } from "./validacoes/multiplos-qualitativos";

export class SombraCaixa extends Modificador {
    static nomeFolEs: string = "sombra-caixa";
    static nomeCss: string = "box-shadow";
    static descricao: string = 'Adiciona efeitos de sombra ao redor da moldura de um elemento.';
    static documentacao: string = '# `sombra-caixa`\nUma sombra de caixa é descrita pelos deslocamentos X (horizontal) e Y (vertical) em relação ao elemento, raio de desfoque e dispersão e cor. Você pode definir vários efeitos separados por vírgulas.';
    static exemploCodigo: string = 'divisão {\n  sombra-caixa: 60px -16px verdeágua;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(SombraCaixa.nomeFolEs, SombraCaixa.nomeCss, pragmas);

        if (!variavel) validarMultiplosQualitativos(SombraCaixa.nomeFolEs, valores, null, unidadesMedida);

        this.valores = valores;
        this.variavel = variavel;
    }
}
