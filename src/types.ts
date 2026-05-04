/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  description: string;
  url: string;
  type: 'frontend' | 'wordpress';
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface SkillGroup {
  category: string;
  skills: string;
}

export interface TechnicalSkill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools' | 'specialized';
  description: string;
}
