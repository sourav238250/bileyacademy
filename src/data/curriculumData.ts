import { ClassGradeInfo } from '../types';

export const GRADE_CATEGORIES = [
  {
    id: 'primary' as const,
    title: 'Primary Foundation',
    classes: 'Classes 1 to 4 (WBBPE / CBSE)',
    badge: 'Ages 6 - 10',
    description: 'Nurturing curiosity, logical reasoning (WBBPE / CBSE), computational thinking, and language fluency through activity-based learning.',
    icon: 'Sparkles',
    color: 'amber',
    subjectsList: ['English', 'Mathematics', 'Computer', 'Science']
  },
  {
    id: 'upper_primary' as const,
    title: 'Upper Primary',
    classes: 'Classes 5 to 8 (WBBSE / CBSE)',
    badge: 'Ages 10 - 14',
    description: 'Transitioning to structured conceptual sciences, algebra, biology, programming (WBBSE / CBSE), and strong analytical problem solving.',
    icon: 'BookOpen',
    color: 'emerald',
    subjectsList: ['Mathematics', 'Science', 'Biology', 'English', 'Computer Science / Application']
  },
  {
    id: 'secondary' as const,
    title: 'Secondary School',
    classes: 'Classes 9 and 10 (WBBSE / CBSE)',
    badge: 'Ages 14 - 16',
    description: 'Rigorous Board Exam preparation (WBBSE Madhyamik & CBSE), in-depth laboratory practicals, Olympiad foundations, and analytical precision.',
    icon: 'GraduationCap',
    color: 'blue',
    subjectsList: ['Mathematics', 'Science', 'Biology', 'English', 'Computer Science / Application']
  },
  {
    id: 'higher_secondary' as const,
    title: 'Higher Secondary',
    classes: 'Classes 11 and 12 (WBCHSE / CBSE)',
    badge: 'Ages 16 - 18',
    description: 'Dual-track mastery for Board Exams (WBCHSE / CBSE) and competitive entrances (JEE Main/Adv, WBJEE, Olympiads).',
    icon: 'Atom',
    color: 'indigo',
    subjectsList: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Science / Application']
  }
];

