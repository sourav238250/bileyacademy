import { ClassGradeInfo } from '../../types';

export const HIGHER_SECONDARY_GRADES_DATA: ClassGradeInfo[] = [
  // =========================================================================
  // CLASS 11 (Higher Secondary - WBCHSE Semester System & CBSE Class 11)
  // =========================================================================
  {
    gradeNumber: 11,
    gradeLabel: 'Class 11 (WBCHSE & CBSE Higher Secondary)',
    category: 'higher_secondary',
    ageGroup: '16 - 17 Years',
    academicFocus: 'Dual-Track Foundation: 100% Mastery of Higher Secondary Syllabus (WBCHSE Semester 1 & 2 / CBSE Class 11) + JEE Main, WBJEE, Olympiad & CUET Rigor',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '3:30 PM - 8:30 PM', mode: 'Intensive Concept Lectures + Laboratory Practicals + Entrance Problem Workshop' },
    subjects: [
      {
        id: 'c11-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-11',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Semester-wise WBCHSE & CBSE Class 11 curriculum: Sets, Relations & Functions, Trigonometric Functions & General Solutions, Complex Numbers & Quadratic Equations, Linear Inequalities, Permutations & Combinations, Binomial Theorem, Sequence & Series (AP, GP, Special Series), Straight Lines, Conic Sections (Circle, Parabola, Ellipse, Hyperbola), 3D Geometry Introduction, Limits & Derivatives (Calculus Foundation), Mathematical Reasoning, Statistics, and Probability.',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: [
          'Master Set operations, Cartesian products, equivalence relations, domain-range mapping, and composite functions',
          'Solve trigonometric equations, multiple/sub-multiple angle transformations, and properties of triangles',
          'Manipulate complex numbers in modulus-amplitude & Euler form, find square roots, and solve quadratic inequalities',
          'Derive standard equations of Straight Lines, Circles, Parabolas, Ellipses, and Hyperbolas',
          'Evaluate limits using algebraic/trigonometric theorems, compute first-order derivatives from first principles, and calculate standard deviation and axiomatic probability'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Sets, Relations, Trigonometry, Complex Numbers & Algebra',
            description: 'Sets and subsets, Venn diagrams, Relations & Functions, Trigonometric ratios of compound & multiple angles, General solutions of trigonometric equations, Complex numbers in Argand plane, Quadratic equations, Linear inequalities, Permutations & Combinations, and Binomial Theorem.',
            subtopics: [
              'Sets, Relations & Functions (সেট, সম্বন্ধ ও চিত্রণ): Empty set, Universal set, Power set, Set operations (Union, Intersection, Complement, De Morgan’s Laws), Cartesian product A×B, Types of relations (Reflexive, Symmetric, Transitive, Equivalence), Domain, Co-domain, Range, Injective, Surjective & Bijective mapping',
              'Trigonometric Functions & Equations (ত্রিকোণমিতিক অপেক্ষক ও সমীকরণ): Radian measure, Trigonometric identities, Compound angles sin(A±B), cos(A±B), Transformation of sums into products, Multiple & sub-multiple angles (2θ, 3θ, θ/2), General solution of sin θ = sin α, cos θ = cos α, tan θ = tan α, Sine and Cosine rules in triangles',
              'Complex Numbers & Quadratic Equations (জটিল সংখ্যা ও দ্বিঘাত সমীকরণ): Imaginary unit i, Algebraic operations, Modulus and Conjugate, Argand plane, Polar (Modulus-Amplitude) form r(cosθ + i sinθ), Square root of a complex number a+ib, Cube roots of unity (1, ω, ω²), Quadratic equations with complex roots',
              'Linear Inequalities, Combinatorics & Binomial Theorem (অসমীকরণ, বিন্যাস ও দ্বিপদ উপপাদ্য): Graphical solution of linear inequalities in two variables, Fundamental principle of counting, Permutations ⁿPᵣ, Combinations ⁿCᵣ, Pascal’s Triangle, Binomial Theorem for positive integral index (x+a)ⁿ, General and Middle terms'
            ],
            practicalOrActivity: 'Graphing trigonometric functions (sin x, cos x, tan x) and plotting complex numbers with dynamic vectors on Argand plane software'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Coordinate Geometry, Calculus, Statistics & Probability',
            description: 'Sequence & Series (AP, GP, AM, GM), Straight Lines, Conic Sections (Circle, Parabola, Ellipse, Hyperbola), Introduction to 3D Coordinates, Limits & Derivatives (First Principle), Mathematical Reasoning, Statistics (Variance & SD), and Axiomatic Probability.',
            subtopics: [
              'Sequence & Series (প্রগতি ও শ্রেণি): Arithmetic Progression (AP), Geometric Progression (GP), Arithmetic & Geometric Means (AM ≥ GM), Infinite GP series sum, Sum of first n natural numbers, squares (Σn²) and cubes (Σn³)',
              'Straight Lines & Conic Sections (সরলরেখা ও কনিক): Slope of line, Various forms (Slope-intercept, Intercept, Normal form x cosα + y sinα = p), Angle between two lines, Distance of a point from a line, Family of lines; Standard equations of Circle (x-h)²+(y-k)²=r², Parabola (y²=4ax), Ellipse (x²/a²+y²/b²=1), Hyperbola (x²/a²-y²/b²=1), Eccentricity and latus rectum',
              'Introduction to 3-Dimensional Geometry (ত্রিমাত্রিক স্থানাঙ্ক জ্যামিতি): Coordinate axes and planes in 3D, Distance between two points in 3D, Section formula (internal and external division)',
              'Calculus: Limits & Derivatives (কলনবিদ্যা - সীমা ও অবকলন): Intuitive idea of limits, Standard algebraic and trigonometric limits (lim (sin x)/x = 1 as x→0, lim (eˣ-1)/x = 1), Derivatives of polynomial and trigonometric functions from First Principle (সংজ্ঞা থেকে অন্তরকলন), Product rule, Quotient rule, Chain rule',
              'Statistics & Probability (রাশিবিজ্ঞান ও সম্ভাব্যতা): Measures of dispersion - Range, Mean Deviation, Variance and Standard Deviation (সম্যক বিচ্যুতি) for grouped data; Random experiments, Sample space, Axiomatic definition of probability, Addition theorem of probability P(A∪B)'
            ],
            practicalOrActivity: 'Constructing conic sections using wax paper folding/string method and calculating empirical standard deviation of real experimental physics data'
          }
        ],
        referenceMaterials: ['WBCHSE Uchha Madhyamik Ganit Class 11 (S.N. Dey / Chhaya)', 'NCERT Class 11 Mathematics & Exemplar', 'RD Sharma Class 11 Advanced Edition', 'Biley WBJEE/JEE Math Problem Series'],
        examPattern: 'Semester 1 OMR/MCQ Unit Tests (35 Marks) + Semester 2 Descriptive Annual Exam (80 Marks) + 20 Marks Project & Internal Viva',
        practicalAvailable: true
      },
      {
        id: 'c11-phy',
        name: 'Physics (পদার্থবিদ্যা)',
        code: 'PHY-11',
        iconName: 'Atom',
        color: 'indigo',
        description: 'Semester-wise WBCHSE & CBSE Class 11 Physics: Physical World, Units & Dimensions, Kinematics in 1D & 2D (Vectors, Projectile Motion), Newton’s Laws of Motion & Friction, Work, Energy & Power, Rotational Dynamics (Torque, Moment of Inertia), Universal Gravitation, Mechanical Properties of Solids (Elasticity) & Fluids (Surface Tension, Viscosity, Bernoulli), Thermal Properties & Thermodynamics (Carnot Engine, Heat Transfer), Kinetic Theory of Gases, Oscillations (SHM), and Waves (Sound, Doppler Effect).',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: [
          'Perform dimensional analysis to check equation homogeneity and derive physical relations',
          'Solve kinematics vector problems in 2D projectile motion and uniform circular motion',
          'Apply Newton’s laws with free-body diagrams, friction laws, and work-energy theorem to conservative/non-conservative systems',
          'Calculate moment of inertia using Parallel & Perpendicular Axis theorems and evaluate rotational equilibrium',
          'Derive Bernoulli’s theorem, Stokes’ law, Hooke’s law, Carnot cycle efficiency, and SHM differential equation'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Measurement, Kinematics, Dynamics, Work-Energy & Rotational Motion',
            description: 'Units & dimensions, significant figures, 1D calculus kinematics, vectors (dot/cross products), projectile motion, Newton’s laws, friction & banking of roads, work-energy theorem, collisions, center of mass, and rotational dynamics (moment of inertia).',
            subtopics: [
              'Units, Dimensions & Errors (একক, মাত্রা ও ত্রুটি পরিমাপ): SI system, Dimensional formulas, Principle of homogeneity, Significant figures, Absolute, Relative & Percentage errors, Propagation of errors',
              'Kinematics in 1D & 2D (একমাত্রিক ও দ্বিমাত্রিক গতি): Position-time & velocity-time graphs, Calculus derivations of kinematics equations (v=u+at, s=ut+½at², v²=u²+2as), Vectors addition (Triangle & Parallelogram laws), Resolution of vectors, Dot (scalar) & Cross (vector) products, Projectile motion (Time of flight, Maximum height, Horizontal range), Uniform circular motion & centripetal acceleration (a=v²/r)',
              'Laws of Motion & Friction (গতির সূত্র ও ঘর্ষণ): Newton’s three laws, Inertial vs non-inertial frames, Impulse, Conservation of linear momentum, Static and Kinetic friction, Angle of repose, Laws of friction, Motion of cars on level and banked curved roads',
              'Work, Energy, Power & Rotational Dynamics (কার্য, শক্তি, ক্ষমতা ও ঘূর্ণন গতি): Work done by variable force, Work-Energy Theorem, Conservative forces, Potential energy of spring, 1D & 2D Elastic/Inelastic collisions; Center of mass of two-particle and rigid body systems, Torque (τ = r×F), Angular momentum (L = r×p), Conservation of angular momentum, Moment of Inertia, Theorems of Parallel and Perpendicular axes, Moment of inertia of ring, disc, rod, cylinder and sphere'
            ],
            practicalOrActivity: 'Laboratory experiments with Vernier calipers, Screw gauge, Spherometer, and determination of g using Simple Pendulum'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Gravitation, Properties of Matter, Thermodynamics & Waves',
            description: 'Kepler’s laws, universal gravitation, escape velocity, elasticity (Hooke’s law, Young’s modulus), fluid mechanics (Pascal, Archimedes, Surface tension, Viscosity, Bernoulli), thermal expansion, 1st & 2nd laws of thermodynamics, kinetic theory of gases, simple harmonic motion (SHM), and wave acoustics (Doppler effect).',
            subtopics: [
              'Gravitation (মহাকর্ষ): Kepler’s three laws of planetary motion, Universal Law of Gravitation, Acceleration due to gravity g and its variation with altitude, depth and rotation of earth, Gravitational potential and potential energy, Escape velocity (vₑ = √(2gR)), Orbital velocity of satellites, Geostationary satellites',
              'Mechanical Properties of Solids & Fluids (পদার্থের স্থিতিস্থাপকতা ও প্রবাহী বিদ্যা): Stress-strain curve, Hooke’s Law, Young’s, Bulk and Shear modulus, Poisson’s ratio, Elastic potential energy; Fluid pressure, Pascal’s law, Archimedes’ principle, Surface tension, Angle of contact, Capillary rise formula, Viscosity, Coefficient of viscosity, Stokes’ law, Terminal velocity, Streamline vs turbulent flow, Equation of continuity, Bernoulli’s Theorem and its applications (Venturimeter, Magnus effect)',
              'Thermal Properties, Thermodynamics & Kinetic Theory (তাপগতিবিদ্যা ও গ্যাসীয় তত্ত্ব): Heat and temperature, Thermal expansion, Specific heat capacity, Calorimetry, Latent heat; Zeroth Law, First Law of Thermodynamics (ΔQ = ΔU + ΔW), Isothermal and Adiabatic processes (PVᵞ = const), Work done in gas expansion, Second Law of Thermodynamics, Reversible and irreversible processes, Carnot Heat Engine and efficiency; Kinetic Theory of ideal gases, RMS speed, Degrees of freedom, Law of equipartition of energy',
              'Oscillations & Waves (দোলন ও তরঙ্গ): Simple Harmonic Motion (SHM), Differential equation of SHM d²x/dt² + ω²x = 0, Displacement, Velocity, Acceleration, Kinetic & Potential energy of SHM, Spring-mass system, Simple pendulum; Longitudinal and Transverse waves, Speed of sound in gases (Laplace correction), Principle of superposition, Standing/Stationary waves in stretched strings and organ pipes, Resonance, Beats, Doppler effect in sound'
            ],
            practicalOrActivity: 'Determining Young’s modulus of a wire by Searle’s apparatus, Coefficient of viscosity of water by Poiseuille’s method, and Surface tension of water by capillary rise'
          }
        ],
        referenceMaterials: ['Concepts of Physics (Vol 1) by Dr. H.C. Verma', 'WBCHSE Uccho Madhyamik Padartha Vidya Class 11 (Chhaya / Santra)', 'NCERT Class 11 Physics (Part 1 & 2)', 'D.C. Pandey Physics Series for JEE/WBJEE'],
        examPattern: 'Semester 1 OMR/Objective Exam (35 Marks) + Semester 2 Theory Board Exam (70 Marks) + 30 Marks Practical Lab & Viva Voce',
        practicalAvailable: true
      },
      {
        id: 'c11-chem',
        name: 'Chemistry (রসায়ন)',
        code: 'CHEM-11',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Semester-wise WBCHSE & CBSE Class 11 Chemistry: Basic Concepts of Chemistry (Mole Concept, Stoichiometry), Structure of Atom (Quantum Numbers, Orbitals), Classification of Elements & Periodic Trends, Chemical Bonding & Molecular Structure (VSEPR, Hybridization, MOT), Chemical Thermodynamics (Hess’s Law, Gibbs Energy), Chemical & Ionic Equilibrium (pH, Buffers, Ksp), Redox Reactions, Organic Chemistry Fundamentals (IUPAC, Reaction Intermediates, Electronic Effects), and Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatic Benzene).',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: [
          'Calculate molarity, molality, mole fraction, limiting reagent, and stoichiometric yields',
          'Apply Bohr model, de Broglie relation, Heisenberg uncertainty, and quantum number rules (Aufbau, Pauli, Hund)',
          'Predict molecular geometries via VSEPR, determine hybridization, and draw Molecular Orbital (MOT) energy level diagrams',
          'Calculate enthalpy changes via Hess’s law, evaluate entropy and Gibbs free energy for reaction spontaneity',
          'Solve chemical equilibrium (Kc, Kp) and ionic equilibrium (pH, buffer solutions, solubility product Ksp) problems',
          'Write IUPAC names, identify inductive/mesomeric/hyperconjugation effects, and execute hydrocarbon reaction mechanisms'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Basic Concepts, Atomic Structure, Periodic Trends & Chemical Bonding',
            description: 'Mole concept, stoichiometry, empirical/molecular formula, atomic models, de Broglie & Heisenberg principles, quantum numbers, periodic table trends, Lewis structures, VSEPR theory, hybridization, and Molecular Orbital Theory (MOT).',
            subtopics: [
              'Some Basic Concepts of Chemistry (রসায়নের প্রাথমিক ধারণা): Matter and its classification, Dalton’s atomic theory, Atomic and molecular mass, Mole concept, Molar mass, Percentage composition, Empirical and Molecular formula, Stoichiometric calculations and Limiting Reagent in chemical reactions',
              'Structure of Atom (পরমাণুর গঠন): Discovery of subatomic particles, Rutherford’s model and its limitations, Bohr’s model of Hydrogen atom, Dual nature of matter (de Broglie equation λ = h/mv), Heisenberg’s Uncertainty Principle (Δx·Δp ≥ h/4π), Quantum numbers (n, l, m, s), Shapes of s, p, d orbitals, Aufbau principle, Pauli’s Exclusion Principle, Hund’s Rule of maximum multiplicity, Electronic configuration of elements',
              'Classification of Elements & Periodicity (পর্যায় সারণি ও ধর্মের পর্যায়বৃত্ততা): Modern Periodic Law and present form of periodic table, Periodic trends in properties of elements: Atomic radii, Ionic radii, Ionization enthalpy (IE), Electron gain enthalpy (EGE), Electronegativity (Pauling scale), Valency and anomalous properties of second period elements',
              'Chemical Bonding & Molecular Structure (রাসায়নিক বন্ধন ও আণবিক গঠন): Octet rule and Lewis dot structures, Ionic bond, Lattice energy, Born-Haber cycle; Covalent bond, Electronegativity and dipole moment, Fajan’s Rules; VSEPR Theory (shapes of BeCl₂, BF₃, CH₄, NH₃, H₂O, PCl₅, SF₆), Valence Bond Theory (VBT), Hybridization (sp, sp², sp³, sp³d, sp³d²), Molecular Orbital Theory (MOT) of homonuclear diatomic molecules (H₂, He₂, B₂, C₂, N₂, O₂, F₂), Bond order, Magnetic behavior, Hydrogen bonding (intermolecular vs intramolecular)'
            ],
            practicalOrActivity: 'Preparation of standard 0.1 M Oxalic Acid solution and acid-base volumetric titration against Sodium Hydroxide using phenolphthalein'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Thermodynamics, Equilibrium, Redox, Organic Basics & Hydrocarbons',
            description: 'First & second laws of thermodynamics, enthalpy, entropy, Gibbs energy, chemical & ionic equilibrium, redox balancing, electronic displacement effects, IUPAC nomenclature, reaction intermediates, and alkanes/alkenes/alkynes/benzene.',
            subtopics: [
              'Chemical Thermodynamics (রাসায়নিক তাপগতিবিদ্যা): Concepts of system, surroundings, types of systems, State functions, Extensive vs Intensive properties, First Law of Thermodynamics (ΔU = q + w), Enthalpy (H = U + PV), Heat capacity and specific heat, Hess’s Law of constant heat summation, Enthalpy of reaction, combustion, formation, atomization, phase transition; Spontaneity, Entropy (S), Second Law of Thermodynamics, Gibbs Free Energy (ΔG = ΔH - TΔS) and spontaneity criterion',
              'Equilibrium - Chemical & Ionic (সাম্যাবস্থা): Dynamic nature of chemical equilibrium, Law of Chemical Equilibrium, Equilibrium constants Kc and Kp (Kp = Kc(RT)ᵝⁿ), Le Chatelier’s Principle (effect of concentration, temperature, pressure, catalyst); Ionic Equilibrium: Arrhenius, Bronsted-Lowry & Lewis concepts of acids and bases, Ionization of weak acids/bases, Ostwald’s dilution law, Ionic product of water (Kw = 10⁻¹⁴), pH scale, Buffer solutions (Henderson-Hasselbalch equation), Common ion effect, Solubility product (Ksp) and applications in qualitative analysis',
              'Redox Reactions (জারণ-বিজারণ বিক্রিয়া): Concept of oxidation and reduction, Oxidation numbers, Rules for calculating oxidation numbers, Balancing redox equations by Ion-Electron (Half-Reaction) and Oxidation Number methods',
              'Organic Chemistry: Basic Principles & Techniques (জৈব রসায়নের মূল তত্ত্ব): IUPAC nomenclature of acyclic and cyclic organic compounds with functional groups (-OH, -CHO, >C=O, -COOH, -NH₂, -COOR, -CONH₂); Structural and stereoisomerism; Fission of covalent bond (homolytic and heterolytic), Carbocations, Carbanions, Free radicals stability; Electronic displacements: Inductive effect (+I, -I), Electromeric effect, Resonance/Mesomeric effect (+M, -M), Hyperconjugation; Types of organic reactions (Substitution, Addition, Elimination, Rearrangement)',
              'Hydrocarbons (হাইড্রোকার্বন): Alkanes: Conformational analysis of Ethane (Sawhorse and Newman projections), Free radical chlorination of methane; Alkenes: Structure of double bond, Geometrical isomerism (cis-trans), Preparation, Chemical reactions: Addition of hydrogen, halogens, water, Markownikoff’s and Anti-Markownikoff’s (Peroxide/Kharasch) additions, Ozonolysis of alkenes; Alkynes: Structure of triple bond, Acidic character of ethyne, Addition of H₂, X₂, H₂O; Aromatic Hydrocarbons: Structure of Benzene, Resonance, Aromaticity (Hückel’s 4n+2 rule), Electrophilic aromatic substitution mechanism (Nitration, Sulphonation, Halogenation, Friedel-Crafts Alkylation & Acylation), Directive influence of substituents'
            ],
            practicalOrActivity: 'Qualitative analysis of single salt (detection of one cation such as Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, NH₄⁺ and one anion such as CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, Cl⁻) and chemical test for unsaturation'
          }
        ],
        referenceMaterials: ['WBCHSE Uccho Madhyamik Rasayan Class 11 (Chhaya / Santra)', 'NCERT Class 11 Chemistry (Part 1 & 2)', 'O.P. Tandon Physical, Organic & Inorganic Chemistry', 'M.S. Chouhan Advanced Problems in Organic Chemistry'],
        examPattern: 'Semester 1 OMR Objective Paper (35 Marks) + Semester 2 Theory Board Exam (70 Marks) + 30 Marks Practical Lab & Qualitative Viva',
        practicalAvailable: true
      },
      {
        id: 'c11-bio',
        name: 'Biology (জীববিজ্ঞান - Botany & Zoology)',
        code: 'BIO-11',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Semester-wise WBCHSE & CBSE Class 11 Biology: Diversity in the Living World (Systematics, 5 Kingdoms, Plant & Animal Kingdoms), Structural Organisation in Animals & Plants (Anatomy, Tissues, Cockroach), Cell Biology & Biomolecules (Cell Organelles, Enzymes, Cell Division Mitosis & Meiosis), Plant Physiology (Photosynthesis C3/C4, Respiration Glycolysis/Krebs/ETS, Plant Growth Regulators), and Human Physiology (Digestion, Breathing & Gas Exchange, Body Fluids & Circulation, Excretory System & Nephron, Locomotion & Muscle Contraction, Neural Control & Endocrine Glands).',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: [
          'Classify organisms across domains and 5 kingdoms, distinguishing Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms, and Animal phyla',
          'Describe anatomy of dicot and monocot roots, stems, leaves, and animal tissue classifications',
          'Explain cell organelle ultrastructure, enzyme kinetics, biomolecular structures, and stages of Mitosis and Meiosis cell divisions',
          'Detail the light reaction, Z-scheme, Calvin cycle (C3), Hatch-Slack pathway (C4), Glycolysis, Krebs cycle, and Oxidative Phosphorylation in plants',
          'Master human organ systems: Pulmonary gas exchange, Cardiac cycle, ECG, Nephron counter-current mechanism, Sliding filament theory, and Hypothalamus-Pituitary endocrine axes'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Living Diversity, Structural Organisation & Cell Biology with Biomolecules',
            description: 'Biological classification, Plant & Animal kingdoms, plant anatomy, animal tissues, morphology of cockroach, cell theory, prokaryotic vs eukaryotic organelles, biomolecules, and cell cycle (Mitosis/Meiosis).',
            subtopics: [
              'Diversity in the Living World (জীবজগতের বৈচিত্র্য): What is living? Biodiversity, Need for classification, Three domains of life, Taxonomy and Systematics, Binomial nomenclature, Taxonomical hierarchy; Five Kingdom classification (Monera, Protista, Fungi, Plantae, Animalia), Lichens, Viruses and Viroids; Plant Kingdom: Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms; Animal Kingdom: Non-chordates (Porifera to Echinodermata, Hemichordata) and Chordates (Cyclostomata to Mammalia)',
              'Structural Organisation in Animals & Plants (উদ্ভিদ ও প্রাণীর দৈহিক গঠন): Plant Anatomy: Meristematic and permanent tissues, Tissue systems, Anatomy of Dicot and Monocot Root, Stem and Leaf, Secondary growth in dicot stems; Animal Tissues: Epithelial, Connective, Muscular, Nervous tissues; Morphology, anatomy and digestive/circulatory/nervous/reproductive systems of Cockroach (Periplaneta americana)',
              'Cell Structure, Biomolecules & Cell Division (কোষ, জৈব অণু ও কোষ বিভাজন): Cell Theory, Structure of Prokaryotic vs Eukaryotic cell, Plant cell vs Animal cell, Cell wall, Cell membrane (Fluid Mosaic Model); Ultrastructure and functions of Endomembrane system (ER, Golgi body, Lysosome, Vacuole), Mitochondria, Plastids (Chloroplast), Ribosomes (70S, 80S), Cytoskeleton, Cilia, Flagella, Centrosome, Nucleus and Chromosomes; Biomolecules: Structure and functions of Carbohydrates (mono-, di-, polysaccharides), Proteins (amino acids, peptide bond, primary/secondary/tertiary/quaternary structure), Lipids, Nucleic Acids (DNA & RNA), Enzymes (chemical nature, lock & key, cofactors, classification, activation energy, Michaelis-Menten kinetics); Cell Cycle & Cell Division: Cell cycle phases (G₁, S, G₂, M phase), Mitosis stages (Prophase, Metaphase, Anaphase, Telophase, Cytokinesis), Meiosis I and Meiosis II, Crossing over, Chiasma formation and biological significance'
            ],
            practicalOrActivity: 'Study of plant tissues and cell division in onion root tip squash under compound microscope; Biochemical tests for sugar, starch, protein, and fat'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Plant Physiology & Human Physiology Systems',
            description: 'Photosynthesis (C3, C4, Photorespiration), Cellular Respiration (Glycolysis, Krebs cycle, ETS), Plant growth hormones, Human respiration, Circulation (Heart, ECG), Excretion (Nephron, Urine formation), Locomotion (Muscles, Skeleton), and Neural & Endocrine regulation.',
            subtopics: [
              'Plant Physiology (উদ্ভিদ শারীরবিদ্যা): Photosynthesis in Higher Plants: Chloroplast pigments, Absorption and action spectra, Light reaction, Photophosphorylation (cyclic and non-cyclic), Z-scheme, Chemiosmotic hypothesis, Dark reaction (Calvin C₃ cycle), Hatch-Slack (C₄) pathway, Photorespiration (C₂ cycle), Factors affecting photosynthesis (Blackman’s law); Respiration in Plants: Glycolysis (EMP pathway), Fermentation, Link reaction, Krebs / TCA cycle, Electron Transport System (ETS) and Oxidative Phosphorylation, Respiratory Quotient (RQ); Plant Growth & Development: Phases of growth, Growth regulators: Auxins, Gibberellins, Cytokinins, Abscisic Acid (ABA), Ethylene, Photoperiodism, Vernalization',
              'Human Physiology - Respiration & Circulation (মানব শারীরবিদ্যা - শ্বসন ও সংবহন): Breathing and Exchange of Gases: Respiratory organs, Mechanism of breathing in humans, Respiratory volumes and capacities (TV, IRV, ERV, RV, VC, TLC), Gas exchange across alveoli, Transport of O₂ (Oxyhaemoglobin dissociation curve) and CO₂, Regulation of respiration; Body Fluids and Circulation: Composition of blood, Blood groups (ABO and Rh), Coagulation of blood, Lymph, Human Circulatory System: Anatomy of human heart, Cardiac cycle, Cardiac output, Electrocardiogram (ECG), Double circulation, Blood vessels, Blood pressure regulation, Disorders (Hypertension, CAD, Angina, Heart failure)',
              'Human Physiology - Excretion, Locomotion, Neural & Endocrine Systems (রেচন, চলন, স্নায়ু ও হরমোন): Excretory Products & Elimination: Modes of excretion (Ammonotelism, Ureotelism, Uricotelism), Human excretory system, Structure of Nephron, Mechanism of urine formation (Glomerular filtration, Selective reabsorption, Tubular secretion), Counter-current multiplier mechanism in Henle’s loop, Regulation of kidney function (RAAS and ANF), Dialysis; Locomotion and Movement: Types of movement, Structure of skeletal muscle, Sliding filament theory of muscle contraction, Human skeletal system (Axial and Appendicular), Types of joints; Neural Control & Coordination: Structure of Neuron, Generation and conduction of nerve impulse, Synapse, Human Central & Peripheral Nervous System, Reflex action; Chemical Coordination & Integration: Human endocrine glands (Hypothalamus, Pituitary, Pineal, Thyroid, Parathyroid, Adrenal, Pancreas, Gonads), Hormones and mechanism of hormone action (peptide vs steroid)'
            ],
            practicalOrActivity: 'Demonstration of rate of transpiration using Ganong’s potometer; Detecting urea and sugar in urine samples; Measuring human arterial blood pressure and pulse rate'
          }
        ],
        referenceMaterials: ['WBCHSE Jibon Bigyan Class 11 (Santra / Chhaya)', 'NCERT Class 11 Biology (Comprehensive)', 'Trueman’s Elementary Biology (Vol 1)', 'Biley Advanced Medical Question Bank'],
        examPattern: 'Semester 1 OMR Objective Evaluation (35 Marks) + Semester 2 Theory Exam (70 Marks) + 30 Marks Practical Lab & Specimen Viva',
        practicalAvailable: true
      },
      {
        id: 'c11-eng',
        name: 'English Language & Literature (ইংরেজি)',
        code: 'ENG-11',
        iconName: 'BookA',
        color: 'teal',
        description: 'Semester-wise WBCHSE & CBSE Class 11 English: Reading Comprehension Mastery, Note Making & Summarizing, Creative Writing Skills (Notices, Classified Advertisements, Posters, Letters to Editor/School Authorities, Speech, Debate), Prescribed Literature (Prose & Poetry), Literary Devices, Dramatic Analysis, and Grammar Transformation.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Read and synthesize complex factual and discursive passages with rapid speed and high analytical precision',
          'Execute structured Note-Making with numbering, indentation, and standard abbreviation keys',
          'Draft high-scoring Classified Advertisements, Formal School Notices, Posters, and Official Correspondence',
          'Analyze themes, character arcs, stylistic prose, and poetic devices in prescribed Class 11 literature'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Advanced Reading Comprehension, Note Making, Short Composition & Literature',
            description: 'Discursive/factual passage analysis, note-making format, notice writing in box format, classified advertisements (Situation Vacant, Lost & Found, Sale & Purchase), and prescribed core literature & poetry.',
            subtopics: [
              'Advanced Reading Comprehension: Strategies for unseen factual and discursive passages, vocabulary deduction in context, inferential questions, title evaluation',
              'Structured Note-Making & Summarizing: Hierarchical note formatting (Headings, Sub-headings, Sub-sub-headings), Indentation rules, Abbreviation key table, 50-word précis summary',
              'Creative Short Writing Skills: Standard box format Notice Writing for school events/competitions, Classified Advertisements (Situation Vacant/Wanted, Sale/Purchase of Property, Lost/Found, To-Let)',
              'Core Literature Studies (WBCHSE / CBSE Prescribed): The Portrait of a Lady (Khushwant Singh), A Photograph (Shirley Toulson), We’re Not Afraid to Die... (Gordon Cook & Alan East), The Summer of the Beautiful White Horse (William Saroyan), The Address (Marga Minco)'
            ],
            practicalOrActivity: 'Timed 25-minute Note-Making workshops and drafting classified advertisements on contemporary school themes'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Long Composition, Speech/Debate, Advanced Grammar & Capstone Literature',
            description: 'Poster designing with catchy slogans, formal letters to the editor / authorities, speech & debate writing, sentence transformation, poetic device analysis, and final literature prose/poetry.',
            subtopics: [
              'Advanced Creative Writing Skills: Poster Designing with slogans and visual layout (Social awareness, Cultural fests), Official Letters (Letter to the Editor of national daily, Application for leave/concession to School Principal), Speech Writing and Debate Writing with opening address, arguments for/against, and formal conclusion',
              'Grammar & Language Mechanics: Sequence of tenses, Complex clause synthesis, Active and Passive voice transformations across difficult moods, Error detection and editing, Sentence rearrangement',
              'Literature & Drama Studies: Discovering Tut: The Saga Continues (A.R. Williams), The Laburnum Top (Ted Hughes), The Voice of the Rain (Walt Whitman), Childhood (Markus Natten), Father to Son (Elizabeth Jennings), Mother’s Day (J.B. Priestley), Birth (A.J. Cronin), The Tale of Melon City (Vikram Seth)',
              'Literary Device Mastery: Critical appreciation of poetic devices (Metaphor, Simile, Personification, Alliteration, Onomatopoeia, Transferred Epithet, Irony, Oxymoron)'
            ],
            practicalOrActivity: 'Inter-batch debate competitions and staging dramatic extracts from Mother’s Day in the classroom'
          }
        ],
        referenceMaterials: ['WBCHSE English B Textbook Class 11', 'CBSE Hornbill & Snapshots Class 11', 'Wren & Martin High School English Grammar & Composition', 'Biley HS English Blueprint'],
        examPattern: 'Semester 1 Objective / Reading & Writing Test (40 Marks) + Semester 2 Descriptive 80-Mark Annual Board Paper + 20 Marks Oral ASL / Project',
        practicalAvailable: false
      },
      {
        id: 'c11-coma',
        name: 'Computer Application (কম্পিউটার অ্যাপ্লিকেশন - COMA)',
        code: 'COMA-11',
        iconName: 'Laptop',
        color: 'cyan',
        description: 'Semester-wise WBCHSE & CBSE Class 11 Modern Computer Application: Evolution of Computers, Architecture of CPU & Memory, Number Systems & Binary Arithmetic, Boolean Algebra & Logic Gates (Basic, Universal & Combinational), Operating System Architecture (CLI vs GUI), Word Processing (MS Word), Spreadsheets (MS Excel Formulas & Charts), Presentation Software (MS PowerPoint), DBMS Fundamentals (MS Access), and Internet & HTML Web Design.',
        weeklyHours: 6,
        totalModules: 14,
        learningOutcomes: [
          'Understand computer hardware organization, memory hierarchy (Cache, RAM, ROM), and bus architectures',
          'Convert between Binary, Octal, Decimal, and Hexadecimal, and perform 1’s/2’s complement binary subtraction',
          'Prove Boolean algebra theorems, simplify expressions using algebraic postulates and truth tables, and design logic circuits',
          'Master MS Excel advanced formulas (SUM, AVERAGE, IF, VLOOKUP, COUNTIF, PMT) and dynamic charting',
          'Create relational database tables in MS Access with primary keys, forms, queries, and reports',
          'Develop styled multi-page web documents using semantic HTML5 tags and hyperlinks'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): Evolution, Hardware Architecture, Number Systems & Boolean Algebra',
            description: 'Generations of computers, CPU components, primary & secondary storage, binary-octal-hexadecimal conversions, binary arithmetic (2’s complement), Boolean postulates, De Morgan’s laws, and logic gates.',
            subtopics: [
              'Computer Fundamentals & System Organization (কম্পিউটার সংগঠন): Evolution and generations of computers, Classification of computers (Micro, Mini, Mainframe, Super), Block diagram of computer system: Input Unit, CPU (ALU, CU, Registers), Output Unit; Memory Hierarchy: Cache memory, Primary memory (RAM, ROM, PROM, EPROM, EEPROM), Secondary storage devices (HDD, SSD, Optical Disc, Flash Drive), System Buses (Data Bus, Address Bus, Control Bus)',
              'Number Systems & Data Representation (সংখ্যা পদ্ধতি ও ডেটা উপস্থাপনা): Positional number systems: Binary, Octal, Decimal, Hexadecimal; Number conversions (Base-r to Decimal and vice-versa, Binary-Octal-Hex shortcuts); Fractional number conversions; Binary Arithmetic: Binary addition, subtraction, multiplication; 1’s Complement and 2’s Complement representation and subtraction; Character Encodings: BCD, EBCDIC, ASCII, ISCII, Unicode (UTF-8)',
              'Boolean Algebra & Logic Gates (বুলিয়ান বীজগণিত ও লজিক গেট): Boolean constants and variables, Truth tables, Boolean Postulates, Principle of Duality, Boolean Theorems: Identity, Idempotent, Involution, Complement, Commutative, Associative, Distributive, Absorption laws; De Morgan’s Theorems and proofs; Canonical SOP (Sum of Products / Minterms) and POS (Product of Sums / Maxterms) forms; Basic Logic Gates: AND, OR, NOT; Universal Gates: NAND, NOR; Special Gates: XOR, XNOR; Designing logic circuits from Boolean expressions and gate realization',
              'Operating System Concepts (অপারেটিং সিস্টেম): Definition and functions of OS (Process management, Memory management, File management, Device management); Types of OS: Single-user, Multi-user, Batch processing, Multi-programming, Time-sharing, Real-time OS; Command Line Interface (DOS/Linux terminal commands) vs Graphical User Interface (Windows)'
            ],
            practicalOrActivity: 'Building digital logic circuits on virtual logic simulators (Logisim) and executing DOS/Command Prompt batch operations'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): MS Office Suite, MS Access DBMS & Web Authoring with HTML',
            description: 'Advanced MS Word formatting & Mail Merge, MS Excel formulas/functions/charts, MS PowerPoint slide design, MS Access relational tables & queries, Internet networking concepts, and HTML web authoring.',
            subtopics: [
              'Word Processing with MS Word (ওয়ার্ড প্রসেসিং): Document creation, editing, text formatting, paragraph alignment, line spacing, bullets & numbering, find and replace; Page setup, headers & footers, page numbering, footnotes/endnotes; Tables: creation, merging, splitting, borders and shading; Mail Merge feature: Main document, Data source, Merging records to create personalized letters, envelopes and labels; Macros creation and execution',
              'Spreadsheet Analysis with MS Excel (স্প্রেডশিট অ্যানালাইসিস): Workbook and worksheets, Cells, rows, columns, ranges; Cell referencing: Relative, Absolute ($A$1), Mixed; Data types (Text, Number, Date, Currency); Built-in Formulas and Functions: Mathematical (SUM, PRODUCT, ROUND, SQRT, MOD), Statistical (AVERAGE, COUNT, COUNTA, COUNTIF, MAX, MIN), Logical (IF, AND, OR, NOT), Lookup & Reference (VLOOKUP, HLOOKUP); Sorting and Auto-filtering data; Chart Wizard: Column, Bar, Line, Pie charts customization; Pivot Tables basics',
              'Presentation with MS PowerPoint (পাওয়ারপয়েন্ট উপস্থাপনা): Slide layout, slide master, design templates, text boxes, inserting images, shapes, SmartArt; Slide transitions and custom animations; Slide show settings, rehearsal timings, presenter view',
              'Database Management with MS Access (ডেটাবেস ম্যানেজমেন্ট): Concept of database and DBMS, Tables, Fields, Records, Data types (Short Text, Number, Date/Time, AutoNumber, Currency); Primary Key and Foreign Key constraints; Creating relationships between tables (One-to-One, One-to-Many); Designing Queries using Query Design View and SQL view; Creating Data Entry Forms and Printable Reports with groupings',
              'Internet & Web Design with HTML (ইন্টারনেট ও এইচটিএমএল): Concepts of Computer Networks (LAN, MAN, WAN), Client-Server architecture; Internet services (WWW, E-mail, FTP, Telnet, VoIP); Web browsers and search engines, URLs, IP addresses, Domain Name System (DNS); HTML Web Authoring: Basic structure (<html>, <head>, <title>, <body>), Text formatting tags (<b>, <i>, <u>, <h1>-<h6>, <p>, <br>, <hr>), Lists (<ol>, <ul>, <li>), Inserting images (<img> with src, alt, width, height), Hyperlinks (<a> with href), Tables (<table>, <tr>, <th>, <td>, border, colspan, rowspan)'
            ],
            practicalOrActivity: 'Hands-on laboratory exam: Executing MS Word Mail Merge, creating an automated Excel Payroll/Marksheet sheet with IF/VLOOKUP, designing an Access database query, and writing a complete HTML web page'
          }
        ],
        referenceMaterials: ['WBCHSE Modern Computer Application Class 11 (Chhaya / Santra / BB Publication)', 'NCERT Computer Applications Class 11', 'Biley Computer Application Practical Laboratory Workbook'],
        examPattern: 'Semester 1 Objective Test (35 Marks) + Semester 2 Theory Exam (70 Marks) + 30 Marks Practical Lab Exam (Word/Excel/Access/HTML on machine + Viva + Lab Note-Book)',
        practicalAvailable: true
      },
      {
        id: 'c11-coms',
        name: 'Computer Science (কম্পিউটার সায়েন্স - COMS)',
        code: 'COMS-11',
        iconName: 'Code',
        color: 'violet',
        description: 'Semester-wise WBCHSE & CBSE Class 11 Computer Science: Computer System Overview & Boolean Logic, Number Systems & Binary Encodings, Computational Thinking & Problem Solving (Algorithms, Flowcharts), Comprehensive Python Programming (Variables, Control Flow, Strings, Lists, Tuples, Dictionaries, Functions, Modules), Introduction to C++ / Java (for Board Multi-Language Tracks), and Cyber Safety, Ethics & IT Laws.',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: [
          'Understand computer system architecture, CPU registers, cache memory, and Boolean circuit simplification',
          'Design structured algorithms, flowcharts, and pseudo-code for complex mathematical and string problems',
          'Write Python programs with loops, conditional branches, string slicing, and nested list/dictionary structures',
          'Decompose software problems into modular Python functions with parameter passing and variable scope',
          'Execute file I/O and understand basic Object-Oriented Programming (OOP) paradigms in C++ / Python',
          'Comprehend cyber threats, intellectual property rights, open-source licensing, and digital footprint safety'
        ],
        keyChapters: [
          {
            title: 'Semester 1 (Term 1 / Semester 1): System Architecture, Boolean Logic, Algorithmic Thinking & Python Basics',
            description: 'Von Neumann architecture, CPU components, cache memory, Boolean algebra, logic gates, Karnaugh Maps (K-Maps 2-3 variables), number systems, flowcharts, and fundamental Python programming.',
            subtopics: [
              'Computer System Overview & Architecture: Von Neumann model, CPU organization (ALU, CU, Program Counter, Accumulator, Instruction Register), Memory hierarchy, Cache mapping, Types of software (System, Application, Utility), Operating System role, Translators (Compiler, Interpreter, Assembler)',
              'Boolean Logic & Digital Circuits: Boolean operations, Truth tables, Boolean laws, De Morgan’s laws, Logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR), Combinational circuits (Half Adder, Full Adder), Karnaugh Maps (K-Map minimization for 2 and 3 variable Boolean expressions in SOP form)',
              'Number Systems & Character Encodings: Binary, Octal, Decimal, Hexadecimal conversions; Signed integer representation: Sign-magnitude, 1’s complement, 2’s complement; Fixed point and floating point representations; Encodings: ASCII, ISCII, UNICODE (UTF-8, UTF-16, UTF-32)',
              'Problem Solving & Python Fundamentals: Problem-solving methodology: Understanding the problem, Algorithm development, Flowchart symbols, Pseudo-code, Code writing, Testing & Debugging; Python Language Basics: Python features, Python interactive shell vs script mode, Tokens: Keywords, Identifiers, Literals, Operators (Arithmetic, Relational, Logical, Assignment, Bitwise, Membership `in`/`not in`, Identity `is`/`is not`), Delimiters; Data types: `int`, `float`, `complex`, `bool`, `str`, `list`, `tuple`, `dict`, `set`; Dynamic typing, Mutable vs Immutable data types; `input()` and `print()` with `sep` and `end` parameters; Expressions, Operator precedence, Type conversion (Implicit and Explicit casting)',
              'Conditional & Iterative Statements in Python: Conditional statements: `if`, `if-else`, `if-elif-else`, nested `if`; Iterative statements: `while` loop, `for` loop with `range()` function; Jump statements: `break`, `continue`, `pass`; Nested loops; Algorithmic programs: Prime number check, Fibonacci sequence generation, Factorial, GCD/LCM, Sum of digits, Armstrong number, Number reversal, Star pattern generators'
            ],
            practicalOrActivity: 'Coding 20+ algorithmic Python scripts in VS Code/IDLE and testing edge-case boundary conditions'
          },
          {
            title: 'Semester 2 (Term 2 / Semester 2 & Annual Board Exam): Data Structures, Functions, Modules, OOP Introduction & Cyber Ethics',
            description: 'Python Strings, Lists, Tuples, Dictionaries, user-defined Functions, scope of variables, built-in modules (math, random, statistics), OOP principles in Python/C++, and cyber security laws.',
            subtopics: [
              'Python Data Structures - Strings & Lists: Strings: Creation, indexing, negative indexing, slicing (`[start:stop:step]`), concatenation, repetition, membership, String methods (`len()`, `capitalize()`, `title()`, `upper()`, `lower()`, `count()`, `find()`, `index()`, `replace()`, `join()`, `split()`, `isdigit()`, `isalpha()`, `isalnum()`, `strip()`); Lists: List creation, indexing, slicing, mutability, List methods (`append()`, `extend()`, `insert()`, `pop()`, `remove()`, `clear()`, `index()`, `count()`, `sort()`, `reverse()`), List comprehension, Nested lists, Linear search in list, Bubble sort implementation',
              'Python Data Structures - Tuples & Dictionaries: Tuples: Immutability, creation, indexing, slicing, Tuple packing and unpacking, Tuple methods (`count()`, `index()`); Dictionaries: Concept of key-value pairs, mutability, creating dictionaries, accessing values, Dictionary methods (`keys()`, `values()`, `items()`, `get()`, `update()`, `pop()`, `popitem()`, `clear()`), Nested dictionaries, Frequency count of characters and words in text',
              'Functions in Python & Modular Programming: Concept of modular programming, Function definition with `def`, Function call, Passing arguments: Positional arguments, Default arguments, Keyword arguments, Variable-length arguments (`*args`, `**kwargs`); Return values, Returning multiple values as tuple; Scope and Lifetime of variables: Local vs Global scope, `global` keyword; Recursion: Recursive function definition, Base case, Recursive factorial and Fibonacci',
              'Python Built-in Modules & Packages: Importing modules (`import module`, `from module import func`), Standard library modules: `math` (sqrt, pow, sin, cos, ceil, floor, factorial), `random` (random, randint, randrange, choice, shuffle), `statistics` (mean, median, mode); Creating and importing custom user-defined modules',
              'Introduction to OOPs (C++ / Python) & Cyber Safety: Object-Oriented Programming principles: Class, Object, Encapsulation, Data Hiding, Abstraction, Inheritance, Polymorphism; Basic Class creation in Python with `__init__()` and methods; Society, Law and Ethics: Digital footprint, Digital property rights, Open Source Software (FOSS, GPL, Creative Commons), Cyber Crime (Phishing, Identity theft, Ransomware, Cyber stalking, Hacking vs Cracking), Cyber safety measures, Indian Information Technology (IT) Act 2000'
            ],
            practicalOrActivity: 'Developing a complete terminal-based Student Record or Banking Application with modular functions and automated dictionary searching'
          }
        ],
        referenceMaterials: ['Computer Science with Python by Sumita Arora / Preeti Arora (Class 11)', 'WBCHSE Computer Science Class 11 (Chhaya / Santra)', 'NCERT Class 11 Computer Science', 'Biley CodeLab Python Master Series'],
        examPattern: 'Semester 1 OMR Objective Paper (35 Marks) + Semester 2 Theory Exam (70 Marks) + 30 Marks Practical Programming Exam (Python coding on machine + Viva Voce + Project Lab Journal)',
        practicalAvailable: true
      }
    ]
  },

  // =========================================================================
  // CLASS 12 (Higher Secondary - WBCHSE Semester 3 & 4 + CBSE Board Exam)
  // =========================================================================
  {
    gradeNumber: 12,
    gradeLabel: 'Class 12 (WBCHSE Uchha Madhyamik & CBSE Board)',
    category: 'higher_secondary',
    ageGroup: '17 - 18 Years',
    academicFocus: '100% Board Examination Target (WBCHSE Uchha Madhyamik Pariksha & CBSE Class 12 Board) + Top Percentile in JEE Advanced, WBJEE, CUET & Entrance Ranks',
    weeklySchedulePreview: { days: 'Mon to Sat', timings: '3:00 PM - 8:45 PM', mode: 'Advanced Theoretical Derivations + Full Laboratory Practicals + 10-Year Solved Board Archive Clinics' },
    subjects: [
      {
        id: 'c12-math',
        name: 'Mathematics (গণিত)',
        code: 'MATH-12',
        iconName: 'Calculator',
        color: 'blue',
        description: 'Semester-wise WBCHSE (Semester 3 & 4) & CBSE Class 12 Mathematics: Relations & Functions (Equivalence, Bijective, Invertible), Inverse Trigonometric Functions, Matrices & Determinants (System of Linear Equations), Continuity & Differentiability (Chain Rule, Parametric, Logarithmic, Second Derivative), Applications of Derivatives (Tangents, Normals, Maxima & Minima), Indefinite & Definite Integrals (Properties, Leibniz Rule), Applications of Integrals (Area under Curves), Differential Equations (Separable, Homogeneous, Linear Integrating Factor), Vector Algebra & 3D Geometry (Lines, Planes, Shortest Distance), Linear Programming (LPP Graphical Optimization), and Probability (Bayes’ Theorem, Probability Distributions).',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: [
          'Score 98%+ in Higher Secondary Board Examination (WBCHSE Uchha Madhyamik & CBSE Class 12)',
          'Master Relations, Inverse Trigonometry principal branches, Matrix inverse by Adjoint/Elementary transformations, and Cramer’s Rule',
          'Evaluate complex derivatives, determine rate of change, and solve multi-step geometric Maxima-Minima optimization problems',
          'Compute definite integrals via substitution and symmetry properties, and calculate areas between curves (circles, parabolas, ellipses)',
          'Solve first-order linear differential equations with Integrating Factor (IF) and model real-world growth/decay systems',
          'Formulate 3D line/plane equations, calculate shortest distance between skew lines, and apply Bayes’ Theorem to conditional probability'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Analytical Core): Relations, Inverse Trig, Matrices, Determinants & Differential Calculus',
            description: 'Equivalence relations, composite & invertible functions, principal value branches of inverse trigonometric functions, matrix algebra, determinants properties, matrix method for linear systems, continuity, and derivatives.',
            subtopics: [
              'Relations & Functions (সম্বন্ধ ও অপেক্ষক): Types of Relations: Reflexive, Symmetric, Transitive and Equivalence Relations; Types of Functions: One-one (Injective), Onto (Surjective) and Bijective Functions; Composition of functions (fog, gof), Invertible functions and inverse mapping f⁻¹',
              'Inverse Trigonometric Functions (বিপরীত বৃত্তীয় অপেক্ষক): Definition, Range, Domain, Principal Value Branches of sin⁻¹x, cos⁻¹x, tan⁻¹x, cosec⁻¹x, sec⁻¹x, cot⁻¹x; Properties of inverse trigonometric functions: sin⁻¹(1/x) = cosec⁻¹x, sin⁻¹(-x) = -sin⁻¹x, sin⁻¹x + cos⁻¹x = π/2, tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)), 2tan⁻¹x identities',
              'Matrices (ম্যাট্রিক্স): Concept, notation, order, types of matrices (Zero, Column, Row, Square, Diagonal, Scalar, Identity); Operations: Addition, scalar multiplication, Matrix multiplication properties (non-commutative AB ≠ BA); Transpose of matrix, Symmetric and Skew-symmetric matrices; Elementary row and column operations; Invertible matrices and uniqueness of inverse',
              'Determinants (নির্ণায়ক): Determinant of a square matrix (up to 3×3), Properties of determinants (row/column operations, splitting); Minors and Cofactors; Adjoint of matrix adj(A); Inverse of matrix A⁻¹ = adj(A)/|A|; Consistency of linear equations, Solving system of linear equations in 2 or 3 variables using Matrix Method (X = A⁻¹B) and Cramer’s Rule',
              'Continuity & Differentiability (সন্ততি ও অবকলনযোগ্যতা): Continuity at a point and in an interval, Discontinuity types; Differentiability, Derivative of composite functions (Chain Rule), Derivative of implicit functions, Derivative of inverse trigonometric functions, Logarithmic differentiation (y = uᵛ), Derivative of parametric functions (dx/dt, dy/dt), Second order derivatives d²y/dx², Rolle’s and Lagrange’s Mean Value Theorems'
            ],
            practicalOrActivity: 'Graphing inverse trigonometric functions and verifying continuity of piecewise defined functions using calculus plotting tools'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): Applications of Derivatives, Integrals, Differential Equations, Vectors, 3D Geometry, LPP & Probability',
            description: 'Maxima/Minima word problems, indefinite/definite integrals, area bounded by curves, linear differential equations, vectors, 3D geometry (skew lines, shortest distance, planes), LPP optimization, and Bayes’ Theorem.',
            subtopics: [
              'Applications of Derivatives (অন্তরকলনের প্রয়োগ): Rate of change of quantities (dy/dt), Increasing and Decreasing functions, Tangents and Normals to curves (equations of tangent and normal, slope m = dy/dx); Maxima and Minima: First Derivative Test, Second Derivative Test, Word problems on geometric optimization (cylinders inscribed in cones, maximum volume boxes, cost minimization)',
              'Indefinite & Definite Integrals (সমাকলন - অনির্দিষ্ট ও নির্দিষ্ট সমাকলন): Integration as inverse process of differentiation; Integration by Substitution; Integration using Trigonometric Identities; Integration by Partial Fractions; Integration by Parts (ILATE rule); Integrals of standard forms (dx/(x²±a²), dx/√(a²-x²), √(a²±x²)dx); Definite Integrals: Fundamental Theorem of Calculus, Evaluation of definite integrals by substitution, 8 Standard Properties of definite integrals (e.g. ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx, even/odd function properties)',
              'Applications of Integrals (সমাকলনের প্রয়োগ - ক্ষেত্রফল নির্ণয়): Area under simple curves (lines, circles, parabolas, standard ellipses), Area bounded between a parabola and a line, Area between two intersecting parabolas/curves using vertical and horizontal strip integration',
              'Differential Equations (অবকল সমীকরণ): Order and Degree of differential equations; Formation of differential equation whose general solution is given; Solution of differential equations: Variable Separable method, Homogeneous differential equations of first order and first degree (y = vx substitution), Linear Differential Equations of the form dy/dx + Py = Q (Integrating Factor IF = e^∫Pdx, y·IF = ∫(Q·IF)dx + C)',
              'Vector Algebra & 3-Dimensional Geometry (ভেক্টর বীজগণিত ও ত্রিমাত্রিক জ্যামিতি): Vectors and scalars, Direction cosines and direction ratios (l, m, n and a, b, c where l² + m² + n² = 1); Types of vectors; Position vector of a point, Section formula; Scalar (Dot) product of two vectors, Projection of a vector on a line, Vector (Cross) product, Scalar Triple Product [a b c] and coplanarity of vectors; 3D Geometry: Vector and Cartesian equations of a line passing through one/two points, Angle between two lines, Shortest distance between two skew lines (d = |(a₂-a₁)·(b₁×b₂)| / |b₁×b₂|), Distance between parallel lines; Equations of a Plane in normal form, passing through a point perpendicular to a given vector, passing through 3 non-collinear points; Intersecting line of two planes, Coplanarity of two lines',
              'Linear Programming (রৈখিক প্রোগ্রামবিধি - LPP): Introduction, Mathematical formulation of Linear Programming Problems (LPP - Manufacturing, Diet, Transportation problems); Graphical method of solution for two-variable LPP: Feasible and infeasible regions, Bounded and unbounded feasible regions; Corner Point Method to find optimal solution (Maximum or Minimum Z = ax + by)',
              'Probability (সম্ভাব্যতা): Conditional Probability P(A|B) = P(A∩B)/P(B), Multiplication theorem on probability, Independent events P(A∩B) = P(A)·P(B); Total Probability Theorem, Bayes’ Theorem (বায়েসের উপপাদ্য); Random variables and its Probability Distribution, Mean (Mathematical Expectation E(X)) and Variance of a random variable, Bernoulli trials and Binomial distribution P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ'
            ],
            practicalOrActivity: 'Formulating and solving multi-variable Linear Programming real-world optimization problems on graph paper and verifying with simplex software'
          }
        ],
        referenceMaterials: ['WBCHSE Uchha Madhyamik Ganit Class 12 (S.N. Dey / Chhaya)', 'NCERT Class 12 Mathematics (Part 1 & 2) & Exemplar', 'RD Sharma Class 12 Mathematics Series', 'Biley 15-Year Solved WBCHSE & CBSE Board Archive'],
        examPattern: 'Semester 3 MCQ/OMR Board Exam (35 Marks) + Semester 4 Full Descriptive HS Board Exam (80 Marks) + 20 Marks Project Viva',
        practicalAvailable: true
      },
      {
        id: 'c12-phy',
        name: 'Physics (পদার্থবিদ্যা)',
        code: 'PHY-12',
        iconName: 'Atom',
        color: 'indigo',
        description: 'Semester-wise WBCHSE (Semester 3 & 4) & CBSE Class 12 Physics: Electrostatics (Gauss’s Law, Capacitance), Current Electricity (Kirchhoff’s Laws, Potentiometer, Metre Bridge), Magnetic Effects of Current & Magnetism (Biot-Savart, Ampere’s Law, Cyclotron, Galvanometer, Earth’s Magnetism), Electromagnetic Induction & Alternating Currents (LCR Resonance, Transformer, AC Generator), Electromagnetic Waves, Ray Optics & Optical Instruments (Lens Maker’s Formula, Compound Microscope, Astronomical Telescope), Wave Optics (Huygens’ Principle, YDSE Interference, Diffraction), Dual Nature of Radiation & Matter (Photoelectric Effect), Atoms & Nuclei (Bohr Model, Radioactivity, Nuclear Fission/Fusion), and Semiconductor Electronics (p-n Junction Diodes, Rectifiers, Zener Diode, Logic Gates).',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: [
          'Calculate electric flux using Gauss’s law and derive fields for spherical shells, infinite wires, and planar sheets',
          'Analyze complex DC circuits with Kirchhoff’s laws and evaluate AC LCR series resonance and power factor',
          'Derive Lens Maker’s formula, prism deviation, and Huygens wave reflection/refraction proofs',
          'Calculate fringe width in Young’s Double Slit Experiment (YDSE) and resolve diffraction minima',
          'Apply Einstein’s photoelectric equation, compute de Broglie wavelengths, and calculate nuclear binding energy mass defects',
          'Draw forward/reverse V-I characteristics of semiconductor diodes, explain full-wave rectifiers, and design logic gate combinational circuits'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Core Electromagnetism): Electrostatics, Current Electricity & Magnetism',
            description: 'Coulomb’s law, Gauss’s theorem, electric potential, capacitors, Ohm’s law microscopic derivation, Kirchhoff’s circuit rules, Biot-Savart law, Ampere’s circuital law, moving coil galvanometer, and magnetic properties of materials.',
            subtopics: [
              'Electrostatics - Electric Charges & Fields (স্থির তড়িৎ - আধান ও ক্ষেত্র): Electric charges, Conservation and Quantization of charge (q = ±ne), Coulomb’s Law in vector form, Superposition principle; Electric field, Electric field lines properties, Electric dipole, Dipole moment (p = 2aq), Electric field due to dipole at axial (E = 2kp/r³) and equatorial (E = kp/r³) points, Torque on dipole in uniform field (τ = p×E); Electric Flux (Φ = ∫E·dA), Gauss’s Theorem and its applications: Field due to infinitely long straight wire (E = λ/2πε₀r), Field due to uniformly charged infinite plane sheet (E = σ/2ε₀), Field due to uniformly charged thin spherical shell (inside, on surface, outside)',
              'Electrostatics - Potential & Capacitance (স্থির তড়িৎ বিভব ও ধারকত্ব): Electric potential, Potential difference, Potential due to point charge and electric dipole, Equipotential surfaces and their properties, Relation between field and potential (E = -dV/dr), Potential energy of system of charges and dipole in field; Conductors and insulators, Free and bound charges, Dielectrics and electric polarization; Capacitors and Capacitance, Capacitance of parallel plate capacitor (C = ε₀A/d), Effect of dielectric slab on capacitance (C = Kε₀A/d), Series and Parallel combination of capacitors, Energy stored in capacitor (U = ½CV² = Q²/2C), Van de Graaff generator working principle',
              'Current Electricity (চলতড়িৎ): Electric current, Drift velocity (v_d = -eEτ/m), Mobility (μ = v_d/E), Relation between current and drift velocity (I = n e A v_d), Ohm’s Law microscopic derivation, Electrical resistivity and conductivity, Temperature dependence of resistance (R_t = R₀(1+αt)), Carbon resistors color coding, Series and Parallel combinations of resistors; Internal resistance of a cell, EMF and Terminal Potential Difference, Cells in series and parallel; Kirchhoff’s Circuit Laws (KCL and KVL) and applications to complex network analysis, Wheatstone Bridge principle and condition for balance (P/Q = R/S), Metre Bridge experiments, Potentiometer principle, comparison of EMF of two cells, determination of internal resistance of cell',
              'Magnetic Effects of Current & Magnetism (তড়িৎ-চৌম্বকীয় ফল ও চুম্বকত্ব): Concept of magnetic field, Oersted’s experiment; Biot-Savart Law and its applications: Magnetic field on the axis and center of circular current loop, Magnetic field due to straight current carrying conductor; Ampere’s Circuital Law and its application to infinitely long straight wire and Solenoid/Toroid; Force on moving charge in magnetic field (Lorentz force F = q(E + v×B)), Motion of charge in magnetic field, Cyclotron principle and frequency; Force on current carrying conductor in magnetic field (F = I L×B), Force between two parallel current carrying conductors (definition of 1 Ampere), Torque on current loop in magnetic field (τ = M×B where M = NIA), Moving Coil Galvanometer (construction, working, current and voltage sensitivity), Conversion of Galvanometer into Ammeter and Voltmeter; Current loop as magnetic dipole, Magnetic dipole moment of revolving electron (Bohr Magneton); Bar magnet as equivalent solenoid, Magnetic field lines; Earth’s Magnetic Field: Elements (Declination, Dip/Inclination, Horizontal component B_H); Magnetic properties of materials: Diamagnetic, Paramagnetic, Ferromagnetic substances (Curie’s Law, Hysteresis B-H loop)'
            ],
            practicalOrActivity: 'Finding resistance of given wire using Metre Bridge; Comparing EMF of two primary cells using Potentiometer; Conversion of Galvanometer into Voltmeter'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): EMI, AC, Optics, Modern Physics & Semiconductor Electronics',
            description: 'Faraday’s law, Lenz’s law, AC series LCR resonance, transformer, EM spectrum, ray optics instruments, wave optics (YDSE), photoelectric effect, Bohr atom, nuclear physics, and semiconductor devices (diodes & logic gates).',
            subtopics: [
              'Electromagnetic Induction & Alternating Currents (তড়িৎ-চৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ): Electromagnetic Induction: Magnetic flux, Faraday’s Laws of Induction, Lenz’s Law and conservation of energy, Motional EMF (e = Blv), Eddy currents and their damping applications; Self-inductance (L), Mutual inductance (M), Inductance of a long solenoid, Energy stored in an inductor (U = ½LI²); Alternating Current (AC): Peak and RMS value of AC (I_rms = I₀/√2, V_rms = V₀/√2), AC voltage applied to pure resistor, inductor, capacitor (phase relations); Series LCR Circuit: Impedance (Z = √(R² + (X_L - X_C)²)), Phasor diagram, Resonance condition (ω₀ = 1/√(LC)), Q-factor, Power in AC circuit (P = V_rms I_rms cos φ), Power Factor, Wattless current; AC Generator and Transformer (step-up and step-down, energy losses in transformer)',
              'Electromagnetic Waves (তড়িৎ-চৌম্বকীয় তরঙ্গ): Displacement Current, Maxwell’s equations overview, Characteristics and transverse nature of EM waves (c = 1/√(μ₀ε₀)); Electromagnetic Spectrum: Radio waves, Microwaves, Infrared, Visible, Ultraviolet, X-rays, Gamma rays - their wavelengths, frequency ranges and technological/medical applications',
              'Ray Optics & Optical Instruments (আলোকবিজ্ঞান - রশ্মি আলোকবিজ্ঞান): Reflection of light, Spherical mirrors, Mirror formula (1/v + 1/u = 1/f); Refraction of light, Snell’s Law, Total Internal Reflection (TIR) and optical fiber applications, Refraction at spherical surfaces, Lens Maker’s Formula (1/f = (μ-1)(1/R₁ - 1/R₂)), Thin lens formula (1/v - 1/u = 1/f), Power of a lens (P = 1/f), Combination of thin lenses in contact; Refraction through a prism (formula μ = sin((A+δ_m)/2) / sin(A/2)); Optical Instruments: Magnifying glass (Simple microscope), Compound Microscope (magnification formula), Astronomical Telescope (refracting and reflecting - Cassegrain) and resolving power',
              'Wave Optics (তরঙ্গ আলোকবিজ্ঞান): Wavefront and Huygens’ Principle, Proof of laws of reflection and refraction using Huygens’ wave theory; Coherent sources, Interference of light, Young’s Double Slit Experiment (YDSE): Derivation of fringe width (β = λD/d), Conditions for constructive and destructive interference, Intensity distribution curve; Diffraction of light due to a single slit, Central maximum width, Comparison of interference and diffraction; Polarization of light, Plane polarized light, Brewster’s Law (μ = tan i_p), Malus’s Law (I = I₀ cos²θ) and Polaroid applications',
              'Dual Nature of Radiation, Atoms & Nuclei (পদার্থের দ্বৈত সত্ত্বা, পরমাণু ও নিউক্লিয়াস): Photoelectric effect: Hertz and Lenard observations, Experimental characteristics (Threshold frequency, Stopping potential vs frequency), Failure of wave theory, Einstein’s Photoelectric Equation (hν = W₀ + ½mv²_max), Millikan’s verification; Matter waves, de Broglie wavelength (λ = h/p = h/√(2mqV)); Atoms: Alpha-particle scattering experiment, Rutherford’s nuclear model, Bohr’s Model of Hydrogen Atom: Postulates, Quantization of angular momentum, Derivation of radius of nth orbit (r_n ∝ n²), Energy of electron in nth orbit (E_n = -13.6/n² eV), Hydrogen spectral series (Lyman, Balmer, Paschen, Brackett, Pfund); Nuclei: Composition and size of nucleus (R = R₀ A^(1/3)), Atomic mass unit (u), Mass-Energy equivalence (E = mc²), Mass Defect, Binding Energy per nucleon curve and stability of nucleus, Nuclear forces characteristics; Radioactivity: Alpha, Beta, Gamma decay laws, Half-life and Mean life, Radioactive decay equation (N = N₀ e^(-λt)); Nuclear Fission, Chain reaction, Nuclear Reactor components, Nuclear Fusion (Stellar energy CNO & p-p cycle)',
              'Semiconductor Electronics - Materials, Devices & Simple Circuits (অর্ধপরিবাহী ইলেকট্রনিক্স): Energy bands in solids (Conductors, Semiconductors, Insulators based on band gap E_g); Intrinsic semiconductors (Si, Ge), Extrinsic semiconductors: n-type (Pentavalent doping) and p-type (Trivalent doping), Majority and minority carriers; Semiconductor Diode: p-n junction formation, Depletion layer and potential barrier, Forward and Reverse bias V-I characteristics; Diode as a Rectifier: Half-wave and Full-wave rectifier circuit with filter capacitors; Special Purpose Diodes: Zener Diode as a Voltage Regulator, Light Emitting Diode (LED), Photodiode, Solar Cell; Digital Electronics: Logic Gates (OR, AND, NOT, NAND, NOR) truth tables and digital circuit operations'
            ],
            practicalOrActivity: 'Determining focal length of convex lens using optical bench; Forward and reverse V-I characteristics of p-n junction diode; Zener diode reverse breakdown characteristics; Assembling logic gates using NAND/NOR ICs'
          }
        ],
        referenceMaterials: ['Concepts of Physics (Vol 2) by Dr. H.C. Verma', 'WBCHSE Uccho Madhyamik Padartha Vidya Class 12 (Chhaya / Santra)', 'NCERT Class 12 Physics (Part 1 & 2)', 'D.C. Pandey Physics Series for JEE/WBJEE', 'Biley 15-Year Solved Physics Archive'],
        examPattern: 'Semester 3 MCQ/OMR Board Paper (35 Marks) + Semester 4 Full Descriptive HS Board Exam (70 Marks) + 30 Marks Practical Lab Examination & Viva',
        practicalAvailable: true
      },
      {
        id: 'c12-chem',
        name: 'Chemistry (রসায়ন)',
        code: 'CHEM-12',
        iconName: 'FlaskConical',
        color: 'amber',
        description: 'Semester-wise WBCHSE (Semester 3 & 4) & CBSE Class 12 Chemistry: Physical Chemistry (Solutions & Colligative Properties, Electrochemistry & Nernst Equation, Chemical Kinetics & Arrhenius Law), Inorganic Chemistry (d and f Block Elements, Coordination Compounds & Crystal Field Theory), and Comprehensive Organic Chemistry (Haloalkanes & Haloarenes, Alcohols, Phenols & Ethers, Aldehydes, Ketones & Carboxylic Acids, Nitrogen Compounds - Amines & Diazonium Salts, and Biomolecules - Carbohydrates, Proteins, Nucleic Acids).',
        weeklyHours: 10,
        totalModules: 18,
        learningOutcomes: [
          'Score 98%+ in Higher Secondary Chemistry Board Examination (WBCHSE & CBSE Class 12)',
          'Calculate solution colligative properties (Raoult’s law, osmotic pressure, depression in freezing point) and Van’t Hoff factor',
          'Apply Nernst equation to electrochemical cells, calculate standard EMF, equilibrium constant, and electrolysis Faradaic yield',
          'Derive integrated rate laws for zero and first order reactions, determine activation energy from Arrhenius plots',
          'Write IUPAC nomenclature for coordination complexes, explain stereoisomerism, and determine d-orbital splitting in CFT',
          'Master named organic reaction mechanisms (Aldol, Cannizzaro, Reimer-Tiemann, Kolbe, Williamson, Gabriel Phthalimide, Hoffmann Bromamide, Sandmeyer) and functional group conversions'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Core Physical/Inorganic): Solutions, Electrochemistry, Kinetics, d & f Block Elements',
            description: 'Types of solutions, Raoult’s law, colligative properties, Van’t Hoff factor, Nernst equation, Kohlrausch’s law, chemical kinetics rate laws, activation energy, and transition element chemistry.',
            subtopics: [
              'Solutions (দ্রবণ): Types of solutions, Expression of concentration (Molarity, Molality, Mole fraction, ppm); Solubility of gases in liquids (Henry’s Law and its applications); Vapour pressure of liquid solutions, Raoult’s Law for volatile and non-volatile solutes, Ideal and Non-ideal solutions, Positive and Negative deviations, Azeotropes; Colligative Properties: Relative lowering of vapour pressure (ΔP/P₁° = x₂), Elevation of boiling point (ΔT_b = K_b·m), Depression of freezing point (ΔT_f = K_f·m), Osmotic Pressure (π = CRT), Reverse osmosis and water purification; Abnormal molar mass and Van’t Hoff factor (i = 1 + (n-1)α for dissociation, i = 1 + (1/n - 1)α for association)',
              'Electrochemistry (তড়িৎ রসায়ন): Redox reactions, Galvanic/Voltaic cells, Cell representation; Standard Electrode Potential, Nernst Equation (E_cell = E°_cell - (0.0591/n) log Q at 298 K) and its application to chemical cells, Relation between Standard Gibbs Energy and equilibrium constant (ΔG° = -nFE°_cell = -2.303 RT log K_c); Conductance in electrolytic solutions: Specific conductance (κ = G·l/A), Molar conductivity (Λ_m = 1000κ/M), Variation of molar conductivity with concentration for strong and weak electrolytes, Kohlrausch’s Law of independent migration of ions and its applications; Electrolysis and Faraday’s Laws of Electrolysis (W = zIt, W = EQ/96500); Commercial Batteries: Primary batteries (Dry cell, Mercury cell), Secondary batteries (Lead storage battery, Nickel-Cadmium cell), Fuel Cells (H₂-O₂ fuel cell), Corrosion of metals (electrochemical theory and prevention)',
              'Chemical Kinetics (রাসায়নিক গতিবিদ্যা): Rate of a chemical reaction (average and instantaneous), Factors influencing rate of reaction (concentration, temperature, catalyst); Rate law expression, Rate constant k, Order of reaction (0, 1, 2, fractional) vs Molecularity of reaction; Integrated Rate Equations: Zero order reaction (k = [A]₀ - [A] / t, t_1/2 = [A]₀/2k) and First order reaction (k = (2.303/t) log([A]₀/[A]), t_1/2 = 0.693/k); Pseudo first order reactions; Temperature dependence of reaction rate, Arrhenius Equation (k = A e^(-E_a/RT), log(k₂/k₁) = (E_a/2.303R)(1/T₁ - 1/T₂)), Concept of Activation Energy E_a, Collision theory of chemical reactions (qualitative treatment)',
              'd and f Block Elements (d ও f ব্লকের মৌলসমূহ): Position in the periodic table, Electronic configuration of 3d transition metals; General characteristics of transition elements: Metallic character, Melting & Boiling points, Ionization enthalpies, Variable oxidation states, Standard electrode potentials, Catalytic properties, Magnetic properties (Spin-only formula μ = √(n(n+2)) BM), Formation of colored ions, Complex formation, Interstitial compounds, Alloy formation; Preparation, properties and oxidizing actions of Potassium Dichromate (K₂Cr₂O₇) and Potassium Permanganate (KMnO₄); Inner Transition Elements: Lanthanoids (electronic configuration, oxidation states, chemical reactivity, Lanthanoid Contraction and its consequences) and Actinoids (electronic configuration, oxidation states, comparison with lanthanoids)'
            ],
            practicalOrActivity: 'Redox titration of Potassium Permanganate (KMnO₄) against standard Oxalic Acid and Mohr’s Salt; Studying rate of reaction between Sodium Thiosulphate and Hydrochloric acid'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): Coordination Chemistry, Complete Organic Chemistry & Biomolecules',
            description: 'Coordination compounds, CFT, haloalkanes/haloarenes mechanisms (SN1/SN2), alcohols/phenols/ethers, aldehydes/ketones/acids, nitrogen amines/diazonium salts, and biomolecules.',
            subtopics: [
              'Coordination Compounds (জটিল বা সবর্গীয় যৌগ): Werner’s Theory of coordination compounds; Definitions: Coordination entity, Central atom, Ligands (unidentate, bidentate, ambidentate, polydentate/chelating), Coordination number, Coordination sphere, Coordination polyhedron, Oxidation state; IUPAC Nomenclature of mononuclear coordination compounds; Isomerism in coordination complexes: Structural isomerism (Ionization, Hydrate, Linkage, Coordination) and Stereoisomerism (Geometrical cis-trans, Optical d-l); Valence Bond Theory (VBT - hybridization, geometry, magnetic properties, inner/outer orbital complexes); Crystal Field Theory (CFT - crystal field splitting in octahedral and tetrahedral complexes, Spectrochemical Series, CFSE calculation, magnetic moments); Stability of coordination complexes, Chelate effect, Importance of coordination compounds in qualitative analysis, metallurgy and biological systems (Hemoglobin, Chlorophyll, Vitamin B₁₂)',
              'Haloalkanes & Haloarenes (হ্যালোঅ্যালকেন ও হ্যালোঅ্যারিন): Nomenclature, nature of C-X bond; Methods of preparation from alcohols, hydrocarbons (free radical halogenation, electrophilic addition), Halogen exchange (Finkelstein and Swarts reactions); Physical properties; Chemical reactions of Haloalkanes: Nucleophilic substitution mechanisms (S_N1 and S_N2 kinetics, stereochemical aspects: inversion of configuration, retention, racemization), Elimination reactions (Saytzeff’s rule), Reactions with metals (Grignard reagent formation, Wurtz reaction); Chemical reactions of Haloarenes: Low reactivity of haloarenes towards nucleophilic substitution (resonance, hybridization, instability of phenyl cation), Electrophilic substitution reactions (Halogenation, Nitration, Sulphonation, Friedel-Crafts), Wurtz-Fittig and Fittig reactions; Polyhalogen compounds: Dichloromethane, Chloroform, Iodoform, Carbon tetrachloride, Freons, DDT',
              'Alcohols, Phenols & Ethers (অ্যালকোহল, ফেনল ও ইথার): Alcohols: Classification (1°, 2°, 3°), Methods of preparation (Hydration of alkenes, Hydroboration-oxidation, Reduction of carbonyl compounds, Grignard synthesis); Physical properties (hydrogen bonding, boiling points, solubility); Chemical reactions: Acidic character, Esterification, Reaction with hydrogen halides (Lucas Test), Dehydration to alkenes, Oxidation (PCC, Jones reagent, KMnO₄), Dehydrogenation with heated Cu at 573 K; Phenols: Preparation from chlorobenzene (Dow’s process), Cumene, Benzene sulphonic acid, Diazonium salts; Physical properties; Acidic nature of phenol (comparison with alcohols and resonance stabilization of phenoxide ion); Chemical reactions: Electrophilic aromatic substitutions (Halogenation, Nitration - picric acid), Kolbe’s Reaction (salicylic acid), Reimer-Tiemann Reaction (salicylaldehyde), Reaction with Zinc dust and oxidation with Na₂Cr₂O₇; Ethers: Methods of preparation (Dehydration of alcohols, Williamson’s Ether Synthesis); Physical properties; Chemical reactions: Cleavage of C-O bond with concentrated HI, Electrophilic substitution of anisole',
              'Aldehydes, Ketones & Carboxylic Acids (অ্যালডিহাইড, কিটোন ও কার্বক্সিলিক অ্যাসিড): Nomenclature and nature of Carbonyl group; Methods of preparation of aldehydes and ketones: Oxidation of alcohols, Ozonolysis of alkenes, Hydration of alkynes, Rosenmund Reduction, Stephen’s Reaction, Etard Reaction, Gatterman-Koch Reaction, Friedel-Crafts Acylation; Physical properties; Chemical reactions of Aldehydes and Ketones: Nucleophilic Addition Reactions (HCN, NaHSO₃, Grignard reagents, Alcohols/Diols to form acetals/ketals), Addition-Elimination with Ammonia derivatives (Hydroxylamine, Hydrazine, Phenylhydrazine, 2,4-DNP, Semicarbazide); Reduction: Clemmensen Reduction (Zn-Hg/HCl), Wolff-Kishner Reduction (NH₂NH₂/KOH/glycol); Oxidation: Tollens’ Test (Silver mirror), Fehling’s Test, Haloform/Iodoform reaction (for CH₃C=O group); Reactions due to α-hydrogen: Aldol Condensation, Cross-Aldol Condensation; Cannizzaro Reaction (for aldehydes without α-hydrogen), Electrophilic aromatic substitution; Carboxylic Acids: Nomenclature, Acidic strength (effect of substituents on pKa); Methods of preparation; Reactions: Formation of acyl chlorides, esters, anhydrides, amides; Decarboxylation (Kolbe electrolysis, soda lime), Hell-Volhard-Zelinsky (HVZ) Reaction, Electrophilic substitution on aromatic ring',
              'Organic Compounds Containing Nitrogen - Amines & Diazonium Salts (নাইট্রোজেনযুক্ত জৈব যৌগ): Amines: Classification (1°, 2°, 3°), Structure of amino group; Methods of preparation: Reduction of nitro compounds, Ammonolysis of alkyl halides, Reduction of nitriles and amides, Gabriel Phthalimide Synthesis (pure 1° aliphatic amines), Hoffmann Bromamide Degradation; Physical properties; Chemical reactions: Basic character of amines (comparison of aliphatic vs aromatic amines and gas phase vs aqueous phase basicity order), Alkylation, Acylation, Carbylamine Test (Isocyanide test for 1° amines), Reaction with Nitrous Acid (HNO₂), Reaction with Hinsberg’s Reagent (benzene sulphonyl chloride) to distinguish 1°, 2°, 3° amines, Electrophilic substitution reactions of aniline (Bromination, Nitration, Sulphonation); Diazonium Salts: Preparation of Benzene Diazonium Chloride, Physical properties, Synthetic importance in organic synthesis (Sandmeyer Reaction, Gattermann Reaction, Replacement by -I, -F (Schiemann), -OH, -H (H₃PO₂), -NO₂, Azo Coupling Reactions to form colored azo dyes)',
              'Biomolecules (জৈব অণু): Carbohydrates: Classification (Monosaccharides, Oligosaccharides, Polysaccharides); Monosaccharides: Structure of Glucose (D-L configuration, Open-chain vs Cyclic pyranose structure, Anomers, Mutarotation), Structure of Fructose (Furanose ring); Disaccharides: Glycosidic linkage in Sucrose (Invert sugar), Lactose and Maltose; Polysaccharides: Starch (Amylose and Amylopectin), Cellulose, Glycogen; Importance of carbohydrates; Proteins: Elementary idea of Amino Acids (Essential and Non-essential, Zwitterion, Isoelectric point), Peptide bond, Polypeptides, Classification of proteins (Fibrous and Globular), Four levels of Protein Structure: Primary, Secondary (α-helix and β-pleated sheet), Tertiary, Quaternary structures; Denaturation of proteins; Enzymes: Characteristics, specificity and mechanism of action; Vitamins: Classification (Fat-soluble: A, D, E, K; Water-soluble: B-complex, C), Deficiency diseases; Nucleic Acids: Chemical composition of DNA and RNA (Pentose sugars, Phosphoric acid, Nitrogenous bases: Purines - A, G and Pyrimidines - C, T, U), Nucleosides and Nucleotides, Phosphodiester linkage, Double Helix structure of DNA (Watson and Crick model), Types of RNA (mRNA, tRNA, rRNA), Biological functions of nucleic acids: DNA Replication, Protein synthesis (Transcription and Translation), Genetic Code'
            ],
            practicalOrActivity: 'Qualitative analysis of unknown organic compounds (detection of functional groups: unsaturation, alcoholic, phenolic, aldehydic, ketonic, carboxylic acid, amino); Systematic qualitative inorganic salt analysis (cation and anion identification)'
          }
        ],
        referenceMaterials: ['WBCHSE Uccho Madhyamik Rasayan Class 12 (Chhaya / Santra)', 'NCERT Class 12 Chemistry (Part 1 & 2)', 'O.P. Tandon Physical, Organic & Inorganic Chemistry', 'M.S. Chouhan Advanced Problems in Organic Chemistry', 'Biley 500 Must-Do Chemistry Reactions'],
        examPattern: 'Semester 3 MCQ/OMR Board Exam (35 Marks) + Semester 4 Full Descriptive HS Board Paper (70 Marks) + 30 Marks Practical Lab Examination & Qualitative Viva',
        practicalAvailable: true
      },
      {
        id: 'c12-bio',
        name: 'Biology (জীববিজ্ঞান - Botany & Zoology)',
        code: 'BIO-12',
        iconName: 'Dna',
        color: 'emerald',
        description: 'Semester-wise WBCHSE (Semester 3 & 4) & CBSE Class 12 Biology: Reproduction in Flowering Plants (Microsporogenesis, Megasporogenesis, Double Fertilisation, Apomixis), Human Reproduction & Reproductive Health (Spermatogenesis/Oogenesis, Menstrual Cycle, Embryonic Implantation, Contraception, ART - IVF), Genetics & Evolution (Mendelian Genetics, Linkage, Morgan’s Drosophila, Chromosomal & Gene Disorders, Molecular Basis of Inheritance - DNA Replication, Transcription, Lac Operon, Human Genome Project, DNA Fingerprinting), Human Health & Diseases (Immunity, Vaccines, Cancer, AIDS, Drug Abuse), Biotechnology (Recombinant DNA Technology, PCR, Gel Electrophoresis, Transgenic Crops & Medicine, Gene Therapy), and Ecology & Environment (Population Attributes, Ecosystem Energy Flow, Biodiversity Hotspots & Conservation).',
        weeklyHours: 9,
        totalModules: 16,
        learningOutcomes: [
          'Score 98%+ in Higher Secondary Biological Sciences Board Examination (WBCHSE & CBSE Class 12)',
          'Illustrate flowering plant megasporogenesis, double fertilisation, and seed development with labeled anatomical diagrams',
          'Describe human spermatogenesis, oogenesis, hormonal control of menstrual cycle, embryonic cleavage, and IVF techniques',
          'Explain DNA packaging, Meselson-Stahl semi-conservative replication, prokaryotic/eukaryotic transcription, Lac Operon, and DNA fingerprinting',
          'Analyze innate/acquired immunity, antibody structure, HIV replication cycle, recombinant DNA tools (pBR322, PCR, Bioreactors), and Indian biodiversity conservation'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Core Genetics/Reproduction): Sexual Reproduction, Genetics & Heredity',
            description: 'Flowering plant sexual reproduction, human reproduction, reproductive health, Mendelian genetics, chromosomal theory of inheritance, sex determination, and genetic disorders.',
            subtopics: [
              'Sexual Reproduction in Flowering Plants (সপুষ্পক উদ্ভিদের যৌন জনন): Flower anatomy as reproductive organ; Development of Male Gametophyte: Microsporogenesis, Pollen grain structure and viability; Development of Female Gametophyte: Megasporogenesis, Anatomy of anatropous ovule, 7-celled 8-nucleate Embryo sac; Pollination: Types (Autogamy, Geitonogamy, Xenogamy), Pollinating agents (Wind, Water, Insects), Outbreeding devices to prevent self-pollination; Pollen-Pistil Interaction, Pollen tube growth; Double Fertilisation (Syngamy and Triple Fusion); Post-fertilisation events: Development of endosperm (Nuclear, Cellular, Helobial) and embryo (Dicot and Monocot), Development of seed and fruit; Special modes: Apomixis, Parthenocarpy, Polyembryony',
              'Human Reproduction & Reproductive Health (মানব জনন ও জনন স্বাস্থ্য): Male Reproductive System: Testis histology, Seminiferous tubules, Sertoli cells, Leydig cells, Accessory ducts and glands; Female Reproductive System: Ovary histology, Fallopian tubes, Uterus, Mammary glands; Gametogenesis: Spermatogenesis (Spermiogenesis and Spermiation, Hormonal regulation) and Oogenesis (Comparison with spermatogenesis); Menstrual Cycle: Phases (Menstrual, Follicular/Proliferative, Ovulatory, Luteal/Secretory) and hormonal regulation (GnRH, FSH, LH, Estrogen, Progesterone); Fertilisation, Acrosome reaction, Prevention of polyspermy, Cleavage, Blastocyst formation, Implantation; Pregnancy, Placenta functions, Human chorionic gonadotropin (hCG), Parturition (Fetal ejection reflex, Oxytocin) and Lactation (Colostrum); Reproductive Health: Population explosion, Contraceptive methods (Barrier, IUDs, Oral pills, Surgical sterilization), Medical Termination of Pregnancy (MTP), Sexually Transmitted Infections (STIs), Infertility and Assisted Reproductive Technologies (ART: IVF-ET, ZIFT, GIFT, ICSI, IUI)',
              'Principles of Inheritance & Variation (বংশগতি ও প্রকরণের মূলসূত্র): Mendel’s Laws of Inheritance: Monohybrid Cross (Law of Segregation), Dihybrid Cross (Law of Independent Assortment); Deviations from Mendelian genetics: Incomplete Dominance (Mirabilis jalapa, Snapdragon), Co-dominance (ABO blood grouping in humans), Multiple Alleles, Pleiotropy, Polygenic Inheritance; Chromosomal Theory of Inheritance (Sutton and Boveri); Linkage and Recombination: Morgan’s experiments on Drosophila melanogaster, Crossing over, Gene mapping; Sex Determination: Mechanisms in humans (XX-XY), birds (ZZ-ZW), honeybees (Haplodiploidy); Mutation: Gene mutations and Chromosomal aberrations; Pedigree Analysis; Genetic Disorders: Mendelian disorders (Thalassemia, Sickle-cell anemia, Hemophilia, Color blindness, Phenylketonuria, Cystic fibrosis) and Chromosomal disorders (Down’s syndrome, Turner’s syndrome, Klinefelter’s syndrome)'
            ],
            practicalOrActivity: 'Pollen germination on cavity slide; Dissection of flower reproductive whorls; Pedigree chart analysis of inherited genetic traits'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): Molecular Biology, Human Health, Biotechnology & Ecology',
            description: 'DNA structure, replication, transcription, translation, Lac Operon, Human Genome Project, immunology, pathogens, recombinant DNA technology, PCR, and ecosystem ecology.',
            subtopics: [
              'Molecular Basis of Inheritance (বংশগতির আণবিক ভিত্তি): DNA as genetic material: Structure of Polynucleotide chain, Central Dogma, Packaging of DNA helix (Nucleosome structure, Histone octamer, Euchromatin vs Heterochromatin); Experimental proofs for DNA as genetic material: Griffith’s Transformation experiment, Avery-MacLeod-McCarty experiment, Hershey-Chase Bacteriophage experiment; DNA Replication: Meselson and Stahl’s experiment for semi-conservative replication, Replication fork, DNA Polymerase and associated enzymes; Transcription: Transcription unit, Promoter, Structural gene, Terminator, Transcription in prokaryotes vs eukaryotes (Post-transcriptional modifications: Capping, Tailing, Splicing); Genetic Code: Properties of genetic code, Wobble hypothesis, tRNA as adaptor molecule; Translation: Aminoacylation of tRNA, Initiation, Elongation, Termination; Regulation of Gene Expression: Operon concept, Lac Operon model in E. coli (Positive and Negative regulation); Human Genome Project (HGP): Goals, Methodologies (ESTs and Sequence Annotation), Salient features; DNA Fingerprinting: Principle, VNTRs (Variable Number of Tandem Repeats), Steps and Forensic applications',
              'Human Health & Diseases (মানব স্বাস্থ্য ও রোগ): Common Infectious Diseases in humans: Pathogens, Symptoms, Transmission and Prevention of Typhoid (Salmonella typhi), Pneumonia (Streptococcus pneumoniae), Common Cold (Rhinovirus), Malaria (Plasmodium vivax/falciparum life cycle), Amoebiasis (Entamoeba histolytica), Ascariasis, Filariasis (Wuchereria bancrofti), Ringworm; Immunity: Innate immunity (Physical, Physiological, Cellular, Cytokine barriers) and Acquired immunity (Active and Passive, Primary and Secondary immune responses); Structure of Antibody molecule (H₂L₂ - IgG, IgA, IgM, IgE, IgD), Humoral vs Cell-Mediated Immunity, Autoimmunity (Rheumatoid arthritis); Vaccination and Immunization, Allergies; Acquired Immuno Deficiency Syndrome (AIDS): Causative agent (HIV - Retrovirus), Structure, Mode of transmission, Replication of retrovirus in Helper T-cells, Symptoms, ELISA test, Prevention; Cancer: Types of tumors (Benign and Malignant), Characteristics of cancer cells, Causes (Carcinogens, Oncogenes), Diagnosis, Treatment modalities (Surgery, Radiotherapy, Chemotherapy, Immunotherapy); Drugs and Alcohol Abuse: Opioids, Cannabinoids, Coca alkaloids, Hallucinogens, Tobacco abuse, Addiction, Dependence and rehabilitation',
              'Biotechnology - Principles, Processes & Applications (জৈবপ্রযুক্তি - মূলনীতি ও প্রয়োগ): Principles of Biotechnology: Genetic engineering (Recombinant DNA Technology); Tools of Recombinant DNA Technology: Restriction Endonucleases (Molecular scissors - Sticky vs Blunt ends), DNA Ligase, Alkaline Phosphatase, Cloning Vectors (pBR322 structure, Origin of replication Ori, Selectable markers, Cloning sites, Insertional Inactivation), Competent Host preparation (Chemical CaCl₂ method, Electroporation, Micro-injection, Biolistics/Gene gun); Processes of Recombinant DNA Technology: Isolation of genetic material (DNA), Cutting of DNA at specific locations, Agarose Gel Electrophoresis, Amplification of gene of interest using Polymerase Chain Reaction (PCR - Denaturation, Annealing, Extension), Insertion of recombinant DNA into host cell, Bioreactors (Simple stirred-tank and Sparged stirred-tank), Downstream processing; Applications of Biotechnology in Agriculture: Genetically Modified Organisms (GMOs), Bt Cotton (Cry proteins against bollworms), Pest-resistant plants (RNA interference - RNAi in tobacco against Meloidegyne incognita); Applications in Medicine: Genetically engineered insulin (Humulin by Eli Lilly), Gene Therapy (treatment of ADA deficiency using retroviral vectors), Molecular Diagnosis (PCR, ELISA); Transgenic Animals (production and benefits); Ethical Issues: GEAC (Genetic Engineering Appraisal Committee), Biopiracy (Basmati rice, Neem, Turmeric patent cases)',
              'Ecology, Biodiversity & Environment (বাস্তুবিদ্যা, জীববৈচিত্র্য ও পরিবেশ): Organisms and Populations: Population attributes (Birth rate, Death rate, Sex ratio, Age pyramids), Population Growth models (Exponential growth dN/dt = rN, Logistic growth dN/dt = rN((K-N)/K)), Population Interactions (Mutualism, Competition - Gause’s Competitive Exclusion Principle, Predation, Parasitism, Commensalism, Amensalism); Ecosystem: Structure and function, Productivity (Primary and Secondary, GPP, NPP = GPP - R), Decomposition process, Energy flow in ecosystem (Lindeman’s 10% law), Ecological Pyramids (Pyramid of number, biomass, energy), Ecological Succession (Hydrarch and Xerarch succession); Biodiversity and Conservation: Concept of biodiversity, Levels of biodiversity (Genetic, Species, Ecological), Patterns of biodiversity (Latitudinal gradients, Species-Area relationship log S = log C + Z log A), Loss of biodiversity (The Evil Quartet: Habitat loss, Over-exploitation, Alien species invasions, Co-extinctions); Conservation of Biodiversity: In-situ conservation (National Parks, Sanctuaries, Biosphere Reserves, Sacred Groves) and Ex-situ conservation (Botanical Gardens, Zoological Parks, Cryopreservation, Seed Banks), Biodiversity Hotspots (Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland), Ramsar wetland sites, International conventions (Earth Summit Rio, World Summit Johannesburg)'
            ],
            practicalOrActivity: 'Isolation of DNA from plant material (spinach/papaya/banana); Permanent slide examination of Blastula stages, T.S. of Testis and Ovary; Water and soil pH and particulate matter testing'
          }
        ],
        referenceMaterials: ['WBCHSE Jibon Bigyan Class 12 (Santra / Chhaya)', 'NCERT Class 12 Biology (Line-by-Line Decode)', 'Trueman’s Elementary Biology (Vol 2)', 'Biley Biology 5000+ Question Master Archive'],
        examPattern: 'Semester 3 MCQ/OMR Board Exam (35 Marks) + Semester 4 Full Descriptive HS Board Exam (70 Marks) + 30 Marks Practical Lab Examination & Specimen Viva',
        practicalAvailable: true
      },
      {
        id: 'c12-eng',
        name: 'English Language & Literature (ইংরেজি)',
        code: 'ENG-12',
        iconName: 'BookA',
        color: 'teal',
        description: 'Semester-wise WBCHSE & CBSE Class 12 English: Reading Comprehension Mastery, Note Making & Summarizing, Creative Writing Skills (Notices, Invitations & Replies, Letters to Editor, Job Application with Curriculum Vitae, Article & Report Writing), Prescribed Literature (Prose & Poetry), Literary Devices, and Analytical Critical Composition.',
        weeklyHours: 5,
        totalModules: 12,
        learningOutcomes: [
          'Achieve 98%+ in Class 12 Higher Secondary Board English Examination (WBCHSE / CBSE)',
          'Demonstrate speed reading and inferential synthesis in complex unseen factual and discursive passages',
          'Draft professional Job Applications with detailed Bio-data/CV and formal invitations with standard etiquette',
          'Write persuasive Articles on socioeconomic topics and structured journalistic Event Reports',
          'Critically analyze character psychology, thematic metaphors, and stylistic prose/poetry in prescribed Class 12 texts'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Core Composition): Reading Comprehension, Short Writing & Literature',
            description: 'Unseen comprehension analysis, standardized notice writing in box format, formal & informal invitations and replies, and prescribed core literature prose and poetry.',
            subtopics: [
              'Advanced Reading Comprehension Mastery: Unseen discursive and analytical passages, extracting central themes, critical vocabulary deduction, title justification, tone and mood identification',
              'Creative Short Writing Skills: Official Notice Writing for school and institutional bulletins in standardized box format (50 words), Formal and Informal Invitations (Card format and Letter format) and Formal Replies (Acceptance and Refusal with polite etiquette)',
              'Prescribed Core Literature (Prose & Poetry): The Last Lesson (Alphonse Daudet - Linguistic chauvinism, patriotism), Lost Spring (Anees Jung - Child labor, poverty cycles), Deep Water (William Douglas - Conquering phobia through determination), The Rattrap (Selma Lagerlöf - Human goodness, metaphor of the world as a rattrap), My Mother at Sixty-Six (Kamala Das - Ageing, daughter’s fear of loss), Keeping Quiet (Pablo Neruda - Quiet introspection, universal brotherhood), A Thing of Beauty (John Keats - Eternal joy, nature’s healing power)',
              'Supplementary Reading Studies: The Third Level (Jack Finney - Escapism, psychological time travel), The Tiger King (Kalki - Satire on monarchical arrogance and destiny), Journey to the End of the Earth (Tishani Doshi - Antarctica ecosystem, climate change awareness)'
            ],
            practicalOrActivity: 'Timed unseen comprehension sprint drills and designing official formal invitation cards for annual school convocation'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): Advanced Long Composition, Critical Literary Essays & Mock Exams',
            description: 'Official letters to the editor, job application with detailed resume/CV, analytical article writing, journalistic event reports, capstone literature, and full board mock simulations.',
            subtopics: [
              'Advanced Long Composition Skills: Letters to the Editor of National Dailies on contemporary social, environmental and technological issues; Job Application with detailed Bio-Data / Curriculum Vitae (CV formatting, personal profile, educational qualifications table, work experience, references); Article Writing on contemporary topics (Catchy Title, Byline, Introduction, Pros & Cons, Statistical inference, Conclusion); Report Writing on school events and journalistic occurrences (Headline, Reporter byline, Place, Date, 3-tier sequential paragraph structure)',
              'Capstone Literature Studies: Indigo (Louis Fischer - Mahatma Gandhi’s Champaran movement, civil disobedience), Poets and Pancakes (Asokamitran - Gemini Studios, satire on film industry), The Interview (Christopher Silvester - Media ethics, interview as art form), Going Places (A.R. Barton - Adolescent hero-worship and daydreams), A Roadside Stand (Robert Frost - Rural poverty, urban apathy), Aunt Jennifer’s Tigers (Adrienne Rich - Patriarchy, artistic immortality, gender oppression)',
              'Supplementary Drama & Prose: The Enemy (Pearl S. Buck - Humanity vs nationalism, medical ethics of Dr. Sadao), On the Face of It (Susan Hill - Physical impairment, loneliness, transformative friendship of Mr. Lamb and Derry), Memories of Childhood (Zitkala-Sa and Bama - Racial discrimination, caste oppression and triumph through education)',
              'Board Examination Masterclass: Synthesis of 120-word long value-based extrapolation questions, literary device analysis (Metaphor, Simile, Irony, Symbolism, Transferred Epithet, Alliteration, Imagery), time management strategies for 80-mark 3-hour paper'
            ],
            practicalOrActivity: 'Simulated corporate recruitment drive: Drafting bespoke Cover Letters and Resumes followed by mock interview presentations'
          }
        ],
        referenceMaterials: ['WBCHSE English B Textbook Class 12', 'CBSE Flamingo & Vistas Class 12', 'Wren & Martin High School English Grammar', 'Biley HS English Top-Scorer Blueprint'],
        examPattern: 'Semester 3 Objective / Short Paper (40 Marks) + Semester 4 Full Descriptive HS Board Exam (80 Marks) + 20 Marks Oral ASL / Project Evaluation',
        practicalAvailable: false
      },
      {
        id: 'c12-coma',
        name: 'Computer Application (কম্পিউটার অ্যাপ্লিকেশন - COMA)',
        code: 'COMA-12',
        iconName: 'Laptop',
        color: 'cyan',
        description: 'Semester-wise WBCHSE & CBSE Class 12 Modern Computer Application: Combinational Logic Circuits (Adders, Subtractors, Encoders, Decoders, Multiplexers, Demultiplexers), Computer Networks & Data Communication (Topologies, Transmission Media, OSI/TCP-IP, Network Hardware, Protocols, IP Addressing), HTML5 & Web Page Authoring (CSS, Tables, Forms, Multimedia), Relational Database Management System (RDBMS Concepts, Relational Algebra), Structured Query Language (SQL DDL & DML Commands, Constraints, Queries), and Advanced Spreadsheets (MS Excel Lookup, Pivot Tables, Macros).',
        weeklyHours: 7,
        totalModules: 16,
        learningOutcomes: [
          'Design Combinational Digital Logic circuits: Half/Full Adders, Subtractors, Encoders, Decoders, Multiplexers, and Demultiplexers',
          'Understand networking hardware (Routers, Switches, Hubs), transmission media, network topologies, and TCP/IP protocol suites',
          'Author interactive and responsive web pages with HTML5 semantic elements, forms, tables, and external CSS styling',
          'Model relational database tables with keys (Primary, Foreign, Candidate), perform Relational Algebra operations, and write complex SQL queries',
          'Perform automated spreadsheet calculations in MS Excel using VLOOKUP, HLOOKUP, nested IF, Pivot Tables, and Macros',
          'Build a complete end-to-end multi-table database project with documented data flow diagrams (DFD)'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Combinational Logic/Networking): Logic Circuits, Data Communication & Web Design',
            description: 'Boolean minimization, Adders, Subtractors, Encoders, Decoders, Multiplexers, Demultiplexers, data communication modes, networking topologies, devices, protocols, and HTML5 styling.',
            subtopics: [
              'Combinational Logic Circuits (কম্বিনেশনাল লজিক সার্কিট): Boolean Algebra review, SOP and POS canonical forms, K-Map simplification up to 4 variables; Half Adder and Full Adder (truth tables, Boolean expressions and logic circuit design using basic and NAND gates); Half Subtractor and Full Subtractor; Decoder: 2-to-4 line decoder and 3-to-8 line decoder with enable line; Encoder: 4-to-2 line and 8-to-3 line (Octal to Binary) encoders; Multiplexer (MUX / Data Selector): 4-to-1 and 8-to-1 MUX circuit and function table; Demultiplexer (DEMUX / Data Distributor): 1-to-4 and 1-to-8 DEMUX circuit design',
              'Computer Networks & Data Communication (কম্পিউটার নেটওয়ার্ক ও ডেটা যোগাযোগ): Introduction to computer network, Need and advantages; Data transmission modes: Simplex, Half-Duplex, Full-Duplex; Transmission Media: Guided media (Twisted pair cable - UTP/STP, Coaxial cable, Optical Fiber cable) vs Unguided media (Radio waves, Microwaves, Infrared, Satellite communication); Network Topologies: Star, Bus, Ring, Mesh, Tree, Hybrid topologies (advantages and disadvantages); Network Devices: Network Interface Card (NIC), Modem, Hub (Active/Passive), Switch, Repeater, Bridge, Router, Gateway, Wi-Fi Access Point; OSI 7-Layer Reference Model vs TCP/IP Protocol Architecture; Network Protocols: TCP/IP, FTP, HTTP/HTTPS, SMTP, POP3, IMAP, Telnet, DNS, DHCP; IP Addressing: IPv4 addressing classes (Class A, B, C), Subnet mask, IPv6 basics; Cyber security: Firewalls, Cryptography, Antivirus software',
              'Web Page Authoring with HTML5 & CSS (এইচটিএমএল ও সিএসএস ওয়েব ডিজাইন): HTML5 structure and semantic tags (<header>, <nav>, <section>, <article>, <aside>, <footer>); Text formatting and headings; Lists (<ol>, <ul>, <dl>); Hyperlinking (<a> relative vs absolute paths, anchor links); Images and Multimedia (<img>, <audio>, <video>); HTML Tables (<table>, <tr>, <th>, <td>, rowspan, colspan, border, cell-padding, cell-spacing); HTML Forms (<form>, <input type="text/password/radio/checkbox/submit/reset/email/date">, <textarea>, <select>, <option>, <button>); Cascading Style Sheets (CSS): Types of CSS (Inline, Internal, External), Selectors (Element, Class, ID, Group), CSS Properties (color, background, font, text, border, margin, padding, display, box model)'
            ],
            practicalOrActivity: 'Simulating 4-to-1 Multiplexer and Full Adder circuits in Logisim; Designing an interactive school admission HTML/CSS web portal with validation forms'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): RDBMS, Structured Query Language (SQL) & Advanced Spreadsheets',
            description: 'RDBMS concepts, relational keys, relational algebra, SQL commands (CREATE, INSERT, SELECT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY, HAVING), aggregate functions, and MS Excel advanced analytics.',
            subtopics: [
              'Database Management Concepts & Relational Model (রিলেশনাল ডেটাবেস মডেল): Limitations of traditional file systems, Database approach, Advantages of DBMS; Relational Database Architecture: Relation (Table), Tuple (Row/Record), Attribute (Column/Field), Cardinality, Degree, Domain; Keys in Relational Model: Super Key, Candidate Key, Primary Key, Alternate Key, Foreign Key (Referential Integrity Constraint); Relational Algebra: Fundamental operations - Selection (σ), Projection (π), Cartesian Product (×), Union (∪), Set Difference (-), Set Intersection (∩), Join (⋈)',
              'Structured Query Language - SQL (স্ট্রাকচার্ড কোয়েরি ল্যাঙ্গুয়েজ): Introduction to SQL, SQL Data types (CHAR, VARCHAR, INT, DECIMAL, DATE); Data Definition Language (DDL) Commands: `CREATE TABLE` with constraints (PRIMARY KEY, NOT NULL, UNIQUE, CHECK, DEFAULT), `ALTER TABLE` (ADD column, MODIFY column, DROP column), `DROP TABLE`; Data Manipulation Language (DML) Commands: `INSERT INTO` table, `UPDATE ... SET ... WHERE`, `DELETE FROM ... WHERE`; Data Query Language (DQL): `SELECT` statement syntax, Filtering rows with `WHERE` clause, Comparison operators (=, !=, <, >, <=, >=), Logical operators (`AND`, `OR`, `NOT`), Special operators (`BETWEEN ... AND`, `IN`, `LIKE` with wildcards `%` and `_`, `IS NULL`); Sorting results with `ORDER BY` (ASC/DESC); Aggregate Functions: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; Grouping data with `GROUP BY` clause, Filtering groups with `HAVING` clause; Multi-table queries (Cartesian product and Equi-Join)',
              'Advanced Spreadsheet Analysis in MS Excel (এমএস এক্সেল অ্যাডভান্সড অ্যানালাইসিস): Advanced Formulas: Text functions (LEFT, RIGHT, MID, CONCATENATE, LEN, UPPER, LOWER), Date & Time functions (NOW, TODAY, DATE, YEAR, MONTH, DAY), Financial functions (PMT, PV, FV), Lookup functions (VLOOKUP, HLOOKUP, INDEX, MATCH); Conditional formatting; What-If Analysis (Goal Seek, Scenario Manager); Data validation rules; Pivot Tables and Pivot Charts for dynamic business intelligence reporting; Macros recording and automation',
              'Capstone Laboratory Practical Project: Complete development of a relational database application (e.g. Hospital Patient Management, Library Automation, School Fee System) using SQL backend and MS Access/HTML front-end with full documentation'
            ],
            practicalOrActivity: 'Hands-on Computer Lab Exam: Writing 10+ complex SQL queries on machine, executing MS Excel VLOOKUP/Pivot Table analytics, and defending Capstone Project viva'
          }
        ],
        referenceMaterials: ['WBCHSE Modern Computer Application Class 12 (Chhaya / Santra / BB Publication)', 'NCERT Computer Applications Class 12', 'Biley Advanced Practical Laboratory Manual'],
        examPattern: 'Semester 3 Objective/MCQ Paper (35 Marks) + Semester 4 Full Descriptive HS Board Exam (70 Marks) + 30 Marks Practical Lab Examination & Viva Voce',
        practicalAvailable: true
      },
      {
        id: 'c12-coms',
        name: 'Computer Science (কম্পিউটার সায়েন্স - COMS)',
        code: 'COMS-12',
        iconName: 'Code',
        color: 'violet',
        description: 'Semester-wise WBCHSE & CBSE Class 12 Computer Science: Advanced Computational Thinking & Python Programming (Functions, Recursion, Exception Handling, File Handling - Text, Binary with Pickle, CSV), Linear Data Structures (Stack implementation with Lists, Infix-Postfix expressions, Queue FIFO), Computer Networks & Cybersecurity (OSI/TCP-IP, Routing, Cryptography, IT Act), Relational Database Management System & SQL (DDL, DML, Joins, Group By, Sub-queries), and Python-Database Connectivity (`mysql.connector` CRUD transactions with GUI).',
        weeklyHours: 8,
        totalModules: 18,
        learningOutcomes: [
          'Score 98%+ in Class 12 Computer Science Board Examination (WBCHSE & CBSE Class 12)',
          'Write Python programs using recursion, custom exception handling, and persistent Text, Binary (`pickle`), and CSV file operations',
          'Implement linear Data Structures: Stack (`push`, `pop`, `peek`) and Queue in Python with time/space complexity awareness',
          'Design computer network architectures, calculate transmission delays, and evaluate cyber defense mechanisms',
          'Master complex multi-table SQL queries with INNER, LEFT, RIGHT, and FULL OUTER JOINs and nested sub-queries',
          'Develop full-stack desktop Python-MySQL applications with dynamic database transactions and GUI interfaces'
        ],
        keyChapters: [
          {
            title: 'Semester 3 (Term 1 / Semester 3 - MCQ & Advanced Python/Data Structures): Advanced Programming, File I/O & Stacks',
            description: 'Python revision, recursion, exception handling, text/binary/CSV file handling, linear data structures (Stack push/pop/peek, Postfix evaluation), and computer network architectures.',
            subtopics: [
              'Computational Thinking & Advanced Python Programming: Review of Python data types, operators, flow of control, strings, lists, tuples, dictionaries; Functions: Parameter passing (Positional, Default, Keyword), Mutable vs Immutable parameter passing, Scope of variables (Local, Global, Nonlocal, `global` statement); Recursion: Recursive function definition, Call stack, Base condition, Recursion vs Iteration, Recursive binary search, Tower of Hanoi, Factorial, Fibonacci; Exception Handling: Need for exception handling, `try`, `except`, `else`, `finally` blocks, Built-in exceptions (`ZeroDivisionError`, `ValueError`, `IndexError`, `KeyError`, `FileNotFoundError`, `IOError`), Raising exceptions with `raise`, User-defined custom exceptions',
              'File Handling in Python (ফাইল হ্যান্ডলিং): Concept of file, Need for persistent storage; Types of files: Text files, Binary files, CSV files; Text File Operations: Opening files (`open()` with modes "r", "w", "a", "r+", "w+", "a+"), Closing files (`close()`), Using `with` statement, Reading from text file (`read()`, `readline()`, `readlines()`), Writing to text file (`write()`, `writelines()`), File pointer manipulation (`seek()` and `tell()`), Word count, character count, searching lines in text files; Binary File Operations: Need for serialization, `pickle` module, Writing records with `pickle.dump()`, Reading records with `pickle.load()`, Searching, modifying and deleting records in binary files; CSV File Operations: Need for CSV, `csv` module, Reading CSV with `csv.reader()`, Writing CSV with `csv.writer()`, `csv.DictReader` and `csv.DictWriter` with delimiter customization',
              'Data Structures - Stacks & Queues (ডেটা স্ট্রাকচার - স্ট্যাক ও কিউ): Introduction to Data Structures: Linear vs Non-linear data structures; Stack: Abstract Data Type (ADT), LIFO (Last In First Out) principle; Operations on Stack: `push()`, `pop()`, `peek()`, `isEmpty()`, `display()`; Stack implementation in Python using Lists; Applications of Stack: Reversal of string, Parenthesis matching, Infix to Postfix conversion, Evaluation of Postfix expressions; Queue: FIFO (First In First Out) principle, Operations: `enqueue()`, `dequeue()`, `peek()`, Queue implementation in Python',
              'Computer Networks & Cyber Security Architecture: Data Communication: Components, Bandwidth, Data transfer rate (bps, Kbps, Mbps, Gbps); Transmission media: UTP, STP, Coaxial, Fiber Optics, Radio waves, Microwaves, Satellite; Network Devices: Modem, RJ45 connector, Ethernet card, Hub, Switch, Gateway, Router, Repeater, Wi-Fi card; Network Topologies: Bus, Star, Tree, Mesh; Network Types: PAN, LAN, MAN, WAN; Network Protocols: OSI 7-Layer Model vs TCP/IP Suite, HTTP, HTTPS, FTP, Telnet, SMTP, POP3, PPP, VoIP, DNS; IPv4 vs IPv6 addressing; Mobile Telecommunication Technologies: 1G, 2G, 3G, 4G, 5G; Network Security: Malware (Viruses, Worms, Trojan Horse, Ransomware, Spyware), Denial of Service (DoS) attacks, Phishing, Spoofing, Cookies, Firewalls, SSL/TLS, Cyber laws, IT Act 2000'
            ],
            practicalOrActivity: 'Coding complete Python file persistence utilities (Text, Binary, CSV) and implementing custom Stack ADT with boundary overflow/underflow checks'
          },
          {
            title: 'Semester 4 (Term 2 / Semester 4 & Final HS Board Exam): Database Management, SQL Joins, Python-MySQL Connectivity & Project',
            description: 'Relational database concepts, advanced SQL (DDL, DML, multi-table Joins, Group By, Having, Subqueries), Python-MySQL connectivity (`mysql.connector`), transactions, and Capstone Project defense.',
            subtopics: [
              'Relational Database Management System & SQL Mastery (রিলেশনাল ডেটাবেস ও এসকিউএল): Database concepts, Relational data model, Keys (Primary, Candidate, Alternate, Foreign keys); SQL Language: Data Definition Language (DDL) Commands (`CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`), Data Manipulation Language (DML) Commands (`INSERT`, `UPDATE`, `DELETE`), Data Query Language (DQL) Commands (`SELECT`); Constraints: `PRIMARY KEY`, `FOREIGN KEY` (Referencing), `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`; Querying data: `WHERE`, `DISTINCT`, `BETWEEN ... AND`, `IN`, `LIKE`, `IS NULL`, `ORDER BY` (ASC/DESC); SQL Aggregate Functions: `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()`; Grouping Data: `GROUP BY` clause, Filtering aggregated groups with `HAVING` clause; Multi-Table SQL Joins: Cartesian product, Equi-Join, Natural Join, `INNER JOIN`, `LEFT OUTER JOIN`, `RIGHT OUTER JOIN`, `FULL OUTER JOIN`; Nested Sub-queries (Single-row and Multiple-row subqueries using `IN`, `EXISTS`)',
              'Python - MySQL Database Connectivity (পাইথন-মাইএসকিউএল সংযোগ): Introduction to `mysql.connector` module; Steps in connecting Python with MySQL database: 1. Importing `mysql.connector`, 2. Establishing connection with `connect()` (host, user, password, database), 3. Creating cursor object with `cursor()`, 4. Executing SQL queries with `cursor.execute()`, 5. Fetching records using `fetchone()`, `fetchall()`, `fetchmany()`, 6. Inspecting `cursor.rowcount`, 7. Committing database transactions using `connection.commit()`, 8. Rolling back transactions with `connection.rollback()`, 9. Closing cursor and connection; Implementing full CRUD (Create, Read, Update, Delete) operations on database tables from Python interface; Handling SQL injection risks through parameterized queries (`cursor.execute(sql, params)`)',
              'Software Engineering Practices & Capstone Project Defense: Software Development Life Cycle (SDLC): Requirement analysis, System design, Modular coding, Unit testing, Integration testing, Maintenance; Capstone Project Development: Building an industry-grade software application (e.g. School Management System, Hospital Appointment System, Airline Ticket Reservation, Banking ATM Simulator) integrating Python backend, MySQL database, and Tkinter/Web GUI; Documentation: Entity-Relationship (ER) Diagrams, Data Flow Diagrams (DFD Level 0 & 1), Database schema tables, and complete User Manual'
            ],
            practicalOrActivity: 'Hands-on Computer Lab Exam: Writing Python scripts connecting to MySQL, executing dynamic parameterized queries, modifying database records on live system, and 30-page documented lab journal viva'
          }
        ],
        referenceMaterials: ['Computer Science with Python by Sumita Arora (Class 12)', 'Computer Science with Python by Preeti Arora (Class 12)', 'WBCHSE Computer Science Class 12 (Chhaya / Santra)', 'NCERT Class 12 Computer Science', 'Biley CodeLab Python-MySQL Enterprise Project Repository'],
        examPattern: 'Semester 3 MCQ/OMR Board Exam (35 Marks) + Semester 4 Full Descriptive HS Board Exam (70 Marks) + 30 Marks Practical Programming Exam (Python coding on machine + SQL queries + Capstone Project report + Viva Voce)',
        practicalAvailable: true
      }
    ]
  }
];
