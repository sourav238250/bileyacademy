import React, { useState } from 'react';
import { 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  Clock, 
  ArrowRight,
  Calculator,
  FlaskConical,
  Dna,
  Code,
  BookA
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '../types';

export const QuizSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<'primary' | 'upper_primary' | 'secondary' | 'higher_secondary'>('secondary');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Curated Diagnostic Question Banks for all grades and subjects
  const QUESTION_BANKS: Record<string, QuizQuestion[]> = {
    'primary-Mathematics': [
      {
        id: 1,
        question: 'What is the sum of 45 + 38 using mental addition bonds?',
        options: ['73', '83', '85', '93'],
        correctAnswer: 1,
        explanation: '45 + 38 = (45 + 30) + 8 = 75 + 8 = 83.'
      },
      {
        id: 2,
        question: 'How many sides and vertices does a hexagon have?',
        options: ['5 sides, 5 vertices', '6 sides, 6 vertices', '8 sides, 8 vertices', '4 sides, 4 vertices'],
        correctAnswer: 1,
        explanation: 'A hexagon has 6 straight sides and 6 corner vertices.'
      }
    ],
    'primary-Science': [
      {
        id: 1,
        question: 'Which gas do green plants absorb from the air to perform photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Helium'],
        correctAnswer: 2,
        explanation: 'Green leaves absorb Carbon Dioxide from the air and release Oxygen.'
      },
      {
        id: 2,
        question: 'Which sense organ helps us perceive the flavor and sweetness of an apple?',
        options: ['Ears', 'Tongue (Taste buds)', 'Nose only', 'Skin'],
        correctAnswer: 1,
        explanation: 'Taste buds on our tongue detect sweet, sour, salty, and bitter tastes.'
      }
    ],
    'upper_primary-Biology': [
      {
        id: 1,
        question: 'Which organelle is famously known as the "Powerhouse of the Cell"?',
        options: ['Ribosome', 'Mitochondria', 'Golgi Apparatus', 'Vacuole'],
        correctAnswer: 1,
        explanation: 'Mitochondria generate cellular energy in the form of ATP through cellular respiration.'
      },
      {
        id: 2,
        question: 'Which microorganism is utilized in the fermentation of dough to bake fluffy bread?',
        options: ['Lactobacillus', 'Yeast (Saccharomyces cerevisiae)', 'Amoeba', 'Penicillium'],
        correctAnswer: 1,
        explanation: 'Yeast produces Carbon Dioxide bubbles during anaerobic respiration, making dough rise.'
      }
    ],
    'secondary-Mathematics': [
      {
        id: 1,
        question: 'If the discriminant (D = b² - 4ac) of a quadratic equation is greater than zero (D > 0), what is the nature of its roots?',
        options: ['No real roots (Imaginary)', 'Two real and distinct roots', 'Two real and equal roots', 'One root is zero'],
        correctAnswer: 1,
        explanation: 'When D > 0, the quadratic formula yields two distinct real solutions.'
      },
      {
        id: 2,
        question: 'What is the value of (sin² 30° + cos² 30°)?',
        options: ['0', '1/2', '1', '√3/2'],
        correctAnswer: 2,
        explanation: 'From fundamental trigonometric identity: sin²θ + cos²θ = 1 for any angle θ.'
      }
    ],
    'secondary-Science': [
      {
        id: 1,
        question: 'What is the SI unit of Electric Resistivity (ρ)?',
        options: ['Ohm (Ω)', 'Ohm-metre (Ω·m)', 'Volt / Ampere', 'Watt'],
        correctAnswer: 1,
        explanation: 'Resistivity ρ = (R × A) / L. Unit = (Ω × m²) / m = Ohm-metre (Ω·m).'
      },
      {
        id: 2,
        question: 'Which gas is evolved when zinc metal reacts with dilute hydrochloric acid?',
        options: ['Carbon dioxide', 'Oxygen', 'Hydrogen (pops with flame)', 'Chlorine'],
        correctAnswer: 2,
        explanation: 'Zn + 2HCl → ZnCl₂ + H₂↑. Hydrogen burns with a characteristic pop sound.'
      }
    ],
    'higher_secondary-Physics': [
      {
        id: 1,
        question: 'In an alternating current (AC) LCR series circuit at resonance, the impedance (Z) is equal to:',
        options: ['Zero', 'Pure resistance (R)', 'Inductive reactance (XL)', 'Infinite'],
        correctAnswer: 1,
        explanation: 'At resonance, XL = XC, so Z = √[R² + (XL - XC)²] = R (minimum impedance, maximum current).'
      },
      {
        id: 2,
        question: 'According to Einstein\'s photoelectric equation, the maximum kinetic energy of emitted photoelectrons depends directly on:',
        options: ['Intensity of incident light only', 'Frequency of incident light above threshold', 'Time of exposure', 'Angle of incidence'],
        correctAnswer: 1,
        explanation: 'KE_max = hν - Φ, where ν is the frequency of incident radiation.'
      }
    ],
    'higher_secondary-Chemistry': [
      {
        id: 1,
        question: 'Which of the following organic reactions is an example of an SN2 nucleophilic substitution?',
        options: ['Racemization with carbocation intermediate', 'Complete Walden Inversion via single transition state', 'Free radical chain reaction', 'Elimination forming alkene'],
        correctAnswer: 1,
        explanation: 'SN2 involves bimolecular backside attack causing 100% Walden inversion of stereochemistry.'
      },
      {
        id: 2,
        question: 'What is the coordination number of Cobalt in the complex ion [Co(en)₃]³⁺?',
        options: ['3', '4', '6', '12'],
        correctAnswer: 2,
        explanation: 'Ethylenediamine (en) is a bidentate ligand. 3 bidentate ligands form 3 × 2 = 6 coordinate bonds.'
      }
    ],
    'secondary-Computer Science': [
      {
        id: 1,
        question: 'What is the time complexity of Binary Search in a sorted array of N elements?',
        options: ['O(N)', 'O(log N)', 'O(N²)', 'O(1)'],
        correctAnswer: 1,
        explanation: 'Binary Search halves the search space at each step, giving logarithmic time complexity O(log N).'
      },
      {
        id: 2,
        question: 'Which SQL clause is used to filter groups of records created by the GROUP BY clause?',
        options: ['WHERE', 'ORDER BY', 'HAVING', 'SELECT DISTINCT'],
        correctAnswer: 2,
        explanation: 'HAVING filters aggregated groups, whereas WHERE filters individual rows before grouping.'
      }
    ]
  };

  const currentKey = `${selectedTier}-${selectedSubject}`;
  const questions = QUESTION_BANKS[currentKey] || QUESTION_BANKS['secondary-Mathematics'];
  const currentQ = questions[currentQIndex] || questions[0];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-16 sm:py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Test</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Test Your Subject Readiness
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Experience the Biley Academy standard of conceptual clarity. Select your grade level and subject to start the diagnostic check:
          </p>
        </div>

        {/* Level & Subject Selector Tabs */}
        <div className="max-w-4xl mx-auto mb-8 bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          {/* Tier Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'primary', label: 'Primary (Cl 1-4)' },
              { id: 'upper_primary', label: 'Upper Primary (Cl 5-8)' },
              { id: 'secondary', label: 'Secondary (Cl 9-10)' },
              { id: 'higher_secondary', label: 'Higher Sec (Cl 11-12)' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTier(t.id as any);
                  handleResetQuiz();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTier === t.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Subject Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 font-semibold">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                handleResetQuiz();
              }}
              className="bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science (Phy/Chem)</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science / App</option>
            </select>
          </div>
        </div>

        {/* Main Quiz Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8">
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Question Meta Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
                <span className="font-bold text-amber-400">
                  Question {currentQIndex + 1} of {questions.length}
                </span>
                <span className="bg-slate-950 px-3 py-1 rounded-full border border-slate-800 font-semibold text-slate-300">
                  Current Score: {score} / {currentQIndex + (isAnswered ? 1 : 0)}
                </span>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = "bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200";
                  if (isAnswered) {
                    if (idx === currentQ.correctAnswer) {
                      btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 ring-1 ring-rose-500";
                    } else {
                      btnStyle = "bg-slate-950/40 border-slate-900 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-option-${idx}`}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {isAnswered && idx === currentQ.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswer && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Explanation */}
              {isAnswered && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Biley Academy Concept Explanation:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>

                  <div className="pt-3 text-right">
                    <button
                      id="quiz-next-btn"
                      onClick={handleNextQuestion}
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center space-x-2 shadow-md transition-all"
                    >
                      <span>{currentQIndex < questions.length - 1 ? 'Next Question' : 'View Results'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center font-bold text-2xl">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-serif">
                Diagnostic Assessment Completed!
              </h3>
              <p className="text-sm text-slate-300">
                You scored <strong className="text-amber-400 text-lg">{score}</strong> out of <strong className="text-white text-lg">{questions.length}</strong> in {selectedSubject} ({selectedTier.replace('_', ' ')}).
              </p>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-xs text-slate-300">
                {score === questions.length ? (
                  <span className="text-emerald-400 font-bold">
                    🌟 Outstanding conceptual clarity! You possess strong foundation mastery.
                  </span>
                ) : (
                  <span className="text-amber-300 font-medium">
                    💡 Good effort! Biley Academy's weekly doubt clinics and step-by-step problem sets can help you achieve 100% accuracy.
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center space-x-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Try Again / Switch Subject</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
