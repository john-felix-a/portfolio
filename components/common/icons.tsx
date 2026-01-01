import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Trash,
  User,
  X,
  Zap,
  Shield,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiAmazonaws,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiGithub,
  SiGit,
  SiNuxtdotjs,
  SiAntdesign,
  SiPython,
  SiApachespark,
} from "react-icons/si";

export const Icons = {
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  amazonaws: SiAmazonaws,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  express: SiExpress,
  graphql: SiGraphql,
  html5: SiHtml5,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  react: SiReact,
  redux: SiRedux,
  socketio: SiSocketdotio,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  gmail: SiGmail,
  twitter: SiTwitter,
  linkedin: SiLinkedin,
  userFill: BiSolidUser,
  work: HiBriefcase,
  gitHub: SiGithub,
  git: SiGit,
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
  retro: Palette,
  cyberpunk: Zap,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
  nuxtjs: SiNuxtdotjs,
  antdesign: SiAntdesign,
  python: SiPython,
  spark: SiApachespark,
  cognito: SiAmazonaws,
  casl: Shield,
  instagram: SiInstagram,
};
