import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValores } from "./validacoes/comum";

export class CombinarTextoVertical extends Modificador {
    static nomeFolEs: string = "combinar-texto-vertical";
    static nomeCss: string = "text-combine-upright";
    static descricao: string = 'Define a combinação de caracteres no espaço de um único caractere.';
    static documentacao: string = '# `combinar-texto-vertical`\nEsta propriedade só tem efeito no modo de escrita vertical. Se o texto combinado for maior que 1em, o agente do usuário deve ajustar o conteúdo em 1em.';
    static exemploCodigo: string = 'título1 {\n  combinar-texto-vertical: tudo;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhum: "none",
        tudo: "all",
        digitos: "digits",
        dígitos: "digits",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CombinarTextoVertical.nomeFolEs, CombinarTextoVertical.nomeCss, pragmas);

        if (!variavel) {
            validarValores(
                CombinarTextoVertical.nomeFolEs,
                valores,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
