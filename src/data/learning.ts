import type { LucideIcon } from 'lucide-react'
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

export interface Concept {
  id: string
  icon: LucideIcon
  accent: Accent
  title: string
  oneLiner: string
  body: string
  analogy?: string
}

export type TechTier = 'top' | 'strong' | 'boost'

export interface Technique {
  id: string
  icon: LucideIcon
  accent: Accent
  name: string
  tagline: string
  tier: TechTier
  utility: string
  what: string
  why: string
  steps: string[]
  example: string
  mistakes: string[]
}

export interface Trap {
  id: string
  icon: LucideIcon
  name: string
  feelsLike: string
  truth: string
  instead: string
}

export interface Strategy {
  id: string
  icon: LucideIcon
  accent: Accent
  title: string
  short: string
  detail: string
}

export interface Tip {
  id: string
  icon: LucideIcon
  accent: Accent
  title: string
  oneLiner: string
  body: string
  steps?: string[]
  example?: string
  note?: string
}

/* ------------------------------------------------------------------ */
/*  The Big Idea + the 3 super-strategies                              */
/* ------------------------------------------------------------------ */

export const BIG_IDEA = {
  quote: 'Learning is not about putting information in. It is about pulling information out.',
  body: 'Most people study by reading things again and again. It feels like learning — but it mostly is not. Real learning happens when your brain has to work to remember something. That "good struggle" is called a desirable difficulty. If studying feels too easy, you are probably not learning much.',
  rule: 'Make it a little bit hard, in the right way.',
}

