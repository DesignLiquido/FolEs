import { Valor, ValorTexto } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";
import { validarValorString } from "./validacoes/string";

export class VazamentoTexto extends Modificador {
    static nomeFolEs: string = "vazamento-texto";
    static nomeCss: string = "text-overflow";
    static descricao: string = 'Define como o conteúdo oculto que ultrapassa o limite do elemento é sinalizado para os usuários.';
    static documentacao: string = '# `vazamento-texto`\nO conteúdo oculto pode ser recortado, exibir reticências ou exibir uma string personalizada.';
    static exemploCodigo: string = 'p {\n  vazamento-texto: recortar;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        recorte: "clip",
        reticencias: "ellipsis",
        reticências: "ellipsis",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(VazamentoTexto.nomeFolEs, VazamentoTexto.nomeCss, pragmas);

        let validarString: boolean = false;
        valores.forEach((valor) => {
            if (valor instanceof ValorTexto) {
                validarString = validarValorString(valor);
            }
        });

        if (!variavel && !validarString) validarValores(VazamentoTexto.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
