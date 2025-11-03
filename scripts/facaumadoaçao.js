
function adicionarCampanhaCard(campanha) {
    const container = document.getElementById('container-campanhas');
    if (!container) return;

    // Criar elemento do card
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('campaign-card');

    // Imagem
    const img = document.createElement('img');
    img.classList.add('card-media');
    img.src = campanha.capaUrl;
    img.alt = `Capa da campanha: ${campanha.titulo}`;

    // Conteúdo
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('card-content');

    // Título
    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');
    titulo.textContent = campanha.titulo;

    // Descrição
    const descricao = document.createElement('p');
    descricao.classList.add('card-description');
    descricao.textContent = campanha.descricao;

    // Footer
    const footer = document.createElement('div');
    footer.classList.add('card-footer');

    // Botão
    const link = document.createElement('a');
    link.classList.add('btn-primary');
    link.href = campanha.url;
    link.textContent = "SAIBA MAIS";

    // Container de meta e progresso
    const containerInfo = document.createElement('div');
    containerInfo.classList.add('container');

    const info = document.createElement('div');
    info.classList.add('info');

    // Formatação de valores em BRL
    const metaFormatada = campanha.meta.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    const doadoFormatado = campanha.doado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    info.textContent = `Meta: ${metaFormatada} — Doado: ${doadoFormatado}`;

    // Barra de progresso
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progressFill = document.createElement('div');
    progressFill.classList.add('progress-fill');

    // Cálculo de progresso
    const porcentagem = Math.min((campanha.doado / campanha.meta) * 100, 100);
    progressFill.style.width = `${porcentagem}%`;
    progressFill.textContent = `${Math.round(porcentagem)}%`;

    // Montagem da hierarquia
    progressBar.appendChild(progressFill);
    containerInfo.appendChild(info);
    containerInfo.appendChild(progressBar);

    footer.appendChild(link);
    footer.appendChild(containerInfo);

    contentDiv.appendChild(titulo);
    contentDiv.appendChild(descricao);
    contentDiv.appendChild(footer);

    cardDiv.appendChild(img);
    cardDiv.appendChild(contentDiv);

    container.appendChild(cardDiv);
}

// Função para exibir várias campanhas
function exibirCampanhas(lista) {
    const container = document.getElementById('container-campanhas');
    container.innerHTML = ""; // Limpar antes de renderizar
    lista.forEach(campanha => adicionarCampanhaCard(campanha));
}

/**
 * Lista de campanhas de arrecadação.
 * @typedef {Object} Campanha
 * @property {string} titulo - O título da campanha (limpo de espaços extras).
 * @property {string} descricao - A descrição detalhada da campanha.
 * @property {string} capaUrl - URL da imagem de capa/publicitária.
 * @property {number} meta - O valor da meta de arrecadação.
 * @property {number} doado - O valor já arrecadado.
 * @property {string} url - O URL para a página da campanha.
 */

