export const locales = ["zh", "en", "it", "es", "pt"] as const;

export type Locale = (typeof locales)[number];

type TextCard = { title: string; body: string };

export const siteMeta = {
  name: "Praia Bela - Pitimbu",
  domain: "praiabelapitimbu.com",
  mapsUrl: "https://maps.app.goo.gl/VdwXmwbYFNkBxf2B9",
  address: "Unnamed Road, Pitimbu - PB, 58324-000, Brazil",
  addressZh: "巴西帕拉伊巴州皮廷布市 Unnamed Road，邮政编码 58324-000",
  plusCode: "J52W+R9 Pitimbu, Paraíba, Brazil",
  plusCodeZh: "J52W+R9 皮廷布，巴西帕拉伊巴州",
  phone: "",
  rating: "4.7",
  reviewCount: "5,935",
  type: "海滩亭",
  heroImage: "https://praiabelapitimbu.com/gallery/praia-bela-pitimbu-4.jpg",
  ogImage: "/gallery/praia-bela-pitimbu-4.jpg",
  galleryImages: Array.from({ length: 24 }, (_, index) => ({
    src: `/gallery/praia-bela-pitimbu-${index + 1}.jpg`,
    index: index + 1,
  })),
} as const;

const languageNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
  it: "Italiano",
  es: "Español",
  pt: "Português",
};

export type PageContent = {
  localeName: string;
  title: string;
  description: string;
  nav: {
    overview: string;
    gallery: string;
    reviews: string;
    transport: string;
    visit: string;
    links: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    summary: string;
    ratingLabel: string;
    typeLabel: string;
    addressLabel: string;
    phoneLabel: string;
    plusCodeLabel: string;
    mapsCta: string;
    galleryCta: string;
  };
  metricsTitle: string;
  metrics: Array<{ label: string; value: string }>;
  story: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  insights: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  technical: {
    title: string;
    intro: string;
    rows: Array<{ dimension: string; value: string; note: string }>;
  };
  routeProfile: {
    title: string;
    intro: string;
    stages: Array<{ title: string; elevation: string; body: string }>;
  };
  astronomy: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  faq: {
    title: string;
    intro: string;
    groups: Array<{
      category: string;
      items: Array<{ question: string; answer: string }>;
    }>;
  };
  photos: {
    title: string;
    intro: string;
    mapsCta: string;
    altPrefix: string;
  };
  reviews: {
    title: string;
    intro: string;
    mapsCta: string;
    themes: TextCard[];
  };
  transport: {
    title: string;
    intro: string;
    cards: TextCard[];
  };
  visit: {
    title: string;
    cards: TextCard[];
  };
  editorial: {
    title: string;
    body: string;
  };
  links: {
    title: string;
    intro: string;
    items: Array<{ title: string; href: string; description: string }>;
  };
  footer: {
    copyright: string;
    disclaimer: string;
    mapsLabel: string;
  };
};

export const localizedPath = (locale: Locale) => (locale === "zh" ? "/" : `/${locale}/`);

export const alternateLinks = locales.map((locale) => ({
  locale,
  label: languageNames[locale],
  href: localizedPath(locale),
}));

