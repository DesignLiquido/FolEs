import { Sobre } from "./sobre";
import { DirecaoTexto } from "./direcao-texto";
import { IdiomaGlobal } from "./idioma-global";
import { TodoLink } from "./todo-link";
import { Link } from "./link"; // Olhar
import { Visitado} from "./visitado";
import { LinkLocal } from "./link-local";
import { EstiloAlvo } from "./estilo-alvo";
import { AlvoDestaque } from "./alvo-destaque";
import { Escopo } from "./escopo";
import { Ativo } from "./ativo";
import { Foco } from "./foco";
import { FocoVisivel } from "./foco-visivel";
import { FocoInterno } from "./foco-interno";
import { Atual } from "./atual";
import { Passado } from "./passado";
import { Futuro } from "./futuro";
import { Reproduzir } from "./reproduzir";
import { Pausa } from "./pausa";
import { Habilitado } from "./habilitado";
import { Desabilitado } from "./desabilitado";
import { SomenteLeitura } from "./somente-leitura";
import { LerEscrever } from "./ler-escrever";
import { LocalReservadoMostrado } from "./local-reservado-mostrado";
import { EstiloPadrao } from "./estilo-padrao";
import { Verificado } from "./verificado";
import { Indeterminado } from "./indeterminado";
import { EmBranco} from "./em-branco";
import { Valido } from "./valido";
import { Invalido } from "./invalido";
import { DentroDoLimite } from "./dentro-do-limite";
import { ForaDoLimite } from "./fora-do-limite";
import { Obrigatorio } from "./obrigatorio";
import { Opcional } from "./opcional";
import { UsuarioInvalido } from "./usuario-invalido";
import { EstruturaEstilo } from "./estrutura-estilo";
import { Vazio } from "./vazio";
import { NFilho } from "./n-filho";
import { NUltimoFilho } from "./n-último-filho";
import { PrimeiroFilho } from "./primeiro-filho";
import { UltimoFilho } from "./ultimo-filho";
import { FilhoUnico } from "./filho-unico";
import { NTipo } from "./n-tipo";
import { NUltimoTipo } from "./n-ultimo-tipo";
import { PrimeiroTipo } from "./primeiro-tipo";
import { UltimoTipo } from "./ultimo-tipo";
import { UnicoTipo } from "./unico-tipo";


export const DicionarioPseudoClasses: { [nomeFolEs: string]: any } = {
    sobre: Sobre,
    "direção-do-texto": DirecaoTexto, // Recebe parametro
    "todo-link": TodoLink,
    link: Link,
    visitado: Visitado,
    "link-local": LinkLocal,
    "estilo-alvo": EstiloAlvo,
    "alvo-destaque": AlvoDestaque,
    escopo: Escopo,
    ativo: Ativo,
    foco: Foco,
    "foco-visivel": FocoVisivel,
    "foco-interno": FocoInterno,
    atual: Atual,
    passado: Passado,
    futuro: Futuro,
    reproduzir: Reproduzir,
    pausa: Pausa,
    habilitado: Habilitado,
    desabilitado: Desabilitado,
    "somente-leitura": SomenteLeitura,
    "ler-escrever": LerEscrever,
    "local-reservado-mostrado": LocalReservadoMostrado,
    "estilo-padrão": EstiloPadrao,
    verificado: Verificado,
    indeterminado: Indeterminado,
    "em-branco": EmBranco,
    válido: Valido,
    inválido: Invalido,
    invalido: Invalido,
    "dentro-do-limite": DentroDoLimite,
    "fora-do-limite": ForaDoLimite,
    obrigatorio: Obrigatorio,
    opcional: Opcional,
    "usuário-inválido": UsuarioInvalido,
    "usuario-invalido": UsuarioInvalido,
    "estrutura-estilo": EstruturaEstilo,
    vazio: Vazio,
    "n-filho": NFilho, // Recebe parametro
    "n-último-filho": NUltimoFilho, // Recebe parametro
    "primeiro-filho": PrimeiroFilho,
    "último-filho": UltimoFilho,
    "filho-unico": FilhoUnico,
    "n-tipo": NTipo, //Recebe parametro
    "n-último-tipo": NUltimoTipo, //Recebe parametro
    "n-ultimo-tipo": NUltimoTipo, //Recebe parametro
    "primeiro-tipo": PrimeiroTipo,
    "ultimo-tipo": UltimoTipo,
    "unico-tipo": UnicoTipo,
};