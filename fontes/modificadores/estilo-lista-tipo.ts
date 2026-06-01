import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";

export class EstiloListaTipo extends Modificador {
    static nomeFolEs: string = "estilo-lista-tipo";
    static nomeCss: string = "list-style-type";
    static descricao: string = 'Define o marcador de um elemento de item de lista.';
    static documentacao: string = '# `estilo-lista-tipo`\nUm marcador pode ser como um disco, um caractere ou um estilo de contador personalizado.';
    static exemploCodigo: string = 'item-lista {\n  estilo-lista-tipo: herdar;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        // variavel?: boolean
    ) {
        super(EstiloListaTipo.nomeFolEs, EstiloListaTipo.nomeCss, pragmas);

        this.valores = valores;
        // this.variavel = variavel;
    }
}