export const SUPER_STRATEGIES: Strategy[] = [
  {
    id: 'recall',
    icon: Brain,
    accent: 'violet',
    title: 'Pull, don’t just push',
    short: 'Test yourself instead of rereading.',
    detail:
      'Close the book and try to remember. Pulling an answer out of your head builds far stronger memory than putting it in again.',
  },
  {
    id: 'space',
    icon: CalendarClock,
    accent: 'sky',
    title: 'Spread it out',
    short: 'Study in small doses over many days.',
    detail:
      'The same total time works much better when it is split across days instead of crammed into one long session. Let a little forgetting happen, then review.',
  },
  {
    id: 'mix',
    icon: Shuffle,
    accent: 'amber',
    title: 'Mix it up',
    short: 'Practice different topics together.',
    detail:
      'Jumping between related topics forces your brain to choose the right method each time. It feels harder, but it builds flexible, lasting skill.',
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
    title: 'The 3 steps of memory',
    oneLiner: 'Take it in, keep it, get it back out.',
    body: 'Memory has three jobs: encoding (taking information in), storage (keeping it), and retrieval (getting it back out). Most people only practice step one. But the step that builds strong memory is getting it back out — and you have to practice that on purpose.',
    analogy:
      'Memory is like a path in a forest. Each time you walk it (each time you recall), the path gets clearer. Never walk it, and the grass grows back.',
  },
  {
    id: 'forgetting-curve',
    icon: TrendingDown,
    accent: 'rose',
    title: 'The forgetting curve',
    oneLiner: 'You forget fast — unless you review.',
    body: 'In 1885 Hermann Ebbinghaus showed we forget new things quickly at first, then more slowly. Your brain clears out what it thinks you do not need. The fix: every time you review (especially by testing yourself), the curve gets flatter and the memory lasts longer.',
    analogy:
      'Reviewed at the right times — a day later, a few days later, a week later — a memory can last for months instead of hours.',
  },
  {
    id: 'working-memory',
    icon: Layers,
    accent: 'indigo',
    title: 'Working vs long-term memory',
    oneLiner: 'Tiny desk, huge warehouse.',
    body: 'Working memory is the small space where you think right now — it holds only about 4 new items at once. Long-term memory is your huge storage. Learning means moving things from the tiny desk to the big warehouse, a little at a time.',
    analogy:
      'Push too much in at once and it overflows, like too many browser tabs freezing your computer. Distractions steal this space too.',
  },
  {
    id: 'chunking',
    icon: Boxes,
    accent: 'teal',
    title: 'Chunking',
    oneLiner: 'Group small pieces into big ones.',
    body: 'A "chunk" is small bits joined into one meaningful unit. "C-A-T" is three items, but "CAT" is one. Experts see big chunks where beginners see many small pieces. Building chunks is how you build skill.',
    analogy:
      'A guitarist learns one chord, then a change, then a verse — small chunks joined into a whole song played without thinking.',
  },
  {
    id: 'focused-diffuse',
    icon: Lightbulb,
    accent: 'amber',
    title: 'Focused vs diffuse mode',
    oneLiner: 'Two gears: sharp focus and relaxed wandering.',
    body: 'Focused mode is tight concentration — great for studying. Diffuse mode is a relaxed, wandering state that happens on a walk or in the shower, quietly connecting ideas. Hard problems often need both. That is why answers "pop" when you stop trying.',
    analogy:
      'Stuck for 30 minutes? A phone-free walk lets diffuse mode solve it in the background. Stepping away is a real strategy, not laziness.',
  },
  {
    id: 'cognitive-load',
    icon: Gauge,
    accent: 'orange',
    title: 'Cognitive load',
    oneLiner: 'Remove clutter so your brain can focus.',
    body: 'Learning gets harder when working memory is overloaded. Some load is the topic itself; some is useless extra difficulty from messy materials and distractions. Cut the junk so your brain can spend its energy on the ideas that matter.',
    analogy:
      'Feeling lost often is not "I’m not smart enough" — it is an overloaded desk. Simplify the material and it becomes learnable.',
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
    name: 'Active recall',
    tagline: 'Test yourself from memory — the strongest way to learn.',
    tier: 'top',
    utility: 'Highest impact',
    what: 'Try to remember information from your own head, without looking. Close the book and ask, "What do I remember?" Then check.',
    why: 'The struggle to pull a memory out strengthens it. In Roediger & Karpicke’s classic study, students who tested themselves remembered far more a week later than students who reread — even though rereading felt easier. Testing does not just measure learning; it causes it.',
    steps: [
      'Read or watch the material once, with full attention.',
      'Close it and look away.',
      'Write down everything you remember, or answer a question from memory (a "brain dump").',
      'Now check your notes and see what you missed.',
      'Focus the next round on what you got wrong. Repeat over several days.',
    ],
    example:
      'Leo reads a biology chapter once, then closes the book and writes what he recalls. He forgot the steps of photosynthesis, so he looks them up and tries again. On test day the material comes back easily — he practiced getting it out.',
    mistakes: [
      'Peeking too early. If you look before really trying, your brain does no work.',
      'Confusing recognizing ("yes, I’ve seen this") with recalling (producing it from memory).',
      'Testing only once. Several spaced tests are far better than one.',
    ],
  },
  {
    id: 'spaced-repetition',
    icon: CalendarDays,
    accent: 'sky',
    name: 'Spaced repetition',
    tagline: 'Spread study over days — small doses beat one big cram.',
    tier: 'top',
    utility: 'Highest impact',
    what: 'Split your study into several short sessions across days and weeks, instead of one long block. Study today, review in a few days, again next week, and so on.',
    why: 'The spacing effect is one of the most reliable findings in psychology. Letting a memory fade a little and then reviving it strengthens it more than never letting it fade. For the same total time, spaced study clearly beats cramming for long-term memory.',
    steps: [
      'Break study into small sessions instead of one big block.',
      'Learn a topic today.',
      'Review it after about 1 day, then 3 days, then a week.',
      'Keep going: 2 weeks, then a month. Grow the gap each time.',
      'Let an app like Anki schedule the reviews for you automatically.',
    ],
    example:
      'Nadia has three weeks before an exam. Instead of 9 hours the night before, she studies 45 minutes a day and revisits old topics. Same hours, spread out — she remembers far more and sleeps well before the test.',
    mistakes: [
      'Cramming: one long session that fades fast.',
      'Reviewing with no gap — if nothing was forgotten, there is little to strengthen.',
      'No plan. Without a simple schedule, "review later" becomes "never".',
    ],
  },
  {
    id: 'interleaving',
    icon: Shuffle,
    accent: 'amber',
    name: 'Interleaving',
    tagline: 'Mix related topics instead of one at a time.',
    tier: 'strong',
    utility: 'Strong — great for math',
    what: 'Mix different topics or problem types in one session, instead of finishing all of A before starting B. Blocked: A A A, B B B. Interleaved: A B C, B C A.',
    why: 'Mixing forces your brain to ask "what kind of problem is this?" each time — a desirable difficulty that builds flexible skill. In Rohrer & Taylor’s study, interleaved practice scored about twice as high on a next-day test, even though it felt harder during practice.',
    steps: [
      'Pick a few related topics or problem types.',
      'Switch between them instead of finishing one first.',
      'Do a problem of type A, then B, then C, then back to A.',
      'First decide which method fits — then solve.',
      'Expect it to feel harder and slower. That is the point.',
    ],
    example:
      'A tennis coach mixes forehands, backhands, and volleys randomly instead of 50 of each. It is harder in practice — but a real match comes mixed, so the mixed-practice player is far more ready. Exams work the same way.',
    mistakes: [
      'Quitting because the struggle feels like failing — it works better later.',
      'Mixing totally unrelated subjects. Interleave related things so you learn to tell them apart.',
    ],
  },
  {
    id: 'elaboration',
    icon: Network,
    accent: 'fuchsia',
    name: 'Elaboration',
    tagline: 'Ask how and why, and connect it to what you know.',
    tier: 'boost',
    utility: 'Booster',
    what: 'Explain ideas in your own words and connect them to things you already know. A strong version is asking "Why is this true? How does this work? What does it connect to?"',
    why: 'New information sticks better when it has many hooks into what you already know. The more meaningful connections a memory has, the more paths lead back to it, so it is easier to recall. Deep processing beats shallow repeating.',
    steps: [
      'Read a new fact or idea.',
      'Ask: "Why is this true? How does it happen?"',
      'Ask: "How does this connect to something I already know?"',
      'Explain the answer in your own words, out loud or in writing.',
      'Link it to a real example from your own life.',
    ],
    example:
      'Instead of memorizing "ice floats", Sofia asks why. Ice is less dense because its molecules spread out when frozen. She links it to icebergs and to ponds freezing on top so fish survive below. Now the fact has meaning — and hooks.',
    mistakes: [
      'Making up explanations without checking them. They only help if they are correct.',
      'Staying shallow. "It’s true because the book says so" is not elaboration.',
    ],
  },
  {
    id: 'dual-coding',
    icon: Images,
    accent: 'cyan',
    name: 'Dual coding',
    tagline: 'Combine words with pictures.',
    tier: 'boost',
    utility: 'Booster',
    what: 'Learn with both words and visuals — diagrams, timelines, simple drawings — together. Not decoration: pictures that actually show how the parts relate.',
    why: 'Your brain handles words and images through partly separate channels. Using both creates two connected memory traces and two routes to recall the idea later. (This is not "learning styles" — everyone benefits from it.)',
    steps: [
      'Find or draw a simple visual that matches the idea.',
      'Put the words and the visual side by side so they support each other.',
      'Explain the visual in your own words.',
      'Cover it and redraw it from memory (this adds active recall).',
      'Keep it clean — clutter adds load.',
    ],
    example:
      'For the water cycle, Kofi draws the sun heating a lake, clouds forming, rain falling, water flowing back — and labels each arrow. In the exam he can "see" his drawing and read the steps off it.',
    mistakes: [
      'Decorative images that add nothing. The visual must show the actual idea.',
      'Copying a diagram without thinking. Explain it and redraw it from memory.',
    ],
  },
  {
    id: 'concrete-examples',
    icon: Blocks,
    accent: 'teal',
    name: 'Concrete examples',
    tagline: 'Turn abstract ideas into real, specific cases.',
    tier: 'boost',
    utility: 'Booster',
    what: 'Explain an abstract idea using specific, real, easy-to-picture examples. Abstract ideas are slippery; concrete examples give them something to hold onto.',
    why: 'A concrete example connects an idea to real things you already understand, which makes it easier to store and recall — and easier to use in new situations later. Use two or three varied examples so you learn the deep pattern, not one surface.',
    steps: [
      'Write down the abstract idea or rule.',
      'Find a real, specific example of it.',
      'Collect two or three different examples.',
      'Explain how each one fits the rule.',
      'Make up your own example to test yourself.',
    ],
    example:
      '"Supply and demand" is abstract. Amara thinks of umbrellas costing more on a rainy day, sold-out concert tickets reselling high, and cheap summer strawberries. Now the rule is anchored to real life.',
    mistakes: [
      'Learning only one example — you may cling to its surface details.',
      'Examples that do not truly fit the concept teach the wrong idea.',
    ],
  },
  {
    id: 'self-explanation',
    icon: Speech,
    accent: 'indigo',
    name: 'Self-explanation',
    tagline: 'Explain each step to yourself as you learn.',
    tier: 'boost',
    utility: 'Booster',
    what: 'As you read or solve, explain to yourself why each step follows the last and how it connects to what you already know. You narrate your own understanding.',
    why: 'Self-explanation forces you to process the material and notice gaps. Chi and colleagues found students who explained steps to themselves learned significantly more and solved problems better. It makes you build the logic instead of passively accepting it.',
    steps: [
      'Pause after each step or idea.',
      'Ask: "Why is this step here? Why does it work?"',
      'Say the answer in your own words.',
      'Ask how it connects to the previous step and to what you know.',
      'If you cannot explain a step — stop. That gap is what to study.',
    ],
    example:
      'Solving physics, Ravi asks after each line, "Why did I do that?" On line three he realizes he just copied a pattern he cannot explain. That gap is gold — he studies it, and the whole problem clicks.',
    mistakes: [
      'Re-reading the steps out loud. Reading is not explaining — say why.',
      'Skipping the parts you cannot explain. Those are the most important.',
    ],
  },
  {
    id: 'feynman',
    icon: GraduationCap,
    accent: 'emerald',
    name: 'The Feynman technique',
    tagline: 'If you can explain it simply, you understand it.',
    tier: 'strong',
    utility: 'Powerful combo',
    what: 'Pick a topic and teach it in plain words, as if to a curious 12-year-old. Wherever you get stuck or reach for jargon, you have found a gap. Fill it, then explain again.',
    why: 'Teaching forces deep, organized understanding. It combines active recall, self-explanation, elaboration, and concrete examples at once. Research on the "protégé effect" shows we learn better when we expect to teach. The test is simple: if you cannot explain it simply, you do not understand it yet.',
    steps: [
      'Write the concept’s name at the top of a blank page.',
      'Explain it simply, in plain words, with an example — no jargon.',
      'Notice where you get stuck or fuzzy. Those are your gaps.',
      'Go back and study those weak spots.',
      'Explain again, even more simply. Repeat until it flows.',
    ],
    example:
      'Elena freezes explaining inflation to her brother. That freeze reveals her gap. She studies, then nails it: "Money slowly buys less. If every kid has more pocket money but the shop has five candy bars, the price goes up." Now she truly gets it.',
    mistakes: [
      'Using jargon to hide gaps. Force plain language.',
      'Only doing it in your head. Write it or say it out loud.',
      'Stopping at the first try. The power is in the loop.',
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  PART 3 — Traps that feel productive but are not                   */
/* ------------------------------------------------------------------ */

export const TRAPS_INTRO =
  'When information sits in front of you, it feels familiar, so your brain says "I know this." That good feeling is a trap — the illusion of competence. These methods create the feeling while building little real memory. The fix is always the same: swap passive review for active, effortful recall.'

export const TRAPS: Trap[] = [
  {
    id: 'rereading',
    icon: BookOpen,
    name: 'Rereading',
    feelsLike: 'Easy and productive — the text gets more familiar each pass.',
    truth: 'Familiarity is not memory. Rereading builds recognition, not recall — and it was rated low utility. Rereaders felt confident but did far worse on delayed tests than self-testers.',
    instead: 'Read once with attention, then close the book and test yourself. Reread only to check answers or fix specific gaps.',
  },
  {
    id: 'highlighting',
    icon: Highlighter,
    name: 'Highlighting',
    feelsLike: 'Active and colorful — a bright page looks like progress.',
    truth: 'You can highlight without thinking, so it rarely makes you retrieve or connect anything. It was rated low utility, and over-highlighting can even pull attention to isolated facts.',
    instead: 'Highlight lightly, only after a section. Then turn the key points into questions and self-test, or summarize in your own words.',
  },
  {
    id: 'cramming',
    icon: Hourglass,
    name: 'Cramming',
    feelsLike: 'Necessary before a deadline — and it can pass tomorrow’s test.',
    truth: 'Cramming is massed practice, the opposite of spacing. It gives short-term recall that vanishes within days, adds stress, and steals the sleep your brain needs to lock memories in.',
    instead: 'Spread study across many days with active recall. Even 20 minutes a day beats a giant last-minute block — and protect your sleep.',
  },
  {
    id: 'learning-styles',
    icon: Shapes,
    name: 'The "learning styles" myth',
    feelsLike: '"I’m a visual learner, so I only learn visually." Popular and intuitive.',
    truth: 'Carefully tested and failed. Pashler and colleagues found essentially no evidence that matching teaching to a personal "style" improves learning. It is one of the most believed, least supported ideas in education.',
    instead: 'Stop labeling yourself. Everyone benefits from combining words and visuals, and from the proven methods. Match the method to the material, not to a fixed "style".',
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
    title: 'Why we procrastinate',
    oneLiner: 'It is not laziness — it is your brain avoiding a bad feeling.',
    body: 'A boring or hard task creates a small pain, so your brain runs to something easy and pleasant (phone, snacks, tidying). The relief is why the habit sticks. It is an emotion problem, not a time-management problem.',
    note: 'The pain is mostly in the anticipation. Once you actually start, the discomfort fades fast — so the whole game is making it easy to start.',
  },
  {
    id: 'pomodoro',
    icon: Timer,
    accent: 'violet',
    title: 'The Pomodoro Technique',
    oneLiner: 'Work in short 25-minute bursts with breaks.',
    body: 'Work in focused chunks (usually 25 minutes), each followed by a short break. A small session beats the dread that causes procrastination, and shifts your focus from finishing (scary) to just starting (easy).',
    steps: [
      'Choose one task.',
      'Set a timer for 25 minutes.',
      'Work with full focus — no phone, no tab-switching.',
      'When it rings, take a 5-minute break (stand, stretch, water).',
      'After 4 rounds, take a longer 15-30 minute break.',
    ],
    example:
      'Fatima dreads her 2,000-word essay. "Just one pomodoro — 25 minutes, then I can stop." The dread disappears once she is writing. Four pomodoros later she has a first draft.',
  },
  {
    id: 'distractions',
    icon: BellOff,
    accent: 'orange',
    title: 'Beat distractions',
    oneLiner: 'Your brain cannot truly multitask — it just switches, and each switch costs you.',
    body: 'Studying while texting or watching videos feels efficient, but your brain rapidly switches tasks, and every switch drops your speed and accuracy. Students who multitask remember less and score lower. Multitasking also fills your tiny working memory with junk.',
    steps: [
      'Remove, do not resist: put your phone in another room.',
      'Use a website or app blocker during study.',
      'Close every tab and program except the one you need.',
      'Keep a "distraction list" — write down stray thoughts for later.',
      'Study in a place your brain links to work.',
    ],
    note: 'The people who multitask most are often worse at filtering distractions, not better. Single-task on purpose.',
  },
  {
    id: 'two-minute',
    icon: Zap,
    accent: 'amber',
    title: 'The 2-minute rule',
    oneLiner: 'Shrink the first step until it is too small to refuse.',
    body: 'Commit to doing a task for just 2 minutes, telling yourself you can stop after. Usually you keep going, because starting was the hard part. For habits, make the starting action take under 2 minutes: "study for an hour" becomes "open the book and read one line".',
    steps: [
      'Pick the task you are avoiding.',
      'Shrink it to a tiny first action ("open the doc, write the title").',
      'Promise yourself you can stop after two minutes.',
      'Start a 2-minute timer and begin.',
      'Notice you are already going — and keep going.',
    ],
    example:
      'Grace dreads chemistry. "I’ll just read one paragraph, two minutes, then quit." Twenty minutes later she is deep in work. The trick was never the two minutes — it was getting past the start.',
  },
  {
    id: 'deep-work',
    icon: Focus,
    accent: 'indigo',
    title: 'Deep work',
    oneLiner: 'Real progress comes from long, uninterrupted focus.',
    body: 'Deep work means full concentration on one demanding task, with zero distractions, for a solid block. Hard learning needs sustained focus so working memory can build real understanding — and constant interruptions destroy it.',
    steps: [
      'Schedule a block (start with 60-90 minutes).',
      'Remove all distractions before you begin — phone away, notifications off.',
      'Pick one clear, meaningful task.',
      'When your mind drifts, gently bring it back.',
      'Take a real break afterward. Guard these blocks like appointments.',
    ],
    note: 'Even the presence of a phone pulls at your attention. Physically remove it — do not keep it "just in case".',
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
    title: 'Growth mindset',
    oneLiner: 'Believing you can grow helps you keep going when it is hard.',
    body: 'A fixed mindset says "my ability is set." A growth mindset says "my ability can grow with effort, good strategies, and help." The honest science: mindset is a helpful foundation that keeps you trying, but its average effect on grades is small — it does not replace good study methods.',
    steps: [
      'Add the word "yet": "I can’t do this" becomes "I can’t do this yet".',
      'Treat mistakes as information: "What did this error teach me?"',
      'Praise strategy and effort, not "being smart".',
      'When stuck, ask "what different approach could I try?"',
    ],
    example:
      'Lin fails a coding test and thinks "I’m not a tech person." She reframes: "I don’t understand loops yet — which strategy haven’t I tried?" She switches to active recall and passes. Belief kept her in; the strategy change won it.',
    note: 'Growth mindset is not just positive thinking. Pair the belief with better methods and real effort.',
  },
  {
    id: 'deliberate-practice',
    icon: Dumbbell,
    accent: 'violet',
    title: 'Deliberate practice',
    oneLiner: 'Focused practice on your weak points, with feedback.',
    body: 'Not mindless repetition — focused practice aimed at your specific weaknesses, with clear goals, fast feedback, and constant stretching just beyond your ability. Quality matters far more than quantity. (The "10,000 hours" line is a myth that oversimplified the real research.)',
    steps: [
      'Pick one narrow, specific skill to improve.',
      'Set a clear goal for the session.',
      'Practice what you cannot quite do yet — not what is already easy.',
      'Get feedback fast: a teacher, an answer key, a recording, a test.',
      'Fix the exact mistakes it reveals, then repeat.',
    ],
    example:
      'A player who just plays games plateaus. Using deliberate practice, she drills only her weak left-hand layups, films herself, fixes her footwork, and repeats — then targets the next weakness.',
    note: 'If practice feels easy and comfortable the whole time, it probably is not deliberate practice.',
  },
  {
    id: 'smart-goals',
    icon: Flag,
    accent: 'sky',
    title: 'SMART goals',
    oneLiner: 'Turn a vague wish into a clear, trackable plan.',
    body: 'A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-bound. Vague goals ("study more") give your brain nothing to grab. Specific goals with deadlines create clear next actions and let you see progress.',
    steps: [
      'Start with the wish: "do well in history".',
      'Specific: "finish and self-test Chapter 4".',
      'Measurable: "score 8/10 on a practice quiz".',
      'Achievable + Relevant: small enough this week, tied to your real aim.',
      'Time-bound: "by Friday evening".',
    ],
    example:
      '"Learn Spanish" is a wish. SMART: "For 4 weeks, use a spaced-repetition app 15 minutes each morning and hold one 20-minute conversation each Saturday." Now Lucia always knows the next step.',
    note: 'Set process goals you control ("3 spaced sessions a week"), not only outcome goals ("get an A").',
  },
  {
    id: 'habits',
    icon: Repeat,
    accent: 'fuchsia',
    title: 'Build study habits',
    oneLiner: 'Make studying automatic, so it does not depend on willpower.',
    body: 'Motivation comes and goes; habits do not need it. Anchor a new study behavior to something you already do, and it becomes routine. Forget "21 days" — one study found habits took a median of about 66 days to feel automatic, and it varies a lot.',
    steps: [
      'Anchor it to an existing routine: "after breakfast, one pomodoro".',
      'Start tiny (use the 2-minute rule).',
      'Same time, same place when you can.',
      'Reduce friction: set your books out the night before.',
      'Track it with an X each day — but if you miss one, just restart.',
    ],
    example:
      'Ken stops relying on motivation. "Right after dinner, I sit and do one 25-minute pomodoro." The first two weeks take effort; by two months it feels automatic.',
    note: 'One missed day is harmless. Just never miss twice in a row.',
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
    title: 'Sleep',
    oneLiner: 'Your brain saves and strengthens memories while you sleep.',
    body: 'Sleep is not "off time." During deep sleep your brain replays the day’s learning and moves it into long-term storage — this is memory consolidation. Skipping sleep before or after learning badly hurts memory.',
    steps: [
      'Aim for a full night (most adults need about 7-9 hours).',
      'Keep a regular sleep and wake time.',
      'Review key material shortly before sleep.',
      'Never trade sleep for cramming.',
      'A short nap after learning can also help.',
    ],
    note: 'A rested brain that studied less usually beats a tired brain that crammed all night.',
  },
  {
    id: 'exercise',
    icon: Dumbbell,
    accent: 'emerald',
    title: 'Exercise',
    oneLiner: 'Moving your body makes your brain better at learning.',
    body: 'Even a brisk walk improves memory, attention, and mood. Exercise raises BDNF — a protein that helps brain cells grow and connect — and boosts blood flow to memory regions. A single session of moderate exercise can improve memory the next day.',
    steps: [
      'Get regular aerobic exercise most days (walk, cycle, dance).',
      'Even 20-30 minutes helps your brain.',
      'Try light exercise before studying, or after learning to help memory.',
      'Take movement breaks during long sessions.',
    ],
    example:
      'David feels foggy over his reading. A brisk 20-minute walk clears his head — and a tricky idea suddenly makes sense (diffuse mode plus a brain boost from moving).',
  },
  {
    id: 'nutrition',
    icon: Apple,
    accent: 'rose',
    title: 'Food & water',
    oneLiner: 'Your brain runs on what you eat and drink — feed it steadily.',
    body: 'The brain needs a steady supply of energy and water. Even mild dehydration can reduce concentration and short-term memory. Big sugar spikes and crashes wreck steady focus.',
    steps: [
      'Drink water through the day.',
      'Eat steady-energy foods (whole grains, fruit, veg, protein, healthy fats).',
      'Do not study very hungry or right after a heavy meal.',
      'Use caffeine wisely — too much, or late, harms sleep.',
    ],
    example:
      'Nadia swaps afternoon candy and soda for water, nuts, and fruit. Instead of a sugar crash after 30 minutes, her energy stays steady and she focuses far longer.',
  },
  {
    id: 'breaks',
    icon: Coffee,
    accent: 'amber',
    title: 'Real breaks',
    oneLiner: 'Rest is part of learning, not time off from it.',
    body: 'Attention fades over time, and pushing through gives less and less. Short breaks reset focus and let diffuse mode quietly process what you just learned. This is the logic behind the Pomodoro Technique.',
    steps: [
      'Take a short break every 25-50 minutes.',
      'Take a longer break after a few cycles.',
      'Do something truly restful: walk, stretch, look outside.',
      'Avoid your phone in breaks — that is stimulation, not rest.',
      'Rest your eyes: look far away for 20 seconds.',
    ],
    note: 'Treating breaks as laziness leads to burnout. "Resting" by scrolling tires the brain more.',
  },
  {
    id: 'stress',
    icon: HeartPulse,
    accent: 'orange',
    title: 'Manage stress',
    oneLiner: 'A little sharpens you; too much blocks memory.',
    body: 'A small amount of stress can boost focus. But high, ongoing stress floods the body with cortisol, which harms the memory system — that is why people "blank" on tests they studied for. Chronic stress also wrecks sleep, which wrecks memory.',
    steps: [
      'Prepare early with spacing and active recall — feeling ready calms nerves.',
      'Use slow, deep breathing before stressful moments.',
      'Get enough sleep and exercise (both lower stress).',
      'Reframe nerves as "I’m ready", not "I’m panicking".',
      'Break big tasks into small steps, and ask for help early.',
    ],
    example:
      'Sara used to blank on exams. She now prepares two weeks early with spaced self-testing, and does five slow breaths before the test. Her mind stays clear and the answers come.',
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
    title: 'Build a study schedule',
    oneLiner: 'A simple written plan turns good intentions into spaced, active study.',
    body: 'A plan removes daily decision-making, builds in spacing automatically, and makes sure every topic is covered before the deadline instead of a last-minute panic.',
    steps: [
      'List everything to learn, with deadlines.',
      'Break it into small, session-sized topics.',
      'Work backward from the exam and spread topics across the weeks.',
      'Schedule reviews, not just first-time learning.',
      'Write active tasks: "self-test Chapter 3", not "read Chapter 3".',
      'Plan breaks and sleep in. Review the plan weekly.',
    ],
    example:
      'With a month to go, Bilal lists 12 topics, assigns a few per week, and schedules each to reappear for review days later. He self-tests every session and does a mixed review each Sunday — no all-nighter needed.',
    note: 'The classic mistake: planning only the first study of each topic and no reviews. Without spaced reviews, the forgetting curve wins.',
  },
  {
    id: 'cornell-notes',
    icon: NotebookPen,
    accent: 'sky',
    title: 'Notes that test you',
    oneLiner: 'Good notes are a retrieval tool, not a storage box.',
    body: 'The Cornell method splits the page into three zones: a wide right column for notes, a narrow left column for cue questions, and a summary strip at the bottom. It builds the proven methods right into your notes.',
    steps: [
      'Take notes in the right column, in your own words.',
      'Soon after, add question cues in the left column.',
      'Write a short summary at the bottom in your own words.',
      'To study: cover the notes, answer the cue questions from memory.',
      'Uncover to check. Repeat, spaced over days.',
    ],
    example:
      'Priya used to copy slides word-for-word and reread them. With Cornell notes she covers the right side and quizzes herself with her own questions — her notes became a built-in practice test, and her grades rose.',
    note: 'Do not transcribe word-for-word, and skip the hours of pretty color-coding. Notes you can test yourself with beat perfect notes you only reread.',
  },
  {
    id: 'test-prep',
    icon: ClipboardCheck,
    accent: 'emerald',
    title: 'Prepare for tests',
    oneLiner: 'Practice like the real test — retrieve, under real conditions, spaced.',
    body: 'The best way to get good at taking a test is to practice retrieving under pressure. Practice tests are the highest-utility method, and doing them spaced out builds durable memory and cuts test-day anxiety.',
    steps: [
      'Start early with a spaced schedule — never rely on cramming.',
      'Use past papers and practice questions as your main tool.',
      'Simulate real conditions: timed, no notes, quiet room.',
      'Do "brain dumps": write everything you remember, then check gaps.',
      'Review every wrong answer — mistakes show what to study next.',
      'Sleep well before the exam; do a light review, not a panic cram.',
    ],
    example:
      'For his driving theory test, Juan takes timed practice tests, reviews every wrong answer, and repeats over two weeks. By test day the real exam feels like just another practice round.',
  },
]
