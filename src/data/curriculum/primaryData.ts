import { ClassGradeInfo } from '../../types';

export const PRIMARY_GRADES_DATA: ClassGradeInfo[] = [
  // ==========================================
  // CLASS 1 (Primary Foundation - WBBPE & CBSE)
  // ==========================================
  {
    gradeNumber: 1,
    gradeLabel: 'Class 1 (WBBPE & CBSE)',
    category: 'primary',
    ageGroup: '6 - 7 Years',
    academicFocus: 'Foundational Literacy, Numeracy & Computational Play: Math (আমার গণিত & Math-Magic), Science / EVS (আমাদের পরিবেশ & Looking Around), English (Butterfly / Wings & Mridang/Marigold), and Computer ICT & Digital Drawing (Tux Paint & MS Paint)',
    weeklySchedulePreview: { days: 'Mon, Wed, Fri', timings: '3:30 PM - 5:30 PM', mode: 'Offline Classroom + Activity Lab' },
    subjects: [
      {
        id: 'c1-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-PRM-1',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Class 1 Foundational Mathematics aligning WBBPE (আমার গণিত) and CBSE (Math-Magic / Joyful Mathematics / NCERT): Numbers 1 to 100 & Place Value (একক ও দশক), Addition & Subtraction up to 20, 2D/3D Shapes & Spatial Relationships, Patterns, Non-standard Measurement, Days of the Week & Indian Currency Notes and Coins.',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Fluency in counting, reading, writing, and comparing numbers from 1 to 100 with place value understanding (Tens & Ones / দশক ও একক)',
          'Master mental and concrete addition and subtraction up to 20 using number lines and visual picture problems',
          'Identify and describe basic 2D geometric shapes (Circle, Square, Rectangle, Triangle) and recognize spatial orientations (Inside/Outside, Above/Below, Rolling/Sliding)',
          'Create and extend repeating color, shape, and number sequences and patterns',
          'Understand non-standard measurement of length, weight (Heavy/Light), and capacity (More/Less)',
          'Name days of the week, read analog daily schedules, and recognize Indian currency coins and notes (₹1, ₹2, ₹5, ₹10, ₹20, ₹50, ₹100)'
        ],
        keyChapters: [
          {
            title: 'Numbers 1 to 100 & Place Value (সংখ্যা ও স্থানীয় মান: ১ থেকে ১০০)',
            description: 'WBBPE আমার গণিত & CBSE What is Long, What is Round? / Numbers from One to Nine: Forward/backward counting, number names in English & Bengali, before/after/between, comparing numbers (<, >, =), and grouping into bundles of 10s and 1s.',
            subtopics: [
              'Counting and number recognition from 1 to 100',
              'Concept of Tens (দশক) and Ones (একক) with bundles of sticks and beads',
              'Number comparison: Greater than (>), Less than (<), and Equal to (=)',
              'Ascending and descending order of numbers up to 100',
              'Skip counting by 2s, 5s, and 10s on the number strip'
            ],
            practicalOrActivity: 'Abacus bead sliding and colorful seed grouping counting station'
          },
          {
            title: 'Addition & Subtraction up to 20 (যোগ ও বিয়োগ)',
            description: 'WBBPE & CBSE Addition / Subtraction (0-20): Combining objects, taking away, counting on fingers and number lines, zero (০ / শূন্য) as a place-holder and quantity, and daily life story sums.',
            subtopics: [
              'Addition as combining sets and counting forward',
              'Subtraction as taking away and counting backward',
              'Number line jumping for single and double-digit sums (up to 20)',
              'Concept of Zero (০): Adding and subtracting zero',
              'Simple pictorial word problems (e.g. birds on a branch, sharing toys)'
            ],
            practicalOrActivity: 'Number line hopscotch mat and visual snap-cube math games'
          },
          {
            title: 'Shapes, Space & Spatial Relations (আকার ও স্থানিক ধারণা)',
            description: 'WBBPE & CBSE Shapes and Space: Identifying Circles, Squares, Rectangles, and Triangles in everyday objects; Spatial vocabulary (Top/Bottom, Inside/Outside, On/Under, Near/Far, Rolling vs Sliding).',
            subtopics: [
              'Basic 2D shapes: Circle (বৃত্ত), Square (বর্গক্ষেত্র), Rectangle (আয়তক্ষেত্র), Triangle (ত্রিভুজ)',
              'Objects that roll, slide, and both roll and slide',
              'Spatial orientation: Top, Bottom, Above, Below, Near, Far, Inside, Outside',
              'Creating composite pictures using geometric shapes'
            ],
            practicalOrActivity: 'Origami paper shape cutting and building a shape-castle collage'
          },
          {
            title: 'Patterns, Measurement, Time & Money (নকশা, পরিমাপ, সময় ও টাকা-পয়সা)',
            description: 'WBBPE & CBSE Patterns, Measurement, Time & How Many: Repeating sequences; Non-standard length (handspan, footsteps); Heavy vs Light; Days of the week; Identifying coins (₹1, ₹2, ₹5, ₹10) and notes.',
            subtopics: [
              'Repeating visual patterns in colors, shapes, and numbers',
              'Comparison of length (Longer/Shorter, Taller/Shorter) using handspans',
              'Weight comparison: Heavier and Lighter objects balance scale intro',
              'Days of the week (Sunday to Saturday) and daily routine sequence',
              'Indian coins and currency notes identification & simple toy shop billing'
            ],
            practicalOrActivity: 'Classroom pretend grocery shop with play money and balance scale'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমার গণিত (Class 1)',
          'NCERT / CBSE: Math-Magic / Joyful Mathematics Book 1',
          'Biley Primary Mathematics Explorer & Activity Kit 1'
        ],
        examPattern: 'Continuous and Comprehensive Evaluation (CCE), Activity Worksheets, Oral Math Quizzes & Manipulative Problem Solving',
        practicalAvailable: true
      },
      {
        id: 'c1-sci',
        name: 'Science & EVS (বিজ্ঞান ও আমাদের পরিবেশ)',
        code: 'SCI-PRM-1',
        iconName: 'Leaf',
        color: 'amber',
        description: 'Class 1 Environmental Studies and Primary Science aligning WBBPE (আমাদের পরিবেশ / সহজ পাঠ সংযোগ) and CBSE (Looking Around / Environmental Studies / NCERT): Human Body & 5 Senses, Living vs Non-Living, Plant World, Animal Kingdom, Food, Clean Water, Seasons & Sky.',
        weeklyHours: 4,
        totalModules: 8,
        learningOutcomes: [
          'Identify human external body parts and explain the special functions of the Five Sense Organs (Eyes, Ears, Nose, Tongue, Skin)',
          'Distinguish between Living and Non-Living things based on growth, movement, breathing, and need for food',
          'Recognize parts of a plant (Root, Stem, Leaf, Flower, Fruit) and understand basic plant care',
          'Classify domestic, wild, and aquatic animals, their shelter, baby names, and sounds',
          'Adopt healthy habits, hygiene routines, road safety rules, and clean water conservation',
          'Observe day and night sky phenomena (Sun, Moon, Stars) and identify primary Indian seasons (Summer, Monsoon, Winter)'
        ],
        keyChapters: [
          {
            title: 'My Body, Five Senses & Good Habits (আমার শরীর, পঞ্চেন্দ্রিয় ও সু-অভ্যাস)',
            description: 'WBBPE আমাদের পরিবেশ & CBSE About Myself: External body parts, the 5 sense organs (চোখ, কান, নাক, জিভ, ত্বক), personal hygiene (brushing, handwashing), healthy food, and good manners.',
            subtopics: [
              'Body parts and their functions (Hands for holding, Legs for walking)',
              'Five sense organs and sensory perception (Sight, Hearing, Smell, Taste, Touch)',
              'Healthy morning routines, dental hygiene, and proper handwashing steps',
              'Nutritious meals vs junk food, and drinking clean filtered water',
              'Safety rules at home, school, playground, and on the road'
            ],
            practicalOrActivity: 'Blindfold sensory taste and smell identification challenge'
          },
          {
            title: 'Plant Kingdom & Nature Around Us (আমাদের চারপাশের উদ্ভিদজগৎ)',
            description: 'WBBPE & CBSE Plants Around Us: Trees, shrubs, herbs; parts of a plant (শিকড়, কাণ্ড, পাতা, ফুল, ফল); how plants grow from seeds with sunlight, soil, and water; caring for greenery.',
            subtopics: [
              'Big trees (Banyan, Mango) vs Small plants (Rose, Grass)',
              'Parts of a plant and their visual identification',
              'What plants need to live: Sunlight, Air, Water, and Soil',
              'Leaves of different shapes, sizes, and colors; fallen leaf collection',
              'Fruits, vegetables, and flowers we get from plants'
            ],
            practicalOrActivity: 'Seed germination experiment in cotton cups with daily growth recording'
          },
          {
            title: 'Animal Friends, Homes & Sounds (পশুপাখির জগৎ, বাসস্থান ও ডাক)',
            description: 'WBBPE & CBSE Animal World: Domestic vs Wild animals; Birds and Insects; Animal homes (Nest, Den, Shed, Pond); Animal babies and sounds; Kindness to animals.',
            subtopics: [
              'Domestic animals (Cow, Dog, Cat) and their utility to humans',
              'Wild animals of the forest (Tiger, Elephant, Deer, Lion)',
              'Birds: Feathers, wings, beaks, nests, and common backyard birds (Crow, Sparrow)',
              'Aquatic creatures (Fish, Frog, Duck) and common insects (Ant, Butterfly, Honeybee)',
              'Animal homes and animal babies (Cow-Calf, Dog-Puppy, Hen-Chick)'
            ],
            practicalOrActivity: 'Nature walk animal sound imitation & feather observation chart'
          },
          {
            title: 'Sun, Sky, Weather, Seasons & Water (সূর্য, আকাশ, ঋতু ও জল সংরক্ষণ)',
            description: 'WBBPE & CBSE Air, Water, Weather & Sky: Day sky (Sun) and Night sky (Moon, Stars); Indian seasons (গ্রীষ্ম, বর্ষা, শীত); Uses of water and preventing water wastage.',
            subtopics: [
              'The Sun gives us heat and light; Day and Night cycles',
              'The Moon and sparkling stars in the night sky',
              'Weather conditions: Sunny, Rainy, Cloudy, and Windy days',
              'Seasons and appropriate clothing (Cotton in Summer, Raincoat in Monsoon, Woolen in Winter)',
              'Sources of clean water (Rain, River, Well, Tap) and simple ways to save water'
            ],
            practicalOrActivity: 'Daily weather calendar recording with sun/cloud/rain stickers'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: আমাদের পরিবেশ (Class 1)',
          'NCERT / CBSE: Looking Around / Environmental Studies Book 1',
          'Biley Young Scientist Field & Discovery Guide 1'
        ],
        examPattern: 'Observation Journals, Nature Exploration Activities, Oral Science Quiz & Visual Diagram Worksheets',
        practicalAvailable: true
      },
      {
        id: 'c1-eng',
        name: 'English (ইংরেজি)',
        code: 'ENG-PRM-1',
        iconName: 'BookA',
        color: 'emerald',
        description: 'Class 1 English Language & Literature aligning WBBPE (Butterfly / Wings / আমার বই) and CBSE (Mridang / Marigold / NCERT): Alphabet Phonics & Letter Sounds, Sight Words, Naming Words (Nouns), Action Words (Verbs), Articles (A/An), Sentence Construction, Rhymes & Story Comprehension.',
        weeklyHours: 4,
        totalModules: 8,
        learningOutcomes: [
          'Demonstrate clear phonemic awareness, letter-sound correspondence (A to Z), short vowel sounds (a, e, i, o, u), and consonant blends',
          'Read and recognize 250+ sight words and everyday foundational vocabulary',
          'Identify Nouns (naming words for persons, places, animals, things) and action verbs',
          'Apply articles (a/an) correctly with vowel and consonant sounding words',
          'Form simple, grammatically correct 3-to-5 word sentences using "This is / That is" and "is / am / are"',
          'Recite poems with rhythm and expression, and answer simple factual questions from picture stories'
        ],
        keyChapters: [
          {
            title: 'Alphabet Phonics, Sounds & Word Families (বর্ণমালা, ধ্বনি ও শব্দ গঠন)',
            description: 'WBBPE Butterfly / Wings & CBSE Mridang Unit 1-2: Upper and lower case letters (A-Z / a-z), vowel sounds (a, e, i, o, u), CVC 3-letter word families (cat, pin, pot, bed, sun), and rhyming words.',
            subtopics: [
              'Letter identification, stroke order, and correct phonetic sounds',
              'Vowels vs Consonants; Short vowel CVC word blending drills',
              'Rhyming words families (-at, -en, -in, -og, -ug)',
              'Common sight words: the, a, is, in, on, it, he, she, we, they, you, are'
            ],
            practicalOrActivity: 'Phonics flashcard bingo and interactive letter-sound blending mat'
          },
          {
            title: 'Naming Words, Pronouns & Articles (Nouns, Pronouns & A/An)',
            description: 'WBBPE & CBSE Picture Reading & Grammar: Naming words for people, animals, birds, fruits, and classroom objects; Pronouns (He, She, It, I, You); Use of articles "A" and "An".',
            subtopics: [
              'Nouns: Naming words all around us (Boy, Tree, Dog, School, Book)',
              'Singular and plural with -s (Cat - Cats, Ball - Balls)',
              'Introduction to Pronouns: He for boys, She for girls, It for objects/animals',
              'Use of "A" before consonant sounds and "An" before vowel sounds (An apple, A bat)'
            ],
            practicalOrActivity: 'Classroom treasure hunt for naming words and picture label tagging'
          },
          {
            title: 'Action Words, Greetings & Simple Sentences (Verbs & Sentence Making)',
            description: 'WBBPE & CBSE Everyday Communication: Action words (run, jump, eat, sleep, read); Helping verbs (is, am, are); Sentence structure with Capital letters and Full stops; Polite greetings.',
            subtopics: [
              'Action words (Verbs) and matching with pictures',
              'Using "is, am, are": I am, He is, She is, They are',
              'Demonstratives: "This is a..." (near) and "That is a..." (far)',
              'Sentence punctuation: Starting with Capital Letter and ending with Full Stop (.)',
              'Polite expressions: Good morning, Thank you, Please, Excuse me, Sorry'
            ],
            practicalOrActivity: 'Charades action word guessing game & sentence puzzle strips'
          },
          {
            title: 'Rhymes, Picture Comprehension & Storytelling (ছড়া ও গল্প পাঠ)',
            description: 'WBBPE & CBSE Reading & Listening Comprehension: Classical nursery rhymes, moral fables, picture sequencing, describing a scene, and oral confidence building.',
            subtopics: [
              'Poetry recitation with proper rhythm, intonation, and hand gestures',
              'Picture comprehension: Answering "Who", "What", and "Where" questions',
              'Sequencing story pictures in chronological order (Beginning, Middle, End)',
              'Speaking 2-3 sentences about oneself, one\'s family, or favorite toy'
            ],
            practicalOrActivity: 'Puppet theatre story enactment and show-and-tell presentation'
          }
        ],
        referenceMaterials: [
          'WBBPE পশ্চিমবঙ্গ প্রাথমিক শিক্ষা পর্ষদ: Butterfly & Wings Book 1',
          'NCERT / CBSE: Mridang / Marigold English Book 1',
          'Biley Junior Phonics & Spoken English Handbook 1'
        ],
        examPattern: 'Oral Reading Fluency, Phonics Dictation, Picture Worksheets & Story Comprehension Checks',
        practicalAvailable: true
      },
      {
        id: 'c1-comp',
        name: 'Computer & Digital Skills (কম্পিউটার ও ডিজিটাল শিক্ষা)',
        code: 'COMP-PRM-1',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 1 Computer Science and ICT aligning National Curriculum Framework & CBSE ICT Guidelines: Computer Fundamentals & Smart Machines, Input Devices (Mouse & Keyboard), Desktop Basics, Digital Drawing with Tux Paint & MS Paint, Lab Safety & Ethics.',
        weeklyHours: 3,
        totalModules: 6,
        learningOutcomes: [
          'Identify what a machine is and differentiate between manual tools and smart computers',
          'Recognize main hardware components: CPU (Brain of computer), Monitor, Keyboard, Mouse, and Speakers',
          'Master single-click, double-click, right-click, and drag-and-drop actions using a computer mouse',
          'Locate and use Alphabet keys, Number keys, Spacebar, Enter, and Backspace keys on the keyboard',
          'Create colorful digital artwork, geometric drawings, and stamps using Tux Paint and MS Paint',
          'Follow computer lab safety guidelines, sitting posture, and hygiene etiquette'
        ],
        keyChapters: [
          {
            title: 'Meet the Computer: A Smart Machine (কম্পিউটারের পরিচয়)',
            description: 'What is a machine? Natural vs Man-made things; Why computer is called a smart machine; Different types of computers (Desktop, Laptop, Tablet, Smartphone).',
            subtopics: [
              'Natural things (Trees, Animals) vs Man-made machines (Car, Fan, Clock)',
              'What a computer can do: Calculate, Draw, Play music, Store information',
              'Forms of computers: Desktop PC, Laptop, Tablet, and Mobile phone',
              'Places where computers are used: Schools, Homes, Shops, Hospitals'
            ],
            practicalOrActivity: 'Hands-on lab tour identifying computers and peripheral devices'
          },
          {
            title: 'Parts of a Computer & Lab Rules (কম্পিউটারের বিভিন্ন অংশ ও ল্যাব নিয়মাবলী)',
            description: 'The four main parts: CPU Box, Monitor screen, Keyboard, Mouse; Auxiliary parts: Speakers, Printer, UPS; Good computer lab manners and correct posture.',
            subtopics: [
              'Monitor (Visual Display Unit): Seeing pictures, text, and cartoons',
              'CPU (Central Processing Unit): The brain and control center',
              'Keyboard and Mouse: Giving commands and typing',
              'Safe computer lab rules: Keep hands clean, do not pull wires, sit straight'
            ],
            practicalOrActivity: 'Interactive hardware matching game and lab posture drill'
          },
          {
            title: 'Using the Mouse & Keyboard (মাউস ও কীবোর্ড চালনা)',
            description: 'Mouse pointer navigation, Left click (Selection), Double click (Open), Right click (Menu), Drag and drop; Exploring keyboard layout and typing initial words.',
            subtopics: [
              'Holding the mouse properly with index and middle fingers',
              'Mouse buttons: Left button, Right button, and Scroll wheel',
              'Alphabet keys (A to Z) for typing names',
              'Number keys (0 to 9), Spacebar for gaps, and Enter key for new lines',
              'Backspace key to erase mistakes'
            ],
            practicalOrActivity: 'Tux Typing game & balloon pop precision mouse clicking games'
          },
          {
            title: 'Fun with Digital Drawing (Tux Paint & MS Paint) (ডিজিটাল ছবি আঁকা)',
            description: 'Opening Paint software, canvas, pencil tool, brush palette, color palette, shape tool (Circle, Rectangle), eraser tool, magic stamps in Tux Paint, and saving artwork.',
            subtopics: [
              'Starting MS Paint / Tux Paint from Desktop or Start menu',
              'Drawing lines, rectangles, squares, and circles',
              'Using the Color Fill bucket tool to color shapes',
              'Tux Paint magic effects (Rainbow, Sparkles, Grass, Flower stamps)',
              'Saving your drawing with your name and closing the program safely'
            ],
            practicalOrActivity: 'Drawing a colorful Indian National Flag and a Village Scenery in Tux Paint'
          }
        ],
        referenceMaterials: [
          'Biley Little Techies Computer Handbook (Class 1)',
          'Tux Paint & MS Paint Lab Guide for Primary Classes',
          'CBSE / NEP 2020 Foundational ICT & Computational Thinking Module'
        ],
        examPattern: 'Hands-on Computer Lab Practical Tests, Digital Drawing Submissions & Interactive Hardware Identification Quiz',
        practicalAvailable: true
      }
    ]
  },

  // ==========================================
  // CLASS 2 (Primary Foundation - WBBPE & CBSE)
  // ==========================================
  {
    gradeNumber: 2,
    gradeLabel: 'Class 2 (WBBPE & CBSE)',
    category: 'primary',
    ageGroup: '7 - 8 Years',
    academicFocus: 'Conceptual Arithmetic, Environmental Discovery & Creative Digital Skills: Math (আমার গণিত & Math-Magic 2), Science / EVS (আমাদের পরিবেশ & Looking Around 2), English (Butterfly / Wings & Mridang/Marigold 2), and Computer & Digital Lab (WordPad, Typing & MS Paint)',
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
      },
      {
        id: 'c2-comp',
        name: 'Computer & Digital Skills (কম্পিউটার ও ডিজিটাল শিক্ষা)',
        code: 'COMP-PRM-2',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 2 Computer Science & ICT aligning CBSE & NCF 2023 Digital Guidelines: Input/Output Hardware Devices, Storage Devices, Windows OS Desktop & Files, Advanced MS Paint & Tux Paint, Typing in WordPad / Notepad, and Cyber Safety.',
        weeklyHours: 3,
        totalModules: 7,
        learningOutcomes: [
          'Distinguish between Input devices (Keyboard, Mouse, Microphone), Output devices (Monitor, Printer, Speaker), and Storage devices (Hard Disk, Pen Drive, CD)',
          'Operate the Windows desktop: Start menu, Taskbar, Icons, Wallpaper, and safely Shut Down / Restart the PC',
          'Demonstrate proper keyboard posture and use special keys (Caps Lock, Shift, Delete, Backspace, Arrow keys)',
          'Type short paragraphs, poems, and names in WordPad / Notepad with correct spacing and punctuation',
          'Use advanced tools in MS Paint (Curve tool, Polygon, Color Picker, Magnifier, Copy-Paste, Text tool)',
          'Understand digital etiquette, avoid sharing personal passwords, and maintain healthy screen-time limits'
        ],
        keyChapters: [
          {
            title: 'Computer Hardware: Input, Output & Storage Devices (কম্পিউটার হার্ডওয়্যার ও মেমোরি)',
            description: 'Comprehensive hardware components: Input devices (giving instructions), Output devices (displaying results), Processing unit (CPU), and Storage devices (saving work).',
            subtopics: [
              'Input devices: Keyboard, Mouse, Microphone (recording voice), Scanner, Webcam',
              'Processing unit: CPU cabinet and its central role',
              'Output devices: Monitor screen, Printer (hard copy printouts), Speakers & Headphones',
              'Storage devices: Hard Disk, Pen Drive (USB Flash Drive), Memory Card, CD/DVD',
              'Comparing a computer with a human brain: Speed, memory, and accuracy'
            ],
            practicalOrActivity: 'Lab hardware categorization board and connecting a USB pen drive'
          },
          {
            title: 'Working with Windows OS & Desktop (অপারেটিং সিস্টেম ও ডেস্কটপ পরিচিতি)',
            description: 'Starting and shutting down Windows OS, Understanding Desktop, Icons (My Computer, Recycle Bin), Taskbar, Start button, Wallpapers, and opening programs.',
            subtopics: [
              'Step-by-step procedure to Turn ON (Boot) and Safely Shut Down a computer',
              'What is Desktop? Desktop background (Wallpaper) and screen icons',
              'Taskbar: Start button, open application icons, Clock, and Volume slider',
              'Opening, minimizing, maximizing, restoring, and closing application windows',
              'Creating a new folder on the desktop and naming it'
            ],
            practicalOrActivity: 'Changing desktop wallpapers and organizing desktop folders in lab'
          },
          {
            title: 'Typing Mastery in WordPad & Notepad (ওয়ার্ডপ্যাডে টাইপিং ও ফরম্যাটিং)',
            description: 'Introduction to text editors (Notepad / WordPad), Home row finger placement, using Caps Lock for capital letters, Shift key for symbols, and formatting font styles.',
            subtopics: [
              'Opening WordPad and understanding the Cursor (blinking vertical line)',
              'Special keys: Caps Lock (All Capitals), Shift key (Upper symbols like @, #, $)',
              'Delete key vs Backspace key: Erasing characters to the right vs left',
              'Changing font style, font size, and text color in WordPad',
              'Typing a 5-line paragraph about "My School" and saving the document'
            ],
            practicalOrActivity: 'Speed typing game in Tux Typing and formatting a colorful poem in WordPad'
          },
          {
            title: 'Creative Art & Card Making in MS Paint (এমএস পেইন্টে ছবি ও কার্ড তৈরি)',
            description: 'Advanced drawing tools in MS Paint: Curve tool, Polygon tool, Text tool, Color Picker (Eyedropper), Magnifier (Zoom), Select tool, Copy-Paste, and designing greeting cards.',
            subtopics: [
              'Drawing smooth curves using the Curve tool (three-click rule)',
              'Creating multi-sided shapes with Polygon tool',
              'Inserting text labels and wishing messages with Text tool',
              'Selecting, moving, copying, and pasting objects in a drawing',
              'Designing a Happy Birthday or Diwali/Eid greeting card with borders'
            ],
            practicalOrActivity: 'Designing an animated festival greeting card and printing it for parents'
          }
        ],
        referenceMaterials: [
          'Biley Junior Techies Computer Handbook (Class 2)',
          'MS Paint & WordPad Practical Lab Workbook (Class 2)',
          'CBSE & NCF 2023 Digital Literacy & Computational Thinking Module'
        ],
        examPattern: 'Computer Lab Practical Assignments, Typing Speed & Accuracy Tests, and Digital Graphic Design Submissions',
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
    academicFocus: 'Multi-Digit Arithmetic, Scientific Inquiry, Language Mastery & Computational Thinking: Math (আমার গণিত & Math-Magic 3), Science / EVS (আমাদের পরিবেশ & Looking Around 3), English (Butterfly / Wings & Marigold 3), and Computer ICT & Scratch Block Coding',
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
      },
      {
        id: 'c3-comp',
        name: 'Computer & Digital Skills (কম্পিউটার ও ডিজিটাল শিক্ষা)',
        code: 'COMP-PRM-3',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 3 Computer Science & ICT aligning CBSE & NCF 2023 Digital Guidelines: Input-Process-Output (IPO) Cycle, Hardware Architecture (ALU, CU, MU), Operating System & File Management, Word Processing in MS Word / Writer, Algorithmic Thinking & Scratch Block Coding, Safe Web Browsing.',
        weeklyHours: 3,
        totalModules: 8,
        learningOutcomes: [
          'Explain the Input-Process-Output (IPO) Cycle and identify internal CPU components (ALU, CU, Memory Unit)',
          'Create, rename, copy, move, and organize files and sub-folders within the Windows Directory hierarchy',
          'Format documents in MS Word / LibreOffice Writer: Fonts, Paragraph alignments, Bulleted lists, Shapes, and WordArt',
          'Understand step-by-step algorithms and flowcharts for logical problem solving',
          'Create interactive animated stories and simple mini-games using Scratch 3.0 / Code.org block coding (Motion, Looks, Sound, Loops, Events)',
          'Practice digital citizenship, understand safe search engines, and recognize online privacy safeguards'
        ],
        keyChapters: [
          {
            title: 'The Computer System & IPO Cycle (কম্পিউটার সিস্টেম ও আইপিও সাইকেল)',
            description: 'How a computer works on the IPO principle: Input -> Process -> Output; The CPU cabinet breakdown: Arithmetic Logic Unit (ALU), Control Unit (CU), and Memory Unit (MU); Primary vs Secondary memory intro.',
            subtopics: [
              'The IPO (Input - Process - Output) cycle in daily machines (Toaster, Washing machine, Calculator)',
              'Input devices feed raw data, CPU processes instructions, Output devices present useful information',
              'Internal structure of CPU: ALU (calculations), CU (traffic police), MU (storage)',
              'Types of computer memory: RAM (Temporary memory) vs ROM / Hard Disk (Permanent memory)',
              'Distinction between System Software (Windows OS) and Application Software (MS Paint, MS Word)'
            ],
            practicalOrActivity: 'IPO cycle flowchart simulation in lab with real data inputs and outputs'
          },
          {
            title: 'File Management & Windows Customization (ফাইল ম্যানেজমেন্ট ও উইন্ডোজ কাস্টমাইজেশন)',
            description: 'Understanding Files and Folders, Windows File Explorer, Creating directory trees, Renaming, Moving, Copying, Deleting, and Restoring files from Recycle Bin.',
            subtopics: [
              'What is a File? File name, file types (.txt, .docx, .png), and file icons',
              'What is a Folder? Creating sub-folders to organize school subjects systematically',
              'Cut (Ctrl+X), Copy (Ctrl+C), and Paste (Ctrl+V) shortcuts for file transfer',
              'Deleting files (Delete key) and recovering them from Recycle Bin',
              'Customizing Screen Saver, Mouse pointer speed, and Date & Time settings'
            ],
            practicalOrActivity: 'Building a complete academic folder hierarchy for Class 3 subjects on personal PC drive'
          },
          {
            title: 'Word Processing Fundamentals in MS Word (এমএস ওয়ার্ডে ডকুমেন্ট তৈরি ও ফরম্যাটিং)',
            description: 'Introduction to MS Word / Writer: Ribbon interface, Quick Access Toolbar, Typing text, Font styling (Bold, Italic, Underline, Color), Paragraph alignments, Bullets & Numbering, Inserting Shapes & Clip Art.',
            subtopics: [
              'MS Word interface: Title bar, Ribbon tabs, Ruler, Document area, and Status bar',
              'Typing and selecting text using keyboard (Shift+Arrow) and mouse',
              'Font formatting: Font family, Font size, Font color, Text highlight, Bold, Italic, Underline',
              'Paragraph alignment: Align Left (Ctrl+L), Center (Ctrl+E), Align Right (Ctrl+R), Justify (Ctrl+J)',
              'Adding Bulleted and Numbered lists, Page borders, and inserting Clip Art / Stock images'
            ],
            practicalOrActivity: 'Designing a colorful 1-page School Science Project Report with headings and images'
          },
          {
            title: 'Algorithmic Thinking & Block Coding in Scratch 3.0 (অ্যালগরিদম ও স্ক্র্যাচ কোডিং)',
            description: 'What is an Algorithm? Step-by-step instructions; Introduction to Scratch 3.0 visual block programming interface: Sprites, Stage, Motion blocks, Looks blocks, Sound blocks, Repeat Loops, and Events.',
            subtopics: [
              'Algorithmic thinking: Writing sequential steps for daily tasks (e.g. making lemonade, brushing teeth)',
              'Scratch 3.0 interface: Stage (Cat sprite), Sprite pane, Blocks palette, Scripts area',
              'Motion blocks: "Move 10 steps", "Turn 15 degrees", "Go to x:0 y:0"',
              'Looks blocks: "Say Hello for 2 secs", "Change costume", "Change color effect"',
              'Control & Events: "When Green Flag Clicked", "Repeat 10", "Wait 1 seconds"',
              'Adding audio and speech sound effects to sprites'
            ],
            practicalOrActivity: 'Creating an interactive animated Dancing Cat and Talking Dialogue story in Scratch 3.0'
          }
        ],
        referenceMaterials: [
          'Biley Junior Techies Computer Science Handbook (Class 3)',
          'Scratch 3.0 Creative Computing Lab Guide for Primary Classes',
          'CBSE & NEP 2020 Coding & Computational Thinking Foundation Module'
        ],
        examPattern: 'Computer Lab Practical Exams, Word Processing Document Formatting Submissions & Scratch Block Coding Projects',
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
    academicFocus: 'Advanced Primary Foundation: Math (আমার গণিত & Math-Magic 4), Science / EVS (আমাদের পরিবেশ & Looking Around 4), English (Butterfly / Wings & Marigold 4), and Computer ICT, MS PowerPoint & Game Logic in Scratch 3.0',
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
      },
      {
        id: 'c4-comp',
        name: 'Computer & Digital Skills (কম্পিউটার ও ডিজিটাল শিক্ষা)',
        code: 'COMP-PRM-4',
        iconName: 'Laptop',
        color: 'violet',
        description: 'Class 4 Computer Science & ICT aligning CBSE & NCF 2023 Digital Guidelines: Computer Memory & Storage Units (Bits, Bytes, KB, MB, GB, TB), Advanced MS Word / LibreOffice Writer (Tables, Header/Footer, Borders), Interactive Presentations in MS PowerPoint, Game Logic & Coordinate Systems in Scratch 3.0, Internet Search & Cyber Ethics.',
        weeklyHours: 3,
        totalModules: 8,
        learningOutcomes: [
          'Explain computer memory units (Bit, Byte, KB, MB, GB, TB) and differentiate between Primary Memory (RAM, ROM) and Secondary Storage (SSD, HDD, Pen Drive)',
          'Create and format complex tables, headers, footers, page borders, and watermarks in MS Word / Writer',
          'Design multimedia presentations in MS PowerPoint: Slide layouts, transitions, custom animations, text formatting, and slideshow playback',
          'Master Cartesian coordinate geometry (X, Y axes) on the Scratch 3.0 stage, variables, sensing blocks, and conditional logic (if-then-else)',
          'Build complete interactive mini-games (e.g. Catch the Fruit Game, Maze Runner) using Scratch 3.0 block coding',
          'Demonstrate knowledge of cyber security: Strong passwords, safe web browsers, recognizing phishing links, and netiquette'
        ],
        keyChapters: [
          {
            title: 'Memory, Storage Units & Computer Architecture (কম্পিউটার মেমোরি ও স্টোরেজ একক)',
            description: 'Understanding computer data measurement: Bits, Bytes, Kilobytes (KB), Megabytes (MB), Gigabytes (GB), Terabytes (TB); Internal memory (RAM vs ROM); External secondary storage devices (SSD, HDD, Flash Drive, Cloud storage intro).',
            subtopics: [
              'Smallest unit of data: Bit (0 or 1); 8 Bits = 1 Byte',
              'Data measurement ladder: 1024 Bytes = 1 KB, 1024 KB = 1 MB, 1024 MB = 1 GB, 1024 GB = 1 TB',
              'Primary Memory: RAM (Random Access Memory - volatile) vs ROM (Read Only Memory - non-volatile)',
              'Secondary Storage Devices: Hard Disk Drive (HDD), Solid State Drive (SSD), USB Flash Drive, SD Card',
              'Introduction to Cloud Storage (Google Drive, OneDrive) for saving school projects safely'
            ],
            practicalOrActivity: 'Checking PC memory properties (RAM, Hard Drive free space) and inspecting file sizes in Windows'
          },
          {
            title: 'Advanced Word Processing in MS Word (এমএস ওয়ার্ডে টেবিল ও অ্যাডভান্সড ফরম্যাটিং)',
            description: 'Creating and formatting Tables (Rows, Columns, Cells), Table styles, Header and Footer, Page numbers, Page borders and shading, Watermark, Find and Replace (Ctrl+H), and Spell Check (F7).',
            subtopics: [
              'Inserting Tables: Specifying rows and columns, merging cells, splitting cells, and table borders',
              'Typing and formatting data inside tables (e.g. Class Time Table, Monthly Expense Chart)',
              'Adding Headers (School name), Footers, and Automatic Page Numbers',
              'Page layout formatting: Margins (Normal, Narrow), Page Orientation (Portrait vs Landscape), Page Color',
              'Proofing tools: Spelling & Grammar Check (F7), Thesaurus for synonyms, Find and Replace (Ctrl+H)'
            ],
            practicalOrActivity: 'Creating a beautifully formatted Class Weekly Time Table and a School Newsletter in MS Word'
          },
          {
            title: 'Multimedia Presentations in MS PowerPoint (এমএস পাওয়ারপয়েন্টে স্লাইড প্রেজেন্টেশন)',
            description: 'Introduction to MS PowerPoint: Slides, Slide layouts (Title, Content, Two Content), Themes, Adding text boxes, Inserting pictures and SmartArt, Slide Transitions, Custom Animations, and Running a Slide Show (F5).',
            subtopics: [
              'MS PowerPoint interface: Slide Navigation pane, Slide workspace, Notes pane, Ribbon tabs',
              'Creating new slides, choosing slide layouts, and applying aesthetic design themes',
              'Formatting slide text and inserting high-resolution educational images and shapes',
              'Adding Slide Transitions (Fade, Push, Wipe) to create smooth slide changeovers',
              'Applying Custom Animations (Entrance, Emphasis, Exit) to bullet points and graphics',
              'Delivering a slide show: Starting presentation with F5 key, navigating with arrow keys, using laser pointer'
            ],
            practicalOrActivity: 'Designing a 5-slide animated presentation on "Solar System & Space" or "Save Our Forests"'
          },
          {
            title: 'Game Logic, Coordinates & Variables in Scratch 3.0 (স্ক্র্যাচে গেম তৈরি ও লজিক)',
            description: 'Scratch 3.0 Cartesian coordinate system (Stage X: -240 to +240, Y: -180 to +180); Sensing blocks ("touching mouse-pointer", "key space pressed"); Variables for Score and Lives; Conditional control blocks (if-then-else, forever, repeat until); Building interactive games.',
            subtopics: [
              'Understanding X and Y coordinates on the Scratch stage for precise sprite movement',
              'Creating Variables: Making a "Score" counter and "Timer" in Scratch',
              'Sensing blocks: Detecting sprite collision ("touching Apple?"), mouse clicks, and distance',
              'Conditional Logic: "If touching danger sprite then decrease Score by 1 else change Score by 1"',
              'Loops & Control: Forever loops, Repeat until loops, and broadcasting messages between sprites',
              'Cyber safety and netiquette: Safe password creation, avoiding cyberbullying, and responsible digital media consumption'
            ],
            practicalOrActivity: 'Programming a complete "Catch the Falling Apples Game" with score counter and sound effects in Scratch 3.0'
          }
        ],
        referenceMaterials: [
          'Biley Advanced Techies Computer Science Handbook (Class 4)',
          'MS PowerPoint & Scratch 3.0 Game Programming Lab Guide (Class 4)',
          'CBSE & NCF 2023 Digital Literacy & Artificial Intelligence Foundations'
        ],
        examPattern: 'Computer Lab Practical Exams, PowerPoint Presentation Demonstrations & Interactive Scratch 3.0 Game Coding Projects',
        practicalAvailable: true
      }
    ]
  }
];
