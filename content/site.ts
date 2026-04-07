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
  audienceTitle: string;
  audienceBody: string;
  futureTitle: string;
  futureBody: string;
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
  summaryTitle: string;
  summaryBody: string[];
  meta: Array<{ label: string; value: string }>;
  tocTitle: string;
  toc: string[];
  authorTitle: string;
  authors: string[];
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
        { label: "創刊號", href: "/issue-01" },
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
        primaryCta: "閱讀創刊號",
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
          "創刊號以新的語言位置為主題，回到遷徙、創作、出版與閱讀如何互相塑造的問題，也讓在日生活裡那些微小但真實的震動，進入文學與思想的視野。",
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
          { label: "形式", value: "紙本 / PDF / 線上介紹頁" },
        ],
        tocTitle: "精選目錄",
        toc: ["編者言：在異地重新開始寫作", "專題：新的語言位置", "小說與散文節選", "評論：跨文化閱讀的當下"],
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
      audienceTitle: "面向讀者",
      audienceBody: "包括關注文學、思想、亞洲跨境經驗與當代華文寫作的讀者，也包括海外華人與日本文化圈之間的對話者。",
      futureTitle: "未來方向",
      futureBody: "首版官網先承接創刊與品牌展示，後續可平滑擴充更多期數、作者頁、專欄與活動資訊。",
    },
    issue: {
      seoTitle: "創刊號 | 創造新誌",
      seoDescription: "查看《創造新誌》2026 年 4 月創刊號的主題、目錄與取得方式。",
      kicker: "Issue 01",
      title: "創刊號：新的語言位置",
      description: "2026 年 4 月創刊。以專題頁方式呈現主題、目錄、作者與取得入口。",
      coverTag: "創刊號",
      coverTitle: "新的\n語言位置",
      coverSubtitle: "從遷徙、寫作與閱讀之間，重畫華文的當代感受。",
      summaryTitle: "本期簡介",
      summaryBody: [
        "創刊號回到一個基礎但迫切的問題：當創作發生在異地，語言是否也會被迫重新安排它的重心？",
        "本期以宣言、編者言、專題、評論與文本節選構成閱讀節奏，讓刊物既具有創刊的自我說明，也保有文學作品本身的開放性。",
      ],
      meta: [
        { label: "出版日期", value: "2026 年 4 月" },
        { label: "形式", value: "紙本 / PDF / 官方網站專題頁" },
        { label: "主題", value: "新的語言位置" },
      ],
      tocTitle: "目錄節選",
      toc: ["創刊宣言", "編者言：在異地重新開始寫作", "專題：新的語言位置", "小說 / 散文 / 評論節選"],
      authorTitle: "作者與參與者",
      authors: ["創辦人與編輯部成員", "旅日華文作家與評論者", "後續可替換為正式作者名單"],
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
        { label: "创刊号", href: "/issue-01" },
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
        primaryCta: "阅读创刊号",
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
          "创刊号以新的语言位置为主题，回到迁徙、创作、出版与阅读如何互相塑造的问题，也让在日生活里那些微小但真实的震动，进入文学与思想的视野。",
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
          { label: "形式", value: "纸本 / PDF / 线上介绍页" },
        ],
        tocTitle: "精选目录",
        toc: ["编者言：在异地重新开始写作", "专题：新的语言位置", "小说与散文节选", "评论：跨文化阅读的当下"],
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
      audienceTitle: "面向读者",
      audienceBody: "包括关注文学、思想、亚洲跨境经验与当代华文写作的读者，也包括海外华人与日本文化圈之间的对话者。",
      futureTitle: "未来方向",
      futureBody: "首版官网先承接创刊与品牌展示，后续可平滑扩充更多期数、作者页、专栏与活动信息。",
    },
    issue: {
      seoTitle: "创刊号 | 创造新志",
      seoDescription: "查看《创造新志》2026 年 4 月创刊号的主题、目录与获取方式。",
      kicker: "Issue 01",
      title: "创刊号：新的语言位置",
      description: "2026 年 4 月创刊。以专题页方式呈现主题、目录、作者与获取入口。",
      coverTag: "创刊号",
      coverTitle: "新的\n语言位置",
      coverSubtitle: "从迁徙、写作与阅读之间，重画华文的当代感受。",
      summaryTitle: "本期简介",
      summaryBody: [
        "创刊号回到一个基础但迫切的问题：当创作发生在异地，语言是否也会被迫重新安排它的重心？",
        "本期以宣言、编者言、专题、评论与文本节选构成阅读节奏，让刊物既具有创刊的自我说明，也保有文学作品本身的开放性。",
      ],
      meta: [
        { label: "出版日期", value: "2026 年 4 月" },
        { label: "形式", value: "纸本 / PDF / 官方网站专题页" },
        { label: "主题", value: "新的语言位置" },
      ],
      tocTitle: "目录节选",
      toc: ["创刊宣言", "编者言：在异地重新开始写作", "专题：新的语言位置", "小说 / 散文 / 评论节选"],
      authorTitle: "作者与参与者",
      authors: ["创办人与编辑部成员", "旅日华文作家与评论者", "后续可替换为正式作者名单"],
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
        { label: "創刊号", href: "/issue-01" },
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
        primaryCta: "創刊号を見る",
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
          "創刊号は「新しい言語の位置」を主題とし、移動、創作、出版、読書がどのように互いを形づくるかを問い直します。",
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
          { label: "形式", value: "紙 / PDF / ウェブ特集ページ" },
        ],
        tocTitle: "目次抜粋",
        toc: ["編集者より: 異郷で書き始めること", "特集: 新しい言語の位置", "小説・随筆抜粋", "批評: 越境読書の現在"],
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
      audienceTitle: "読者像",
      audienceBody: "文学、思想、アジアの越境経験、現代華文文学に関心を持つ読者、そして海外華人と日本文化圏の対話に関わる人々です。",
      futureTitle: "今後の方向",
      futureBody: "初版サイトは創刊とブランド提示に集中し、将来的には各号、執筆者、連載、イベント情報を追加していきます。",
    },
    issue: {
      seoTitle: "創刊号 | 創造新誌",
      seoDescription: "『創造新誌』2026年4月創刊号のテーマ、目次、入手方法を案内します。",
      kicker: "Issue 01",
      title: "創刊号: 新しい言語の位置",
      description: "2026年4月創刊。テーマ、目次、執筆者、入手導線をまとめた特集ページです。",
      coverTag: "創刊号",
      coverTitle: "新しい\n言語の位置",
      coverSubtitle: "移動、執筆、読書のあいだで、華文の現在感覚を描き直す。",
      summaryTitle: "今号について",
      summaryBody: [
        "創刊号が扱うのは、異郷で創作が行われるとき、言語そのものの重心もまた組み替えられるのではないかという問いです。",
        "宣言、編集後記、特集、批評、抜粋によって、創刊号としての自己説明と文学の開放性を両立させます。",
      ],
      meta: [
        { label: "刊行日", value: "2026年4月" },
        { label: "形式", value: "紙 / PDF / 公式サイト特集ページ" },
        { label: "特集テーマ", value: "新しい言語の位置" },
      ],
      tocTitle: "目次抜粋",
      toc: ["創刊宣言", "編集者より: 異郷で書き始めること", "特集: 新しい言語の位置", "小説 / 随筆 / 批評抜粋"],
      authorTitle: "執筆者・参加者",
      authors: ["創設者と編集部", "在日華文作家・批評家", "正式な執筆者名は後で差し替え可能"],
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
        { label: "Issue 01", href: "/issue-01" },
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
        primaryCta: "Read Issue 01",
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
          { label: "Format", value: "Print / PDF / editorial landing page" },
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
      audienceTitle: "Readers",
      audienceBody: "Readers interested in literature, ideas, Asian cross-border experience, contemporary Chinese-language writing, and dialogue with Japanese cultural contexts.",
      futureTitle: "Future direction",
      futureBody: "The launch site focuses on introduction and trust. Later phases can add more issues, contributors, columns, and event information.",
    },
    issue: {
      seoTitle: "Issue 01 | Neo Creation Journal",
      seoDescription: "Explore the theme, contents, and access points for Issue 01 of Neo Creation Journal, published in April 2026.",
      kicker: "Issue 01",
      title: "Issue 01: A New Position for Language",
      description: "Launched in April 2026. A dedicated issue page with theme framing, contents, contributors, and access links.",
      coverTag: "Launch Issue",
      coverTitle: "A New\nPosition\nfor Language",
      coverSubtitle: "Redrawing contemporary Chinese-language feeling through migration, writing, and reading.",
      summaryTitle: "Issue overview",
      summaryBody: [
        "The first issue returns to a basic but urgent question: when writing happens away from its presumed center, does language itself need to be rearranged?",
        "Manifesto, editors' note, feature essays, criticism, and selected texts create a reading rhythm that is both self-introducing and open-ended.",
      ],
      meta: [
        { label: "Publication", value: "April 2026" },
        { label: "Format", value: "Print / PDF / official issue page" },
        { label: "Theme", value: "A New Position for Language" },
      ],
      tocTitle: "Selected contents",
      toc: ["Launch manifesto", "Editors' note: beginning to write from elsewhere", "Feature: a new position for language", "Selections from fiction / essays / criticism"],
      authorTitle: "Contributors",
      authors: ["Founding editor and editorial group", "Chinese-language writers and critics in Japan", "Replace with confirmed contributor list later"],
      actions: {
        pdf: "Download PDF",
        buy: "Buy print issue",
        contact: "Email the editors",
      },
    },
  },
};
