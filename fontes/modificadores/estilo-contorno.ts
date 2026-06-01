import { Valor } from "../valores";
import { estilos } from "./atributos/estilo";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValoresAdicionais } from "./validacoes/condicao-extra";

export class EstiloContorno extends Modificador {
    static nomeFolEs: string = "estilo-contorno";
    static nomeCss: string = "outline-style";
    static descricao: string = 'Define o estilo do contorno de um elemento da aplicação.';
    static documentacao: string = '# `estilo-contorno`\nUm contorno é uma linha desenhada em torno de um elemento, fora da borda.';
    static exemploCodigo: string = 'divisao {\n  estilo-contorno: saltado;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstiloContorno.nomeFolEs, EstiloContorno.nomeCss, pragmas);

        if (!variavel) {
            validarValoresAdicionais(
                EstiloContorno.nomeFolEs,
                valores,
                estilos,
                this.valoresAceitos,
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
