import { validarValores } from "./validacoes/comum";
import { Modificador, PragmasModificador } from "./superclasse";
import { Valor } from "../valores";

export class AjusteCorForcado extends Modificador {
    static nomeFolEs: string[] = ["ajuste-cor-forcado", "ajuste-cor-forçado"];
    static nomeCss: string = "forced-color-adjust";
    static descricao: string = 'Permite que os navegadores desativem determinados elementos do modo de cores forçadas.';
    static documentacao: string ='# `ajuste-cor-forcado`\nDe acordo com o valor, fica definido se as cores do elemento serão ajustadas pelo navegador ou pelo próprio CSS.';
    static exemploCodigo: string = 'p {\n  ajuste-cor-forcado: auto;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(
            AjusteCorForcado.nomeFolEs,
            AjusteCorForcado.nomeCss,
            pragmas,
        );

        if (!variavel) validarValores(AjusteCorForcado.nomeFolEs[1], valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
