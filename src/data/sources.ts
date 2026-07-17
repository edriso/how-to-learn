export interface Source {
  title: string
  meta: string
  note?: string
  url?: string
}

export interface SourceGroup {
  label: string
  items: Source[]
}

/** Real, credible references behind the guide. */
export const SOURCES: SourceGroup[] = [
  {
    label: 'Foundational books',
    items: [
      {
        title: 'Make It Stick: The Science of Successful Learning',
        meta: 'Brown, Roediger & McDaniel (2014), Harvard University Press',
        note: 'The best-known summary of retrieval practice, spacing, interleaving, and desirable difficulty.',
      },
      {
        title: 'A Mind for Numbers / “Learning How to Learn”',
        meta: 'Barbara Oakley & Terrence Sejnowski (2014, and the Coursera course)',
        note: 'Focused vs diffuse thinking, chunking, procrastination, and the Pomodoro Technique.',
      },
      {
        title: 'Mindset: The New Psychology of Success',
        meta: 'Carol S. Dweck (2006), Random House',
        note: 'Growth vs fixed mindset.',
      },
      {
        title: 'Peak: Secrets from the New Science of Expertise',
        meta: 'Anders Ericsson & Robert Pool (2016)',
        note: 'Deliberate practice — and a correction of the “10,000-hour” myth.',
      },
      {
        title: 'Deep Work',
        meta: 'Cal Newport (2016), Grand Central Publishing',
        note: 'Focused, distraction-free work.',
      },
      {
        title: 'Atomic Habits',
        meta: 'James Clear (2018), Avery',
        note: 'Habit loops, the 2-minute rule, tiny habits.',
      },
    ],
  },
  {
    label: 'Landmark research',
    items: [
      {
        title: 'Improving Students’ Learning With Effective Learning Techniques',
        meta: 'Dunlosky, Rawson, Marsh, Nathan & Willingham (2013), Psychological Science in the Public Interest',
        note: 'Rated practice testing and distributed practice as high utility.',
        url: 'https://journals.sagepub.com/doi/abs/10.1177/1529100612453266',
      },
      {
        title: 'Test-Enhanced Learning (the testing effect)',
        meta: 'Roediger & Karpicke (2006), Psychological Science',
        note: 'Self-testing beat rereading by a wide margin on delayed tests.',
        url: 'https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x',
      },
      {
        title: 'Replication and Analysis of Ebbinghaus’ Forgetting Curve',
        meta: 'Murre & Dros (2015), PLOS ONE',
        note: 'Modern replication of the 1885 forgetting curve.',
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644',
      },
      {
        title: 'The Shuffling of Mathematics Problems Improves Learning',
        meta: 'Rohrer & Taylor (2007), Instructional Science',
        note: 'Interleaved practice roughly doubled next-day test scores.',
        url: 'http://uweb.cas.usf.edu/~drohrer/pdfs/Rohrer&Taylor2007IS.pdf',
      },
      {
        title: 'The Magical Number 4 in Short-Term Memory',
        meta: 'Cowan (2001), Behavioral and Brain Sciences (revising Miller, 1956)',
        note: 'Working-memory capacity is small — likely about 4 items.',
      },
      {
        title: 'Cognitive Load During Problem Solving',
        meta: 'Sweller (1988), Cognitive Science',
        note: 'The origin of Cognitive Load Theory.',
      },
      {
        title: 'Learning Styles: Concepts and Evidence',
        meta: 'Pashler, McDaniel, Rohrer & Bjork (2008), Psychological Science in the Public Interest',
        note: 'Found essentially no evidence for matching teaching to a learning “style”.',
      },
      {
        title: 'How Are Habits Formed',
        meta: 'Lally, van Jaarsveld, Potts & Wardle (2010), European Journal of Social Psychology',
        note: 'Habits took a median of about 66 days to become automatic (range ~18–254).',
        url: 'https://onlinelibrary.wiley.com/doi/10.1002/ejsp.674',
      },
      {
        title: 'Growth-mindset meta-analyses (both sides)',
        meta: 'Sisk et al. (2018), Psychological Science; Yeager et al. (2019), Nature',
        note: 'Small average effects overall; more helpful for lower-achieving students.',
      },
    ],
  },
  {
    label: 'Brain care',
    items: [
      {
        title: 'Sleep, Learning, and Memory',
        meta: 'Harvard Medical School — Healthy Sleep',
        note: 'How sleep consolidates memory.',
        url: 'https://healthysleep.med.harvard.edu/healthy/matters/benefits-of-sleep/learning-memory',
      },
      {
        title: 'Exercise, BDNF, and memory',
        meta: 'Nature Scientific Reports (2021) and reviews on PubMed Central',
        note: 'A single session of moderate exercise can improve memory.',
        url: 'https://www.nature.com/articles/s41598-021-93813-5',
      },
      {
        title: 'Multitasking: Switching Costs',
        meta: 'American Psychological Association',
        note: 'Task-switching harms speed and accuracy.',
        url: 'https://www.apa.org/topics/research/multitasking',
      },
    ],
  },
  {
    label: 'Free tools & summaries',
    items: [
      {
        title: 'The Learning Scientists',
        meta: 'Six evidence-based strategies, with free downloads',
        url: 'https://www.learningscientists.org/blog/2016/8/18-1',
      },
      {
        title: 'Anki',
        meta: 'Free, open-source spaced-repetition flashcards',
        url: 'https://apps.ankiweb.net/',
      },
      {
        title: 'The Pomodoro Technique',
        meta: 'Francesco Cirillo’s official method',
        url: 'https://francescocirillo.com/products/the-pomodoro-technique',
      },
      {
        title: 'Cornell Note-Taking System',
        meta: 'Cornell University Learning Strategies Center',
        url: 'https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/',
      },
    ],
  },
]
