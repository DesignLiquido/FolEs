import { Valor } from "../valores";
import { unidadesMedida } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class RecuoSuperiorRolagemMouse extends Modificador {
    static nomeFolEs: string = "recuo-superior-rolagem-mouse";
    static nomeCss: string = "scroll-top-bottom";
    static descricao: string = 'Define deslocamentos para a parte superior da região de visualização ideal do scrollport - a região de destino para colocar as coisas à vista do usuário).';
    static documentacao: string = '# `recuo-superior-rolagem-mouse`\nO uso desta propriedade permite que o autor exclua regiões do scrollport que são obscurecidas por outro conteúdo, como barras de ferramentas ou barras laterais de posição fixa, ou coloque mais espaço entre um elemento de destino e as bordas do scrollport.';
    static exemploCodigo: string = 'p {\n  recuo-superior-rolagem-mouse: 1em;\n}';

    valoresAceitos: { [valorFoles: string]: string } = {
        auto: "auto",
    };

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(RecuoSuperiorRolagemMouse.nomeFolEs, RecuoSuperiorRolagemMouse.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                RecuoSuperiorRolagemMouse.nomeFolEs,
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
