import { Valor } from "../valores";
import { comprimentos } from "./atributos/quantificadores";
import { Modificador, PragmasModificador } from "./superclasse";
import { validarValorNumerico } from "./validacoes/numerica";

export class EstenderBordaImagem extends Modificador {
    static nomeFolEs: string = "estender-borda-imagem";
    static nomeCss: string = "border-image-outset";
    static descricao: string = 'Define a distância pela qual a imagem da borda de um elemento é definida de sua caixa de borda.';
    static documentacao: string = '# `estender-borda-imagem`\nAo utilizar esta propriedade, note que as partes da imagem da borda que são renderizadas fora da caixa do elemento não acionam barras de rolagem vazadas e não capturam eventos do mouse.';
    static exemploCodigo: string = 'p {\n  estender-borda-imagem: 1rem;\n}';

    constructor(
        valores: Valor[],
        pragmas?: PragmasModificador,
        variavel?: boolean
    ) {
        super(EstenderBordaImagem.nomeFolEs, EstenderBordaImagem.nomeCss, pragmas);

        if (!variavel) {
            validarValorNumerico(
                EstenderBordaImagem.nomeFolEs,
                valores,
                null,
                null,
                comprimentos
            );
        }

        this.valores = valores;
        this.variavel = variavel;
    }
}
