import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarAtribuicaoAbreviada } from "./validacoes/atribuicao-abreviada";
import { validarValorNumerico } from "./validacoes/numerica";

export class DefinirContador extends Modificador {
    static nomeFolEs: string = "definir-contador";
    static nomeCss: string = "counter-set";
    static descricao: string = 'Define um contador CSS para um determinado valor.';
    static documentacao: string = '# `definir-contador`\nA propriedade manipula o valor dos contadores existentes e só criará novos contadores caso não exista um contador com o nome fornecido no elemento.';
    static exemploCodigo: string = 'p {\n  definir-contador: meu-contador -1;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(DefinirContador.nomeFolEs, DefinirContador.nomeCss, pragmas);

        if (!variavel) {
            if (valores.length > 1) {
                validarAtribuicaoAbreviada(
                    "numérica",
                    DefinirContador.nomeFolEs,
                    valores,
                    this.valoresAceitos,
                    null,
                    null,
                    false,
                    true
                );
            } else {
                validarValorNumerico(
                    DefinirContador.nomeFolEs,
                    valores,
                    this.valoresAceitos
                );
            }
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
