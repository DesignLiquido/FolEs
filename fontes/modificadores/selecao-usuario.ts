import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class SelecaoUsuario extends Modificador {
    static nomeFolEs: string[] = ["selecao-usuario", "seleção-usuário"];
    static nomeCss: string = "user-select";
    static descricao: string = 'Controla se o usuário pode ou não selecionar o texto da aplicação.';
    static documentacao: string = '# `selecao-usuario`\nEsta propriedade não tem nenhum efeito sobre o conteúdo carregado como parte da interface do usuário do navegador, exceto nas caixas de texto.';
    static exemploCodigo: string = 'p {\n  selecao-usuario: texto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
        texto: "text",
        tudo: "all",
        conter: "contain",
        elementar: "element",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(SelecaoUsuario.nomeFolEs, SelecaoUsuario.nomeCss, pragmas);

        if (!variavel) validarValores(SelecaoUsuario.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
