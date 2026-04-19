import type { Locale } from "@/lib/i18n";

export type NavItem = {
  label: string;
  href: string;
};

export type HomeContent = {
  seoTitle: string;
  seoDescription: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    launchLabel: string;
    launchValue: string;
    founderLabel: string;
    founderValue: string;
    locationLabel: string;
    locationValue: string;
    primaryCta: string;
    secondaryCta: string;
  };
  manifesto: {
    title: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
  feature: {
    title: string;
    body: string;
    quote: string;
    caption: string;
    primaryCta: string;
    secondaryCta: string;
  };
  issuePreview: {
    title: string;
    intro: string;
    summary: string;
    meta: Array<{ label: string; value: string }>;
    tocTitle: string;
    toc: string[];
    ctas: {
      issue: string;
      pdf: string;
      buy: string;
    };
  };
  finalCta: {
    title: string;
    body: string;
    button: string;
  };
  footer: {
    about: string;
    linksTitle: string;
    contactTitle: string;
    contactLabel: string;
    rights: string;
  };
};

export type AboutContent = {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  description: string;
  storyTitle: string;
  storyBody: string[];
  timeline: Array<{ year: string; title: string; body: string }>;
  editorialTitle: string;
  editorialBody: string;
};

export type IssueContent = {
  seoTitle: string;
  seoDescription: string;
  kicker: string;
  title: string;
  description: string;
  coverTag: string;
  coverTitle: string;
  coverSubtitle: string;
  meta: Array<{ label: string; value: string }>;
  tocTitle: string;
  toc: string[];
  creditTitle: string;
  credits: Array<{ title: string; body: string }>;
  publicationTitle: string;
  publicationInfo: string[];
  actions: {
    pdf: string;
    buy: string;
    contact: string;
  };
};

export type SiteContent = {
  languageName: string;
  localeCode: string;
  siteTitle: string;
  issueNumber: string;
  issueDate: string;
  contactEmail: string;
  pdfHref: string;
  buyHref: string;
  home: HomeContent;
  about: AboutContent;
  issue: IssueContent;
};

