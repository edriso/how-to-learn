import type { LucideIcon } from 'lucide-react'
import type { Localized } from '@/i18n/config'
import type { Accent } from './accents'
import {
  Apple,
  BellOff,
  Blocks,
  BookOpen,
  Boxes,
  Brain,
  CalendarClock,
  CalendarDays,
  CalendarRange,
  ClipboardCheck,
  Coffee,
  Dumbbell,
  Flag,
  Focus,
  Gauge,
  GraduationCap,
  HeartPulse,
  Highlighter,
  Hourglass,
  Images,
  Layers,
  Lightbulb,
  Moon,
  Network,
  NotebookPen,
  Repeat,
  Route,
  Shapes,
  Shuffle,
  Speech,
  Sprout,
  Timer,
  TrendingDown,
  Zap,
} from 'lucide-react'

/**
 * All long-form guide content lives here as `Localized` values (English +
 * Modern Standard Arabic). Structural fields (icon, accent, id) are shared;
 * only the reader-facing text is translated. Components resolve the active
 * language with the `l()` helper from the i18n context.
 */

export interface Concept {
  id: string
  icon: LucideIcon
  accent: Accent
  title: Localized<string>
  oneLiner: Localized<string>
  body: Localized<string>
  analogy?: Localized<string>
}

export type TechTier = 'top' | 'strong' | 'boost'

export interface Technique {
  id: string
  icon: LucideIcon
  accent: Accent
  name: Localized<string>
  tagline: Localized<string>
  tier: TechTier
  utility: Localized<string>
  what: Localized<string>
  why: Localized<string>
  steps: Localized<string[]>
  example: Localized<string>
  mistakes: Localized<string[]>
}

export interface Trap {
  id: string
  icon: LucideIcon
  name: Localized<string>
  feelsLike: Localized<string>
  truth: Localized<string>
  instead: Localized<string>
}

export interface Strategy {
  id: string
  icon: LucideIcon
  accent: Accent
  title: Localized<string>
  short: Localized<string>
  detail: Localized<string>
}

export interface Tip {
  id: string
  icon: LucideIcon
  accent: Accent
  title: Localized<string>
  oneLiner: Localized<string>
  body: Localized<string>
  steps?: Localized<string[]>
  example?: Localized<string>
  note?: Localized<string>
}

/* ------------------------------------------------------------------ */
/*  The Big Idea + the 3 super-strategies                              */
/* ------------------------------------------------------------------ */

export const BIG_IDEA: {
  quote: Localized<string>
  body: Localized<string>
  rule: Localized<string>
} = {
  quote: {
    en: 'Learning is not about putting information in. It is about pulling information out.',
    ar: 'التعلُّم ليس إدخال المعلومات إلى رأسك، بل إخراجها منه.',
  },
  body: {
    en: 'Most people study by reading things again and again. It feels like learning — but it mostly is not. Real learning happens when your brain has to work to remember something. That "good struggle" is called a desirable difficulty. If studying feels too easy, you are probably not learning much.',
    ar: 'يدرس معظم الناس بقراءة الأشياء مرارًا وتكرارًا. يبدو ذلك تعلُّمًا، لكنه في الغالب ليس كذلك. التعلُّم الحقيقيّ يحدث حين يُضطرّ دماغك إلى بذل جهدٍ ليتذكَّر شيئًا. هذا «الكدُّ المفيد» يُسمّى الصعوبة المرغوبة. وإذا بدت الدراسة سهلةً أكثر من اللازم، فأنت على الأرجح لا تتعلَّم كثيرًا.',
  },
  rule: {
    en: 'Make it a little bit hard, in the right way.',
    ar: 'اجعَلها صعبةً قليلًا، بالطريقة الصحيحة.',
  },
}

