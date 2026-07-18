import type { Lang } from './config'

/**
 * UI microcopy (labels, buttons, aria text, tool chrome) for both languages.
 *
 * Long-form guide *content* lives in `src/data/*` as `Localized` values; this
 * module holds the interface strings that wrap it. The English object is the
 * canonical shape — `Strings = typeof en` — and the Arabic object must match it
 * exactly, so a missing translation is a type error.
 */

const en = {
  meta: {
    title: 'How to Learn — Your Guide to Learning How to Learn',
    description:
      'Learn how to learn. A free, friendly, science-backed guide to studying smarter — active recall, spaced repetition, focus, and beating procrastination. For students, online learners, and everyone.',
  },
  brand: 'How to Learn',
  nav: {
    primary: 'Primary',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    sources: 'Sources',
  },
  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },
  lang: {
    /** Accessible label on the switcher — it moves you to the *other* language. */
    action: 'Switch to Arabic',
  },
  hero: {
    badge: 'A free, science-backed guide',
    titleBefore: 'Learn how to ',
    titleHighlight: 'learn',
    titleAfter: '.',
    subtitle:
      'Most of us were never taught how to study. This guide shares the proven methods that help you learn faster, remember longer, and reach your goals — all in plain, simple language.',
    ctaPrimary: 'Start the guide',
    ctaSecondary: 'Open the toolkit',
    teasers: ['Active recall', 'Spaced practice', 'Interleaving'],
  },
  sections: {
    start: {
      eyebrow: 'Start Here',
      title: 'The one big idea',
      intro:
        'If you remember nothing else, remember this. It powers almost everything in this guide.',
    },
    science: {
      eyebrow: 'The Science',
      title: 'How your brain learns',
      intro: 'Understand the machine first — then every technique makes sense.',
    },
    techniques: {
      eyebrow: 'Techniques',
      title: 'The methods that actually work',
      intro:
        'These have the strongest research support. Tap any card to see what it is, why it works, how to do it, and a real example.',
    },
    traps: {
      eyebrow: 'Traps to Avoid',
      title: 'What feels like learning — but isn’t',
    },
    focus: {
      eyebrow: 'Focus',
      title: 'Focus and beat procrastination',
      intro:
        'The best method is useless if you never start, or cannot concentrate. This part is about actually doing the work.',
    },
    mindset: {
      eyebrow: 'Mindset',
      title: 'Mindset and motivation',
      intro:
        'What you believe about learning — and how you fuel and organize your effort — shapes how far you go.',
    },
    brain: {
      eyebrow: 'Brain Care',
      title: 'Fuel and rest for your brain',
      intro:
        'Your brain is a physical organ. How you sleep, move, eat, and rest directly changes how well you learn.',
    },
    plan: {
      eyebrow: 'Study Plan',
      title: 'Put it all together',
      intro:
        'Turn the proven methods into a simple routine you can actually follow.',
    },
    toolkit: {
      eyebrow: 'Toolkit',
      title: 'Try it right now',
      intro:
        'Reading about learning is not learning. Use these free, hands-on tools to practice the methods — your progress saves right here on your device.',
    },
    summary: {
      eyebrow: 'Cheat Sheet',
      title: 'The whole guide in one screen',
      intro:
        'Save this. It is everything above, boiled down to what you actually do.',
    },
    sources: {
      eyebrow: 'Sources',
      title: 'Proven, not made up',
      intro:
        'Every claim in this guide rests on real research. Explore the books, studies, and free tools behind it.',
    },
  },
  startHere: {
    goldenRule: 'The golden rule:',
    superTitle: 'The 3 super-strategies',
    superIntro: 'Everything else in the guide builds on these three.',
  },
  cheatSheet: {
    closingA:
      'If studying feels a little hard in the right way, it is probably working.',
    closingB: 'If it feels easy and comfortable, be suspicious.',
  },
  card: {
    whyItWorks: 'Why it works',
    howToDoIt: 'How to do it',
    realExample: 'Real example',
    commonMistakes: 'Common mistakes',
    feelsLike: 'Feels like',
    theTruth: 'The truth',
    doThisInstead: 'Do this instead: ',
  },
  footer: {
    description:
      'A free, friendly guide to learning how to learn — built on proven, science-backed methods. Study smarter, remember longer, and reach your goals.',
    grounded: 'Grounded in cited research',
    guideHeading: 'The guide',
    moreHeading: 'More',
    ariaGuide: 'Guide sections',
    ariaMore: 'More',
    moreLinks: [
      { id: 'traps', label: 'Traps to Avoid' },
      { id: 'plan', label: 'Study Plan' },
      { id: 'sources', label: 'Sources' },
    ],
    disclaimer:
      'Built as a free learning resource. This is general education, not medical or professional advice.',
    tagline: 'Learn how to learn — then learn anything.',
  },
  backToTop: 'Back to top',
  common: {
    savedOnDevice: 'Saved on this device.',
  },
  tools: {
    pomodoro: {
      modeShort: { focus: 'Focus', short: 'Short', long: 'Long' },
      modeFull: { focus: 'Focus', short: 'Short break', long: 'Long break' },
      minutesHint: 'Minutes per phase (1–90).',
      minutesUnit: 'minutes',
      ariaMode: 'Timer mode',
      ariaSettings: 'Timer settings',
      start: 'Start',
      pause: 'Pause',
      ariaStart: 'Start timer',
      ariaPause: 'Pause timer',
      ariaReset: 'Reset timer',
      today: 'Today',
      resetCount: 'Reset count',
    },
    flashcards: {
      question: 'Question',
      answer: 'Answer',
      flipHint: 'Tap or press Space to flip',
      card: 'Card',
      known: 'Known',
      reviewAgain: 'Review again',
      gotIt: 'Got it',
      prev: 'Prev',
      next: 'Next',
      ariaPrev: 'Previous card',
      ariaNext: 'Next card',
      ariaShowQuestion: 'Show question',
      ariaShowAnswer: 'Show answer',
      ariaProgress: 'Deck progress',
      complete: 'Deck complete!',
      markedBefore: 'You marked',
      markedMid: 'of',
      markedAfter: 'cards as known.',
      perfect: 'Perfect recall — spaced review will lock it in.',
      tryAgain: 'Retrieval beats re-reading. Run it again to close the gaps.',
      restart: 'Restart deck',
    },
    spaced: {
      title: 'Spaced review planner',
      subtitle: 'Six well-timed reviews to beat the forgetting curve.',
      defaultTopic: 'Chapter 5: Photosynthesis',
      topic: 'Topic',
      topicPlaceholder: 'What are you learning?',
      startDate: 'Start date',
      chartTitle: 'How spacing flattens forgetting',
      chartAlt:
        'Chart comparing memory decay without review versus a saw-tooth curve that stays high with spaced review.',
      axisMemory: 'Memory',
      axisTime: 'Time →',
      legendWith: 'With spaced review',
      legendWithout: 'Without review',
      planningBefore: 'Planning reviews for',
      yourTopic: 'your topic',
    },
    habits: {
      title: 'Daily study habits',
      subtitle: 'Small habits, compounded daily.',
      today: 'Today',
      ariaList: "Today's habits",
      allDone: 'Great day of learning! 🎉',
      firstHabit: 'Check off your first habit to get started.',
      /** e.g. "3 to go — you’ve got this." */
      toGo: (n: number) => `${n} to go — you’ve got this.`,
      /** Streak label with correct pluralization. */
      days: (n: number) => `${n} day${n === 1 ? '' : 's'}`,
    },
  },
}

