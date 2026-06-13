import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecortarMargemVazada extends Modificador {
    static nomeFolEs: string = "recortar-margem-vazada";
    static nomeCss: string = "overflow-clip-margin";
    static descricao: string = 'Determina o quão fora de seus limites um elemento pode ser pintado antes de ser recortado.';
    static documentacao: string = '# `recortar-margem-vazada`\nPara que esse modificador tenha efeito sobre um elemento, é necessário que a propriedade vazamento possua o valor recortar. O limite definido por essa propriedade é chamado de borda de corte de estouro da caixa.';
    static exemploCodigo: string = 'corpo {\n  recortar-margem-vazada: 20px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        "conteúdo-caixa": "content-box",
        "conteudo-caixa": "content-box",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecortarMargemVazada.nomeFolEs, RecortarMargemVazada.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecortarMargemVazada.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
