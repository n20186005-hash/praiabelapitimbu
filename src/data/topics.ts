import type { Locale } from "./site";

export type TopicKey = "praia-bela-joao-pessoa" | "praias-de-pitimbu";

export type TopicContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export const topicSlugByKey: Record<TopicKey, string> = {
  "praia-bela-joao-pessoa": "praia-bela-joao-pessoa",
  "praias-de-pitimbu": "praias-de-pitimbu",
};

export const topicKeyBySlug: Record<string, TopicKey> = {
  "praia-bela-joao-pessoa": "praia-bela-joao-pessoa",
  "praias-de-pitimbu": "praias-de-pitimbu",
};

// Topic pages are produced only in Portuguese, the dominant search audience.
export const topicContentByKey: Record<TopicKey, TopicContent> = {
  "praia-bela-joao-pessoa": {
    title:
      "Praia Bela e João Pessoa: Distância, Como Chegar e a Diferença",
    description:
      "A Praia Bela não fica em João Pessoa, mas é o ponto de partida mais comum. Veja a distância (cerca de 45 km), como chegar de carro, tempo de viagem e por que aparece em buscas junto com a capital paraibana.",
    h1: "Praia Bela e João Pessoa",
    intro:
      "Muitos visitantes buscam 'Praia Bela João Pessoa' porque partem da capital para o litoral sul da Paraíba. A praia, porém, fica no município de Pitimbu. Entenda a relação entre os dois destinos e planeje o trajeto com clareza.",
    sections: [
      {
        title: "A Praia Bela fica em João Pessoa?",
        body:
          "Não. A Praia Bela fica no município de Pitimbu, no litoral sul da Paraíba. Porém, é frequentemente visitada em passeios saindo de João Pessoa e fica a aproximadamente 45 km da capital. Por isso aparece em muitas buscas junto com o nome da cidade, mas o endereço oficial é Pitimbu, PB.",
      },
      {
        title: "Distância e tempo de viagem",
        body:
          "São cerca de 45 km entre o centro de João Pessoa e a Praia Bela, com tempo de carro de aproximadamente 1 hora em condições normais. O trajeto segue pela BR-101 (sentido sul) e depois pela PB-008 até Pitimbu. O último trecho inclui a travessia de balsa sobre o rio, que dura apenas alguns minutos.",
      },
      {
        title: "Como chegar de carro saindo de João Pessoa",
        body:
          "Saia de João Pessoa pela BR-101 em direção ao sul. Mantenha o trajeto até o entroncamento com a PB-008 e siga para Pitimbu. Ao chegar à margem do rio, estacione o carro e pegue a balsa local até a praia. Dirija preferencialmente durante o dia e consulte os horários da balsa para a volta.",
      },
      {
        title: "Por que a Praia Bela aparece junto com João Pessoa?",
        body:
          "João Pessoa é a principal base de hospedagem, aeroporto (Presidente Castro Pinto, JPA) e ponto de apoio logístico para quem visita o litoral sul. A maioria dos turistas passa pela capital antes de seguir para Pitimbu, o que explica a associação natural nas buscas e roteiros.",
      },
    ],
    faq: [
      {
        question: "Qual a distância da Praia Bela até João Pessoa?",
        answer:
          "Cerca de 45 km, com aproximadamente 1 hora de carro pela BR-101 e PB-008, mais a curta travessia de balsa sobre o rio em Pitimbu.",
      },
      {
        question: "Posso ir de João Pessoa sem carro?",
        answer:
          "Sim. Há ônibus de longa distância ou vans até Pitimbu, depois transporte local (van comunitária ou táxi) até o rio e, por fim, a balsa. O transporte público é limitado, então planeje a volta com antecedência.",
      },
      {
        question: "A Praia Bela é a mesma coisa que Praia de Pitimbu?",
        answer:
          "Não. A Praia Bela é uma praia específica dentro do município de Pitimbu, conhecida pelo encontro do rio com o mar. A 'Praia de Pitimbu' é o nome mais genérico usado para o litoral do município e pode se referir a trechos distintos.",
      },
    ],
  },
  "praias-de-pitimbu": {
    title:
      "Praias de Pitimbu: Praia Bela e as Melhores Praias do Litoral Sul da Paraíba",
    description:
      "Conheça as principais praias de Pitimbu, no litoral sul da Paraíba: Praia Bela, Praia de Pitimbu, Barra do Abiaí, Pontinha e outras opções do destino conhecido como Costa das Falésias.",
    h1: "Praias de Pitimbu",
    intro:
      "Pitimbu, no litoral sul da Paraíba, reúne praias de águas calmas, falésias e o encontro de rios com o mar. A Praia Bela é a mais conhecida, mas o município oferece outras opções para quem quer explorar o litoral paraibano além da capital.",
    sections: [
      {
        title: "Praia Bela",
        body:
          "É o cartão-postal de Pitimbu: uma praia onde um rio deságua no mar, formando uma foz quente e tranquila de um lado e um mar aberto mais fresco e agitado do outro. O acesso inclui a travessia de balsa e pequenos quiosques à beira da areia.",
      },
      {
        title: "Praia de Pitimbu",
        body:
          "Nome genérico para o litoral do município, reúne trechos de areia e estrutura de apoio. É o ponto de referência para quem chega pela PB-008 e serve de base para explorar as praias vizinhas.",
      },
      {
        title: "Barra do Abiaí",
        body:
          "Fica na desembocadura do Rio Abiaí, com águas calmas e ambiente favorável para banho e passeios de barco. É uma das opções mais procuradas por quem busca maré baixa e tranquilidade.",
      },
      {
        title: "Pontinha",
        body:
          "Pequena praia de águas mornas e baixa profundidade inicial, bastante procurada por famílias. O acesso costuma ser pela mesma região de Pitimbu, com pouca infraestrutura formal.",
      },
      {
        title: "Costa das Falésias",
        body:
          "Pitimbu integra o roteiro conhecido como Costa das Falésias, com formações de barreira e falésias tropicais ao longo do litoral sul. É um destino em crescimento no turismo de qualidade da Paraíba.",
      },
    ],
    faq: [
      {
        question: "Quais são as praias de Pitimbu?",
        answer:
          "Entre as principais estão a Praia Bela, a Praia de Pitimbu, a Barra do Abiaí e a Pontinha, além de trechos ao longo da Costa das Falésias no litoral sul da Paraíba.",
      },
      {
        question: "A Praia Bela é a melhor praia de Pitimbu?",
        answer:
          "Depende do que você procura. A Praia Bela é a mais famosa pelo encontro do rio com o mar e pela balsa. Quem quer águas muito calmas pode preferir a Barra do Abiaí ou a Pontinha.",
      },
      {
        question: "Como chegar às praias de Pitimbu saindo de João Pessoa?",
        answer:
          "Pela BR-101 (sentido sul) até a PB-008, que leva direto a Pitimbu, cerca de 45 km e 1 hora de carro. De lá, cada praia tem seu acesso próprio, muitas vezes por estradas vicinais.",
      },
    ],
  },
};

export const topicLocale: Locale = "pt";
