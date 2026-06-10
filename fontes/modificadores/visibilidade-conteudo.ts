import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class VisibilidadeConteudo extends Modificador {
    static nomeFolEs: string[] = ["visibilidade-conteudo", "visibilidade-conteúdo"];
    static nomeCss: string = "content-visibility";
    static descricao: string = 'Controla se um elemento renderiza ou não seu conteúdo, além de forçar um forte conjunto de contenções.';
    static documentacao: string = '# `visibilidade-conteudo`\nEsta propriedade permite que os agentes do usuário omitam potencialmente grandes faixas de layout e o trabalho de renderização até que seja necessário. Também permite que o agente do usuário pule o trabalho de renderização de um elemento (incluindo layout e pintura) até que seja necessário — o que torna o carregamento da página inicial muito mais rápido.';
    static exemploCodigo: string = 'imagem {\n  visibilidade-conteudo: visível;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        visivel: "visible",
        visível: "visible",
        escondido: "hidden",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            VisibilidadeConteudo.nomeFolEs,
            VisibilidadeConteudo.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(VisibilidadeConteudo.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
