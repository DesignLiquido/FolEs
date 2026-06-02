import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class LarguraBarraRolagem extends Modificador {
    static nomeFolEs: string = "largura-barra-rolagem";
    static nomeCss: string = "scrollbar-width";
    static descricao: string = 'Define a largura da barra de rolagem da aplicação.';
    static documentacao: string = '# `largura-barra-rolagem`\nO uso desta propriedade permite ao autor definir a espessura máxima das barras de rolagem de um elemento quando elas são exibidas.';
    static exemploCodigo: string = 'código {\n  largura-barra-rolagem: fina;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
        fina: "thin",
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(LarguraBarraRolagem.nomeFolEs, LarguraBarraRolagem.nomeCss, pragmas);

        if (!variavel) validarValores(LarguraBarraRolagem.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