export const siteContent: Record<Locale, SiteContent> = {
  "zh-Hant": {
    languageName: "繁體中文",
    localeCode: "zh-Hant",
    siteTitle: "創造新誌",
    issueNumber: "Issue 01",
    issueDate: "2026 年 4 月創刊",
    contactEmail: "editorial@neo-creation-journal.com",
    pdfHref: "https://example.com/issue-01.pdf",
    buyHref: "https://example.com/buy/issue-01",
    home: {
      seoTitle: "創造新誌 | 官方網站",
      seoDescription: "《創造新誌》是在日華人作家創辦的文學與思想雜誌，於 2026 年 4 月創刊。",
      nav: [
        { label: "首頁", href: "/" },
        { label: "關於", href: "/about" },
        { label: "往期", href: "/issue-01" },
      ],
      hero: {
        eyebrow: "A journal begun in Tokyo",
        title: "創造新誌",
        lede:
          "由在日華人作家創辦，以文學、思想與當代經驗為經緯，為跨境書寫留下一本新的刊物。",
        launchLabel: "創刊",
        launchValue: "2026 年 4 月",
        founderLabel: "創辦背景",
        founderValue: "在日華人作家發起",
        locationLabel: "出版基點",
        locationValue: "東京 / 面向世界華文讀者",
        primaryCta: "查看往期",
        secondaryCta: "聯絡編輯部",
      },
      manifesto: {
        title: "為尚未被命名的經驗，留下一種新的語氣",
        intro:
          "《創造新誌》不只是一本文學刊物，也是一個觀察跨文化生活、書寫遷徙感受與重新發明語言位置的現場。",
        items: [
          {
            title: "文學作為方法",
            body: "我們相信小說、散文、詩與評論，不只是作品形式，也是一種理解世界的方式。",
          },
          {
            title: "跨境書寫",
            body: "以在日華人的處境為起點，但不被地理侷限，讓流動中的身份與記憶彼此照面。",
          },
          {
            title: "新的出版節奏",
            body: "在紙本、PDF 與數位入口之間建立可持續的讀者關係，讓刊物成為長期對話。",
          },
        ],
      },
      feature: {
        title: "一本從異地開始，卻不只談異地的刊物",
        body:
          "創刊號以「關於創造新誌」為主題，回到刊物創辦的初心、寫作現場與出版實踐，也讓在日生活裡那些微小但真實的震動，進入文學與思想的視野。",
        quote: "從東京出發，但不只屬於東京；以華文寫作，但不只對華文內部說話。",
        caption: "首版官網以宣言、創刊資訊與期刊入口建立刊物的第一印象與閱讀節奏。",
        primaryCta: "前往創刊號頁面",
        secondaryCta: "查看刊物介紹",
      },
      issuePreview: {
        title: "創刊號",
        intro: "首期以專題頁形式呈現主題、目錄與入口，為後續更多期數預留一致結構。",
        summary:
          "本期收錄創刊宣言、編者言、跨境書寫專題與多位作者的文本節選，並附 PDF 入口與購買連結。",
        meta: [
          { label: "期數", value: "Issue 01" },
          { label: "出版時間", value: "2026 年 4 月" },
          { label: "形式", value: "紙本" },
        ],
        tocTitle: "精選目錄",
        toc: ["編者言：在異地重新開始寫作", "專題：關於創造新誌", "小說與散文節選", "評論：跨文化閱讀的當下"],
        ctas: {
          issue: "進入創刊號",
          pdf: "打開 PDF",
          buy: "購買紙本",
        },
      },
      finalCta: {
        title: "與《創造新誌》保持聯繫",
        body: "若你希望洽談合作、索取刊物資訊或關注後續發行，請直接與編輯部聯絡。",
        button: "寄送 Email",
      },
      footer: {
        about: "在日華人作家創辦的文學與思想雜誌，於 2026 年 4 月創刊。",
        linksTitle: "頁面",
        contactTitle: "聯絡",
        contactLabel: "編輯部信箱",
        rights: "© 2026 創造新誌. All rights reserved.",
      },
    },
    about: {
      seoTitle: "關於 | 創造新誌",
      seoDescription: "了解《創造新誌》的創辦背景、編輯立場與未來方向。",
      kicker: "About the Journal",
      title: "讓跨文化生活中的思考與書寫，擁有正式的出版位置",
      description:
        "《創造新誌》由在日華人作家發起，意在為當代遷徙經驗、語言轉換與文學想像建立一個長期而有辨識度的刊物平台。",
      storyTitle: "創辦緣起",
      storyBody: [
        "這本雜誌誕生於東京，也誕生於一種日常感受：當語言與生活場景不再完全重合，寫作會長出新的速度、距離與光線。",
        "《創造新誌》希望將這種經驗從個人感受轉化為公共刊物，讓文學與思想能夠共同回應跨境生活裡的現實與想像。",
      ],
      timeline: [
        {
          year: "2025",
          title: "刊物構想形成",
          body: "以在日華人作家的創作與閱讀經驗為起點，開始思考一本新刊物的必要性。",
        },
        {
          year: "2026 / 04",
          title: "創刊號發行",
          body: "首期正式發布，建立創刊宣言、專題主軸與讀者入口。",
        },
        {
          year: "Next",
          title: "持續擴充",
          body: "逐步加入更多期數、作者檔案與文章列表，形成可延展的數位刊物架構。",
        },
      ],
      editorialTitle: "編輯立場",
      editorialBody: "我們重視文學性，也重視思想密度；關注華文書寫，也關注翻譯、跨文化閱讀與出版實踐。",
    },
    issue: {
      seoTitle: "創刊號 | 創造新誌",
      seoDescription: "查看《創造新誌》2026 年 4 月創刊號的主題、目錄與取得方式。",
      kicker: "Issue 01",
      title: "創刊號：關於創造新誌",
      description: "2026 年 4 月創刊。以專題頁方式呈現主題、目錄、作者與取得入口。",
      coverTag: "創刊號",
      coverTitle: "新的\n語言位置",
      coverSubtitle: "從遷徙、寫作與閱讀之間，重畫華文的當代感受。",
      meta: [
        { label: "出版日期", value: "2026 年 4 月" },
        { label: "形式", value: "紙本" },
        { label: "主題", value: "關於創造新誌" },
        { label: "定價", value: "2200 日元" },
      ],
      tocTitle: "目錄節選",
      toc: ["創刊宣言", "編者言：關於創造新誌", "專題：九零後特輯、學者特輯等", "小說 / 散文 / 評論"],
      creditTitle: "封面與署名",
      credits: [
        {
          title: "封面題字：郭同慶",
          body:
            "旅日書畫家，師從王道榮、錢君匋等，現為日本篆隸書道會會長，並任全日本華人書法家協會副主席、上海中國書法院海外副院長。",
        },
        {
          title: "封面畫作《春之歌 II》：王曉鳴",
          body:
            "1988 年畢業於廣州美術學院油畫系，1999 年畢業於京都市立藝術大學油畫系碩士，曾任天津美術學院客座教授、中國人民大學藝術學院兼職教授，現居東京。",
        },
        {
          title: "封底篆刻：韓達",
          body:
            "篆刻作者，師承西泠印社名譽副社長小林斗盦一系，作品曾於 2020 年、2024 年入選日本國展日本美術展，現為日展作家。",
        },
      ],
      publicationTitle: "刊物資訊",
      publicationInfo: [
        "2026 年春季　創刊號（總第一期）",
        "主編：弥生",
        "執行主編：春馬",
        "編輯部主任：秋靳",
        "編輯委員會：弥生 春馬 秋靳 潘城 劉迪 林祁 李建 湯曉東 邱自楠 陳哲銘 寒粥",
        "封面設計：湯曉東",
        "主辦：一般社團法人 日中學人",
        "出版：日本國際教育出版社",
        "國際刊號（ISBN）：978-4-910660-02-8",
      ],
      actions: {
        pdf: "下載 PDF",
        buy: "購買紙本",
        contact: "聯絡編輯部",
      },
    },
  },
  "zh-Hans": {
    languageName: "简体中文",
    localeCode: "zh-Hans",
    siteTitle: "创造新志",
    issueNumber: "Issue 01",
    issueDate: "2026 年 4 月创刊",
    contactEmail: "editorial@neo-creation-journal.com",
    pdfHref: "https://example.com/issue-01.pdf",
    buyHref: "https://example.com/buy/issue-01",
    home: {
      seoTitle: "创造新志 | 官方网站",
      seoDescription: "《创造新志》是在日华人作家创办的文学与思想杂志，于 2026 年 4 月创刊。",
      nav: [
        { label: "首页", href: "/" },
        { label: "关于", href: "/about" },
        { label: "往期", href: "/issue-01" },
      ],
      hero: {
        eyebrow: "A journal begun in Tokyo",
        title: "创造新志",
        lede:
          "由在日华人作家创办，以文学、思想与当代经验为经纬，为跨境写作留下一本新的刊物。",
        launchLabel: "创刊",
        launchValue: "2026 年 4 月",
        founderLabel: "创办背景",
        founderValue: "在日华人作家发起",
        locationLabel: "出版基点",
        locationValue: "东京 / 面向世界华文读者",
        primaryCta: "查看往期",
        secondaryCta: "联系编辑部",
      },
      manifesto: {
        title: "为尚未被命名的经验，留下一种新的语气",
        intro:
          "《创造新志》不只是一本文学刊物，也是一处观察跨文化生活、书写迁徙感受与重新发明语言位置的现场。",
        items: [
          {
            title: "文学作为方法",
            body: "我们相信小说、散文、诗与评论，不只是作品形式，也是一种理解世界的方式。",
          },
          {
            title: "跨境写作",
            body: "以在日华人的处境为起点，但不被地理局限，让流动中的身份与记忆彼此照面。",
          },
          {
            title: "新的出版节奏",
            body: "在纸本、PDF 与数字入口之间建立可持续的读者关系，让刊物成为长期对话。",
          },
        ],
      },
      feature: {
        title: "一本从异地开始，却不只谈异地的刊物",
        body:
          "创刊号以“关于创造新志”为主题，回到刊物创办的初心、写作现场与出版实践，也让在日生活里那些微小但真实的震动，进入文学与思想的视野。",
        quote: "从东京出发，但不只属于东京；以华文写作，但不只对华文内部说话。",
        caption: "首版官网以宣言、创刊信息与期刊入口建立刊物的第一印象与阅读节奏。",
        primaryCta: "前往创刊号页面",
        secondaryCta: "查看刊物介绍",
      },
      issuePreview: {
        title: "创刊号",
        intro: "首期以专题页形式呈现主题、目录与入口，为后续更多期数预留一致结构。",
        summary:
          "本期收录创刊宣言、编者言、跨境写作专题与多位作者的文本节选，并附 PDF 入口与购买链接。",
        meta: [
          { label: "期数", value: "Issue 01" },
          { label: "出版时间", value: "2026 年 4 月" },
          { label: "形式", value: "纸本" },
        ],
        tocTitle: "精选目录",
        toc: ["编者言：在异地重新开始写作", "专题：关于创造新志", "小说与散文节选", "评论：跨文化阅读的当下"],
        ctas: {
          issue: "进入创刊号",
          pdf: "打开 PDF",
          buy: "购买纸本",
        },
      },
      finalCta: {
        title: "与《创造新志》保持联系",
        body: "如果你希望洽谈合作、索取刊物信息或关注后续发行，请直接与编辑部联系。",
        button: "发送 Email",
      },
      footer: {
        about: "在日华人作家创办的文学与思想杂志，于 2026 年 4 月创刊。",
        linksTitle: "页面",
        contactTitle: "联系",
        contactLabel: "编辑部邮箱",
        rights: "© 2026 创造新志. All rights reserved.",
      },
    },
    about: {
      seoTitle: "关于 | 创造新志",
      seoDescription: "了解《创造新志》的创办背景、编辑立场与未来方向。",
      kicker: "About the Journal",
      title: "让跨文化生活中的思考与写作，拥有正式的出版位置",
      description:
        "《创造新志》由在日华人作家发起，意在为当代迁徙经验、语言转换与文学想象建立一个长期而有辨识度的刊物平台。",
      storyTitle: "创办缘起",
      storyBody: [
        "这本杂志诞生于东京，也诞生于一种日常感受：当语言与生活场景不再完全重合，写作会长出新的速度、距离与光线。",
        "《创造新志》希望将这种经验从个人感受转化为公共刊物，让文学与思想能够共同回应跨境生活里的现实与想象。",
      ],
      timeline: [
        {
          year: "2025",
          title: "刊物构想形成",
          body: "以在日华人作家的创作与阅读经验为起点，开始思考一本新刊物的必要性。",
        },
        {
          year: "2026 / 04",
          title: "创刊号发行",
          body: "首期正式发布，建立创刊宣言、专题主轴与读者入口。",
        },
        {
          year: "Next",
          title: "持续扩充",
          body: "逐步加入更多期数、作者档案与文章列表，形成可延展的数字刊物架构。",
        },
      ],
      editorialTitle: "编辑立场",
      editorialBody: "我们重视文学性，也重视思想密度；关注华文写作，也关注翻译、跨文化阅读与出版实践。",
    },
    issue: {
      seoTitle: "创刊号 | 创造新志",
      seoDescription: "查看《创造新志》2026 年 4 月创刊号的主题、目录与获取方式。",
      kicker: "Issue 01",
      title: "创刊号：关于创造新志",
      description: "2026 年 4 月创刊。以专题页方式呈现主题、目录、作者与获取入口。",
      coverTag: "创刊号",
      coverTitle: "新的\n语言位置",
      coverSubtitle: "从迁徙、写作与阅读之间，重画华文的当代感受。",
      meta: [
        { label: "出版日期", value: "2026 年 4 月" },
        { label: "形式", value: "纸本" },
        { label: "主题", value: "关于创造新志" },
        { label: "定价", value: "2200 日元" },
      ],
      tocTitle: "目录节选",
      toc: ["创刊宣言", "编者言：关于创造新志", "专题：九零后特辑、学者特辑等", "小说 / 散文 / 评论"],
      creditTitle: "封面与署名",
      credits: [
        {
          title: "封面题字：郭同庆",
          body:
            "旅日书画家，师从王道荣、钱君匋等，现为日本篆隶书道会会长，并任全日本华人书法家协会副主席、上海中国书法院海外副院长。",
        },
        {
          title: "封面画作《春之歌 II》：王晓鸣",
          body:
            "1988 年毕业于广州美术学院油画系，1999 年毕业于京都市立艺术大学油画系硕士，曾任天津美术学院客座教授、中国人民大学艺术学院兼职教授，现居东京。",
        },
        {
          title: "封底篆刻：韩达",
          body:
            "篆刻作者，师承西泠印社名誉副社长小林斗盦一系，作品曾于 2020 年、2024 年入选日本国展日本美术展，现为日展作家。",
        },
      ],
      publicationTitle: "刊物信息",
      publicationInfo: [
        "2026 年春季　创刊号（总第一期）",
        "主编：弥生",
        "执行主编：春马",
        "编辑部主任：秋靳",
        "编辑委员会：弥生 春马 秋靳 潘城 刘迪 林祁 李建 汤晓东 邱自楠 陈哲铭 寒粥",
        "封面设计：汤晓东",
        "主办：一般社团法人 日中学人",
        "出版：日本国际教育出版社",
        "国际刊号（ISBN）：978-4-910660-02-8",
      ],
      actions: {
        pdf: "下载 PDF",
        buy: "购买纸本",
        contact: "联系编辑部",
      },
    },
  },
  ja: {
    languageName: "日本語",
    localeCode: "ja",
    siteTitle: "創造新誌",
    issueNumber: "Issue 01",
    issueDate: "2026年4月創刊",
    contactEmail: "editorial@neo-creation-journal.com",
    pdfHref: "https://example.com/issue-01.pdf",
    buyHref: "https://example.com/buy/issue-01",
    home: {
      seoTitle: "創造新誌 | 公式サイト",
      seoDescription: "『創造新誌』は在日華人作家によって創刊された文学・思想誌で、2026年4月に創刊されました。",
      nav: [
        { label: "ホーム", href: "/" },
        { label: "雑誌について", href: "/about" },
        { label: "バックナンバー", href: "/issue-01" },
      ],
      hero: {
        eyebrow: "A journal begun in Tokyo",
        title: "創造新誌",
        lede:
          "在日華人作家によって創刊され、文学・思想・現代経験を軸に、越境する書き手のための新しい雑誌を形にします。",
        launchLabel: "創刊",
        launchValue: "2026年4月",
        founderLabel: "創設背景",
        founderValue: "在日華人作家による発起",
        locationLabel: "拠点",
        locationValue: "東京 / 世界の華文読者へ",
        primaryCta: "バックナンバーを見る",
        secondaryCta: "編集部へ連絡",
      },
      manifesto: {
        title: "まだ名づけられていない経験に、新しい声の輪郭を与える",
        intro:
          "『創造新誌』は文学誌であると同時に、異文化の生活、移動の感覚、言語の位置をあらためて考えるための場でもあります。",
        items: [
          {
            title: "文学を方法として捉える",
            body: "小説、エッセイ、詩、批評は単なる形式ではなく、世界を理解するための方法だと考えています。",
          },
          {
            title: "越境する書き方",
            body: "在日華人の経験を起点にしながら、地理に閉じず、流動する記憶とアイデンティティを見つめます。",
          },
          {
            title: "新しい出版のリズム",
            body: "紙、PDF、ウェブを横断しながら、継続的な読者との関係を育てます。",
          },
        ],
      },
      feature: {
        title: "異郷から始まり、異郷だけを語るのではない雑誌",
        body:
          "創刊号は「創造新誌について」を主題とし、刊行の出発点、書く現場、出版実践をあらためて見つめ直します。",
        quote: "東京から始まる。しかし東京だけに属さず、華文で書く。しかし華文内部だけに向けない。",
        caption: "初版サイトは宣言、創刊情報、創刊号導線によって雑誌の第一印象を構成します。",
        primaryCta: "創刊号ページへ",
        secondaryCta: "雑誌紹介を見る",
      },
      issuePreview: {
        title: "創刊号",
        intro: "テーマ、目次、導線をまとめた特集ページとして構成し、今後の各号展開に備えます。",
        summary:
          "創刊宣言、編集後記、越境執筆特集、複数の作者による抜粋を収録し、PDF と購入導線も用意します。",
        meta: [
          { label: "号数", value: "Issue 01" },
          { label: "刊行時期", value: "2026年4月" },
          { label: "形式", value: "紙" },
        ],
        tocTitle: "目次抜粋",
        toc: ["編集者より: 異郷で書き始めること", "特集: 創造新誌について", "小説・随筆抜粋", "批評: 越境読書の現在"],
        ctas: {
          issue: "創刊号へ",
          pdf: "PDF を開く",
          buy: "紙版を購入",
        },
      },
      finalCta: {
        title: "創造新誌とつながる",
        body: "協業、掲載情報、今後の刊行について知りたい場合は、編集部まで直接ご連絡ください。",
        button: "メールを送る",
      },
      footer: {
        about: "在日華人作家によって創刊された文学・思想誌。2026年4月創刊。",
        linksTitle: "ページ",
        contactTitle: "連絡先",
        contactLabel: "編集部メール",
        rights: "© 2026 創造新誌. All rights reserved.",
      },
    },
    about: {
      seoTitle: "雑誌について | 創造新誌",
      seoDescription: "『創造新誌』の創刊背景、編集方針、今後の展望を紹介します。",
      kicker: "About the Journal",
      title: "異文化の生活と思考に、正式な出版の場所をつくる",
      description:
        "『創造新誌』は在日華人作家によって始められた、移動経験、言語の切り替え、文学的想像力のための長期的な雑誌プロジェクトです。",
      storyTitle: "創刊の背景",
      storyBody: [
        "この雑誌は東京で生まれましたが、それ以上に、言葉と生活の場が完全には重ならないという日々の感覚から生まれました。",
        "その感覚を個人的な経験にとどめず、公共的な雑誌へと変換することが、『創造新誌』の出発点です。",
      ],
      timeline: [
        {
          year: "2025",
          title: "構想の始動",
          body: "在日華人作家の創作と読書の経験から、新しい雑誌の必要性を考え始めました。",
        },
        {
          year: "2026 / 04",
          title: "創刊号刊行",
          body: "創刊宣言、特集主題、読者導線を備えた最初の号を公開しました。",
        },
        {
          year: "Next",
          title: "継続的な拡張",
          body: "今後は各号、執筆者ページ、記事一覧へと自然に拡張できる構成を目指します。",
        },
      ],
      editorialTitle: "編集方針",
      editorialBody: "文学性と思想の密度を両立させ、華文の書き手だけでなく、翻訳や越境読書、出版実践にも関心を向けます。",
    },
    issue: {
      seoTitle: "創刊号 | 創造新誌",
      seoDescription: "『創造新誌』2026年4月創刊号のテーマ、目次、入手方法を案内します。",
      kicker: "Issue 01",
      title: "創刊号: 創造新誌について",
      description: "2026年4月創刊。テーマ、目次、執筆者、入手導線をまとめた特集ページです。",
      coverTag: "創刊号",
      coverTitle: "新しい\n言語の位置",
      coverSubtitle: "移動、執筆、読書のあいだで、華文の現在感覚を描き直す。",
      meta: [
        { label: "刊行日", value: "2026年4月" },
        { label: "形式", value: "紙" },
        { label: "特集テーマ", value: "創造新誌について" },
        { label: "定価", value: "2200円" },
      ],
      tocTitle: "目次抜粋",
      toc: ["創刊宣言", "編集者より：創造新誌について", "特集：90後特集・研究者特集など", "小説 / 随筆 / 批評"],
      creditTitle: "表紙クレジット",
      credits: [
        {
          title: "表紙題字：郭同慶",
          body:
            "在日書画家。王道榮、錢君匋に学び、日本篆隷書道会会長、全日本華人書法家協会副主席、上海中国書法院海外副院長を務める。",
        },
        {
          title: "表紙作品《春之歌 II》：王暁鳴",
          body:
            "広州美術学院油画科卒、京都市立芸術大学大学院修了。天津美術学院客員教授、中国人民大学芸術学院兼職教授を歴任し、現在は東京在住。",
        },
        {
          title: "裏表紙篆刻：韓達",
          body:
            "篆刻作家。西泠印社名誉副社長・小林斗盦の系譜に学び、2020年・2024年に日本国展日本美術展へ入選、現在は日展作家。",
        },
      ],
      publicationTitle: "刊行情報",
      publicationInfo: [
        "2026年春季　創刊号（通巻第1号）",
        "主編：弥生",
        "執行主編：春馬",
        "編集部主任：秋靳",
        "編集委員会：弥生 春馬 秋靳 潘城 劉迪 林祁 李建 湯曉東 邱自楠 陳哲銘 寒粥",
        "表紙デザイン：湯曉東",
        "主催：一般社団法人 日中学人",
        "出版：日本国際教育出版社",
        "ISBN：978-4-910660-02-8",
      ],
      actions: {
        pdf: "PDF をダウンロード",
        buy: "紙版を購入",
        contact: "編集部へ連絡",
      },
    },
  },
  en: {
    languageName: "English",
    localeCode: "en",
    siteTitle: "Neo Creation Journal",
    issueNumber: "Issue 01",
    issueDate: "Founded in April 2026",
    contactEmail: "editorial@neo-creation-journal.com",
    pdfHref: "https://example.com/issue-01.pdf",
    buyHref: "https://example.com/buy/issue-01",
    home: {
      seoTitle: "Neo Creation Journal | Official Website",
      seoDescription: "Neo Creation Journal is a literary and ideas magazine founded by Chinese writers in Japan and launched in April 2026.",
      nav: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Past Issues", href: "/issue-01" },
      ],
      hero: {
        eyebrow: "A journal begun in Tokyo",
        title: "Neo Creation Journal",
        lede:
          "Founded by Chinese writers living in Japan, the journal traces literature, ideas, and contemporary experience across languages, borders, and forms of reading.",
        launchLabel: "Launch",
        launchValue: "April 2026",
        founderLabel: "Founded by",
        founderValue: "Chinese writers in Japan",
        locationLabel: "Editorial base",
        locationValue: "Tokyo / for global Chinese-language readers",
        primaryCta: "View Past Issues",
        secondaryCta: "Contact the editors",
      },
      manifesto: {
        title: "A new editorial voice for experiences not yet fully named",
        intro:
          "Neo Creation Journal is not only a magazine. It is also a public space for writing through migration, cultural translation, and the shifting position of language.",
        items: [
          {
            title: "Literature as method",
            body: "Fiction, essays, poetry, and criticism are treated not only as genres, but as ways of thinking through the world.",
          },
          {
            title: "Writing across borders",
            body: "The journal begins from the experience of Chinese writers in Japan, yet refuses to stay enclosed within a single geography.",
          },
          {
            title: "A durable publishing rhythm",
            body: "Print, PDF, and the website work together to build an ongoing relationship with readers rather than a one-off release.",
          },
        ],
      },
      feature: {
        title: "A magazine that begins in a foreign place, without speaking only of foreignness",
        body:
          "The first issue centers on the question of a new position for language and asks how migration, authorship, publishing, and reading shape one another.",
        quote: "It starts from Tokyo without belonging only to Tokyo. It writes in Chinese without speaking only inward to Chinese.",
        caption: "The launch site is structured around a manifesto, the first issue, and a clear editorial contact point.",
        primaryCta: "Go to Issue 01",
        secondaryCta: "Read about the journal",
      },
      issuePreview: {
        title: "Issue 01",
        intro: "The launch issue is presented as a dedicated editorial page, ready for future expansion into more issues and article collections.",
        summary:
          "The issue includes a launch manifesto, an editors' note, a feature on writing across borders, selected texts, and direct PDF and purchase links.",
        meta: [
          { label: "Issue", value: "Issue 01" },
          { label: "Published", value: "April 2026" },
          { label: "Format", value: "Print" },
        ],
        tocTitle: "Selected contents",
        toc: [
          "Editors' note: beginning to write from elsewhere",
          "Feature: a new position for language",
          "Selected fiction and essays",
          "Criticism: reading across cultures now",
        ],
        ctas: {
          issue: "Open Issue 01",
          pdf: "View PDF",
          buy: "Buy print issue",
        },
      },
      finalCta: {
        title: "Stay in touch with Neo Creation Journal",
        body: "For collaborations, publication details, or future issues, contact the editorial team directly.",
        button: "Send an email",
      },
      footer: {
        about: "A literary and ideas magazine founded by Chinese writers in Japan, launched in April 2026.",
        linksTitle: "Pages",
        contactTitle: "Contact",
        contactLabel: "Editorial email",
        rights: "© 2026 Neo Creation Journal. All rights reserved.",
      },
    },
    about: {
      seoTitle: "About | Neo Creation Journal",
      seoDescription: "Learn about the origin, editorial position, and future direction of Neo Creation Journal.",
      kicker: "About the Journal",
      title: "A formal publishing home for writing shaped by cross-cultural life",
      description:
        "Neo Creation Journal was initiated by Chinese writers in Japan to create a durable platform for migration, language shift, and literary imagination.",
      storyTitle: "Why the journal began",
      storyBody: [
        "The journal emerged in Tokyo, but also from an everyday perception: when language and place no longer fully overlap, writing develops a new speed, distance, and light.",
        "Neo Creation Journal turns that private sensation into a public editorial form, so literature and thought can respond together to the realities of living across borders.",
      ],
      timeline: [
        {
          year: "2025",
          title: "Editorial concept takes shape",
          body: "The need for a new magazine grew out of the reading and writing lives of Chinese writers based in Japan.",
        },
        {
          year: "2026 / 04",
          title: "Issue 01 is launched",
          body: "The first issue establishes the manifesto, feature theme, and reader entry points.",
        },
        {
          year: "Next",
          title: "Planned expansion",
          body: "The site is designed to extend smoothly into later issues, contributor profiles, and article collections.",
        },
      ],
      editorialTitle: "Editorial position",
      editorialBody: "The journal values literary quality and intellectual density while also paying attention to translation, cross-cultural reading, and publishing practice.",
    },
    issue: {
      seoTitle: "Issue 01 | Neo Creation Journal",
      seoDescription: "Explore the theme, contents, and access points for Issue 01 of Neo Creation Journal, published in April 2026.",
      kicker: "Issue 01",
      title: "Issue 01: About Neo Creation Journal",
      description: "Launched in April 2026. A dedicated issue page with theme framing, contents, contributors, and access links.",
      coverTag: "Launch Issue",
      coverTitle: "A New\nPosition\nfor Language",
      coverSubtitle: "Redrawing contemporary Chinese-language feeling through migration, writing, and reading.",
      meta: [
        { label: "Publication", value: "April 2026" },
        { label: "Format", value: "Print" },
        { label: "Theme", value: "About Neo Creation Journal" },
        { label: "Price", value: "JPY 2200" },
      ],
      tocTitle: "Selected contents",
      toc: [
        "Launch manifesto",
        "Editors' note: about Neo Creation Journal",
        "Features: post-90s writers, scholars, and more",
        "Fiction / essays / criticism",
      ],
      creditTitle: "Cover credits",
      credits: [
        {
          title: "Cover calligraphy: Guo Tongqing",
          body:
            "A calligrapher and painter based in Japan, trained under Wang Daorong and Qian Juntao, now serving in senior roles across Japanese and Chinese calligraphy associations.",
        },
        {
          title: "Cover painting “Spring Song II”: Wang Xiaoming",
          body:
            "Graduated from Guangzhou Academy of Fine Arts and Kyoto City University of Arts, later teaching at Tianjin Academy of Fine Arts and Renmin University, now based in Tokyo.",
        },
        {
          title: "Back-cover seal carving: Han Da",
          body:
            "Seal-carving artist in the lineage of Kobayashi Toan, with works selected for major Japanese art exhibitions in 2020 and 2024.",
        },
      ],
      publicationTitle: "Publication details",
      publicationInfo: [
        "Spring 2026 launch issue (overall issue no. 1)",
        "Editor-in-chief: Yayoi",
        "Executive editor: Chun Ma",
        "Editorial director: Qiu Jin",
        "Editorial committee: Yayoi, Chun Ma, Qiu Jin, Pan Cheng, Liu Di, Lin Qi, Li Jian, Tang Xiaodong, Qiu Zinan, Chen Zheming, Han Zhou",
        "Cover design: Tang Xiaodong",
        "Publisher: General Incorporated Association Sino-Gakujin in Japan",
        "Imprint: Japan International Education Press",
        "ISBN: 978-4-910660-02-8",
      ],
      actions: {
        pdf: "Download PDF",
        buy: "Buy print issue",
        contact: "Email the editors",
      },
    },
  },
};
