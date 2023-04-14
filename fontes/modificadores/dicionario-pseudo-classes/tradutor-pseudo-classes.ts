import { Sobrepor } from "../modificadores-pseudo-classes/sobrepor";
import { DirecaoTexto  } from "../modificadores-pseudo-classes/direção-de-texto";
import { IdiomaGlobal } from "../modificadores-pseudo-classes/idioma-global";
import { TodoLink } from "../modificadores-pseudo-classes/todo-link";
import { Link } from "../modificadores-pseudo-classes/link"; // Olhar
import { Visitado} from "../modificadores-pseudo-classes/visitado";
import { LinkLocal } from "../modificadores-pseudo-classes/link-local";
import { EstiloAlvo } from "../modificadores-pseudo-classes/estilo-alvo";
import { AlvoDestaque } from "../modificadores-pseudo-classes/alvo-destaque";
import {Escopo} from "../modificadores-pseudo-classes/escopo";
import {Ativo } from "../modificadores-pseudo-classes/ativo";
import {Foco} from "../modificadores-pseudo-classes/foco";
import { FocoVisivel } from "../modificadores-pseudo-classes/foco-visivel";
import { FocoInterno } from "../modificadores-pseudo-classes/foco-interno";
import { Atual } from "../modificadores-pseudo-classes/atual";
import { Passado } from "../modificadores-pseudo-classes/passado";
import { Futuro } from "../modificadores-pseudo-classes/futuro";
import {Reproduzir} from "../modificadores-pseudo-classes/reproduzir";
import { Pausa} from "../modificadores-pseudo-classes/pausa";
import { Habilitado } from "../modificadores-pseudo-classes/habilitado";
import { Desabilitado } from "../modificadores-pseudo-classes/desabilitado";
import { SomenteLeitura } from "../modificadores-pseudo-classes/somente-leitura";
import { LerEscrever } from "../modificadores-pseudo-classes/ler-escrever";
import { LocalReservadoMostrado } from "../modificadores-pseudo-classes/local-reservado-mostrado";
import { EstiloPadrao } from "../modificadores-pseudo-classes/estilo-padrao";
import {  Verificado } from "../modificadores-pseudo-classes/verificado";
import { Indeterminado } from "../modificadores-pseudo-classes/indeterminado";
import { EmBranco} from "../modificadores-pseudo-classes/em-branco";
import { Valido } from "../modificadores-pseudo-classes/valido";
import { Invalido } from "../modificadores-pseudo-classes/invalido";
import { DentroDoLimite } from "../modificadores-pseudo-classes/dentro-do-limite";
import { ForaDoLimite} from "../modificadores-pseudo-classes/fora-do-limite";
import { Obrigatorio } from "../modificadores-pseudo-classes/obrigatorio";
import {Opcional } from "../modificadores-pseudo-classes/opcional";
import { UsuarioInvalido} from "../modificadores-pseudo-classes/usuario-invalido";
import { EstruturaEstilo } from "../modificadores-pseudo-classes/estrutura-estilo";
import { Vazio} from "../modificadores-pseudo-classes/vazio";
import { NFilho } from "../modificadores-pseudo-classes/n-filho";
import { NUltimoFilho} from "../modificadores-pseudo-classes/n-último-filho";
import { PrimeiroFilho } from "../modificadores-pseudo-classes/primeiro-filho";
import { UltimoFilho} from "../modificadores-pseudo-classes/ultimo-filho";
import { FilhoUnico } from "../modificadores-pseudo-classes/filho-unico";
import { NTipo } from "../modificadores-pseudo-classes/n-tipo";
import { NUltimoTipo } from "../modificadores-pseudo-classes/n-ultimo-tipo";
import { PrimeiroTipo } from "../modificadores-pseudo-classes/primeiro-tipo";
import { UltimoTipo } from "../modificadores-pseudo-classes/ultimo-tipo";
import { UnicoTipo } from "../modificadores-pseudo-classes/unico-tipo";



export const DicionarioPseudoClasses: { [nomeFolEs: string]: any } = {
    "sobrepor": Sobrepor,
    "direção-de-texto ": DirecaoTexto ,// Recebe parametro 
    "todo-link": TodoLink,
    "link": Link, 
    "visitado": Visitado,
    "link-local": LinkLocal,
    "estilo-alvo":EstiloAlvo,
    "alvo-destaque": AlvoDestaque,
    "escopo": Escopo,
    "ativo": Ativo,
    "foco": Foco,
    "foco-visivel": FocoVisivel,
    "foco-interno": FocoInterno,
    "atual": Atual,
    "passado": Passado, 
    "futuro":Futuro,
    "reproduzir": Reproduzir,
    "pausa": Pausa,
    "habilitado": Habilitado,
    "desabilitado": Desabilitado,
    "somente-leitura": SomenteLeitura,
    "ler-escrever": LerEscrever,
    "local-reservado-mostrado": LocalReservadoMostrado, 
    "estilo-padrão":EstiloPadrao,
    "verificado":  Verificado,
    "indeterminado": Indeterminado,
    "em-branco": EmBranco, 
    "válido": Valido,
    "inválido": Invalido,
    "invalido": Invalido,
    "dentro-do-limite": DentroDoLimite,
    "fora-do-limite": ForaDoLimite,
    "obrigatorio":Obrigatorio,
    "opcional": Opcional,
    "usuário-inválido": UsuarioInvalido,
    "usuario-invalido": UsuarioInvalido,
    "estrutura-estilo": EstruturaEstilo,
    "vazio":Vazio,
    "n-filho": NFilho, // Recebe parametro 
    "n-último-filho": NUltimoFilho,// recebe parametro 
    "primeiro-filho": PrimeiroFilho,
    "último-filho":UltimoFilho,
    "filho-unico": FilhoUnico,
    "n-tipo": NTipo, //Recebe parametro 
    "n-último-tipo": NUltimoTipo,//Recebe parametro 
    "n-ultimo-tipo": NUltimoTipo,//Recebe parametro 
    "primeiro-tipo":PrimeiroTipo,
    "ultimo-tipo":UltimoTipo,
    "unico-tipo": UnicoTipo,
   
}