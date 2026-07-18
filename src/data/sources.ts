import type { Localized } from '@/i18n/config'

export interface Source {
  /** Book / paper / tool name — kept in its original language. */
  title: string
  /** Citation or short descriptor. */
  meta: Localized<string>
  note?: Localized<string>
  url?: string
}

export interface SourceGroup {
  label: Localized<string>
  items: Source[]
}

/** Real, credible references behind the guide. */
export const SOURCES: SourceGroup[] = [
  {
    label: { en: 'Foundational books', ar: 'كتبٌ تأسيسيّة' },
    items: [
      {
        title: 'Make It Stick: The Science of Successful Learning',
        meta: {
          en: 'Brown, Roediger & McDaniel (2014), Harvard University Press',
          ar: 'Brown, Roediger & McDaniel (2014), Harvard University Press',
        },
        note: {
          en: 'The best-known summary of retrieval practice, spacing, interleaving, and desirable difficulty.',
          ar: 'أشهر تلخيصٍ لممارسة الاستدعاء، والمباعدة، والمزج، والصعوبة المرغوبة.',
        },
      },
      {
        title: 'A Mind for Numbers / “Learning How to Learn”',
        meta: {
          en: 'Barbara Oakley & Terrence Sejnowski (2014, and the Coursera course)',
          ar: 'Barbara Oakley & Terrence Sejnowski (2014, ودورة Coursera)',
        },
        note: {
          en: 'Focused vs diffuse thinking, chunking, procrastination, and the Pomodoro Technique.',
          ar: 'التفكير المركَّز مقابل المُنتشِر، والتقطيع، والتسويف، وتقنية بومودورو.',
        },
      },
      {
        title: 'Mindset: The New Psychology of Success',
        meta: {
          en: 'Carol S. Dweck (2006), Random House',
          ar: 'Carol S. Dweck (2006), Random House',
        },
        note: {
          en: 'Growth vs fixed mindset.',
          ar: 'عقليّة النموّ مقابل الثابتة.',
        },
      },
      {
        title: 'Peak: Secrets from the New Science of Expertise',
        meta: {
          en: 'Anders Ericsson & Robert Pool (2016)',
          ar: 'Anders Ericsson & Robert Pool (2016)',
        },
        note: {
          en: 'Deliberate practice — and a correction of the “10,000-hour” myth.',
          ar: 'التمرين المتعمَّد — وتصحيحٌ لخرافة «10000 ساعة».',
        },
      },
      {
        title: 'Deep Work',
        meta: {
          en: 'Cal Newport (2016), Grand Central Publishing',
          ar: 'Cal Newport (2016), Grand Central Publishing',
        },
        note: {
          en: 'Focused, distraction-free work.',
          ar: 'عملٌ مركَّزٌ خالٍ من المُشتِّتات.',
        },
      },
      {
        title: 'Atomic Habits',
        meta: {
          en: 'James Clear (2018), Avery',
          ar: 'James Clear (2018), Avery',
        },
        note: {
          en: 'Habit loops, the 2-minute rule, tiny habits.',
          ar: 'حلقات العادة، وقاعدة الدقيقتين، والعادات الصغيرة.',
        },
      },
    ],
  },
  {
    label: { en: 'Landmark research', ar: 'أبحاثٌ فارقة' },
    items: [
      {
        title: 'Improving Students’ Learning With Effective Learning Techniques',
        meta: {
          en: 'Dunlosky, Rawson, Marsh, Nathan & Willingham (2013), Psychological Science in the Public Interest',
          ar: 'Dunlosky, Rawson, Marsh, Nathan & Willingham (2013), Psychological Science in the Public Interest',
        },
        note: {
          en: 'Rated practice testing and distributed practice as high utility.',
          ar: 'صنَّفت الاختبار التدريبيّ والتمرين الموزَّع بأنّهما عاليا الفائدة.',
        },
        url: 'https://journals.sagepub.com/doi/abs/10.1177/1529100612453266',
      },
      {
        title: 'Test-Enhanced Learning (the testing effect)',
        meta: {
          en: 'Roediger & Karpicke (2006), Psychological Science',
          ar: 'Roediger & Karpicke (2006), Psychological Science',
        },
        note: {
          en: 'Self-testing beat rereading by a wide margin on delayed tests.',
          ar: 'تفوَّق الاختبار الذاتيّ على إعادة القراءة بفارقٍ كبيرٍ في الاختبارات المؤجَّلة.',
        },
        url: 'https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x',
      },
      {
        title: 'Replication and Analysis of Ebbinghaus’ Forgetting Curve',
        meta: {
          en: 'Murre & Dros (2015), PLOS ONE',
          ar: 'Murre & Dros (2015), PLOS ONE',
        },
        note: {
          en: 'Modern replication of the 1885 forgetting curve.',
          ar: 'إعادةٌ حديثةٌ لتجربة منحنى النسيان لعام 1885.',
        },
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644',
      },
      {
        title: 'The Shuffling of Mathematics Problems Improves Learning',
        meta: {
          en: 'Rohrer & Taylor (2007), Instructional Science',
          ar: 'Rohrer & Taylor (2007), Instructional Science',
        },
        note: {
          en: 'Interleaved practice roughly doubled next-day test scores.',
          ar: 'ضاعف التمرين الممزوج تقريبًا درجات اختبار اليوم التالي.',
        },
        url: 'http://uweb.cas.usf.edu/~drohrer/pdfs/Rohrer&Taylor2007IS.pdf',
      },
      {
        title: 'The Magical Number 4 in Short-Term Memory',
        meta: {
          en: 'Cowan (2001), Behavioral and Brain Sciences (revising Miller, 1956)',
          ar: 'Cowan (2001), Behavioral and Brain Sciences (مراجعةً لـ Miller, 1956)',
        },
        note: {
          en: 'Working-memory capacity is small — likely about 4 items.',
          ar: 'سعة الذاكرة العاملة صغيرة — نحو 4 عناصر على الأرجح.',
        },
      },
      {
        title: 'Cognitive Load During Problem Solving',
        meta: {
          en: 'Sweller (1988), Cognitive Science',
          ar: 'Sweller (1988), Cognitive Science',
        },
        note: {
          en: 'The origin of Cognitive Load Theory.',
          ar: 'منشأ نظريّة الحِمل المعرفيّ.',
        },
      },
      {
        title: 'Learning Styles: Concepts and Evidence',
        meta: {
          en: 'Pashler, McDaniel, Rohrer & Bjork (2008), Psychological Science in the Public Interest',
          ar: 'Pashler, McDaniel, Rohrer & Bjork (2008), Psychological Science in the Public Interest',
        },
        note: {
          en: 'Found essentially no evidence for matching teaching to a learning “style”.',
          ar: 'لم تجد دليلًا يُذكَر على جدوى مطابقة التعليم لـ«نمط» تعلُّم.',
        },
      },
      {
        title: 'How Are Habits Formed',
        meta: {
          en: 'Lally, van Jaarsveld, Potts & Wardle (2010), European Journal of Social Psychology',
          ar: 'Lally, van Jaarsveld, Potts & Wardle (2010), European Journal of Social Psychology',
        },
        note: {
          en: 'Habits took a median of about 66 days to become automatic (range ~18–254).',
          ar: 'استغرقت العادات وسيطًا نحو 66 يومًا لتصير تلقائيّة (المدى نحو 18–254).',
        },
        url: 'https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674',
      },
      {
        title: 'Growth-mindset meta-analyses (both sides)',
        meta: {
          en: 'Sisk et al. (2018), Psychological Science; Yeager et al. (2019), Nature',
          ar: 'Sisk et al. (2018), Psychological Science; Yeager et al. (2019), Nature',
        },
        note: {
          en: 'Small average effects overall; more helpful for lower-achieving students.',
          ar: 'آثارٌ وسطيّةٌ صغيرةٌ إجمالًا؛ وأكثر نفعًا للطلاب الأدنى تحصيلًا.',
        },
      },
    ],
  },
  {
    label: { en: 'Brain care', ar: 'العناية بالدماغ' },
    items: [
      {
        title: 'Sleep, Learning, and Memory',
        meta: {
          en: 'Harvard Medical School — Healthy Sleep',
          ar: 'Harvard Medical School — Healthy Sleep',
        },
        note: {
          en: 'How sleep consolidates memory.',
          ar: 'كيف يُرسِّخ النوم الذاكرة.',
        },
        url: 'https://healthysleep.med.harvard.edu/healthy/matters/benefits-of-sleep/learning-memory',
      },
      {
        title: 'Exercise, BDNF, and memory',
        meta: {
          en: 'Nature Scientific Reports (2021) and reviews on PubMed Central',
          ar: 'Nature Scientific Reports (2021) ومراجعات على PubMed Central',
        },
        note: {
          en: 'A single session of moderate exercise can improve memory.',
          ar: 'جلسةٌ واحدةٌ من رياضةٍ معتدلةٍ قد تُحسِّن الذاكرة.',
        },
        url: 'https://www.nature.com/articles/s41598-021-93813-5',
      },
      {
        title: 'Multitasking: Switching Costs',
        meta: {
          en: 'American Psychological Association',
          ar: 'American Psychological Association',
        },
        note: {
          en: 'Task-switching harms speed and accuracy.',
          ar: 'التنقُّل بين المهامّ يؤذي السرعة والدقّة.',
        },
        url: 'https://www.apa.org/topics/research/multitasking',
      },
    ],
  },
  {
    label: { en: 'Free tools & summaries', ar: 'أدواتٌ وملخّصاتٌ مجّانيّة' },
    items: [
      {
        title: 'The Learning Scientists',
        meta: {
          en: 'Six evidence-based strategies, with free downloads',
          ar: 'ستُّ استراتيجيّاتٍ قائمةٍ على الأدلّة، مع تحميلاتٍ مجّانيّة',
        },
        url: 'https://www.learningscientists.org/blog/2016/8/18-1',
      },
      {
        title: 'Anki',
        meta: {
          en: 'Free, open-source spaced-repetition flashcards',
          ar: 'بطاقات مراجعةٍ متباعدةٍ مجّانيّة ومفتوحة المصدر',
        },
        url: 'https://apps.ankiweb.net/',
      },
      {
        title: 'The Pomodoro Technique',
        meta: {
          en: 'Francesco Cirillo’s official method',
          ar: 'الطريقة الرسميّة لفرانشيسكو تشيريلو',
        },
        url: 'https://francescocirillo.com/products/the-pomodoro-technique',
      },
      {
        title: 'Cornell Note-Taking System',
        meta: {
          en: 'Cornell University Learning Strategies Center',
          ar: 'مركز استراتيجيّات التعلُّم بجامعة كورنيل',
        },
        url: 'https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/',
      },
    ],
  },
]
