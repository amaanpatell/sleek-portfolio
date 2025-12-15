import Code from '@/components/svgs/Code';
import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'LeetLab',
    description:
      'A LeetCode-style coding practice platform with real-time code execution, problem management, and submission tracking.',
    image: '/project/leetlab.png',
    video: 'https://ik.imagekit.io/yourid/leetlab.mp4?tr=orig',
    link: 'https://leetlabs.space',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/amaanpatell/leetlabs',
    live: 'https://leetlabs.space',
    details: true,
    projectDetailsPageSlug: '/projects/leetlab',
    isWorking: true,
  },

  {
    title: 'Moments',
    description:
      'A media editing platform for images and videos using ImageKit transformations like crop, resize, optimize, and CDN delivery.',
    image: '/project/moments.png',
    video: 'https://ik.imagekit.io/yourid/moments.mp4?tr=orig',
    link: 'https://moments.amaanpatel.space',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/amaanpatell/moments',
    live: 'https://moments.amaanpatel.space',
    details: true,
    projectDetailsPageSlug: '/projects/moments',
    isWorking: true,
  },

  {
    title: 'NotebookLM AI Chatbot',
    description:
      'An AI chatbot that lets users chat with PDFs, YouTube videos, websites, and text using a RAG-based architecture.',
    image: '/project/notebooklm.png',
    video: 'https://ik.imagekit.io/yourid/notebooklm.mp4?tr=orig',
    link: 'https://notebooklm.amaanpatel.space',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/amaanpatell/notebook_lm',
    live: 'https://notebooklm.amaanpatel.space',
    details: true,
    projectDetailsPageSlug: '/projects/notebooklm',
    isWorking: true,
  },

  {
    title: 'T3Chat Clone',
    description:
      'A multi-model AI chat application powered by OpenRouter with real-time streaming and model switching.',
    image: '/project/t3chat.png',
    video: 'https://ik.imagekit.io/yourid/t3chat.mp4?tr=orig',
    link: 'https://super-ask.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/amaanpatell/superAsk',
    live: 'https://super-ask.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/t3chat',
    isWorking: false,
  },

  {
    title: 'ProjectCamp',
    description:
      'A collaborative project management app to manage projects, tasks, assignments, notes, and sub-notes.',
    image: '/project/projectcamp.png',
    video: 'https://ik.imagekit.io/yourid/projectcamp.mp4?tr=orig',
    link: 'https://task-management.amaanpatel.space',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/amaanpatell/task-management',
    live: 'https://task-management.amaanpatel.space',
    details: true,
    projectDetailsPageSlug: '/projects/projectcamp',
    isWorking: true,
  },
];
