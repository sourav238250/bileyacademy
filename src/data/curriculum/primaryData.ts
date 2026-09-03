import { ClassGradeInfo } from '../../types';

export const PRIMARY_GRADES_DATA: ClassGradeInfo[] = [
  // Class 1
  {
    gradeNumber: 1,
    gradeLabel: 'Class 1',
    category: 'primary',
    ageGroup: '6 - 7 Years',
    academicFocus: 'Phonics, Number Sense, World Around Us & Touch-and-Learn Computing',
    weeklySchedulePreview: { days: 'Mon, Wed, Fri', timings: '3:30 PM - 5:30 PM', mode: 'Offline Classroom' },
    subjects: [
      {
        id: 'c1-eng',
        name: 'English',
        code: 'ENG-101',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Phonics, vocabulary expansion, simple sentence framing, storytelling and reading aloud.',
        weeklyHours: 4,
        totalModules: 8,
        learningOutcomes: ['Recognize letter-sound correlations', 'Sight words vocabulary of 250+ words', 'Form basic descriptive sentences', 'Oral storytelling confidence'],
        keyChapters: [
          { title: 'Phonics & Alphabet Sounds', description: 'Vowels, consonants, blending sounds (sh, ch, th).', subtopics: ['Short vowels', 'Long vowels', 'Rhyming words'], practicalOrActivity: 'Phonics flashcard drills' },
          { title: 'Picture Comprehension & Words', description: 'Associating objects, naming words and action verbs.', subtopics: ['Nouns in everyday life', 'Action words (Verbs)', 'Opposites'], practicalOrActivity: 'Picture story creation' },
          { title: 'Sentence Making & Simple Grammar', description: 'Capitals, full stops, using is/am/are.', subtopics: ['Capital letters', 'Punctuation basics', 'Simple greetings'], practicalOrActivity: 'Interactive dialogue games' }
        ],
        referenceMaterials: ['Biley Primary Phonics Handbook', 'Picture Word Companion Series'],
        examPattern: 'Fun Oral & Worksheet Assessments (Continuous Evaluation)',
        practicalAvailable: true
      },
      {
        id: 'c1-math',
        name: 'Mathematics',
        code: 'MATH-101',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Counting 1 to 100, number bonds, single-digit addition/subtraction, shapes, and patterns.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: ['Fluency in counting and comparing up to 100', 'Mental addition and subtraction up to 20', 'Identifying basic geometric 2D shapes', 'Understanding time and calendar basics'],
        keyChapters: [
          { title: 'Numbers & Place Value Basics', description: 'Counting, forward/backward, before/after/between.', subtopics: ['Numbers up to 100', 'Tens and Ones introduction', 'Comparing numbers (<, >, =)'], practicalOrActivity: 'Abacus & bead counting' },
          { title: 'Addition & Subtraction (0-20)', description: 'Concrete object addition, number lines, real-life word problems.', subtopics: ['Counting on number line', 'Word problems on toys/fruits', 'Zero concept'], practicalOrActivity: 'Visual block math exercises' },
          { title: 'Shapes, Space & Patterns', description: 'Circles, squares, rectangles, triangles, repeating sequences.', subtopics: ['2D geometric forms', 'Spatial relations (inside/outside)', 'Pattern recognition'], practicalOrActivity: 'Pattern bead stringing' }
        ],
        referenceMaterials: ['Biley PlayMath Workbook', 'Abacus Foundations'],
        examPattern: 'Activity-based problem solving worksheets & math games',
        practicalAvailable: true
      },
      {
        id: 'c1-comp',
        name: 'Computer',
        code: 'COMP-101',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Introduction to computers, keyboard layout, mouse handling, and creative drawing with MS Paint/Tux Paint.',
        weeklyHours: 3,
        totalModules: 6,
        learningOutcomes: ['Identify parts of a computer (CPU, Monitor, Mouse, Keyboard)', 'Mouse control & left/right click precision', 'Drawing shapes and coloring digitally', 'Computer lab etiquette & hygiene'],
        keyChapters: [
          { title: 'Meet the Computer', description: 'What is a machine? Computer vs manual work.', subtopics: ['Machines around us', 'Types of computers (Desktop, Tablet)', 'Do\'s and Don\'ts'], practicalOrActivity: 'Identifying hardware in smart lab' },
          { title: 'Using the Mouse & Keyboard', description: 'Click, double click, drag, typing letters & numbers.', subtopics: ['Alphabet keys', 'Number keys', 'Spacebar & Enter key'], practicalOrActivity: 'Typing games & balloon burst' },
          { title: 'Fun with Digital Drawing (Tux Paint)', description: 'Brush tools, color palette, eraser, stamp tools.', subtopics: ['Drawing basic houses & trees', 'Color fill tool', 'Saving drawings'], practicalOrActivity: 'Weekly digital art project' }
        ],
        referenceMaterials: ['Biley Little Techies Handbook', 'Tux Paint Lab Guide'],
        examPattern: 'Hands-on Computer Lab assignments & digital painting tests',
        practicalAvailable: true
      },
      {
        id: 'c1-sci',
        name: 'Science',
        code: 'SCI-101',
        iconName: 'Leaf',
        color: 'amber',
        description: 'Living vs non-living, parts of plants, animal kingdom, our senses, and weather patterns.',
        weeklyHours: 4,
        totalModules: 8,
        learningOutcomes: ['Distinguish living and non-living objects', 'Identify human five sense organs and functions', 'Understand basic plant growth and domestic animals', 'Appreciate day/night cycles and seasons'],
        keyChapters: [
          { title: 'Our Amazing Body & 5 Senses', description: 'Eyes, ears, nose, tongue, skin and hygiene.', subtopics: ['Sense functions', 'Healthy food habits', 'Body cleanliness'], practicalOrActivity: 'Blindfold touch & smell activity' },
          { title: 'Plants & Animals Around Us', description: 'Trees, shrubs, domestic vs wild animals, baby animals.', subtopics: ['Parts of a plant', 'Animal sounds & homes', 'Taking care of pets'], practicalOrActivity: 'Seed germination in cotton cup' },
          { title: 'Sky, Seasons & Earth', description: 'Sun, moon, stars, rain, summer, and winter.', subtopics: ['Day and night cycle', 'Weather changes', 'Water uses and saving water'], practicalOrActivity: 'Weather chart observation' }
        ],
        referenceMaterials: ['Biley Young Naturalist Book 1', 'Interactive Science Discovery Kit'],
        examPattern: 'Observation journals, oral quizzes & model demonstrations',
        practicalAvailable: true
      }
    ]
  },

  // Class 2 to 4 overview (Primary Foundation)
  {
    gradeNumber: 4,
    gradeLabel: 'Class 2, 3 & 4 (Primary Mastery)',
    category: 'primary',
    ageGroup: '7 - 10 Years',
    academicFocus: 'Grammar mastery, Multi-digit Math & Mental Arithmetic, Block Coding & Environmental Science',
    weeklySchedulePreview: { days: 'Mon to Thu', timings: '4:00 PM - 6:00 PM', mode: 'Offline Classroom + Hybrid Lab' },
    subjects: [
      {
        id: 'c4-eng',
        name: 'English',
        code: 'ENG-PRM',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Parts of speech, tense fundamentals, reading comprehension, creative paragraph writing, and spelling mastery.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: ['Apply nouns, pronouns, adjectives, verbs, adverbs correctly', 'Write 100-word cohesive paragraphs', 'Unseen passage comprehension with 90% accuracy', 'Spelling bee and vocabulary enrichment'],
        keyChapters: [
          { title: 'Grammar Foundations', description: 'Nouns (proper, common, collective), Pronouns, Adjectives of quality/quantity.', subtopics: ['Singular/Plural rules', 'Gender rules', 'Articles (A, An, The)'], practicalOrActivity: 'Grammar tree chart building' },
          { title: 'Tenses & Action Words', description: 'Simple Present, Past, and Future tenses with irregular verbs.', subtopics: ['Verb conjugations', 'Subject-Verb agreement', 'Negative sentences'], practicalOrActivity: 'Tense timeline board game' },
          { title: 'Comprehension & Creative Composition', description: 'Extracting key facts from passages and writing letters/paragraphs.', subtopics: ['Paragraph on favorite festival/pet', 'Informal letter to a friend', 'Poetry recitation'], practicalOrActivity: 'Weekly creative writing journal' }
        ],
        referenceMaterials: ['Biley Junior Grammar & Composition', 'Wren & Martin Junior Companion'],
        examPattern: 'Bi-weekly unit tests, vocabulary quizzes & term end assessments',
        practicalAvailable: true
      },
      {
        id: 'c4-math',
        name: 'Mathematics',
        code: 'MATH-PRM',
        iconName: 'Calculator',
        color: 'blue',
        description: '4-digit arithmetic, fractions, decimals intro, geometry, perimeter, time, money, and Olympiad problem solving.',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: ['Long division and multi-digit multiplication', 'Fraction additions and visual representations', 'Measuring perimeter, area of grids, mass, volume', 'Speed mental arithmetic calculation techniques'],
        keyChapters: [
          { title: 'Large Numbers & Four Operations', description: 'Place values up to 10,000, addition, subtraction, multiplication & division.', subtopics: ['Estimating sums & products', 'BODMAS intro', 'Word problem decoding'], practicalOrActivity: 'Speed math flashcards' },
          { title: 'Fractions & Decimals Foundation', description: 'Like/unlike fractions, proper/improper, shaded parts to decimals.', subtopics: ['Fraction on number line', 'Equivalent fractions', 'Adding like fractions'], practicalOrActivity: 'Fraction pizza discs' },
          { title: 'Measurement, Geometry & Data', description: 'Perimeter, lines, angles intro, bar graphs and pictographs.', subtopics: ['Converting kg to g, L to mL', 'Reading clocks to exact minutes', 'Interpreting pictographs'], practicalOrActivity: 'Classroom measurement practical' }
        ],
        referenceMaterials: ['Biley Math Prodigy Series (Class 2-4)', 'RS Aggarwal Primary Math Companion'],
        examPattern: 'Weekly mental math speed tests & chapter problem sheets',
        practicalAvailable: true
      },
      {
        id: 'c4-comp',
        name: 'Computer',
        code: 'COMP-PRM',
        iconName: 'Laptop',
        color: 'violet',
        description: 'MS Office basics (Word, PowerPoint intro), file management, internet safety, and block coding (Scratch / Code.org).',
        weeklyHours: 3,
        totalModules: 10,
        learningOutcomes: ['Format documents in MS Word with images and tables', 'Understand operating systems & folders', 'Create animated stories using Scratch block coding', 'Digital citizenship and safe browsing awareness'],
        keyChapters: [
          { title: 'Word Processing Fundamentals (MS Word)', description: 'Font formatting, alignments, bullets, inserting shapes & clip art.', subtopics: ['Creating school posters', 'Page borders & colors', 'Spell check and printing'], practicalOrActivity: 'Designing a class magazine cover' },
          { title: 'Logic & Block Coding in Scratch', description: 'Sprites, stage backgrounds, motion blocks, repeat loops, sound effects.', subtopics: ['Sequential instructions', 'Interactive quiz in Scratch', 'Event handling (When Clicked)'], practicalOrActivity: 'Build a mini Maze Game' },
          { title: 'Internet, Email & Cyber Safety', description: 'What is the World Wide Web? Search engines and password security.', subtopics: ['Browsing educational websites', 'Recognizing unsafe links', 'Protecting personal data'], practicalOrActivity: 'Lab quiz on cyber safety' }
        ],
        referenceMaterials: ['Biley CodeCraft Junior Lab Guide', 'Scratch 3.0 Creative Computing'],
        examPattern: 'Practical project submission & live coding lab tests',
        practicalAvailable: true
      },
      {
        id: 'c4-sci',
        name: 'Science',
        code: 'SCI-PRM',
        iconName: 'Sparkles',
        color: 'amber',
        description: 'States of matter, human organ systems, photosynthesis, simple machines, water cycle, and solar system.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: ['Understand solids, liquids, gases and state changes', 'Explain human digestive and respiratory systems', 'Describe how plants produce food and transport nutrients', 'Identify levers, pulleys, and inclined planes in daily life'],
        keyChapters: [
          { title: 'Matter & Its States', description: 'Solids, liquids, gases, evaporation, condensation, freezing.', subtopics: ['Properties of matter', 'Soluble and insoluble substances', 'Filtration & sedimentation'], practicalOrActivity: 'Salt crystallization & water purification experiment' },
          { title: 'Human Body Systems', description: 'Digestive, circulatory, respiratory, and skeletal systems.', subtopics: ['Journey of food', 'Heartbeat and pulse', 'Bones and joints'], practicalOrActivity: 'Stethoscope sound model demonstration' },
          { title: 'Ecosystems, Soil & Space', description: 'Food chains, layers of soil, revolution & rotation of planets.', subtopics: ['Producers, consumers, decomposers', 'Soil erosion prevention', '8 Planets and Moon phases'], practicalOrActivity: 'Soil water retention experiment' }
        ],
        referenceMaterials: ['Biley Explorers in Science (Class 2-4)', 'National Science Olympiad Prep Guide'],
        examPattern: 'Hands-on science experiments, diagram exams & Olympiad mock tests',
        practicalAvailable: true
      }
    ]
  }
];