export const ALL_GRADES_DATA: ClassGradeInfo[] = [
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
  },

  // Class 5 to 8 (Upper Primary)
  {
    gradeNumber: 8,
    gradeLabel: 'Classes 5 to 8 (Upper Primary)',
    category: 'upper_primary',
    ageGroup: '10 - 14 Years',
    academicFocus: 'Core Science specialization (Physics/Chem/Bio), Advanced Algebra & Geometry, Python & Web basics, Formal Writing',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:30 PM - 7:00 PM', mode: 'Offline + Interactive Digital Portal' },
    subjects: [
      {
        id: 'up-math',
        name: 'Mathematics',
        code: 'MATH-UP',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Integers, rational numbers, algebraic expressions, linear equations, geometry proofs, mensuration, exponents, and statistics.',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: ['Mastery over rational numbers and exponents rules', 'Solve linear equations in one variable with confidence', 'Geometric constructions and angle theorems', 'Surface areas and volumes of cubes/cuboids/cylinders', 'Data handling, probability, and pie charts'],
        keyChapters: [
          { title: 'Rational Numbers & Exponents', description: 'Operations on rational numbers, laws of exponents, scientific notation.', subtopics: ['Properties (closure, commutative, associative)', 'Negative exponents', 'Standard form of small/large numbers'], practicalOrActivity: 'Exponent power towers calculation challenge' },
          { title: 'Algebraic Expressions & Linear Equations', description: 'Monomials, polynomials, factorization, algebraic identities, linear word problems.', subtopics: ['(a+b)², (a-b)², a²-b²', 'Middle term splitting', 'Applications on age and speed'], practicalOrActivity: 'Algebraic tile modeling' },
          { title: 'Geometry, Mensuration & Practical Geometry', description: 'Triangles, quadrilaterals, Pythagoras theorem, circles, perimeter & area.', subtopics: ['Angle sum property', 'Constructing quadrilaterals', 'Area of trapezium and polygons'], practicalOrActivity: 'Verifying Pythagoras theorem using cut-outs' }
        ],
        referenceMaterials: ['NCERT Mathematics Class 5-8', 'RS Aggarwal & RD Sharma Foundation Guide', 'Biley Olympiad Math Matrix'],
        examPattern: 'Weekly Chapter Tests, Monthly Grand Mocks & Olympiad Training',
        practicalAvailable: true
      },
      {
        id: 'up-sci',
        name: 'Science (Physical Science)',
        code: 'SCI-UP',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Force, pressure, friction, light, sound, heat, electricity, chemical reactions, acids/bases, and synthetic materials.',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: ['Explain laws of reflection, refraction, and image formation', 'Calculate pressure, speed, and force dynamics', 'Differentiate acids, bases, salts with pH indicators', 'Understand electric circuits, electromagnets, and chemical effects of current'],
        keyChapters: [
          { title: 'Force, Pressure & Friction', description: 'Contact and non-contact forces, atmospheric pressure, fluid friction.', subtopics: ['Types of friction (static, sliding, rolling)', 'Streamlining in vehicles', 'Barometer & manometer basics'], practicalOrActivity: 'Measuring friction with spring balance' },
          { title: 'Light, Sound & Heat', description: 'Ray diagrams of plane & spherical mirrors, sound propagation, frequency, pitch, convection.', subtopics: ['Reflection laws & periscope', 'Human ear mechanism', 'Conduction vs Convection vs Radiation'], practicalOrActivity: 'Optical ray bench & tuning fork experiment' },
          { title: 'Chemical Substances & Changes', description: 'Physical vs chemical change, metals vs non-metals, combustion and flame.', subtopics: ['Reactivity series intro', 'Types of combustion', 'Acids, bases and litmus tests'], practicalOrActivity: 'Litmus paper, turmeric & China rose indicator lab' }
        ],
        referenceMaterials: ['Biley Physical Science Mastery 5-8', 'Lakhmir Singh & Manjit Kaur Science Series'],
        examPattern: 'Lab practical journals, MCQ diagnostic tests & descriptive theory exams',
        practicalAvailable: true
      },
      {
        id: 'up-bio',
        name: 'Biology',
        code: 'BIO-UP',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Cell structure and functions, microorganisms, plant & animal reproduction, conservation of biodiversity, and human health.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: ['Identify plant vs animal cell organelles under microscope', 'Understand friendly vs harmful microbes, antibiotics, vaccines', 'Describe asexual and sexual reproduction in plants and animals', 'Analyze food production, crop management, and ecosystem balance'],
        keyChapters: [
          { title: 'Cell - Structure & Functions', description: 'Discovery of cell, cell membrane, cytoplasm, nucleus, mitochondria, plastids.', subtopics: ['Prokaryotic vs Eukaryotic cells', 'Plant vs Animal cell diagrams', 'Cell division basics'], practicalOrActivity: 'Onion peel and human cheek cell slide preparation under microscope' },
          { title: 'Microorganisms: Friend & Foe', description: 'Bacteria, fungi, protozoa, algae, viruses, fermentation, food preservation.', subtopics: ['Nitrogen cycle', 'Vaccination mechanism', 'Pathogens and vector diseases'], practicalOrActivity: 'Yeast fermentation balloon experiment' },
          { title: 'Reproduction & Endocrine System in Organisms', description: 'Binary fission, budding, human reproductive organs, adolescence hormones.', subtopics: ['Metamorphosis in frogs', 'Hormones (Insulin, Thyroxine, Adrenaline)', 'Nutritional needs of adolescents'], practicalOrActivity: 'Dissecting flower parts for stamen and pistil study' }
        ],
        referenceMaterials: ['Biley Living World Biology Series', 'Pradeep\'s Foundation Biology for Juniors'],
        examPattern: 'Microscopy practical tests, diagram labelling exams & chapter assessments',
        practicalAvailable: true
      },
      {
        id: 'up-eng',
        name: 'English',
        code: 'ENG-UP',
        iconName: 'BookA',
        color: 'teal',
        description: 'Advanced grammar (Active/Passive voice, Direct/Indirect speech), essay writing, formal letters, literature analysis & debates.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: ['Transform active to passive and direct to indirect speech flawlessly', 'Write 250-word analytical essays and formal application letters', 'Analyze literary prose, poetic devices (metaphor, simile, personification)', 'Deliver articulate public speeches and participate in structured debates'],
        keyChapters: [
          { title: 'Advanced Grammar Mechanics', description: 'Clauses (noun, adjective, adverb), Modals, Prepositions, Voice & Narration.', subtopics: ['Rules of reported speech', 'Subject-verb concord exceptions', 'Idioms & phrasal verbs in context'], practicalOrActivity: 'Spotting grammatical errors workshop' },
          { title: 'Formal Writing & Composition', description: 'Letters to Editor, formal leave applications, notice writing, descriptive essays.', subtopics: ['Standard CBSE & Board formats', 'Cohesive paragraph transitions', 'Debate script writing'], practicalOrActivity: 'Publishing articles in Biley Academy Student Journal' },
          { title: 'Literature & Critical Reading', description: 'Classic short stories, poetry appreciation, character sketch analysis.', subtopics: ['Themes and moral dilemmas', 'Rhyme schemes & literary devices', 'Unseen poetry interpretation'], practicalOrActivity: 'Classroom dramatic reading & character roleplay' }
        ],
        referenceMaterials: ['Wren & Martin High School English Grammar', 'Biley Literary Reader & Composition'],
        examPattern: 'Comprehension & writing tests, speech assessments & grammar speed drills',
        practicalAvailable: false
      },
      {
        id: 'up-comp',
        name: 'Computer Science / Application',
        code: 'COMP-UP',
        iconName: 'Code',
        color: 'violet',
        description: 'Introduction to Python programming, HTML/CSS web design, algorithm flowcharting, relational databases intro, and cybersecurity.',
        weeklyHours: 4,
        totalModules: 12,
        learningOutcomes: ['Write interactive Python programs with loops, conditionals, and functions', 'Build responsive static webpages using HTML5 and CSS3', 'Design algorithmic flowcharts for computational problems', 'Understand database tables and SQL queries introduction'],
        keyChapters: [
          { title: 'Python Programming Essentials', description: 'Variables, datatypes (int, float, str, list), if-else, while & for loops.', subtopics: ['Input/Output in Python', 'Functions and modules', 'Building a calculator and guess-the-number game'], practicalOrActivity: 'Hands-on Python coding lab assignments' },
          { title: 'Web Development with HTML5 & CSS', description: 'Tags, headings, lists, tables, forms, CSS styling, colors, layout styling.', subtopics: ['Structuring a website', 'Styling buttons & navigation bars', 'Embedding multimedia'], practicalOrActivity: 'Create a personal portfolio website' },
          { title: 'Algorithms, Data & Cyber Ethics', description: 'Pseudocode, flowcharts, search algorithms, intellectual property rights.', subtopics: ['Linear search logic', 'Sorting algorithms intro', 'Cyber ethics & plagiarism prevention'], practicalOrActivity: 'Flowchart design using visual modeling tools' }
        ],
        referenceMaterials: ['Biley Python & Webcraft Lab Manual', 'Sumita Arora Computer Applications Foundation'],
        examPattern: 'Hands-on live coding tests, website building projects & viva voce',
        practicalAvailable: true
      }
    ]
  },

  // Class 9 and 10 (Secondary School)
  {
    gradeNumber: 10,
    gradeLabel: 'Classes 9 & 10 (Secondary Board Preparation)',
    category: 'secondary',
    ageGroup: '14 - 16 Years',
    academicFocus: '100% Board Exam Target (WBBSE Madhyamik & CBSE), Rigorous Physics/Chemistry/Biology Labs, Olympiads & Engineering Foundation',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '4:30 PM - 7:45 PM', mode: 'Classroom Lectures + Lab + Doubt Clinic' },
    subjects: [
      {
        id: 'sec-math',
        name: 'Mathematics',
        code: 'MATH-10',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Real numbers, polynomials, linear equations pair, quadratic equations, arithmetic progressions, coordinate geometry, trigonometry, circles, surface areas & statistics/probability.',
        weeklyHours: 8,
        totalModules: 15,
        learningOutcomes: ['Score 95%+ in Class 10 Board Examinations', 'Master trigonometric identities and height & distance calculations', 'Prove circle theorems, tangent properties and area calculations', 'Solve complex quadratic equations and AP word problems with speed'],
        keyChapters: [
          { title: 'Algebra (Quadratic Equations & AP)', description: 'Discriminant, roots, nature of roots, nth term and sum of n terms of Arithmetic Progressions.', subtopics: ['Real-world quadratic modeling', 'Sum to n terms derivations', 'Solving by factorization and quadratic formula'], practicalOrActivity: 'Graphical plotting of parabolas and roots' },
          { title: 'Trigonometry & Applications', description: 'Trigonometric ratios, values for specific angles (0°, 30°, 45°, 60°, 90°), identities, heights & distances.', subtopics: ['sin²θ + cos²θ = 1 proofs', 'Angles of elevation & depression', 'Multi-step lighthouse & tower problems'], practicalOrActivity: 'Clinometer field measurement of school building height' },
          { title: 'Coordinate Geometry & Circles', description: 'Distance formula, section formula, area of triangle, tangents to a circle theorems.', subtopics: ['Internal division proofs', 'Number of tangents from external point', 'Properties of cyclic quadrilaterals'], practicalOrActivity: 'Circle tangent construction on geometry software' }
        ],
        referenceMaterials: ['NCERT Class 9 & 10 Mathematics', 'RD Sharma Class 10 Exemplar & Problems', 'Biley 10-Year Solved Board Archive'],
        examPattern: 'Weekly 80-mark Board Mock Tests, Step-Marking Workshops & Time-Management Drills',
        practicalAvailable: true
      },
      {
        id: 'sec-sci',
        name: 'Science (Physics & Chemistry)',
        code: 'SCI-10',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Light reflection/refraction, human eye & colorful world, electricity, magnetic effects of current, chemical reactions, periodic classification, carbon and its compounds.',
        weeklyHours: 8,
        totalModules: 16,
        learningOutcomes: ['Derive lens & mirror formula with sign conventions', 'Apply Ohm\'s Law, Joule\'s law of heating, and Fleming\'s left/right hand rules', 'Balance complex redox chemical equations and ionic mechanisms', 'Master carbon catenation, homologous series, and IUPAC nomenclature basics'],
        keyChapters: [
          { title: 'Optics & Electricity (Physics)', description: 'Refractive index, Snell\'s law, lens maker concept, resistance in series/parallel, electric power.', subtopics: ['Sign convention for mirrors and lenses', 'Household circuit wiring and fuses', 'Magnetic field around solenoid and motor principle'], practicalOrActivity: 'Ohm\'s law verification & focal length determination lab' },
          { title: 'Chemical Reactions, Acids & Bases (Chemistry)', description: 'Combination, decomposition, displacement, double displacement, redox, pH scale, salts.', subtopics: ['Chlor-alkali process', 'Baking soda, washing soda, POP preparation', 'Corrosion & rancidity prevention'], practicalOrActivity: 'Reaction of zinc with HCl and pH testing of common household liquids' },
          { title: 'Carbon & Its Compounds (Chemistry)', description: 'Covalent bonding, allotropes of carbon, functional groups (alcohol, aldehyde, ketone, acid), soaps & detergents.', subtopics: ['Esterification and saponification', 'Addition and substitution reactions', 'Micelle formation mechanism'], practicalOrActivity: 'Soap preparation and hard vs soft water cleansing action test' }
        ],
        referenceMaterials: ['Biley Class 10 Science Blueprint', 'Lakhmir Singh Physics & Chemistry Class 10', 'NCERT Science & Exemplar'],
        examPattern: 'Full Laboratory Practicals, CBSE & WBBSE Board Pattern Mocks with Diagram Grading',
        practicalAvailable: true
      },
      {
        id: 'sec-bio',
        name: 'Biology',
        code: 'BIO-10',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Life processes (nutrition, respiration, transportation, excretion), control & coordination, heredity & evolution, and our environment.',
        weeklyHours: 6,
        totalModules: 12,
        learningOutcomes: ['Draw and label intricate anatomical diagrams (Nephron, Heart, Brain, Reflex Arc)', 'Explain Mendel\'s laws of inheritance (Monohybrid & Dihybrid crosses)', 'Describe double circulation in human cardiovascular system', 'Analyze trophic levels, 10% energy law, and ozone layer dynamics'],
        keyChapters: [
          { title: 'Life Processes (Nutrition, Respiration, Transport, Excretion)', description: 'Autotrophic vs heterotrophic, aerobic/anaerobic respiration, structure of nephron & human heart.', subtopics: ['Photosynthesis light and dark reactions', 'Dialysis and artificial kidney concept', 'Xylem vs Phloem translocation'], practicalOrActivity: 'Demonstrating that chlorophyll & sunlight are essential for photosynthesis' },
          { title: 'Control & Coordination & Reproduction', description: 'Neuron structure, reflex arc, human brain parts, plant hormones (auxin, gibberellin), sexual reproduction in flowering plants & humans.', subtopics: ['Tropic vs nastic movements', 'Double fertilization in angiosperms', 'Contraceptive methods and reproductive health'], practicalOrActivity: 'Dissecting hibiscus flower and observing pollen tubes under microscope' },
          { title: 'Heredity & Ecosystem Management', description: 'Mendelian genetics, sex determination in humans, food webs, biomagnification, waste management.', subtopics: ['Genotype vs Phenotype ratios (3:1, 9:3:3:1)', 'XX vs XY chromosome inheritance', 'Solid waste management and biodegradable polymers'], practicalOrActivity: 'Genetic cross probability simulation with coins' }
        ],
        referenceMaterials: ['Biley Class 10 Biology Master Guide', 'NCERT Biology Class 9-10 with Diagram Atlas', 'S. Chand Biology Class 10'],
        examPattern: 'High-precision Diagram Labeling Tests, Case-Study based Board Questions & Viva',
        practicalAvailable: true
      },
      {
        id: 'sec-eng',
        name: 'English Language & Literature',
        code: 'ENG-10',
        iconName: 'BookA',
        color: 'teal',
        description: 'Reading comprehension passages, analytical paragraph writing, formal editorial letters, grammar transformation, drama & poetry analysis.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: ['Achieve maximum marks in Reading & Writing Board sections', 'Flawless error correction, editing, omit sentences, and narration transformation', 'Deep thematic analysis of prescribed Board literature prose and poetry', 'Produce high-scoring structured analytical arguments'],
        keyChapters: [
          { title: 'Reading Comprehension Mastery', description: 'Discursive and factual passages, inference drawing, vocabulary in context.', subtopics: ['Skimming and scanning techniques', 'Author tone identification', 'Title selection and précis writing'], practicalOrActivity: 'Timed 20-minute unseen passage solving clinics' },
          { title: 'Creative & Formal Writing Skills', description: 'Formal letter to editor, complaint letters, analytical paragraphs based on data/charts.', subtopics: ['Standard 5-step letter structure', 'Comparative language for chart interpretation', 'Word economy and vocabulary enhancement'], practicalOrActivity: 'Drafting public interest op-eds' },
          { title: 'Literature Masterclasses & Critical Essays', description: 'In-depth analysis of Board prose, poetic devices, character motivations, and themes.', subtopics: ['Irony, imagery, symbolism, alliteration', 'Long-answer character sketches', 'Comparative theme synthesis'], practicalOrActivity: 'Student-led literary debates & board model answer drafting' }
        ],
        referenceMaterials: ['CBSE & Board Prescribed Literature Reader', 'All In One English Language & Literature Class 10', 'Biley Board Scoring Playbook'],
        examPattern: 'Full-length 3-hour Board simulation papers with line-by-line feedback',
        practicalAvailable: false
      },
      {
        id: 'sec-comp',
        name: 'Computer Science / Application',
        code: 'COMP-10',
        iconName: 'Code',
        color: 'violet',
        description: 'Object-Oriented Programming in Java / Python, data structures (arrays, strings), SQL database queries, cyber law, and networking fundamentals.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: ['Write error-free OOP programs (Classes, Objects, Methods, Encapsulation)', 'Perform 1D/2D array searching (Linear, Binary) and sorting (Bubble, Selection)', 'Manipulate strings with library methods', 'Execute relational SQL queries (SELECT, WHERE, ORDER BY, GROUP BY)'],
        keyChapters: [
          { title: 'Object-Oriented Programming (Java / Python Track)', description: 'Class design, instance variables, methods, constructors, function overloading.', subtopics: ['Scope of variables and static keyword', 'Pass by value vs Pass by reference', 'Wrapper classes and type casting'], practicalOrActivity: 'Building a Bank Account Management Console Application' },
          { title: 'Array Manipulation & Algorithms', description: 'Single dimensional arrays, multi-dimensional matrices, linear search, bubble sort.', subtopics: ['Array indexing and bounds checking', 'Binary search implementation', 'Matrix addition and transpose'], practicalOrActivity: 'Implementing search & sort visualizer scripts' },
          { title: 'Database Concepts, SQL & Cyber Law', description: 'Relational model, primary keys, SQL DDL & DML statements, IT Act and cyber ethics.', subtopics: ['Creating and updating tables', 'Aggregate functions (COUNT, SUM, AVG)', 'Preventing phishing, cyberbullying, and malware'], practicalOrActivity: 'Database creation and query execution on MySQL terminal' }
        ],
        referenceMaterials: ['Computer Applications with Python / Java (Sumita Arora)', 'Biley CodeLab 100 Solved Board Programs', 'CBSE / WBBSE Board Class 10 Specimen Bank'],
        examPattern: 'Computer Lab Practical Exams (Program output verification, dry run tracing, viva voce)',
        practicalAvailable: true
      }
    ]
  },

  // Class 11 and 12 (Higher Secondary)
  {
    gradeNumber: 12,
    gradeLabel: 'Classes 11 & 12 (Higher Secondary + Competitive)',
    category: 'higher_secondary',
    ageGroup: '16 - 18 Years',
    academicFocus: 'Dual-Engine Mastery: 95%+ Board Exams (WBCHSE / CBSE) + Top Percentile in JEE Main/Adv, WBJEE, CUET',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '3:00 PM - 8:30 PM', mode: 'Intensive Lectures + Advanced Problem Sessions + Computer Lab' },
    subjects: [
      {
        id: 'hs-math',
        name: 'Mathematics',
        code: 'MATH-12',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Calculus (Limits, Continuity, Differentiation, Integration, Differential Equations), Vectors & 3D Geometry, Linear Programming, Probability, Matrices & Determinants, Relations & Functions.',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: ['Flawless mastery of Single & Multi-variable Calculus', 'Solve JEE Advanced level 3D Geometry and Vector equations', 'Compute definite integrals using substitution and standard properties', 'Evaluate conditional probability, Bayes\' theorem, and probability distributions'],
        keyChapters: [
          { title: 'Differential Calculus & Applications', description: 'Continuity, differentiability, chain rule, implicit functions, tangents & normals, maxima and minima.', subtopics: ['L\'Hôpital\'s Rule', 'Rolle\'s & Mean Value Theorems', 'Optimization problems in physics and geometry'], practicalOrActivity: 'Graphing complex functions using calculus derivatives' },
          { title: 'Integral Calculus & Differential Equations', description: 'Indefinite integrals, Definite integrals properties, Area under curves, Order & degree, homogeneous differential equations.', subtopics: ['Integration by parts & partial fractions', 'Leibniz rule of differentiation under integral sign', 'Linear differential equations with integrating factor'], practicalOrActivity: 'Calculating volumes and surface areas using integration' },
          { title: 'Vectors, 3D Geometry & Matrices', description: 'Dot and Cross product, scalar triple product, equations of lines & planes in 3D, shortest distance, matrix inverse and system of equations.', subtopics: ['Direction cosines and direction ratios', 'Coplanarity of lines and angle between planes', 'Cramer\'s rule and Cayley-Hamilton theorem'], practicalOrActivity: '3D vector visualization and spatial rotation simulations' }
        ],
        referenceMaterials: ['NCERT Mathematics Class 11 & 12', 'RD Sharma & Cengage Mathematics Series for JEE', 'Biley 15-Year Solved Board & JEE Archive'],
        examPattern: 'Chapter Tests, Weekly JEE/Board simulation mocks with negative marking analytics',
        practicalAvailable: true
      },
      {
        id: 'hs-phy',
        name: 'Physics',
        code: 'PHY-12',
        iconName: 'Atom',
        color: 'indigo',
        description: 'Mechanics (Kinematics, Newton\'s laws, Work-Energy, Rotational dynamics, Gravitation), Electrodynamics (Electrostatics, Current, Magnetism, EMI & AC), Optics, Modern Physics & Semiconductor Devices.',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: ['Solve complex multi-body Newtonian mechanics and torque balance', 'Calculate electric/magnetic fields using Gauss\'s law, Biot-Savart & Ampere\'s law', 'Analyze AC circuits with resonance and power factor', 'Understand wave-particle duality, photoelectric effect, nuclear reactions & p-n junction diodes'],
        keyChapters: [
          { title: 'Electrodynamics & Magnetism', description: 'Electric charges & fields, potential & capacitance, Kirchhoff\'s laws, cyclotron, moving coil galvanometer, Faraday\'s & Lenz\'s laws, AC circuits.', subtopics: ['Derivations of field due to dipole', 'LCR series circuit impedance and resonance', 'Transformer efficiency and eddy currents'], practicalOrActivity: 'Metre bridge, Potentiometer and galvanometer resistance practicals' },
          { title: 'Ray & Wave Optics', description: 'Total internal reflection, lens maker formula, prism dispersion, Huygens wave theory, Young\'s double slit experiment (YDSE), diffraction & polarization.', subtopics: ['Fringe width calculation in YDSE', 'Brewster\'s law and Malus law', 'Astronomical telescope & compound microscope magnification'], practicalOrActivity: 'Determining refractive index of glass prism and focal length of convex lens' },
          { title: 'Modern Physics & Semiconductors', description: 'Einstein\'s photoelectric equation, Bohr\'s hydrogen model, binding energy curve, p-n junction diode as rectifier, solar cell, LEDs.', subtopics: ['De Broglie wavelength of matter waves', 'Half-life and radioactive decay law', 'Forward and reverse bias characteristics'], practicalOrActivity: 'V-I characteristics of p-n junction diode & Zener diode voltage regulator lab' }
        ],
        referenceMaterials: ['Concepts of Physics (Vol 1 & 2) by HC Verma', 'NCERT Physics Class 11 & 12', 'Biley Advanced Physics Problem Bank', 'DC Pandey Physics Series'],
        examPattern: 'Board pattern theory & derivation exams + JEE speed accuracy tests + Full Lab Viva',
        practicalAvailable: true
      },
      {
        id: 'hs-chem',
        name: 'Chemistry',
        code: 'CHEM-12',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Physical Chemistry (Solutions, Electrochemistry, Chemical Kinetics, Thermodynamics), Inorganic Chemistry (Coordination Compounds, d & f block, p block), Organic Chemistry (Haloalkanes, Alcohols, Aldehydes, Amines, Biomolecules).',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: ['Calculate colligative properties, Nernst equation cell potentials & rate laws', 'Name IUPAC coordination complexes and explain Crystal Field Theory (CFT)', 'Write complete step-by-step organic reaction mechanisms (SN1, SN2, Aldol, Cannizzaro)', 'Understand structure of proteins, nucleic acids (DNA/RNA) and carbohydrate linkages'],
        keyChapters: [
          { title: 'Physical Chemistry (Solutions, Electrochemistry & Kinetics)', description: 'Raoult\'s law, depression in freezing point, molar conductivity, Arrhenius equation, integrated rate equations.', subtopics: ['Van\'t Hoff factor and abnormal molar mass', 'Kohlrausch\'s law and fuel cells', 'Pseudo first order reactions and activation energy'], practicalOrActivity: 'Volumetric titration (KMnO4 with oxalic acid/Mohr salt) and chemical kinetics clock reaction' },
          { title: 'Inorganic Chemistry & Coordination Chemistry', description: 'Transition elements properties, lanthanoid contraction, Werner\'s theory, Valence Bond Theory (VBT), Crystal Field Theory (CFT), isomerism.', subtopics: ['Color and magnetic properties of d-block ions', 'Spectrochemical series and crystal field splitting', 'Chelate effect and biological significance of coordination complexes'], practicalOrActivity: 'Salt analysis (cation and anion identification)' },
          { title: 'Organic Chemistry & Reaction Mechanisms', description: 'Haloalkanes, Alcohols, Phenols, Ethers, Aldehydes, Ketones, Carboxylic acids, Diazonium salts, Biomolecules.', subtopics: ['Reimer-Tiemann and Kolbe reactions', 'Aldol condensation and Cannizzaro mechanisms', 'Carbylamine test and Gabriel phthalimide synthesis'], practicalOrActivity: 'Identification of functional groups (alcohols, aldehydes, carboxylic acids) in organic lab' }
        ],
        referenceMaterials: ['NCERT Chemistry Class 11 & 12', 'OP Tandon Physical & Organic Chemistry', 'MS Chouhan Advanced Problems in Organic Chemistry', 'Biley 500 Must-Do Chemistry Reactions'],
        examPattern: 'Board Subjective Papers + JEE/WBJEE Chemistry Rapid-fire Mock Drills + Qualitative Salt Analysis',
        practicalAvailable: true
      },
      {
        id: 'hs-bio',
        name: 'Biology (Botany & Zoology)',
        code: 'BIO-12',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Reproduction in organisms, Genetics and Evolution, Molecular Basis of Inheritance, Biotechnology (Principles & Applications), Human Health & Disease, Ecology & Environment.',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: ['Score 98%+ in Board Biological Sciences Examinations', 'Explain DNA replication, transcription, translation (lac operon model)', 'Detail recombinant DNA technology, PCR, gel electrophoresis, and gene cloning', 'Analyze human immune system (antibodies, T-cells, B-cells, HIV/Cancer pathology)'],
        keyChapters: [
          { title: 'Genetics & Molecular Basis of Inheritance', description: 'Mendelian principles, chromosomal disorders, Griffith & Hershey-Chase experiments, genetic code, Lac Operon, Human Genome Project.', subtopics: ['Sex linkage (Color blindness & Haemophilia)', 'Transcription machinery and RNA splicing', 'DNA fingerprinting methodology'], practicalOrActivity: 'DNA isolation from plant material (papaya/banana) in laboratory' },
          { title: 'Biotechnology: Principles & Applications', description: 'Restriction enzymes, vectors (pBR322), PCR, bioreactors, Bt cotton, gene therapy (ADA deficiency), transgenic animals.', subtopics: ['Selectable markers and insertion inactivation', 'Downstream processing', 'Ethical issues and biopiracy'], practicalOrActivity: 'Agarose gel electrophoresis demonstration and plasmid restriction mapping' },
          { title: 'Human Health, Immunology & Ecology', description: 'Innate & acquired immunity, vaccines, lymphoid organs, cancer vs normal cells, population attributes, biodiversity hotspots.', subtopics: ['Structure of Antibody molecule (IgG, IgA, IgM)', 'Life cycle of Plasmodium (Malaria)', 'Ecological pyramids and loss of biodiversity'], practicalOrActivity: 'Permanent slide observation of stages of mitosis and blastula development' }
        ],
        referenceMaterials: ['NCERT Biology Class 11 & 12 (Line-by-Line Decode)', 'Trueman\'s Elementary Biology (Vol 1 & 2)', 'Biley Biology 5000+ NCERT Master Question Bank'],
        examPattern: 'Line-by-line NCERT extract tests, Full-length 3-hour Board simulations, Board practicals',
        practicalAvailable: true
      },
      {
        id: 'hs-eng',
        name: 'English Core / Elective',
        code: 'ENG-12',
        iconName: 'BookA',
        color: 'teal',
        description: 'Advanced Reading Comprehension, Note Making & Summarizing, Creative Writing (Notice, Invitations & Replies, Letter to Editor, Job Application with Resume, Article/Report writing), Prescribed Board Literature & Poetic Devices.',
        weeklyHours: 4,
        totalModules: 10,
        learningOutcomes: ['Complete mastery of high-scoring Class 12 Board English Section format', 'Write compelling 150-word Job Applications and Formal Invitations with maximum marks', 'Demonstrate deep literary understanding and thematic articulation in 120-word answers', 'Execute note-making with proper indentation and abbreviation keys in minimum time'],
        keyChapters: [
          { title: 'Advanced Note Making & Comprehension', description: 'Extracting key ideas, hierarchical bullet formatting, abbreviation keys, summary writing.', subtopics: ['Heading and sub-heading structuring', 'Logical abbreviation systems', 'Précis writing in 80 words'], practicalOrActivity: 'Live timed note making masterclass' },
          { title: 'Official & Professional Composition', description: 'Job Applications with detailed Curriculum Vitae, Formal Invitations (Cards & Letters), Report Writing on school events.', subtopics: ['Bio-data format with references', 'Tone appropriateness in invitations', 'Fact-based report writing techniques'], practicalOrActivity: 'Simulated job interview resume portfolio drafting' },
          { title: 'Higher Secondary Literature & Poetry Appreciation', description: 'Detailed critical essays on prescribed texts (Flamingo, Vistas), poetic metaphors, psychological character analysis.', subtopics: ['Themes of lost childhood, oppression, and freedom', 'Irony and symbolism in modern poetry', 'Value-based extrapolation questions'], practicalOrActivity: 'Board model answer writing and peer review grading sessions' }
        ],
        referenceMaterials: ['CBSE Prescribed Textbooks (Flamingo & Vistas)', 'Biley Class 12 English Board Success Blueprint', 'All In One English Core Class 12'],
        examPattern: 'Full 80-mark Board Mock Exams with word-limit optimization grading',
        practicalAvailable: false
      },
      {
        id: 'hs-comp',
        name: 'Computer Science / Computer Application',
        code: 'COMP-12',
        iconName: 'Code',
        color: 'violet',
        description: 'Advanced Python (Files, Functions, OOPs, Data Structures: Stacks/Queues) or Java/C++ track, Computer Networks (Topology, Protocols, IPv4/IPv6, Cyber Security), Relational Database Management (MySQL, Joins, Group By, Python-MySQL Connectivity).',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: ['Write enterprise-level Python/Java programs using OOP, text/binary file handling, and custom exception handling', 'Implement linear Data Structures (Stack using Lists, Queue operations) efficiently', 'Write complex multi-table SQL JOIN queries and integrate with Python via `mysql.connector`', 'Design computer network topologies and calculate transmission delays and bandwidth requirements'],
        keyChapters: [
          { title: 'Advanced Programming & Data Structures', description: 'Recursion, Text/Binary/CSV file I/O, Stack implementation (PUSH, POP, Peek), OOPs principles.', subtopics: ['Pickle module in Python for binary records', 'Stack application in expression evaluation', 'Time and Space complexity basics'], practicalOrActivity: 'Building a Student Management System with file persistence' },
          { title: 'Relational Database & Python Connectivity', description: 'SQL Joins (Equi-Join, Natural Join), Aggregate functions, GROUP BY, HAVING, connecting Python with MySQL database.', subtopics: ['Database cursors and transactions', 'Executing parameterized SQL queries from Python', 'CRUD operations on real-world databases'], practicalOrActivity: 'Developing a full-fledged Library Management Database App with GUI' },
          { title: 'Computer Networks & Cybersecurity', description: 'Network topologies (Star, Bus, Ring, Mesh), OSI vs TCP/IP models, HTTP/HTTPS, DNS, IPv4 vs IPv6, Firewalls, Cryptography, IT Laws.', subtopics: ['Network devices (Hub, Switch, Router, Gateway)', 'Transmission media (Fiber optics vs Coaxial vs Wireless)', 'Cyber safety and data protection guidelines'], practicalOrActivity: 'Network packet tracing and Wi-Fi security audit simulation' }
        ],
        referenceMaterials: ['Computer Science with Python by Sumita Arora / Preeti Arora', 'Biley Practical Lab Manual & Capstone Project Repository', 'CBSE / WBCHSE Class 12 Previous 10-Year Question Bank'],
        examPattern: 'Full Practical Exam (Coding on system + Project report + SQL queries + Viva Voce)',
        practicalAvailable: true
      }
    ]
  }
];
