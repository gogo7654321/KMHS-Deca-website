import {
  Trophy,
  Users,
  Heart,
  Briefcase,
  GraduationCap,
  Network,
  Megaphone,
  Landmark,
  UtensilsCrossed,
  ClipboardList,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/compete', label: 'Compete' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// External links
export const links = {
  groupMe: 'https://groupme.com/join_group/114767017/pSCVcHlo',
  instagram: 'https://www.instagram.com/kmhs_deca/?hl=en',
  tiktok: 'https://www.tiktok.com/@deca.kmhs',
  decaPlus: 'https://www.decaplus.org/',
  decaCompete: 'https://www.deca.org/compete',
  decaEvents: 'https://www.deca.org/compete#competitive-events',
  wordsQuizlet:
    'https://quizlet.com/411372022/words-to-use-in-competition-flash-cards/',
  advisorEmail: 'paul.goodman@cobbk12.org',
};

export type Exec = {
  name: string;
  role: string;
  slug: string;
  graphic: string; // official announcement graphic at /officers/<file>
  bio: string;
};

// Order: President, VP, then the VPs.
export const execs: Exec[] = [
  {
    name: 'Claire Macaluso',
    role: 'President',
    slug: 'claire-macaluso',
    graphic: '/officers/president-claire-macaluso.jpg',
    bio: "Hi everyone! My name is Claire Macaluso and I am so excited to be the President of our DECA chapter this year! I've been in DECA for 4 years and this is my second year on leadership. Some of my favorite things to do are playing soccer, hanging out with friends, and going to the beach. I can't wait to see what this year brings!",
  },
  {
    name: 'Sebastian Andrade',
    role: 'Vice President',
    slug: 'sebastian-andrade',
    graphic: '/officers/vice-president-sebastian-andrade.jpg',
    bio: 'Hello everyone! I am Sebastian Andrade and I am beyond excited to be VP of DECA this upcoming year! This will be my first year on leadership and I cannot wait to meet you all. I enjoy going swimming, pickleball, and hanging out with friends. See you all soon!',
  },
  {
    name: 'Neil',
    role: 'VP of Career Development',
    slug: 'neil',
    graphic: '/officers/vp-career-development-neil.jpg',
    bio: "Hi, I'm Neil, and I'm your VP of Career Development this year! This is my third year in DECA. Outside of the club, I play tennis, volunteer, and enjoy watching football. I can't wait to see what we achieve together this upcoming school year!",
  },
  {
    name: 'Janine Gachugi',
    role: 'VP of Hospitality',
    slug: 'janine-gachugi',
    graphic: '/officers/vp-hospitality-janine-gachugi.jpg',
    bio: "Hey Mustangs, my name is Janine Gachugi and I'm so excited to be your VP of Hospitality! This will be my first year on the board and I'm looking forward to the next chapter. Some things I like to do are swimming, chatting it up with friends, and trying out new foods! I can't wait to see new faces and see what the next chapter brings!",
  },
  {
    name: 'Nish Patel',
    role: 'VP of Leadership',
    slug: 'nish-patel',
    graphic: '/officers/vp-leadership-nish-patel.jpg',
    bio: "Hey everyone! My name is Nish Patel and I'm excited to be your Vice President of Leadership for our DECA chapter this year! This is my first year in leadership. I have been a member for 2 years, and have competed at state. Some things I like to do are play tennis, pickleball, hang out with my friends, and watch movies! I'm very excited for our DECA chapter this year!",
  },
  {
    name: 'Ashaz Gorar',
    role: 'VP of Finance',
    slug: 'ashaz-gorar',
    graphic: '/officers/vp-finance-ashaz-gorar.jpg',
    bio: 'Hey everyone! My name is Ashaz Gorar and I will be the VP of Finance for this chapter! This is my third year in DECA and my first year on leadership. I enjoy playing sports such as tennis, soccer, and basketball, as well as traveling and hanging out with friends. I am super excited to be a part of DECA this year and I am ready for us to achieve great things!',
  },
  {
    name: 'Naman Patel',
    role: 'VP of Marketing',
    slug: 'naman-patel',
    graphic: '/officers/vp-marketing-naman-patel.jpg',
    bio: "Hello everyone! My name is Naman Patel. I am happy to be the Vice President of Marketing for KMHS DECA this year. I have been a part of DECA for two years now and I think it'll be very fun this upcoming year! When I am not in school, I like to play soccer, go fishing, and swim. I also like to spend time with my friends. I am looking forward to working with the leadership team to make this a great year for KMHS DECA.",
  },
];

export type Cluster = { title: string; description: string; icon: LucideIcon };

// DECA's core career clusters for competitive events.
export const clusters: Cluster[] = [
  {
    title: 'Marketing',
    description: 'Advertising, sales, and connecting with customers.',
    icon: Megaphone,
  },
  {
    title: 'Finance',
    description: 'Accounting, banking, investments, and financial management.',
    icon: Landmark,
  },
  {
    title: 'Hospitality & Tourism',
    description: 'Hotels, restaurants, event planning, and customer service.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Business Management & Administration',
    description: 'Leadership, operations, and organizational planning.',
    icon: ClipboardList,
  },
];

export type Benefit = { title: string; description: string; icon: LucideIcon };

export const benefits: Benefit[] = [
  {
    title: 'Competitions',
    description:
      'Compete at region, state, and international levels in role-play and written events across marketing, finance, and business.',
    icon: Trophy,
  },
  {
    title: 'Career Skills',
    description:
      'Build real-world skills in marketing, entrepreneurship, hospitality, and finance that colleges and employers value.',
    icon: Briefcase,
  },
  {
    title: 'Community Service',
    description:
      'Earn service hours toward graduation while giving back to the Kennesaw Mountain community.',
    icon: Heart,
  },
  {
    title: 'Networking',
    description:
      'Meet students, alumni, and professionals from across Georgia and the country at conferences and events.',
    icon: Network,
  },
  {
    title: 'Leadership',
    description:
      'Grow as a leader through chapter projects, teamwork, and hands-on experience running events.',
    icon: Users,
  },
  {
    title: 'Scholarships',
    description:
      'DECA members are eligible for millions of dollars in scholarships offered nationally each year.',
    icon: GraduationCap,
  },
];