export const contentByLocale: Record<Locale, PageContent> = {
  zh: {
    localeName: "中文",
    title: "Praia Bela - Pitimbu | 巴西帕拉伊巴州河海交汇沙滩五语指南",
    description:
      "面向中文、英文、意大利文、西班牙文与葡萄牙文访客的 Praia Bela - Pitimbu 单页科普指南，涵盖地理背景、河海生态、交通方式、现场照片与官方延伸链接。",
    nav: {
      overview: "概览",
      gallery: "照片",
      reviews: "评价",
      transport: "交通",
      visit: "到访建议",
      links: "官方链接",
    },
    hero: {
      eyebrow: "巴西帕拉伊巴州 | 大西洋南岸的河海交汇沙滩",
      headline: "Praia Bela - Pitimbu",
      summary:
        "本站以非盈利景点科普为目标，聚焦 Praia Bela 的地理位置、河海生态、交通方式与现场照片，不承载预订、促销或商业背书。",
      ratingLabel: "Google 评分",
      typeLabel: "类型",
      addressLabel: "地址",
      phoneLabel: "电话",
      plusCodeLabel: "Plus Code",
      mapsCta: "在 Google 地图上查看位置",
      galleryCta: "查看现场照片",
    },
    metricsTitle: "基础信息",
    metrics: [
      { label: "地理特征", value: "河海交汇、金色沙滩、礁石与红树林" },
      { label: "体验类型", value: "沙滩休憩、河口游泳、乘小船横渡" },
      { label: "区域背景", value: "若昂佩索阿大都会区南缘，皮廷布市" },
      { label: "适合人群", value: "自驾游客、家庭、自然摄影与生态观察者" },
    ],
    story: {
      title: "地理、历史与地方语境",
      intro:
        "Praia Bela 的吸引力不只来自沙滩本身，更来自它把河流、海岸、沙丘与社区连成一个完整的到访语境。",
      cards: [
        {
          title: "河海交汇的地形",
          body:
            "Praia Bela 位于皮廷布市南部的大西洋海岸，一处小河（河口）在此注入大海。正是这种“河海交汇”塑造了它最独特的体验：一侧是温暖平静的河口，另一侧是偏凉、多浪的外海。到达沙滩通常需要先乘小型渡船（balsa）横渡河口，这也是当地延续多年的通行方式。",
        },
        {
          title: "海岸、沙丘与植被",
          body:
            "这里属于巴西东北部的屏障海岸地貌，平均海拔仅约 16 米。滨海沙丘与耐风植被沿热带海岸分布，涨落潮之间露出大片滩涂，是观察海岸动力与沙丘演化的天然课堂。",
        },
        {
          title: "地名、历史与社区",
          body:
            "“Praia Bela”在葡萄牙语中意为“美丽的海滩”。皮廷布（Pitimbu）的名字源于图皮-瓜拉尼语，与当地沿海原住民传统相关。今天的 Praia Bela 仍由小型海滩亭（quiosque）、渔业家庭与渡船船工共同维系，是一处兼具自然与人文的活态海岸。",
        },
      ],
    },
    insights: {
      title: "自然与生态观察",
      intro: "可以从红树林、海洋生物与候鸟三个维度理解这片热带海岸。",
      cards: [
        {
          title: "红树林与河口生态",
          body:
            "河口与潮间带发育着红树林群落，它们是众多鱼类幼苗与甲壳类的育幼场，也帮助过滤陆地养分、稳定海岸线。观察红树的气生根与蟹类活动，是理解海岸生态的入门。",
        },
        {
          title: "海洋生物与礁石",
          body:
            "外海一侧水温偏凉、波浪较强，礁石与近岸岩礁为藤壶、海螺、小鱼与海龟提供附着与觅食空间。温暖的河口则更适合浮潜与平静戏水，两种水体共同支撑了丰富的近岸生物多样性。",
        },
        {
          title: "候鸟与沙丘植物",
          body:
            "滩涂与河口是迁徙水鸟的重要停歇地，退潮时可观察到鹬、鸥与岸鸟觅食。沙丘植物以发达根系固定沙丘，是海岸防风的第一道屏障。",
        },
      ],
    },
    technical: {
      title: "基础空间与地理数据",
      intro:
        "以下结构化数据概括 Praia Bela 的坐标、行政归属、海拔、水文与潮汐，帮助访客以地理学视角快速理解其空间特征。",
      rows: [
        { dimension: "地理坐标", value: "约 7°28′S, 34°50′W", note: "依据 Plus Code J52W+R9 定位" },
        { dimension: "行政归属", value: "皮廷布市 · 帕拉伊巴州 · 巴西", note: "若昂佩索阿大都会区南缘" },
        { dimension: "平均海拔", value: "约 16 米", note: "巴西东北部屏障海岸低地" },
        { dimension: "距若昂佩索阿", value: "约 45 公里", note: "车程约 1 小时（经 BR-101 / PB-008）" },
        { dimension: "水文特征", value: "河海交汇", note: "外海偏凉多浪，河口温暖平静" },
        { dimension: "潮汐规律", value: "半日潮", note: "每日两涨两落，潮差中等" },
      ],
    },
    routeProfile: {
      title: "从若昂佩索阿到 Praia Bela 的到达动线",
      intro:
        "Praia Bela 并不是城市平地的目的地，而是一段“公路 + 渡船”的河海到达过程。理解这段动线，才能真正理解它的空间关系。",
      stages: [
        {
          title: "起点：若昂佩索阿市区",
          elevation: "第 1 段 · 约 0–40 公里",
          body:
            "从若昂佩索阿出发，沿 BR-101 向南，转入 PB-008 前往皮廷布。沿途从都市平原逐渐过渡到热带海岸乡村，车程约 1 小时。",
        },
        {
          title: "中转：皮廷布镇与河口",
          elevation: "第 2 段 · 皮廷布镇",
          body:
            "抵达皮廷布后继续向南到河口渡口。此处需将车辆停在岸边，改乘当地小型渡船（balsa）横渡小河，船程仅数分钟。",
        },
        {
          title: "终点：Praia Bela 沙滩",
          elevation: "第 3 段 · 河对岸",
          body:
            "下船即到达 Praia Bela。沙滩旁分布着海滩亭、遮阳棚与浅水河口，适合休息、戏水与观察河海交汇。",
        },
      ],
    },
    astronomy: {
      title: "潮汐节律与最佳到访时段",
      intro:
        "远离城市喧嚣后，这片海岸的真正价值在于潮汐、气候与光线的节律。理解它们，能让到访更有收获。",
      cards: [
        {
          title: "半日潮的节奏",
          body:
            "这里为半日潮，每日两涨两落。退潮时大片滩涂与礁石露出，更适合赶海、观察生物与步行；涨潮时海水逼近沙丘，更适合戏水与摄影。出行前查好当日潮位表会更从容。",
        },
        {
          title: "气候与季节",
          body:
            "属热带气候，全年温暖。5 月至 9 月相对干爽、降雨少、海况更平稳，是到访的舒适窗口；2 月至 3 月为雨季高峰，午后雷阵雨较频繁。",
        },
        {
          title: "光线与摄影",
          body:
            "清晨光线柔和、海面平静，适合拍摄河海交汇与滩涂生物；傍晚金色时刻则让沙丘与海浪更有层次。若主要目的是摄影，时段选择往往比“是否晴天”更重要。",
        },
      ],
    },
    faq: {
      title: "常见地理与出行释疑",
      intro:
        "为了帮助您做出最合理的行程决策，我们基于实地地理条件与高频到访反馈，将常见问题归纳为以下三个核心维度：",
      groups: [
        {
          category: "一、地理与自然环境",
          items: [
            {
              question: "Praia Bela 的“河海交汇”具体指什么？",
              answer:
                "它位于皮廷布南部的大西洋海岸，一处小河在此注入大海。于是同一片沙滩两侧呈现截然不同的水体：相邻河口温暖平静，适合戏水；外海偏凉且波浪较强。到达沙滩通常要先乘小型渡船（balsa）横渡河口。",
            },
            {
              question: "这里的海水为什么偏凉、浪比较大？",
              answer:
                "外海直接面向开阔大西洋，受洋流与风场影响，水温通常低于避风的河口，且容易出现较大涌浪。这与避风的河口水体形成鲜明对比，也是它适合观浪而非长时间游泳的原因。",
            },
            {
              question: "红树林和滩涂有什么科普价值？",
              answer:
                "河口红树林是众多鱼类幼苗与甲壳类的育幼场，同时过滤陆地养分、削弱风暴潮对海岸的侵蚀。退潮露出的滩涂则是水鸟与底栖生物的觅食地，是观察海岸生态的天然课堂。",
            },
          ],
        },
        {
          category: "二、交通与到达",
          items: [
            {
              question: "自驾怎么到 Praia Bela？",
              answer:
                "从若昂佩索阿沿 BR-101 向南，转入 PB-008 前往皮廷布，再到河口渡口。全程约 45 公里，车程约 1 小时。最后一段需下车乘渡船，请注意渡船的运营时段。",
            },
            {
              question: "没有自驾可以到达吗？",
              answer:
                "可以先乘长途巴士或班车到皮廷布镇，再换乘当地小车（comunitário）或出租车前往河口渡口，最后乘 balsa 过河。公共交通班次有限，建议提前规划返程时间。",
            },
            {
              question: "渡船（balsa）需要额外注意什么？",
              answer:
                "渡船由当地船工运营，平日班次相对固定但可能受天气、潮水影响临时调整。携带现金支付渡船费更稳妥，并留意末班时间以免被困对岸。",
            },
          ],
        },
        {
          category: "三、安全与游玩建议",
          items: [
            {
              question: "适合带老人和儿童吗？",
              answer:
                "沙滩本身平缓、适合家庭休憩；但外海浪较大，儿童应在河口浅水区或有人看护处戏水。行动不便者渡船上下需有人协助，建议量力而行。",
            },
            {
              question: "需要担心水母或离岸流吗？",
              answer:
                "热带海岸偶有水母与离岸流。建议只在有人活动、有瞭望的区域下水，留意当日海况提示，避免在警示海域游泳。",
            },
            {
              question: "现场有哪些设施？",
              answer:
                "沙滩旁分布着小型海滩亭（quiosque），提供遮阳、简易餐饮与休息；但医疗、银行等配套主要在皮廷布镇与若昂佩索阿。建议自备饮水、防晒与少量现金。",
            },
          ],
        },
      ],
    },
    photos: {
      title: "现场照片",
      intro:
        "涵盖河海交汇、金色沙滩、海滩亭与滩涂生物的现场影像，可作为到访前的视觉参考。首屏背景同样取自这组现场图库。",
      mapsCta: "在 Google 地图上查看位置",
      altPrefix: "Praia Bela 现场照片",
    },
    reviews: {
      title: "访客观察",
      intro: "来自访客的高频反馈被归纳为三个具体的观察维度，帮助建立合理的到访预期。",
      mapsCta: "在 Google 地图上查看位置",
      themes: [
        {
          title: "河海双体验",
          body:
            "高评分首先来自“一边河、一边海”的独特格局：温暖的河口适合戏水放松，偏凉多浪的外海适合观浪与散步，两种体验在同一处沙滩完成。",
        },
        {
          title: "渡船的仪式感",
          body:
            "需要乘小型渡船横渡河口，被许多访客视为一种慢节奏的到达仪式，也增加了与当地船工、社区的接触，是这条海岸线区别于城市海滩的记忆点。",
        },
        {
          title: "条件随潮变化",
          body:
            "实际体验受潮位、风力与天气影响明显：退潮滩涂更开阔、适合赶海，涨潮更适合戏水。这些变量比笼统的“漂亮”更值得提前了解。",
        },
      ],
    },
    transport: {
      title: "怎么到这里",
      intro:
        "Praia Bela 位于皮廷布南部海岸，通常需要先到若昂佩索阿或皮廷布，再完成最后一段“公路 + 渡船”的到达。",
      cards: [
        {
          title: "区域机场",
          body:
            "最近的主要机场是若昂佩索阿的卡斯特罗·平托总统国际机场（JPA），车程约 1 小时；若航班有限，也可飞往累西腓（REC）后沿 BR-101 北上，再转 PB-008。",
        },
        {
          title: "自驾抵达",
          body:
            "从若昂佩索阿沿 BR-101 向南，转入 PB-008 前往皮廷布，再向南到河口渡口。全程约 45 公里，最后需下车乘 balsa 横渡，建议白天行车。",
        },
        {
          title: "巴士加接驳",
          body:
            "长途巴士或班车可到皮廷布镇。之后需换乘当地社区小车（comunitário）或出租车前往河口，最后乘渡船过河。公共交通班次有限，注意末班时间。",
        },
        {
          title: "最后一段渡船",
          body:
            "抵达河口后，车辆停在岸边，乘客与随身物品乘小型渡船（balsa）过河，船程仅数分钟。渡船受天气与潮水影响可能调整，请备现金并留意返程。",
        },
      ],
    },
    visit: {
      title: "到访建议",
      cards: [
        {
          title: "最佳时段",
          body:
            "若以摄影与观潮为主，建议优先考虑清晨或傍晚。5 月至 9 月相对干爽、海况平稳，是更舒适的到访窗口。",
        },
        {
          title: "河海兼顾",
          body:
            "上午可在温暖河口浅水区戏水放松，午后在外海一侧观浪、散步。注意外海浪大，游泳请选择有瞭望的区域。",
        },
        {
          title: "停留时长",
          body:
            "含渡船往返与沙滩休憩，安排半天较从容；若叠加赶海、摄影与附近海岸线探访，可预留一整天。",
        },
        {
          title: "现场安全",
          body:
            "热带海岸注意防晒、补水；留意当日海况与离岸流提示；带少量现金支付渡船与海滩亭消费；返程务必赶上末班渡船。",
        },
      ],
    },
    editorial: {
      title: "编辑说明",
      body:
        "本站以非盈利景点科普为目标，因此页面优先提供位置、环境语境、交通方式、现场照片与官方资料，而不是商业导流、价格刺激或夸张宣传语。",
    },
    links: {
      title: "官方延伸链接",
      intro:
        "以下站点可用于继续了解皮廷布市与帕拉伊巴州在地理、统计、环境与海洋生态方面的权威公共信息。",
      items: [
        {
          title: "巴西国家地理与统计局（IBGE）— 皮廷布市数据面板",
          href: "https://cidades.ibge.gov.br/brasil/pb/pitimbu/panorama",
          description:
            "IBGE 为巴西官方地理与统计机构，该页面提供皮廷布市的领土、人口与地理指标等可核验数据，可用于条目中的行政与统计引用。",
        },
        {
          title: "帕拉伊巴州环境管理监督局（SUDEMA）",
          href: "https://sudema.pb.gov.br/",
          description:
            "SUDEMA 为帕拉伊巴州环境管理机构，公开发布沿海水质监测（balneabilidade）与生态保护相关信息，可作为环境监测与政策引用。",
        },
        {
          title: "帕拉伊巴州水资源管理执行局（AESA）",
          href: "https://www.aesa.pb.gov.br/",
          description:
            "AESA 负责帕拉伊巴州水文与气象监测，提供降雨、气候与水文观测数据，可用于讨论潮汐与季节性海岸条件。",
        },
        {
          title: "帕拉伊巴联邦大学（UFPB）",
          href: "https://www.ufpb.br/",
          description:
            "UFPB 为帕拉伊巴州公立大学，其地理与海洋生物相关研究可作为海岸地貌与生物多样性背景的学术延伸入口。",
        },
        {
          title: "皮廷布市政府官方网站（Prefeitura Municipal de Pitimbu）",
          href: "https://www.pitimbu.pb.gov.br/",
          description:
            "皮廷布市政府官网提供行政区划与公共信息，可用于确认景点的属地归属与基础公共服务背景。",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Praia Bela - Pitimbu 指南 · 保留所有权利。",
      disclaimer:
        "本网站是一个独立的第三方非盈利科普指南项目，我们与巴西政府或任何官方机构均无隶属关系。",
      mapsLabel: "Google Maps →",
    },
  },
  en: {
    localeName: "English",
    title: "Praia Bela - Pitimbu | Multilingual Visitor Guide in Paraíba, Brazil",
    description:
      "A five-language guide to Praia Bela - Pitimbu with geographic context, river-and-sea ecology, transport options, on-site photos, and official reference links.",
    nav: {
      overview: "Overview",
      gallery: "Photos",
      reviews: "Reviews",
      transport: "Access",
      visit: "Plan",
      links: "Links",
    },
    hero: {
      eyebrow: "Paraíba, Brazil | A river-meets-sea beach on the South Coast",
      headline: "Praia Bela - Pitimbu",
      summary:
        "This is a non-profit educational guide to Praia Bela. It focuses on the beach's geography, river-and-sea ecology, how to get there, and on-site photos, without bookings, promotions, or commercial endorsements.",
      ratingLabel: "Google rating",
      typeLabel: "Type",
      addressLabel: "Address",
      phoneLabel: "Phone",
      plusCodeLabel: "Plus Code",
      mapsCta: "View on Google Maps",
      galleryCta: "Browse photos",
    },
    metricsTitle: "Key facts",
    metrics: [
      { label: "Landscape", value: "river-meets-sea, golden sand, reefs and mangroves" },
      { label: "Experience", value: "beach leisure, river swimming, small-boat crossing" },
      { label: "Regional setting", value: "southern edge of the João Pessoa metro area, Pitimbu" },
      { label: "Best for", value: "road-trippers, families, nature photographers, eco-observers" },
    ],
    story: {
      title: "Geography, history and place context",
      intro:
        "The appeal of Praia Bela comes from more than the sand. The river, the coast, the dunes, and the local community together form a single visiting context.",
      cards: [
        {
          title: "River-meets-sea landform",
          body:
            "Praia Bela sits on the Atlantic coast of southern Pitimbu. A small river mouth enters the sea here. This river-meets-sea setting creates its most distinctive experience: a warm, calm river on one side and a cooler, wavier open sea on the other. Reaching the beach usually means crossing the river mouth by a small ferry (balsa), a local tradition that continues today.",
        },
        {
          title: "Coast, dunes and vegetation",
          body:
            "This is part of Brazil's northeastern barrier coast, with an average elevation of only about 16 meters. Coastal dunes and wind-tolerant vegetation line the tropical shore, and tides expose wide flats—a natural classroom for observing coastal dynamics and dune evolution.",
        },
        {
          title: "Name, history and community",
          body:
            "Praia Bela means beautiful beach in Portuguese. Pitimbu's name comes from Tupi-Guarani, tied to the coastal Indigenous tradition. Today Praia Bela is sustained by small beach kiosks (quiosques), fishing families, and ferry boatmen—a living coast where nature and local culture meet.",
        },
      ],
    },
    insights: {
      title: "Nature and ecology notes",
      intro: "Read the tropical coast through three dimensions: mangroves, marine life, and shorebirds.",
      cards: [
        {
          title: "Mangroves and estuary ecology",
          body:
            "The estuary and intertidal zone host mangrove communities that act as nurseries for many fish fry and crustaceans, and help filter land nutrients while stabilizing the shoreline. Watching the prop roots and fiddler crabs is a good entry point to coastal ecology.",
        },
        {
          title: "Marine life and reefs",
          body:
            "The open sea side is cooler with stronger waves; reefs and nearshore rocks give barnacles, snails, small fish, and turtles space to attach and feed. The warm river is better for calm swimming and snorkeling. The two water bodies together support rich nearshore biodiversity.",
        },
        {
          title: "Shorebirds and dune plants",
          body:
            "The tidal flats and estuary are important stopovers for migratory waterbirds; at low tide you can watch sandpipers, gulls, and shorebirds feeding. Dune plants such as purslane, cacti, and salt-tolerant grasses use deep roots to anchor the sand and form the first line of wind protection.",
        },
      ],
    },
    technical: {
      title: "Basic spatial and geographic data",
      intro:
        "The structured data below summarizes Praia Bela's coordinates, administrative status, elevation, hydrology, and tides to help visitors read the place geographically.",
      rows: [
        { dimension: "Geographic coordinates", value: "Approx. 7°28′S, 34°50′W", note: "located by Plus Code J52W+R9" },
        { dimension: "Administrative area", value: "Pitimbu, Paraíba, Brazil", note: "southern edge of the João Pessoa metro area" },
        { dimension: "Average elevation", value: "Approx. 16 m", note: "lowland of Brazil's northeastern barrier coast" },
        { dimension: "Distance from João Pessoa", value: "Approx. 45 km", note: "about 1 hour by car via BR-101 / PB-008" },
        { dimension: "Hydrology", value: "river meets sea", note: "cooler, wavier open sea; warm, calm river mouth" },
        { dimension: "Tidal pattern", value: "semidiurnal", note: "two highs and two lows daily, moderate range" },
      ],
    },
    routeProfile: {
      title: "The arrival route from João Pessoa to Praia Bela",
      intro:
        "Praia Bela is not a flat city destination but a road-and-ferry river-and-sea arrival. Reading this route helps you understand its spatial logic.",
      stages: [
        {
          title: "Start: João Pessoa city",
          elevation: "Stage 1 · about 0–40 km",
          body:
            "Leave João Pessoa on BR-101 south, then turn onto PB-008 toward Pitimbu. The landscape shifts from urban plain to tropical coastal countryside; about 1 hour by car.",
        },
        {
          title: "Transfer: Pitimbu town and the river mouth",
          elevation: "Stage 2 · Pitimbu",
          body:
            "After reaching Pitimbu, continue south to the river crossing. Park by the bank and take a local small ferry (balsa) across the river; the crossing takes only a few minutes.",
        },
        {
          title: "End: Praia Bela beach",
          elevation: "Stage 3 · across the river",
          body:
            "After landing, you arrive at Praia Bela. Beach kiosks, shade tents, and the shallow river mouth sit beside the sand—good for rest, wading, and watching the river meet the sea.",
        },
      ],
    },
    astronomy: {
      title: "Tides, climate and best timing",
      intro:
        "Away from the city, the real value of this coast lies in the rhythm of tides, climate, and light. Understanding them makes a visit more rewarding.",
      cards: [
        {
          title: "Semidiurnal tide rhythm",
          body:
            "This is a semidiurnal tide, with two highs and two lows each day. At low tide, wide flats and rocks are exposed—better for beachcombing, observing life, and walking. At high tide, the sea reaches the dunes—better for swimming and photography. Check the day's tide table beforehand.",
        },
        {
          title: "Climate and season",
          body:
            "The climate is tropical and warm year-round. May to September is relatively dry, with less rain and calmer seas—a comfortable window to visit. February to March is the rainy peak, with frequent afternoon thunderstorms.",
        },
        {
          title: "Light and photography",
          body:
            "Early morning light is soft and the sea is calm, good for shooting the river-sea meeting and tidal life. The golden hour at dusk adds depth to dunes and waves. For photography, timing often matters more than whether it is sunny.",
        },
      ],
    },
    faq: {
      title: "Structured visitor FAQ",
      intro:
        "To help you make informed travel decisions, we have organized the most common questions into three core dimensions based on geographical conditions and visitor feedback:",
      groups: [
        {
          category: "1. Geography and environment",
          items: [
            {
              question: "What does the river-meets-sea setting mean here?",
              answer:
                "Praia Bela sits on the Atlantic coast of southern Pitimbu, where a small river enters the sea. The two water bodies differ sharply: the adjacent river mouth is warm and calm, good for wading; the open sea is cooler with stronger waves. Reaching the beach usually means crossing the river mouth by a small ferry (balsa).",
            },
            {
              question: "Why is the sea cooler and wavier?",
              answer:
                "The open sea faces the Atlantic directly and is shaped by currents and wind, so its temperature is usually lower than the sheltered river mouth and larger swells appear. That contrast is why it suits wave-watching more than long swims.",
            },
            {
              question: "What is the scientific value of the mangroves and flats?",
              answer:
                "Estuary mangroves are nurseries for many fish fry and crustaceans, while filtering land nutrients and buffering storm surge. The exposed tidal flats at low tide feed shorebirds and bottom-dwelling life—a natural classroom for coastal ecology.",
            },
          ],
        },
        {
          category: "2. Transport and access",
          items: [
            {
              question: "How do I drive to Praia Bela?",
              answer:
                "From João Pessoa take BR-101 south, then PB-008 toward Pitimbu and on to the river crossing. It is about 45 km, roughly 1 hour. The final leg requires leaving the car and taking the ferry, so note its operating hours.",
            },
            {
              question: "Can I get there without a car?",
              answer:
                "You can take a long-distance bus or shuttle to Pitimbu town, then a local community van (comunitário) or taxi to the river crossing, and finally the balsa across. Public services are limited, so plan your return time in advance.",
            },
            {
              question: "What should I watch for with the ferry (balsa)?",
              answer:
                "The ferry is run by local boatmen. Schedules are fairly regular but can change with weather and tide. Carry cash for the fare and note the last crossing so you are not stranded on the far side.",
            },
          ],
        },
        {
          category: "3. Safety and visitor tips",
          items: [
            {
              question: "Is it suitable for seniors and children?",
              answer:
                "The beach itself is gentle and good for family rest, but the open sea is wavier, so children should stay in the shallow river area or supervised spots. Those with limited mobility need help boarding the ferry—judge by your own ability.",
            },
            {
              question: "Should I worry about jellyfish or rip currents?",
              answer:
                "Tropical coasts can have jellyfish and rip currents. Enter the water only where there are lifeguards or other people, watch the day's sea conditions, and avoid flagged or warned areas.",
            },
            {
              question: "What facilities are on site?",
              answer:
                "Small beach kiosks (quiosques) offer shade, simple food, and rest. Medical care and banks are mainly in Pitimbu town and João Pessoa. Bring your own water, sun protection, and some cash.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "On-site photos",
      intro:
        "Images of the river-sea meeting, golden sand, beach kiosks, and tidal life, for a visual reference before visiting. The hero background comes from the same on-site set.",
      mapsCta: "View on Google Maps",
      altPrefix: "Praia Bela on-site photo",
    },
    reviews: {
      title: "Visitor observations",
      intro: "High-frequency visitor feedback is summarized into three concrete reading points to help set reasonable expectations.",
      mapsCta: "View on Google Maps",
      themes: [
        {
          title: "River-and-sea dual experience",
          body:
            "Ratings are closely tied to the rare river-on-one-side, sea-on-the-other layout: the warm river suits wading and relaxation, while the cooler, wavier open sea suits wave-watching and walks—two experiences on one beach.",
        },
        {
          title: "The ferry ritual",
          body:
            "Crossing the river mouth by small ferry feels to many visitors like a slow-paced arrival ritual, and adds contact with local boatmen and community—what sets this coastline apart from city beaches.",
        },
        {
          title: "Conditions shift with the tide",
          body:
            "The experience varies clearly with tide level, wind, and weather: low tide opens wide flats for beachcombing, high tide is better for wading. These variables matter more than a generic claim of beauty.",
        },
      ],
    },
    transport: {
      title: "How to get here",
      intro:
        "Praia Bela lies on the southern coast of Pitimbu. Usually you first reach João Pessoa or Pitimbu, then finish with a road-plus-ferry arrival.",
      cards: [
        {
          title: "Regional airports",
          body:
            "The nearest major airport is Presidente Castro Pinto International (JPA) in João Pessoa, about 1 hour away. If flights are limited, fly to Recife (REC), then go north on BR-101 and turn onto PB-008.",
        },
        {
          title: "Self-drive",
          body:
            "From João Pessoa take BR-101 south, then PB-008 toward Pitimbu and on to the river crossing. About 45 km total; the final leg requires leaving the car and taking the balsa. Drive in daylight.",
        },
        {
          title: "Bus plus transfer",
          body:
            "Long-distance buses or shuttles reach Pitimbu town. From there take a local community van (comunitário) or taxi to the river, then the ferry. Public service is limited, so note the last departure.",
        },
        {
          title: "Final ferry leg",
          body:
            "At the river, park the car and cross by small ferry (balsa) with your belongings; the crossing takes only minutes. The ferry may shift with weather and tide, so carry cash and watch the return time.",
        },
      ],
    },
    visit: {
      title: "Plan your visit",
      cards: [
        {
          title: "Best timing",
          body:
            "For photography and tide-watching, prefer early morning or late afternoon. May to September is drier with calmer seas—a more comfortable window.",
        },
        {
          title: "River and sea together",
          body:
            "In the morning, wade and relax in the warm river shallows; in the afternoon, watch waves and walk the open-sea side. The open sea is wavier, so swim only where there is supervision.",
        },
        {
          title: "Suggested duration",
          body:
            "Including the ferry round trip and beach rest, half a day is comfortable; with beachcombing, photography, and nearby coastline, allow a full day.",
        },
        {
          title: "On-site safety",
          body:
            "Tropical sun means sunscreen and water; watch the day's sea conditions and rip-current notices; carry cash for the ferry and kiosks; make sure to catch the last ferry back.",
        },
      ],
    },
    editorial: {
      title: "Editorial note",
      body:
        "As a non-profit attraction guide, this site prioritizes location, environmental context, transport, on-site photos, and official references over booking prompts or promotional language.",
    },
    links: {
      title: "Official reference links",
      intro:
        "These resources help extend the page to Pitimbu and Paraíba's authoritative public information on geography, statistics, environment, and marine ecology.",
      items: [
        {
          title: "IBGE — Pitimbu municipal panel",
          href: "https://cidades.ibge.gov.br/brasil/pb/pitimbu/panorama",
          description:
            "IBGE is Brazil's official geography and statistics agency; this page provides verifiable municipal data for Pitimbu (area, population, coordinates, and related indicators) suitable for factual citations.",
        },
        {
          title: "SUDEMA — Paraíba environmental agency",
          href: "https://sudema.pb.gov.br/",
          description:
            "SUDEMA is Paraíba's environmental agency and publishes public information on coastal water quality (balneabilidade) and environmental protection, useful for policy and monitoring references.",
        },
        {
          title: "AESA — Paraíba water resources agency",
          href: "https://www.aesa.pb.gov.br/",
          description:
            "AESA provides regional hydrology and meteorology data for Paraíba, offering climate and rainfall observations that support discussions of seasonal coastal conditions.",
        },
        {
          title: "Federal University of Paraíba (UFPB)",
          href: "https://www.ufpb.br/",
          description:
            "UFPB is a public research university in Paraíba whose geography and marine science work can serve as an academic entry point for coastal geomorphology and biodiversity context.",
        },
        {
          title: "Municipal Government of Pitimbu",
          href: "https://www.pitimbu.pb.gov.br/",
          description:
            "The municipal government site provides basic administrative information for Pitimbu and can be used to confirm the locality and administrative context of Praia Bela.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Praia Bela - Pitimbu Guide. All rights reserved.",
      disclaimer:
        "This website is an independent third-party non-profit educational guide project and has no institutional affiliation with the Government of Brazil or any official authority.",
      mapsLabel: "Google Maps →",
    },
  },
  it: {
    localeName: "Italiano",
    title: "Praia Bela - Pitimbu | Guida multilingue in Paraíba, Brasile",
    description:
      "Guida in cinque lingue su Praia Bela - Pitimbu con contesto geografico, ecologia di fiume e mare, trasporti, foto dal posto e link ufficiali.",
    nav: {
      overview: "Panoramica",
      gallery: "Foto",
      reviews: "Recensioni",
      transport: "Accesso",
      visit: "Visita",
      links: "Link",
    },
    hero: {
      eyebrow: "Paraíba, Brasile | Una spiaggia dove fiume e mare si incontrano",
      headline: "Praia Bela - Pitimbu",
      summary:
        "Questa è una guida divulgativa non profit su Praia Bela. Si concentra sulla geografia della spiaggia, sull'ecologia di fiume e mare, su come arrivarci e sulle foto dal posto, senza prenotazioni, promozioni o endorsement commerciali.",
      ratingLabel: "Valutazione Google",
      typeLabel: "Tipo",
      addressLabel: "Indirizzo",
      phoneLabel: "Telefono",
      plusCodeLabel: "Plus Code",
      mapsCta: "Apri su Google Maps",
      galleryCta: "Vedi le foto",
    },
    metricsTitle: "Dati essenziali",
    metrics: [
      { label: "Paesaggio", value: "fiume e mare, sabbia dorata, scogli e mangrovie" },
      { label: "Esperienza", value: "relax in spiaggia, nuoto nel fiume, attraversamento in barca" },
      { label: "Contesto regionale", value: "margine sud dell'area metropolitana di João Pessoa, Pitimbu" },
      { label: "Adatto a", value: "viaggi in auto, famiglie, fotografi naturalisti, osservatori eco" },
    ],
    story: {
      title: "Geografia, storia e contesto locale",
      intro:
        "Il fascino di Praia Bela viene da più della sabbia. Fiume, costa, dune e comunità locale formano insieme un unico contesto di visita.",
      cards: [
        {
          title: "Paesaggio di fiume e mare",
          body:
            "Praia Bela si trova sulla costa atlantica del sud di Pitimbu. Qui uno sbocco fluviale incontra il mare. Questo incontro crea l'esperienza più distintiva: un fiume caldo e calmo da un lato, un mare aperto più fresco e ondoso dall'altro. Arrivare alla spiaggia richiede di solito di attraversare lo sbocco in barca (balsa), una tradizione locale ancora viva.",
        },
        {
          title: "Costa, dune e vegetazione",
          body:
            "Fa parte della costa a barriera del Nordest del Brasile, con un'altitudine media di soli circa 16 metri. Dune costiere e vegetazione resistente al vento seguono la riva tropicale, e le maree espongono ampi banchi di sabbia: un'aula naturale per osservare la dinamica costiera e l'evoluzione delle dune.",
        },
        {
          title: "Nome, storia e comunità",
          body:
            "Praia Bela significa spiaggia bella in portoghese. Il nome Pitimbu deriva dal Tupi-Guarani, legato alla tradizione indigena costiera. Oggi Praia Bela è sostenuta da piccoli chioschi (quiosques), famiglie di pescatori e barcaioli delle balsa: una costa viva dove natura e cultura si incontrano.",
        },
      ],
    },
    insights: {
      title: "Note su natura ed ecologia",
      intro: "Si può leggere la costa tropicale attraverso tre dimensioni: mangrovie, vita marina e uccelli costieri.",
      cards: [
        {
          title: "Mangrovie ed ecologia dell'estuario",
          body:
            "L'estuario e la zona intertidale ospitano mangrovie che fungono da nursery per molte larve di pesci e crostacei e aiutano a filtrare i nutrienti continentali stabilizzando la costa. Osservare le radici a sostegno e i granchi violinisti è un buon punto di partenza.",
        },
        {
          title: "Vita marina e scogli",
          body:
            "Il lato del mare aperto è più fresco e ondoso; scogli e rocce offrono spazio a balani, chiocciole, pesci piccoli e tartarughe. Il fiume caldo è ideale per il nuoto calmo e lo snorkeling. Le due masse d'acqua sostengono insieme una ricca biodiversità costiera.",
        },
        {
          title: "Uccelli costieri e piante delle dune",
          body:
            "Banchi di sabbia ed estuario sono soste importanti per gli uccelli migratori; con la bassa marea si possono osservare piro piro, gabbiani e uccelli di riva. Piante come portulaca, cactus e graminacee tolleranti al sale fissano la sabbia con radici profonde, formando la prima barriera contro il vento.",
        },
      ],
    },
    technical: {
      title: "Dati spaziali e geografici di base",
      intro:
        "I dati strutturati seguenti riassumono coordinate, appartenenza amministrativa, altitudine, idrologia e maree di Praia Bela per leggere il luogo in chiave geografica.",
      rows: [
        { dimension: "Coordinate geografiche", value: "Circa 7°28′S, 34°50′W", note: "localizzate con Plus Code J52W+R9" },
        { dimension: "Appartenenza amministrativa", value: "Pitimbu, Paraíba, Brasile", note: "margine sud dell'area metropolitana di João Pessoa" },
        { dimension: "Altitudine media", value: "Circa 16 m", note: "bassopiano della costa a barriera del Nordest" },
        { dimension: "Distanza da João Pessoa", value: "Circa 45 km", note: "circa 1 ora in auto via BR-101 / PB-008" },
        { dimension: "Idrologia", value: "fiume e mare", note: "mare aperto più fresco e ondoso; estuario caldo e calmo" },
        { dimension: "Andamento delle maree", value: "semidiurno", note: "due alte e due basse al giorno, escursione moderata" },
      ],
    },
    routeProfile: {
      title: "L'itinerario di arrivo da João Pessoa a Praia Bela",
      intro:
        "Praia Bela non è una destinazione cittadina piatta, ma un arrivo combinato di strada e balsa tra fiume e mare. Leggere questo percorso aiuta a capirne la logica spaziale.",
      stages: [
        {
          title: "Inizio: città di João Pessoa",
          elevation: "Tappa 1 · circa 0–40 km",
          body:
            "Esci da João Pessoa sulla BR-101 verso sud, poi imbocca la PB-008 per Pitimbu. Il paesaggio passa dalla pianura urbana alla campagna costiera tropicale; circa 1 ora in auto.",
        },
        {
          title: "Trasferimento: città di Pitimbu e foce del fiume",
          elevation: "Tappa 2 · Pitimbu",
          body:
            "Raggiunta Pitimbu, prosegui a sud fino al guado. Parcheggia sulla riva e prendi una piccola balsa locale per attraversare il fiume; la traversata dura solo pochi minuti.",
        },
        {
          title: "Fine: spiaggia di Praia Bela",
          elevation: "Tappa 3 · oltre il fiume",
          body:
            "Appena scesi, arrivi a Praia Bela. Chioschi, tende ombrellone e la foce poco profonda si trovano vicino alla sabbia: ideali per riposo, bagni e osservare l'incontro tra fiume e mare.",
        },
      ],
    },
    astronomy: {
      title: "Maree, clima e momenti migliori",
      intro:
        "Lontano dalla città, il valore reale di questa costa sta nel ritmo di maree, clima e luce. Capirli rende la visita più ricca.",
      cards: [
        {
          title: "Ritmo della marea semidiurna",
          body:
            "È una marea semidiurna, con due alte e due basse al giorno. Con la bassa marea si scoprono ampi banchi e scogli: ideali per cercare conchiglie, osservare la vita e camminare. Con l'alta marea il mare arriva alle dune: meglio per nuotare e fotografare. Controlla la tabella delle maree del giorno.",
        },
        {
          title: "Clima e stagione",
          body:
            "Il clima è tropicale e caldo tutto l'anno. Da maggio a settembre è relativamente secco, con meno piogge e mari più calmi: una finestra confortevole. Febbraio e marzo sono il picco delle piogge, con frequenti temporali pomeridiani.",
        },
        {
          title: "Luce e fotografia",
          body:
            "La luce del mattino presto è morbida e il mare calmo, ottimo per fotografare l'incontro fiume-mare e la vita delle pozze. L'ora dorata al tramonto dà profondità a dune e onde. Per la fotografia, la scelta dell'orario conta spesso più del sereno.",
        },
      ],
    },
    faq: {
      title: "FAQ strutturata",
      intro:
        "Per aiutarti a prendere decisioni di viaggio informate, abbiamo organizzato le domande più comuni in tre dimensioni principali basate sulle condizioni geografiche e sul feedback dei visitatori:",
      groups: [
        {
          category: "1. Geografia e ambiente",
          items: [
            {
              question: "Cosa significa qui l'incontro tra fiume e mare?",
              answer:
                "Praia Bela si trova sulla costa atlantica del sud di Pitimbu, dove un piccolo fiume incontra il mare. Le due masse d'acqua sono molto diverse: la foce è calda e calma, ideale per fare il bagno; il mare aperto è più fresco e ondoso. Arrivare alla spiaggia richiede di solito di attraversare la foce in balsa.",
            },
            {
              question: "Perché il mare è più fresco e ondoso?",
              answer:
                "Il mare aperto guarda direttamente l'Atlantico e subisce correnti e vento, quindi è più fresco della foce riparata e presenta onde maggiori. È per questo che è più adatto a guardare le onde che a lunghe nuotate.",
            },
            {
              question: "Qual è il valore scientifico di mangrovie e banchi?",
              answer:
                "Le mangrovie dell'estuario sono nursery per larve di pesci e crostacei, filtrano i nutrienti e attutiscono le mareggiate. I banchi esposti dalla bassa marea nutrono uccelli e vita sul fondo: un'aula naturale di ecologia costiera.",
            },
          ],
        },
        {
          category: "2. Trasporto e accesso",
          items: [
            {
              question: "Come arrivo in auto a Praia Bela?",
              answer:
                "Da João Pessoa prendi la BR-101 a sud, poi la PB-008 per Pitimbu fino al guado. Sono circa 45 km, circa 1 ora. L'ultimo tratto richiede di lasciare l'auto e prendere la balsa, quindi controlla gli orari.",
            },
            {
              question: "Posso arrivarci senza auto?",
              answer:
                "Puoi prendere un bus a lunga percorrenza o una navetta per Pitimbu, poi un van locale (comunitário) o un taxi fino al guado e infine la balsa. I servizi pubblici sono limitati: pianifica in anticipo il ritorno.",
            },
            {
              question: "A cosa devo fare attenzione con la balsa?",
              answer:
                "La balsa è gestita da barcaioli locali. Gli orari sono abbastanza regolari ma possono cambiare con maree e tempo. Porta contanti per la tariffa e annota l'ultima corsa per non restare bloccati.",
            },
          ],
        },
        {
          category: "3. Sicurezza e consigli",
          items: [
            {
              question: "È adatta ad anziani e bambini?",
              answer:
                "La spiaggia è dolce e buona per il riposo in famiglia, ma il mare aperto è più ondoso: i bambini stiano nella foce o in zone supervisionate. Chi ha mobilità ridotta necessita di aiuto per la balsa: valuta in base alle tue possibilità.",
            },
            {
              question: "Devo preoccuparmi di meduse o correnti di risucchio?",
              answer:
                "Le coste tropicali possono avere meduse e correnti di risucchio (rip current). Entra in acqua solo dove ci sono bagnini o altre persone, controlla le condizioni del giorno ed evita le zone segnalate.",
            },
            {
              question: "Quali strutture ci sono sul posto?",
              answer:
                "Piccoli chioschi (quiosques) offrono ombra, cibo semplice e riposo. Assistenza medica e banche sono soprattutto a Pitimbu e João Pessoa. Porta acqua, protezione solare e contanti.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "Foto dal posto",
      intro:
        "Immagini dell'incontro fiume-mare, sabbia dorata, chioschi e vita delle pozze, come riferimento visivo prima della visita. Lo sfondo principale proviene dallo stesso archivio.",
      mapsCta: "Apri su Google Maps",
      altPrefix: "Foto di Praia Bela sul posto",
    },
    reviews: {
      title: "Osservazioni dei visitatori",
      intro: "I feedback frequenti dei visitatori sono riassunti in tre punti di lettura concreti per aiutare a fissare aspettative ragionevoli.",
      mapsCta: "Apri su Google Maps",
      themes: [
        {
          title: "Doppia esperienza fiume e mare",
          body:
            "Le valutazioni sono legate al raro schema fiume da un lato e mare dall'altro: la foce calda invita a stare nell'acqua, il mare fresco e ondoso a guardare le onde e camminare: due esperienze in una spiaggia.",
        },
        {
          title: "Il rituale della balsa",
          body:
            "Attraversare la foce in balsa è per molti un arrivo lento e quasi cerimoniale, e aggiunge contatto con barcaioli e comunità: ciò distingue questa costa dalle spiagge urbane.",
        },
        {
          title: "Le condizioni cambiano con la marea",
          body:
            "L'esperienza varia con livello della marea, vento e tempo: la bassa marea apre banchi per cercare conchiglie, l'alta è migliore per il bagno. Queste variabili contano più di un generico bello.",
        },
      ],
    },
    transport: {
      title: "Come arrivare",
      intro:
        "Praia Bela si trova sulla costa meridionale di Pitimbu. Di solito si raggiungono prima João Pessoa o Pitimbu, poi si conclude con un arrivo di strada più balsa.",
      cards: [
        {
          title: "Aeroporti regionali",
          body:
            "Il principale più vicino è il Presidente Castro Pinto International (JPA) a João Pessoa, circa 1 ora. Se i voli scarseggiano, vola a Recife (REC), poi nord sulla BR-101 e PB-008.",
        },
        {
          title: "In auto",
          body:
            "Da João Pessoa prendi la BR-101 a sud, poi la PB-008 per Pitimbu fino al guado. Totale circa 45 km; l'ultimo tratto richiede di lasciare l'auto e prendere la balsa. Guida di giorno.",
        },
        {
          title: "Bus più trasferimento",
          body:
            "Bus a lunga percorrenza o navette arrivano a Pitimbu. Da lì un van locale (comunitário) o taxi fino al fiume, poi la balsa. Il servizio pubblico è limitato: nota l'ultima partenza.",
        },
        {
          title: "Ultimo tratto in balsa",
          body:
            "Arrivato al fiume, parcheggia e attraversa in balsa con i bagagli; la traversata dura pochi minuti. La balsa può cambiare con maree e tempo: porta contanti e controlla il ritorno.",
        },
      ],
    },
    visit: {
      title: "Pianifica la visita",
      cards: [
        {
          title: "Momento migliore",
          body:
            "Per foto e osservazione delle maree, scegli primo mattino o tardo pomeriggio. Da maggio a settembre è più secco e con mari calmi: una finestra più confortevole.",
        },
        {
          title: "Fiume e mare insieme",
          body:
            "Al mattino fai il bagno nella foce calda; al pomeriggio guarda le onde e cammina sul lato del mare. Il mare è ondoso: nuota solo dove c'è supervisione.",
        },
        {
          title: "Durata consigliata",
          body:
            "Con andata e ritorno in balsa e riposo in spiaggia, mezza giornata è comoda; con ricerca di conchiglie, foto e costa vicina, concedi una giornata intera.",
        },
        {
          title: "Sicurezza sul posto",
          body:
            "Sole tropicale richiede crema e acqua; controlla maree e avvisi di corrente di risucchio; porta contanti per balsa e chioschi; non perdere l'ultima balsa di ritorno.",
        },
      ],
    },
    editorial: {
      title: "Nota editoriale",
      body:
        "Come guida non profit, il sito privilegia posizione, contesto ambientale, trasporti, foto dal posto e riferimenti ufficiali rispetto a linguaggio commerciale o inviti alla prenotazione.",
    },
    links: {
      title: "Link ufficiali di riferimento",
      intro:
        "Queste risorse ampliano la pagina verso le informazioni pubbliche autorevoli di Pitimbu e Paraíba su geografia, statistica, ambiente ed ecologia marina.",
      items: [
        {
          title: "IBGE — pannello del comune di Pitimbu",
          href: "https://cidades.ibge.gov.br/brasil/pb/pitimbu/panorama",
          description:
            "L'IBGE è l'ente ufficiale brasiliano per geografia e statistica e questa pagina fornisce dati verificabili del comune di Pitimbu utili per citazioni fattuali.",
        },
        {
          title: "SUDEMA — agenzia ambientale della Paraíba",
          href: "https://sudema.pb.gov.br/",
          description:
            "SUDEMA è l'agenzia ambientale della Paraíba e pubblica informazioni su qualità delle acque costiere (balneabilità) e tutela ambientale, utili come riferimenti di monitoraggio e policy.",
        },
        {
          title: "AESA — agenzia delle risorse idriche della Paraíba",
          href: "https://www.aesa.pb.gov.br/",
          description:
            "AESA fornisce dati regionali di idrologia e meteorologia per la Paraíba, incluse osservazioni climatiche e pluviometriche utili per il contesto stagionale.",
        },
        {
          title: "Università Federale della Paraíba (UFPB)",
          href: "https://www.ufpb.br/",
          description:
            "L'UFPB è un'università pubblica di ricerca i cui studi in geografia e scienze marine possono offrire un'estensione accademica su geomorfologia costiera e biodiversità.",
        },
        {
          title: "Comune di Pitimbu",
          href: "https://www.pitimbu.pb.gov.br/",
          description:
            "Il sito del Comune di Pitimbu fornisce informazioni amministrative di base e può essere usato per confermare contesto e appartenenza territoriale.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Guida Praia Bela - Pitimbu. Tutti i diritti riservati.",
      disclaimer:
        "Questo sito è un progetto indipendente, non profit e divulgativo di terza parte; non ha alcun rapporto istituzionale con il governo brasiliano o con enti ufficiali.",
      mapsLabel: "Google Maps →",
    },
  },
  es: {
    localeName: "Español",
    title: "Praia Bela - Pitimbu | Guía multilingüe en Paraíba, Brasil",
    description:
      "Guía en cinco idiomas sobre Praia Bela - Pitimbu con contexto geográfico, ecología de río y mar, transporte, fotos del lugar y enlaces oficiales.",
    nav: {
      overview: "Panorama",
      gallery: "Fotos",
      reviews: "Reseñas",
      transport: "Acceso",
      visit: "Visita",
      links: "Enlaces",
    },
    hero: {
      eyebrow: "Paraíba, Brasil | Una playa donde el río y el mar se encuentran",
      headline: "Praia Bela - Pitimbu",
      summary:
        "Esta es una guía divulgativa no lucrativa de Praia Bela. Se centra en la geografía de la playa, la ecología de río y mar, cómo llegar y fotos del lugar, sin reservas, promociones ni avales comerciales.",
      ratingLabel: "Calificación de Google",
      typeLabel: "Tipo",
      addressLabel: "Dirección",
      phoneLabel: "Teléfono",
      plusCodeLabel: "Plus Code",
      mapsCta: "Ver en Google Maps",
      galleryCta: "Ver fotos",
    },
    metricsTitle: "Datos clave",
    metrics: [
      { label: "Paisaje", value: "donde el río y el mar se unen, arena dorada, arrecifes y manglares" },
      { label: "Experiencia", value: "descanso en la playa, baño en el río, travesía en bote" },
      { label: "Entorno regional", value: "borde sur del área metropolitana de João Pessoa, Pitimbu" },
      { label: "Ideal para", value: "viajeros en auto, familias, fotógrafos de naturaleza, observadores ecológicos" },
    ],
    story: {
      title: "Geografía, historia y contexto local",
      intro:
        "El atractivo de Praia Bela viene de más que la arena. El río, la costa, las dunas y la comunidad local forman juntos un único contexto de visita.",
      cards: [
        {
          title: "Relieve de río y mar",
          body:
            "Praia Bela está en la costa atlántica del sur de Pitimbu. Aquí un estuario desemboca en el mar. Este encuentro crea la experiencia más distintiva: un río cálido y tranquilo a un lado, un mar abierto más fresco y oleaje al otro. Llegar a la playa suele implicar cruzar el estuario en balsa, una tradición local que continúa hoy.",
        },
        {
          title: "Costa, dunas y vegetación",
          body:
            "Forma parte de la costa de barrera del noreste del Brasil, con una altitud media de solo unos 16 metros. Dunas costeras y vegetación resistente al viento bordean la orilla tropical, y las mareas dejan al descubierto amplios bancos de arena: un aula natural para observar la dinámica costera y la evolución de las dunas.",
        },
        {
          title: "Nombre, historia y comunidad",
          body:
            "Praia Bela significa playa bella en portugués. El nombre Pitimbu proviene del tupí-guaraní, ligado a la tradición indígena costera. Hoy Praia Bela se sostiene con pequeños quioscos (quiosques), familias de pescadores y barqueros de balsa: una costa viva donde la naturaleza y la cultura se encuentran.",
        },
      ],
    },
    insights: {
      title: "Lecturas naturales y ecológicas",
      intro: "Se puede leer la costa tropical en tres dimensiones: manglares, vida marina y aves costeras.",
      cards: [
        {
          title: "Manglares y ecología del estuario",
          body:
            "El estuario y la zona intermareal albergan manglares que actúan como guardería de muchas crías de peces y crustáceos, y ayudan a filtrar los nutrientes terrestres estabilizando la costa. Observar las raíces aéreas y los cangrejos violinistas es un buen punto de partida.",
        },
        {
          title: "Vida marina y arrecifes",
          body:
            "El lado del mar abierto es más fresco y con más oleaje; los arrecifes y rocas cercanas dan espacio a balanos, caracoles, peces pequeños y tortugas. El río cálido es mejor para el baño tranquilo y el snorkel. Ambas masas de agua sostienen una rica biodiversidad costera.",
        },
        {
          title: "Aves costeras y plantas de dunas",
          body:
            "Los bancos de arena y el estuario son paradas importantes para las aves migratorias; con la marea baja se observan correlimos, gaviotas y aves de riviera. Plantas como la portulaca, los cactus y gramíneas tolerantes a la sal fijan la arena con raíces profundas, formando la primera barriera contra el viento.",
        },
      ],
    },
    technical: {
      title: "Datos espaciales y geográficos básicos",
      intro:
        "Los siguientes datos estructurados resumen las coordenadas, la pertenencia administrativa, la altitud, la hidrología y las mareas de Praia Bela para leer el lugar en clave geográfica.",
      rows: [
        { dimension: "Coordenadas geográficas", value: "Aprox. 7°28′S, 34°50′W", note: "localizadas por Plus Code J52W+R9" },
        { dimension: "Pertenencia administrativa", value: "Pitimbu, Paraíba, Brasil", note: "borde sur del área metropolitana de João Pessoa" },
        { dimension: "Altitud media", value: "Aprox. 16 m", note: "llanura de la costa de barrera del Nordeste" },
        { dimension: "Distancia de João Pessoa", value: "Aprox. 45 km", note: "unos 1 hora en coche por BR-101 / PB-008" },
        { dimension: "Hidrología", value: "río y mar", note: "mar abierto más fresco y con oleaje; estuario cálido y tranquilo" },
        { dimension: "Régimen de mareas", value: "semidiurno", note: "dos pleamares y dos bajamares al día, amplitud moderada" },
      ],
    },
    routeProfile: {
      title: "El recorrido de llegada de João Pessoa a Praia Bela",
      intro:
        "Praia Bela no es un destino urbano plano, sino un llegada combinada de carretera y balsa entre río y mar. Leer esta ruta ayuda a entender su lógica espacial.",
      stages: [
        {
          title: "Inicio: ciudad de João Pessoa",
          elevation: "Etapa 1 · unos 0–40 km",
          body:
            "Sal de João Pessoa por la BR-101 al sur y luego toma la PB-008 hacia Pitimbu. El paisaje pasa de la llanura urbana a la campiña costera tropical; unas 1 hora en coche.",
        },
        {
          title: "Transbordo: villa de Pitimbu y desembocadura",
          elevation: "Etapa 2 · Pitimbu",
          body:
            "Llegando a Pitimbu, sigue al sur hasta el paso del río. Aparca junto a la orilla y toma una pequeña balsa local para cruzar el río; la travesía dura solo unos minutos.",
        },
        {
          title: "Fin: playa de Praia Bela",
          elevation: "Etapa 3 · al otro lado del río",
          body:
            "Al desembarcar llegas a Praia Bela. Quioscos, sombrillas y la desembocadura poco profunda están junto a la arena; ideales para descansar, bañarse y ver el río encontrarse con el mar.",
        },
      ],
    },
    astronomy: {
      title: "Mareas, clima y mejor momento",
      intro:
        "Lejos de la ciudad, el valor real de esta costa está en el ritmo de mareas, clima y luz. Entenderlos hace que la visita sea más provechosa.",
      cards: [
        {
          title: "Ritmo de marea semidiurna",
          body:
            "Es una marea semidiurna, con dos pleamares y dos bajamares al día. Con la bajamar quedan al descubierto bancos y rocas: mejores para recoger conchas, observar vida y caminar. Con la pleamar el mar llega a las dunas: mejor para bañarse y fotografiar. Consulta la tabla de mareas del día.",
        },
        {
          title: "Clima y estación",
          body:
            "El clima es tropical y cálido todo el año. De mayo a septiembre es relativamente seco, con menos lluvias y mares más calmos: una ventana cómoda. Febrero y marzo son el pico de lluvias, con frecuentes tormentas vespertinas.",
        },
        {
          title: "Luz y fotografía",
          body:
            "La luz de la mañana temprana es suave y el mar calmado, ideal para fotografiar el encuentro río-mar y la vida intermareal. La hora dorada al atardecer da profundidad a dunas y olas. Para fotografiar, la hora suele importar más que el sereno.",
        },
      ],
    },
    faq: {
      title: "FAQ estructurada",
      intro:
        "Para ayudarle a tomar las decisiones de viaje más informadas, hemos organizado las preguntas más comunes en tres dimensiones fundamentales basadas en las condiciones geográficas y los comentarios de los visitantes:",
      groups: [
        {
          category: "1. Geografía y entorno",
          items: [
            {
              question: "¿Qué significa aquí el encuentro entre río y mar?",
              answer:
                "Praia Bela está en la costa atlántica del sur de Pitimbu, donde un pequeño río entra al mar. Las dos masas de agua son muy distintas: la desembocadura es cálida y tranquila, ideal para bañarse; el mar abierto es más fresco y con oleaje. Llegar a la playa suele exigir cruzar la desembocadura en balsa.",
            },
            {
              question: "¿Por qué el mar es más fresco y con oleaje?",
              answer:
                "El mar abierto mira directamente al Atlántico y recibe corrientes y viento, por eso suele estar más fresco que la desembocadura resguardada y formar olas mayores. Por eso conviene más para ver olas que para largos baños.",
            },
            {
              question: "¿Cuál es el valor científico de manglares y bancos?",
              answer:
                "Los manglares del estuario son guardería de crías de peces y crustáceos, filtran nutrientes y amortiguan las marejadas. Los bancos que descubre la bajamar alimentan aves y vida bentónica: un aula natural de ecología costera.",
            },
          ],
        },
        {
          category: "2. Transporte y acceso",
          items: [
            {
              question: "¿Cómo llego en auto a Praia Bela?",
              answer:
                "Desde João Pessoa toma la BR-101 al sur, luego la PB-008 hacia Pitimbu y hasta el paso del río. Son unos 45 km, unas 1 hora. El último tramo exige dejar el coche y tomar la balsa, así que consulta los horarios.",
            },
            {
              question: "¿Puedo llegar sin auto?",
              answer:
                "Puedes tomar un bus de larga distancia o una naveta a Pitimbu, luego un van local (comunitário) o taxi hasta el río y finalmente la balsa. El servicio público es limitado: planifica con antelación la vuelta.",
            },
            {
              question: "¿Qué vigilar con la balsa?",
              answer:
                "La balsa la llevan barqueros locales. Los horarios son bastante regulares pero pueden cambiar con mareas y tiempo. Lleva efectivo para la tarifa y anota la última travesía para no quedar atrapado.",
            },
          ],
        },
        {
          category: "3. Seguridad y consejos",
          items: [
            {
              question: "¿Es adecuada para ancianos y niños?",
              answer:
                "La playa es suave y buena para descansar en familia, pero el mar abierto tiene más oleaje: los niños deben quedarse en la desembocadura o en zonas vigiladas. Quien tenga movilidad reducida necesita ayuda para la balsa: valora según tus posibilidades.",
            },
            {
              question: "¿Debo preocuparme por medusas o corrientes de arrastre?",
              answer:
                "Las costas tropicales pueden tener medusas y corrientes de arrastre (rip current). Entra al agua solo donde hay socorristas u otras personas, observa las condiciones del día y evita las zonas señalizadas.",
            },
            {
              question: "¿Qué instalaciones hay en el lugar?",
              answer:
                "Pequeños quioscos (quiosques) ofrecen sombra, comida sencilla y descanso. La asistencia médica y los bancos están sobre todo en Pitimbu y João Pessoa. Lleva agua, protección solar y algo de efectivo.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "Fotos del sitio",
      intro:
        "Imágenes del encuentro río-mar, arena dorada, quioscos y vida de las pozas, como referencia visual antes de la visita. El fondo principal procede del mismo archivo.",
      mapsCta: "Ver en Google Maps",
      altPrefix: "Foto de Praia Bela en el sitio",
    },
    reviews: {
      title: "Observaciones de visitantes",
      intro: "Los comentarios frecuentes de los visitantes se resumen en tres puntos de lectura concretos para ayudar a fijar expectativas razonables.",
      mapsCta: "Ver en Google Maps",
      themes: [
        {
          title: "Doble experiencia río y mar",
          body:
            "Las valoraciones se ligan al raro esquema de río a un lado y mar al otro: la desembocadura cálida invita a estar en el agua, el mar fresco y oleado a ver olas y caminar: dos experiencias en una playa.",
        },
        {
          title: "El ritual de la balsa",
          body:
            "Cruzar la desembocadura en balsa es para muchos un arribo lento y casi ceremonial, y añade contacto con barqueros y comunidad: lo que distingue esta costa de las playas urbanas.",
        },
        {
          title: "Las condiciones cambian con la marea",
          body:
            "La experiencia varía con el nivel de la marea, el viento y el tiempo: la bajamar abre bancos para recoger conchas, la pleamar es mejor para el baño. Estas variables importan más que un bello genérico.",
        },
      ],
    },
    transport: {
      title: "Cómo llegar",
      intro:
        "Praia Bela está en la costa meridional de Pitimbu. Normalmente se llega primero a João Pessoa o Pitimbu, y luego se termina con una llegada de carretera más balsa.",
      cards: [
        {
          title: "Aeropuertos regionales",
          body:
            "El principal más cercano es el Presidente Castro Pinto International (JPA) en João Pessoa, unas 1 hora. Si los vuelos escasean, vuela a Recife (REC), luego norte por la BR-101 y PB-008.",
        },
        {
          title: "En auto",
          body:
            "Desde João Pessoa toma la BR-101 al sur, luego la PB-008 hacia Pitimbu y hasta el paso del río. Unos 45 km en total; el último tramo exige dejar el coche y tomar la balsa. Conduce de día.",
        },
        {
          title: "Bus más traslado",
          body:
            "Buses de larga distancia o navetas llegan a Pitimbu. Desde allí un van local (comunitário) o taxi hasta el río, luego la balsa. El servicio público es limitado: anota la última salida.",
        },
        {
          title: "Último tramo en balsa",
          body:
            "Llegado al río, aparca y cruza en balsa con tus cosas; la travesía dura pocos minutos. La balsa puede cambiar con mareas y tiempo: lleva efectivo y vigila la vuelta.",
        },
      ],
    },
    visit: {
      title: "Sugerencias de visita",
      cards: [
        {
          title: "Mejor momento",
          body:
            "Para fotos y observar mareas, prefiere la mañana temprana o el final de la tarde. De mayo a septiembre es más seco y con mares calmos: una ventana más cómoda.",
        },
        {
          title: "Río y mar juntos",
          body:
            "Por la mañana báñate en la desembocadura cálida; por la tarde mira las olas y camina por el lado del mar. El mar tiene oleaje: nada solo donde haya vigilancia.",
        },
        {
          title: "Tiempo recomendado",
          body:
            "Con la balsa de ida y vuelta y el descanso en la playa, media jornada es cómoda; con recolección de conchas, fotos y costa cercana, reserva un día entero.",
        },
        {
          title: "Seguridad en el sitio",
          body:
            "El sol tropical exige crema y agua; observa mareas y avisos de corriente de arrastre; lleva efectivo para la balsa y los quioscos; no pierdas la última balsa de vuelta.",
        },
      ],
    },
    editorial: {
      title: "Nota editorial",
      body:
        "Como guía no lucrativa de divulgación turística, el sitio prioriza orientación, contexto ambiental, formas de llegar, fotos del lugar y referencias oficiales por encima del lenguaje comercial.",
    },
    links: {
      title: "Enlaces oficiales de referencia",
      intro:
        "Estos recursos permiten ampliar la lectura del lugar hacia la información pública y autorizada de Pitimbu y Paraíba sobre geografía, estadística, ambiente y ecología marina.",
      items: [
        {
          title: "IBGE — panel del municipio de Pitimbu",
          href: "https://cidades.ibge.gov.br/brasil/pb/pitimbu/panorama",
          description:
            "El IBGE es el organismo oficial de geografía y estadística de Brasil y esta página reúne datos verificables del municipio de Pitimbu para citas factuales.",
        },
        {
          title: "SUDEMA — agencia ambiental de Paraíba",
          href: "https://sudema.pb.gov.br/",
          description:
            "SUDEMA es la agencia ambiental de Paraíba y publica información pública sobre calidad del agua costera (balneabilidad) y protección ambiental, útil como referencia de monitoreo y política.",
        },
        {
          title: "AESA — agencia de recursos hídricos de Paraíba",
          href: "https://www.aesa.pb.gov.br/",
          description:
            "AESA ofrece datos regionales de hidrología y meteorología en Paraíba, con observaciones climáticas y de lluvia útiles para contextualizar condiciones estacionales.",
        },
        {
          title: "Universidad Federal de Paraíba (UFPB)",
          href: "https://www.ufpb.br/",
          description:
            "La UFPB es una universidad pública de investigación y sus áreas de geografía y ciencias marinas pueden servir como puerta de entrada académica a geomorfología costera y biodiversidad.",
        },
        {
          title: "Ayuntamiento de Pitimbu",
          href: "https://www.pitimbu.pb.gov.br/",
          description:
            "El sitio municipal de Pitimbu reúne información administrativa básica y puede usarse para confirmar el contexto y la pertenencia territorial del lugar.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Guía Praia Bela - Pitimbu. Todos los derechos reservados.",
      disclaimer:
        "Este sitio web es un proyecto independiente, no lucrativo y divulgativo de terceros; no tiene relación institucional con el Gobierno de Brasil ni con ninguna entidad oficial.",
      mapsLabel: "Google Maps →",
    },
  },
  pt: {
    localeName: "Português",
    title: "Praia Bela - Pitimbu | Guia multilíngue na Paraíba, Brasil",
    description:
      "Guia em cinco idiomas sobre a Praia Bela - Pitimbu, com contexto geográfico, ecologia de rio e mar, transporte, fotos do local e links oficiais.",
    nav: {
      overview: "Visão geral",
      gallery: "Fotos",
      reviews: "Avaliações",
      transport: "Acesso",
      visit: "Visita",
      links: "Links",
    },
    hero: {
      eyebrow: "Paraíba, Brasil | Uma praia onde o rio e o mar se encontram",
      headline: "Praia Bela - Pitimbu",
      summary:
        "Este é um guia de divulgação científica sem fins lucrativos da Praia Bela. Foca na geografia da praia, na ecologia de rio e mar, em como chegar e em fotos do local, sem reservas, promoções ou aval de cunho comercial.",
      ratingLabel: "Avaliação do Google",
      typeLabel: "Tipo",
      addressLabel: "Endereço",
      phoneLabel: "Telefone",
      plusCodeLabel: "Plus Code",
      mapsCta: "Ver no Google Maps",
      galleryCta: "Ver fotos",
    },
    metricsTitle: "Dados principais",
    metrics: [
      { label: "Paisagem", value: "onde o rio encontra o mar, areia dourada, recifes e manguezais" },
      { label: "Experiência", value: "descanso na praia, banho no rio, travessia de barco" },
      { label: "Entorno regional", value: "extremo sul da região metropolitana de João Pessoa, Pitimbu" },
      { label: "Ideal para", value: "viajantes de carro, famílias, fotógrafos da natureza, observadores ecológicos" },
    ],
    story: {
      title: "Geografia, história e contexto local",
      intro:
        "O encanto da Praia Bela vem de mais do que a areia. O rio, o litoral, as dunas e a comunidade local formam juntos um único contexto de visita.",
      cards: [
        {
          title: "Relevo de rio e mar",
          body:
            "A Praia Bela fica no litoral atlântico do sul de Pitimbu. Ali um estuário deságua no mar. Esse encontro cria a experiência mais marcante: um rio quente e tranquilo de um lado, um mar aberto mais fresco e agitado do outro. Chegar à praia costuma exigir atravessar o estuário de balsa, uma tradição local que persiste até hoje.",
        },
        {
          title: "Costa, dunas e vegetação",
          body:
            "Faz parte do litoral de barreira do Nordeste do Brasil, com altitude média de apenas cerca de 16 metros. Dunas costeiras e vegetação resistente ao vento marginam o litoral tropical, e as marés deixam a descoberto amplos bancos de areia: uma sala de aula natural para observar a dinâmica costeira e a evolução das dunas.",
        },
        {
          title: "Nome, história e comunidade",
          body:
            "Praia Bela significa 'praia bonita' em português. O nome Pitimbu vem do tupi-guarani, ligado à tradição indígena costeira. Hoje a Praia Bela se sustenta com pequenos quiosques, famílias de pescadores e barqueiros da balsa: um litoral vivo onde a natureza e a cultura se encontram.",
        },
      ],
    },
    insights: {
      title: "Leituras naturais e ecológicas",
      intro: "É possível ler o litoral tropical em três dimensões: manguezais, vida marinha e aves costeiras.",
      cards: [
        {
          title: "Manguezais e ecologia do estuário",
          body:
            "O estuário e a zona entremarés abrigam manguezais que funcionam como berçário de muitos filhotes de peixes e crustáceos, e ajudam a filtrar os nutrientes terrestres estabilizando o litoral. Observar as raízes aéreas e os caranguejos é um bom ponto de partida.",
        },
        {
          title: "Vida marinha e recifes",
          body:
            "O lado do mar aberto é mais fresco e com mais ondas; os recifes e rochas próximos oferecem espaço a cracas, caramujos, peixes pequenos e tartarugas. O rio quente é melhor para o banho tranquilo e o mergulho de snorkel. As duas massas d'água sustentam uma rica biodiversidade costeira.",
        },
        {
          title: "Aves costeiras e plantas das dunas",
          body:
            "Os bancos de areia e o estuário são paradas importantes para as aves migratórias; na baixa-mar observam-se batuirassos, gaivotas e aves de praia. Plantas como a portulaca, cactos e gramíneas tolerantes ao sal fixam a areia com raízes profundas, formando a primeira barreira contra o vento.",
        },
      ],
    },
    technical: {
      title: "Dados espaciais e geográficos básicos",
      intro:
        "Os dados estruturados a seguir resumem as coordenadas, a subordinação administrativa, a altitude, a hidrologia e as marés da Praia Bela para ler o local em chave geográfica.",
      rows: [
        { dimension: "Coordenadas geográficas", value: "Aprox. 7°28′S, 34°50′W", note: "localizadas pelo Plus Code J52W+R9" },
        { dimension: "Subordinação administrativa", value: "Pitimbu, Paraíba, Brasil", note: "extremo sul da região metropolitana de João Pessoa" },
        { dimension: "Altitude média", value: "Aprox. 16 m", note: "planície do litoral de barreira do Nordeste" },
        { dimension: "Distância de João Pessoa", value: "Aprox. 45 km", note: "cerca de 1 hora de carro pela BR-101 / PB-008" },
        { dimension: "Hidrologia", value: "rio e mar", note: "mar aberto mais fresco e agitado; estuário quente e tranquilo" },
        { dimension: "Regime de marés", value: "semidiurno", note: "duas preamares e duas baixamares por dia, amplitude moderada" },
      ],
    },
    routeProfile: {
      title: "O percurso de chegada de João Pessoa à Praia Bela",
      intro:
        "A Praia Bela não é um destino urbano plano, mas uma chegada combinada de estrada e balsa entre rio e mar. Ler esse trajeto ajuda a entender sua lógica espacial.",
      stages: [
        {
          title: "Início: cidade de João Pessoa",
          elevation: "Etapa 1 · cerca de 0–40 km",
          body:
            "Saia de João Pessoa pela BR-101 para o sul e em seguida pegue a PB-008 em direção a Pitimbu. A paisagem passa da planície urbana ao campo costeiro tropical; cerca de 1 hora de carro.",
        },
        {
          title: "Transbordo: vila de Pitimbu e foz",
          elevation: "Etapa 2 · Pitimbu",
          body:
            "Chegando a Pitimbu, siga para o sul até a passagem do rio. Estacione à beira da margem e pegue uma pequena balsa local para atravessar o rio; a travessia dura apenas alguns minutos.",
        },
        {
          title: "Fim: praia da Praia Bela",
          elevation: "Etapa 3 · do outro lado do rio",
          body:
            "Ao desembarcar você chega à Praia Bela. Quiosques, guarda-sóis e a foz rasa ficam junto à areia; ideais para descansar, banhar-se e ver o rio encontrar o mar.",
        },
      ],
    },
    astronomy: {
      title: "Marés, clima e melhor época",
      intro:
        "Longe da cidade, o valor real desse litoral está no ritmo das marés, do clima e da luz. Entendê-los torna a visita mais proveitosa.",
      cards: [
        {
          title: "Ritmo de maré semidiurna",
          body:
            "É uma maré semidiurna, com duas preamares e duas baixamares por dia. Na baixa-mar ficam a descoberto bancos e rochas: melhores para coletar conchas, observar a vida e caminhar. Na preamar o mar chega às dunas: melhor para banhar-se e fotografar. Consulte a tabela de marés do dia.",
        },
        {
          title: "Clima e estação",
          body:
            "O clima é tropical e quente o ano todo. De maio a setembro é relativamente seco, com menos chuvas e mares mais calmos: uma janela confortável. Fevereiro e março são o pico das chuvas, com frequentes tempestades à tarde.",
        },
        {
          title: "Luz e fotografia",
          body:
            "A luz do início da manhã é suave e o mar calmo, ideal para fotografar o encontro rio-mar e a vida entremarés. A hora dourada ao entardecer dá profundidade às dunas e às ondas. Para fotografar, o horário costuma importar mais do que o céu limpo.",
        },
      ],
    },
    faq: {
      title: "Perguntas frequentes estruturadas",
      intro:
        "Para ajudar você a tomar decisões de viagem mais informadas, organizamos as perguntas mais comuns em três dimensões fundamentais com base nas condições geográficas e nos comentários dos visitantes:",
      groups: [
        {
          category: "1. Geografia e entorno",
          items: [
            {
              question: "O que significa aqui o encontro entre rio e mar?",
              answer:
                "A Praia Bela fica no litoral atlântico do sul de Pitimbu, onde um pequeno rio deságua no mar. As duas massas d'água são bem diferentes: a foz é quente e tranquila, ideal para banhar-se; o mar aberto é mais fresco e agitado. Chegar à praia costuma exigir atravessar a foz de balsa.",
            },
            {
              question: "Por que o mar é mais fresco e agitado?",
              answer:
                "O mar aberto dá diretamente para o Atlântico e recebe correntes e vento, por isso costuma estar mais fresco que a foz abrigada e formar ondas maiores. Por isso é mais indicado para ver ondas do que para longos banhos.",
            },
            {
              question: "Qual o valor científico de manguezais e bancos?",
              answer:
                "Os manguezais do estuário são berçário de filhotes de peixes e crustáceos, filtram nutrientes e amortecem as ressacas. Os bancos que a baixa-mar revela alimentam aves e a vida bentônica: uma sala de aula natural de ecologia costeira.",
            },
          ],
        },
        {
          category: "2. Transporte e acesso",
          items: [
            {
              question: "Como chego de carro à Praia Bela?",
              answer:
                "De João Pessoa pegue a BR-101 para o sul, depois a PB-008 em direção a Pitimbu e até a passagem do rio. São cerca de 45 km, cerca de 1 hora. O último trecho exige deixar o carro e pegar a balsa, então consulte os horários.",
            },
            {
              question: "Consigo chegar sem carro?",
              answer:
                "Você pode pegar um ônibus de longa distância ou uma van até Pitimbu, depois um van local (comunitário) ou táxi até o rio e, por fim, a balsa. O transporte público é limitado: planeje com antecedência a volta.",
            },
            {
              question: "O que observar com a balsa?",
              answer:
                "A balsa é operada por barqueiros locais. Os horários são razoavelmente regulares, mas podem mudar com as marés e o tempo. Leve dinheiro para a tarifa e anote a última travessia para não ficar preso.",
            },
          ],
        },
        {
          category: "3. Segurança e dicas",
          items: [
            {
              question: "É adequada para idosos e crianças?",
              answer:
                "A praia é suave e boa para descansar em família, mas o mar aberto tem mais ondas: as crianças devem ficar na foz ou em zonas vigiadas. Quem tem mobilidade reduzida precisa de ajuda para a balsa: avalie conforme suas possibilidades.",
            },
            {
              question: "Devo me preocupar com águas-vivas ou correntezas?",
              answer:
                "Litorais tropicais podem ter águas-vivas e correntezas de arrasto (rip current). Entre na água apenas onde há salva-vidas ou outras pessoas, observe as condições do dia e evite as áreas sinalizadas.",
            },
            {
              question: "Que instalações existem no local?",
              answer:
                "Pequenos quiosques oferecem sombra, comida simples e descanso. A assistência médica e os bancos ficam principalmente em Pitimbu e João Pessoa. Leve água, proteção solar e algum dinheiro.",
            },
          ],
        },
      ],
    },
    photos: {
      title: "Fotos do local",
      intro:
        "Imagens do encontro rio-mar, areia dourada, quiosques e vida das poças, como referência visual antes da visita. O fundo principal provém do mesmo acervo.",
      mapsCta: "Ver no Google Maps",
      altPrefix: "Foto da Praia Bela no local",
    },
    reviews: {
      title: "Observações dos visitantes",
      intro: "Os comentários frequentes dos visitantes se resumem em três pontos de leitura concretos para ajudar a fixar expectativas razoáveis.",
      mapsCta: "Ver no Google Maps",
      themes: [
        {
          title: "Dupla experiência de rio e mar",
          body:
            "As avaliações se ligam ao raro esquema de rio de um lado e mar do outro: a foz quente convida a estar na água, o mar fresco e agitado a ver ondas e caminhar: duas experiências numa só praia.",
        },
        {
          title: "O ritual da balsa",
          body:
            "Atravessar a foz de balsa é para muitos uma chegada lenta e quase cerimonial, e agrega contato com barqueiros e a comunidade: o que distingue este litoral das praias urbanas.",
        },
        {
          title: "As condições mudam com a maré",
          body:
            "A experiência varia com o nível da maré, o vento e o tempo: a baixa-mar abre bancos para coletar conchas, a preamar é melhor para o banho. Essas variáveis importam mais do que um clichê de beleza.",
        },
      ],
    },
    transport: {
      title: "Como chegar",
      intro:
        "A Praia Bela fica no litoral sul de Pitimbu. Normalmente chega-se primeiro a João Pessoa ou Pitimbu, e depois se conclui com uma chegada de estrada mais balsa.",
      cards: [
        {
          title: "Aeroportos regionais",
          body:
            "O principal mais próximo é o Internacional Presidente Castro Pinto (JPA), em João Pessoa, cerca de 1 hora. Se os voos forem escassos, voe para Recife (REC), depois siga para o norte pela BR-101 e PB-008.",
        },
        {
          title: "De carro",
          body:
            "De João Pessoa pegue a BR-101 para o sul, depois a PB-008 em direção a Pitimbu e até a passagem do rio. Cerca de 45 km no total; o último trecho exige deixar o carro e pegar a balsa. Dirija durante o dia.",
        },
        {
          title: "Ônibus mais traslado",
          body:
            "Ônibus de longa distância ou vans chegam a Pitimbu. Dali, um van local (comunitário) ou táxi até o rio, depois a balsa. O transporte público é limitado: anote a última saída.",
        },
        {
          title: "Último trecho de balsa",
          body:
            "Chegando ao rio, estacione e atravesse de balsa com seus pertences; a travessia dura poucos minutos. A balsa pode mudar com as marés e o tempo: leve dinheiro e fique atento à volta.",
        },
      ],
    },
    visit: {
      title: "Sugestões de visita",
      cards: [
        {
          title: "Melhor época",
          body:
            "Para fotos e observar as marés, prefira o início da manhã ou o final da tarde. De maio a setembro é mais seco e com mares calmos: uma janela mais confortável.",
        },
        {
          title: "Rio e mar juntos",
          body:
            "De manhã banhe-se na foz quente; à tarde veja as ondas e caminhe pelo lado do mar. O mar tem ondas: não nade sozinho onde não houver vigilância.",
        },
        {
          title: "Tempo recomendado",
          body:
            "Com a balsa de ida e volta e o descanso na praia, meia jornada é confortável; com coleta de conchas, fotos e o litoral próximo, reserve um dia inteiro.",
        },
        {
          title: "Segurança no local",
          body:
            "O sol tropical exige protetor e água; observe as marés e os avisos de correnteza; leve dinheiro para a balsa e os quiosques; não perca a última balsa de volta.",
        },
      ],
    },
    editorial: {
      title: "Nota editorial",
      body:
        "Como guia de divulgação turística sem fins lucrativos, o site prioriza orientação, contexto ambiental, formas de chegar, fotos do local e referências oficiais acima da linguagem comercial.",
    },
    links: {
      title: "Links oficiais de referência",
      intro:
        "Estes recursos permitem ampliar a leitura do local em direção à informação pública e autorizada de Pitimbu e da Paraíba sobre geografia, estatística, ambiente e ecologia marinha.",
      items: [
        {
          title: "IBGE — painel do município de Pitimbu",
          href: "https://cidades.ibge.gov.br/brasil/pb/pitimbu/panorama",
          description:
            "O IBGE é o órgão oficial de geografia e estatística do Brasil e esta página reúne dados verificáveis do município de Pitimbu para citações factuais.",
        },
        {
          title: "SUDEMA — agência ambiental da Paraíba",
          href: "https://sudema.pb.gov.br/",
          description:
            "A SUDEMA é a agência ambiental da Paraíba e publica informações públicas sobre qualidade da água costeira (balneabilidade) e proteção ambiental, úteis como referência de monitoramento e política.",
        },
        {
          title: "AESA — agência de recursos hídricos da Paraíba",
          href: "https://www.aesa.pb.gov.br/",
          description:
            "A AESA oferece dados regionais de hidrologia e meteorologia na Paraíba, com observações de clima e chuva úteis para contextualizar condições sazonais.",
        },
        {
          title: "Universidade Federal da Paraíba (UFPB)",
          href: "https://www.ufpb.br/",
          description:
            "A UFPB é uma universidade pública de pesquisa e suas áreas de geografia e ciências marinhas podem servir como extensão acadêmica sobre geomorfologia costeira e biodiversidade.",
        },
        {
          title: "Prefeitura de Pitimbu",
          href: "https://www.pitimbu.pb.gov.br/",
          description:
            "O site da Prefeitura de Pitimbu reúne informações administrativas básicas e pode ser usado para confirmar o contexto e a vinculação territorial do local.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Guia Praia Bela - Pitimbu. Todos os direitos reservados.",
      disclaimer:
        "Este site é um projeto independente, sem fins lucrativos e de divulgação de terceiros; não tem relação institucional com o Governo do Brasil nem com qualquer entidade oficial.",
      mapsLabel: "Google Maps →",
    },
  },
};
