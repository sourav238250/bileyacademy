import { ClassGradeInfo } from '../../types';

export const SECONDARY_GRADES_DATA: ClassGradeInfo[] = [
  // ==========================================
  // CLASS 9 (Secondary School - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 9,
    gradeLabel: 'Class 9 (WBBSE & CBSE Foundation)',
    category: 'secondary',
    ageGroup: '14 - 15 Years',
    academicFocus: 'Dual-Board Comprehensive Foundation (WBBSE 1st, 2nd & 3rd Summative + CBSE Term-wise), Laboratory Practicals, NTSE & Olympiad Readiness',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '4:15 PM - 7:30 PM', mode: 'Classroom Lectures + Practical Lab + Weekly Assessment Clinic' },
    subjects: [
      {
        id: 'c9-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-09',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Comprehensive Semester-wise syllabus covering Real Numbers, Indices, Logarithms, Polynomials, Linear Simultaneous Equations, Parallelogram & Transversal Theorems, Coordinate Geometry, Mensuration (Area/Perimeter/Circumference), and Statistics & Probability.',
        weeklyHours: 7,
        totalModules: 14,
        learningOutcomes: [
          'Master Real numbers, surd rationalisation, laws of indices, and logarithmic properties',
          'Solve linear simultaneous equations by Elimination, Substitution, Comparison, and Cross-Multiplication',
          'Prove Parallelogram theorems, Midpoint theorem, and area equivalence of triangles',
          'Calculate areas using Heron’s formula, circle circumference & area, and analyze statistical ogives & frequency polygons'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Real Numbers, Indices, Logarithms & Linear Systems',
            description: 'Irrational numbers on number line, laws of indices, logarithmic definitions & identity proofs, polynomials (Remainder & Factor Theorems), vanishing method, and 4 algebraic methods for simultaneous equations.',
            subtopics: [
              'Real Numbers (বাস্তব সংখ্যা): Representation of √2, √3, √5 on number line, decimal expansions (terminating/recurring), surd rationalisation',
              'Laws of Indices & Logarithms (সূচকের নিয়মাবলী ও লগারিদম): Exponential laws, log rules log(xy), log(x/y), change of base formula and equation solving',
              'Polynomials & Factorisation (বহুপদী সংখ্যামালা ও উৎপাদকে বিশ্লেষণ): Remainder Theorem, Factor Theorem, Vanishing method (শূন্য পদ্ধতি), identity x³+y³+z³-3xyz',
              'Linear Simultaneous Equations (রৈখিক সহসমীকরণ): Solving via Elimination, Substitution, Comparison, and Cross-Multiplication (বজ্রগুণন পদ্ধতি) with graphical plotting'
            ],
            practicalOrActivity: 'Plotting simultaneous linear equations on graph paper to determine unique, infinite, and no-solution intersections'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Coordinate Geometry, Parallelograms & Commercial Math',
            description: 'Cartesian plane, distance formula, internal/external section formulas, centroid of triangle, parallelogram theorems, midpoint theorem, and profit-loss calculation.',
            subtopics: [
              'Coordinate Geometry (স্থানাঙ্ক জ্যামিতি): Cartesian plane, Distance formula √((x₂-x₁)²+(y₂-y₁)²), Section formula (mx₂+nx₁)/(m+n), Centroid of triangle',
              'Theorems on Parallelograms & Triangles (সামান্তরিক ও ত্রিভুজ সংক্রান্ত উপপাদ্য): Opposite sides/angles equality, diagonal bisection, Midpoint theorem (মধ্যবিন্দু সংক্রান্ত উপপাদ্য)',
              'Area Theorems: Triangles and parallelograms on the same base and between the same parallel lines have equal area proofs',
              'Profit, Loss & Partnership (লাভ-ক্ষতি ও যৌথ কারবার): Cost price, Selling price, Marked price, Successive discounts (ধার্যমূল্য ও ক্রমিক ছাড়), Partnership profit sharing'
            ],
            practicalOrActivity: 'Verification of Midpoint theorem and Area Equivalence theorems using paper folding and dynamic geometry tools'
          },
          {
            title: 'Semester 3 (3rd Summative / Term 3): Mensuration, Statistics & Probability',
            description: 'Heron’s formula, area and perimeter of triangles and quadrilaterals, circular ring areas, frequency distribution, histograms, frequency polygons, and empirical probability.',
            subtopics: [
              'Area & Perimeter of Triangles & Quadrilaterals (পরিসীমা ও ক্ষেত্রফল): Heron’s formula √(s(s-a)(s-b)(s-c)), Equilateral/Isosceles formulas, Rhombus and Trapezium areas',
              'Circumference & Area of Circle (বৃত্তের পরিধি ও ক্ষেত্রফল): Circumference 2πr, Area πr², Area of circular pathway/ring π(R²-r²), Sector area and arc length',
              'Statistics (রাশিবিজ্ঞান): Frequency distribution tables, Class boundaries, Cumulative frequency (Less-than / More-than ogives), Histograms and Frequency Polygons',
              'Probability (সম্ভাব্যতা) & Geometric Constructions: Empirical probability calculations P(E) = n(E)/n(S); Construction of triangle given perimeter and base angles'
            ],
            practicalOrActivity: 'Constructing cumulative frequency ogive curves and calculating median graphically'
          }
        ],
        referenceMaterials: ['WBBSE Ganit Prakash Class 9', 'NCERT Class 9 Mathematics & Exemplar', 'RD Sharma Class 9 Advanced Foundation'],
        examPattern: 'Term-wise Unit Tests (40 Marks each), Summative Assessments (90 Marks Board Pattern) & Step-wise Problem Solving Workshops',
        practicalAvailable: true
      },
      {
        id: 'c9-sci',
        name: 'Science – Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-09',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Semester-wise deep dive into Physics & Chemistry: Measurement, Fluid Mechanics (Pascal/Archimedes), Atomic Structure, Laws of Motion, Solutions & Colloids, Acids/Bases/Salts, Work-Power-Energy, Sound Waves, and Mole Concept.',
        weeklyHours: 7,
        totalModules: 14,
        learningOutcomes: [
          'Derive equations of motion and apply Newton’s laws of motion & momentum conservation',
          'Calculate fluid pressure (P=hρg), apply Archimedes’ principle, surface tension, and Bernoulli’s theorem',
          'Understand atomic orbitals, electronic configurations, and chemical bonding mechanisms',
          'Master work-energy theorem, mechanical energy conservation, and sound wave echo calculations'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Measurement, Fluid Mechanics & Atomic Structure',
            description: 'Units & dimensions, Vernier calipers, density, fluid pressure, Pascal’s law, Archimedes’ principle, surface tension, viscosity, and subatomic particles (Bohr atomic model).',
            subtopics: [
              'Measurement (পরিমাপ): Fundamental vs Derived SI units, Dimensional analysis, Vernier calipers, Screw gauge, Physical balance',
              'Matter - Structure & Properties (পদার্থের গঠন ও ধর্ম): Fluid pressure P=hρg, Atmospheric pressure, Torricelli’s barometer, Pascal’s law & hydraulic lift',
              'Archimedes’ Principle & Buoyancy: Upthrust, Floatation conditions, Surface tension (পৃষ্ঠটান), Viscosity (সান্দ্রতা) and Bernoulli’s theorem applications',
              'Atomic Structure (পরমাণুর গঠন): Thomson, Rutherford & Bohr models, Atomic number, Mass number, Isotopes/Isobars/Isotones, 2n² electronic configuration rule'
            ],
            practicalOrActivity: 'Measurement of volume and density of an irregular solid using measuring cylinder and screw gauge'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Motion, Force, Solutions & Acids-Bases',
            description: 'Kinematics equations, Newton’s 3 laws, momentum conservation, gravitation, colloidal solutions, Tyndall effect, solubility curves, and pH indicators.',
            subtopics: [
              'Motion & Force (বল ও গতি): Distance-displacement, Speed-velocity, Acceleration, Equations of motion (v=u+at, s=ut+½at², v²=u²+2as)',
              'Newton’s Laws & Gravitation: Inertia, F=ma, Action-reaction, Conservation of linear momentum, Universal law of gravitation F=G(m₁m₂/r²)',
              'Solutions & Colloids (দ্রবণ ও কলয়েড): True solution, Suspension, Colloidal solution (Tyndall effect, Brownian movement), Solubility curves and mass percentage',
              'Acids, Bases & Salts (অ্যাসিড, ক্ষার ও লবণ): Arrhenius & Bronsted concepts, pH scale, Indicators, Neutralisation reaction, Water hardness removal'
            ],
            practicalOrActivity: 'Verification of Newton’s third law with spring balances and measuring pH of various household liquids'
          },
          {
            title: 'Semester 3 (3rd Summative / Term 3): Work-Energy-Power, Sound & Mole Concept',
            description: 'Work done, kinetic/potential energy, conservation of mechanical energy, longitudinal sound waves, speed of sound, echo, SONAR, mole concept, and chemical bonding.',
            subtopics: [
              'Work, Power & Energy (কার্য, ক্ষমতা ও শক্তি): Work done W=Fs cosθ, Positive/Negative/Zero work, Kinetic Energy ½mv², Potential Energy mgh, Conservation of mechanical energy',
              'Sound (শব্দ): Longitudinal wave propagation, Wave parameters (wavelength, frequency, amplitude), Speed of sound, Echo calculation (d ≥ 17.2 m), Infrasonic & Ultrasound, SONAR',
              'Mole Concept & Chemical Calculations (মোল ধারণা ও গণনা): Avogadro number 6.022×10²³, Mole calculations, Molar mass, Percentage composition',
              'Chemical Bonding (রাসায়নিক বন্ধন): Electrovalent (Ionic) bonding (NaCl, CaO) and Covalent bonding (H₂, O₂, N₂, CH₄, H₂O, NH₃)'
            ],
            practicalOrActivity: 'Demonstrating resonance and calculating the speed of sound using a resonance tube and tuning forks'
          }
        ],
        referenceMaterials: ['WBBSE Bhouto Bigyan O Poribesh Class 9', 'NCERT Class 9 Science (Physics & Chemistry)', 'Lakhmir Singh Class 9 Physics & Chemistry'],
        examPattern: 'Laboratory Hands-on Practicals, Semester MCQ + Short Answer Tests, Numerical Problem Sets & Board Simulation Mocks',
        practicalAvailable: true
      },
      {
        id: 'c9-bio',
        name: 'Biology – Life Science (জীবনবিজ্ঞান ও পরিবেশ)',
        code: 'BIO-09',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Semester-wise coverage of Living Diversity (5 Kingdoms), Cell Organelles & Tissues, Plant & Human Physiology (Photosynthesis, Respiration, Circulation, Excretion), Human Diseases & Immunity, and Ecosystem Ecology.',
        weeklyHours: 6,
        totalModules: 12,
        learningOutcomes: [
          'Classify organisms across 5 kingdoms and identify characteristic plant/animal phyla',
          'Explain cell organelle ultrastructure, mitosis/meiosis differences, and tissue functions',
          'Describe physiological mechanisms: Photosynthesis (Hill/Calvin), Glycolysis/Krebs, Heart circulation, and Nephron filtration',
          'Analyze infectious pathogens, antibody immunity mechanisms, and ecosystem trophic energy flow'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Life Diversity, Cell Biology & Plant-Animal Tissues',
            description: 'Five Kingdom classification, plant divisions, animal phyla, prokaryotic vs eukaryotic cells, cell organelles under microscope, and meristematic/permanent tissues.',
            subtopics: [
              'Life & Its Diversity (জীবন ও তার বৈচিত্র্য): Origin of life (Oparin-Haldane), Whittaker’s 5 Kingdom classification, Plant kingdom (Algae to Angiosperms), Animal phyla (Porifera to Chordata)',
              'Cell Structure & Organelles (কোষ ও কোষীয় অঙ্গাণু): Fluid Mosaic membrane model, Nucleus, Mitochondria, ER, Golgi body, Lysosome, Plastids, Ribosomes, Plant vs Animal cell',
              'Plant Tissues (উদ্ভিদ কলা): Meristematic tissue (Apical, Lateral, Intercalary), Simple permanent (Parenchyma, Collenchyma, Sclerenchyma), Complex permanent (Xylem, Phloem)',
              'Animal Tissues (প্রাণী কলা): Epithelial tissue, Connective tissue (Bone, Cartilage, Blood, Areolar, Adipose), Muscular tissue (Striated, Unstriated, Cardiac), Nervous tissue'
            ],
            practicalOrActivity: 'Microscopic observation of onion peel cell, human cheek epithelial cells, and permanent slides of plant tissues'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Plant & Animal Physiology (Nutrition, Respiration, Circulation, Excretion)',
            description: 'Photosynthesis dark/light reactions, human digestive enzymes, cellular respiration pathways, blood groups, human double circulation, and nephron urine formation.',
            subtopics: [
              'Photosynthesis & Nutrition (সালোকসংশ্লেষ ও পুষ্টি): Light reaction (Photophosphorylation), Dark reaction (Calvin cycle), Human digestive system, Digestive enzymes and absorption',
              'Respiration (শ্বসন): Aerobic vs Anaerobic respiration, Glycolysis (EMP pathway), Krebs cycle, Human respiratory system and gas exchange (alveoli mechanics)',
              'Circulation (সংবহন): Blood components (Plasma, RBC, WBC, Platelets), ABO & Rh blood grouping, Human heart internal structure, Cardiac cycle, Double circulation, Lymphatic system',
              'Excretion (রেচন): Plant excretory waste (Gums, Resins, Latex, Alkaloids), Human excretory system, Structure of Nephron, Ultrafiltration, Selective reabsorption and urine formation'
            ],
            practicalOrActivity: 'Testing requirement of chlorophyll and light for photosynthesis; Measuring human pulse rate and blood pressure using sphygmomanometer'
          },
          {
            title: 'Semester 3 (3rd Summative / Term 3): Human Health, Immunity & Ecosystem Ecology',
            description: 'Pathogens, bacterial/viral diseases, innate vs acquired immunity, vaccination, ecosystem trophic dynamics, 10% energy law, biogeochemical cycles, and conservation.',
            subtopics: [
              'Human Health & Infectious Diseases (মানব স্বাস্থ্য ও রোগ): Bacterial diseases (TB, Cholera), Viral diseases (Polio, Dengue, Hepatitis), Protozoan (Malaria life cycle), Vectors',
              'Immunity & Vaccination (অনাক্রম্যতা ও টিকাকরণ): Innate vs Acquired immunity, Humoral (B-cells) vs Cell-mediated (T-cells) immunity, Antibodies structure, Vaccines and booster doses',
              'Ecosystem & Energy Flow (বাস্তুতন্ত্র ও শক্তিপ্রবাহ): Biotic & abiotic components, Food chain, Food web, Ecological pyramids, Lindeman’s 10% energy law',
              'Biogeochemical Cycles & Conservation (জৈব-ভূরাসায়নিক চক্র ও সম্পদ সংরক্ষণ): Carbon cycle, Nitrogen cycle, Water cycle, Natural resource conservation and biodiversity protection'
            ],
            practicalOrActivity: 'Preparation of chart for Nitrogen Cycle and field observation of local pond/garden ecosystem food web'
          }
        ],
        referenceMaterials: ['WBBSE Jibon Bigyan O Poribesh Class 9', 'NCERT Class 9 Science (Biology Chapters)', 'S. Chand Biology Class 9 (Dr. P.S. Verma)'],
        examPattern: 'High-Precision Anatomical Diagram Grading, Semester Evaluation Tests (40/90 Marks) & Practical Viva',
        practicalAvailable: true
      },
      {
        id: 'c9-eng',
        name: 'English Language & Literature (ইংরেজি)',
        code: 'ENG-09',
        iconName: 'BookA',
        color: 'teal',
        description: 'Semester-wise coverage of Prose, Poetry, Reading Comprehension, Grammar (Voice, Narration, Clauses, Transformation), and Structured Composition (Formal Letters, Notices, Processing, Reports, Paragraphs).',
        weeklyHours: 5,
        totalModules: 10,
        learningOutcomes: [
          'Score high marks in Reading Comprehension (Discursive and Factual passages)',
          'Master grammatical transformations: Voice change, Direct/Indirect speech, Complex clause synthesis',
          'Write professional formal letters, official school notices, process writings, and newspaper reports',
          'Analyze themes, character sketches, and poetic devices in prescribed WBBSE (Bliss) & CBSE (Beehive) literature'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Foundation Literature, Tenses, Voice & Story Writing',
            description: 'Prescribed prose and poetry, comprehensive review of tenses, active/passive voice transformation, and story writing with moral from outlines.',
            subtopics: [
              'Literature Studies: Tales of Bhola Grandpa, All about a Dog, Autumn, The Fun They Had, The Road Not Taken, Wind (Thematic & character analysis)',
              'Reading Comprehension: Unseen factual passages, skimming/scanning techniques, contextual vocabulary questions, inference deduction',
              'Grammar Mechanics: Sequence of tenses, Subject-Verb agreement, Active & Passive voice transformation (all tenses and imperative sentences)',
              'Writing Composition: Story writing from given outlines with suitable title and moral, Informal letter to friends and relatives, 100-word paragraph writing'
            ],
            practicalOrActivity: 'Timed 20-minute unseen comprehension clinics and story development workshops'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Intermediate Literature, Narration, Formal Letters & Notices',
            description: 'Prescribed prose/poetry, direct to indirect speech transformation, formal letters to headmaster/authorities, notice writing, and process writing.',
            subtopics: [
              'Literature Studies: A Day in the Zoo, All Summer in a Day, The Sound of Music, The Little Girl, Rain on the Roof, The Lake Isle of Innisfree',
              'Advanced Grammar: Direct and Indirect Speech (Assertive, Interrogative, Imperative, Optative, Exclamatory sentences), Degrees of comparison',
              'Formal Writing: Formal Leave & Application Letters to School Principal / Headmaster, Official Notice writing with standardized box layout',
              'Process Writing: Step-by-step sequential processing composition (Preparation of tea, orange juice, hand sanitizer, mustard oil)'
            ],
            practicalOrActivity: 'Drafting school event notices and participating in literary character roleplay'
          },
          {
            title: 'Semester 3 (3rd Summative / Term 3): Capstone Literature, Clauses, Reports & Précis',
            description: 'Dramatic prose and poetry, clause identification & sentence joining, newspaper report writing, official complaints, and précis writing.',
            subtopics: [
              'Literature Studies: A Shipwrecked Sailor, The North Ship, My Childhood, If I Were You, No Men Are Foreign, On Killing a Tree',
              'Complex Sentence Transformation: Clauses (Noun, Adjective/Relative, Adverbial clauses), Joining into simple/complex/compound, Phrasal verbs',
              'Journalistic Writing: Newspaper Report Writing (Headline, Byline, Place, Date, 3-tier structure), Letters of Complaint to municipal authorities',
              'Summary & Précis: Précis writing with ⅓ word limit and title, Analytical paragraph composition based on graphical prompts'
            ],
            practicalOrActivity: 'Publishing a student classroom newspaper edition with original reports and critical book reviews'
          }
        ],
        referenceMaterials: ['WBBSE Bliss Class 9', 'CBSE Beehive & Moments Class 9', 'Wren & Martin High School English Grammar'],
        examPattern: 'Term-wise Unit Tests (40 Marks), 90-mark Summative Evaluation Papers with Line-by-Line Grammar Correction',
        practicalAvailable: false
      },
      {
        id: 'c9-comp',
        name: 'Computer Science & Applications (কম্পিউটার শিক্ষা)',
        code: 'COMP-09',
        iconName: 'Code',
        color: 'violet',
        description: 'Semester-wise curriculum covering Computer Architecture, Number Systems, Algorithms & Flowcharts, Python Programming (Variables, Loops, Functions, Lists), HTML5/CSS Web Design, and Cyber Ethics.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Understand computer hardware architecture, memory hierarchies, and binary number conversions',
          'Design algorithmic logic, draw flowcharts, and code Python programs using control flow & data structures',
          'Build responsive web pages using semantic HTML5 tags and CSS styling properties',
          'Practice cyber safety, intellectual property rights, and digital citizenship ethics'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Computer Architecture, Number Systems & Python Basics',
            description: 'CPU components, primary/secondary memory, binary-decimal-hexadecimal conversions, flowchart logic, and Python variables, operators, and I/O.',
            subtopics: [
              'Computer System Organization: CPU (ALU, CU, Registers), Memory hierarchy (Cache, RAM, ROM, Flash, HDD/SSD), Input/Output devices',
              'Number Systems: Binary, Decimal, Octal, Hexadecimal conversions, Binary addition, subtraction using 1s and 2s complement',
              'Algorithmic Logic: Flowchart symbols, pseudo-code design, sequence, selection, and iteration constructs',
              'Python Fundamentals: Python interpreter, variables, dynamic typing, data types (int, float, str, bool), operators, input() and print() formatting'
            ],
            practicalOrActivity: 'Setting up Python IDE (IDLE/VS Code) and writing first math computation scripts'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Python Control Flow, Data Structures & HTML5 Web Design',
            description: 'if-elif-else statements, for/while loops, nested loops, string operations, list methods, and semantic HTML5 page layout.',
            subtopics: [
              'Control Structures in Python: if-else, if-elif-else, nested conditions, while loops, for loops with range(), break, continue, pass',
              'Python Data Structures: String indexing, slicing, string methods (upper, lower, find, replace, split); Lists creation, indexing, append, sort, pop',
              'Semantic HTML5: Document skeleton, <!DOCTYPE html>, headings h1-h6, paragraphs, text formatting, ordered/unordered lists, images <img>, links <a>',
              'Algorithmic Programs: Prime number checking, Fibonacci series, factorial calculation, string palindrome verification'
            ],
            practicalOrActivity: 'Coding Python pattern generators and building a personal multi-page HTML profile website'
          },
          {
            title: 'Semester 3 (3rd Summative / Term 3): CSS Styling, Forms, Tables & Cyber Ethics',
            description: 'CSS Box Model, selectors, styling tables and forms, cyber security, malware prevention, open source licenses, and term practical project.',
            subtopics: [
              'Advanced HTML5 & CSS: HTML Tables (table, tr, th, td, rowspan, colspan), HTML Forms (input, select, textarea, button), CSS Box Model, inline/internal/external CSS',
              'CSS Properties: Color, background, typography, borders, margins, padding, hover pseudo-classes, responsive design basics',
              'Cyber Ethics & Safety: Malware types (Virus, Worms, Trojans, Ransomware), Phishing, Identity theft, Firewalls, IPR, Copyright vs Copyleft, IT Act 2000',
              'Term Project: Complete web project + Python console utility (e.g. Student Report Card Generator or Quiz Engine)'
            ],
            practicalOrActivity: 'Developing and hosting an interactive styled HTML/CSS website with complete contact forms'
          }
        ],
        referenceMaterials: ['CBSE Computer Applications Class 9 (Sumita Arora)', 'WBBSE Computer Literacy Guide Class 9', 'Python for Beginners (NCERT & Biley CodeLab)'],
        examPattern: 'Hands-on Computer Lab Practical Exams (Code debugging, output tracing) + 50/100 Mark Theory Board Pattern Papers',
        practicalAvailable: true
      }
    ]
  },

  // ==========================================
  // CLASS 10 (Secondary School - WBBSE & CBSE)
  // ==========================================
  {
    gradeNumber: 10,
    gradeLabel: 'Class 10 (WBBSE Madhyamik & CBSE Board)',
    category: 'secondary',
    ageGroup: '15 - 16 Years',
    academicFocus: '100% Board Examination Target (WBBSE Madhyamik Pariksha & CBSE Class 10 Board), Rigorous Laboratory Practicals, 10-Year Paper Solving & Pre-Board Mocks',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '4:30 PM - 7:45 PM', mode: 'Classroom Lectures + Science/Computer Lab + Daily Board Doubt Clinic' },
    subjects: [
      {
        id: 'c10-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-10',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Semester-wise Madhyamik & CBSE Board syllabus: Quadratic Equations (Sridhar Acharya), Simple/Compound Interest, Circle Theorems, Quadratic Surds, Trigonometry & Heights/Distances, Cylinder/Cone/Sphere Mensuration, Similarity & Pythagoras Theorem, Statistics (Mean/Median/Mode/Ogive), and Geometric Constructions (Incircle/Circumcircle).',
        weeklyHours: 8,
        totalModules: 15,
        learningOutcomes: [
          'Score 95%+ in Class 10 Board Examinations (WBBSE Madhyamik & CBSE Board)',
          'Solve quadratic equations by Sridhar Acharya formula and master commercial arithmetic (Compound Interest & Depreciation)',
          'Prove circle tangent theorems, similarity ratios, and apply Pythagoras theorem in multi-step riders',
          'Calculate Heights & Distances with Trigonometric ratios and evaluate Mean, Median, Mode & Ogives for grouped data'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Quadratic Equations, Commercial Math & Circle Theorems',
            description: 'One-variable quadratic equations, Sridhar Acharya formula, nature of roots, simple & compound interest, uniform rate of increase/decrease, circle angle theorems, real numbers and polynomials.',
            subtopics: [
              'Quadratic Equations (একচলবিশিষ্ট দ্বিঘাত সমীকরণ): Standard form ax²+bx+c=0, Factorisation, Sridhar Acharya formula (শ্রীধর আচার্যের সূত্র), Discriminant D=b²-4ac, Nature of roots, Root-coefficient relations',
              'Simple & Compound Interest (সরল সুদ ও চক্রবৃদ্ধি সুদ): I=PRT/100, Compound Interest A=P(1+r/100)ⁿ compounded annually/semi-annually, Difference between CI and SI for 2-3 years, Uniform increase/depreciation',
              'Theorems on Circles (বৃত্ত সম্পর্কিত উপপাদ্য): Center angle is double the subtended circle angle, Angles in the same segment are equal, Cyclic quadrilateral opposite angles are supplementary (১৮০°)',
              'Real Numbers & Polynomials (CBSE / WBBSE Core): Fundamental Theorem of Arithmetic, Proofs of irrationality of √2, √3, √5, Division algorithm, zeroes of quadratic/cubic polynomials'
            ],
            practicalOrActivity: 'Graphical plotting of quadratic parabolas and verifying roots at x-intercepts'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Trigonometry, Quadratic Surds, Mensuration & Coordinate Geometry',
            description: 'Ratio-proportion, quadratic surds, trigonometric ratios, standard identities, right circular cylinder & cone mensuration, and distance/section formulas.',
            subtopics: [
              'Ratio, Proportion & Quadratic Surds (অনুপাত, সমানুপাত ও দ্বিঘাত করণী): Invertendo, Alternando, Componendo, Dividendo, Componendo & Dividendo; Surds rationalisation and simplification',
              'Trigonometric Ratios & Identities (ত্রিকোণমিতিক অনুপাত ও অভেদাবলী): Values for 0°, 30°, 45°, 60°, 90°, Complementary angle ratios sin(90°-θ)=cosθ, Identities sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=cosec²θ',
              'Right Circular Cylinder & Cone (লম্ব বৃত্তাকার চোঙ ও শঙ্কু): Cylinder CSA 2πrh, TSA 2πr(r+h), Volume πr²h; Cone slant height l=√(r²+h²), CSA πrl, TSA πr(r+l), Volume ⅓πr²h',
              'Coordinate Geometry (স্থানাঙ্ক জ্যামিতি): Distance formula, Section formula, Area of triangle ½|x₁(y₂-y₃)+x₂(y₃-y₁)+x₃(y₁-y₂)|, Condition for collinearity of three points'
            ],
            practicalOrActivity: 'Clinometer field activity to measure heights of surrounding buildings using trigonometric tangents'
          },
          {
            title: 'Semester 3 (3rd Summative / Pre-Board & Final Board Exam): Heights & Distances, Sphere, Similarity, Statistics & Constructions',
            description: 'Heights & distances, sphere/hemisphere mensuration, triangle similarity, Pythagoras theorem, mean/median/mode/ogives, and circumcircle/incircle geometric constructions.',
            subtopics: [
              'Heights & Distances (উচ্চতা ও দূরত্ব): Angle of elevation (উন্নতি কোণ), Angle of depression (অবনতি কোণ), Multi-step problems with towers, lighthouses, kites, and two observer positions',
              'Sphere, Hemisphere & Solid Combinations (গোলক ও ঘনবস্তু): Sphere Surface area 4πr², Volume 4/3πr³; Solid hemisphere TSA 3πr², Volume ⅔πr³; Melting and recasting solids problems',
              'Similarity & Pythagoras Theorem (সদৃশতা ও পিথাগোরাসের উপপাদ্য): Thales’ Basic Proportionality Theorem, Similarity criteria (AAA, SAS, SSS), Area ratio theorem, Pythagoras Theorem proof (h²=p²+b²)',
              'Statistics & Probability (রাশিবিজ্ঞান ও সম্ভাব্যতা): Mean (Direct, Assumed Mean, Step-deviation), Median L+((N/2-cf)/f)×h, Mode L+((f₁-f₀)/(2f₁-f₀-f₂))×h, Less-than & More-than Ogives',
              'Geometric Constructions (জ্যামিতিক অঙ্কন): Incircle (অন্তর্বৃত্ত) and Circumcircle (পরিবৃত্ত) of triangles, Tangent to a circle from external point, Determination of mean proportional (মধ্যসমানুপাতী নির্ণয়)'
            ],
            practicalOrActivity: 'Geometric construction of circumcircle and incircle on drawing sheets with precision instruments'
          }
        ],
        referenceMaterials: ['WBBSE Ganit Prakash Class 10 (Madhyamik)', 'NCERT Class 10 Mathematics & Exemplar', 'RD Sharma Class 10 & Biley 10-Year Board Solved Archive'],
        examPattern: 'Weekly 90-mark Board Mock Tests (WBBSE Madhyamik & CBSE), Step-Marking Evaluation Drills & Time Management Masterclasses',
        practicalAvailable: true
      },
      {
        id: 'c10-sci',
        name: 'Science – Physical Science (ভৌতবিজ্ঞান ও পরিবেশ)',
        code: 'SCI-10',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Semester-wise Madhyamik & CBSE Physics & Chemistry: Behavior of Gases (Boyle/Charles/PV=nRT), Thermal Physics, Optics (Lens/Mirrors/Dispersion), Current Electricity & Electromagnetism, Modern Periodic Table, Chemical Bonding, Inorganic Chemistry (NH3, H2S, N2, HCl, HNO3, H2SO4), Metallurgy, Nuclear Physics, and Organic Chemistry (IUPAC, Alkanes, Alkenes, Alkynes, Ethanol, Acetic Acid).',
        weeklyHours: 8,
        totalModules: 16,
        learningOutcomes: [
          'Derive gas laws, calculate stoichiometry problems, and apply thermal expansion coefficients',
          'Master ray diagrams for spherical mirrors & lenses, lens formula, Snell’s law, and dispersion/scattering of light',
          'Calculate electrical circuit resistance, Joule’s heating, electric power (BOT units), and explain motor/generator principles',
          'Understand periodic table trends, laboratory preparations of industrial gases/acids, metallurgy extraction, and IUPAC organic reactions'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Environment, Behavior of Gases, Chemical Calculations & Thermal Physics',
            description: 'Atmospheric layers, ozone depletion, greenhouse effect, Boyle’s & Charles’ gas laws, PV=nRT, stoichiometry calculations, thermal expansion of solids/liquids, and chemical reactions.',
            subtopics: [
              'Environment & Behavior of Gases (পরিবেশের জন্য ভাবনা ও গ্যাসের আচরণ): Ozone depletion (CFCs), Greenhouse effect, Boyle’s Law, Charles’ Law, Combined Gas Equation P₁V₁/T₁ = P₂V₂/T₂, Ideal Gas Equation PV=nRT',
              'Chemical Calculations (রাসায়নিক গণনা): Mass-mass and mass-volume stoichiometric calculations based on balanced chemical equations, Percentage yield and purity',
              'Thermal Phenomena (তাপের ঘটনাসমূহ): Linear (α), Superficial (β), Cubical (γ) expansion coefficients (α = β/2 = γ/3), Apparent vs Real liquid expansion, Thermal conductivity K, Heat flow rate Q/t',
              'Chemical Reactions & Equations (রাসায়নিক বিক্রিয়া): Combination, Decomposition, Displacement, Double displacement, Redox reactions, Corrosion and Rancidity'
            ],
            practicalOrActivity: 'Verification of Boyle’s law using Boyle’s apparatus and studying thermal expansion of metals'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Optics, Current Electricity, Periodic Table & Chemical Bonding',
            description: 'Spherical mirrors, refraction through prism/lens, human eye defects, Ohm’s law, Joule’s law, magnetic effects of current, Fleming’s rules, periodic trends, and ionic/covalent bonding.',
            subtopics: [
              'Optics (আলো): Spherical mirrors (1/v + 1/u = 1/f), Refraction through prism (δ=i₁+i₂-A), Snell’s law, Thin lenses (Convex/Concave), Power of lens (P=1/f), Human eye defects (Myopia, Hypermetropia) & corrections, Light dispersion & scattering (Rayleigh’s law)',
              'Current Electricity & Electromagnetism (চলতড়িৎ ও তড়িৎ-চৌম্বকীয় ফল): Ohm’s Law, Series/Parallel resistors, EMF vs Terminal voltage, Joule’s heating law H=I²Rt/4.2, BOT unit (kWh) calculation, Right-hand thumb rule, Fleming’s Left-Hand rule (Electric Motor), Fleming’s Right-Hand rule (Generator), Domestic wiring & MCB',
              'Periodic Table (পর্যায় সারণি): Modern periodic law (7 periods, 18 groups), Periodic trends (Atomic radius, Ionisation energy, Electron affinity, Electronegativity)',
              'Chemical Bonding (রাসায়নিক বন্ধন): Ionic bonding (NaCl, LiH, CaO) vs Covalent bonding (H₂O, NH₃, CH₄, C₂H₄, C₂H₂) and Lewis dot structures'
            ],
            practicalOrActivity: 'Determining focal length of convex lens using optical bench; Verifying Ohm’s law with voltmeter and ammeter circuits'
          },
          {
            title: 'Semester 3 (3rd Summative / Pre-Board & Final Board Exam): Radioactivity, Inorganic Lab Chemistry, Metallurgy & Organic Chemistry',
            description: 'Nuclear physics (α, β, γ rays, fission/fusion), laboratory preparation of gases (NH3, H2S, N2, HCl, HNO3, H2SO4), extraction of Iron/Aluminium, and organic chemistry (IUPAC, hydrocarbons, ethanol, acetic acid).',
            subtopics: [
              'Atomic Nucleus & Radioactivity (পরমাণুর নিউক্লিয়াস ও তেজস্ক্রিয়তা): α, β, γ rays properties, Radioactive decay equations, Mass defect, Binding energy, Nuclear Fission vs Nuclear Fusion, Radiation safety',
              'Inorganic Chemistry in Lab & Industry (পরীক্ষাগার ও রাসায়নিক শিল্পে অজৈব রসায়ন): Laboratory preparation, properties & tests of Ammonia (NH₃), Hydrogen Sulphide (H₂S - Kipp’s apparatus), Nitrogen (N₂), Hydrochloric Acid (HCl), Nitric Acid (HNO₃ - Ostwald), Sulphuric Acid (H₂SO₄ - Contact process)',
              'Metallurgy (ধাতুবিদ্যা): Ores & minerals, Concentration, Calcination, Roasting, Smelting, Blast furnace extraction of Iron, Hall-Héroult extraction of Aluminium, Alloys (Brass, Bronze, Duralumin, Stainless steel), Rusting prevention',
              'Organic Chemistry (কার্বন ও তার যৌগ - জৈব রসায়ন): Catenation, Tetravalency, Alkanes, Alkenes, Alkynes, IUPAC nomenclature of functional groups (-OH, -CHO, >C=O, -COOH), Isomerism, Reactions of Methane/Ethylene/Acetylene, Industrial preparation & reactions of Ethanol (C₂H₅OH) and Ethanoic acid (CH₃COOH), Esterification, Saponification, Micelle cleansing action'
            ],
            practicalOrActivity: 'Laboratory preparation and chemical identification tests of Ammonia gas and soap preparation by saponification'
          }
        ],
        referenceMaterials: ['WBBSE Bhouto Bigyan O Poribesh Class 10 (Madhyamik)', 'NCERT Class 10 Science (Physics & Chemistry)', 'Lakhmir Singh & Manjit Kaur Class 10 Physics & Chemistry'],
        examPattern: 'Full Laboratory Practicals, 90-Mark WBBSE Madhyamik & 80-Mark CBSE Full-Syllabus Mock Examinations with Complete Diagram Evaluation',
        practicalAvailable: true
      },
      {
        id: 'c10-bio',
        name: 'Biology – Life Science (জীবনবিজ্ঞান ও পরিবেশ)',
        code: 'BIO-10',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Semester-wise Madhyamik & CBSE Biology syllabus: Control & Coordination (Plant Hormones, Human Endocrine Glands, Nervous System & Eye), Cell Division & Chromosomes (Mitosis/Meiosis), Reproduction (Plant/Human & Health), Mendelian Genetics & Hereditary Diseases (Thalassemia, Haemophilia, Color Blindness), Evolution & Adaptation (Darwinism, Halophytes, Camel), and Environment, Pollution & Biodiversity Conservation (JFM, PBR, Hotspots).',
        weeklyHours: 7,
        totalModules: 14,
        learningOutcomes: [
          'Score top marks in WBBSE Madhyamik Life Science (90 Marks) & CBSE Class 10 Biology',
          'Draw and label high-precision diagrams: Neuron, Reflex Arc, Human Eye, Mitosis Phases, Flower Structure, and Nephron',
          'Explain Mendelian Monohybrid & Dihybrid crosses, sex determination, and genetic disease inheritance pedigrees',
          'Analyze Lamarckian/Darwinian evolutionary adaptations, Nitrogen cycle disruptions, and Indian biodiversity conservation'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Control & Coordination in Organisms and Cell Division & Chromosomes',
            description: 'Plant movements and phytohormones, human endocrine glands, neuron & reflex arc, human eye anatomy, chromosome structure, cell cycle, mitosis, and meiosis.',
            subtopics: [
              'Plant Movements & Phytohormones (উদ্ভিদের সংবেদনশীলতা ও হরমোন): Tropic, Nastic, Tactic movements; Auxin, Gibberellin, Cytokinin, Abscisic acid, Ethylene functions',
              'Animal Hormones & Human Endocrine Glands (প্রাণী হরমোন ও অন্তঃক্ষরা গ্রন্থি): Pituitary (Master gland - TSH, ACTH, GTH, STH), Thyroid (Thyroxine), Pancreas (Insulin, Glucagon), Adrenal (Adrenaline), Gonads (Testosterone, Estrogen, Progesterone), Feedback mechanism',
              'Human Nervous System & Eye (স্নায়ুতন্ত্র ও চোখ): Structure of Neuron (Cyton, Axon, Dendrites, Synapse), Human Brain (Cerebrum, Cerebellum, Medulla), Reflex arc, Anatomy of Human Eye (Cornea, Lens, Retina, Rods/Cones, Yellow spot, Blind spot) & Accommodation',
              'Cell Division & Chromosomes (কোষ বিভাজন ও ক্রোমোজোম): Chromosome morphology (Centromere, Chromatid, Telomere, Nucleosome model), Autosomes vs Sex chromosomes, Cell cycle phases (G₁, S, G₂, M), Mitosis stages (Prophase, Metaphase, Anaphase, Telophase with diagrams), Cytokinesis, Meiosis significance (Crossing over, Chiasma)'
            ],
            practicalOrActivity: 'Observing permanent slides of Mitosis stages in onion root tip and dissecting flower reproductive whorls'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Reproduction in Organisms & Mendelian Heredity and Genetic Diseases',
            description: 'Asexual & vegetative reproduction, flower pollination & double fertilisation, human reproduction, Mendel’s laws of inheritance, sex determination, and hereditary diseases.',
            subtopics: [
              'Reproduction in Organisms (জীবের জনন): Asexual reproduction (Fission, Budding, Spore, Regeneration), Vegetative propagation (Grafting, Micropropagation/Tissue culture), Flower structure, Pollination (Self vs Cross), Double fertilisation process',
              'Human Reproduction & Health: Male & Female reproductive systems, Menstrual cycle, Fertilisation, Contraceptive methods and reproductive health',
              'Mendel’s Heredity Laws (মেন্ডেলের বংশগতি সূত্র): Monohybrid cross (3:1 phenotype, 1:2:1 genotype, Law of Segregation), Dihybrid cross (9:3:3:1, Law of Independent Assortment), Incomplete dominance (1:2:1 Mirabilis jalapa), Sex determination in humans (XX-XY mechanism)',
              'Common Genetic Diseases (কয়েকটি সাধারণ জিনগত রোগ): Thalassemia (α & β Thalassemia - Autosomal recessive), Haemophilia (Bleeder’s disease - X-linked recessive), Color Blindness (Daltonism - X-linked recessive), Importance of genetic counseling'
            ],
            practicalOrActivity: 'Simulating Monohybrid and Dihybrid genetic crosses using coin toss probability models'
          },
          {
            title: 'Semester 3 (3rd Summative / Pre-Board & Final Board Exam): Evolution & Adaptation and Environment, Resources & Conservation',
            description: 'Chemical origin of life, Lamarckism vs Darwinism, homologous/analogous organs, xerophytic/halophytic/camel adaptations, Nitrogen cycle, environmental pollution, and biodiversity conservation.',
            subtopics: [
              'Evolution (অভিব্যক্তি): Miller-Urey experiment, Lamarckism (Use/Disuse, Acquired characters), Darwinism (Struggle for existence, Variations, Survival of fittest, Natural selection), Evidences (Homologous/Analogous organs, Vestigial organs, Archaeopteryx fossil)',
              'Morphological & Physiological Adaptation (অভিযোজন): Cactus (Xerophytic adaptation), Sundari plant (Halophytic - Pneumatophores, Viviparous germination), Rohu fish (Swim bladder), Pigeon (Air sacs), Camel (RBC shape & water conservation)',
              'Nitrogen Cycle & Pollution (নাইট্রোজেন চক্র ও পরিবেশ দূষণ): Nitrogen fixation, Nitrification, Denitrification; Air, Water, Soil, Noise pollution, Greenhouse effect, Acid rain, Eutrophication, Biomagnification',
              'Biodiversity & Conservation (জীববৈচিত্র্য ও সংরক্ষণ): Values of biodiversity, 4 Indian Biodiversity Hotspots (Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland), In-situ (National Parks, Sanctuaries, Biosphere Reserves) vs Ex-situ (Botanical Gardens, Cryopreservation, Seed Banks), Joint Forest Management (JFM Arabari), People’s Biodiversity Register (PBR)'
            ],
            practicalOrActivity: 'Case study analysis of local mangrove/wetland ecosystems and preparing a model People’s Biodiversity Register (PBR)'
          }
        ],
        referenceMaterials: ['WBBSE Jibon Bigyan O Poribesh Class 10 (Madhyamik)', 'NCERT Class 10 Science (Biology Chapters)', 'S. Chand Biology Class 10 (Dr. P.S. Verma & Biley Board Atlas)'],
        examPattern: 'Madhyamik 90-Mark & CBSE 80-Mark Full Board Mock Examinations with Specialized 5-Mark Diagram Drafting Sessions',
        practicalAvailable: true
      },
      {
        id: 'c10-eng',
        name: 'English Language & Literature (ইংরেজি)',
        code: 'ENG-10',
        iconName: 'BookA',
        color: 'teal',
        description: 'Semester-wise Madhyamik (Bliss) & CBSE (First Flight / Footprints) Board syllabus: Literature Analysis, Unseen Reading Comprehension, Advanced Grammar (Clauses, Complex Voice, Speech Backshifting, Phrasal Verbs, Sentence Interchange), and High-Scoring Board Composition (Newspaper Reports, Editorial Letters, Formal Notices, Processing, Analytical Paragraphs, and Biographies).',
        weeklyHours: 6,
        totalModules: 12,
        learningOutcomes: [
          'Achieve 95%+ marks in Board English Language & Literature examinations',
          'Perform flawless unseen reading comprehension with precise title selection and vocabulary deduction',
          'Master grammatical transformations: Clause synthesis, Phrasal verbs, Direct/Indirect narration, Voice change across all sentence types',
          'Produce high-scoring Newspaper Reports, Editorial Letters, Notices, Processing writings, and Analytical Paragraphs'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Core Board Literature, Sequence of Tenses, Voice & Story/Biography Writing',
            description: 'Prescribed prose & poetry, unseen comprehension techniques, tense consistency, passive voice transformation across complex sentences, story and biography writing.',
            subtopics: [
              'Board Literature Studies: Father’s Help, Fable, The Passing Away of Bapu, A Letter to God, Dust of Snow, Fire and Ice, Nelson Mandela, A Triumph of Surgery, The Thief’s Story',
              'Reading Comprehension Mastery: Discursive and Factual unseen passages, inference drawing, vocabulary deduction, title justification, précis drafting',
              'Grammar for Board Scoring: Sequence of tenses, Complex sentence voice changes (Assertive, Interrogative, Imperative, Infinitive, Quasi-passive verbs)',
              'Writing Composition: Story writing from outline points with title and moral, Informal letter writing, Chronological biography writing (100-120 words)'
            ],
            practicalOrActivity: 'Timed 20-minute unseen comprehension clinics and writing biographical sketches of eminent personalities'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): Intermediate Board Literature, Clauses, Narration, Editorial Letters & Processing',
            description: 'Prescribed literature, clause synthesis, direct to indirect speech transformation, formal letters to the Editor, municipal complaints, and processing writing.',
            subtopics: [
              'Board Literature Studies: My Own True Family, Our Runaway Kite, Sea Fever, Two Stories about Flying, From the Diary of Anne Frank, A Tiger in the Zoo, Footprints without Feet',
              'Grammar Transformation: Clauses (Noun, Relative/Adjective, Adverbial clauses of condition/reason/time), Direct to Indirect speech backshifting, Group verbs / Phrasal verbs from Board wordlists',
              'Editorial & Official Letters: Formal Letter to the Editor of a National Daily on civic issues/cyber safety/public hygiene, Complaint letters to civic authorities',
              'Process Writing: Sequential process composition with passive construction (Production of tea, paper, mustard oil, hand sanitizer, glass)'
            ],
            practicalOrActivity: 'Drafting formal editorial op-eds on civic issues and participating in structured literary character debates'
          },
          {
            title: 'Semester 3 (3rd Summative / Pre-Board & Final Board Exam): Capstone Literature, Newspaper Reports, Analytical Paragraphs & Full Mocks',
            description: 'Dramatic prose, capstone poetry, newspaper report writing, official notice writing, sentence interchange, and 10-year board paper simulations.',
            subtopics: [
              'Capstone Literature Studies: The Cat, The Snail, Glimpses of India, Madam Rides the Bus, The Sermon at Benares, The Proposal (Play), Amanda!, Fog, The Trees, The Making of a Scientist, The Necklace, Bholi',
              'Journalistic Writing: Standardized Newspaper Report Writing (Catchy Headline, Byline, Place, Date, 3-paragraph inverted pyramid format)',
              'Official Notices & Analytical Paragraphs: Official club and school wall notices in boxed format; Data-driven analytical paragraph writing based on charts and tables',
              'Grammar Review & Sentence Interchange: Affirmative to negative, assertive to interrogative/exclamatory, degrees of comparison, nominal compounds, 10-year Madhyamik & CBSE solved drills'
            ],
            practicalOrActivity: 'Complete 3-hour Madhyamik and CBSE simulation board examinations with line-by-line examiner evaluation'
          }
        ],
        referenceMaterials: ['WBBSE Bliss & Selection Test Papers Class 10', 'CBSE First Flight & Footprints without Feet Class 10', 'Wren & Martin High School English Grammar & Composition'],
        examPattern: 'Full-Length 3-Hour 90-Mark Madhyamik / 80-Mark CBSE Simulation Board Papers with Exhaustive Examiner Feedback',
        practicalAvailable: false
      },
      {
        id: 'c10-comp',
        name: 'Computer Science & Applications (কম্পিউটার অ্যাপ্লিকেশন)',
        code: 'COMP-10',
        iconName: 'Code',
        color: 'violet',
        description: 'Semester-wise Madhyamik & CBSE Computer syllabus: Networking Fundamentals (Protocols, WWW, Web Services), Semantic HTML5 & CSS Forms/Box Model, Cyber Ethics & IT Act 2000, Relational Database Management Systems (RDBMS & SQL DDL/DML/Clauses), Object-Oriented Programming (Python / Java Track: Classes, Objects, Methods, Arrays, Strings, Sorting/Searching), and Desktop CRUD Database Projects.',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: [
          'Score 100% in Board Computer Theory & Laboratory Practical Examinations',
          'Write normalized SQL queries (SELECT, WHERE, ORDER BY, GROUP BY, Aggregate functions)',
          'Code Object-Oriented programs in Python / Java implementing classes, constructors, methods, and algorithms',
          'Design interactive HTML5/CSS web forms and connect Python scripts to relational databases'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (1st Summative / Term 1): Networking, Web Services, HTML5/CSS Form Design & Cyber Ethics',
            description: 'LAN/WAN, TCP/IP, HTTP/HTTPS, DNS, web services, e-commerce, semantic HTML5 forms, CSS Box Model, cyber crimes, and Indian IT Act 2000.',
            subtopics: [
              'Networking & Internet Fundamentals: Client-Server architecture, LAN, MAN, WAN, PAN, Internet protocols (TCP/IP, HTTP, HTTPS, FTP, SMTP, DNS, VoIP), Web browsers, Search engines, URL anatomy',
              'Web Services & Mobile Technologies: E-Mail, Video conferencing, E-Learning, E-Banking, E-Commerce, 4G/5G, Wi-Fi, Bluetooth protocols',
              'HTML5 & CSS Forms: Creating interactive forms (<form>, input types, select, textarea, submit/reset), CSS Box Model (Content, Padding, Border, Margin), CSS positioning',
              'Cyber Ethics & Safety: Intellectual Property Rights (IPR), Copyright, Patents, Trademarks, Plagiarism, Open Source licenses (GPL, Creative Commons), Digital footprint, Firewalls, SSL certificates, Indian IT Act 2000'
            ],
            practicalOrActivity: 'Designing a fully functional responsive HTML5/CSS user registration and feedback form'
          },
          {
            title: 'Semester 2 (2nd Summative / Term 2): RDBMS, SQL Database Queries & Object-Oriented Programming (OOP)',
            description: 'Relational database concepts, primary/foreign keys, SQL DDL & DML commands, aggregate functions, and OOP principles (classes, constructors, encapsulation).',
            subtopics: [
              'RDBMS Concepts: Relational data model, Tables, Tuples, Attributes, Primary Key, Candidate Key, Alternate Key, Foreign Key, Data integrity',
              'Structured Query Language (SQL): DDL (CREATE, ALTER, DROP TABLE), DML (INSERT, SELECT, UPDATE, DELETE), SQL Constraints (NOT NULL, UNIQUE, PRIMARY KEY, DEFAULT)',
              'SQL Query Clauses & Functions: WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, BETWEEN, IN, LIKE; Aggregate functions (COUNT, SUM, AVG, MIN, MAX)',
              'Object-Oriented Programming (Python / Java): OOP principles (Encapsulation, Abstraction, Inheritance, Polymorphism), Classes, Objects, Constructors, Instance variables and methods'
            ],
            practicalOrActivity: 'Creating school database tables on MySQL terminal, populating records, and executing multi-clause SQL queries'
          },
          {
            title: 'Semester 3 (3rd Summative / Pre-Board & Practical Board Exam): Data Structures, Python-MySQL Connectivity & Board Project',
            description: 'Linear data structures, search/sort algorithms (Linear/Binary search, Bubble/Selection sort), Python MySQL database connectivity, and board project defense.',
            subtopics: [
              'Data Structures & Algorithms: 1D/2D Arrays and Python Lists, Linear Search, Binary Search on sorted lists, Bubble Sort, Selection Sort algorithms',
              'String & Number Algorithms: Palindrome verification, Anagram checking, Prime series, Matrix operations, Word frequency analysis',
              'Database Connectivity: Connecting Python with MySQL (mysql.connector / sqlite3), Cursor operations, executing parameterized queries, fetching records (fetchone, fetchall)',
              'Board Project & Lab Viva: Developing a complete CRUD desktop application (e.g. Student Management System or Library Book Tracker) and lab examination viva preparation'
            ],
            practicalOrActivity: 'Building and defending a full-stack Python + MySQL Database Management Desktop Application'
          }
        ],
        referenceMaterials: ['CBSE Computer Applications Class 10 (Sumita Arora)', 'WBBSE Computer Application Guide Class 10', 'Biley CodeLab 100 Solved Board Programs & Specimen Bank'],
        examPattern: 'Hands-on Computer Lab Practical Examination (50 Marks: Programming, SQL Queries, Web Design & Viva) + 50/100-Mark Board Theory Papers',
        practicalAvailable: true
      }
    ]
  }
];