export const SUPER_STRATEGIES: Strategy[] = [
  {
    id: 'recall',
    icon: Brain,
    accent: 'violet',
    title: { en: 'Pull, don’t just push', ar: 'اسحَب، لا تدفَع فقط' },
    short: {
      en: 'Test yourself instead of rereading.',
      ar: 'اختبِر نفسك بدلًا من إعادة القراءة.',
    },
    detail: {
      en: 'Close the book and try to remember. Pulling an answer out of your head builds far stronger memory than putting it in again.',
      ar: 'أغلِق الكتاب وحاوِل أن تتذكَّر. سحبُ الإجابة من رأسك يبني ذاكرةً أقوى بكثيرٍ من إعادة إدخالها.',
    },
  },
  {
    id: 'space',
    icon: CalendarClock,
    accent: 'sky',
    title: { en: 'Spread it out', ar: 'وزِّعها على الأيّام' },
    short: {
      en: 'Study in small doses over many days.',
      ar: 'ادرُس جرعاتٍ صغيرةً على مدى أيّامٍ كثيرة.',
    },
    detail: {
      en: 'The same total time works much better when it is split across days instead of crammed into one long session. Let a little forgetting happen, then review.',
      ar: 'الوقت الإجماليّ نفسه يعمل أفضل بكثيرٍ حين يُوزَّع على أيّامٍ بدل حشره في جلسةٍ واحدةٍ طويلة. دَعْ نسيانًا يسيرًا يحدث، ثم راجِع.',
    },
  },
  {
    id: 'mix',
    icon: Shuffle,
    accent: 'amber',
    title: { en: 'Mix it up', ar: 'امزُج بينها' },
    short: {
      en: 'Practice different topics together.',
      ar: 'تمرَّن على مواضيع مختلفةٍ معًا.',
    },
    detail: {
      en: 'Jumping between related topics forces your brain to choose the right method each time. It feels harder, but it builds flexible, lasting skill.',
      ar: 'الانتقال بين مواضيع مترابطةٍ يُجبر دماغك على اختيار الطريقة الصحيحة كلّ مرّة. يبدو ذلك أصعب، لكنه يبني مهارةً مرنةً وثابتة.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 1 — How your brain learns                                     */
/* ------------------------------------------------------------------ */

export const SCIENCE: Concept[] = [
  {
    id: 'memory-steps',
    icon: Route,
    accent: 'violet',
    title: { en: 'The 3 steps of memory', ar: 'خطوات الذاكرة الثلاث' },
    oneLiner: {
      en: 'Take it in, keep it, get it back out.',
      ar: 'أدخِلها، واحفَظها، ثم أخرِجها.',
    },
    body: {
      en: 'Memory has three jobs: encoding (taking information in), storage (keeping it), and retrieval (getting it back out). Most people only practice step one. But the step that builds strong memory is getting it back out — and you have to practice that on purpose.',
      ar: 'للذاكرة ثلاث وظائف: الترميز (إدخال المعلومة)، والتخزين (حفظها)، والاستدعاء (إخراجها). معظم الناس يتمرَّنون على الخطوة الأولى فقط. لكن الخطوة التي تبني ذاكرةً قويّة هي إخراجها — وعليك أن تتمرَّن على ذلك عن قصد.',
    },
    analogy: {
      en: 'Memory is like a path in a forest. Each time you walk it (each time you recall), the path gets clearer. Never walk it, and the grass grows back.',
      ar: 'الذاكرة كدربٍ في غابة. كلّما سِرتَ فيه (كلّما استدعيتَ) صار أوضح. وإن لم تسِر فيه أبدًا، نما العشب وغطّاه.',
    },
  },
  {
    id: 'forgetting-curve',
    icon: TrendingDown,
    accent: 'rose',
    title: { en: 'The forgetting curve', ar: 'منحنى النسيان' },
    oneLiner: {
      en: 'You forget fast — unless you review.',
      ar: 'تنسى بسرعة... ما لم تُراجِع.',
    },
    body: {
      en: 'In 1885 Hermann Ebbinghaus showed we forget new things quickly at first, then more slowly. Your brain clears out what it thinks you do not need. The fix: every time you review (especially by testing yourself), the curve gets flatter and the memory lasts longer.',
      ar: 'في عام 1885 أظهر هيرمان إبنغهاوس أنّنا ننسى الأشياء الجديدة بسرعةٍ في البداية، ثم ببطءٍ أكثر. دماغك يتخلّص ممّا يظنّ أنّك لا تحتاجه. والحلّ: كلّما راجعتَ (خصوصًا باختبار نفسك) صار المنحنى أكثر تسطُّحًا وبقيت الذاكرة أطول.',
    },
    analogy: {
      en: 'Reviewed at the right times — a day later, a few days later, a week later — a memory can last for months instead of hours.',
      ar: 'إذا رُوجِعت في الأوقات المناسبة — بعد يوم، ثم بعد أيّامٍ قليلة، ثم بعد أسبوع — فقد تدوم الذاكرة شهورًا بدل ساعات.',
    },
  },
  {
    id: 'working-memory',
    icon: Layers,
    accent: 'indigo',
    title: {
      en: 'Working vs long-term memory',
      ar: 'الذاكرة العاملة مقابل بعيدة المدى',
    },
    oneLiner: { en: 'Tiny desk, huge warehouse.', ar: 'مكتبٌ صغير، ومستودعٌ ضخم.' },
    body: {
      en: 'Working memory is the small space where you think right now — it holds only about 4 new items at once. Long-term memory is your huge storage. Learning means moving things from the tiny desk to the big warehouse, a little at a time.',
      ar: 'الذاكرة العاملة هي المساحة الصغيرة التي تفكّر فيها الآن — تتّسع لنحو 4 عناصر جديدةٍ فقط في آنٍ واحد. أمّا الذاكرة بعيدة المدى فهي مخزنك الهائل. والتعلُّم هو نقل الأشياء من المكتب الصغير إلى المستودع الكبير، قليلًا قليلًا.',
    },
    analogy: {
      en: 'Push too much in at once and it overflows, like too many browser tabs freezing your computer. Distractions steal this space too.',
      ar: 'ادفَع أكثر من اللازم دفعةً واحدة فتفيض، كتبويباتٍ كثيرةٍ تُجمِّد حاسوبك. والمُشتِّتات تسرق هذه المساحة أيضًا.',
    },
  },
  {
    id: 'chunking',
    icon: Boxes,
    accent: 'teal',
    title: { en: 'Chunking', ar: 'التقطيع (التجميع)' },
    oneLiner: {
      en: 'Group small pieces into big ones.',
      ar: 'اجمَع القطع الصغيرة في قطعةٍ كبيرة.',
    },
    body: {
      en: 'A "chunk" is small bits joined into one meaningful unit. "C-A-T" is three items, but "CAT" is one. Experts see big chunks where beginners see many small pieces. Building chunks is how you build skill.',
      ar: '«القطعة» أجزاءٌ صغيرةٌ تندمج في وحدةٍ واحدةٍ ذات معنى. «ق-ل-م» ثلاثة عناصر، لكن «قلم» عنصرٌ واحد. الخبراء يرون قطعًا كبيرةً حيث يرى المبتدئ قطعًا صغيرةً كثيرة. وبناء القطع هو كيف تبني المهارة.',
    },
    analogy: {
      en: 'A guitarist learns one chord, then a change, then a verse — small chunks joined into a whole song played without thinking.',
      ar: 'يتعلَّم عازف الغيتار تآلُفًا واحدًا، ثم الانتقال بين تآلُفين، ثم مقطعًا — قِطعٌ صغيرةٌ تندمج في أغنيةٍ كاملةٍ تُعزَف بلا تفكير.',
    },
  },
  {
    id: 'focused-diffuse',
    icon: Lightbulb,
    accent: 'amber',
    title: {
      en: 'Focused vs diffuse mode',
      ar: 'النمط المركَّز مقابل المُنتشِر',
    },
    oneLiner: {
      en: 'Two gears: sharp focus and relaxed wandering.',
      ar: 'تِرْسان: تركيزٌ حادّ، وشرودٌ مُسترخٍ.',
    },
    body: {
      en: 'Focused mode is tight concentration — great for studying. Diffuse mode is a relaxed, wandering state that happens on a walk or in the shower, quietly connecting ideas. Hard problems often need both. That is why answers "pop" when you stop trying.',
      ar: 'النمط المركَّز تركيزٌ مُحكَم — رائعٌ للدراسة. أمّا النمط المُنتشِر فحالةٌ مُسترخيةٌ شاردة تحدث أثناء المشي أو تحت الدُّش، تربط الأفكار في هدوء. المسائل الصعبة كثيرًا ما تحتاج كليهما. لذلك «تقفز» الإجابات حين تتوقّف عن المحاولة.',
    },
    analogy: {
      en: 'Stuck for 30 minutes? A phone-free walk lets diffuse mode solve it in the background. Stepping away is a real strategy, not laziness.',
      ar: 'عالقٌ منذ 30 دقيقة؟ نزهةٌ بلا هاتفٍ تدَع النمط المُنتشِر يحلّها في الخلفيّة. الابتعاد استراتيجيّةٌ حقيقيّة، لا كسل.',
    },
  },
  {
    id: 'cognitive-load',
    icon: Gauge,
    accent: 'orange',
    title: { en: 'Cognitive load', ar: 'الحِمل المعرفيّ' },
    oneLiner: {
      en: 'Remove clutter so your brain can focus.',
      ar: 'أزِل الفوضى ليتفرّغ دماغك للتركيز.',
    },
    body: {
      en: 'Learning gets harder when working memory is overloaded. Some load is the topic itself; some is useless extra difficulty from messy materials and distractions. Cut the junk so your brain can spend its energy on the ideas that matter.',
      ar: 'يصعُب التعلُّم حين تُثقَل الذاكرة العاملة. بعض الحِمل من الموضوع نفسه، وبعضه صعوبةٌ زائدةٌ لا فائدة منها تأتي من موادَّ فوضويّةٍ ومُشتِّتات. اقطَع الزوائد ليصرف دماغك طاقته على الأفكار المهمّة.',
    },
    analogy: {
      en: 'Feeling lost often is not "I’m not smart enough" — it is an overloaded desk. Simplify the material and it becomes learnable.',
      ar: 'الشعور بالضياع كثيرًا ليس «لستُ ذكيًّا بما يكفي» — بل مكتبٌ مُثقَل. بسِّطِ المادّة تُصبح قابلةً للتعلُّم.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 2 — The highest-impact techniques                            */
/* ------------------------------------------------------------------ */

export const TECHNIQUES: Technique[] = [
  {
    id: 'active-recall',
    icon: Brain,
    accent: 'violet',
    name: { en: 'Active recall', ar: 'الاستدعاء النشط' },
    tagline: {
      en: 'Test yourself from memory — the strongest way to learn.',
      ar: 'اختبِر نفسك من الذاكرة — أقوى طريقةٍ للتعلُّم.',
    },
    tier: 'top',
    utility: { en: 'Highest impact', ar: 'الأعلى أثرًا' },
    what: {
      en: 'Try to remember information from your own head, without looking. Close the book and ask, "What do I remember?" Then check.',
      ar: 'حاوِل أن تتذكَّر المعلومة من رأسك دون أن تنظر. أغلِق الكتاب واسأل: «ماذا أتذكَّر؟» ثم تحقَّق.',
    },
    why: {
      en: 'The struggle to pull a memory out strengthens it. In Roediger & Karpicke’s classic study, students who tested themselves remembered far more a week later than students who reread — even though rereading felt easier. Testing does not just measure learning; it causes it.',
      ar: 'الكدُّ في سحب الذاكرة يُقوّيها. في دراسة روديغر وكاربيك الكلاسيكيّة، تذكَّر الطلاب الذين اختبروا أنفسهم أكثر بكثيرٍ بعد أسبوعٍ من الذين أعادوا القراءة — مع أنّ إعادة القراءة بدت أسهل. الاختبار لا يقيس التعلُّم فحسب؛ بل يُحدِثه.',
    },
    steps: {
      en: [
        'Read or watch the material once, with full attention.',
        'Close it and look away.',
        'Write down everything you remember, or answer a question from memory (a "brain dump").',
        'Now check your notes and see what you missed.',
        'Focus the next round on what you got wrong. Repeat over several days.',
      ],
      ar: [
        'اقرأ المادّة أو شاهِدها مرّةً بانتباهٍ كامل.',
        'أغلِقها واصرِف بصرك عنها.',
        'اكتُب كلّ ما تتذكَّره، أو أجِب عن سؤالٍ من الذاكرة («تفريغٌ ذهنيّ»).',
        'الآن راجِع ملاحظاتك وانظُر ما الذي فاتك.',
        'ركِّز الجولة التالية على ما أخطأتَ فيه. وكرِّر على مدى أيّام.',
      ],
    },
    example: {
      en: 'Leo reads a biology chapter once, then closes the book and writes what he recalls. He forgot the steps of photosynthesis, so he looks them up and tries again. On test day the material comes back easily — he practiced getting it out.',
      ar: 'يقرأ ليث فصلًا في الأحياء مرّةً، ثم يُغلق الكتاب ويكتب ما يتذكَّره. نسِيَ خطوات البناء الضوئيّ، فيبحث عنها ويحاول مجدَّدًا. يوم الاختبار تعود المادّة بسهولة — لأنه تمرَّن على إخراجها.',
    },
    mistakes: {
      en: [
        'Peeking too early. If you look before really trying, your brain does no work.',
        'Confusing recognizing ("yes, I’ve seen this") with recalling (producing it from memory).',
        'Testing only once. Several spaced tests are far better than one.',
      ],
      ar: [
        'الاختلاس مبكّرًا. إن نظرتَ قبل أن تحاول حقًّا، فلن يبذل دماغك جهدًا.',
        'الخلط بين التعرُّف («نعم، رأيتُ هذا») والاستدعاء (إنتاجه من الذاكرة).',
        'الاختبار مرّةً واحدة. عدّة اختباراتٍ متباعدةٍ أفضل بكثيرٍ من واحد.',
      ],
    },
  },
  {
    id: 'spaced-repetition',
    icon: CalendarDays,
    accent: 'sky',
    name: { en: 'Spaced repetition', ar: 'المراجعة المتباعدة' },
    tagline: {
      en: 'Spread study over days — small doses beat one big cram.',
      ar: 'وزِّع الدراسة على أيّام — الجرعات الصغيرة تغلب الحشو الكبير.',
    },
    tier: 'top',
    utility: { en: 'Highest impact', ar: 'الأعلى أثرًا' },
    what: {
      en: 'Split your study into several short sessions across days and weeks, instead of one long block. Study today, review in a few days, again next week, and so on.',
      ar: 'قسِّم دراستك إلى عدّة جلساتٍ قصيرةٍ عبر أيّامٍ وأسابيع، بدل جلسةٍ واحدةٍ طويلة. ادرُس اليوم، وراجِع بعد أيّامٍ قليلة، ثم في الأسبوع التالي، وهكذا.',
    },
    why: {
      en: 'The spacing effect is one of the most reliable findings in psychology. Letting a memory fade a little and then reviving it strengthens it more than never letting it fade. For the same total time, spaced study clearly beats cramming for long-term memory.',
      ar: 'أثر المباعدة من أكثر النتائج ثباتًا في علم النفس. أن تدَع الذاكرة تخبو قليلًا ثم تُحييها يُقوّيها أكثر من ألّا تدعها تخبو أبدًا. وللوقت الإجماليّ نفسه، تغلب الدراسة المتباعدة الحشوَ بوضوحٍ في الذاكرة بعيدة المدى.',
    },
    steps: {
      en: [
        'Break study into small sessions instead of one big block.',
        'Learn a topic today.',
        'Review it after about 1 day, then 3 days, then a week.',
        'Keep going: 2 weeks, then a month. Grow the gap each time.',
        'Let an app like Anki schedule the reviews for you automatically.',
      ],
      ar: [
        'قسِّم الدراسة إلى جلساتٍ صغيرةٍ بدل كتلةٍ واحدةٍ كبيرة.',
        'تعلَّم موضوعًا اليوم.',
        'راجِعه بعد يومٍ تقريبًا، ثم بعد 3 أيّام، ثم بعد أسبوع.',
        'واصِل: أسبوعان، ثم شهر. وسِّع الفجوة كلّ مرّة.',
        'دَع تطبيقًا مثل Anki يجدوِل المراجعات تلقائيًّا.',
      ],
    },
    example: {
      en: 'Nadia has three weeks before an exam. Instead of 9 hours the night before, she studies 45 minutes a day and revisits old topics. Same hours, spread out — she remembers far more and sleeps well before the test.',
      ar: 'أمام نادية ثلاثة أسابيع قبل الامتحان. بدل 9 ساعاتٍ ليلة الامتحان، تدرُس 45 دقيقةً يوميًّا وتعود إلى المواضيع القديمة. الساعات نفسها، لكنها موزَّعة — فتتذكَّر أكثر بكثيرٍ وتنام جيّدًا قبل الاختبار.',
    },
    mistakes: {
      en: [
        'Cramming: one long session that fades fast.',
        'Reviewing with no gap — if nothing was forgotten, there is little to strengthen.',
        'No plan. Without a simple schedule, "review later" becomes "never".',
      ],
      ar: [
        'الحشو: جلسةٌ واحدةٌ طويلةٌ تخبو بسرعة.',
        'المراجعة بلا فجوة — إن لم يُنسَ شيء، فليس هناك ما يُقوّى.',
        'بلا خطّة. دون جدولٍ بسيط، تصير «راجِع لاحقًا» «لن تراجِع أبدًا».',
      ],
    },
  },
  {
    id: 'interleaving',
    icon: Shuffle,
    accent: 'amber',
    name: { en: 'Interleaving', ar: 'المزج بين المواضيع' },
    tagline: {
      en: 'Mix related topics instead of one at a time.',
      ar: 'امزُج مواضيع مترابطةً بدل واحدٍ تلو الآخر.',
    },
    tier: 'strong',
    utility: { en: 'Strong — great for math', ar: 'قويّة — ممتازةٌ للرياضيّات' },
    what: {
      en: 'Mix different topics or problem types in one session, instead of finishing all of A before starting B. Blocked: A A A, B B B. Interleaved: A B C, B C A.',
      ar: 'امزُج مواضيع أو أنواع مسائل مختلفةً في الجلسة الواحدة، بدل إنهاء «أ» كلّها قبل بدء «ب». مُكتَّل: أ أ أ، ب ب ب. ممزوج: أ ب ج، ب ج أ.',
    },
    why: {
      en: 'Mixing forces your brain to ask "what kind of problem is this?" each time — a desirable difficulty that builds flexible skill. In Rohrer & Taylor’s study, interleaved practice scored about twice as high on a next-day test, even though it felt harder during practice.',
      ar: 'المزج يُجبر دماغك على أن يسأل «ما نوع هذه المسألة؟» كلّ مرّة — صعوبةٌ مرغوبةٌ تبني مهارةً مرنة. في دراسة رورر وتايلور، سجّل التمرين الممزوج نحو ضِعف الدرجة في اختبار اليوم التالي، مع أنه بدا أصعب أثناء التمرين.',
    },
    steps: {
      en: [
        'Pick a few related topics or problem types.',
        'Switch between them instead of finishing one first.',
        'Do a problem of type A, then B, then C, then back to A.',
        'First decide which method fits — then solve.',
        'Expect it to feel harder and slower. That is the point.',
      ],
      ar: [
        'اختَر بضعة مواضيع أو أنواع مسائل مترابطة.',
        'تنقَّل بينها بدل إنهاء واحدٍ أوّلًا.',
        'حُلَّ مسألةً من نوع «أ»، ثم «ب»، ثم «ج»، ثم عُد إلى «أ».',
        'قرِّر أوّلًا أيّ طريقةٍ تناسب — ثم حُلَّ.',
        'توقَّع أن تبدو أصعب وأبطأ. وهذا هو المقصد.',
      ],
    },
    example: {
      en: 'A tennis coach mixes forehands, backhands, and volleys randomly instead of 50 of each. It is harder in practice — but a real match comes mixed, so the mixed-practice player is far more ready. Exams work the same way.',
      ar: 'يمزُج مدرِّب التنس الضربات الأماميّة والخلفيّة والطائرة عشوائيًّا بدل 50 من كلٍّ منها. أصعب في التمرين — لكن المباراة الحقيقيّة تأتي ممزوجة، فيكون اللاعب المتمرِّن على المزج أكثر جاهزيّةً بكثير. والامتحانات كذلك.',
    },
    mistakes: {
      en: [
        'Quitting because the struggle feels like failing — it works better later.',
        'Mixing totally unrelated subjects. Interleave related things so you learn to tell them apart.',
      ],
      ar: [
        'التوقُّف لأنّ الكدَّ يبدو فشلًا — لكنه يعمل أفضل لاحقًا.',
        'مزجُ موادَّ غير مترابطةٍ إطلاقًا. امزُج المترابطة لتتعلَّم التمييز بينها.',
      ],
    },
  },
  {
    id: 'elaboration',
    icon: Network,
    accent: 'fuchsia',
    name: { en: 'Elaboration', ar: 'التوسُّع' },
    tagline: {
      en: 'Ask how and why, and connect it to what you know.',
      ar: 'اسأل كيف ولماذا، واربِطها بما تعرف.',
    },
    tier: 'boost',
    utility: { en: 'Booster', ar: 'مُعزِّز' },
    what: {
      en: 'Explain ideas in your own words and connect them to things you already know. A strong version is asking "Why is this true? How does this work? What does it connect to?"',
      ar: 'اشرَح الأفكار بكلماتك واربِطها بما تعرفه سلفًا. ونسخةٌ قويّةٌ منها أن تسأل: «لماذا هذا صحيح؟ كيف يعمل؟ بِمَ يرتبط؟»',
    },
    why: {
      en: 'New information sticks better when it has many hooks into what you already know. The more meaningful connections a memory has, the more paths lead back to it, so it is easier to recall. Deep processing beats shallow repeating.',
      ar: 'المعلومة الجديدة تثبُت أفضل حين يكون لها خطاطيفُ كثيرةٌ في ما تعرفه سلفًا. وكلّما كثُرت روابط الذاكرة ذات المعنى، كثُرت الدروب المؤدّية إليها، فسهُل استدعاؤها. المعالجة العميقة تغلب التكرار السطحيّ.',
    },
    steps: {
      en: [
        'Read a new fact or idea.',
        'Ask: "Why is this true? How does it happen?"',
        'Ask: "How does this connect to something I already know?"',
        'Explain the answer in your own words, out loud or in writing.',
        'Link it to a real example from your own life.',
      ],
      ar: [
        'اقرأ حقيقةً أو فكرةً جديدة.',
        'اسأل: «لماذا هذا صحيح؟ كيف يحدث؟»',
        'اسأل: «بِمَ يرتبط هذا ممّا أعرفه سلفًا؟»',
        'اشرَح الإجابة بكلماتك، جهرًا أو كتابةً.',
        'اربِطها بمثالٍ واقعيٍّ من حياتك.',
      ],
    },
    example: {
      en: 'Instead of memorizing "ice floats", Sofia asks why. Ice is less dense because its molecules spread out when frozen. She links it to icebergs and to ponds freezing on top so fish survive below. Now the fact has meaning — and hooks.',
      ar: 'بدل حفظ «الجليد يطفو»، تسأل سُهى: لماذا؟ الجليد أقلّ كثافةً لأنّ جزيئاته تتباعد عند التجمُّد. تربط ذلك بالجبال الجليديّة وبتجمُّد سطح البِرَك ليعيش السمك تحته. الآن صار للحقيقة معنى — وخطاطيف.',
    },
    mistakes: {
      en: [
        'Making up explanations without checking them. They only help if they are correct.',
        'Staying shallow. "It’s true because the book says so" is not elaboration.',
      ],
      ar: [
        'اختلاق تفسيراتٍ دون التحقُّق منها. فهي لا تنفع إلّا إن كانت صحيحة.',
        'البقاء في السطح. «صحيحٌ لأنّ الكتاب قال» ليس توسُّعًا.',
      ],
    },
  },
  {
    id: 'dual-coding',
    icon: Images,
    accent: 'cyan',
    name: { en: 'Dual coding', ar: 'الترميز المزدوج' },
    tagline: { en: 'Combine words with pictures.', ar: 'اجمَع الكلمات بالصور.' },
    tier: 'boost',
    utility: { en: 'Booster', ar: 'مُعزِّز' },
    what: {
      en: 'Learn with both words and visuals — diagrams, timelines, simple drawings — together. Not decoration: pictures that actually show how the parts relate.',
      ar: 'تعلَّم بالكلمات والمرئيّات معًا — مخطَّطات، وخطوط زمن، ورسومٌ بسيطة. لا كزينة: صورٌ تُظهر فعلًا كيف ترتبط الأجزاء.',
    },
    why: {
      en: 'Your brain handles words and images through partly separate channels. Using both creates two connected memory traces and two routes to recall the idea later. (This is not "learning styles" — everyone benefits from it.)',
      ar: 'يعالج دماغك الكلمات والصور عبر قنواتٍ منفصلةٍ جزئيًّا. واستخدام الاثنين يخلق أثرين مترابطين في الذاكرة وطريقين لاستدعاء الفكرة لاحقًا. (وهذا ليس «أنماط التعلُّم» — بل ينتفع به الجميع.)',
    },
    steps: {
      en: [
        'Find or draw a simple visual that matches the idea.',
        'Put the words and the visual side by side so they support each other.',
        'Explain the visual in your own words.',
        'Cover it and redraw it from memory (this adds active recall).',
        'Keep it clean — clutter adds load.',
      ],
      ar: [
        'ابحَث عن مرئيٍّ بسيطٍ يطابق الفكرة أو ارسُمه.',
        'ضَع الكلمات والمرئيّ جنبًا إلى جنبٍ ليدعم كلٌّ منهما الآخر.',
        'اشرَح المرئيّ بكلماتك.',
        'غطِّه وأعِد رسمه من الذاكرة (وهذا يُضيف استدعاءً نشطًا).',
        'أبقِه نظيفًا — فالفوضى تزيد الحِمل.',
      ],
    },
    example: {
      en: 'For the water cycle, Kofi draws the sun heating a lake, clouds forming, rain falling, water flowing back — and labels each arrow. In the exam he can "see" his drawing and read the steps off it.',
      ar: 'لدورة الماء، يرسم كريم الشمس تُسخِّن بحيرة، وسحبًا تتكوَّن، ومطرًا يهطل، وماءً يعود جاريًا — ويكتب عنوانًا لكلّ سهم. في الامتحان «يرى» رسمه ويقرأ الخطوات منه.',
    },
    mistakes: {
      en: [
        'Decorative images that add nothing. The visual must show the actual idea.',
        'Copying a diagram without thinking. Explain it and redraw it from memory.',
      ],
      ar: [
        'صورٌ زخرفيّةٌ لا تُضيف شيئًا. على المرئيّ أن يُظهر الفكرة نفسها.',
        'نسخُ مخطَّطٍ بلا تفكير. اشرَحه وأعِد رسمه من الذاكرة.',
      ],
    },
  },
  {
    id: 'concrete-examples',
    icon: Blocks,
    accent: 'teal',
    name: { en: 'Concrete examples', ar: 'الأمثلة المحسوسة' },
    tagline: {
      en: 'Turn abstract ideas into real, specific cases.',
      ar: 'حوِّل الأفكار المجرَّدة إلى حالاتٍ واقعيّةٍ محدَّدة.',
    },
    tier: 'boost',
    utility: { en: 'Booster', ar: 'مُعزِّز' },
    what: {
      en: 'Explain an abstract idea using specific, real, easy-to-picture examples. Abstract ideas are slippery; concrete examples give them something to hold onto.',
      ar: 'اشرَح فكرةً مجرَّدةً بأمثلةٍ محدَّدةٍ واقعيّةٍ يسهُل تصوُّرها. الأفكار المجرَّدة زَلِقة، والأمثلة المحسوسة تمنحها ما تتشبّث به.',
    },
    why: {
      en: 'A concrete example connects an idea to real things you already understand, which makes it easier to store and recall — and easier to use in new situations later. Use two or three varied examples so you learn the deep pattern, not one surface.',
      ar: 'المثال المحسوس يربط الفكرة بأشياء واقعيّةٍ تفهمها سلفًا، فيسهُل تخزينها واستدعاؤها — واستخدامها في مواقف جديدةٍ لاحقًا. استعمِل مثالين أو ثلاثةً متنوّعةً لتتعلَّم النمط العميق، لا سطحًا واحدًا.',
    },
    steps: {
      en: [
        'Write down the abstract idea or rule.',
        'Find a real, specific example of it.',
        'Collect two or three different examples.',
        'Explain how each one fits the rule.',
        'Make up your own example to test yourself.',
      ],
      ar: [
        'اكتُب الفكرة أو القاعدة المجرَّدة.',
        'ابحَث عن مثالٍ واقعيٍّ محدَّدٍ عليها.',
        'اجمَع مثالين أو ثلاثةً مختلفة.',
        'اشرَح كيف ينطبق كلٌّ منها على القاعدة.',
        'اختلِق مثالك الخاصّ لتختبر نفسك.',
      ],
    },
    example: {
      en: '"Supply and demand" is abstract. Amara thinks of umbrellas costing more on a rainy day, sold-out concert tickets reselling high, and cheap summer strawberries. Now the rule is anchored to real life.',
      ar: '«العرض والطلب» مجرَّد. تتخيَّل مريم مِظلّاتٍ يرتفع سعرها في يومٍ ممطر، وتذاكر حفلٍ نافدةً يُعاد بيعها بغلاء، وفراولة صيفٍ رخيصة. الآن رست القاعدة على أرض الواقع.',
    },
    mistakes: {
      en: [
        'Learning only one example — you may cling to its surface details.',
        'Examples that do not truly fit the concept teach the wrong idea.',
      ],
      ar: [
        'تعلُّم مثالٍ واحدٍ فقط — فقد تتشبّث بتفاصيله السطحيّة.',
        'الأمثلة التي لا تنطبق حقًّا على المفهوم تُعلّم الفكرة الخطأ.',
      ],
    },
  },
  {
    id: 'self-explanation',
    icon: Speech,
    accent: 'indigo',
    name: { en: 'Self-explanation', ar: 'الشرح الذاتيّ' },
    tagline: {
      en: 'Explain each step to yourself as you learn.',
      ar: 'اشرَح كلّ خطوةٍ لنفسك وأنت تتعلَّم.',
    },
    tier: 'boost',
    utility: { en: 'Booster', ar: 'مُعزِّز' },
    what: {
      en: 'As you read or solve, explain to yourself why each step follows the last and how it connects to what you already know. You narrate your own understanding.',
      ar: 'وأنت تقرأ أو تحُلّ، اشرَح لنفسك لماذا تتبع كلُّ خطوةٍ سابقتَها وكيف ترتبط بما تعرفه سلفًا. أنت تروي فهمك بنفسك.',
    },
    why: {
      en: 'Self-explanation forces you to process the material and notice gaps. Chi and colleagues found students who explained steps to themselves learned significantly more and solved problems better. It makes you build the logic instead of passively accepting it.',
      ar: 'الشرح الذاتيّ يُجبرك على معالجة المادّة وملاحظة الثغرات. وجد تشي وزملاؤه أنّ الطلاب الذين شرحوا الخطوات لأنفسهم تعلَّموا أكثر بكثيرٍ وحلّوا المسائل أفضل. فهو يجعلك تبني المنطق بدل قبوله سلبيًّا.',
    },
    steps: {
      en: [
        'Pause after each step or idea.',
        'Ask: "Why is this step here? Why does it work?"',
        'Say the answer in your own words.',
        'Ask how it connects to the previous step and to what you know.',
        'If you cannot explain a step — stop. That gap is what to study.',
      ],
      ar: [
        'توقَّف بعد كلّ خطوةٍ أو فكرة.',
        'اسأل: «لماذا هذه الخطوة هنا؟ لماذا تنجح؟»',
        'قُلِ الإجابة بكلماتك.',
        'اسأل كيف ترتبط بالخطوة السابقة وبما تعرف.',
        'إن عجزتَ عن شرح خطوة — توقَّف. تلك الثغرة هي ما تدرُسه.',
      ],
    },
    example: {
      en: 'Solving physics, Ravi asks after each line, "Why did I do that?" On line three he realizes he just copied a pattern he cannot explain. That gap is gold — he studies it, and the whole problem clicks.',
      ar: 'وهو يحُلّ الفيزياء، يسأل رامي بعد كلّ سطر: «لماذا فعلتُ ذلك؟» عند السطر الثالث يُدرك أنه نسخ نمطًا لا يستطيع شرحه. تلك الثغرة كنز — يدرُسها، فتنفتح المسألة كلّها.',
    },
    mistakes: {
      en: [
        'Re-reading the steps out loud. Reading is not explaining — say why.',
        'Skipping the parts you cannot explain. Those are the most important.',
      ],
      ar: [
        'إعادة قراءة الخطوات بصوتٍ عالٍ. القراءة ليست شرحًا — قُل لماذا.',
        'تخطّي ما لا تستطيع شرحه. فتلك هي الأهمّ.',
      ],
    },
  },
  {
    id: 'feynman',
    icon: GraduationCap,
    accent: 'emerald',
    name: { en: 'The Feynman technique', ar: 'تقنية فاينمان' },
    tagline: {
      en: 'If you can explain it simply, you understand it.',
      ar: 'إن استطعتَ شرحها ببساطة، فأنت تفهمها.',
    },
    tier: 'strong',
    utility: { en: 'Powerful combo', ar: 'مزيجٌ قويّ' },
    what: {
      en: 'Pick a topic and teach it in plain words, as if to a curious 12-year-old. Wherever you get stuck or reach for jargon, you have found a gap. Fill it, then explain again.',
      ar: 'اختَر موضوعًا وعلِّمه بكلماتٍ بسيطة، كأنّك تشرحه لفضوليٍّ في الثانية عشرة. حيثما تعثّرتَ أو لجأتَ إلى المصطلحات، وجدتَ ثغرة. سُدَّها ثم اشرَح مجدَّدًا.',
    },
    why: {
      en: 'Teaching forces deep, organized understanding. It combines active recall, self-explanation, elaboration, and concrete examples at once. Research on the "protégé effect" shows we learn better when we expect to teach. The test is simple: if you cannot explain it simply, you do not understand it yet.',
      ar: 'التعليم يُجبر على فهمٍ عميقٍ منظَّم. ويجمع الاستدعاء النشط والشرح الذاتيّ والتوسُّع والأمثلة المحسوسة دفعةً واحدة. تُظهر أبحاث «أثر المُعلِّم الصغير» أنّنا نتعلَّم أفضل حين نتوقّع أن نُعلِّم. والاختبار بسيط: إن لم تستطع شرحها ببساطة، فأنت لم تفهمها بعد.',
    },
    steps: {
      en: [
        'Write the concept’s name at the top of a blank page.',
        'Explain it simply, in plain words, with an example — no jargon.',
        'Notice where you get stuck or fuzzy. Those are your gaps.',
        'Go back and study those weak spots.',
        'Explain again, even more simply. Repeat until it flows.',
      ],
      ar: [
        'اكتُب اسم المفهوم أعلى صفحةٍ بيضاء.',
        'اشرَحه ببساطةٍ بكلماتٍ سهلةٍ ومثال — بلا مصطلحات.',
        'لاحِظ أين تتعثّر أو يغيم فهمك. تلك ثغراتك.',
        'عُد وادرُس تلك المواضع الضعيفة.',
        'اشرَح مجدَّدًا، بأبسطَ أكثر. وكرِّر حتى ينساب.',
      ],
    },
    example: {
      en: 'Elena freezes explaining inflation to her brother. That freeze reveals her gap. She studies, then nails it: "Money slowly buys less. If every kid has more pocket money but the shop has five candy bars, the price goes up." Now she truly gets it.',
      ar: 'تتجمَّد لينا وهي تشرح التضخُّم لأخيها. ذلك التجمُّد يكشف ثغرتها. تدرُس، ثم تُتقنه: «النقود تشتري أقلّ رويدًا. لو صار لكلّ طفلٍ مصروفٌ أكبر والدكّان فيه خمسة ألواح شوكولاتة، ارتفع السعر.» الآن فهمته حقًّا.',
    },
    mistakes: {
      en: [
        'Using jargon to hide gaps. Force plain language.',
        'Only doing it in your head. Write it or say it out loud.',
        'Stopping at the first try. The power is in the loop.',
      ],
      ar: [
        'استعمال المصطلحات لإخفاء الثغرات. ألزِم نفسك اللغة السهلة.',
        'فعلها في رأسك فقط. اكتُبها أو قُلها بصوتٍ عالٍ.',
        'التوقُّف عند المحاولة الأولى. القوّة في التكرار.',
      ],
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 3 — Traps that feel productive but are not                   */
/* ------------------------------------------------------------------ */

export const TRAPS_INTRO: Localized<string> = {
  en: 'When information sits in front of you, it feels familiar, so your brain says "I know this." That good feeling is a trap — the illusion of competence. These methods create the feeling while building little real memory. The fix is always the same: swap passive review for active, effortful recall.',
  ar: 'حين تكون المعلومة أمامك، تبدو مألوفة، فيقول دماغك «أنا أعرف هذا». ذلك الشعور الطيّب فخّ — وهمُ الكفاءة. هذه الطرائق تصنع الشعور دون أن تبني ذاكرةً حقيقيّةً تُذكَر. والحلّ دائمًا واحد: استبدِل بالمراجعة السلبيّة استدعاءً نشطًا يتطلّب جهدًا.',
}

export const TRAPS: Trap[] = [
  {
    id: 'rereading',
    icon: BookOpen,
    name: { en: 'Rereading', ar: 'إعادة القراءة' },
    feelsLike: {
      en: 'Easy and productive — the text gets more familiar each pass.',
      ar: 'سهلةٌ ومُنتِجة — يزداد النصّ ألفةً مع كلّ مرور.',
    },
    truth: {
      en: 'Familiarity is not memory. Rereading builds recognition, not recall — and it was rated low utility. Rereaders felt confident but did far worse on delayed tests than self-testers.',
      ar: 'الألفة ليست ذاكرة. إعادة القراءة تبني التعرُّف لا الاستدعاء — وقد صُنِّفت منخفضة الفائدة. شعر مُعيدو القراءة بالثقة لكنهم كانوا أسوأ بكثيرٍ في الاختبارات المؤجَّلة من مُختبِري أنفسهم.',
    },
    instead: {
      en: 'Read once with attention, then close the book and test yourself. Reread only to check answers or fix specific gaps.',
      ar: 'اقرأ مرّةً بانتباه، ثم أغلِق الكتاب واختبِر نفسك. ولا تُعِد القراءة إلّا للتحقُّق من الإجابات أو سدّ ثغراتٍ محدَّدة.',
    },
  },
  {
    id: 'highlighting',
    icon: Highlighter,
    name: { en: 'Highlighting', ar: 'التظليل (التمييز بالألوان)' },
    feelsLike: {
      en: 'Active and colorful — a bright page looks like progress.',
      ar: 'نشطةٌ وملوَّنة — صفحةٌ زاهيةٌ تبدو تقدُّمًا.',
    },
    truth: {
      en: 'You can highlight without thinking, so it rarely makes you retrieve or connect anything. It was rated low utility, and over-highlighting can even pull attention to isolated facts.',
      ar: 'يمكنك التظليل بلا تفكير، فنادرًا ما يجعلك تستدعي شيئًا أو تربطه. صُنِّف منخفض الفائدة، وقد يجذب الإفراطُ فيه الانتباهَ إلى حقائق معزولة.',
    },
    instead: {
      en: 'Highlight lightly, only after a section. Then turn the key points into questions and self-test, or summarize in your own words.',
      ar: 'ظلِّل قليلًا، وبعد إنهاء المقطع فقط. ثم حوِّل النقاط الأساسيّة إلى أسئلةٍ واختبِر نفسك، أو لخِّص بكلماتك.',
    },
  },
  {
    id: 'cramming',
    icon: Hourglass,
    name: { en: 'Cramming', ar: 'الحشو' },
    feelsLike: {
      en: 'Necessary before a deadline — and it can pass tomorrow’s test.',
      ar: 'ضروريٌّ قبل الموعد النهائيّ — وقد يجتاز اختبار الغد.',
    },
    truth: {
      en: 'Cramming is massed practice, the opposite of spacing. It gives short-term recall that vanishes within days, adds stress, and steals the sleep your brain needs to lock memories in.',
      ar: 'الحشو تمرينٌ مكثَّف، نقيض المباعدة. يمنح استدعاءً قصير الأمد يتلاشى خلال أيّام، ويزيد التوتُّر، ويسرق النوم الذي يحتاجه دماغك لتثبيت الذكريات.',
    },
    instead: {
      en: 'Spread study across many days with active recall. Even 20 minutes a day beats a giant last-minute block — and protect your sleep.',
      ar: 'وزِّع الدراسة على أيّامٍ كثيرةٍ مع استدعاءٍ نشط. حتى 20 دقيقةً يوميًّا تغلب كتلةً ضخمةً في اللحظة الأخيرة — واحمِ نومك.',
    },
  },
  {
    id: 'learning-styles',
    icon: Shapes,
    name: { en: 'The "learning styles" myth', ar: 'خرافة «أنماط التعلُّم»' },
    feelsLike: {
      en: '"I’m a visual learner, so I only learn visually." Popular and intuitive.',
      ar: '«أنا متعلِّمٌ بصريّ، فلا أتعلَّم إلّا بصريًّا.» شائعةٌ وبديهيّة.',
    },
    truth: {
      en: 'Carefully tested and failed. Pashler and colleagues found essentially no evidence that matching teaching to a personal "style" improves learning. It is one of the most believed, least supported ideas in education.',
      ar: 'اختُبِرت بعنايةٍ وفشِلت. وجد باشلر وزملاؤه لا دليل يُذكَر على أنّ مطابقة التعليم لـ«نمطٍ» شخصيٍّ تُحسِّن التعلُّم. إنها من أكثر الأفكار تصديقًا وأقلّها سندًا في التعليم.',
    },
    instead: {
      en: 'Stop labeling yourself. Everyone benefits from combining words and visuals, and from the proven methods. Match the method to the material, not to a fixed "style".',
      ar: 'كُفَّ عن تصنيف نفسك. الجميع ينتفع بالجمع بين الكلمات والمرئيّات، وبالطرائق المُثبَتة. طابِق الطريقة مع المادّة، لا مع «نمطٍ» ثابت.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 4 — Focus and beating procrastination                        */
/* ------------------------------------------------------------------ */

export const FOCUS: Tip[] = [
  {
    id: 'why-procrastinate',
    icon: Hourglass,
    accent: 'rose',
    title: { en: 'Why we procrastinate', ar: 'لماذا نُسوِّف' },
    oneLiner: {
      en: 'It is not laziness — it is your brain avoiding a bad feeling.',
      ar: 'ليس كسلًا — بل دماغك يتجنَّب شعورًا سيّئًا.',
    },
    body: {
      en: 'A boring or hard task creates a small pain, so your brain runs to something easy and pleasant (phone, snacks, tidying). The relief is why the habit sticks. It is an emotion problem, not a time-management problem.',
      ar: 'المهمّة المملّة أو الصعبة تخلق ألمًا صغيرًا، فيهرب دماغك إلى شيءٍ سهلٍ ممتع (الهاتف، الوجبات الخفيفة، الترتيب). الراحة هي سبب رسوخ العادة. إنها مشكلة انفعالٍ، لا مشكلة إدارة وقت.',
    },
    note: {
      en: 'The pain is mostly in the anticipation. Once you actually start, the discomfort fades fast — so the whole game is making it easy to start.',
      ar: 'الألم غالبًا في التوقُّع. وحالما تبدأ فعلًا، يتلاشى الانزعاج بسرعة — فاللعبة كلّها أن تُسهِّل البدء.',
    },
  },
  {
    id: 'pomodoro',
    icon: Timer,
    accent: 'violet',
    title: { en: 'The Pomodoro Technique', ar: 'تقنية بومودورو' },
    oneLiner: {
      en: 'Work in short 25-minute bursts with breaks.',
      ar: 'اعمَل دفعاتٍ قصيرةً من 25 دقيقةً باستراحات.',
    },
    body: {
      en: 'Work in focused chunks (usually 25 minutes), each followed by a short break. A small session beats the dread that causes procrastination, and shifts your focus from finishing (scary) to just starting (easy).',
      ar: 'اعمَل في قطعٍ مركَّزة (عادةً 25 دقيقة)، يتبع كلًّا منها استراحةٌ قصيرة. الجلسة الصغيرة تغلب الرهبة التي تسبِّب التسويف، وتنقل تركيزك من الإنهاء (مخيف) إلى مجرَّد البدء (سهل).',
    },
    steps: {
      en: [
        'Choose one task.',
        'Set a timer for 25 minutes.',
        'Work with full focus — no phone, no tab-switching.',
        'When it rings, take a 5-minute break (stand, stretch, water).',
        'After 4 rounds, take a longer 15-30 minute break.',
      ],
      ar: [
        'اختَر مهمّةً واحدة.',
        'اضبِط مؤقّتًا على 25 دقيقة.',
        'اعمَل بتركيزٍ كامل — بلا هاتف، بلا تنقُّلٍ بين التبويبات.',
        'حين يرنّ، خُذ استراحة 5 دقائق (قِف، تمدَّد، اشرَب ماءً).',
        'بعد 4 جولات، خُذ استراحةً أطول من 15–30 دقيقة.',
      ],
    },
    example: {
      en: 'Fatima dreads her 2,000-word essay. "Just one pomodoro — 25 minutes, then I can stop." The dread disappears once she is writing. Four pomodoros later she has a first draft.',
      ar: 'تخشى فاطمة مقالها ذا الـ2000 كلمة. «بومودورو واحدة فقط — 25 دقيقة، ثم يمكنني التوقُّف.» تختفي الرهبة حالما تكتب. وبعد أربع بومودورات لديها مسوَّدةٌ أولى.',
    },
  },
  {
    id: 'distractions',
    icon: BellOff,
    accent: 'orange',
    title: { en: 'Beat distractions', ar: 'اهزِم المُشتِّتات' },
    oneLiner: {
      en: 'Your brain cannot truly multitask — it just switches, and each switch costs you.',
      ar: 'لا يستطيع دماغك تعدُّد المهامّ حقًّا — بل يتنقّل، وكلّ تنقُّلٍ يكلّفك.',
    },
    body: {
      en: 'Studying while texting or watching videos feels efficient, but your brain rapidly switches tasks, and every switch drops your speed and accuracy. Students who multitask remember less and score lower. Multitasking also fills your tiny working memory with junk.',
      ar: 'الدراسة أثناء المراسلة أو مشاهدة الفيديو تبدو كفاءة، لكن دماغك يتنقّل بين المهامّ سريعًا، وكلّ تنقُّلٍ يُنقِص سرعتك ودقّتك. الطلاب الذين يُعدِّدون المهامّ يتذكَّرون أقلّ ويسجّلون أدنى. وتعدُّد المهامّ يملأ ذاكرتك العاملة الصغيرة بالفضلات.',
    },
    steps: {
      en: [
        'Remove, do not resist: put your phone in another room.',
        'Use a website or app blocker during study.',
        'Close every tab and program except the one you need.',
        'Keep a "distraction list" — write down stray thoughts for later.',
        'Study in a place your brain links to work.',
      ],
      ar: [
        'أزِل، لا تُقاوِم: ضَع هاتفك في غرفةٍ أخرى.',
        'استخدِم حاجبًا للمواقع أو التطبيقات أثناء الدراسة.',
        'أغلِق كلّ تبويبٍ وبرنامجٍ إلّا ما تحتاجه.',
        'احتفِظ بـ«قائمة تشتُّت» — دوِّن الأفكار الشاردة لوقتٍ لاحق.',
        'ادرُس في مكانٍ يربطه دماغك بالعمل.',
      ],
    },
    note: {
      en: 'The people who multitask most are often worse at filtering distractions, not better. Single-task on purpose.',
      ar: 'أكثر من يُعدِّدون المهامّ هم غالبًا أسوأ في تصفية المُشتِّتات، لا أفضل. أفرِد مهمّةً واحدةً عن قصد.',
    },
  },
  {
    id: 'two-minute',
    icon: Zap,
    accent: 'amber',
    title: { en: 'The 2-minute rule', ar: 'قاعدة الدقيقتين' },
    oneLiner: {
      en: 'Shrink the first step until it is too small to refuse.',
      ar: 'صغِّر الخطوة الأولى حتى تصير أصغر من أن تُرفَض.',
    },
    body: {
      en: 'Commit to doing a task for just 2 minutes, telling yourself you can stop after. Usually you keep going, because starting was the hard part. For habits, make the starting action take under 2 minutes: "study for an hour" becomes "open the book and read one line".',
      ar: 'التزِم بأداء المهمّة دقيقتين فقط، قائلًا لنفسك إنّ بإمكانك التوقُّف بعدها. غالبًا تُواصِل، لأنّ البدء كان الجزء الصعب. وللعادات، اجعَل فعل البدء يستغرق أقلّ من دقيقتين: «ادرُس ساعة» تصير «افتَح الكتاب واقرأ سطرًا واحدًا».',
    },
    steps: {
      en: [
        'Pick the task you are avoiding.',
        'Shrink it to a tiny first action ("open the doc, write the title").',
        'Promise yourself you can stop after two minutes.',
        'Start a 2-minute timer and begin.',
        'Notice you are already going — and keep going.',
      ],
      ar: [
        'اختَر المهمّة التي تتجنَّبها.',
        'صغِّرها إلى فعلٍ أوّلٍ ضئيل («افتَح المستند، اكتُب العنوان»).',
        'عِد نفسك بأنّ بإمكانك التوقُّف بعد دقيقتين.',
        'شغِّل مؤقّت دقيقتين وابدأ.',
        'لاحِظ أنّك انطلقتَ فعلًا — وواصِل.',
      ],
    },
    example: {
      en: 'Grace dreads chemistry. "I’ll just read one paragraph, two minutes, then quit." Twenty minutes later she is deep in work. The trick was never the two minutes — it was getting past the start.',
      ar: 'تخشى جُمانة الكيمياء. «سأقرأ فقرةً واحدة، دقيقتين، ثم أتوقّف.» بعد عشرين دقيقةً تكون غارقةً في العمل. الحيلة لم تكن يومًا الدقيقتين — بل تجاوُز البداية.',
    },
  },
  {
    id: 'deep-work',
    icon: Focus,
    accent: 'indigo',
    title: { en: 'Deep work', ar: 'العمل العميق' },
    oneLiner: {
      en: 'Real progress comes from long, uninterrupted focus.',
      ar: 'التقدُّم الحقيقيّ يأتي من تركيزٍ طويلٍ بلا انقطاع.',
    },
    body: {
      en: 'Deep work means full concentration on one demanding task, with zero distractions, for a solid block. Hard learning needs sustained focus so working memory can build real understanding — and constant interruptions destroy it.',
      ar: 'العمل العميق تركيزٌ كاملٌ على مهمّةٍ واحدةٍ صعبة، بلا أيّ مُشتِّت، لفترةٍ متّصلة. التعلُّم الصعب يحتاج تركيزًا مستدامًا لتبني الذاكرة العاملة فهمًا حقيقيًّا — والمقاطعات المستمرّة تدمِّره.',
    },
    steps: {
      en: [
        'Schedule a block (start with 60-90 minutes).',
        'Remove all distractions before you begin — phone away, notifications off.',
        'Pick one clear, meaningful task.',
        'When your mind drifts, gently bring it back.',
        'Take a real break afterward. Guard these blocks like appointments.',
      ],
      ar: [
        'جدوِل فترة (ابدأ بـ60–90 دقيقة).',
        'أزِل كلّ المُشتِّتات قبل أن تبدأ — الهاتف بعيد، الإشعارات مُطفأة.',
        'اختَر مهمّةً واحدةً واضحةً ذات معنى.',
        'حين يشرد ذهنك، أعِده برفق.',
        'خُذ استراحةً حقيقيّةً بعدها. واحرُس هذه الفترات كالمواعيد.',
      ],
    },
    note: {
      en: 'Even the presence of a phone pulls at your attention. Physically remove it — do not keep it "just in case".',
      ar: 'حتى وجود الهاتف يشدّ انتباهك. أزِله ماديًّا — لا تُبقِه «تحسُّبًا».',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 5 — Mindset and motivation                                   */
/* ------------------------------------------------------------------ */

export const MINDSET: Tip[] = [
  {
    id: 'growth-mindset',
    icon: Sprout,
    accent: 'emerald',
    title: { en: 'Growth mindset', ar: 'عقليّة النموّ' },
    oneLiner: {
      en: 'Believing you can grow helps you keep going when it is hard.',
      ar: 'إيمانك بأنّك تستطيع النموّ يعينك على المواصلة عند الشدّة.',
    },
    body: {
      en: 'A fixed mindset says "my ability is set." A growth mindset says "my ability can grow with effort, good strategies, and help." The honest science: mindset is a helpful foundation that keeps you trying, but its average effect on grades is small — it does not replace good study methods.',
      ar: 'العقليّة الثابتة تقول «قدرتي معطاة». وعقليّة النموّ تقول «قدرتي تنمو بالجهد والاستراتيجيّات الجيّدة والمساعدة». والعلم الصادق: العقليّة أساسٌ مفيدٌ يُبقيك تحاول، لكن أثرها الوسطيّ في الدرجات صغير — فهي لا تُغني عن طرائق الدراسة الجيّدة.',
    },
    steps: {
      en: [
        'Add the word "yet": "I can’t do this" becomes "I can’t do this yet".',
        'Treat mistakes as information: "What did this error teach me?"',
        'Praise strategy and effort, not "being smart".',
        'When stuck, ask "what different approach could I try?"',
      ],
      ar: [
        'أضِف كلمة «بعد»: «لا أستطيع هذا» تصير «لا أستطيع هذا بعد».',
        'عامِل الأخطاء كمعلومات: «ماذا علَّمني هذا الخطأ؟»',
        'امدَح الاستراتيجيّة والجهد، لا «الذكاء».',
        'عند التعثُّر، اسأل: «أيّ نهجٍ مختلفٍ يمكنني تجربته؟»',
      ],
    },
    example: {
      en: 'Lin fails a coding test and thinks "I’m not a tech person." She reframes: "I don’t understand loops yet — which strategy haven’t I tried?" She switches to active recall and passes. Belief kept her in; the strategy change won it.',
      ar: 'ترسُب لِين في اختبار برمجةٍ وتظنّ «لستُ من أهل التقنية». تُعيد الصياغة: «لا أفهم الحلقات بعد — أيّ استراتيجيّةٍ لم أجرِّبها؟» تنتقل إلى الاستدعاء النشط فتنجح. الإيمان أبقاها، وتغيير الاستراتيجيّة حسم الأمر.',
    },
    note: {
      en: 'Growth mindset is not just positive thinking. Pair the belief with better methods and real effort.',
      ar: 'عقليّة النموّ ليست مجرَّد تفكيرٍ إيجابيّ. اقرِن الإيمان بطرائق أفضل وجهدٍ حقيقيّ.',
    },
  },
  {
    id: 'deliberate-practice',
    icon: Dumbbell,
    accent: 'violet',
    title: { en: 'Deliberate practice', ar: 'التمرين المتعمَّد' },
    oneLiner: {
      en: 'Focused practice on your weak points, with feedback.',
      ar: 'تمرينٌ مركَّزٌ على نقاط ضعفك، مع تغذيةٍ راجعة.',
    },
    body: {
      en: 'Not mindless repetition — focused practice aimed at your specific weaknesses, with clear goals, fast feedback, and constant stretching just beyond your ability. Quality matters far more than quantity. (The "10,000 hours" line is a myth that oversimplified the real research.)',
      ar: 'ليس تكرارًا بلا وعي — بل تمرينٌ مركَّزٌ على ضعفك المحدَّد، بأهدافٍ واضحةٍ وتغذيةٍ راجعةٍ سريعةٍ ومدٍّ دائمٍ لقدرتك إلى ما يتجاوزها بقليل. الجودة أهمّ بكثيرٍ من الكمّيّة. (وعبارة «10000 ساعة» خرافةٌ بسَّطت البحث الحقيقيّ أكثر من اللازم.)',
    },
    steps: {
      en: [
        'Pick one narrow, specific skill to improve.',
        'Set a clear goal for the session.',
        'Practice what you cannot quite do yet — not what is already easy.',
        'Get feedback fast: a teacher, an answer key, a recording, a test.',
        'Fix the exact mistakes it reveals, then repeat.',
      ],
      ar: [
        'اختَر مهارةً واحدةً ضيّقةً محدَّدةً لتحسينها.',
        'ضَع هدفًا واضحًا للجلسة.',
        'تمرَّن على ما لا تكاد تُتقنه بعد — لا على ما صار سهلًا.',
        'احصُل على تغذيةٍ راجعةٍ سريعة: معلّم، أو مفتاح إجابات، أو تسجيل، أو اختبار.',
        'أصلِح الأخطاء المحدَّدة التي يكشفها، ثم كرِّر.',
      ],
    },
    example: {
      en: 'A player who just plays games plateaus. Using deliberate practice, she drills only her weak left-hand layups, films herself, fixes her footwork, and repeats — then targets the next weakness.',
      ar: 'لاعبةٌ تكتفي باللعب تتوقَّف عند سقف. بالتمرين المتعمَّد، تُدرِّب فقط تسديداتها الضعيفة باليد اليسرى، تُصوِّر نفسها، تُصلِح حركة قدميها، وتكرِّر — ثم تستهدف الضعف التالي.',
    },
    note: {
      en: 'If practice feels easy and comfortable the whole time, it probably is not deliberate practice.',
      ar: 'إن بدا التمرين سهلًا ومريحًا طوال الوقت، فهو على الأرجح ليس تمرينًا متعمَّدًا.',
    },
  },
  {
    id: 'smart-goals',
    icon: Flag,
    accent: 'sky',
    title: { en: 'SMART goals', ar: 'أهداف SMART' },
    oneLiner: {
      en: 'Turn a vague wish into a clear, trackable plan.',
      ar: 'حوِّل أمنيةً غامضةً إلى خطّةٍ واضحةٍ قابلةٍ للتتبُّع.',
    },
    body: {
      en: 'A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-bound. Vague goals ("study more") give your brain nothing to grab. Specific goals with deadlines create clear next actions and let you see progress.',
      ar: 'هدف SMART محدَّد، وقابلٌ للقياس، وقابلٌ للتحقيق، وذو صلة، ومحدَّد المدّة. الأهداف الغامضة («ادرُس أكثر») لا تمنح دماغك ما يتشبّث به. أمّا المحدَّدة ذات المواعيد فتخلق أفعالًا تاليةً واضحةً وتُريك التقدُّم.',
    },
    steps: {
      en: [
        'Start with the wish: "do well in history".',
        'Specific: "finish and self-test Chapter 4".',
        'Measurable: "score 8/10 on a practice quiz".',
        'Achievable + Relevant: small enough this week, tied to your real aim.',
        'Time-bound: "by Friday evening".',
      ],
      ar: [
        'ابدأ بالأمنية: «أن أُبلي حسنًا في التاريخ».',
        'محدَّد: «أُنهي الفصل الرابع وأختبر نفسي فيه».',
        'قابلٌ للقياس: «أُحرِز 8 من 10 في اختبارٍ تجريبيّ».',
        'قابلٌ للتحقيق وذو صلة: صغيرٌ بما يكفي لهذا الأسبوع، ومرتبطٌ بهدفك الحقيقيّ.',
        'محدَّد المدّة: «بحلول مساء الجمعة».',
      ],
    },
    example: {
      en: '"Learn Spanish" is a wish. SMART: "For 4 weeks, use a spaced-repetition app 15 minutes each morning and hold one 20-minute conversation each Saturday." Now Lucia always knows the next step.',
      ar: '«تعلَّم الإسبانيّة» أمنية. وبصيغة SMART: «لمدّة 4 أسابيع، أستخدم تطبيق مراجعةٍ متباعدةٍ 15 دقيقةً كلّ صباح، وأُجري محادثةً واحدةً مدّتها 20 دقيقةً كلّ سبت.» الآن تعرف لوسي الخطوة التالية دائمًا.',
    },
    note: {
      en: 'Set process goals you control ("3 spaced sessions a week"), not only outcome goals ("get an A").',
      ar: 'ضَع أهداف عمليّةٍ تتحكَّم بها («3 جلسات متباعدة أسبوعيًّا»)، لا أهداف نتائج فقط («أحصل على امتياز»).',
    },
  },
  {
    id: 'habits',
    icon: Repeat,
    accent: 'fuchsia',
    title: { en: 'Build study habits', ar: 'ابنِ عادات دراسة' },
    oneLiner: {
      en: 'Make studying automatic, so it does not depend on willpower.',
      ar: 'اجعَل الدراسة تلقائيّة، فلا تعتمد على قوّة الإرادة.',
    },
    body: {
      en: 'Motivation comes and goes; habits do not need it. Anchor a new study behavior to something you already do, and it becomes routine. Forget "21 days" — one study found habits took a median of about 66 days to feel automatic, and it varies a lot.',
      ar: 'الدافع يأتي ويذهب؛ العادات لا تحتاجه. اربِط سلوك دراسةٍ جديدًا بشيءٍ تفعله سلفًا فيصير روتينًا. وانسَ «21 يومًا» — وجدت دراسةٌ أنّ العادات استغرقت وسيطًا نحو 66 يومًا لتصير تلقائيّة، والأمر يتفاوت كثيرًا.',
    },
    steps: {
      en: [
        'Anchor it to an existing routine: "after breakfast, one pomodoro".',
        'Start tiny (use the 2-minute rule).',
        'Same time, same place when you can.',
        'Reduce friction: set your books out the night before.',
        'Track it with an X each day — but if you miss one, just restart.',
      ],
      ar: [
        'ثبِّتها على روتينٍ قائم: «بعد الفطور، بومودورو واحدة».',
        'ابدأ ضئيلًا (استخدِم قاعدة الدقيقتين).',
        'الوقت نفسه، والمكان نفسه ما استطعت.',
        'قلِّل الاحتكاك: جهِّز كتبك ليلة أمس.',
        'تتبَّعها بعلامةٍ كلّ يوم — وإن فاتك يوم، فأعِد البدء فحسب.',
      ],
    },
    example: {
      en: 'Ken stops relying on motivation. "Right after dinner, I sit and do one 25-minute pomodoro." The first two weeks take effort; by two months it feels automatic.',
      ar: 'يكفّ كنان عن الاعتماد على الدافع. «بعد العشاء مباشرةً، أجلس وأُنجز بومودورو واحدةً مدّتها 25 دقيقة.» يتطلَّب الأسبوعان الأوّلان جهدًا؛ وبعد شهرين يصير تلقائيًّا.',
    },
    note: {
      en: 'One missed day is harmless. Just never miss twice in a row.',
      ar: 'يومٌ واحدٌ فائتٌ لا يضرّ. فقط لا تفوِّت يومين متتاليين أبدًا.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 6 — Brain care                                               */
/* ------------------------------------------------------------------ */

export const BRAIN_CARE: Tip[] = [
  {
    id: 'sleep',
    icon: Moon,
    accent: 'indigo',
    title: { en: 'Sleep', ar: 'النوم' },
    oneLiner: {
      en: 'Your brain saves and strengthens memories while you sleep.',
      ar: 'يحفظ دماغك الذكريات ويُقوّيها وأنت نائم.',
    },
    body: {
      en: 'Sleep is not "off time." During deep sleep your brain replays the day’s learning and moves it into long-term storage — this is memory consolidation. Skipping sleep before or after learning badly hurts memory.',
      ar: 'النوم ليس «وقتًا معطَّلًا». خلال النوم العميق يُعيد دماغك تشغيل تعلُّم اليوم وينقله إلى التخزين بعيد المدى — هذا هو ترسيخ الذاكرة. وتخطّي النوم قبل التعلُّم أو بعده يؤذي الذاكرة بشدّة.',
    },
    steps: {
      en: [
        'Aim for a full night (most adults need about 7-9 hours).',
        'Keep a regular sleep and wake time.',
        'Review key material shortly before sleep.',
        'Never trade sleep for cramming.',
        'A short nap after learning can also help.',
      ],
      ar: [
        'استهدِف ليلةً كاملة (يحتاج معظم البالغين نحو 7–9 ساعات).',
        'حافِظ على مواعيد نومٍ واستيقاظٍ منتظمة.',
        'راجِع المادّة الأساسيّة قُبَيل النوم.',
        'لا تُقايِض النوم بالحشو أبدًا.',
        'قيلولةٌ قصيرةٌ بعد التعلُّم قد تُفيد أيضًا.',
      ],
    },
    note: {
      en: 'A rested brain that studied less usually beats a tired brain that crammed all night.',
      ar: 'دماغٌ مرتاحٌ درس أقلّ يغلب عادةً دماغًا مُتعَبًا حشا الليل كلّه.',
    },
  },
  {
    id: 'exercise',
    icon: Dumbbell,
    accent: 'emerald',
    title: { en: 'Exercise', ar: 'الرياضة' },
    oneLiner: {
      en: 'Moving your body makes your brain better at learning.',
      ar: 'تحريك جسمك يجعل دماغك أفضل في التعلُّم.',
    },
    body: {
      en: 'Even a brisk walk improves memory, attention, and mood. Exercise raises BDNF — a protein that helps brain cells grow and connect — and boosts blood flow to memory regions. A single session of moderate exercise can improve memory the next day.',
      ar: 'حتى مشيٌ سريعٌ يُحسِّن الذاكرة والانتباه والمزاج. الرياضة ترفع بروتين BDNF — الذي يساعد خلايا الدماغ على النموّ والتشابُك — وتزيد تدفُّق الدم إلى مناطق الذاكرة. وجلسةٌ واحدةٌ من رياضةٍ معتدلةٍ قد تُحسِّن الذاكرة في اليوم التالي.',
    },
    steps: {
      en: [
        'Get regular aerobic exercise most days (walk, cycle, dance).',
        'Even 20-30 minutes helps your brain.',
        'Try light exercise before studying, or after learning to help memory.',
        'Take movement breaks during long sessions.',
      ],
      ar: [
        'مارِس رياضةً هوائيّةً منتظمةً معظم الأيّام (مشي، دراجة، رقص).',
        'حتى 20–30 دقيقةً تفيد دماغك.',
        'جرِّب رياضةً خفيفةً قبل الدراسة، أو بعد التعلُّم لتعزيز الذاكرة.',
        'خُذ استراحات حركةٍ خلال الجلسات الطويلة.',
      ],
    },
    example: {
      en: 'David feels foggy over his reading. A brisk 20-minute walk clears his head — and a tricky idea suddenly makes sense (diffuse mode plus a brain boost from moving).',
      ar: 'يشعر داوود بالضبابيّة فوق قراءته. مشيٌ سريعٌ عشرين دقيقةً يصفّي ذهنه — وفجأةً تتّضح فكرةٌ عويصة (النمط المُنتشِر مع دفعةٍ للدماغ من الحركة).',
    },
  },
  {
    id: 'nutrition',
    icon: Apple,
    accent: 'rose',
    title: { en: 'Food & water', ar: 'الطعام والماء' },
    oneLiner: {
      en: 'Your brain runs on what you eat and drink — feed it steadily.',
      ar: 'يعمل دماغك على ما تأكل وتشرب — فغذِّه بثبات.',
    },
    body: {
      en: 'The brain needs a steady supply of energy and water. Even mild dehydration can reduce concentration and short-term memory. Big sugar spikes and crashes wreck steady focus.',
      ar: 'يحتاج الدماغ إمدادًا ثابتًا من الطاقة والماء. وحتى جفافٌ خفيفٌ قد يُنقِص التركيز والذاكرة قصيرة المدى. وارتفاعات السكّر الكبيرة وانهياراته تُخرِّب التركيز الثابت.',
    },
    steps: {
      en: [
        'Drink water through the day.',
        'Eat steady-energy foods (whole grains, fruit, veg, protein, healthy fats).',
        'Do not study very hungry or right after a heavy meal.',
        'Use caffeine wisely — too much, or late, harms sleep.',
      ],
      ar: [
        'اشرَب الماء على مدار اليوم.',
        'تناوَل أطعمةً ثابتة الطاقة (حبوبٌ كاملة، فاكهة، خضار، بروتين، دهونٌ صحّيّة).',
        'لا تدرُس وأنت جائعٌ جدًّا أو مباشرةً بعد وجبةٍ ثقيلة.',
        'استعمِل الكافيين بحكمة — فكثرته أو تأخُّره يؤذي النوم.',
      ],
    },
    example: {
      en: 'Nadia swaps afternoon candy and soda for water, nuts, and fruit. Instead of a sugar crash after 30 minutes, her energy stays steady and she focuses far longer.',
      ar: 'تستبدل نور بحلوى العصر والمشروبات الغازيّة ماءً ومكسّراتٍ وفاكهة. فبدل انهيار سكّرٍ بعد 30 دقيقة، تبقى طاقتها ثابتةً وتركِّز أطول بكثير.',
    },
  },
  {
    id: 'breaks',
    icon: Coffee,
    accent: 'amber',
    title: { en: 'Real breaks', ar: 'استراحاتٌ حقيقيّة' },
    oneLiner: {
      en: 'Rest is part of learning, not time off from it.',
      ar: 'الراحة جزءٌ من التعلُّم، لا انقطاعٌ عنه.',
    },
    body: {
      en: 'Attention fades over time, and pushing through gives less and less. Short breaks reset focus and let diffuse mode quietly process what you just learned. This is the logic behind the Pomodoro Technique.',
      ar: 'يخبو الانتباه مع الوقت، والدفع قسرًا يعطي أقلّ فأقلّ. الاستراحات القصيرة تُعيد ضبط التركيز وتدَع النمط المُنتشِر يعالج بهدوءٍ ما تعلَّمته للتوّ. هذا هو منطق تقنية بومودورو.',
    },
    steps: {
      en: [
        'Take a short break every 25-50 minutes.',
        'Take a longer break after a few cycles.',
        'Do something truly restful: walk, stretch, look outside.',
        'Avoid your phone in breaks — that is stimulation, not rest.',
        'Rest your eyes: look far away for 20 seconds.',
      ],
      ar: [
        'خُذ استراحةً قصيرةً كلّ 25–50 دقيقة.',
        'خُذ استراحةً أطول بعد بضع جولات.',
        'افعَل شيئًا مريحًا حقًّا: امشِ، تمدَّد، انظُر إلى الخارج.',
        'تجنَّب هاتفك في الاستراحات — فذلك إثارة، لا راحة.',
        'أرِح عينيك: انظُر إلى بعيدٍ 20 ثانية.',
      ],
    },
    note: {
      en: 'Treating breaks as laziness leads to burnout. "Resting" by scrolling tires the brain more.',
      ar: 'اعتبار الاستراحات كسلًا يؤدّي إلى الإنهاك. و«الراحة» بالتصفُّح تُتعِب الدماغ أكثر.',
    },
  },
  {
    id: 'stress',
    icon: HeartPulse,
    accent: 'orange',
    title: { en: 'Manage stress', ar: 'أدِر التوتُّر' },
    oneLiner: {
      en: 'A little sharpens you; too much blocks memory.',
      ar: 'قليلُه يشحذك، وكثيرُه يحجب الذاكرة.',
    },
    body: {
      en: 'A small amount of stress can boost focus. But high, ongoing stress floods the body with cortisol, which harms the memory system — that is why people "blank" on tests they studied for. Chronic stress also wrecks sleep, which wrecks memory.',
      ar: 'قليلٌ من التوتُّر قد يعزِّز التركيز. لكن التوتُّر العالي المستمرّ يُغرِق الجسم بالكورتيزول الذي يؤذي نظام الذاكرة — لذلك «يبيضّ» ذهن الناس في اختباراتٍ ذاكروا لها. والتوتُّر المزمن يُخرِّب النوم أيضًا، والنوم يُخرِّب الذاكرة.',
    },
    steps: {
      en: [
        'Prepare early with spacing and active recall — feeling ready calms nerves.',
        'Use slow, deep breathing before stressful moments.',
        'Get enough sleep and exercise (both lower stress).',
        'Reframe nerves as "I’m ready", not "I’m panicking".',
        'Break big tasks into small steps, and ask for help early.',
      ],
      ar: [
        'استعِدّ مبكّرًا بالمباعدة والاستدعاء النشط — فالشعور بالجاهزيّة يُهدّئ الأعصاب.',
        'استخدِم تنفُّسًا بطيئًا عميقًا قبل اللحظات المتوتّرة.',
        'نَل قسطًا كافيًا من النوم والرياضة (وكلاهما يُخفِّض التوتُّر).',
        'أعِد صياغة التوتُّر كـ«أنا جاهز»، لا «أنا مذعور».',
        'قسِّم المهامّ الكبيرة إلى خطواتٍ صغيرة، واطلُب المساعدة مبكّرًا.',
      ],
    },
    example: {
      en: 'Sara used to blank on exams. She now prepares two weeks early with spaced self-testing, and does five slow breaths before the test. Her mind stays clear and the answers come.',
      ar: 'كان «يبيضّ» ذهن سارة في الامتحانات. صارت الآن تستعدّ قبل أسبوعين باختبارٍ ذاتيٍّ متباعد، وتأخذ خمسة أنفاسٍ بطيئةٍ قبل الاختبار. يبقى ذهنها صافيًا وتأتي الإجابات.',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  PART 7 — Putting it together: the study plan                      */
/* ------------------------------------------------------------------ */

export const STUDY_PLAN: Tip[] = [
  {
    id: 'schedule',
    icon: CalendarRange,
    accent: 'violet',
    title: { en: 'Build a study schedule', ar: 'ابنِ جدول دراسة' },
    oneLiner: {
      en: 'A simple written plan turns good intentions into spaced, active study.',
      ar: 'خطّةٌ مكتوبةٌ بسيطةٌ تحوِّل النوايا الطيّبة إلى دراسةٍ متباعدةٍ نشطة.',
    },
    body: {
      en: 'A plan removes daily decision-making, builds in spacing automatically, and makes sure every topic is covered before the deadline instead of a last-minute panic.',
      ar: 'الخطّة تُزيل قرارات كلّ يوم، وتُدمِج المباعدة تلقائيًّا، وتضمن تغطية كلّ موضوعٍ قبل الموعد النهائيّ بدل ذعر اللحظة الأخيرة.',
    },
    steps: {
      en: [
        'List everything to learn, with deadlines.',
        'Break it into small, session-sized topics.',
        'Work backward from the exam and spread topics across the weeks.',
        'Schedule reviews, not just first-time learning.',
        'Write active tasks: "self-test Chapter 3", not "read Chapter 3".',
        'Plan breaks and sleep in. Review the plan weekly.',
      ],
      ar: [
        'أدرِج كلّ ما ينبغي تعلُّمه، مع المواعيد النهائيّة.',
        'قسِّمه إلى مواضيع صغيرةٍ بحجم جلسة.',
        'اعمَل رجوعًا من الامتحان ووزِّع المواضيع على الأسابيع.',
        'جدوِل المراجعات، لا التعلُّم الأوّل فقط.',
        'اكتُب مهامَّ نشطة: «اختبِر نفسك في الفصل 3»، لا «اقرأ الفصل 3».',
        'أدرِج الاستراحات والنوم في الخطّة. وراجِع الخطّة أسبوعيًّا.',
      ],
    },
    example: {
      en: 'With a month to go, Bilal lists 12 topics, assigns a few per week, and schedules each to reappear for review days later. He self-tests every session and does a mixed review each Sunday — no all-nighter needed.',
      ar: 'وأمامه شهر، يُدرِج بلال 12 موضوعًا، يُسنِد بضعةً لكلّ أسبوع، ويجدوِل كلًّا ليعود للمراجعة بعد أيّام. يختبر نفسه كلّ جلسة ويُجري مراجعةً ممزوجةً كلّ أحد — بلا سهر ليلة.',
    },
    note: {
      en: 'The classic mistake: planning only the first study of each topic and no reviews. Without spaced reviews, the forgetting curve wins.',
      ar: 'الخطأ الكلاسيكيّ: تخطيط الدراسة الأولى لكلّ موضوعٍ فقط دون مراجعات. وبلا مراجعاتٍ متباعدة، ينتصر منحنى النسيان.',
    },
  },
  {
    id: 'cornell-notes',
    icon: NotebookPen,
    accent: 'sky',
    title: { en: 'Notes that test you', ar: 'ملاحظاتٌ تختبرك' },
    oneLiner: {
      en: 'Good notes are a retrieval tool, not a storage box.',
      ar: 'الملاحظات الجيّدة أداة استدعاء، لا صندوق تخزين.',
    },
    body: {
      en: 'The Cornell method splits the page into three zones: a wide right column for notes, a narrow left column for cue questions, and a summary strip at the bottom. It builds the proven methods right into your notes.',
      ar: 'تقسِم طريقة كورنيل الصفحة إلى ثلاث مناطق: عمودٌ واسعٌ للملاحظات، وعمودٌ ضيّقٌ بجانبه لأسئلة التذكير، وشريط ملخّصٍ في الأسفل. فتبني الطرائق المُثبَتة في صميم ملاحظاتك.',
    },
    steps: {
      en: [
        'Take notes in the right column, in your own words.',
        'Soon after, add question cues in the left column.',
        'Write a short summary at the bottom in your own words.',
        'To study: cover the notes, answer the cue questions from memory.',
        'Uncover to check. Repeat, spaced over days.',
      ],
      ar: [
        'دوِّن الملاحظات في العمود الواسع بكلماتك.',
        'بعدها بقليل، أضِف أسئلة تذكيرٍ في العمود الضيّق.',
        'اكتُب ملخّصًا قصيرًا في الأسفل بكلماتك.',
        'للدراسة: غطِّ الملاحظات، وأجِب عن أسئلة التذكير من الذاكرة.',
        'اكشِف للتحقُّق. وكرِّر، متباعدًا على مدى أيّام.',
      ],
    },
    example: {
      en: 'Priya used to copy slides word-for-word and reread them. With Cornell notes she covers the right side and quizzes herself with her own questions — her notes became a built-in practice test, and her grades rose.',
      ar: 'كانت رُبى تنسخ الشرائح حرفيًّا وتُعيد قراءتها. بملاحظات كورنيل تغطّي جانب الملاحظات وتختبر نفسها بأسئلتها — فصارت ملاحظاتها اختبارًا تدريبيًّا جاهزًا، وارتفعت درجاتها.',
    },
    note: {
      en: 'Do not transcribe word-for-word, and skip the hours of pretty color-coding. Notes you can test yourself with beat perfect notes you only reread.',
      ar: 'لا تنسَخ حرفيًّا، وتخطَّ ساعات التلوين الأنيق. ملاحظاتٌ تختبر نفسك بها تغلب ملاحظاتٍ مثاليّةً تكتفي بإعادة قراءتها.',
    },
  },
  {
    id: 'test-prep',
    icon: ClipboardCheck,
    accent: 'emerald',
    title: { en: 'Prepare for tests', ar: 'استعِدّ للاختبارات' },
    oneLiner: {
      en: 'Practice like the real test — retrieve, under real conditions, spaced.',
      ar: 'تمرَّن كالاختبار الحقيقيّ — استدعِ، في ظروفٍ واقعيّة، متباعدًا.',
    },
    body: {
      en: 'The best way to get good at taking a test is to practice retrieving under pressure. Practice tests are the highest-utility method, and doing them spaced out builds durable memory and cuts test-day anxiety.',
      ar: 'أفضل طريقةٍ لتُتقن أداء الاختبار هي التمرُّن على الاستدعاء تحت الضغط. الاختبارات التجريبيّة أعلى الطرائق فائدة، وإجراؤها متباعدًا يبني ذاكرةً متينةً ويقلّل قلق يوم الاختبار.',
    },
    steps: {
      en: [
        'Start early with a spaced schedule — never rely on cramming.',
        'Use past papers and practice questions as your main tool.',
        'Simulate real conditions: timed, no notes, quiet room.',
        'Do "brain dumps": write everything you remember, then check gaps.',
        'Review every wrong answer — mistakes show what to study next.',
        'Sleep well before the exam; do a light review, not a panic cram.',
      ],
      ar: [
        'ابدأ مبكّرًا بجدولٍ متباعد — ولا تعتمد على الحشو أبدًا.',
        'اجعَل أوراق الأعوام السابقة والأسئلة التدريبيّة أداتك الأساسيّة.',
        'حاكِ الظروف الحقيقيّة: بوقتٍ محدَّد، بلا ملاحظات، في غرفةٍ هادئة.',
        'أجرِ «تفريغًا ذهنيًّا»: اكتُب كلّ ما تتذكَّره، ثم افحَص الثغرات.',
        'راجِع كلّ إجابةٍ خاطئة — فالأخطاء تُري ما تدرُسه تاليًا.',
        'نَم جيّدًا قبل الامتحان؛ وأجرِ مراجعةً خفيفة، لا حشوًا ذُعريًّا.',
      ],
    },
    example: {
      en: 'For his driving theory test, Juan takes timed practice tests, reviews every wrong answer, and repeats over two weeks. By test day the real exam feels like just another practice round.',
      ar: 'لاختبار قيادته النظريّ، يُجري يوسف اختباراتٍ تدريبيّةً موقوتة، ويراجع كلّ إجابةٍ خاطئة، ويكرِّر على مدى أسبوعين. بحلول يوم الاختبار يبدو الامتحان الحقيقيّ كجولةٍ تدريبيّةٍ أخرى.',
    },
  },
]
