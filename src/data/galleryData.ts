import { GalleryItem } from '../types';
import bannerHeroImg from '../assets/images/academy_banner_hero_1787534988441.jpg';
import classroomImg from '../assets/images/coaching_classroom_1787535006801.jpg';
import scienceLabImg from '../assets/images/science_lab_session_1787535022909.jpg';
import doubtClearingImg from '../assets/images/doubt_clearing_desk_1787535038773.jpg';
import awardsImg from '../assets/images/academic_awards_day_1787535055311.jpg';
import swamiVivekanandaImg from '../assets/images/swami_vivekananda_portrait_1787621856392.jpg';
import souravDindaImg from '../assets/images/sourav_dinda_color_portrait_1787657237922.jpg';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'founder-sourav-dinda-portrait',
    title: 'Mr. Sourav Dinda – Founder & Academic Director',
    category: 'banner',
    categoryLabel: 'Founder & Leadership',
    imageUrl: souravDindaImg,
    date: 'Academic Leadership',
    location: 'Biley Academy Director Suite',
    caption: 'Mr. Sourav Dinda, Founder & Academic Director of Biley Academy. M.Phil (Comp. Sc.), M.C.S., B.Sc. (Comp. Sc. with Math & Physics), bringing 20 years of academic and industry leadership, 6 research publications, and 100+ project mentorships.',
    tags: ['Mr. Sourav Dinda', 'Founder & Director', 'Academic Leadership', 'Computer Science', '20 Years Experience'],
    isFeaturedBanner: true
  },
  {
    id: 'swami-vivekananda-inspiration-portrait',
    title: 'Swami Vivekananda – Guiding Light of Biley Academy',
    category: 'banner',
    categoryLabel: 'Inspiration & Heritage',
    imageUrl: swamiVivekanandaImg,
    date: 'Philosophical Founder',
    location: 'Biley Academy Central Heritage Sanctum',
    caption: 'Swami Vivekananda (childhood name "Biley"), the timeless fountain of inspiration whose ideals of fearlessness, character building, scientific logic, and total intellectual awakening shape every classroom at Biley Academy.',
    tags: ['Swami Vivekananda', 'Heritage', 'Inspiration', 'Biley', 'Motto & Philosophy'],
    isFeaturedBanner: true
  },
  {
    id: 'official-admission-banner-2026',
    title: 'Official Academic Admission Banner (2026-27)',
    category: 'banner',
    categoryLabel: 'Official Banner & Notice',
    imageUrl: bannerHeroImg,
    date: 'Academic Year 2026-27',
    location: 'Jamna, Pingla, Paschim Medinipur',
    caption: 'Official coaching institute notice for Classes 1 to 12. Offline foundational coaching for Classes I-V and Hybrid (Offline/Online) with JEE/NEET orientation for Classes VI-XII.',
    tags: ['Admissions 2026', 'Official Notice', 'Classes 1-12', 'Offline & Online', 'JEE Oriented'],
    isFeaturedBanner: true
  },
  {
    id: 'interactive-coaching-classroom',
    title: 'Interactive Smart Classroom Session',
    category: 'classroom',
    categoryLabel: 'Classroom & Learning',
    imageUrl: classroomImg,
    date: 'August 2026',
    location: 'Main Academic Wing - Room 102',
    caption: 'Secondary students actively engaging in interactive problem-solving, board discussions, and concept walkthroughs with subject specialists.',
    tags: ['Active Learning', 'Smart Board', 'Maths & Science', 'Secondary Batches'],
    isFeaturedBanner: false
  },
  {
    id: 'science-stem-experiment-lab',
    title: 'Hands-On Science & Practical Experiments Lab',
    category: 'labs',
    categoryLabel: 'Laboratories & Practicals',
    imageUrl: scienceLabImg,
    date: 'July 2026',
    location: 'Biley STEM & Optics Laboratory',
    caption: 'High school students performing chemistry titration, ray optics verification, and biological specimen studies under trained faculty supervision.',
    tags: ['Science Practicals', 'Chemistry & Physics', 'Experiential Learning', 'Class 10-12'],
    isFeaturedBanner: false
  },
  {
    id: 'personalized-doubt-mentorship',
    title: 'Personalized 1-on-1 Doubt Clearing Desk',
    category: 'mentorship',
    categoryLabel: 'Doubt Clearing & Mentorship',
    imageUrl: doubtClearingImg,
    date: 'Ongoing Daily (4:30 PM - 7:30 PM)',
    location: 'Faculty Consultation Hub',
    caption: 'Dedicated one-on-one doubt clearing sessions with senior educators focusing on speed tricks, NCERT solutions, and JEE problem walkthroughs.',
    tags: ['1-on-1 Guidance', 'Doubt Solving', 'JEE Tricks', 'Personal Attention'],
    isFeaturedBanner: false
  },
  {
    id: 'annual-academic-toppers-felicitation',
    title: 'Annual Meritorious Toppers Felicitation & Awards',
    category: 'events',
    categoryLabel: 'Events & Felicitations',
    imageUrl: awardsImg,
    date: 'Annual Convocation 2026',
    location: 'Vivekananda Memorial Hall, Jamna',
    caption: 'Felicitating board exam high-achievers, olympiad winners, and competitive exam qualifiers in the presence of parents, mentors, and local dignitaries.',
    tags: ['Awards 2026', 'Board Toppers', 'Vivekananda Jayanti', 'Merit Scholarships'],
    isFeaturedBanner: false
  }
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Photos & Banners', count: 7 },
  { id: 'banner', label: 'Leadership & Banners', count: 3 },
  { id: 'classroom', label: 'Classrooms & Learning', count: 1 },
  { id: 'labs', label: 'Science & Computer Labs', count: 1 },
  { id: 'mentorship', label: '1-on-1 Doubt Mentorship', count: 1 },
  { id: 'events', label: 'Events & Felicitations', count: 1 }
];

