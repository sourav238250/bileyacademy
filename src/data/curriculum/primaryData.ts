import { ClassGradeInfo } from '../../types';

export const PRIMARY_GRADES_DATA: ClassGradeInfo[] = [
  // ==========================================
  // CLASS 2 (Primary Foundation - WBBPE & CBSE)
  // ==========================================
  {
    gradeNumber: 2,
    gradeLabel: 'Class 2 (WBBPE & CBSE)',
    category: 'primary',
    ageGroup: '7 - 8 Years',
    academicFocus: 'Conceptual Arithmetic, Environmental Discovery & Language Fluency: Math (আমার গণিত & Math-Magic 2), Science / EVS (আমাদের পরিবেশ & Looking Around 2), and English (Butterfly / Wings & Mridang/Marigold 2)',
    weeklySchedulePreview: { days: 'Mon, Tue, Thu', timings: '3:30 PM - 5:45 PM', mode: 'Offline Classroom + Smart Lab' },
    subjects: [
      {
        id: 'c2-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-PRM-2',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 2 Mathematics aligning WBBPE (আমার গণিত) and CBSE (Math-Magic / Joyful Mathematics Book 2 / NCERT): 3-Digit Numbers up to 999 & Place Value (শতক, দশক, একক), 2-Digit Addition/Subtraction with Regrouping (Carry & Borrow), Repeated Addition as Multiplication & Tables (2 to 10), 2D & 3D Shapes, Standard Measurement (cm/m, g/kg, L/mL), Clock Reading & Money Calculations.',
        weeklyHours: 5,
        totalModules: 11,
        learningOutcomes: [
          'Read, write, expand, and compare 3-digit numbers up to 999 with place value (Hundreds, Tens, Ones / শতক, দশক, একক)',
          'Perform addition and subtraction of 2-digit and 3-digit numbers with carrying over and borrowing',
          'Understand multiplication as repeated addition, master multiplication tables from 2 to 10, and solve single-digit multiplication sums',
          'Classify 2D shapes (Sides, Corners) and 3D solids (Cube, Cuboid, Sphere, Cylinder, Cone; Flat vs Curved surfaces)',
          'Measure length in meters & centimeters, weight in grams & kilograms, and liquid volume in liters & milliliters',
          'Read analog clocks to the exact hour and half-hour, understand calendar months, and solve rupee-paise shopping transactions'
        ],
        keyChapters: [
          {
            title: '3-Digit Numbers & Place Value up to 999 (৩ অঙ্কের সংখ্যা ও স্থানীয় মান)',
            description: 'WBBPE আমার গণিত & CBSE Counting in Tens / Give and Take: Numbers 100 to 999, Hundreds (শতক), Tens (দশক), and Ones (একক), expanded form (বিস্তৃত রূপ), skip counting (2s, 5s, 10s, 50s), and Odd & Even numbers (জোড় ও বিজোড় সংখ্যা).',
            subtopics: [
              'Understanding 100 as ten groups of 10s; Numbers 101 to 999',
              'Place value and face value of digits in 3-digit numbers',
              'Expanded notation (e.g. 458 = 400 + 50 + 8) and compact form',
              'Comparing 3-digit numbers and ordering in ascending/descending order',
              'Odd and Even number identification up to 100'
            ],
            practicalOrActivity: 'Place value token cards and 3-digit abacus arithmetic challenge'
          },
          {
            title: 'Addition & Subtraction with Regrouping (হাতে রেখে যোগ ও বিয়োগ)',
            description: 'WBBPE & CBSE Give and Take / Jugs and Mugs: Addition of 2-digit and 3-digit numbers with carry-over; Subtraction with borrowing/regrouping; Word problems from daily situations.',
            subtopics: [
              '2-digit and 3-digit column addition with carry-over to Tens and Hundreds',
              '2-digit and 3-digit column subtraction with borrowing from Tens and Hundreds',
              'Mental addition strategies and estimation of sums',
              'Real-life multi-step story problems (shopping, library books, cricket scores)'
            ],
            practicalOrActivity: 'Base-ten block manipulation and speed math flashcard relays'
          },
          {
            title: 'Multiplication Foundations & Tables (গুণ ও নামতা: ২ থেকে ১০)',
            description: 'WBBPE & CBSE How Many Times? / Birds Come, Birds Go: Multiplication as repeated addition, skip counting patterns, constructing tables from 2 to 10, multiplying 2-digit numbers by 1-digit numbers.',
            subtopics: [
              'Concept of multiplication as equal grouping and repeated addition',
              'Multiplication symbol (×) and properties (multiplying by 0 and 1)',
              'Multiplication tables mastery from 2 to 10 with rhythmic recitation',
              'Single-digit and 2-digit by 1-digit multiplication without and with carry-over',
              'Multiplication story sums (e.g. wheels on 6 tricycles, legs on 5 chairs)'
            ],
            practicalOrActivity: 'Array grid dot counters and multiplication wheel construction'
          },
          {
            title: 'Shapes, Measurement, Time & Money (জ্যামিতি, পরিমাপ, ঘড়ি ও মুদ্রা)',
            description: 'WBBPE & CBSE Lines and Lines / Footprints / The Longest Step / Tens and Ones: Straight and curved lines, 3D shapes, standard units (m/cm, kg/g, L/mL), analog clock reading (o\'clock, half past), and shopping bills.',
            subtopics: [
              'Straight lines (Standing, Sleeping, Slanting) and curved lines',
              '3D geometric solid shapes: Cube, Cuboid, Cylinder, Cone, Sphere (Edges, Faces, Vertices)',
              'Standard units of measurement: Meter (m), Centimeter (cm), Kilogram (kg), Gram (g), Liter (L)',
              'Reading analog clock faces for full hours (e.g. 4:00) and half hours (e.g. 4:30)',
              'Days in months, leap year intro, and calculating change in Indian Rupee transactions'
            ],
            practicalOrActivity: 'Clay modeling of 3D solids and weighing classroom items with digital scale'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমার গণিত (Class 2)',
          'NCERT / CBSE: Math-Magic / Joyful Mathematics Book 2',
          'Biley Primary Mathematics Explorer & Activity Kit 2'
        ],
        examPattern: 'Summative Evaluation Tests, Mental Arithmetic Drills, Measurement Practicals & Problem-Solving Worksheets',
        practicalAvailable: true
      },
      {
        id: 'c2-sci',
        name: 'Science & EVS (বিজ্ঞান ও আমাদের পরিবেশ)',
        code: 'SCI-PRM-2',
        iconName: 'Leaf',
        color: 'amber',
        description: 'Class 2 Environmental Studies and Primary Science aligning WBBPE (আমাদের পরিবেশ) and CBSE (Looking Around / Environmental Studies / NCERT): Human Body & Vital Organs, Plant Diversity & Photosynthesis Intro, Animal Habitats & Food Habits, Air, Water Cycle, Neighborhood Helpers, Safety Rules & Pollution Awareness.',
        weeklyHours: 4,
        totalModules: 9,
        learningOutcomes: [
          'Differentiate between external body parts and internal vital organs (Brain, Heart, Lungs, Stomach, Bones, Muscles)',
          'Classify plant diversity (Herbs, Shrubs, Trees, Climbers, Creepers, Aquatic plants) and explain basic food-making in leaves',
          'Categorize animals based on food habits (Herbivores, Carnivores, Omnivores) and habitats (Land, Water, Air)',
          'Demonstrate properties of air (Air occupies space, exerts pressure, needed for burning) and understand the Water Cycle',
          'Appreciate community helpers (Doctor, Police, Farmer, Firefighter, Postman) and practice waste segregation (Wet vs Dry waste)',
          'Demonstrate basic first aid awareness, road safety precautions, and active environmental conservation'
        ],
        keyChapters: [
          {
            title: 'Our Amazing Body, Vital Organs & Health (মানবদেহ ও গুরুত্বপূর্ণ অঙ্গ)',
            description: 'WBBPE আমাদের পরিবেশ & CBSE My Body: Internal organs (Brain, Heart, Lungs, Stomach), bones and muscles, posture, balanced diet, exercise, and basic first aid for minor cuts and scrapes.',
            subtopics: [
              'Internal organs: Brain (thinking), Heart (blood pumping), Lungs (breathing), Stomach (digestion)',
              'Bones and muscles: Framework of the body and correct sitting/standing posture',
              'Food groups: Energy-giving, Body-building, and Protective foods',
              'Water balance in the body and importance of 8-10 glasses daily',
              'First aid box essentials: Antiseptic, bandage, cotton, and burn cream'
            ],
            practicalOrActivity: 'Stethoscope pulse listening demonstration & body organ cutout apron puzzle'
          },
          {
            title: 'Plant Diversity, Uses & Care (উদ্ভিদ বৈচিত্র্য ও উদ্ভিদের উপকারিতা)',
            description: 'WBBPE & CBSE Plant Life: Types of plants (Herbs, Shrubs, Trees, Climbers, Creepers); Photosynthesis intro (sunlight, air, water, chlorophyll); Medicinal plants (Tulsi, Neem, Aloe vera); Protecting trees.',
            subtopics: [
              'Classification of plants: Trees (Mango), Shrubs (Rose), Herbs (Mint), Climbers (Money plant), Creepers (Pumpkin)',
              'Leaves: Green kitchen of the plant; Stomata and breathing in leaves',
              'Useful plant products: Food grains, spices, medicines, cotton, timber, rubber',
              'Medicinal plants of Bengal and India: Tulsi, Neem, Basak, Turmeric',
              'Care of plants: Regular watering, weeding, and tree plantation (বনমহোৎসব)'
            ],
            practicalOrActivity: 'Herbarium leaf pressing album and medicinal plant garden study'
          },
          {
            title: 'Animal Habitats, Feeding Habits & Nests (প্রাণী জগৎ, খাদ্য ও বাসা)',
            description: 'WBBPE & CBSE Animals: Plant-eaters (Herbivores), Flesh-eaters (Carnivores), Both (Omnivores); Animal homes and unique bird nests (Weaver bird, Tailor bird); Aquatic animals and amphibians.',
            subtopics: [
              'Herbivores (Cow, Deer, Elephant), Carnivores (Tiger, Lion), Omnivores (Bear, Crow, Human)',
              'How animals eat: Chewing the cud, tearing flesh, gnawing, and swallowing whole',
              'Bird nests, feathers, and beaks adapted for food',
              'Land animals, water animals (Fish, Dolphin), and amphibians (Frog, Salamander)',
              'Insects: Honeybees and beehives, Ants and anthills, Life cycle basics'
            ],
            practicalOrActivity: 'Bird nest architecture model and animal footprint matching chart'
          },
          {
            title: 'Air, Water Cycle, Neighborhood & Environment (বাতাস, জলচক্র ও পরিবেশ)',
            description: 'WBBPE & CBSE Air, Water, Neighborhood: Properties of air, moving air (wind), clean air vs smoke; Sources of water, Water Cycle (Evaporation, Condensation, Rain); Community helpers; Waste management.',
            subtopics: [
              'Air is everywhere: Occupies space, has weight, and is needed for breathing and burning',
              'Water states: Solid (Ice), Liquid (Water), Gas (Water Vapor); Evaporation and Rain',
              'Keeping our surroundings clean: Biodegradable (wet) vs Non-biodegradable (dry) waste',
              'Neighborhood services: Hospital, Police Station, Fire Station, Post Office, Bank',
              'Environmental protection: Saying NO to single-use plastics and saving electricity'
            ],
            practicalOrActivity: 'Evaporation and condensation glass jar water cycle demonstration'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমাদের পরিবেশ (Class 2)',
          'NCERT / CBSE: Looking Around / Environmental Studies Book 2',
          'Biley Young Scientist Field & Discovery Guide 2'
        ],
        examPattern: 'Hands-on Science Experiments, Observation Sheets, Diagram Labeling & Environmental Awareness Quizzes',
        practicalAvailable: true
      },
      {
        id: 'c2-eng',
        name: 'English (ইংরেজি)',
        code: 'ENG-PRM-2',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Class 2 English Language & Literature aligning WBBPE (Butterfly / Wings 2) and CBSE (Mridang / Marigold Book 2 / NCERT): Consonant Blends & Digraphs, Parts of Speech (Common & Proper Nouns, Pronouns, Adjectives, Verbs, Prepositions), Tenses (Present Continuous -ing), Punctuation, Reading Comprehension & Creative Paragraph Writing.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Master consonant blends (bl, cl, fl, gr, tr) and digraphs (sh, ch, th, wh) for fluent reading',
          'Classify Common vs Proper Nouns and apply singular/plural rules (-s, -es, -ies)',
          'Use Pronouns (He, She, It, They, We) and descriptive Adjectives (color, size, texture, quantity) accurately',
          'Form Present Continuous tense sentences with -ing verbs (playing, reading, writing)',
          'Apply prepositions of place (in, on, under, behind, near, between) correctly',
          'Read unseen short passages with 85%+ comprehension and write 4-5 descriptive sentences on familiar topics'
        ],
        keyChapters: [
          {
            title: 'Phonics, Blends, Digraphs & Word Mastery (ধ্বনি, যুক্তবর্ণ ও শব্দ সম্ভার)',
            description: 'WBBPE Butterfly 2 & CBSE Mridang 2: Consonant clusters and blends (bl, br, cl, cr, fl, fr, gr, pl, tr, st), digraphs (ch, sh, th, wh), long vowel sounds with silent \'e\' (cake, kite, bone), and compound words.',
            subtopics: [
              'Consonant blends at beginning and end of words (black, frog, nest, help)',
              'Digraph sounds: /sh/ as in ship, /ch/ as in chair, /th/ as in thumb, /wh/ as in wheel',
              'Magic \'e\' rule and long vowel patterns (hat-hate, pin-pine, tub-tube)',
              'Compound words: Sun + flower = Sunflower, Rain + bow = Rainbow',
              'Opposites (Hot/Cold, Tall/Short) and Synonyms (Happy/Glad, Big/Large)'
            ],
            practicalOrActivity: 'Compound word puzzle match and phonics blend wheel spin game'
          },
          {
            title: 'Grammar: Nouns, Pronouns & Adjectives (বিশেষ্য, সর্বনাম ও বিশেষণ)',
            description: 'WBBPE & CBSE Grammar Foundations: Common nouns vs Proper nouns (capitalization); Singular & Plural (-s, -es); Gender (Boy/Girl, King/Queen); Pronouns; Describing words (Adjectives).',
            subtopics: [
              'Proper nouns: Special names of persons, cities, rivers, and days (always capital)',
              'Plurals: Adding -s (Book-Books), -es (Box-Boxes, Bus-Buses, Mango-Mangoes)',
              'Gender pairs: Male (Masculine) and Female (Feminine) words',
              'Pronouns: Replacing nouns with I, He, She, It, We, They, You',
              'Adjectives: Describing size, color, shape, and feelings (A red rose, A huge elephant)'
            ],
            practicalOrActivity: 'Adjective description game ("Guess Who / Guess What") with mystery box'
          },
          {
            title: 'Verbs, Tenses, Prepositions & Punctuation (ক্রিয়া, কাল ও যতিচিহ্ন)',
            description: 'WBBPE & CBSE Sentence Grammar: Action verbs, Helping verbs (is/am/are/was/were), Present Continuous tense (-ing), Prepositions (in, on, under, behind, near), Capital letters, Question marks (?).',
            subtopics: [
              'Action verbs in daily life; Present Continuous tense: Verb + ing (jumping, cooking)',
              'Subject-Verb agreement with singular and plural subjects',
              'Prepositions of place: In, On, Under, Behind, Next to, In front of',
              'Conjunctions: Joining sentences using "and" and "but"',
              'Punctuation: Capital letter at start, Full Stop (.) for statements, Question Mark (?) for questions'
            ],
            practicalOrActivity: 'Preposition toy placement game on miniature model house'
          },
          {
            title: 'Reading Comprehension & Creative Composition (অনুচ্ছেদ পাঠ ও রচনা)',
            description: 'WBBPE & CBSE Literature & Writing: Short prose passages, moral fables, poetry recitation with expressions, sequencing jumbled sentences, and writing 4-5 sentences about my school/pet/family.',
            subtopics: [
              'Unseen passage reading with direct factual and vocabulary questions',
              'Poem recitation emphasizing rhythm, rhyme, and emotional tone',
              'Picture composition: Looking at a park/festival picture and writing 4 descriptive sentences',
              'Guided writing on topics: "My Best Friend", "My Pet Animal", "My Classroom"',
              'Spoken English dialogue: Asking for help, introducing oneself, polite requests'
            ],
            practicalOrActivity: 'Classroom Story Circle and creative picture book authoring activity'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: Butterfly & Wings Book 2',
          'NCERT / CBSE: Mridang / Marigold English Book 2',
          'Biley Junior Grammar & Composition Companion 2'
        ],
        examPattern: 'Grammar Worksheets, Unseen Reading Comprehension, Spelling & Dictation, Creative Paragraph Assessments',
        practicalAvailable: true
      }

    ]
  },

  // ==========================================
  // CLASS 3 (Primary Foundation - WBBPE & CBSE)
  // ==========================================
  {
    gradeNumber: 3,
    gradeLabel: 'Class 3 (WBBPE & CBSE)',
    category: 'primary',
    ageGroup: '8 - 9 Years',
    academicFocus: 'Multi-Digit Arithmetic, Scientific Inquiry & Language Mastery: Math (আমার গণিত & Math-Magic 3), Science / EVS (আমাদের পরিবেশ & Looking Around 3), and English (Butterfly / Wings & Marigold 3)',
    weeklySchedulePreview: { days: 'Mon to Thu', timings: '4:00 PM - 6:15 PM', mode: 'Offline Classroom + Hybrid Science/Math Lab' },
    subjects: [
      {
        id: 'c3-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-PRM-3',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 3 Comprehensive Mathematics aligning WBBPE (আমার গণিত) and CBSE (Math-Magic / NCERT): 4-Digit Numbers up to 9,999 & Place Value (হাজার, শতক, দশক, একক), 4 Operations (Addition, Subtraction, Multiplication & Long Division), Introduction to Fractions (সামান্য ভগ্নাংশ), Metric Conversions (m/cm/km, g/kg, L/mL), Time & Calendar, Geometry & Perimeter, and Data Handling with Pictographs.',
        weeklyHours: 6,
        totalModules: 13,
        learningOutcomes: [
          'Master 4-digit numbers up to 9,999 with place value, face value, expanded form, rounding off to nearest 10/100, and Roman Numerals (I to XII)',
          'Perform multi-digit addition and subtraction with multiple regroupings, and solve complex daily-life word problems',
          'Execute multi-digit multiplication (up to 3-digit by 2-digit) and long division with quotient and remainder verification',
          'Understand Fractions as equal parts of a whole (Half 1/2, One-Third 1/3, One-Fourth 1/4), numerator, denominator, and like fraction addition',
          'Convert metric units of length, mass, and capacity and calculate compound arithmetic operations',
          'Read analog clocks to the exact minute, compute elapsed time (AM/PM), calculate calendar dates, and compute perimeter of rectilinear shapes'
        ],
        keyChapters: [
          {
            title: '4-Digit Numbers, Place Value & Roman Numerals (৪ অঙ্কের সংখ্যা ও রোমান সংখ্যা)',
            description: 'WBBPE আমার গণিত & CBSE Where to Look From / Fun with Numbers: 4-digit numbers (1,000 to 9,999), Place value up to Thousands (হাজার), Face value, Comparing numbers, Rounding off to nearest 10 and 100, Roman Numerals from I to XII.',
            subtopics: [
              'Understanding 1000 as ten 100s; Reading and writing 4-digit numbers',
              'Place value chart: Thousands (Th), Hundreds (H), Tens (T), Ones (O)',
              'Expanded form, predecessor (-1) and successor (+1), ascending and descending order',
              'Forming greatest and smallest numbers using given digits',
              'Roman Numerals (I, V, X) rules and conversion up to 39 (XXXIX)'
            ],
            practicalOrActivity: 'Place value spike abacus model and Roman numeral matchstick puzzle'
          },
          {
            title: 'Four Operations: Add, Subtract, Multiply & Long Division (যোগ, বিয়োগ, গুণ ও ভাগ)',
            description: 'WBBPE & CBSE Give and Take / How Many Times? / Can We Share?: Multi-digit addition and subtraction; Multiplication of 2-digit & 3-digit numbers by 1-digit & 2-digit numbers; Division algorithm with quotient and remainder.',
            subtopics: [
              'Addition and subtraction of 3-digit and 4-digit numbers with carry-over and borrowing',
              'Multiplication properties, grid method, and standard column algorithm',
              'Concept of division as equal sharing, equal grouping, and repeated subtraction',
              'Long division algorithm: Dividend = Divisor × Quotient + Remainder',
              'Division with remainder and checking the answer',
              'Multi-step word problems involving all four operations'
            ],
            practicalOrActivity: 'Division sharing board with counters and speed multiplication tables relay'
          },
          {
            title: 'Introduction to Fractions (ভগ্নাংশের প্রাথমিক ধারণা)',
            description: 'WBBPE & CBSE Parts and Wholes: Concept of Fraction as part of a whole and part of a collection; Half (1/2), One-third (1/3), One-fourth/Quarter (1/4), Three-fourths (3/4); Numerator (লব) and Denominator (হর); Adding like fractions.',
            subtopics: [
              'Fraction as equal division of shapes (Circle, Square, Strip)',
              'Numerator (Lop / উপরের সংখ্যা) and Denominator (Hor / নিচের সংখ্যা)',
              'Shading fractions on visual figures and number line representation',
              'Comparing like fractions (e.g. 1/4 < 3/4)',
              'Addition and subtraction of fractions with same denominators (e.g. 2/5 + 1/5 = 3/5)'
            ],
            practicalOrActivity: 'Fraction pizza disc cutting and fraction folding paper strips'
          },
          {
            title: 'Measurement, Geometry, Perimeter & Data (পরিমাপ, জ্যামিতি, পরিসীমা ও তথ্য)',
            description: 'WBBPE & CBSE Shapes and Designs / Jugs and Mugs / Smart Charts: Points, line segments, rays; Metric units conversion (km, m, cm, kg, g, L, mL); Perimeter of squares and rectangles; 12-hour clock (AM/PM); Pictographs & Tally marks.',
            subtopics: [
              'Geometry: Point, Line segment, Ray, Plane figures (Triangle, Square, Rectangle, Circle)',
              'Concept of Perimeter: Sum of lengths of all outer boundary sides',
              'Metric units: 1 km = 1000 m, 1 m = 100 cm, 1 kg = 1000 g, 1 L = 1000 mL',
              'Time: Reading clocks to exact minutes, AM vs PM, and calculating duration',
              'Data Handling: Organizing data using Tally Marks and interpreting Pictographs'
            ],
            practicalOrActivity: 'Measuring perimeter of desks with measuring tape and constructing a class birthday pictograph'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমার গণিত (Class 3)',
          'NCERT / CBSE: Math-Magic Book 3',
          'Biley Comprehensive Primary Mathematics Series 3'
        ],
        examPattern: 'Term Summative Evaluations, Speed Mental Arithmetic Tests, Chapter Worksheets & Geometry Construction Drills',
        practicalAvailable: true
      },
      {
        id: 'c3-sci',
        name: 'Science & EVS (বিজ্ঞান ও আমাদের পরিবেশ)',
        code: 'SCI-PRM-3',
        iconName: 'Leaf',
        color: 'amber',
        description: 'Class 3 Environmental Studies and Primary Science aligning WBBPE (আমাদের পরিবেশ) and CBSE (Looking Around / Environmental Studies / NCERT): Human Organ Systems (Digestive & Respiratory), Food Nutrients, Plant Structure & Life Cycles, Animal Adaptations & Birds, States of Matter, Soil & Rocks, Water Filtration, and Solar System.',
        weeklyHours: 5,
        totalModules: 11,
        learningOutcomes: [
          'Explain the human Digestive and Respiratory systems and the role of nutrients (Carbohydrates, Proteins, Fats, Vitamins, Minerals)',
          'Describe the structure of a plant: Taproot vs Fibrous root, Shoot system, Photosynthesis process, Stomata, and Seed germination',
          'Classify animals based on habitats, examine bird beaks/claws adaptations, and understand simple food chains',
          'Identify the Three States of Matter (Solid, Liquid, Gas) and explain processes of Evaporation, Condensation, and Freezing',
          'Examine types of Soil (Clayey, Sandy, Loamy) and understand soil erosion and conservation',
          'Understand Earth\'s Rotation (causing Day & Night), Revolution (causing Seasons), Moon phases, and the 8 Planets of the Solar System'
        ],
        keyChapters: [
          {
            title: 'Human Body Systems & Nutrition (মানবদেহের অঙ্গতন্ত্র ও পুষ্টিবিজ্ঞান)',
            description: 'WBBPE আমাদের পরিবেশ & CBSE Food We Eat: Digestive system (Mouth, Food pipe, Stomach, Small intestine, Large intestine); Respiratory system (Nose, Windpipe, Lungs); Five food nutrients; Balanced diet; Water and roughage.',
            subtopics: [
              'Digestive system organs and the journey of food inside our body',
              'Breathing mechanism: Inhalation of oxygen and exhalation of carbon dioxide',
              'Five essential nutrients: Carbohydrates (energy), Proteins (growth), Fats, Vitamins & Minerals (immunity)',
              'Importance of dietary fiber (roughage) and safe drinking water',
              'Diseases caused by deficiency of vitamins (Night blindness, Scurvy, Rickets intro)'
            ],
            practicalOrActivity: 'Iodine starch food test experiment and 3D human torso model exploration'
          },
          {
            title: 'Plant Anatomy, Photosynthesis & Life Cycle (উদ্ভিদের অঙ্গসংস্থান ও জীবনচক্র)',
            description: 'WBBPE & CBSE Plant Fairy / Roots: Root system (Tap root vs Fibrous root); Shoot system (Stem, Branches, Leaves, Flowers, Fruits); Photosynthesis in green leaves; How seeds travel (Seed dispersal).',
            subtopics: [
              'Root types: Taproot (Carrot, Mustard) and Fibrous root (Grass, Wheat, Rice)',
              'Structure of a leaf: Leaf blade, veins, petiole, stomata, and chlorophyll',
              'Photosynthesis equation in simple terms: Carbon dioxide + Water + Sunlight -> Glucose + Oxygen',
              'Parts of a flower (Petals, Sepals, Stamens) and pollination by bees and butterflies',
              'Seed germination conditions and agents of seed dispersal (Wind, Water, Animals)'
            ],
            practicalOrActivity: 'Microscope slide observation of leaf stomata and onion peel cells'
          },
          {
            title: 'Animal Adaptations, Birds & Food Chains (প্রাণীদের অভিযোজন ও খাদ্যশৃঙ্খল)',
            description: 'WBBPE & CBSE Flying High / Animals: Bird anatomy, types of beaks (tearing, crushing, probing) and claws (perching, swimming, climbing); Insect life cycle; Herbivores, carnivores; Simple Food Chain.',
            subtopics: [
              'Bird adaptations: Hollow bones, streamlined body, flight muscles, types of feathers',
              'Different beaks and their functions: Eagle (hooked), Woodpecker (chisel), Duck (broad flat)',
              'Feet and claws of birds: Perching (Sparrow), Swimming (Duck), Preying (Hawk)',
              'Life cycle of a Butterfly (Egg -> Caterpillar -> Pupa -> Butterfly) and Frog (Metamorphosis)',
              'Food Chain in nature: Sun -> Grass -> Grasshopper -> Frog -> Snake -> Eagle'
            ],
            practicalOrActivity: 'Bird beak simulation activity with tweezers/spoons and food chain mobile craft'
          },
          {
            title: 'Matter, Water Purification, Soil & Solar System (পদার্থ, মাটি ও মহাবিশ্ব)',
            description: 'WBBPE & CBSE Water O\' Water / Sharing Our Feelings / Sky: Solids, Liquids, Gases; Water purification methods (Sedimentation, Decantation, Filtration, Boiling); Soil composition (Sandy, Loamy, Clayey); Solar System & Moon phases.',
            subtopics: [
              'States of matter: Solids (fixed shape & volume), Liquids (takes shape of container), Gases (spreads everywhere)',
              'Water purification: Sedimentation, Decantation, Filtration using filter paper, Boiling',
              'Soil layers and soil types (Loamy soil best for farming); Composting organic manure',
              'The Solar System: Sun at the center and 8 orbiting planets (Mercury to Neptune)',
              'Movement of Earth: Rotation (24 hours = 1 day) and Revolution (365 1/4 days = 1 year); Moon phases'
            ],
            practicalOrActivity: 'Multi-layer sand/gravel water filtration model and globe flashlight rotation demo'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমাদের পরিবেশ (Class 3)',
          'NCERT / CBSE: Looking Around Book 3',
          'Biley Explorers in Science Field Lab Guide 3'
        ],
        examPattern: 'Summative Written Evaluations, Hands-on Lab Practicals, Diagrammatic Representation & Science Olympiad Foundation Tests',
        practicalAvailable: true
      },
      {
        id: 'c3-eng',
        name: 'English (ইংরেজি)',
        code: 'ENG-PRM-3',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Class 3 English Language & Literature aligning WBBPE (Butterfly / Wings 3) and CBSE (Marigold Book 3 / NCERT): Parts of Speech (Collective & Abstract Nouns, Pronouns, Degrees of Comparison in Adjectives, Adverbs, Prepositions, Conjunctions), Tenses (Simple Present, Past, Future), Subject-Verb Agreement, Unseen Reading Comprehension, Paragraph Writing & Informal Letter Writing.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Identify and apply Collective Nouns (flock, herd, swarm) and understand Abstract Nouns',
          'Master degrees of comparison for Adjectives (Positive, Comparative, Superlative: tall, taller, tallest)',
          'Conjugate verbs across Simple Present, Simple Past (Regular & Irregular), and Simple Future tenses with accurate Subject-Verb Agreement',
          'Apply Adverbs of manner (slowly, bravely, neatly), Prepositions of time and place, and Conjunctions (and, but, because, so)',
          'Demonstrate comprehensive reading skills on unseen fiction and non-fiction passages with inferential thinking',
          'Compose 100-word cohesive descriptive paragraphs and format standard Informal Letters to friends and family'
        ],
        keyChapters: [
          {
            title: 'Nouns, Gender, Number & Pronouns (বিশেষ্য ও সর্বনামের প্রকারভেদ)',
            description: 'WBBPE Butterfly 3 & CBSE Marigold 3 Unit 1-3: Common, Proper, Collective, and Abstract Nouns; Singular/Plural irregulars; Gender (Masculine, Feminine, Common, Neuter); Personal & Possessive Pronouns.',
            subtopics: [
              'Types of Nouns: Proper, Common, and Collective (a pride of lions, a bouquet of flowers)',
              'Irregular plurals: Child-Children, Man-Men, Tooth-Teeth, Mouse-Mice, Foot-Feet',
              'Gender classification: Masculine, Feminine, Common (student, doctor), Neuter (table, pen)',
              'Pronouns: Subject pronouns (I, he, she, we, they) and Object pronouns (me, him, her, us, them)',
              'Possessive pronouns: Mine, his, hers, ours, theirs, yours'
            ],
            practicalOrActivity: 'Collective noun pictorial matching game and grammar sorting cards'
          },
          {
            title: 'Adjectives, Degrees of Comparison & Adverbs (বিশেষণ ও ক্রিয়ার বিশেষণ)',
            description: 'WBBPE & CBSE Grammar: Adjectives of Quality, Quantity, and Number; Three Degrees of Comparison; Adverbs of Manner, Time, and Place (-ly words).',
            subtopics: [
              'Adjective types: Qualitative (brave, beautiful), Quantitative (some, much), Numeral (three, second)',
              'Degrees of Comparison: Positive (fast), Comparative (faster), Superlative (fastest)',
              'Irregular comparison: Good - Better - Best, Bad - Worse - Worst, Little - Less - Least',
              'Adverbs of Manner: How actions are done (softly, gracefully, quickly)',
              'Adverbs of Time (today, soon, yesterday) and Adverbs of Place (here, there, everywhere)'
            ],
            practicalOrActivity: 'Comparative adjective classroom measurement chart and adverb action roleplay'
          },
          {
            title: 'Tenses, Subject-Verb Agreement & Conjunctions (ক্রিয়ার কাল ও বাক্য গঠন)',
            description: 'WBBPE & CBSE Tense Mastery: Simple Present (habits, universal truths), Simple Past (regular and irregular verbs), Simple Future (will/shall); Subject-Verb agreement; Conjunctions (and, but, or, because, so).',
            subtopics: [
              'Simple Present Tense and adding -s/-es with singular subjects (He walks, They walk)',
              'Simple Past Tense: Regular verbs (+ed) and Irregular verbs (go-went, write-wrote, see-saw, eat-ate)',
              'Simple Future Tense: Using will / shall + base verb (We will celebrate tomorrow)',
              'Subject-Verb Agreement rules: Singular subject takes singular verb, plural takes plural verb',
              'Joining words (Conjunctions): and (addition), but (contrast), because (reason), so (result)'
            ],
            practicalOrActivity: 'Irregular verb past-tense wheel and sentence connector bridge puzzle'
          },
          {
            title: 'Reading Comprehension, Paragraphs & Letter Writing (পাঠ ও লিখিত রচনা)',
            description: 'WBBPE & CBSE Literature, Prose & Composition: Unseen comprehension passages with vocabulary and inference questions; Descriptive paragraphs (100 words); Informal letter structure.',
            subtopics: [
              'Unseen story comprehension: Identifying main characters, plot, setting, and moral',
              'Synonyms, Antonyms, Homophones (sun/son, write/right, sea/see), and Prefixes (un-, dis-)',
              'Paragraph writing with Topic sentence, Supporting details, and Conclusion (e.g. "My Ideal Holiday")',
              'Informal Letter Writing: Sender\'s address, Date, Salutation, Body, and Subscription to friends/parents',
              'Picture composition with 6-8 connected sentences and creative story titles'
            ],
            practicalOrActivity: 'Classroom post-box activity writing real letters to peers and creative storytelling'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: Butterfly & Wings Book 3',
          'NCERT / CBSE: Marigold English Book 3',
          'Biley Junior Grammar & Composition Companion 3'
        ],
        examPattern: 'Written Grammar Exams, Unseen Comprehension Assessments, Vocabulary & Spelling Bees, and Paragraph/Letter Writing Submissions',
        practicalAvailable: true
      }

    ]
  },

  // ==========================================
  // CLASS 4 (Primary Foundation - WBBPE & CBSE)
  // ==========================================
  {
    gradeNumber: 4,
    gradeLabel: 'Class 4 (WBBPE & CBSE)',
    category: 'primary',
    ageGroup: '9 - 10 Years',
    academicFocus: 'Advanced Primary Foundation: Math (আমার গণিত & Math-Magic 4), Science / EVS (আমাদের পরিবেশ & Looking Around 4), and English (Butterfly / Wings & Marigold 4)',
    weeklySchedulePreview: { days: 'Mon to Fri', timings: '4:00 PM - 6:30 PM', mode: 'Offline Classroom + Hybrid Science/Coding Lab' },
    subjects: [
      {
        id: 'c4-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-PRM-4',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 4 Advanced Mathematics aligning WBBPE (আমার গণিত) and CBSE (Math-Magic / NCERT): 5 & 6 Digit Numbers up to Lakhs, Factors & Multiples (Prime/Composite, Factor Tree, HCF & LCM intro), Common & Decimal Fractions, Metric System & Unitary Method (ঐকিক নিয়ম), Angles & Protractor, Perimeter & Area of Rectangles/Squares, 24-Hour Railway Clock, and Data Handling (Bar Graphs & Pie Charts).',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: [
          'Read, write, expand, and compare 5-digit and 6-digit numbers up to Lakhs in Indian and International place value systems',
          'Find Factors and Multiples, construct Factor Trees, identify Prime and Composite numbers, and compute HCF (গ.সা.গু.) and LCM (ল.সা.গু.) basics',
          'Master Equivalent, Proper, Improper, and Mixed Fractions, and perform addition and subtraction of like and unlike fractions',
          'Convert Common Fractions to Decimals (Tenths, Hundredths) and perform decimal addition and subtraction in financial problems',
          'Solve real-world consumer arithmetic using the Unitary Method (ঐকিক নিয়ম) and Metric System calculations',
          'Measure and classify Angles using a Protractor (চাঁদা), calculate Perimeter and Area of Rectangles and Squares, read 24-Hour railway time, and interpret Bar Graphs'
        ],
        keyChapters: [
          {
            title: 'Large Numbers, Place Value up to Lakhs & BODMAS (বড় সংখ্যা ও চার প্রক্রিয়া)',
            description: 'WBBPE আমার গণিত & CBSE Building with Bricks / Long and Short: 5-digit and 6-digit numbers (up to 9,99,999), Lakhs (লক্ষ), Indian and International place value charts, Multi-digit multiplication, Long division verification, and BODMAS simplification basics.',
            subtopics: [
              'Indian place value system: Ones, Thousands, Lakhs periods',
              'Comparing large numbers, expanded notation, predecessor and successor',
              'Multiplication of 3-digit and 4-digit numbers by 2-digit and 3-digit numbers',
              'Long division algorithm with 2-digit divisors and verification theorem',
              'Basic BODMAS simplification rules (Brackets, Of, Division, Multiplication, Addition, Subtraction)',
              'Rounding off numbers to nearest 100, 1000, and 10000'
            ],
            practicalOrActivity: 'Multi-digit place value abacus arithmetic race and mental math estimation league'
          },
          {
            title: 'Factors, Multiples, HCF & LCM (গুণনীয়ক, গুণিতক, গ.সা.গু. ও ল.সা.গু.)',
            description: 'WBBPE & CBSE Multiples and Factors: Concept of factors and multiples, Prime numbers (মৌলিক সংখ্যা) and Composite numbers (যৌগিক সংখ্যা), Divisibility rules (2, 3, 5, 9, 10), Factor Tree method, Highest Common Factor (HCF) and Lowest Common Multiple (LCM).',
            subtopics: [
              'Finding all factors and first 10 multiples of given numbers',
              'Prime vs Composite numbers from 1 to 100; Sieve of Eratosthenes',
              'Divisibility test rules for 2, 3, 5, 6, 9, and 10',
              'Prime Factorization using the Factor Tree and Division methods',
              'Calculation of HCF (গ.সা.গু.) and LCM (ল.সা.গু.) for pairs of numbers',
              'Word problems on finding common bells ringing intervals or equal packaging'
            ],
            practicalOrActivity: 'Sieve of Eratosthenes prime number matrix discovery and factor tile building'
          },
          {
            title: 'Fractions & Introduction to Decimals (ভগ্নাংশ ও দশমিক সংখ্যা)',
            description: 'WBBPE & CBSE Halves and Quarters / Decimal Numbers: Types of fractions (Proper, Improper, Mixed, Equivalent fractions), simplifying fractions to lowest terms, addition and subtraction of like and unlike fractions, Decimal fractions (Tenths 0.1, Hundredths 0.01), Money calculations in Rupees and Paise.',
            subtopics: [
              'Types of fractions: Proper (3/5), Improper (7/4), Mixed (1 3/4), Equivalent (2/4 = 1/2)',
              'Converting Improper fractions to Mixed numbers and vice-versa',
              'Addition and subtraction of fractions with unlike denominators',
              'Decimal place value: Tenths (1/10 = 0.1) and Hundredths (1/100 = 0.01)',
              'Conversion between Fractions and Decimals; Adding and subtracting decimals in Rupees/Paise'
            ],
            practicalOrActivity: 'Fraction equivalence circle wheels and grocery receipt decimal billing calculation'
          },
          {
            title: 'Measurement, Unitary Method, Geometry & Data (পরিমাপ, ঐকিক নিয়ম, জ্যামিতি ও পরিসীমা-ক্ষেত্রফল)',
            description: 'WBBPE & CBSE Tables and Shares / How Heavy? How Light? / Carts and Wheels: Metric system ladder conversions (Kilo to Milli); Unitary Method (ঐকিক নিয়ম); Angles & Protractor measurement (Acute, Right, Obtuse, Straight); Perimeter and Area of rectangles & squares; 24-hour railway clock; Bar Graphs.',
            subtopics: [
              'Metric system conversions: km, m, cm, mm; kg, g, mg; kL, L, mL; Word problems',
              'Unitary method (ঐকিক নিয়ম): Finding cost of 1 item to determine cost of multiple items',
              'Angles: Parts of an angle (Vertex, Arms), Measuring with a Protractor (চাঁদা), Acute (<90°), Right (90°), Obtuse (>90°), Straight (180°)',
              'Perimeter of Rectangle = 2 × (Length + Breadth); Perimeter of Square = 4 × Side',
              'Area of Rectangle = Length × Breadth; Area of Square = Side × Side (sq. cm, sq. m)',
              'Time: 12-hour vs 24-hour railway clock, calculating elapsed flight/train journey time',
              'Data Handling: Constructing and reading Bar Graphs and Pie Charts'
            ],
            practicalOrActivity: 'Measuring classroom floor area with grid paper and protractor angle finding scavenger hunt'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমার গণিত (Class 4)',
          'NCERT / CBSE: Math-Magic Book 4',
          'Biley Advanced Primary Mathematics Companion 4'
        ],
        examPattern: 'Summative Examinations, Unit Tests, Olympiad Foundation Mock Tests & Geometry/Arithmetic Practicals',
        practicalAvailable: true
      },
      {
        id: 'c4-sci',
        name: 'Science & EVS (বিজ্ঞান ও আমাদের পরিবেশ)',
        code: 'SCI-PRM-4',
        iconName: 'Leaf',
        color: 'amber',
        description: 'Class 4 Advanced Environmental Studies & Primary Science aligning WBBPE (আমাদের পরিবেশ) and CBSE (Looking Around / Environmental Studies / NCERT): Human Physiology (Circulatory, Respiratory, Excretory & Nervous Systems), Plant Adaptations & Photosynthesis, Animal Reproduction & Food Webs, Matter & Simple Machines, Atmosphere & Water Purification, Environmental Conservation & Forest Ecology (Sundarbans).',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Detail the anatomy and functions of the Human Circulatory (Heart, Blood vessels), Excretory (Kidneys), and Nervous systems',
          'Explain plant adaptations in terrestrial, aquatic, desert (Cactus), and mangrove habitats (Sundarbans breathing roots / Pneumatophores)',
          'Differentiate between egg-laying animals and mammals, explain metamorphosis, and trace complex ecological Food Webs',
          'Understand States of Matter at the molecular level, physical vs chemical changes, and master the 6 Simple Machines (Lever, Pulley, Wheel & Axle, Inclined Plane, Screw, Wedge)',
          'Explain atmospheric layers, greenhouse effect, causes of pollution, and chemical/physical water purification methods (Chlorination, RO)',
          'Apply the 3 R\'s (Reduce, Reuse, Recycle) of environmental conservation and understand wildlife protection in Bengal & India'
        ],
        keyChapters: [
          {
            title: 'Human Organ Systems & Physiology (মানবদেহের অঙ্গতন্ত্র ও শারীরতত্ত্ব)',
            description: 'WBBPE আমাদের পরিবেশ & CBSE Human Body: Circulatory system (Heart, Arteries, Veins, Blood, Pulse rate); Excretory system (Kidneys, Ureters, Urinary Bladder); Nervous system (Brain, Spinal Cord, Nerves, Reflex action).',
            subtopics: [
              'Circulatory system: Heart chambers, pumping of oxygenated/deoxygenated blood, checking pulse',
              'Excretory system: Structure of kidneys, filtration of blood, formation and excretion of urine',
              'Nervous system: Cerebrum, Cerebellum, Medulla, Spinal cord, and voluntary vs involuntary reflex actions',
              'Skeletal framework: 206 bones in adult human body, joints (Ball and Socket, Hinge, Pivot), and ligaments',
              'Preventive health: Safe hygiene, posture, immunization vaccines, and regular physical exercise'
            ],
            practicalOrActivity: 'Stethoscope heart-rate pulse measurement before/after exercise and joint movement demonstration'
          },
          {
            title: 'Plant Adaptations, Photosynthesis & Forest Ecosystems (উদ্ভিদের অভিযোজন ও বনজ বাস্তুতন্ত্র)',
            description: 'WBBPE & CBSE Plant Life & Forests: Adaptations in deserts (Xerophytes - Cactus), aquatic plants (Hydrophytes - Lotus, Hydrilla), and coastal mangroves (Sundarbans Sundari trees, Pneumatophores / শ্বাসমূল ও ঠেসমূল); Detailed photosynthesis; Forest conservation.',
            subtopics: [
              'Adaptations of plants in Plains, Mountains (Conifers - Pine, Fir), Deserts (Cactus), and Water (Lotus, Water Hyacinth)',
              'Mangrove adaptations in Sundarbans: Breathing roots (Pneumatophores), Stilt roots, Viviparous germination',
              'Photosynthesis in depth: Role of Chlorophyll, Sunlight, Stomata, Water transport through Xylem',
              'Insectivorous plants: Pitcher plant, Venus flytrap, and nitrogen deficiency in swampy soils',
              'Importance of forests in maintaining rainfall, preventing soil erosion, and providing oxygen'
            ],
            practicalOrActivity: 'Sundarbans mangrove adaptation specimen study and starch testing in variegated leaves'
          },
          {
            title: 'Animal Reproduction, Food Webs & Wildlife Conservation (প্রাণীর বংশবৃদ্ধি ও বন্যপ্রাণী সংরক্ষণ)',
            description: 'WBBPE & CBSE Animal Reproduction / A Busy Month: Oviparous (egg-laying) vs Viviparous (mammals giving birth); Life cycle of Frog, Butterfly, and Cockroach; Food Web interactions; Endangered animals of India (Royal Bengal Tiger, One-horned Rhino).',
            subtopics: [
              'Oviparous animals (Birds, Reptiles, Insects, Fish) vs Viviparous mammals (Cow, Human, Whale, Bat)',
              'Structure of a bird\'s egg: Shell, Albumin, Yolk, Embryo',
              'Metamorphosis: Complete (Butterfly: Egg-Larva-Pupa-Adult) vs Incomplete (Cockroach nymph)',
              'Interconnected Food Webs: Producers, Primary Consumers, Secondary Consumers, Apex Predators, Decomposers',
              'Wildlife conservation in West Bengal & India: National Parks (Gorumara, Jaldapara, Sundarbans) and Red Data Book'
            ],
            practicalOrActivity: 'Dissecting egg model to observe yolk/albumin and building an interconnected food web yarn board'
          },
          {
            title: 'Matter, Simple Machines, Atmosphere & Eco-Conservation (পদার্থ, সরল যন্ত্র, বায়ুমণ্ডল ও পরিবেশ)',
            description: 'WBBPE & CBSE Force, Work & Energy / Water / Clean Environment: Molecular arrangement in solids, liquids, gases; Physical vs Chemical changes; 6 Simple Machines; Atmospheric composition and layers; Water purification (Boiling, Chlorination, RO); 3 R\'s (Reduce, Reuse, Recycle).',
            subtopics: [
              'Molecular arrangement: Tightly packed in solids, loosely packed in liquids, very far apart in gases',
              'Physical change (reversible, e.g. melting ice) vs Chemical change (irreversible, e.g. burning paper, rusting iron)',
              'Force, Work, and Energy; Gravitational force, Frictional force, and Magnetic force',
              'Six Simple Machines: Lever (Class 1, 2, 3), Pulley, Wheel & Axle, Inclined Plane, Screw, Wedge',
              'Atmosphere: Composition of air (78% Nitrogen, 21% Oxygen, 1% Other gases) and layer overview',
              'Water purification: Boiling, Chlorination, Activated Charcoal filtration, Reverse Osmosis (RO)',
              'Eco-conservation: 3 R\'s (Reduce, Reuse, Recycle), Rainwater harvesting, Solar energy'
            ],
            practicalOrActivity: 'Working lever and pulley experiment set, and DIY solar oven demonstration'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমাদের পরিবেশ (Class 4)',
          'NCERT / CBSE: Looking Around Book 4',
          'Biley Junior Scientists Advanced Lab & Experiment Handbook 4'
        ],
        examPattern: 'Summative Examinations, Hands-on Laboratory Practical Tests, Scientific Diagram Drawings & Olympiad Foundation Papers',
        practicalAvailable: true
      },
      {
        id: 'c4-eng',
        name: 'English (ইংরেজি)',
        code: 'ENG-PRM-4',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Class 4 English Language & Literature aligning WBBPE (Butterfly / Wings 4) and CBSE (Marigold Book 4 / NCERT): Advanced Grammar (5 Types of Nouns, Pronouns, Adjectives, Transitive/Intransitive Verbs, 3 Tense Forms & Continuous/Perfect Intro, Modal Auxiliaries, Prepositional Phrases, Conjunctions), Punctuations, Idioms & Vocabulary, Unseen Reading Comprehension, Formal/Informal Letter Writing & Descriptive Essays.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Master all 5 categories of Nouns (Proper, Common, Collective, Abstract, Material) and irregular gender/number variations',
          'Classify and utilize all types of Pronouns (Personal, Possessive, Demonstrative, Interrogative, Relative) correctly',
          'Conjugate verbs across Simple, Continuous, and Perfect tenses, and use Modal Auxiliaries (can, could, may, might, must, should)',
          'Employ Adverbs (Manner, Time, Place, Frequency), Prepositional phrases, and Subordinating Conjunctions (although, while, since, because)',
          'Analyze unseen prose and poetry with inferential reading comprehension, vocabulary context deduction, and theme identification',
          'Write 150-word structured descriptive essays, story writing from outlines with morals, and compose formal leave letters to school Principals and informal letters'
        ],
        keyChapters: [
          {
            title: 'Nouns, Pronouns & Adjectives in Depth (বিশেষ্য, সর্বনাম ও বিশেষণের পূর্ণাঙ্গ রূপ)',
            description: 'WBBPE Butterfly 4 & CBSE Marigold 4: Five kinds of Nouns (Proper, Common, Collective, Abstract, Material); Countable vs Uncountable nouns; Pronoun types (Personal, Demonstrative, Interrogative); Adjective classifications and Order of Adjectives.',
            subtopics: [
              'Five kinds of Nouns: Proper (Kolkata), Common (city), Collective (fleet, crowd), Abstract (honesty, courage), Material (gold, cotton)',
              'Countable nouns (many, few) vs Uncountable nouns (much, little)',
              'Pronouns: Demonstrative (this, that, these, those), Interrogative (who, which, what), Relative (who, which, that)',
              'Adjectives: Quality, Quantity, Number, Demonstrative, Possessive; Order of adjectives before a noun',
              'Degrees of Comparison revision and irregular comparisons (far - farther - farthest)'
            ],
            practicalOrActivity: 'Abstract noun derivation chart (brave -> bravery, kind -> kindness) and grammar treasure hunt'
          },
          {
            title: 'Verbs, Tenses, Modals & Subject-Verb Agreement (ক্রিয়া, কাল ও মোডাল অক্সিলিয়ারি)',
            description: 'WBBPE & CBSE Verb Mastery: Transitive vs Intransitive verbs; Conjugating verbs in Simple, Continuous (Present/Past/Future), and Present Perfect tense (has/have + V3); Modal Auxiliaries (can, may, must, should, could); Subject-Verb agreement rules.',
            subtopics: [
              'Transitive verbs (requiring an object) vs Intransitive verbs (not requiring an object)',
              'Present Continuous, Past Continuous (was/were + verb-ing), and Future Continuous tenses',
              'Present Perfect Tense: Formation using has / have + Past Participle (V3 form: written, eaten, finished)',
              'Modal Auxiliaries: Expressing ability (can), permission (may), obligation (must), and advice (should)',
              'Subject-Verb Agreement with compound subjects, "neither...nor", "either...or", and collective singulars'
            ],
            practicalOrActivity: 'Tense timeline board game and modal verb roleplay in everyday situations'
          },
          {
            title: 'Adverbs, Prepositions, Conjunctions & Punctuations (অব্যয়, পদান্বয়ী অব্যয় ও যতিচিহ্ন)',
            description: 'WBBPE & CBSE Syntax & Mechanics: Adverbs of Frequency (always, never, seldom); Prepositions of time, place, and direction; Coordinating & Subordinating conjunctions; Punctuations: Apostrophes (\'s), quotation marks in direct speech.',
            subtopics: [
              'Adverbs of Frequency: always, usually, often, sometimes, rarely, never',
              'Prepositions: across, through, along, into, upon, between (two) vs among (more than two)',
              'Subordinating Conjunctions: although, unless, until, while, as, since, because, so that',
              'Punctuation marks: Comma for pauses, Apostrophe for possession (Rohan\'s book) and contractions (don\'t, can\'t)',
              'Direct Speech formatting with Quotation marks / Inverted Commas ("...")'
            ],
            practicalOrActivity: 'Dialogue punctuation transformation worksheet and conjunction sentence connector race'
          },
          {
            title: 'Comprehension, Essays, Story & Letter Writing (বোধপরীক্ষণ, প্রবন্ধ ও পত্র রচনা)',
            description: 'WBBPE & CBSE Literature, Prose & Creative Writing: Unseen passages with vocabulary, antonyms, prefixes/suffixes; 150-word descriptive essays; Story writing from prompt outlines; Formal Leave Application to School Principal and Informal Letters.',
            subtopics: [
              'Unseen Reading Comprehension: Literal questions, inference questions, title suggestions, and context clues',
              'Vocabulary: Prefixes (un-, re-, im-, dis-), Suffixes (-ful, -less, -ly, -ment), Idioms (piece of cake, raining cats and dogs)',
              'Descriptive Essay Writing: Introduction, 2 body paragraphs, conclusion (e.g. "My State: West Bengal", "A Rainy Day")',
              'Story Writing from outlines with meaningful title and moral lesson',
              'Formal Letter: Application for Leave of Absence to the School Principal / Headmaster',
              'Informal Letter: Letter of invitation or holiday experience to a friend'
            ],
            practicalOrActivity: 'Classroom Junior Author Publishing Workshop & English Recitation Showcase'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: Butterfly & Wings Book 4',
          'NCERT / CBSE: Marigold English Book 4',
          'Biley Junior Advanced Grammar & Creative Writing Companion 4'
        ],
        examPattern: 'Summative Examinations, Unseen Reading Comprehension Tests, Grammar Mechanics Drills, and Formal/Informal Letter Writing Portfolios',
        practicalAvailable: true
      }

    ]
  }
];
