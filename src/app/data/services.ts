import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Briefcase,
  Code2,
  GraduationCap,
  MessageSquare,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';

export type ServiceLink = {
  to: string;
  label: string;
};

export type ServiceCard = ServiceLink & {
  description: string;
  icon: LucideIcon;
};

export const serviceLinks: ServiceLink[] = [
  { to: '/services', label: 'Overview' },
  { to: '/services/web-development', label: 'Web Development & Design' },
  { to: '/services/app-development', label: 'App Development' },
  { to: '/services/ai-integration', label: 'AI Integration & Automation' },
  { to: '/ai-training', label: 'AI Training' },
  { to: '/services/internet-marketing', label: 'Internet Marketing' },
  { to: '/services/analytics-growth', label: 'Analytics & Growth' },
  { to: '/services/strategy-consulting', label: 'Strategy & Consulting' },
  { to: '/services/lead-generation', label: 'Lead Generation' },
];

export const serviceCards: ServiceCard[] = [
  {
    to: '/services/web-development',
    label: 'Web Development & Design',
    description: 'Custom websites and web apps built for speed, clarity, and conversion.',
    icon: Code2,
  },
  {
    to: '/services/app-development',
    label: 'App Development',
    description: 'Mobile and web apps that are fast, reliable, and built to support growth.',
    icon: Smartphone,
  },
  {
    to: '/services/ai-integration',
    label: 'AI Integration & Automation',
    description: 'AI-powered tools and workflows that cut busywork and qualify leads automatically.',
    icon: Zap,
  },
  {
    to: '/ai-training',
    label: 'AI Training',
    description: 'Personal AI tutoring and assessments tailored to executives, teams, and business owners.',
    icon: GraduationCap,
  },
  {
    to: '/services/internet-marketing',
    label: 'Internet Marketing',
    description: 'SEO, GEO, paid ads, and funnels that put you in front of the right customers.',
    icon: TrendingUp,
  },
  {
    to: '/services/analytics-growth',
    label: 'Analytics & Growth',
    description: 'Dashboards and tracking that show where growth comes from and what to improve next.',
    icon: BarChart3,
  },
  {
    to: '/services/strategy-consulting',
    label: 'Strategy & Consulting',
    description: 'Clear roadmaps and practical guidance so you know what to build and prioritize next.',
    icon: MessageSquare,
  },
  {
    to: '/services/lead-generation',
    label: 'Lead Generation',
    description: 'Lead capture, routing, and follow-up systems that keep your pipeline full.',
    icon: Target,
  },
];

export const serviceMenuIcon = Briefcase;
