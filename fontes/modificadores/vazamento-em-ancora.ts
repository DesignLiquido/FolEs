import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VazamentoEmAncora extends Modificador {
    static nomeFolEs: string[] = ["vazamento-em-ancora", "vazamento-em-âncora"];
    static nomeCss: string = "overflow-anchor";
    static descricao: string = 'Fornece uma maneira de desativar o comportamento de rolagem do navegador, que ajusta a posição de rolagem para minimizar as mudanças de conteúdo.';
    static documentacao: string = '# `vazamento-em-ancora`\nO comportamento de rolagem é ativado por padrão em qualquer navegador compatível. Portanto, alterar o valor dessa propriedade normalmente só é necessário se você estiver tendo problemas com a ancoragem de rolagem em um documento ou parte de um documento e precisar desativar o comportamento.';
    static exemploCodigo: string = 'divisao {\n  vazamento-em-ancora: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VazamentoEmAncora.nomeFolEs,
            VazamentoEmAncora.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(VazamentoEmAncora.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