export type Strings = typeof en

/**
 * Arabic (Modern Standard Arabic / فُصحى). Warm, clear, classical — the register
 * of well-dubbed educational Arabic. Western digits are used throughout for
 * visual consistency with the interactive tools.
 */
const ar: Strings = {
  meta: {
    title: 'كيف تتعلَّم — دليلك إلى تعلُّم كيفيّة التعلُّم',
    description:
      'تعلَّم كيف تتعلَّم. دليلٌ مجّانيّ ودودٌ قائمٌ على العِلم للدراسة بذكاء: الاستدعاء النشط، والمراجعة المتباعدة، والتركيز، والتغلُّب على التسويف. للطلاب والمتعلّمين عبر الإنترنت وكلّ إنسان.',
  },
  brand: 'كيف تتعلَّم',
  nav: {
    primary: 'التنقّل الرئيسي',
    openMenu: 'افتح القائمة',
    closeMenu: 'أغلِق القائمة',
    sources: 'المصادر',
  },
  theme: {
    toLight: 'التبديل إلى الوضع الفاتح',
    toDark: 'التبديل إلى الوضع الداكن',
  },
  lang: {
    action: 'التبديل إلى الإنجليزية',
  },
  hero: {
    badge: 'دليلٌ مجّانيّ قائمٌ على العِلم',
    titleBefore: 'تعلَّم كيف ',
    titleHighlight: 'تتعلَّم',
    titleAfter: '',
    subtitle:
      'معظمنا لم يتعلَّم يومًا كيف يدرس. يشارك هذا الدليل الطرائق المُثبَتة التي تساعدك على التعلُّم أسرع، وتذكُّر ما تعلَّمتَه لوقتٍ أطول، وبلوغ أهدافك — بلغةٍ بسيطةٍ وواضحة.',
    ctaPrimary: 'ابدأ الدليل',
    ctaSecondary: 'افتح صندوق الأدوات',
    teasers: ['الاستدعاء النشط', 'المراجعة المتباعدة', 'المزج بين المواضيع'],
  },
  sections: {
    start: {
      eyebrow: 'ابدأ من هنا',
      title: 'الفكرة الكبرى الوحيدة',
      intro:
        'إن لم تتذكَّر شيئًا آخر، فتذكَّر هذه؛ فهي تُحرِّك كلّ ما في هذا الدليل تقريبًا.',
    },
    science: {
      eyebrow: 'العِلم',
      title: 'كيف يتعلَّم دماغك',
      intro: 'افهَمِ الآلة أوّلًا، وعندئذٍ سيصير لكلّ تقنيةٍ معنى.',
    },
    techniques: {
      eyebrow: 'التقنيات',
      title: 'الطرائق التي تنجح فعلًا',
      intro:
        'هذه الطرائق تحظى بأقوى سندٍ بحثيّ. انقُر أيّ بطاقة لترى ما هي، ولماذا تنجح، وكيف تطبِّقها، ومثالًا واقعيًّا.',
    },
    traps: {
      eyebrow: 'مصائدُ ينبغي تجنُّبها',
      title: 'ما يبدو تعلُّمًا... وليس كذلك',
    },
    focus: {
      eyebrow: 'التركيز',
      title: 'ركِّز وتغلَّب على التسويف',
      intro:
        'أفضل طريقةٍ لا قيمة لها إن لم تبدأ أصلًا أو عجزتَ عن التركيز. هذا الجزء عن إنجاز العمل فعلًا.',
    },
    mindset: {
      eyebrow: 'العقليّة',
      title: 'العقليّة والدافعيّة',
      intro:
        'ما تؤمن به عن التعلُّم — وكيف تُغذّي جهدك وتنظّمه — يُحدِّد إلى أيّ مدًى تصل.',
    },
    brain: {
      eyebrow: 'العناية بالدماغ',
      title: 'غذاءٌ وراحةٌ لدماغك',
      intro:
        'دماغك عضوٌ مادّيّ. فطريقة نومك وحركتك وطعامك وراحتك تُغيِّر مباشرةً مدى جودة تعلُّمك.',
    },
    plan: {
      eyebrow: 'خطّة الدراسة',
      title: 'اجمَع كلّ ذلك معًا',
      intro: 'حوِّل الطرائق المُثبَتة إلى روتينٍ بسيطٍ يمكنك الالتزام به فعلًا.',
    },
    toolkit: {
      eyebrow: 'صندوق الأدوات',
      title: 'جرِّبها الآن',
      intro:
        'القراءة عن التعلُّم ليست تعلُّمًا. استخدِم هذه الأدوات المجّانية والتطبيقيّة لتتمرَّن على الطرائق — ويُحفَظ تقدُّمك هنا على جهازك.',
    },
    summary: {
      eyebrow: 'ورقة الملخّص',
      title: 'الدليل كلّه في شاشةٍ واحدة',
      intro: 'احتفِظ بها؛ فهي كلّ ما سبق مُختصَرًا إلى ما تفعله فعلًا.',
    },
    sources: {
      eyebrow: 'المصادر',
      title: 'مُثبَتٌ لا مُختلَق',
      intro:
        'كلّ ادّعاءٍ في هذا الدليل يستند إلى بحثٍ حقيقيّ. استكشِف الكتب والدراسات والأدوات المجّانية التي يقوم عليها.',
    },
  },
  startHere: {
    goldenRule: 'القاعدة الذهبيّة:',
    superTitle: 'الاستراتيجيّات الخارقة الثلاث',
    superIntro: 'كلّ ما تبقّى في الدليل يُبنى على هذه الثلاث.',
  },
  cheatSheet: {
    closingA:
      'إذا شعرتَ أنّ الدراسة صعبةٌ قليلًا بالطريقة الصحيحة، فهي على الأرجح تنجح.',
    closingB: 'وإذا شعرتَ أنّها سهلةٌ ومريحة، فارتَبْ في الأمر.',
  },
  card: {
    whyItWorks: 'لماذا تنجح',
    howToDoIt: 'كيف تطبِّقها',
    realExample: 'مثالٌ واقعيّ',
    commonMistakes: 'أخطاءٌ شائعة',
    feelsLike: 'تبدو وكأنّها',
    theTruth: 'الحقيقة',
    doThisInstead: 'افعَل هذا بدلًا منها: ',
  },
  footer: {
    description:
      'دليلٌ مجّانيّ وودودٌ لتعلُّم كيفيّة التعلُّم — مبنيٌّ على طرائق مُثبَتة قائمة على العِلم. ادرُس بذكاء، وتذكَّر لوقتٍ أطول، وابلُغ أهدافك.',
    grounded: 'مؤصَّلٌ ببحوثٍ موثَّقة',
    guideHeading: 'الدليل',
    moreHeading: 'المزيد',
    ariaGuide: 'أقسام الدليل',
    ariaMore: 'روابط إضافيّة',
    moreLinks: [
      { id: 'traps', label: 'مصائدُ ينبغي تجنُّبها' },
      { id: 'plan', label: 'خطّة الدراسة' },
      { id: 'sources', label: 'المصادر' },
    ],
    disclaimer:
      'أُنشئ كموردٍ تعليميٍّ مجّانيّ. هذا تثقيفٌ عامّ، وليس نصيحةً طبّيّةً أو مهنيّة.',
    tagline: 'تعلَّم كيف تتعلَّم، ثمّ تعلَّم أيّ شيء.',
  },
  backToTop: 'العودة إلى الأعلى',
  common: {
    savedOnDevice: 'محفوظٌ على هذا الجهاز.',
  },
  tools: {
    pomodoro: {
      modeShort: { focus: 'تركيز', short: 'قصيرة', long: 'طويلة' },
      modeFull: {
        focus: 'تركيز',
        short: 'استراحةٌ قصيرة',
        long: 'استراحةٌ طويلة',
      },
      minutesHint: 'الدقائق لكلّ مرحلة (1–90).',
      minutesUnit: 'بالدقائق',
      ariaMode: 'وضع المؤقّت',
      ariaSettings: 'إعدادات المؤقّت',
      start: 'ابدأ',
      pause: 'إيقافٌ مؤقّت',
      ariaStart: 'تشغيل المؤقّت',
      ariaPause: 'إيقاف المؤقّت مؤقّتًا',
      ariaReset: 'إعادة ضبط المؤقّت',
      today: 'اليوم',
      resetCount: 'تصفير العدّاد',
    },
    flashcards: {
      question: 'سؤال',
      answer: 'إجابة',
      flipHint: 'انقُر أو اضغط المسافة للقلب',
      card: 'بطاقة',
      known: 'المُتقَنة',
      reviewAgain: 'راجِعها مجدَّدًا',
      gotIt: 'أتقنتُها',
      prev: 'السابقة',
      next: 'التالية',
      ariaPrev: 'البطاقة السابقة',
      ariaNext: 'البطاقة التالية',
      ariaShowQuestion: 'إظهار السؤال',
      ariaShowAnswer: 'إظهار الإجابة',
      ariaProgress: 'تقدُّم المجموعة',
      complete: 'اكتملت المجموعة!',
      markedBefore: 'أتقنتَ',
      markedMid: 'من أصل',
      markedAfter: 'بطاقة.',
      perfect: 'استدعاءٌ مثاليّ — والمراجعة المتباعدة ستُرسِّخه.',
      tryAgain: 'الاستدعاء أفضل من إعادة القراءة. أعِدها لسدِّ الثغرات.',
      restart: 'أعِدِ المجموعة',
    },
    spaced: {
      title: 'مُخطِّط المراجعة المتباعدة',
      subtitle: 'ستُّ مراجعاتٍ مُحكَمةِ التوقيت لهزيمة منحنى النسيان.',
      defaultTopic: 'الفصل 5: البناء الضوئيّ',
      topic: 'الموضوع',
      topicPlaceholder: 'ماذا تتعلَّم؟',
      startDate: 'تاريخ البدء',
      chartTitle: 'كيف تُسطِّح المباعدةُ منحنى النسيان',
      chartAlt:
        'رسمٌ بيانيّ يقارن بين تلاشي الذاكرة دون مراجعة، ومنحنًى مُسنَّنٍ يبقى مرتفعًا مع المراجعة المتباعدة.',
      axisMemory: 'الذاكرة',
      axisTime: '← الزمن',
      legendWith: 'مع مراجعةٍ متباعدة',
      legendWithout: 'دون مراجعة',
      planningBefore: 'جدولة مراجعاتٍ لـ',
      yourTopic: 'موضوعك',
    },
    habits: {
      title: 'عادات الدراسة اليوميّة',
      subtitle: 'عاداتٌ صغيرة، تتراكم يومًا بعد يوم.',
      today: 'اليوم',
      ariaList: 'عادات اليوم',
      allDone: 'يومٌ رائعٌ من التعلُّم! 🎉',
      firstHabit: 'علِّم أوّل عادةٍ لك لتبدأ.',
      toGo: (n: number) => `بقي ${n} — أنت قادرٌ على ذلك.`,
      days: (n: number) => {
        if (n === 0) return '0 يوم'
        if (n === 1) return 'يومٌ واحد'
        if (n === 2) return 'يومان'
        if (n >= 3 && n <= 10) return `${n} أيّام`
        return `${n} يومًا`
      },
    },
  },
}

export const STRINGS: Record<Lang, Strings> = { en, ar }
