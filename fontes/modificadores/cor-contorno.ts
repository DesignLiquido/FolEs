import { Valor } from "../valores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorCor } from "./validacoes/cor";

export class CorContorno extends Modificador {
    static nomeFolEs: string = "cor-contorno";
    static nomeCss: string = "outline-color";
    static descricao: string = 'Define a cor do contorno de um elemento da aplicação.';
    static documentacao: string = '# `cor-contorno`\nPUm contorno é uma linha desenhada em torno de um elemento, fora da borda. Ao contrário da borda do elemento, o contorno é desenhado fora da moldura do elemento e pode se sobrepor a outro conteúdo.';
    static exemploCodigo: string = 'campo {\n  cor-contorno: rgb(30, 222, 121);\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        inverter: "invert",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(CorContorno.nomeFolEs, CorContorno.nomeCss, pragmas);

        if (!variavel) validarValorCor(CorContorno.nomeFolEs, valores, this.valoresAceitos);

        this.valores = valores;
        this.variavel = variavel;
    }
}