/** @type {Campanha[]} */
const campanhas = [
    {
        titulo: "Desafio da Fome",
        descricao: "Desafio da Fome: Sua ajuda faz a diferença. A fome no Brasil é um problema complexo e multifacetado, com raízes diversas. Para se ter uma ideia, atualmente, 8,4 milhões de brasileiros enfrentam dificuldades para garantir acesso a alimentos, segundo relatório de 2024 da Organização das Nações Unidas (ONU). A insegurança alimentar no país, mesmo em queda, ainda preocupa. E para combater esse problema que assola inúmeras famílias o Vakinha, em conjunto com suas ONGs parceiras, lança a campanha Desafio da Fome.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5386406/1743516850.088.jpg?ims=700x410",
        meta: 100000000,
        doado: 7072003,
        url: "https://www.vakinha.com.br/vaquinha/desafio-da-fome?utm_source=0.1%3A5500"
    },
    {
    titulo: "Aquecendo Corações: Vakinha para Moradores de Rua em Belo Horizonte",
    descricao: "Ajude a transformar o inverno de quem vive nas ruas de Belo Horizonte ❄️🧣 Com a chegada do frio, a situação das pessoas em situação de rua se torna ainda mais difícil e dolorosa. Muitas enfrentam as noites geladas sem agasalho, sem alimento ... (ver mais)",
    capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5576770/1750789930.684.jpg", // URL da imagem de capa ausente/não informada
    meta: 10000,
    doado: 2325.47,
    url: "https://www.vakinha.com.br/vaquinha/aquecendo-coracoes-vakinha-para-moradores-de-rua-em-belo-horizonte?utm_internal_source=search_campaign"
    },
    {
  "titulo": "Ajudar um cachorrinho de rua atropelado, necessita fazer cirurgia da mandibula",
  "descricao": "Me chamo Diego, cuido de um cachorro de rua em frente a minha casa, não consigo colocar ele pra dentro porque tenho duas cachorras e ele escapa, ele foi atropelado e quebrou a mandíbula, vai precisar de uma cirurgia no valor de R$ 2.000,00 reais e mais algumas diárias de internamento por se tratar de um caso grave, que fica mais R$ 1.000,00 reais com algumas medicações. Dando um total de R$ 3.000,00 reais, peço ajuda e colaboração porque no momento não tenho condições de arcar com esse valor sozinho. Deus abençoe e dê em dobro todos que ajuraram!",
  "capaUrl": "https://static.vakinha.com.br/uploads/vakinha/image/5783567/1761668448.066.jpg",
  "meta": 3000,
  "doado": 150,
  "url": "https://www.vakinha.com.br/vaquinha/ajudar-um-cachorrinho-de-rua-atropelado-necessita-fazer-cirurgia-da-mandibula?utm_internal_source=search_campaign"
},
{
  "titulo": "RESGATE gatinha de rua doente 😿",
  "descricao": "🚨 URGENTE!😿 A Floquinha foi abandonada na rua e está com câncer.Ela precisa de tratamento imediato para sobreviver. 💔💰 Ajude com qualquer valor!📍PIX 1:Flávia Arroyo📱18997311767📍PIX 2:Salvadora Dias de Lima📱18998028111✨ Mesmo um pouquinho fa... ver tudo",
  "capaUrl": "https://static.vakinha.com.br/uploads/vakinha/image/5771449/1760796831.667.jpg?ims=700x410",
  "meta": 2900,
  "doado": 151,
  "url": "https://www.vakinha.com.br/vaquinha/resgate-gatinha-de-rua-doente?utm_internal_source=search_campaign"
},
{
  "titulo": "SONHO DO NOSSO PRÓPRIO ABRIGO 🐈🙏🐕",
  "descricao": "Somos a ONG amorderuacrateus que resgata animais vítimas de abandonos e maustratos, temos duzentos animais na nossa ONG que precisam urgente de um abrigo próprio, infelizmente estamos em u local emprestado, estamos precisando sair do local ver tudo",
  "capaUrl": "https://static.vakinha.com.br/uploads/vakinha/image/5007309/1722993023.227.png",
  "meta": 500000,
  "doado": 15357.91,
  "url": "https://www.vakinha.com.br/vaquinha/comprar-nosso-abrigo-pros-animais?utm_internal_source=search_campaign"
},
{
"titulo": "AJUDE OS ANIMAIS DE RUA / ARAGUAÍNA - TO",
"descricao": "Ajude o Projeto APAA ( Associação Protetora dos Animais de Araguaína). Somos uma associação sem fins lucrativos que presta ajuda para animais de rua, nosso trabalho voluntário consiste em salvar animais em situação de rua e combater situação de maus tratos. Nosso objetivo e acabar com o sofrimento desses animais dentro da nossa cidade ( Araguaína - TO) Conheça o nosso trabalho através da nossa pagina: @apaa_arguaina https://instagram.com/apaa_araguaina?igshid=YmMyMTA2M2Y= Fone: 63 991001106",
"capaUrl": "https://static.vakinha.com.br/uploads/vakinha/image/3391289/1673706795.166.png?ims=700x410",
"meta": 80000,
"doado": 5512.02,
"url": "https://www.vakinha.com.br/vaquinha/ajude-os-animais-de-rua-araguaina-to?utm_internal_source=search_campaign"
},
    {
        titulo: "Juntos pela Andressa",
        descricao: "A vaquinha “Juntos pela Andressa” foi criada para apoiar a Andressa Balthazar Mendes, que enfrenta um tipo agressivo de câncer de mama (triplo negativo) e necessita de tratamento caro que não é disponibilizado pelo Sistema Único de Saúde. A meta é arrecadar aproximadamente R$ 573.000,00 para a terapia‑alvo indicada pelos médicos.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5784420/1761695475.388.jpg",
        meta: 573000,
        doado: 46656,
        url: "https://www.vakinha.com.br/vaquinha/juntos-pela-andressa-andressa-balthazar-mendes?"
    },
    {
        titulo: "Reabilitação da Julia consertando meio de transporte",
        descricao: "Meu nome é Alexander Michael Seegerer, sou pai da Julia Fonseca Seegerer que é remissiva de um câncer no cérebro, tumor maligno em 2020, que a deixou 5 meses internada dos quais 3 meses em coma. Hoje ela tem treze anos, ficou com várias sequelas que exigem acompanhamento médico especializado e reabilitação para que volte a andar novamente. O carro que uso para dar esse suporte a ela quebrou (problema no motor), e não tenho condições de pagar pelo conserto, por isso necessito das doações.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5787390/1761876818.02.jpg?ims=700x410",
        meta: 70000,
        doado: 4173,
        url: "https://www.vakinha.com.br/vaquinha/reabilitacao-de-maria-julia?utm_internal_source=most_loved_screen_last_day"
    },
    {
        titulo: "Campanha Solidária para o Tratamento do Vicente Gandra",
        descricao: "Este é o Seu Vicente (Vicente Gandra) – um homem admirável, pai, avô, marido, tio, irmão, amigo, cozinheiro de mão cheia e trabalhador incansável. No dia 17/03/2025, ele sofreu um gravíssimo acidente de carro, que resultou em múltiplas lesões: pneumotórax, fraturas em seis costelas, fêmur, tíbia, fíbula, joelho esquerdo, a coluna e tornozelo direito, além de lesões na vesícula, fígado e infecções bacterianas resistentes. Além disso, ele possui uma doença autoimune (espondilite anquilosante) que afeta os ossos da coluna e da bacia, o que compromete ainda mais as fraturas que foram ocasionadas pelo acidente. Começamos o tratamento pelo SUS, mas após mais de 30 dias sem avanço nas vagas para as cirurgias necessárias, tivemos que buscar atendimento no Hospital Felício Rocho, em Belo Horizonte. Ele já passou por uma cirurgia de coluna de altíssimo risco e passará por mais cirurgias (nas pernas e tornozelo), fora o tratamento das infecções, vesícula e da fala, que temos pela frente. Nossas reservas familiares já não são suficientes para cobrir todos os custos hospitalares. Por isso, pedimos sua ajuda. Qualquer valor que puder contribuir fará uma enorme diferença para que possamos continuar lutando pela recuperação do Seu Vicente.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5785075/1761746892.085.jpg",
        meta: 70000,
        doado: 8480,
        url: "https://www.vakinha.com.br/vaquinha/campanha-solidaria-para-o-tratamento-do-vicente-gandra"
    },
    {
        titulo: "Salve o Gustavinho",
        descricao: "🌟 O pequeno Gustavo Blanes Martinez, de apenas 2 anos enfrenta uma luta muito difícil: ele foi diagnosticado com Leucodistrofia Metacromática (LDM), uma doença rara e degenerativa, com pouquíssimos casos registrados no Brasil. 💔A LDM afeta... ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5780146/1761434827.182.jpg?ims=700x410",
        meta: 300000,
        doado: 129899.57,
        url: "https://www.vakinha.com.br/vaquinha/uma-chance-pro-gustavo?utm_internal_source=most_loved_screen"
    },
    {
        titulo: "Irmãos Alexandre e Fernando",
        descricao: "Meu nome é Talita sou Mãe do Alexandre e do Fernando Há 11 meses descobri que meus filhos são portadores de uma doença rara chamada Adrenoleucodistrofia. E Estou em busca de um tratamento, ja que aqui no Brasil não tem nada maia ser feito. O Reac Regenerativo foi desenvolvido na Itália e vem trazendo resultados incríveis, estou em busca da cura e se Deus permitir vamos conseguir. Essa vaquinha foi criada para a primeira parte do tratamento que é dividido em 4 sessões, conseguimos realizar 2 faltam maus duas. Sua participação é importante para nós. Vai dar certo! No insta temos a conta Irmãos Alexandre e Fernando onde conto mais do Diagnóstico e Mostro nosso Dia a Dia. Eu tenho fé que vamos conseguir!",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5282741/1739215521.979.png",
        meta: 600000,
        doado: 38094.97,
        url: "https://www.vakinha.com.br/vaquinha/irmaos-alexandre-e-fernando?utm_internal_source=em-destaque-quero-doar"
    },
    {
        titulo: "O José venceu o câncer, mas precisa da sua ajuda para recomeçar!",
        descricao: "Ajude o José a Recuperar sua Independência! Olá, me chamo Lívia Souza, tenho 30 anos e há seis anos sou cuidadora em tempo integral do meu esposo, José Carlos Pereira Lima que também tem 30 anos. Ele é um guerreiro que enfrentou um câncer no cérebro há 06 anos e, embora tenha vencido a doença, as sequelas deixaram marcas profundas em nossa rotina e em sua qualidade de vida. Após o tratamento, o José perdeu grande parte da memória, além de apresentar dificuldades cognitivas e motoras. Hoje, ele precisa de ajuda para todas as atividades do dia a dia e na maior parte do tempo tem comportamento de criança. Existe, porém, uma esperança de melhora significativa: um procedimento cirúrgico para inclusão de uma válvula no sistema ventricular, que pode devolver parte da sua autonomia e permitir que ele viva com mais dignidade e independência. Infelizmente, o custo dessa cirurgia é muito alto — cerca de R$ 120.000,00, sem contar os gastos com medicações de alto custo e exames complementares. Eu trabalho em home office, para poder cuidar dele integralmente, mas não temos condições financeiras de arcar com tudo isso sozinhos. Por isso, venho com o coração aberto pedir sua ajuda. Qualquer contribuição, por menor que pareça, faz uma diferença imensa na vida do José e na nossa luta diária. 🙏 Ajude-nos a devolver ao José a chance de viver com mais independência e qualidade de vida. Com fé e solidariedade, acreditamos que será possível vencer mais essa batalha!",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5771919/1760828978.687.jpg",
        meta: 120000,
        doado: 16830.69,
        url: "https://www.vakinha.com.br/vaquinha/o-jose-venceu-o-cancer-mas-precisa-da-sua-ajuda-para-recomecar"
    },
    {
        titulo: "Unidos pelo Pedro Henrique",
        descricao: "Meu filho, Pedro Henrique, nasceu com uma lesão tumoral no cerébro denominada Hamartoma Hipotalâmico. Essa lesão, embora benigna, causa crises convulsivas (epilepsia), que até seus 10 anos foram controladas com medicamento (Tegretol 400mg/dia). Com o início da puberdade aos 10 anos (2024), as crises convulsivas aumentaram, apresentando difícil controle. Por orientação médica, o Pedro iniciou mais 2 anticonvulsivantes (Kepra 500mg/dia e Lamotrigina 150mg/dia). Infelizmente, os medicamentos disponíveis não tiveram o efeito esperado pelos médicos e o uso excessivo dos mesmos reduz a atividade cerebral do Pedro, comprometendo seu desenvolvimento, aprendizado e a prática de atividades esportivas que tanto gosta; ele também vem apresentando diariamente dores de cabeça e tontura. Sua única opção agora, para voltar a ter qualidade de vida, é a cirurgia de remoção do Hamartoma. Por ser uma cirurgia delicada e de risco requer uma equipe cirúrgica altamente especializada e única na América Latina, com uma técnica igualmente única e conhecidamente exitosa. Por isso o custo é elevado e fora do nosso orçamento. Precisamos da sua ajuda! Sua contribuição será apreciada como um gesto de amor, fé e esperança para a cura do Pedrinho! Gratidão!",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5778756/ed597608-c10a-43fe-94cc-44b23529842a.jpeg",
        meta: 100000,
        doado: 33499,
        url: "https://www.vakinha.com.br/vaquinha/unidos-pelo-pedro-henrique"
    },
    {
        titulo: "Todos pela Júlia Casado Militão",
        descricao: "Eu sou a Larúcia, mãe da Júlia Casado Militão uma criança de 5 anos que foi atropelada por um trator no início de 2024. Teve traumatismo craniano grave e hoje necessita de 2 cirurgias para melhorar sua qualidade de vida. A Julinha é um gran ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5682013/1755323765.02.jpg?ims=700x410",
        meta: 210000,
        doado: 22632.76,
        url: "https://www.vakinha.com.br/vaquinha/todos-pela-julia-casado-militao"
    },
    {
        titulo: "Uma força para o Dr. Ricardo de Pauli",
        descricao: "Olá! Sou Éder França da Costa e lancei esta campanha em apoio ao meu amigo Ricardo de Pauli, médico veterinário especializado em medicina comportamental, dindo do Caio, meu filho, e uma das melhores pessoas que conheço no mundo! Há pouco tempo, ele recebeu o diagnóstico de esclerose múltipla e vem enfrentando sérias dificuldades motoras: não consegue segurar objetos com a mão direita, sente grande dificuldade para caminhar, falar e engolir. Neste momento, Ricardo está impossibilitado de trabalhar e precisa de ajuda para arcar com as despesas de casa, manter o mínimo conforto da esposa, das duas filhas e dos pets que tanto cuidou ao longo da vida. Seu apoio financeiro permitirá que ele se dedique ao tratamento com mais tranquilidade e menos preocupações. Conto com sua solidariedade: qualquer valor faz a diferença neste início de jornada tão desafiadora. Agradeço imensamente a sua colaboração e o carinho de todos que puderem compartilhar esta campanha. Muito obrigado!",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5775751/1761151596.55.jpg?ims=700x410",
        meta: 50000,
        doado: 30851.01,
        url: "https://www.vakinha.com.br/vaquinha/uma-forca-pro-dr-ricardo-de-pauli-veterinario"
    },
    {
        titulo: "Vaquinha solidária",
        descricao: "Ola , me chamo Rogéria, tenho 28 anos ,tenho 3 filhas , a 3 meses atrás fui diagnósticada com a doença RARA porfiria aguda intermitente, e de lá pra cá venho enfrentando muitas dificuldades e obstáculos, pedir o movimento do pescoço pra baixo, estou sem nenhuma renda , não consegui receber nenhum tipo de auxílio pra ajuda com tratamento, meu marido saiu do serviço pra cuidar de mim no hospital por ser uma doença que me deixou incapacitada de fazer qualquer coisa , gostaria de pedir uma ajuda de coração, estou a 3 meses no hospital sem previsão de alta necessito de ajuda pra manter gastos , qualquer ajuda e bem vinda , Que Deus abençoe vocês",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5785893/1761777771.587.jpg?ims=700x410",
        meta: 15000,
        doado: 1339.01,
        url: "https://www.vakinha.com.br/vaquinha/vaquinha-solidaria-rian-correia-gregorio"
    },
    {
        titulo: "Compra da Imunoterapia (PEMBROLISUMABE) para Mariah",
        descricao: "“INICIAMOS UMA CORRIDA CONTRA O TEMPO” Foram as palavras que ouvi da equipe médica. Precisamos custear essa medicação tão importante na vidinha da Mari. • IMUNOTERAPIA chamada PEMBROLISUMABE / KEYTRUDA®️. Quantos somos para conseguir chegar neste grande marco no tratamento dela e mudar o curso deste prognóstico?! Mari ama viver e eu prometi pra ela que daria tudo certo. 😭😭😭😭 Mari diagnosticou com câncer de adrenal como metastase pulmonar em maio dr 202, tivemos 9 meses de remissão e em setembro de 2025 a doença voltou nos pulmões. Essa imunoterapia é a única capaz de aumentar o tempo de vida dela aqui conosco. Peço de todo coração para quem possa nos ajudar doando, compartilhado, falando com pessoas que possam nos ajudar de diferentes formas. UMA CAIXA DESSA MEDICAÇÃO JÁ FARIA MUITA DIFERENÇA NA VIDA DELA E GANHARÍAMOS TEMPO ATÉ CONSEGUIRMOS JUDICIALIZAR. 🙏🏾❤️‍🩹",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5757517/1759797695.058.jpg",
        meta: 60000,
        doado: 14949.22,
        url: "https://www.vakinha.com.br/vaquinha/tratamento-oncologico-da-mariah-luna"
    },
    {
        titulo: "Ajude Nayara voltar a andar - Cirurgia Urgente de Hérnia de Disco",
        descricao: "Olá pessoal! Sou amiga da Nayara Alves, que está vivendo uma das fases mais difíceis de sua vida. Há cerca de três meses, começou a sentir fortes dores na lombar. Mesmo tomando diversos medicamentos, as dores só pioravam, até que, em um dete ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5777685/1761255894.37.jpg?ims=700x410",
        meta: 20000,
        doado: 11935,
        url: "https://www.vakinha.com.br/vaquinha/ajude-nayara-voltar-a-andar-cirurgia-urgente-de-hernia-de-disco"
    },
    {
        titulo: "Cirurgia de catarata congênita",
        descricao: "Olá, pessoal! Venho pedir a ajuda de todos para uma causa muito importante e urgente. Nossa pequena Maya, de apenas 7 meses, foi diagnosticada com catarata congênita, uma condição rara que afeta os olhos e pode comprometer para sempre a visã ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5783425/1761661338.418.jpg",
        meta: 18800,
        doado: 10340.46,
        url: "https://www.vakinha.com.br/vaquinha/cirurgia-de-catarata-congenita-vitor-damasceno-queiroz"
    },
    {
        titulo: "Ajude a Salvar a Léia",
        descricao: "Minha mãe, Valcilea (Léia), foi diagnosticada há cerca de um ano com glioblastoma — um tipo de tumor cerebral extremamente agressivo e de rápido crescimento. Essa doença trouxe graves prejuízos à sua saúde, como a perda das funções motoras e da mobilidade do lado esquerdo, tornando-a totalmente dependente de cuidados. Nesse período, ela passou por uma cirurgia e seguiu o tratamento padrão com radioterapia e quimioterapia. Em julho, encerrou essa etapa e finalizou a químio. No dia 9 de outubro, uma nova ressonância com perfusão revelou um novo tumor de aproximadamente 4 cm, que já está causando inchaço e edemas em seu cérebro. O caso é extremamente urgente — o tumor dobra de tamanho a cada mês, e infelizmente estamos enfrentando morosidade por parte do convênio para dar continuidade ao tratamento. Após muita busca, encontramos um neurocirurgião em Curitiba, especialista em casos complexos como o dela, que utiliza uma técnica mais avançada, oferecendo maiores chances de sucesso. O hospital não autoriza divulgar o nome deles e do medico (Não foi autorizado divulgar nome do médico e do hospital) O problema é que o custo total da cirurgia, tratamento e deslocamento é de R$ 130.000,00, um valor muito acima da nossa realidade. Nossa família está fazendo de tudo — rifas, vendas e campanhas — e pedindo ajuda a todos os amigos e conhecidos. Mas precisamos da sua ajuda para salvar a vida da minha mãe. Cada contribuição, de qualquer valor, faz diferença. E, se você não puder contribuir financeiramente, por favor, compartilhe esta campanha — isso já nos ajuda imensamente. Deus abençoe cada pessoa que puder ajudar. 🙏",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5785466/1761763042.34.jpg?ims=700x410",
        meta: 130000,
        doado: 20876.14,
        url: "https://www.vakinha.com.br/vaquinha/ajude-a-salvar-a-leia-guilherme-avelino-martins-de-almeida"
    },
    {
        titulo: "Juntos pela melhora do Leo!",
        descricao: "Nos últimos meses Leonardo vem enfrentando uma situação muito difícil, que interrompeu completamente sua rotina e o deixou em um estado delicado de saúde. Tudo começou após uma cirurgia de herniorrafia inguinal, que acabou gerando rejeição do material cirúrgico implantado. Em uma tentativa de correção, novo procedimento foi realizado, mas parte do material não foi removido — o que agravou ainda mais o quadro, causando dores crônicas, inflamações exacerbadas afetando todo sistema digestivo e uma grave infecção generalizada (choque séptico). Hoje, mesmo com o quadro parcialmente controlado, o Leonardo corre risco de uma nova sepse iminente e precisa com urgência de uma nova cirurgia para remoção total dos componentes restantes e reconstrução dos nervos/artérias da região pélvica afetadas. Desempregado e impossibilitado de seguir trabalhando, Leornado precisa de uma cirugia complexa, que envolve uma equipe especializada, locomoção e custos hospitalares muito altos.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5775182/1761137193.531.jpg?ims=700x410",
        meta: 50000,
        doado: 2735,
        url: "https://www.vakinha.com.br/vaquinha/juntos-pela-melhora-do-leo"
    },
    {
        titulo: "Vaquinha Solidária para Ana Vitória",
        descricao: "Olá, eu sou Ana Vitória. No dia 21/08/25 Fui ao neurocirurgião levei os exames ele avaliou tudo que eu tinha levado. Então ele disse realmente tem lesão aqui, Então Fui Diagnosticada com tumor na Cabeça chorei muito pois ninguém esperava um diagnóstico desse quem me conhece sabe como sou! Pensei Senhor e agora oque eu faço, falei Senhor tem tanta gente ruim nesse mundo e aconteceu logo comigo fiquei questionando a Deus o porque daquela situação. Mais veio um calma no coração tão grande que só Deus dá sabe parei de questionar e disse Senhor Eu Vou Contar meu Milagre de Obras Completas porque o mesmo Deus ainda cura, Eu vou ser Curada e vou contar oque o Senhor fez na minha Vida. E preciso da sua ajuda para custear nos exames de alto custo na luta contra um tumor.",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5779864/1761416693.533.jpg",
        meta: 16000,
        doado: 9924.08,
        url: "https://www.vakinha.com.br/vaquinha/vaquinha-solidaria-para-ana-vitoria"
    },
    {
        titulo: "Em prol da Valentina Kempfer (despesas com alimentação/moradia dos pais e exames)",
        descricao: "Minha filha Valentina Kempfer Bergamann de 13 anos está internada no Hospital da Santa Casa em Cuiabá/MT, no momento ainda sem diagnóstico. Somos de Sorriso/MT, morávamos até julho de 2025 em Ipiranga do Norte/MT. Valentina sempre foi muito ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5783836/1761683658.912.jpg",
        meta: 10000,
        doado: 15194,
        url: "https://www.vakinha.com.br/vaquinha/em-prol-da-valentina-kempfer-despesas-com-alimentacao-moradia-dos-pais-e-exames"
    },
    {
        titulo: "Ajude a Alice na luta contra o Sarcoma de Ewing",
        descricao: "Ajude a Alice a vencer o sarcoma de Ewing. Minha filha Alice, de 13 anos, foi diagnosticada com sarcoma de Ewing, um tipo raro e agressivo de câncer ósseo. Desde então, nossa vida mudou completamente. Alice sofreu uma fratura no fêmur causad ver tudo",
        capaUrl: "https://static.vakinha.com.br/uploads/vakinha/image/5772532/A85EB109-DCD9-46F6-B88C-EEC048514D3F.jpg",
        meta: 20000,
        doado: 1912.93,
        url: "https://www.vakinha.com.br/vaquinha/ajude-a-alice-na-luta-contra-o-sarcoma-de-ewing"
    }, 
    
];
// Renderizar campanhas na tela inicial
document.addEventListener("DOMContentLoaded", () => {
    exibirCampanhas(campanhas);
});

// 5. Funcionalidade do menu Hamburguer
const hamburguerIcon = document.querySelector('.hamburguer-icon');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

hamburguerIcon.addEventListener('click', () => {
    hamburguerIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

