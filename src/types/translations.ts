export interface Translations {
  direction?: "ltr" | "rtl";
  PROFILE: ProfileTranslations;
  info: InfoData;
  education: EducationItem[];
  workHistory: WorkHistoryItem[];
  skills: {
    skillsTitle: string;
    skillsList: Skill[];
  };
  contactForm: FormData;
  pricing: {
    heading: string;
    month: string;
    button: string;
    plans: Plan[];
  };
  blog: BlogItem[];
  notFound: NotFoundTranslation;
  resume:string;
  educationTitle: string;
  workHistoryTitle: string;
  blog_title: string;
  portfolioTitle: string;
  portfolioCategories: string[];
  portfolioData: PortfolioItem[];
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image?: string;
  live?: string;
  static?: boolean;
}

type NotFoundTranslation = {
  title: string;
  description: string;
  backToHome: string;
};
export interface BlogItem {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

export interface ProfileTranslations {
  INTRODUCTION: string;
  CREATIVE_ROLE: string;
  DOWNLOAD_CV: string;
  TALK_TO_ME: string;
}

export interface InfoData {
  firstname: string;
  lastname: string;
  home: string;
  talk_to_me: string;
  copy_right: string;
  profession: string;
  age: string;
  author: string;
  location: string;
  description: string;
}
export interface EducationItem {
  period: string;
  university: string;
  degree: string;
  description: string;
}

export interface WorkHistoryItem {
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface Skill {
  name: string;
  value: number;
}
export interface FormData  {
  heading: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  sendButton: string;
};

export interface Feature {
  label: string;
  available: boolean;
};

export interface Plan {
  title: string;
  price: string;
  features: Feature[];
  featured?: boolean;
};