import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class Flutuar extends Modificador {
    static nomeFolEs: string = "flutuar";
    static nomeCss: string = "float";
    static descricao: string = 'Posiciona um elemento no lado esquerdo ou direito de seu contêiner.';
    static documentacao: string = '# `flutuar`\nEsta propriedade permite que o texto e os elementos embutidos envolvam o elemento definido. O elemento é removido do fluxo normal da página, embora ainda permaneça como parte do fluxo (em contraste com o posicionamento absoluto).';
    static exemploCodigo: string = 'divisão {\n  flutuar: esquerda;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        esquerda: "left",
        direita: "right",
        nenhum: "none",
        "inicio-em-linha": "inline-start",
        "início-em-linha": "inline-start",
        "fim-em-linha": "inline-end",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Flutuar.nomeFolEs, Flutuar.nomeCss, pragmas);

        if (!variavel) validarValores(Flutuar.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
