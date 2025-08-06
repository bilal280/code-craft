import { PortfolioItemType, CategoryType } from '../types';

export const categories: CategoryType[] = [
  { id: "all", name: "الكل" },
  { id: "web", name: "مواقع إلكترونية" },
  { id: "app", name: "تطبيقات" },
  { id: "ui", name: "واجهات مستخدم" }
];

export const portfolioItems: PortfolioItemType[] = [
  {
    id: 1,
    title: "تطبيق سماع",
    category: "app",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "تطبيق حديث يمكّنك من مشاهدة الفيديوهات والاستماع إلى الموسيقى والمقاطع الصوتية بجودة عالية وتصميم سهل الاستخدام"
  },
  {
    id: 2,
    title: "موقع ذاكر",
    category: "web",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "موقع ذاكر منصة اسلامية لجمع وإطلاق حملات ذكر حول العالم"
  },
  {
    id: 3,
    title: "مدونة إسلامية",
    category: "web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "مودنة اسلامية متكاملة مختصة في نشر المقالات الاسلامية في جميع الاختصاصات الدينية"
  },
  {
    id: 4,
    title: "تصميم موقع لشركة بيع احذية رياضية",
    category: "ui",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "واجهة مستخدم لموقع شركة احترافي بتصميم عصري"
  },
  {
    id: 5,
    title: "منصة وصل",
    category: "app",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "منصة مزودي الخدمات متخصصة في نشر الخدمات مع امكانية حجز خدمة"
  },
  {
    id: 6,
    title: "تصميم موقع شركة",
    category: "ui",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "واجهة مستخدم لموقع شركة احترافي بتصميم عصري"
  }
];
