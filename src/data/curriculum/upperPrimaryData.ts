import { ClassGradeInfo } from '../../types';

export const UPPER_PRIMARY_GRADES_DATA: ClassGradeInfo[] = [
  // ==========================================
  // CLASS 5 (Upper Primary - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 5,
    gradeLabel: 'Class 5 (WBBSE & CBSE)',
    category: 'upper_primary',
    ageGroup: '10 - 11 Years',
    academicFocus: 'Dual-Track Board Foundation: Mathematics (আমার গণিত & Math-Magic), Physical Science (Matter, Energy & Simple Machines), Biology (Human Body, Senses, Nutrition & Environment), English (Butterfly & Marigold), and Computer ICT & Scratch 3.0',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:00 PM - 6:30 PM', mode: 'Offline Classroom + Smart Math Lab' },
    subjects: [
      {
        id: 'c5-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-UP-5',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Comprehensive Class 5 Mathematics Syllabus aligning WBBSE (আমার গণিত) and CBSE (Math-Magic / NCERT): Large 5-6 digit numbers & place value, BODMAS & division verification, Factors & Multiples (HCF/LCM), Common & Decimal fractions, Metric measurement & time, Angles & protractor, Triangles, Circles, Perimeter, Area, and Data handling.',
        weeklyHours: 7,
        totalModules: 14,
        learningOutcomes: [
          'Mastery in 5-6 digit place value (Indian & International numeral systems) and expanded notation',
          'Fluency in BODMAS simplification and division verification (Dividend = Divisor × Quotient + Remainder)',
          'Calculate H.C.F. (গ.সা.গু.) and L.C.M. (ল.সা.গু.) with prime factorization & verify product theorem (HCF × LCM = Product of numbers)',
          'Solve addition, subtraction & conversion of Common & Decimal Fractions (সামান্য ও দশমিক ভগ্নাংশ)',
          'Master Metric System conversions (Kilo, Hecto, Deca, Unit, Deci, Centi, Milli) & Time/Leap Year calculations',
          'Measure and draw angles with protractor (চাঁদা), classify triangles, understand circle parts & compute rectangular/square perimeter and area',
          'Tabulate data with Tally Marks, draw bar graphs, identify line symmetry and solve 3x3 number magic squares'
        ],
        keyChapters: [
          {
            title: 'Large Numbers, Place Value & 4 Operations (বড় সংখ্যা ও চার প্রক্রিয়া)',
            description: 'WBBSE আমার গণিত & CBSE The Fish Tale: 5 and 6 digit numbers, place value & face value, ascending/descending order, multi-digit multiplication, long division algorithm, and BODMAS simplification.',
            subtopics: [
              'Indian and International number systems (একক থেকে কোটি / Millions)',
              'Multi-digit multiplication and long division verification',
              'BODMAS rules: Bar bracket, parentheses, Of, Division, Multiplication, Addition, Subtraction',
              'Word problems on everyday finances and estimation'
            ],
            practicalOrActivity: 'Card-based place value abacus and fastest mental math speed drill'
          },
          {
            title: 'Factors, Multiples, HCF & LCM (গুণনীয়ক, গুণিতক, গ.সা.গু. ও ল.সা.গু.)',
            description: 'WBBSE & CBSE Be My Multiple, I\'ll be Your Factor: Prime and composite numbers, divisibility tests (2, 3, 4, 5, 6, 9, 10), factor trees, HCF and LCM calculation, and product formula.',
            subtopics: [
              'Common factors and common multiples',
              'Divisibility rules and coprime numbers',
              'Prime factorization and Factor Tree method',
              'HCF and LCM calculation using division and factor methods',
              'Verification: HCF × LCM = First Number × Second Number'
            ],
            practicalOrActivity: 'Sieve of Eratosthenes chart for primes from 1 to 100'
          },
          {
            title: 'Fractions & Decimals (সামান্য ভগ্নাংশ ও দশমিক ভগ্নাংশ)',
            description: 'WBBSE & CBSE Parts and Wholes / Tenths and Hundredths: Proper, improper, mixed & equivalent fractions, fraction addition/subtraction, decimal place value, decimal conversion, and operations.',
            subtopics: [
              'Visual fraction representation (parts of a whole)',
              'Conversion between improper and mixed fractions',
              'Addition and subtraction of unlike fractions using LCM',
              'Decimals: Tenths, hundredths, thousandths place value and money conversions'
            ],
            practicalOrActivity: 'Circular fraction disc modeling for equivalent fractions'
          },
          {
            title: 'Measurement & Metric System (মেট্রিক পদ্ধতি, টাকা-পয়সা ও সময়)',
            description: 'Metric conversions for Length (km, m, cm, mm), Mass (kg, g), Capacity (L, mL), decimal money calculations, clock calculations (12h/24h), and calendar leap year math.',
            subtopics: [
              'Metric staircase conversion rules (×10 / ÷10)',
              'Word problems on metric mass, volume, and distance',
              'Time addition/subtraction and 12-hour vs 24-hour clock conversions',
              'Leap year rules and elapsed calendar time calculation'
            ],
            practicalOrActivity: 'Classroom metric measuring tape lab and digital stopwatch timing'
          },
          {
            title: 'Geometry, Angles, Shapes & Mensuration (জ্যামিতি, কোণ, পরিসীমা ও ক্ষেত্রফল)',
            description: 'WBBSE & CBSE Shapes and Angles / Area and its Boundary: Points, rays, lines, angles (acute, right, obtuse, straight), protractor drawing, triangle classification, circle anatomy, and perimeter/area of rectangles and squares.',
            subtopics: [
              'Measuring and drawing angles with a protractor',
              'Classification of triangles by sides (equilateral, isosceles, scalene) and angles',
              'Circle anatomy: Center, radius, diameter, chord, circumference',
              'Perimeter = 2 × (Length + Breadth), Area = Length × Breadth for rectangles and squares'
            ],
            practicalOrActivity: 'Geometric drawing portfolio using compass, ruler, and protractor'
          },
          {
            title: 'Data Handling, Symmetry & Patterns (তথ্য সজ্জা, প্রতিসাম্য ও প্যাটার্ন)',
            description: 'WBBSE & CBSE Smart Charts / Can You See the Pattern? / Does it Look the Same?: Tally mark frequency tables, bar charts, line symmetry, mirror reflections, and 3×3 magic squares.',
            subtopics: [
              'Tally mark frequency tables and reading bar charts',
              'Lines of symmetry in alphabets and 2D geometric shapes',
              'Rotational symmetry (1/2 turn, 1/4 turn)',
              'Number sequences, triangular numbers, and magic squares'
            ],
            practicalOrActivity: 'Student survey bar chart creation and 3×3 magic square puzzle challenge'
          }
        ],
        referenceMaterials: [
          'আমার গণিত (পঞ্চম শ্রেণি) - WBBSE (West Bengal Board of Secondary Education)',
          'Math-Magic Class 5 - NCERT / CBSE',
          'K.C. Nag Primary Mathematics Companion (Class 5 Edition)',
          'Biley Junior Math Matrix & Olympiad Practice Workbook'
        ],
        examPattern: 'Summative & Term Evaluations (Unit Tests + Term Exams) + Continuous Diagnostic Worksheets',
        practicalAvailable: true
      },
      {
        id: 'c5-sci',
        name: 'Science - Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-UP-5',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Physical Science foundations across WBBSE (আমাদের পরিবেশ) and CBSE (NCERT Science): Matter & states, properties of water, force & friction, simple machines (levers, pulleys, inclined planes), energy forms, atmosphere, and natural resource conservation.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Explain solid, liquid, gas properties and physical changes (evaporation, condensation, melting)',
          'Differentiate soluble and insoluble substances, density, floating vs sinking',
          'Identify the 6 simple machines and classify 1st, 2nd, and 3rd class levers',
          'Understand force, gravity, friction, and forms of energy (kinetic, potential, solar, wind)',
          'Describe atmospheric layers, air pressure, water cycle, and pollution prevention'
        ],
        keyChapters: [
          {
            title: 'Matter, States & Separation (পদার্থের অবস্থা ও পৃথকীকরণ)',
            description: 'Solids, liquids, and gases; changes of state; properties of water (buoyancy, floating/sinking, solubility); water filtration and purification methods.',
            subtopics: [
              'Solids, liquids, gases molecular arrangement overview',
              'Solubility, solutions, and separation by sedimentation, decantation, filtration',
              'Evaporation, condensation, and the natural water cycle'
            ],
            practicalOrActivity: 'Water purification filter model and solubility saturation experiment'
          },
          {
            title: 'Force, Work, Energy & Simple Machines (বল, শক্তি ও সরল যন্ত্র)',
            description: 'Types of forces (gravitational, muscular, frictional, magnetic); work and energy forms (solar, heat, mechanical); simple machines: levers (classes 1, 2, 3), pulleys, inclined plane, wheel & axle.',
            subtopics: [
              'Gravity, friction in daily life, and magnetic forces',
              'Energy transformations (solar to electrical, potential to kinetic)',
              'Levers: Fulcrum, Load, Effort and classification (scissors, wheelbarrow, tongs)',
              'Pulleys, inclined plane, screw, and wedge applications'
            ],
            practicalOrActivity: 'Classifying everyday household tools into lever classes'
          },
          {
            title: 'Atmosphere, Energy Resources & Conservation (বায়ুমণ্ডল ও প্রাকৃতিক সম্পদ)',
            description: 'Composition of air (Oxygen, Nitrogen, Carbon dioxide), atmospheric pressure, renewable vs non-renewable energy (coal, petroleum, solar, wind), and environmental conservation.',
            subtopics: [
              'Air composition and properties of air (occupies space, exerts pressure)',
              'Fossil fuels vs clean solar/wind energy',
              'Water conservation, rainwater harvesting, and pollution control'
            ],
            practicalOrActivity: 'Air exerts pressure tumbler experiment and solar cooker model demonstration'
          }
        ],
        referenceMaterials: [
          'আমাদের পরিবেশ (পঞ্চম শ্রেণি) - WBBSE',
          'Looking Around (EVS / Science) - NCERT / CBSE Class 5',
          'Biley Young Physical Scientist Lab Manual'
        ],
        examPattern: 'WBBSE/CBSE Summative Evaluations, Hands-on Lab Demonstrations & Science Quizzes',
        practicalAvailable: true
      },
      {
        id: 'c5-bio',
        name: 'Biology - Life Science (জীবনবিজ্ঞান ও জীবজগৎ)',
        code: 'BIO-UP-5',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Living World & Biology fundamentals across WBBSE (আমাদের পরিবেশ) and CBSE (NCERT Living World): Human skeletal system, digestive system & nutrition, animal super senses, seed germination, plant adaptations, Bengal agriculture, and wildlife conservation.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Describe the human skeletal system, joints, skin protection (melanin), heart & pulse rate',
          'Explain human digestive system journey, taste buds, balanced diet, and deficiency diseases',
          'Understand animal senses (sight, smell, hearing), adaptations, and food chains',
          'Explain seed anatomy, conditions for germination, and seed dispersal mechanisms',
          'Appreciate biodiversity hotspots (Sundarbans mangrove, North Bengal forests) and wildlife conservation'
        ],
        keyChapters: [
          {
            title: 'Human Body Systems & Nutrition (মানবদেহ, পরিপাক ও পুষ্টি)',
            description: 'Skeletal system (bones, joints, cartilage), skin & melanin, heart and lungs; digestive system from tasting to digesting, balanced diet, and deficiency prevention.',
            subtopics: [
              'Bones, joints, skin, and pulse rate monitoring',
              'Tongue taste buds, digestive tract organs, and nutrient absorption',
              'Balanced diet: Carbohydrates, proteins, fats, vitamins, minerals, water'
            ],
            practicalOrActivity: 'Pulse rate measurement before/after exercise & food pyramid chart'
          },
          {
            title: 'Plant Life, Seeds & Bengal Crops (উদ্ভিদের বৃদ্ধি, বীজ ও কৃষিকাজ)',
            description: 'Seed structure (seed coat, cotyledons, embryo), germination factors, seed dispersal (wind, water, animals, explosion), Bengal crops (rice, jute, tea), and herbal medicinal plants (Tulsi, Neem, Kalmegh).',
            subtopics: [
              'Parts of a seed and seed germination requirements (air, water, warmth)',
              'Methods of seed dispersal with botanical examples',
              'Medicinal plants in Bengal and seasonal crop cycles'
            ],
            practicalOrActivity: 'Bean seed germination observation in cotton jar & herbarium sheet'
          },
          {
            title: 'Animal Senses, Habitats & Wildlife Conservation (প্রাণিজগৎ ও অরণ্য সংরক্ষণ)',
            description: 'Super senses in animals (dogs, eagles, bats, ants), snake charmer biology (venom vs non-venomous), food chains, Sundarbans mangrove ecosystem, and endangered species protection.',
            subtopics: [
              'Sensory adaptations in nocturnal and diurnal animals',
              'Food chains and food webs in terrestrial and aquatic habitats',
              'Conservation of Royal Bengal Tiger, One-horned Rhino, and National Parks'
            ],
            practicalOrActivity: 'Building a terrestrial/aquatic food web chart and wildlife sanctuary map'
          }
        ],
        referenceMaterials: [
          'আমাদের পরিবেশ (পঞ্চম শ্রেণি) - WBBSE',
          'NCERT Class 5 Living World Science Reader',
          'Biley Junior Naturalist & Biology Companion'
        ],
        examPattern: 'Summative Written Exams, Diagram Labeling Tests & Herbarium Project Assessment',
        practicalAvailable: true
      },
      {
        id: 'c5-eng',
        name: 'English (Language & Literature)',
        code: 'ENG-UP-5',
        iconName: 'BookA',
        color: 'teal',
        description: 'Comprehensive English curriculum covering WBBSE (Butterfly / Wings) and CBSE (Marigold / NCERT): Prose and poetry comprehension, Parts of Speech, Tenses (Simple & Continuous), Subject-Verb agreement, Articles, Prepositions, Punctuation, and Creative writing (paragraphs, informal letters, dialogue).',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Comprehend prose and poetry passages with 90%+ reading accuracy',
          'Apply correct Parts of Speech, Articles (A, An, The), and Prepositions',
          'Master Simple Present, Present Continuous, Simple Past, and Simple Future tenses',
          'Write coherent 80-100 word descriptive paragraphs and informal letters',
          'Expand vocabulary with antonyms, synonyms, homophones, and rhyming words'
        ],
        keyChapters: [
          {
            title: 'Literature & Reading Comprehension (সাহিত্য পাঠ ও বোধপরীক্ষণ)',
            description: 'Analysis of classic prose stories and poems from Butterfly & Marigold; unseen reading passages, vocabulary in context, and central themes.',
            subtopics: [
              'Story themes: Courage, friendship, nature, and Indian heritage',
              'Unseen reading comprehension answering techniques',
              'Word meanings, antonyms, synonyms, and rhyming words'
            ],
            practicalOrActivity: 'Classroom poetry recitation and character roleplay'
          },
          {
            title: 'Grammar Mechanics & Tenses (ব্যাকরণ ও কাল)',
            description: 'Nouns (proper, common, collective), Pronouns, Adjectives, Verbs, Adverbs, Prepositions, Conjunctions; Tenses (Present, Past, Future); Subject-Verb agreement; Punctuation.',
            subtopics: [
              '8 Parts of speech identification and usage',
              'Regular and irregular verbs with 3 verb forms ($V_1, V_2, V_3$)',
              'Articles (A, An, The) and Prepositions of place/time',
              'Punctuation marks, capital letters, and sentence rearrangement'
            ],
            practicalOrActivity: 'Grammar error spotting game and sentence puzzle board'
          },
          {
            title: 'Creative Writing & Composition (নির্মিতি ও অনুচ্ছেদ রচনা)',
            description: 'Descriptive paragraph writing (80-100 words on seasons, monuments, pets, festivals), picture comprehension, informal letters to friends/family, and dialogue completion.',
            subtopics: [
              'Paragraph structure: Topic sentence, supporting details, conclusion',
              'Informal letter format (address, date, salutation, body, sign-off)',
              'Picture composition and story writing from given outlines'
            ],
            practicalOrActivity: 'Publishing weekly creative writing wall magazine'
          }
        ],
        referenceMaterials: [
          'Butterfly & Wings (Class 5 English) - WBBSE / WBBPE',
          'Marigold English Class 5 - NCERT / CBSE',
          'Wren & Martin Junior English Grammar & Composition',
          'Biley Junior English Master Guide'
        ],
        examPattern: 'Summative Evaluations + Oral Reading Aloud & Listening Spoken Assessments',
        practicalAvailable: false
      },
      {
        id: 'c5-comp',
        name: 'Computer Science & ICT (কম্পিউটার শিক্ষা)',
        code: 'COMP-UP-5',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Computer systems and ICT foundation for Class 5: Hardware vs software, OS navigation, MS Word formatting, digital drawing, block-based coding in Scratch 3.0, and cyber safety rules.',
        weeklyHours: 3,
        totalModules: 8,
        learningOutcomes: [
          'Identify computer internal & external components (CPU, ALU, CU, RAM, ROM, HDD/SSD)',
          'Navigate Windows/Linux desktop, files, folders, and keyboard shortcuts',
          'Format rich documents in MS Word / Google Docs with tables, shapes, and borders',
          'Program interactive animations and simple games using Scratch 3.0 blocks',
          'Practice safe browsing, password protection, and cyber etiquette'
        ],
        keyChapters: [
          {
            title: 'Computer Fundamentals & OS (কম্পিউটার পরিচিতি ও অপারেটিং সিস্টেম)',
            description: 'Input, output, CPU components (ALU, CU, MU), storage devices (RAM, ROM, Pen Drive, HDD/SSD), Windows desktop, file management and folder structure.',
            subtopics: [
              'Hardware vs Software (System vs Application software)',
              'Memory units (Bit, Byte, KB, MB, GB)',
              'File and folder operations: Create, Rename, Copy, Move, Delete',
              'Touch typing ergonomics and speed shortcuts'
            ],
            practicalOrActivity: 'Smart lab folder organization and fast typing drill'
          },
          {
            title: 'Word Processing & Digital Graphics (ওয়ার্ড প্রসেসিং ও ডিজিটাল অঙ্কন)',
            description: 'MS Word / Google Docs text formatting (font, size, color, alignments, bullets), inserting tables, clipart, page borders; digital drawing in MS Paint / Tux Paint.',
            subtopics: [
              'Creating school notices, timetables, and posters',
              'Table formatting with rows, columns, and cell borders',
              'Digital painting using geometric shapes and fill tools'
            ],
            practicalOrActivity: 'Designing a colorful school event invitation card'
          },
          {
            title: 'Scratch 3.0 Block Coding & Cyber Safety (স্ক্র্যাচ প্রোগ্রামিং ও সাইবার নিরাপত্তা)',
            description: 'Scratch 3.0 interface: Sprites, Stage, Motion blocks, Looks, Sound, Events, Loops (`repeat`, `forever`); safe internet browsing and password security.',
            subtopics: [
              'Sequential block instructions and loop logic',
              'Creating a cat walk animation and talking sprite dialogue',
              'Safe search engines, email etiquette, and avoiding suspicious popups'
            ],
            practicalOrActivity: 'Building an interactive Scratch Maze Navigation Game'
          }
        ],
        referenceMaterials: [
          'Biley Smart Coding & ICT Foundation Handbook (Class 5)',
          'Scratch 3.0 Official Creative Computing Guide',
          'CBSE Skill Education & WBBSE ICT Curriculum'
        ],
        examPattern: 'Hands-on Computer Lab Practical Exam + Coding Project Showcase',
        practicalAvailable: true
      }
    ]
  },

  // ==========================================
  // CLASS 6 (Upper Primary - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 6,
    gradeLabel: 'Class 6 (WBBSE & CBSE)',
    category: 'upper_primary',
    ageGroup: '11 - 12 Years',
    academicFocus: 'Core Conceptual Transition: Ganit Prabha & NCERT Mathematics (Integers, Ratio, Algebra Intro), Motion, Heat & Light (Physical Science), Plant Anatomy, Nutrition & Body Movements (Biology), Blossoms & Honeysuckle English, Spreadsheets & Python Turtle Computing',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:30 PM - 7:00 PM', mode: 'Offline Classroom + Hybrid Lab' },
    subjects: [
      {
        id: 'c6-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-UP-6',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 6 Mathematics curriculum unifying WBBSE (গণিতপ্রভা - ষষ্ঠ শ্রেণি) and CBSE (NCERT Mathematics): Number systems & Roman numerals, Integers on number line, Playing with numbers (HCF/LCM, divisibility rules), Fractions & decimals, Ratio & proportion, Unitary method, Introduction to Algebra, Geometry (constructions, symmetry), and Mensuration (perimeter & area).',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: [
          'Work effortlessly with large numbers, Roman numerals, and integers on number lines',
          'Determine HCF and LCM using prime factorization and division methods',
          'Perform operations on fractions and decimals with real-life problem solving',
          'Formulate ratios, solve proportions, and apply the unitary method in commercial problems',
          'Write algebraic expressions with variables, constants, and coefficients',
          'Construct angles (60°, 90°, 120°, 45°), perpendicular bisectors, and circles using compass',
          'Calculate perimeter and area of rectangles, squares, and bordered pathways'
        ],
        keyChapters: [
          {
            title: 'Numbers, Integers & Playing with Numbers (সংখ্যা ও পূর্ণসংখ্যা)',
            description: 'WBBSE পূর্বপাঠের পুনরাবৃত্তি ও পূর্ণসংখ্যা & CBSE Knowing Our Numbers / Integers / Playing with Numbers: Large numbers, Roman numerals, negative integers on number line, absolute value, divisibility rules (2 to 11), prime factorization, HCF and LCM.',
            subtopics: [
              'Indian and International place value, estimation and Roman numerals (up to M)',
              'Integers: Representation on number line, absolute value, addition and subtraction',
              'Prime & composite numbers, coprime numbers, HCF and LCM word problems'
            ],
            practicalOrActivity: 'Number line floor hop game for integer addition and subtraction'
          },
          {
            title: 'Fractions & Decimals (ভগ্নাংশ ও দশমিকের প্রয়োগ)',
            description: 'WBBSE & CBSE Fractions and Decimals: Like/unlike fractions, simplest form, fraction operations, decimal place value, decimal multiplication/division, and unit conversions.',
            subtopics: [
              'Equivalent fractions, comparing and ordering fractions',
              'Addition, subtraction, multiplication, and division of fractions',
              'Decimals operations and real-world currency/metric conversion'
            ],
            practicalOrActivity: 'Paper strip folding activity for fraction multiplication verification'
          },
          {
            title: 'Ratio, Proportion & Unitary Method (অনুপাত, সমানুপাত ও ঐকিক নিয়ম)',
            description: 'WBBSE অনুপাত ও শতকরা & CBSE Ratio and Proportion: Simplest form of ratios, equivalent ratios, proportion cross-multiplication, percentage calculation, and unitary method.',
            subtopics: [
              'Concept of ratio as comparison by division',
              'Four terms in proportion ($a:b = c:d \implies a \cdot d = b \cdot c$)',
              'Direct unitary method applied to speed, prices, and wages'
            ],
            practicalOrActivity: 'Scale model car ratio calculation workshop'
          },
          {
            title: 'Introduction to Algebra (বীজগণিতের প্রাথমিক ধারণা)',
            description: 'WBBSE বীজগণিত & CBSE Algebra: Matchstick patterns, concept of variables, constant terms, coefficients, forming algebraic expressions, and solving simple linear equations.',
            subtopics: [
              'Variables as unknowns and generating sequence rules ($2n, 3n+1$)',
              'Writing algebraic expressions from word statements',
              'Solving simple one-step equations by trial and error / inverse operations'
            ],
            practicalOrActivity: 'Matchstick geometric pattern algebra lab'
          },
          {
            title: 'Geometry & Practical Constructions (জ্যামিতিক ধারণা ও অঙ্কন)',
            description: 'WBBSE জ্যামিতি & CBSE Basic Geometrical Ideas / Practical Geometry: Points, lines, rays, angles, polygons, triangles classification, circles, line of symmetry, and compass constructions.',
            subtopics: [
              'Classification of angles (acute, right, obtuse, straight, reflex, complete)',
              'Circle anatomy: Radius, diameter, chord, sector, segment',
              'Constructing perpendicular bisectors and standard angles (60°, 90°, 45°, 120°)',
              'Linear symmetry and reflection symmetry in 2D shapes'
            ],
            practicalOrActivity: 'Compass and ruler construction sheet of geometric mandala designs'
          },
          {
            title: 'Mensuration & Data Handling (পরিসীমা, ক্ষেত্রফল ও তথ্য সজ্জা)',
            description: 'WBBSE পরিসীমা-ক্ষেত্রফল & CBSE Mensuration / Data Handling: Perimeter of regular polygons, area of rectangles and squares, area of pathways, tally marks, pictographs, and bar graphs.',
            subtopics: [
              'Perimeter of rectangle, square, and equilateral triangle',
              'Area of rectangles, squares, and composite L-shaped figures',
              'Constructing and interpreting frequency tables and bar graphs'
            ],
            practicalOrActivity: 'School sports day results data bar graph project'
          }
        ],
        referenceMaterials: [
          'গণিতপ্রভা (ষষ্ঠ শ্রেণি) - WBBSE (West Bengal Board of Secondary Education)',
          'Mathematics Class 6 - NCERT / CBSE',
          'RS Aggarwal Mathematics for Class 6',
          'Biley Junior Olympiad Math Matrix & Formula Handbook'
        ],
        examPattern: 'WBBSE 3 Summative Evaluations / CBSE Periodic Assessments + Lab Practical Assessment',
        practicalAvailable: true
      },
      {
        id: 'c6-sci',
        name: 'Science - Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-UP-6',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Class 6 Physical Science syllabus unifying WBBSE (পরিবেশ ও বিজ্ঞান - ভৌত পরিবেশ) and CBSE (NCERT Physics & Chemistry): Motion and measurement of distances, Light, shadows and reflections, Electricity and circuits, Fun with magnets, Sorting materials, Separation of substances, and Air around us.',
        weeklyHours: 6,
        totalModules: 12,
        learningOutcomes: [
          'Measure distances accurately with SI units and classify types of motion (rectilinear, circular, periodic)',
          'Explain rectilinear propagation of light, pinhole camera, shadow formation, and plane mirror reflection',
          'Construct simple electric circuits with switch, cell, and differentiate conductors vs insulators',
          'Identify magnetic poles, magnetic field attraction/repulsion, and make a DIY magnetic compass',
          'Separate mixtures using handpicking, sieving, sedimentation, decantation, filtration, and evaporation',
          'State air composition and understand atmospheric oxygen and nitrogen cycle'
        ],
        keyChapters: [
          {
            title: 'Motion & Measurement of Distances (বল, গতি ও পরিমাপ)',
            description: 'SI units of length (meter), measurement precautions, rectilinear motion, circular motion, periodic motion, rotational motion, and speed concept.',
            subtopics: [
              'Need for standard units and metric conversions',
              'Types of motion: Rectilinear, circular, periodic, oscillatory',
              'Friction and its everyday effects'
            ],
            practicalOrActivity: 'Measuring curved lines with thread and pendulum periodic motion timing'
          },
          {
            title: 'Light, Shadows, Heat & Reflections (আলো, তাপ ও প্রতিফলন)',
            description: 'Luminous vs non-luminous objects, transparent/translucent/opaque materials, shadow formation, pinhole camera, reflection from plane mirrors, heat transfer basics.',
            subtopics: [
              'Rectilinear propagation of light and eclipse formation',
              'Pinhole camera image characteristics (real, inverted)',
              'Reflection of light and lateral inversion in plane mirrors',
              'Heat vs Temperature: Celsius and Fahrenheit thermometer basics'
            ],
            practicalOrActivity: 'Building a working DIY Pinhole Camera and shadow length observation'
          },
          {
            title: 'Electricity, Circuits & Magnetism (বিদ্যুৎ, বর্তনী ও চুম্বক)',
            description: 'Electric cell structure, bulb filament, open vs closed circuits, electric switches, conductors and insulators; magnetic poles, magnetic compass, and attraction/repulsion laws.',
            subtopics: [
              'Simple circuit wiring with cell, key, and miniature LED bulb',
              'Testing household materials for electrical conductivity',
              'Poles of a bar magnet and finding geographical directions',
              'Making a temporary magnet using single touch method'
            ],
            practicalOrActivity: 'Circuit continuity tester lab and floating needle magnetic compass'
          },
          {
            title: 'Materials & Separation of Substances (পদার্থের পৃথকীকরণ ও রাসায়নিক পরিবর্তন)',
            description: 'Sorting materials by appearance, hardness, transparency, solubility; separation methods: handpicking, winnowing, sieving, sedimentation, decantation, filtration, evaporation; physical vs chemical changes.',
            subtopics: [
              'Properties of materials: Lustre, hardness, floating/sinking, transparency',
              'Methods of separating mixtures: Solid-solid and solid-liquid mixtures',
              'Physical vs chemical changes: Reversible vs irreversible processes'
            ],
            practicalOrActivity: 'Separating sand, salt, and water mixture using filtration and evaporation'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (ষষ্ঠ শ্রেণি) - WBBSE',
          'Science Class 6 - NCERT / CBSE',
          'Lakhmir Singh & Manjit Kaur Science for Class 6',
          'Biley Middle School Physical Science Lab Manual'
        ],
        examPattern: 'Summative Written Theory Exams, Lab Practicals & Diagnostic MCQ Tests',
        practicalAvailable: true
      },
      {
        id: 'c6-bio',
        name: 'Biology - Life Science (জীবনবিজ্ঞান ও জীবজগৎ)',
        code: 'BIO-UP-6',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Class 6 Biology curriculum unifying WBBSE (পরিবেশ ও বিজ্ঞান - জীবজগৎ) and CBSE (NCERT Living World): Components of food & deficiency diseases, Getting to know plants (roots, stems, leaf venation, flowers), Human body movements & skeletal joints, Living organisms & their habitats/adaptations, and Microorganisms intro.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Test food samples for starch, protein, and fats; explain balanced diet and deficiency diseases',
          'Differentiate herbs, shrubs, trees; taproot vs fibrous roots; reticulate vs parallel venation; flower parts',
          'Identify human skeletal joints (ball-and-socket, hinge, pivotal, fixed) and animal locomotion',
          'Analyze abiotic and biotic components in desert, mountain, grassland, and aquatic habitats',
          'Recognize friendly vs harmful microbes and hygiene practices'
        ],
        keyChapters: [
          {
            title: 'Components of Food & Human Nutrition (খাদ্য উপাদান ও পুষ্টি)',
            description: 'Carbohydrates, proteins, fats, vitamins (A, B-complex, C, D), minerals (iron, calcium, iodine), roughage, water, balanced diet, and deficiency diseases (Kwashiorkor, Marasmus, Scurvy, Rickets, Beriberi, Goitre, Anemia).',
            subtopics: [
              'Nutrient functions and food pyramid',
              'Laboratory tests: Iodine test for starch, Biuret test for proteins',
              'Deficiency diseases, symptoms, and dietary prevention'
            ],
            practicalOrActivity: 'Iodine test for starch in potato and rice in science lab'
          },
          {
            title: 'Getting to Know Plants (উদ্ভিদের অঙ্গসংস্থান ও কাজ)',
            description: 'Classification into herbs, shrubs, and trees; root systems (taproot, fibrous root); stem conduction; leaf anatomy, leaf venation (reticulate, parallel), transpiration; flower parts (sepals, petals, stamens, pistil).',
            subtopics: [
              'Root and shoot systems with stem xylem water transport',
              'Photosynthesis and transpiration in leaves',
              'Structure of a bisexual flower (anther, filament, stigma, style, ovary)'
            ],
            practicalOrActivity: 'Dissecting a hibiscus flower to display calyx, corolla, androecium, gynoecium'
          },
          {
            title: 'Body Movements & Skeletal System (মানব কঙ্কালতন্ত্র ও প্রাণীর চলন)',
            description: 'Human skeleton, bones, cartilage, joints (ball-and-socket, hinge, pivotal, fixed); muscle contraction; locomotion in earthworm, snail, cockroach, bird, fish, and snake.',
            subtopics: [
              'Types of movable and immovable joints in human body',
              'Role of biceps and triceps antagonistic muscle pairs',
              'Streamlined body adaptation in fish and pneumatic bones in birds'
            ],
            practicalOrActivity: 'Cardboard arm model demonstrating hinge joint and muscle contraction'
          },
          {
            title: 'Living Organisms, Habitats & Adaptations (বাস্তুতন্ত্র ও অভিযোজন)',
            description: 'Biotic and abiotic factors; terrestrial habitats (deserts, mountains, grasslands); aquatic habitats (oceans, ponds, rivers); adaptations in cactus, camel, yak, snow leopard, and water lily.',
            subtopics: [
              'Characteristics of living organisms (nutrition, respiration, excretion, stimulus-response, reproduction)',
              'Xerophytic adaptations in desert plants and animals',
              'Hydrophytic adaptations in aquatic flora'
            ],
            practicalOrActivity: 'Microscopic slide observation of stomata and pond water microbes'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (ষষ্ঠ শ্রেণি) - WBBSE',
          'Science Class 6 (Biology Chapters) - NCERT / CBSE',
          'Biley Living World Atlas & Junior Microscope Guide'
        ],
        examPattern: 'Summative Examinations, Microscopy Practical Tests & Herbarium Evaluation',
        practicalAvailable: true
      },
      {
        id: 'c6-eng',
        name: 'English (Language & Literature)',
        code: 'ENG-UP-6',
        iconName: 'BookA',
        color: 'teal',
        description: 'Comprehensive English curriculum covering WBBSE (Blossoms) and CBSE (Honeysuckle & A Pact with the Sun): Literary analysis, advanced grammar (Noun types, Pronouns, Degrees of comparison, Tenses, Modals, Prepositions), Subject-Verb agreement, and Creative writing (formal leave applications, notice writing, process writing, informal letters, dialogue).',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Read and interpret classic prose and poetry with thematic fluency',
          'Apply correct degrees of adjectives, irregular verb forms, and modal auxiliaries',
          'Transform affirmative, negative, interrogative sentences and handle Subject-Verb concord',
          'Write standard CBSE/WBBSE formal applications, notices, and step-by-step process descriptions',
          'Draft structured 100-120 word paragraphs and creative stories from hints'
        ],
        keyChapters: [
          {
            title: 'Literature Appreciation & Critical Reading (সাহিত্য পাঠ ও বোধপরীক্ষণ)',
            description: 'Classic stories and poetry from Blossoms & Honeysuckle; unseen passage interpretation, character sketches, poetic devices (rhyme, simile, alliteration), and vocabulary in context.',
            subtopics: [
              'Prose analysis: Central idea, character analysis, moral themes',
              'Poetic appreciation: Rhyme scheme, personification, imagery',
              'Unseen factual and discursive reading comprehension'
            ],
            practicalOrActivity: 'Dramatic reading sessions and literary character interviews'
          },
          {
            title: 'Advanced Grammar & Sentence Transformation (উন্নত ইংরেজি ব্যাকরণ)',
            description: 'Nouns (proper, common, abstract, collective), Pronoun cases, Adjective degrees of comparison (positive, comparative, superlative), Tenses, Modals (can, may, must, should), Prepositions, Subject-Verb concord.',
            subtopics: [
              'Degrees of comparison transformation rules',
              'Subject-Verb concord with singular/plural compound subjects',
              'Active voice and passive voice introductory rules',
              'Phrasal verbs and idiomatic expressions in everyday English'
            ],
            practicalOrActivity: 'Grammar speed quiz and sentence transformation whiteboard drill'
          },
          {
            title: 'Formal & Creative Writing (নির্মিতি, আবেদনপত্র ও বিজ্ঞপ্তি)',
            description: 'Formal application to Headmaster/Principal, Notice writing (school events, lost and found), Process writing (making tea, salad, origami), Informal letters, and Story writing with outline.',
            subtopics: [
              'Formal letter format with subject line and formal tone',
              'Box format for school notice writing',
              'Sequential linkers for process writing (First, Next, Then, Finally)',
              'Story composition with title, plot, and moral'
            ],
            practicalOrActivity: 'Publishing student articles in the Biley Junior Literary Journal'
          }
        ],
        referenceMaterials: [
          'Blossoms (Class 6 English) - WBBSE',
          'Honeysuckle & A Pact with the Sun - NCERT / CBSE Class 6',
          'Wren & Martin High School English Grammar & Composition',
          'Biley Class 6 English Master Scoring Guide'
        ],
        examPattern: 'Summative Examinations (Reading, Writing, Grammar, Literature) + Spoken Viva',
        practicalAvailable: false
      },
      {
        id: 'c6-comp',
        name: 'Computer Science & ICT (কম্পিউটার শিক্ষা)',
        code: 'COMP-UP-6',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Computer Science & ICT curriculum for Class 6: Computer memory architecture (RAM/ROM/Cache, Bit to Petabyte), Spreadsheets with MS Excel (formulas, charts), Presentations in MS PowerPoint, Python Turtle graphics programming, HTML5 web basics, and digital citizenship.',
        weeklyHours: 4,
        totalModules: 12,
        learningOutcomes: [
          'Understand computer memory hierarchy, storage units (KB, MB, GB, TB), and CPU buses',
          'Build formatted spreadsheets with formulas (`SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT`) and charts in Excel',
          'Create animated multimedia slide presentations with custom transitions in PowerPoint',
          'Write Python Turtle code using loops, variables, and coordinate geometry to draw geometric shapes',
          'Construct structured web pages using basic HTML5 tags (`h1`-`h6`, `p`, `img`, `a`, `table`)',
          'Practice cyber hygiene: Anti-phishing, digital footprint control, and cyberbullying prevention'
        ],
        keyChapters: [
          {
            title: 'Computer Architecture & Storage Units (কম্পিউটার স্মৃতি ও স্থাপত্য)',
            description: 'Primary memory (RAM, ROM, Cache), secondary storage (HDD, SSD, Optical discs, Flash memory), memory units (Bit, Byte, KB, MB, GB, TB, PB), ports, and peripheral connectivity.',
            subtopics: [
              'RAM vs ROM characteristics and volatile vs non-volatile memory',
              'Storage unit conversions and speed hierarchy',
              'Motherboard, CPU clock speed, and expansion ports'
            ],
            practicalOrActivity: 'Hardware teardown showcase in smart computer lab'
          },
          {
            title: 'Spreadsheets & Data Presentation (এম এস এক্সেল ও পাওয়ারপয়েন্ট)',
            description: 'MS Excel / Google Sheets: Cells, rows, columns, auto-fill, basic math formulas (`SUM`, `AVERAGE`, `MIN`, `MAX`, `COUNT`, `IF`), column & pie charts; MS PowerPoint animations and transitions.',
            subtopics: [
              'Creating student marksheet spreadsheets with auto-calculation',
              'Generating bar and pie charts from spreadsheet tables',
              'Slide layouts, audio/video embedding, and presentation delivery'
            ],
            practicalOrActivity: 'Building a complete Student Marks Analysis Spreadsheet in Excel'
          },
          {
            title: 'Python Turtle Programming & HTML5 Basics (পাইথন কোডিং ও ওয়েব ডিজাইন)',
            description: 'Introduction to Python Turtle graphics: canvas, coordinates, pens, forward, backward, angles, `for` loops to draw polygons; HTML5 document structure, headings, paragraphs, images, links, and tables.',
            subtopics: [
              'Drawing squares, stars, and concentric circles using Python Turtle',
              '`for` loop iteration in Python (`for i in range(4):`)',
              'Creating a personal HTML5 hobby webpage with images and tables'
            ],
            practicalOrActivity: 'Coding a colorful geometric spiral pattern in Python Turtle'
          },
          {
            title: 'Cyber Safety & Digital Ethics (সাইবার নিরাপত্তা ও ডিজিটাল নৈতিকতা)',
            description: 'Password security, privacy settings, recognizing phishing emails, digital footprint awareness, copyright vs plagiarism, and safe online gaming etiquette.',
            subtopics: [
              'Creating unbreakable passwords with alphanumeric symbols',
              'Dangers of cyberbullying and online reporting mechanisms',
              'Responsible digital communication etiquette'
            ],
            practicalOrActivity: 'Interactive cyber security quiz and safety checklist'
          }
        ],
        referenceMaterials: [
          'Biley Class 6 Computer Science & Coding Manual',
          'Sumita Arora Computer Applications Class 6',
          'Python Turtle Graphics for Young Coders (Official Guide)'
        ],
        examPattern: 'Hands-on Computer Lab Practical Exam + Python Coding Assessment',
        practicalAvailable: true
      }
    ]
  },

  // ==========================================
  // CLASS 7 (Upper Primary - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 7,
    gradeLabel: 'Class 7 (WBBSE & CBSE)',
    category: 'upper_primary',
    ageGroup: '12 - 13 Years',
    academicFocus: 'Analytical Foundations: Ganit Prabha & NCERT Mathematics (Exponents, Algebraic Identities, Congruence), Atoms, Acids, Motion & Electricity (Physical Science), Cellular Respiration, Circulation & Plant Reproduction (Biology), Blossoms & Honeycomb English, Python & HTML/CSS Web Development',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:30 PM - 7:15 PM', mode: 'Offline Classroom + Smart Lab' },
    subjects: [
      {
        id: 'c7-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-UP-7',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 7 Mathematics curriculum combining WBBSE (গণিতপ্রভা - সপ্তম শ্রেণি) and CBSE (NCERT Class 7 Mathematics): Integers & rational numbers, Laws of Exponents, Algebraic expressions & standard identities ($(a+b)^2, (a-b)^2, a^2-b^2$), Linear equations in one variable, Ratio, proportion, percentage, profit/loss & simple interest ($I = \\frac{PRT}{100}$), Lines, angles & triangle congruence (SSS, SAS, ASA, RHS), Perimeter & area (triangles, parallelograms, circles $\\pi r^2$), and Data handling & Pie charts.',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: [
          'Apply laws of exponents ($a^m \\cdot a^n = a^{m+n}$, $(a^m)^n$, $a^0=1$) and express numbers in scientific notation',
          'Expand and factorize algebraic expressions using $(a+b)^2 = a^2+2ab+b^2$ and $a^2-b^2 = (a+b)(a-b)$',
          'Solve multi-step linear equations in one variable with fractional coefficients',
          'Calculate commercial profit, loss percentage, and simple interest ($I = \\frac{PRT}{100}$)',
          'Prove triangle congruence criteria (SSS, SAS, ASA, RHS) and apply Pythagoras theorem',
          'Calculate area and circumference of circles ($\\pi = \\frac{22}{7}$), parallelograms, and triangles',
          'Construct and analyze Pie Charts (বৃত্তলেখ) and double bar graphs'
        ],
        keyChapters: [
          {
            title: 'Integers, Rational Numbers & Exponents (পূর্ণসংখ্যা, মূলদ সংখ্যা ও সূচক)',
            description: 'WBBSE সূচকের নিয়মাবলী & CBSE Integers / Rational Numbers / Exponents: Operations on rational numbers, laws of exponents, zero and negative exponents, standard scientific notation.',
            subtopics: [
              'Properties of addition/multiplication of integers (closure, associative, distributive)',
              'Rational numbers on number line and finding rationals between two numbers',
              'Laws of indices: $a^m \\times a^n = a^{m+n}$, $a^m / a^n = a^{m-n}$, $(a^m)^n = a^{mn}$',
              'Expressing astronomical distances in scientific standard form'
            ],
            practicalOrActivity: 'Exponent power tower calculations and exponential growth game'
          },
          {
            title: 'Algebraic Expressions & Identities (বীজগাণিতিক সূত্রাবলী ও সমীকরণ)',
            description: 'WBBSE বীজগাণিতিক সূত্রাবলী & CBSE Algebraic Expressions / Simple Equations: Terms, coefficients, addition/subtraction of polynomials, algebraic identities ($(a+b)^2, (a-b)^2, a^2-b^2$), factorization, and linear equations.',
            subtopics: [
              'Monomials, binomials, trinomials, and degree of polynomials',
              'Algebraic identities: $(a+b)^2 = a^2+2ab+b^2$, $(a-b)^2 = a^2-2ab+b^2$, $a^2-b^2 = (a+b)(a-b)$',
              'Factorization by grouping and identity application',
              'Solving linear equations in one variable and word problems'
            ],
            practicalOrActivity: 'Geometric visual proof of $(a+b)^2 = a^2+2ab+b^2$ using cardboard tiles'
          },
          {
            title: 'Commercial Mathematics & Simple Interest (শতকরা, লাভ-ক্ষতি ও সরল সুদ)',
            description: 'WBBSE সমানুপাত ও তৈরিরাশিক & CBSE Comparing Quantities: Ratios, percentages, profit and loss, discount, and simple interest calculation ($I = \\frac{PRT}{100}$).',
            subtopics: [
              'Converting fractions/decimals to percentages and percentage change',
              'Profit and loss percentage: $\\text{Profit}\\% = \\frac{\\text{Profit}}{\\text{CP}} \\times 100$',
              'Simple interest formula derivations: $I = \\frac{PRT}{100}$ and Amount $A = P + I$'
            ],
            practicalOrActivity: 'Classroom mock banking interest calculation project'
          },
          {
            title: 'Lines, Angles & Triangle Congruence (কোণ, ত্রিভুজের সর্বসমতা ও ধর্ম)',
            description: 'WBBSE ত্রিভুজ ও চতুর্ভুজ & CBSE Lines and Angles / The Triangle and its Properties / Congruence of Triangles: Complementary, supplementary, adjacent, vertically opposite angles; transversal lines; angle sum property; exterior angle theorem; congruence criteria (SSS, SAS, ASA, RHS); Pythagoras property.',
            subtopics: [
              'Transversal angles: Alternate interior, corresponding, co-interior angles',
              'Exterior angle theorem and angle sum property ($180^\\circ$)',
              'Congruence tests: SSS, SAS, ASA, RHS with rigorous proofs',
              'Pythagoras property: $a^2 + b^2 = c^2$ in right-angled triangles'
            ],
            practicalOrActivity: 'Verifying triangle congruence with cut-out geometric overlays'
          },
          {
            title: 'Perimeter, Area & Mensuration (পরিসীমা ও ক্ষেত্রফল)',
            description: 'WBBSE পরিসীমা-ক্ষেত্রফল & CBSE Perimeter and Area: Squares, rectangles, parallelograms, triangles, circles (circumference $C = 2\\pi r$, area $A = \\pi r^2$), and area of circular rings/tracks.',
            subtopics: [
              'Area of parallelogram ($b \\times h$) and triangle ($\\frac{1}{2} b \\times h$)',
              'Circle circumference and area with $\\pi \\approx 3.14$ or $22/7$',
              'Area of running tracks and bordered pathways inside/outside fields'
            ],
            practicalOrActivity: 'Measuring circular objects with thread to experimentally discover $\\pi$'
          },
          {
            title: 'Data Handling & Pie Charts (পাই-চিত্র ও তথ্য বিশ্লেষণ)',
            description: 'WBBSE পাই-চিত্র & CBSE Data Handling: Arithmetic mean, median, mode, range, double bar graphs, constructing pie charts using protractor ($360^\\circ$ central angles), and probability basics.',
            subtopics: [
              'Calculating Mean, Median, and Mode of ungrouped data',
              'Calculating central angles: $\\text{Central Angle} = \\frac{\\text{Value}}{\\text{Total}} \\times 360^\\circ$',
              'Constructing circular Pie Charts and interpreting sectors'
            ],
            practicalOrActivity: 'School sports budget allocation Pie Chart construction'
          }
        ],
        referenceMaterials: [
          'গণিতপ্রভা (সপ্তম শ্রেণি) - WBBSE (West Bengal Board of Secondary Education)',
          'Mathematics Class 7 - NCERT / CBSE',
          'RD Sharma / RS Aggarwal Class 7 Foundation Guide',
          'Biley Intermediate Olympiad Mathematics Playbook'
        ],
        examPattern: 'WBBSE 3 Summative Evaluations / CBSE Periodic Exams + Practical Viva',
        practicalAvailable: true
      },
      {
        id: 'c7-sci',
        name: 'Science - Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-UP-7',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Class 7 Physical Science curriculum uniting WBBSE (পরিবেশ ও বিজ্ঞান - সপ্তম শ্রেণি) and CBSE (NCERT Physics & Chemistry): Atoms, molecules and chemical reactions, Acids, bases and salts (pH, indicators), Motion, speed and Newton\'s laws, Heat, temperature & latent heat, Light, spherical mirrors & lenses, and Electric current & magnetic/chemical effects.',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: [
          'Write chemical symbols, determine valency, write formulas, and balance chemical equations',
          'Differentiate acids, bases, and neutral salts using indicators (litmus, phenolphthalein, methyl orange)',
          'Calculate speed ($s = d/t$), plot distance-time graphs, and explain Newton\'s three laws of motion',
          'Explain heat transfer (conduction, convection, radiation), latent heat, and state change mechanisms',
          'Trace ray diagrams for concave/convex mirrors and convex/concave lenses, explain dispersion of light',
          'Construct electromagnets, explain electric bell mechanism, and heating effect in electric appliances'
        ],
        keyChapters: [
          {
            title: 'Atoms, Molecules & Chemical Equations (পরমাণু, অণু ও রাসায়নিক বিক্রিয়া)',
            description: 'Structure of atom (electrons, protons, neutrons), chemical symbols, valency of elements and radicals, chemical formula writing, balancing chemical equations, types of reactions (combination, decomposition, displacement, double displacement).',
            subtopics: [
              'Atomic number, mass number, and electronic configuration basics',
              'Criss-cross valency method for writing chemical formulas',
              'Balancing simple chemical equations and law of conservation of mass'
            ],
            practicalOrActivity: '3D atomic structure modeling using colored balls and sticks'
          },
          {
            title: 'Acids, Bases & Salts (অ্যাসিড, ক্ষার ও লবণ)',
            description: 'Properties of acids (sour, corrosive) and bases (bitter, soapy); natural indicators (litmus, turmeric, China rose) and synthetic indicators (phenolphthalein, methyl orange); neutralization reactions in daily life; pH scale.',
            subtopics: [
              'Mineral acids vs organic acids (HCl, $H_2SO_4$, Citric, Acetic)',
              'Neutralization: $\\text{Acid} + \\text{Base} \\to \\text{Salt} + \\text{Water} + \\text{Heat}$',
              'Applications: Treating indigestion (antacids), ant sting, soil pH treatment'
            ],
            practicalOrActivity: 'Testing household liquids with red/blue litmus paper and turmeric indicator'
          },
          {
            title: 'Motion, Speed, Force & Newton\'s Laws (গতি, বেগ ও নিউটনের গতিসূত্র)',
            description: 'Speed, velocity, acceleration; speed calculation ($s = d/t$); simple pendulum periodic time period; distance-time graphs; Newton\'s three laws of motion (inertia, $F = ma$, action-reaction).',
            subtopics: [
              'Uniform vs non-uniform motion and distance-time graphs',
              'Time period of a simple pendulum: $T = 2\\pi \\sqrt{l/g}$ concept',
              'Newton\'s laws: Inertia of rest/motion, momentum, and action-reaction pairs'
            ],
            practicalOrActivity: 'Distance-time graphical plotting from toy car motion & pendulum timer lab'
          },
          {
            title: 'Heat, Temperature & Latent Heat (তাপ, তাপমাত্রা ও লীনতাপ)',
            description: 'Clinical vs Laboratory thermometers, scales of temperature ($C/5 = (F-32)/9$), heat transfer methods (conduction, convection, radiation), sea breeze & land breeze, latent heat of fusion and vaporization.',
            subtopics: [
              'Conduction in solids, convection in fluids, radiation in vacuum',
              'Sea breeze and land breeze convection currents',
              'Latent heat concept: Temperature remains constant during state change'
            ],
            practicalOrActivity: 'Demonstrating thermal conduction across metal rods and boiling point plateau'
          },
          {
            title: 'Light, Mirrors & Lenses (আলো, দর্পণ ও লেন্স)',
            description: 'Reflection by spherical mirrors (concave and convex mirrors), real vs virtual images, lenses (convex and concave lenses), dispersion of white light through a triangular glass prism, and Newton\'s color disc.',
            subtopics: [
              'Ray diagrams for concave and convex spherical mirrors',
              'Magnifying glass (convex lens) vs diverging (concave lens)',
              'Dispersion of light into 7 colors (VIBGYOR) and rainbow formation'
            ],
            practicalOrActivity: 'Optical bench experiment: Image formation by concave mirror and prism dispersion'
          },
          {
            title: 'Electric Current & Magnetic Effects (তড়িৎপ্রবাহের চৌম্বক ও রাসায়নিক ফল)',
            description: 'Circuit diagrams and symbols, heating effect of electric current (Joule\'s heating, electric fuse, nichrome element), magnetic effect of current, making an electromagnet, electric bell mechanism.',
            subtopics: [
              'Heating effect: Electric iron, room heater, and safety fuse wire',
              'Oersted\'s experiment: Magnetic field around a current-carrying wire',
              'Constructing a powerful electromagnet using an iron nail and insulated copper wire',
              'Working mechanism of the electric bell'
            ],
            practicalOrActivity: 'Building a working electromagnet and testing magnetic paperclip lifting capacity'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (সপ্তম শ্রেণি) - WBBSE',
          'Science Class 7 - NCERT / CBSE',
          'Lakhmir Singh & Manjit Kaur Class 7 Science Series',
          'Biley Intermediate Physical Science Practical Blueprint'
        ],
        examPattern: 'Summative Written Theory Exams, Lab Practicals & Diagnostic MCQ Tests',
        practicalAvailable: true
      },
      {
        id: 'c7-bio',
        name: 'Biology - Life Science (জীবনবিজ্ঞান ও মানবদেহ)',
        code: 'BIO-UP-7',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Class 7 Biology curriculum combining WBBSE (পরিবেশ ও বিজ্ঞান - জীবজগৎ) and CBSE (NCERT Biology): Nutrition in plants (photosynthesis, parasitic, saprotrophic), Nutrition in animals (human digestive system, ruminants), Respiration in organisms, Transportation in animals and plants (circulatory system, blood, kidneys), Reproduction in plants, and Forest ecosystems.',
        weeklyHours: 5,
        totalModules: 14,
        learningOutcomes: [
          'Explain photosynthesis mechanism, autotrophic vs heterotrophic nutrition (Cuscuta, Pitcher plant, Fungi, Lichens)',
          'Describe the human digestive tract, enzyme actions (amylase, pepsin, bile, lipase), and ruminant digestion',
          'Differentiate aerobic vs anaerobic respiration, explain human breathing and cellular respiration',
          'Detail the human circulatory system (heart chambers, double circulation, blood cells, blood groups) and excretory system (kidneys, nephrons)',
          'Explain asexual reproduction (vegetative, budding, fragmentation, spores) and sexual reproduction in flowering plants',
          'Analyze forest layers (canopy, understorey), decomposers, and biodiversity conservation'
        ],
        keyChapters: [
          {
            title: 'Nutrition in Plants & Animals (উদ্ভিদ ও প্রাণীর পুষ্টি ও পরিপাক)',
            description: 'Autotrophic nutrition, light and dark reactions in photosynthesis, stomata function; heterotrophic plants (Cuscuta, insectivorous Pitcher plant, fungi saprotrophs, mycorrhiza); human digestive system anatomy and enzyme digestion; digestion in ruminants (cud chewing).',
            subtopics: [
              'Photosynthesis equation: $6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2$',
              'Human digestive organs: Mouth, esophagus, stomach, small intestine, liver, pancreas',
              'Enzymatic breakdown of carbohydrates, proteins, and lipids',
              'Ruminant stomach compartments (Rumen, Reticulum, Omasum, Abomasum)'
            ],
            practicalOrActivity: 'Starch test on variegated leaf to prove chlorophyll is essential for photosynthesis'
          },
          {
            title: 'Respiration & Transportation (শ্বসন, সংবহনতন্ত্র ও রেচন)',
            description: 'Cellular respiration (aerobic vs anaerobic), human respiratory system and breathing mechanism; human circulatory system: Heart structure, double circulation, arteries, veins, capillaries, blood components (RBC, WBC, Platelets, Plasma), ABO blood groups; human excretory system (kidneys, nephrons, urine formation); xylem and phloem transport in plants.',
            subtopics: [
              'Aerobic ($C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + 38ATP$) vs Anaerobic (Lactic acid / Alcohol)',
              'Anatomy of human 4-chambered heart and cardiac cycle',
              'Kidney structure, dialysis principle, and nephron filtration',
              'Transpiration pull and xylem sap ascent in tall trees'
            ],
            practicalOrActivity: 'Stethoscope heart rate measurement and bell jar lung breathing model'
          },
          {
            title: 'Plant Reproduction & Forest Ecology (উদ্ভিদের জনন ও বাস্তুতন্ত্র)',
            description: 'Asexual reproduction: Vegetative propagation (cutting, grafting, tubers), budding in yeast, fragmentation in Spirogyra, spore formation; sexual reproduction: Flower anatomy, self vs cross pollination, fertilization, zygote, seed dispersal; forest layers (canopy, crown, understorey) and ecological food webs.',
            subtopics: [
              'Modes of asexual reproduction with biological specimens',
              'Pollination mechanisms (wind, water, insect) and pollen tube germination',
              'Forest stratification, role of decomposers, and soil humus enrichment'
            ],
            practicalOrActivity: 'Observing budding in yeast cells and Spirogyra filaments under microscope'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (সপ্তম শ্রেণি) - WBBSE',
          'Science Class 7 (Biology Chapters) - NCERT / CBSE',
          'Biley Intermediate Living World Atlas & Lab Manual'
        ],
        examPattern: 'Summative Written Exams, Diagram Labeling Tests & Microscope Practicals',
        practicalAvailable: true
      },
      {
        id: 'c7-eng',
        name: 'English (Language & Literature)',
        code: 'ENG-UP-7',
        iconName: 'BookA',
        color: 'teal',
        description: 'Comprehensive English curriculum covering WBBSE (Blossoms) and CBSE (Honeycomb & An Alien Hand): Literary appreciation, non-finite verbs (infinitives, gerunds, participles), clauses (noun, adjective, adverb), voice and narration transformation, subject-verb concord, formal letters to the Editor/Principal, notice writing, descriptive essays, and précis writing.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Analyze classic literature, character motivations, themes, and poetic devices with critical depth',
          'Identify and use non-finite verbs (Infinitives, Gerunds, Participles) and modal auxiliaries',
          'Transform active/passive voice and direct/indirect reported speech across different sentence types',
          'Write high-scoring formal letters to the Editor and school authorities in standard board format',
          'Draft structured 120-150 word descriptive essays, précis summaries, and official notices'
        ],
        keyChapters: [
          {
            title: 'Literature & Critical Analysis (সাহিত্য পাঠ ও বোধপরীক্ষণ)',
            description: 'In-depth analysis of prose and poetry from Blossoms, Honeycomb, and An Alien Hand; unseen comprehension passages, evaluating character decisions, interpreting figurative language (metaphors, similes, personification).',
            subtopics: [
              'Themes: Empathy, justice, human resilience, Indian heritage',
              'Poetic forms: Stanza analysis, rhythm, mood, and tone',
              'Unseen analytical and discursive comprehension strategies'
            ],
            practicalOrActivity: 'Student-led literary debates and poetry recitation workshops'
          },
          {
            title: 'Advanced Grammar Mechanics (উন্নত ব্যাকরণ ও রূপান্তর)',
            description: 'Non-finite verbs (Infinitives, Gerunds, Participles), Clauses (Noun, Adjective/Relative, Adverbial clauses), Active & Passive Voice transformation, Direct & Indirect Speech transformation, Subject-Verb Concord exceptions.',
            subtopics: [
              'Infinitives vs Gerunds vs Participles in sentence construction',
              'Joining sentences using relative pronouns and subordinate conjunctions',
              'Rules of reported speech: Tense backshifting, pronouns, time/place adverbs',
              'Active to passive voice conversions across all tenses'
            ],
            practicalOrActivity: 'Sentence transformation whiteboard sprint and error editing clinic'
          },
          {
            title: 'Formal Composition, Letters & Précis (নির্মিতি, পত্র লিখন ও সারসংক্ষেপ)',
            description: 'Formal letters (Letter to the Editor on social/civic issues, official letters to Headmaster/Principal), Notice writing with box layout, Descriptive and argumentative essays (120-150 words), and Précis/Summary writing with title.',
            subtopics: [
              'Formal editorial letter structure: Problem description, impact, suggested remedies',
              'Précis writing rules: $1/3$ length constraint, objective tone, omitting examples',
              'Argumentative essay writing with structured paragraphs'
            ],
            practicalOrActivity: 'Drafting op-eds and publishing in the Biley Student Academy Journal'
          }
        ],
        referenceMaterials: [
          'Blossoms (Class 7 English) - WBBSE',
          'Honeycomb & An Alien Hand - NCERT / CBSE Class 7',
          'Wren & Martin High School English Grammar & Composition',
          'Biley Class 7 English Board Scoring Blueprint'
        ],
        examPattern: 'Summative Examinations (Reading, Writing, Grammar, Literature) + Oral Viva',
        practicalAvailable: false
      },
      {
        id: 'c7-comp',
        name: 'Computer Science & ICT (কম্পিউটার শিক্ষা)',
        code: 'COMP-UP-7',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 7 Computer Science curriculum: Python programming foundations (data types, conditionals, loops, functions), modern web development with HTML5 & CSS styling, database concepts with SQL basics, and cyber safety/malware prevention.',
        weeklyHours: 4,
        totalModules: 12,
        learningOutcomes: [
          'Write structured Python programs using variables, data types (`int`, `float`, `str`, `bool`), and arithmetic/logical operators',
          'Implement conditional logic (`if-elif-else`) and iteration (`for` and `while` loops) to solve mathematical problems',
          'Build styled multi-page websites using semantic HTML5 elements and CSS formatting',
          'Understand database tables, primary keys, and execute basic SQL queries (`SELECT`, `INSERT`, `WHERE`)',
          'Identify malware categories (Viruses, Trojans, Worms, Ransomware) and apply two-factor authentication'
        ],
        keyChapters: [
          {
            title: 'Python Programming Core (পাইথন প্রোগ্রামিং সূচনা)',
            description: 'Python syntax, variables, naming conventions, datatypes (`int`, `float`, `str`, `bool`), operators (arithmetic, relational, logical), conditional branching (`if`, `elif`, `else`), building a calculator and grade checker.',
            subtopics: [
              'Input and output in Python (`input()` and formatted `print()`)',
              'Type casting and operator precedence',
              'Conditional decision-making structures (`if-elif-else`)'
            ],
            practicalOrActivity: 'Coding an interactive Simple Calculator and Student Grade Generator in Python'
          },
          {
            title: 'Python Loops & Algorithms (লুপ ও সমস্যা সমাধান)',
            description: '`for` and `while` loops, `range()` function, nested loops, loop control statements (`break`, `continue`), algorithm flowcharts, building multiplication tables, prime number checkers, and number guessing games.',
            subtopics: [
              '`for` loop iteration and `range(start, stop, step)` syntax',
              '`while` loops with boolean condition termination',
              'Implementing linear algorithms: Factorial, Prime checker, Fibonacci series'
            ],
            practicalOrActivity: 'Developing a Python Number Guessing Game with random module'
          },
          {
            title: 'Web Design with HTML5 & CSS (এইচটিএমএল ও সিএসএস ওয়েব ডিজাইন)',
            description: 'Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`), inline vs external CSS, CSS selectors, colors, fonts, margins, padding, styling tables, forms, and responsive navigation bars.',
            subtopics: [
              'Structuring clean multi-page HTML documents',
              'CSS box model: Content, Padding, Border, Margin',
              'Styling tables, buttons, and user registration forms with CSS'
            ],
            practicalOrActivity: 'Building a personal responsive Portfolio Website using HTML5 and CSS'
          },
          {
            title: 'Databases & Cyber Security (ডেটাবেস ও সাইবার নিরাপত্তা)',
            description: 'Relational database concepts (tables, records, fields, Primary Key), SQL basics (`CREATE TABLE`, `INSERT INTO`, `SELECT * FROM table WHERE condition`), malware types (virus, worm, ransomware, spyware), and 2FA authentication.',
            subtopics: [
              'Tables, attributes, rows, and Primary Key uniqueness',
              'Executing basic SQL queries in SQLite / MySQL terminal',
              'Cyber threats and setting up two-factor authentication (2FA)'
            ],
            practicalOrActivity: 'Creating a Student Database table and executing SQL queries in lab'
          }
        ],
        referenceMaterials: [
          'Biley Class 7 Python & Web Development Lab Manual',
          'Computer Applications with Python (Sumita Arora)',
          'CBSE Skill Education & WBBSE ICT Curriculum'
        ],
        examPattern: 'Live Computer Lab Programming Exam + Project Portfolio Evaluation',
        practicalAvailable: true
      }
    ]
  },

  // ==========================================
  // CLASS 8 (Upper Primary - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 8,
    gradeLabel: 'Class 8 (WBBSE & CBSE)',
    category: 'upper_primary',
    ageGroup: '13 - 14 Years',
    academicFocus: 'Pre-Secondary Board Foundation: Ganit Prabha & NCERT Mathematics (Factorization, Mensuration, Compound Interest), Mechanics, Sound, Light & Chemical Reactions (Physical Science), Cell Biology, Microorganisms & Reproduction (Biology), Blossoms & Honeydew English, Python Data Structures & Databases',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:30 PM - 7:30 PM', mode: 'Offline Classroom + Intensive Lab' },
    subjects: [
      {
        id: 'c8-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-UP-8',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 8 Mathematics curriculum integrating WBBSE (গণিতপ্রভা - অষ্টম শ্রেণি) and CBSE (NCERT Class 8 Mathematics): Rational numbers & exponents, Squares/Square Roots & Cubes/Cube Roots, Algebraic identities ($(a+b)^3, (a-b)^3, a^3 \\pm b^3$), Polynomial multiplication/division, Factorization (middle term splitting), Linear equations in one variable, Comparing quantities (Discount, GST, Compound Interest $A = P(1+\\frac{r}{100})^n$), Quadrilaterals & geometric theorems, Mensuration (Cubes, Cuboids, Cylinders surface area & volume), and Data handling & graphs.',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: [
          'Master rational number arithmetic properties, calculate square roots & cube roots using prime factorization and long division',
          'Expand cubic identities ($(a+b)^3, a^3+b^3$) and factorize polynomials using middle term splitting',
          'Solve complex linear equations in one variable applied to word problems on digits, age, and speed',
          'Calculate Compound Interest ($A = P(1+\\frac{r}{100})^n$), profit/loss, and GST',
          'Prove geometric properties of quadrilaterals (parallelograms, rhombuses, trapeziums) and angle sum theorems',
          'Compute surface area and volume of cuboids, cubes, and right circular cylinders',
          'Construct frequency distribution tables, histograms, pie charts, and plot linear graphs on Cartesian planes'
        ],
        keyChapters: [
          {
            title: 'Rational Numbers, Squares & Cubes (মূলদ সংখ্যা, বর্গমূল ও ঘনমূল)',
            description: 'WBBSE মূলদ সংখ্যা & CBSE Rational Numbers / Squares and Square Roots / Cubes and Cube Roots: Properties of rational numbers (closure, commutativity, associativity, distributivity), finding square roots by long division method, finding cube roots by prime factorization, and negative powers in exponents.',
            subtopics: [
              'Rational numbers density property and operations',
              'Square numbers properties, Pythagorean triplets ($2m, m^2-1, m^2+1$), long division square root',
              'Cube numbers, prime factorization cube roots, and laws of exponents with negative powers'
            ],
            practicalOrActivity: 'Pythagorean triplet puzzle generator and long division square root clinic'
          },
          {
            title: 'Algebraic Identities, Factorization & Linear Equations (বীজগাণিতিক সূত্রাবলী ও উৎপাদকে বিশ্লেষণ)',
            description: 'WBBSE বীজগাণিতিক সংখ্যামালার গুণ-ভাগ, ঘনফল ও উৎপাদকে বিশ্লেষণ & CBSE Algebraic Expressions and Identities / Factorisation / Linear Equations in One Variable: Cubic identities, middle term splitting, HCF/LCM of polynomials, and linear equations.',
            subtopics: [
              'Cubic identities: $(a+b)^3 = a^3+3a^2b+3ab^2+b^3$, $(a-b)^3$, $a^3+b^3 = (a+b)(a^2-ab+b^2)$, $a^3-b^3$',
              'Factorization methods: Common terms, regrouping, identities, middle term splitting ($x^2 + (a+b)x + ab$)',
              'Polynomial division algorithm and HCF/LCM of algebraic expressions',
              'Linear equations with variables on both sides and real-world word problems'
            ],
            practicalOrActivity: 'Cardboard 3D blocks visual derivation of $(a+b)^3$'
          },
          {
            title: 'Commercial Mathematics & Compound Interest (চক্রবৃদ্ধি সুদ, লাভ-ক্ষতি ও GST)',
            description: 'WBBSE শতকরা ও লাভ-ক্ষতি & CBSE Comparing Quantities: Ratios and percentages, discount calculation, profit and loss, GST taxation, and Compound Interest formula ($A = P(1+\\frac{r}{100})^n$).',
            subtopics: [
              'Marked price, selling price, and discount percentage',
              'Goods and Services Tax (GST) computation on invoices',
              'Derivation and application of Compound Interest formula for annual and semi-annual compounding'
            ],
            practicalOrActivity: 'Simulating 5-year compound interest savings growth model in spreadsheets'
          },
          {
            title: 'Geometry & Quadrilaterals (চতুর্ভুজ, উপপাদ্য ও জ্যামিতিক অঙ্কন)',
            description: 'WBBSE ত্রিভুজ ও চতুর্ভুজের উপপাদ্য & CBSE Understanding Quadrilaterals / Practical Geometry: Angle sum property of polygons ($n-2) \\times 180^\\circ$, sum of exterior angles = $360^\\circ$, properties of parallelogram, rectangle, rhombus, square, trapezium, and constructing quadrilaterals with compass.',
            subtopics: [
              'Sum of interior and exterior angles of convex polygons',
              'Properties and proofs for parallelograms and special quadrilaterals',
              'Constructing quadrilaterals given 4 sides & 1 diagonal, or 3 sides & 2 included angles'
            ],
            practicalOrActivity: 'Geometric proof portfolio of quadrilateral properties with compass & ruler'
          },
          {
            title: 'Mensuration: Surface Area & Volume (ক্ষেত্রফল ও আয়তন: ঘনক, আয়তঘনক ও চোঙ)',
            description: 'WBBSE ক্ষেত্রফল ও আয়তন & CBSE Mensuration: Area of trapezium, general quadrilaterals, total and lateral surface area of cubes, cuboids, and right circular cylinders; volume calculation ($V = \\pi r^2 h$).',
            subtopics: [
              'Area of trapezium: $\\frac{1}{2}(a+b)h$ and special quadrilaterals',
              'Surface area: Cuboid ($2(lb+bh+hl)$), Cube ($6a^2$), Cylinder ($2\\pi rh + 2\\pi r^2$)',
              'Volume: Cuboid ($l \\times b \\times h$), Cube ($a^3$), Cylinder ($\\pi r^2 h$)'
            ],
            practicalOrActivity: 'Net unfolded models of cylinder and cuboid surface area calculation'
          },
          {
            title: 'Data Handling, Histograms & Linear Graphs (পরিসংখ্যা, হিস্টোগ্রাম ও লেখচিত্র)',
            description: 'WBBSE পাই-চিত্র ও তথ্য & CBSE Data Handling / Introduction to Graphs: Grouped frequency distribution, class intervals, histograms, circle graphs / pie charts, Cartesian coordinate plane ($(x, y)$), and interpreting linear line graphs.',
            subtopics: [
              'Grouped frequency tables with tally marks and class marks',
              'Drawing Histograms without gaps for continuous data',
              'Plotting points on Cartesian axes and finding slope/trends of linear distance-time graphs'
            ],
            practicalOrActivity: 'Graph paper plotting of speed vs time and interpreting real-world curves'
          }
        ],
        referenceMaterials: [
          'গণিতপ্রভা (অষ্টম শ্রেণি) - WBBSE (West Bengal Board of Secondary Education)',
          'Mathematics Class 8 - NCERT / CBSE',
          'RD Sharma / RS Aggarwal Class 8 Foundation Guide',
          'Biley Pre-Secondary Olympiad Mathematics Matrix'
        ],
        examPattern: 'WBBSE 3 Summative Evaluations / CBSE Periodic Exams + Step-by-Step Problem Solving Assessments',
        practicalAvailable: true
      },
      {
        id: 'c8-sci',
        name: 'Science - Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-UP-8',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Class 8 Physical Science curriculum combining WBBSE (পরিবেশ ও বিজ্ঞান - ভৌতবিজ্ঞান) and CBSE (NCERT Physics & Chemistry): Force, pressure, buoyancy & friction, Sound & human ear, Chemical effects of electric current & electroplating, Light, refraction & human eye, Combustion, fuels & flame, Common gases ($O_2, H_2, CO_2$), and Metals vs non-metals.',
        weeklyHours: 6,
        totalModules: 16,
        learningOutcomes: [
          'Calculate pressure ($P = F/A$), explain atmospheric and liquid pressure, Archimedes\' principle, buoyancy, and friction types',
          'Explain sound production, propagation, frequency, pitch, human vocal cords, and human ear anatomy',
          'Explain chemical effects of electric current, electrolytes, cations/anions, and electroplating in industries',
          'Trace refraction of light, critical angle, total internal reflection, mirage, and structure of the human eye',
          'Differentiate fossil fuels (coal, petroleum fractional distillation), combustion types, and flame zones',
          'Compare physical and chemical properties of metals and non-metals, reactivity series, and gas preparation'
        ],
        keyChapters: [
          {
            title: 'Force, Pressure, Buoyancy & Friction (বল, চাপ, প্লবতা ও ঘর্ষণ)',
            description: 'Contact and non-contact forces; Pressure ($P = F/A$), liquid pressure ($P = h\\rho g$), atmospheric pressure and barometers; Archimedes\' Principle, buoyant force, laws of floatation; static, sliding, and rolling friction; fluid friction/drag.',
            subtopics: [
              'Pressure dependence on area and depth of liquid column',
              'Archimedes\' Principle: Loss of weight = Weight of displaced liquid',
              'Conditions for floating ($W < B$ or $W = B$) and sinking ($W > B$)',
              'Methods of increasing and reducing friction in machines'
            ],
            practicalOrActivity: 'Measuring buoyant force with overflow can and spring balance'
          },
          {
            title: 'Sound & Human Ear Mechanism (শব্দ ও মানব কর্ণ)',
            description: 'Sound produced by vibrating objects, medium required for propagation, amplitude, time period, frequency, loudness (decibels), pitch, audible and inaudible frequencies ($20\\text{ Hz} - 20,000\\text{ Hz}$), human ear structure (outer, middle, inner ear), and noise pollution.',
            subtopics: [
              'Relationship between amplitude & loudness, and frequency & pitch',
              'Anatomy of human ear: Eardrum, ossicles (hammer, anvil, stirrup), cochlea',
              'Noise pollution sources, health hazards, and control measures'
            ],
            practicalOrActivity: 'Tuning fork water ripple experiment and rubber membrane eardrum model'
          },
          {
            title: 'Light, Refraction & Human Eye (আলো, প্রতিসরণ ও মানব চক্ষু)',
            description: 'Laws of reflection, multiple reflection and kaleidoscope, refraction of light, Snell\'s law, refractive index, critical angle, total internal reflection, mirage, dispersion, human eye anatomy, vision defects (myopia, hypermetropia), and Braille system.',
            subtopics: [
              'Refraction through rectangular glass slab and lateral displacement',
              'Total internal reflection conditions and optical fiber applications',
              'Anatomy of human eye: Cornea, iris, pupil, lens, retina, optic nerve, blind spot',
              'Care of eyes, corrective lenses, and Braille literacy system'
            ],
            practicalOrActivity: 'Glass slab ray tracing experiment on optical pin board'
          },
          {
            title: 'Chemical Effects of Current & Electroplating (তড়িৎপ্রবাহের রাসায়নিক ফল ও তড়িৎলেপন)',
            description: 'Conduction of electricity in liquids, electrolytes vs non-electrolytes, electrolysis of water, migration of cations and anions, electroplating principles and industrial applications (chromium plating, silver plating).',
            subtopics: [
              'Electrolysis apparatus (Voltameter, electrodes: Anode & Cathode)',
              'Electrolysis of acidified water ($2H_2O \\to 2H_2 + O_2$)',
              'Electroplating a copper strip on an iron key with $CuSO_4$ solution'
            ],
            practicalOrActivity: 'Copper electroplating lab onto an iron object using battery and beaker'
          },
          {
            title: 'Combustion, Fuels & Common Gases (দহন, জ্বালানি ও সাধারণ গ্যাসসমূহ)',
            description: 'Conditions for combustion, ignition temperature, fire extinguishers, types of combustion (rapid, spontaneous, explosion), flame zones (innermost dark, middle luminous, outer non-luminous), calorific value; preparation, properties, and tests for Oxygen ($O_2$), Hydrogen ($H_2$), and Carbon Dioxide ($CO_2$).',
            subtopics: [
              'Candle flame zones and complete vs incomplete combustion',
              'Fossil fuels: Fractional distillation of petroleum and coal products (coke, coal tar, coal gas)',
              'Laboratory preparation and chemical tests for $O_2, H_2, CO_2$'
            ],
            practicalOrActivity: 'Observing zones of candle flame and limewater test for carbon dioxide'
          },
          {
            title: 'Metals & Non-Metals Chemistry (ধাতু ও অধাতুর রসায়ন)',
            description: 'Physical properties (malleability, ductility, sonority, conductivity); chemical reactions with oxygen, water, acids, and bases; reactivity series; displacement reactions; corrosion of metals and alloy composition (brass, bronze, stainless steel).',
            subtopics: [
              'Comparison of physical and chemical properties of metals vs non-metals',
              'Reactivity series: Metal displacement ($Fe + CuSO_4 \\to FeSO_4 + Cu$)',
              'Rusting of iron conditions and prevention methods (galvanization, painting, alloying)'
            ],
            practicalOrActivity: 'Metal displacement reaction in test tube with copper sulphate and iron nail'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (অষ্টম শ্রেণি) - WBBSE',
          'Science Class 8 - NCERT / CBSE',
          'Lakhmir Singh & Manjit Kaur Class 8 Physics & Chemistry',
          'Biley Pre-Board Physical Science Experimental Manual'
        ],
        examPattern: 'Summative Written Theory Exams, Lab Practicals & Diagnostic Tests',
        practicalAvailable: true
      },
      {
        id: 'c8-bio',
        name: 'Biology - Life Science (জীবনবিজ্ঞান ও জীবজগৎ)',
        code: 'BIO-UP-8',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Class 8 Biology curriculum unifying WBBSE (পরিবেশ ও বিজ্ঞান - জীবনবিজ্ঞান) and CBSE (NCERT Biology): Cell structure, organelles & division, Microorganisms (friend and foe, nitrogen cycle, antibiotics, vaccines), Reproduction in animals (male/female systems, IVF, metamorphosis, asexual budding/fission), Reaching the age of adolescence (hormones, puberty, reproductive health), Crop production and agricultural management, and Conservation of plants and animals (wildlife sanctuaries, national parks, Red Data Book).',
        weeklyHours: 5,
        totalModules: 14,
        learningOutcomes: [
          'Identify plant vs animal cell organelles (Nucleus, Mitochondria, ER, Golgi, Plastids, Lysosomes, Vacuole) under microscope',
          'Categorize microorganisms (Bacteria, Fungi, Protozoa, Algae, Viruses), explain nitrogen cycle, fermentation, and food preservation',
          'Describe male and female human reproductive systems, fertilization (internal/external), IVF, and asexual reproduction',
          'Explain puberty changes, secondary sexual characteristics, endocrine glands & hormones (Pituitary, Thyroid, Pancreas, Adrenal, Gonads)',
          'Detail agricultural crop practices: Soil preparation, seed selection, modern irrigation (drip, sprinkler), harvesting, silos, and animal husbandry',
          'Explain causes and consequences of deforestation, biodiversity hotspots, Red Data Book, and wildlife conservation'
        ],
        keyChapters: [
          {
            title: 'Cell — Structure & Organelles (কোষের গঠন ও বিভিন্ন অঙ্গাণু)',
            description: 'Discovery of cell (Robert Hooke), Cell Theory (Schleiden & Schwann), unicellular vs multicellular, prokaryotic vs eukaryotic cells, plant cell vs animal cell comparison; organelle functions: Nucleus, chromatin, mitochondria (powerhouse), endoplasmic reticulum, Golgi body, lysosomes (suicide bag), plastids (chloroplasts), ribosomes, and vacuoles.',
            subtopics: [
              'Onion peel (plant cell) and human cheek cell (animal cell) microscopic study',
              'Detailed organelle functions and diagrammatic labeling',
              'Overview of cell division: Mitosis (growth) vs Meiosis (gamete formation)'
            ],
            practicalOrActivity: 'Staining and preparing temporary slide of onion epidermal peel under microscope'
          },
          {
            title: 'Microorganisms: Friend and Foe (অনুজীবের জগৎ ও মানব কল্যাণ)',
            description: 'Major groups of microbes (Bacteria, Fungi, Protozoa, Algae, Viruses); commercial uses: Yeast in bakery and alcohol brewing, discovery of antibiotics (Penicillin by Alexander Fleming), vaccines and antibodies, nitrogen fixation by Rhizobium, nitrogen cycle in nature, food poisoning, and preservation techniques (pasteurization, canning).',
            subtopics: [
              'Beneficial microbes in industry, medicine, and agriculture',
              'Pathogenic microbes, human communicable diseases, and vectors (mosquitoes, houseflies)',
              'Step-by-step 5-stage Nitrogen Cycle diagram and food preservation methods'
            ],
            practicalOrActivity: 'Observing curd Lactobacillus bacteria and bread Rhizopus mold under high-power microscope'
          },
          {
            title: 'Reproduction & Adolescence (জনন প্রক্রিয়া ও বয়ঃসন্ধিকাল)',
            description: 'Modes of reproduction: Asexual (budding in Hydra, binary fission in Amoeba) and Sexual (human male and female reproductive systems); fertilization (internal vs external), embryo development, viviparous vs oviparous animals, metamorphosis in frogs; adolescence puberty changes, endocrine system (hormones: Growth Hormone, Thyroxine, Insulin, Adrenaline, Estrogen, Testosterone), sex determination in humans (XX/XY), and reproductive hygiene.',
            subtopics: [
              'Anatomy and diagrams of male and female reproductive organs',
              'Fertilization, zygote formation, In Vitro Fertilization (IVF / test-tube babies)',
              'Endocrine glands and hormonal regulation of body metabolism',
              'Chromosomal basis of sex determination in humans (Father determines sex of child)'
            ],
            practicalOrActivity: 'Observing permanent slides of binary fission in Amoeba and budding in Hydra'
          },
          {
            title: 'Crop Production & Wildlife Conservation (কৃষিবিজ্ঞান ও জীববৈচিত্র্য সংরক্ষণ)',
            description: 'Agricultural practices: Ploughing, leveling, seed selection, manures vs chemical fertilizers, traditional vs modern irrigation (drip and sprinkler systems), weeding, harvesting, storage in silos; animal husbandry (dairy, poultry, apiculture, pisciculture); deforestation impacts, Biosphere Reserves, National Parks, Sanctuaries, Red Data Book, endemic species, and Project Tiger.',
            subtopics: [
              'Kharif crops vs Rabi crops in Indian agriculture',
              'Drip irrigation advantages in water conservation',
              'In-situ vs Ex-situ conservation and biodiversity hotspots in India'
            ],
            practicalOrActivity: 'Designing a modern water-saving Drip Irrigation model & map of Indian National Parks'
          }
        ],
        referenceMaterials: [
          'পরিবেশ ও বিজ্ঞান (অষ্টম শ্রেণি) - WBBSE',
          'Science Class 8 (Biology Chapters) - NCERT / CBSE',
          'Trueman\'s Foundation Biology for Class 8',
          'Biley Pre-Secondary Living World Master Atlas'
        ],
        examPattern: 'Summative Written Theory Exams, Microscope Practicals & Diagram Precision Tests',
        practicalAvailable: true
      },
      {
        id: 'c8-eng',
        name: 'English (Language & Literature)',
        code: 'ENG-UP-8',
        iconName: 'BookA',
        color: 'teal',
        description: 'Comprehensive English curriculum covering WBBSE (Princess September / Blossoms) and CBSE (Honeydew & It So Happened): Literary analysis, advanced clauses (noun, relative, adverbial clauses), reported speech transformation across all sentence categories, active/passive voice with two objects, newspaper report writing, official letters to municipal authorities/editors, précis writing, notice drafting, and argumentative essays.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Analyze classic literature, character complexities, philosophical themes, and poetic devices with board exam precision',
          'Synthesize complex sentences using noun, relative/adjective, and adverbial clauses',
          'Master direct to indirect speech and passive voice transformations across complex sentences',
          'Write professional Newspaper Reports with headline, byline, place, and structured reporting',
          'Draft high-scoring formal letters to Editor/Municipal Commissioners, Précis summaries, and 150-200 word essays'
        ],
        keyChapters: [
          {
            title: 'Literature Appreciation & Critical Commentary (সাহিত্য পাঠ ও বিশ্লেষণ)',
            description: 'Critical study of prescribed prose and poetry from Blossoms, Honeydew, and It So Happened; evaluating themes of freedom, human courage, historical milestones; analyzing poetic devices (alliteration, rhyme, imagery, personification, symbolism); unseen analytical passages.',
            subtopics: [
              'Thematic prose analysis: Freedom vs confinement, nature vs civilization',
              'Poetry appreciation: Theme extraction, stanza breakdown, figure of speech analysis',
              'Unseen factual and discursive comprehension answering strategies'
            ],
            practicalOrActivity: 'Dramatic character monologues and literary criticism roundtables'
          },
          {
            title: 'Advanced Clauses, Voice & Reported Speech (উন্নত ব্যাকরণ ও বাক্য রূপান্তর)',
            description: 'Clauses (Noun, Relative/Adjective, Adverbial clauses of time/reason/condition/concession), Joining sentences into Simple, Complex, and Compound sentences; Direct and Indirect Reported Speech across Assertive, Interrogative, Imperative, and Exclamatory sentences; Active and Passive Voice with modal verbs and two objects.',
            subtopics: [
              'Synthesis of sentences using relative pronouns, conjunctions, and participles',
              'Complete rules of reported speech: Interrogative question word ordering, imperative reporting verbs',
              'Passive voice transformation with prepositional verbs and impersonal passive constructions'
            ],
            practicalOrActivity: 'Board-pattern grammar transformation speed drills and error detection exercises'
          },
          {
            title: 'Report Writing, Formal Letters & Composition (সংবাদ প্রতিবেদন, পত্র ও প্রবন্ধ)',
            description: 'Newspaper Report writing format (headline, byline, dateline, lead paragraph, details), Formal letters to Editor, Municipal Commissioner, and Headmaster; Précis writing with concise title; Official notices; 150-200 word structured descriptive and argumentative essays.',
            subtopics: [
              'Newspaper report writing on accidents, science exhibitions, tree plantation drives',
              'Formal letter writing format, vocabulary, and paragraph transitions',
              'Précis writing methodology: Extracting core arguments and trimming verbosity',
              'Essay structuring: Introduction, supporting arguments with evidence, balanced conclusion'
            ],
            practicalOrActivity: 'Drafting and publishing school newspaper editions in student journalism lab'
          }
        ],
        referenceMaterials: [
          'Blossoms (Class 8 English) - WBBSE',
          'Honeydew & It So Happened - NCERT / CBSE Class 8',
          'Wren & Martin High School English Grammar & Composition',
          'Biley Class 8 Board Success Playbook'
        ],
        examPattern: 'Summative Board-Pattern Exams (Reading, Writing, Grammar, Literature) + Spoken Assessment',
        practicalAvailable: false
      },
      {
        id: 'c8-comp',
        name: 'Computer Science & ICT (কম্পিউটার শিক্ষা)',
        code: 'COMP-UP-8',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 8 Computer Science curriculum: Advanced Python programming & data structures (Strings, Lists, Tuples, Dictionaries, Functions), Relational Database Management (RDBMS) & SQL queries, Modern Web Development (HTML5, CSS3 Grid/Flexbox, JavaScript basics), AI & Mobile App Development fundamentals, and Cyber Law/Ethics.',
        weeklyHours: 4,
        totalModules: 14,
        learningOutcomes: [
          'Write Python programs with structured data types (Lists, Tuples, Dictionaries) and user-defined functions (`def`)',
          'Create database tables, enforce primary keys, and execute complex SQL queries (`SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`)',
          'Design interactive responsive websites using HTML5 forms, CSS Flexbox/Grid, and basic JavaScript DOM events',
          'Understand fundamentals of Artificial Intelligence, Computer Vision, and build mobile apps using MIT App Inventor',
          'Understand IT Act 2000, intellectual property rights, copyright vs open source, and cyber safety'
        ],
        keyChapters: [
          {
            title: 'Python Data Structures & Functions (পাইথন ডেটা স্ট্রাকচার ও ফাংশন)',
            description: 'String manipulation and slicing, Lists operations (append, insert, remove, sort), Tuples, Dictionaries (key-value pairs), user-defined functions with parameters and return values (`def`), building a Student Record System.',
            subtopics: [
              'List slicing, indexing, list comprehensions, and nested lists',
              'Dictionary operations, iterating through keys and values',
              'Defining custom functions with arguments and return statements'
            ],
            practicalOrActivity: 'Coding a complete Student Report Card & Grade Management System in Python'
          },
          {
            title: 'Relational Databases & SQL Queries (রিলেশনাল ডেটাবেস ও এসকিউএল)',
            description: 'RDBMS concepts, tables, records, fields, Primary Key, Foreign Key; SQL DDL & DML commands: `CREATE TABLE`, `INSERT INTO`, `SELECT * FROM table WHERE condition ORDER BY column`, `UPDATE`, `DELETE`, aggregate functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`).',
            subtopics: [
              'Database design, normalization basics, and key constraints',
              'Writing parameterized SQL queries and filtering with logical operators (`AND`, `OR`, `LIKE`)',
              'Executing aggregate calculation queries on database tables'
            ],
            practicalOrActivity: 'Designing a Library Book Database and running SQL queries on MySQL terminal'
          },
          {
            title: 'Web Design with CSS Grid & JavaScript (ওয়েব ডিজাইন ও জাভাস্ক্রিপ্ট)',
            description: 'Advanced HTML5 forms with input validation, CSS3 Flexbox and Grid layouts, CSS media queries for mobile responsiveness, and introduction to JavaScript: Variables, alert, DOM manipulation (`document.getElementById`), and button click event handlers.',
            subtopics: [
              'Creating responsive navigation bars and bento card grids with CSS Flexbox/Grid',
              'HTML5 form validation attributes (`required`, `pattern`, `email`)',
              'Writing interactive JavaScript scripts for button clicks and dark mode toggles'
            ],
            practicalOrActivity: 'Building an interactive, responsive Quiz Web App with HTML, CSS, and JavaScript'
          },
          {
            title: 'Artificial Intelligence, App Dev & Cyber Law (এআই, অ্যাপ ডেভেলপমেন্ট ও আইটি আইন)',
            description: 'What is AI & Machine Learning? Computer Vision, NLP & Robotics overview; Visual mobile app building in MIT App Inventor; Cyber Security threats (Ransomware, Phishing, Identity theft), Indian IT Act 2000, and Open Source licensing.',
            subtopics: [
              'AI domains: Computer Vision, Natural Language Processing, Machine Learning',
              'Building an Android Mobile App on MIT App Inventor with sensor integration',
              'Cyber laws in India, digital safety regulations, and software licensing'
            ],
            practicalOrActivity: 'Creating a Text-to-Speech Android mobile application in MIT App Inventor'
          }
        ],
        referenceMaterials: [
          'Biley Class 8 Python, RDBMS & Webcraft Master Lab Manual',
          'Computer Applications Class 8 (Sumita Arora)',
          'CBSE Skill Education & WBBSE ICT Curriculum'
        ],
        examPattern: 'Hands-on Computer Lab Coding Exam + Mobile App / Web Project Evaluation',
        practicalAvailable: true
      }
    ]
  }
];
