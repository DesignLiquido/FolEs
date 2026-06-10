import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class ToqueTela extends Modificador {
    static nomeFolEs: string = "toque-tela";
    static nomeCss: string = "touch-action";
    static descricao: string = 'Lida com eventos que ocorrem quando um usuário toca em uma tela touchscreen.';
    static documentacao: string = '# `toque-tela`\nPropriedade que especifica como a região de um elemento pode ser manipulada por um usuário que utilize uma tela sensível ao toque (por exemplo, ampliando os recursos incorporados ao navegador).';
    static exemploCodigo: string = 'imagem {\n  toque-tela: zoom-pinça;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
        "panorama-horizontal": "pan-x",
        "panorama-vertical": "pan-y",
        "panorama-esquerdo": "pan-left",
        "panorama-direito": "pan-right",
        "panorama-superior": "pan-up",
        "panorama-inferior": "pan-down",
        manipulacao: "manipulation",
        manipulação: "manipulation",
        "zoom-pinca": "pinch-zoom",
        "zoom-pinça": "pinch-zoom",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(ToqueTela.nomeFolEs, ToqueTela.nomeCss, pragmas);

        if (!variavel) validarValores(ToqueTela.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
