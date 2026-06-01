import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class Coordenadas extends Modificador {
    static nomeFolEs: string = "coordenadas";
    static nomeCss: string = "translate";
    static descricao: string = 'Permite especificar transformações de tradução individualmente.';
    static documentacao: string = '# `coordenadas`\nO uso desta propriedade mapeia melhor o uso típico da interface do usuário e evita a necessidade de lembrar a ordem exata das funções de transformação a serem especificadas na propriedade `transformar`.';
    static exemploCodigo: string = 'p {\n  coordenadas: 100px;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        nenhuma: "none",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(Coordenadas.nomeFolEs, Coordenadas.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                Coordenadas.nomeFolEs,
                valores,
                this.valoresAceitos,
                null,
                unidadesMedida
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
