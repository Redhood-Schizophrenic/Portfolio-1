import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'StudyWings',
    description:
      'The passport to global education, StudyWings offers curated programs, comprehensive support, and tailored guidance for students seeking transformative academic experiences at prestigious institutions worldwide.',
    slug: 'studywings',
    imageLink1: '/Studywings/home.png',
    imageLink2: '/Studywings/1.png',
    imageLink3: '/Studywings/2.png',
    liveDemo: 'https://studywings.netlify.app/',
  },
  {
    id: 2,
    title: 'Blood Buddy',
    description:
      'A life-saving platform connecting donors with recipients, Blood Buddy simplifies the process of blood donation and enhances accessibility. Join this initiative to make an impact and save lives, one donation at a time.',
    slug: 'blood-buddy',
    imageLink1: '/Bloodbuddy/1.png',
    imageLink2: '/Bloodbuddy/2.png',
    imageLink3: '/Bloodbuddy/home.png',
    liveDemo: 'https://blood-donation-buddy.netlify.app/',
  },
  {
    id: 3,
    title: 'Adventour',
    description:
      'A platform designed for travel enthusiasts, Adventour allows users to discover and book exciting tours and travel packages. Explore your favorite destinations and make every occasion memorable.',
    slug: 'adventour',
    imageLink1: '/Adventour/1.png',
    imageLink2: '/Adventour/2.png',
    imageLink3: '/Adventour/home.png',
    liveDemo: 'https://adventours-travels.netlify.app',
  },
  {
    id: 4,
    title: 'Fitclub',
    description:
      'Fitclub is a comprehensive gym and fitness platform offering pricing plans, personalized programs, and resources to help users achieve their fitness goals effectively.',
    slug: 'fitclub',
    imageLink1: '/Fitclub/1.png',
    imageLink2: '/Fitclub/2.png',
    imageLink3: '/Fitclub/3.png',
    liveDemo: 'https://fitclub-gym-website.vercel.app',
  },
  {
    id: 5,
    title: 'Fasco',
    description:
      'An e-commerce platform specializing in apparel, Fasco enables users to explore and purchase fashionable clothing tailored to their unique preferences.',
    slug: 'fasco',
    imageLink1: '/Fasco/1.png',
    imageLink2: '/Fasco/2.png',
    imageLink3: '/Fasco/3.png',
    liveDemo: 'https://ecommerce-1-mu.vercel.app',
  },
  {
    id: 6,
    title: 'ElectroTech',
    description:
      'ElectroTech Manufacturing is a professional company profile website, showcasing innovative solutions and high-quality products for industrial and commercial applications.',
    slug: 'electrotech',
    imageLink1: '/ElectroTech/1.png',
    imageLink2: '/ElectroTech/2.png',
    imageLink3: '/ElectroTech/3.png',
    liveDemo: 'https://z6dlyzw0ekgqzgep.vercel.app',
  },
  {
    id: 7,
    title: 'Watches',
    description:
      'A visually appealing template website designed to showcase an elegant range of watches, perfect for businesses in the luxury accessory market.',
    slug: 'watches',
    imageLink1: '/Watches/1.png',
    imageLink2: '/Watches/2.png',
    imageLink3: '/Watches/3.png',
    liveDemo: 'https://shashanksangawar.github.io/Watches',
  },
  {
    id: 8,
    title: 'Eatofy',
    description:
      'A modern POS (Point of Sale) software platform designed for restaurants and food businesses to streamline operations and enhance customer experiences.',
    slug: 'eatofy',
    imageLink1: '/Eatofy/1.png',
    imageLink2: '/Eatofy/2.png',
    imageLink3: '/Eatofy/3.png',
    liveDemo: 'https://eatofy.in',
  },
  {
    id: 9,
    title: 'Furnitures',
    description:
      'A responsive template website tailored for showcasing a diverse range of furniture products, perfect for businesses in the home decor and furnishing industry.',
    slug: 'furnitures',
    imageLink1: '/Furnitures/1.png',
    imageLink2: '/Furnitures/2.png',
    imageLink3: '/Furnitures/3.png',
    liveDemo: 'https://shashanksangawar.github.io/Furnitures',
  },
  {
    id: 10,
    title: 'Glowing',
    description:
      'A sleek template website dedicated to displaying a variety of cosmetic products, offering an elegant and user-friendly experience for beauty brands.',
    slug: 'glowing',
    imageLink1: '/Glowing/1.png',
    imageLink2: '/Glowing/2.png',
    imageLink3: '/Glowing/3.png',
    liveDemo: 'https://shashanksangawar.github.io/Cosmetics/',
  },
  {
    id: 11,
    title: 'Finance Calculator App',
    description: 'Supports Asset Valuations for: Mutual Fund, Forex, Gold, Silver, Fixed Cumulative Deposits, Recurring Deposits, Collectibles, Post Office schemes - National Saving Certificate, Kisan Vikas Patra, Monthly Income Scheme, Time Deposits for 1, 2, 3, and 5 Years, Mahila Samaan Saving Certificate. Tax Splits for Net Taxable Income from years 2020 onwards for New and Old Regime for Individual income levels from 0 to 100 Crores.',
    slug: 'finoplex',
    imageLink1: '/Finoplex/finoplex1.png',
    imageLink2: '/Finoplex/finoplex2.png',
    imageLink3: '/Finoplex/finoplex3.jpg',
    liveDemo: 'https://dev.eatofy.in/',
  },
  {
    id: 12,
    title: 'Daily Wear',
    description:
      'A stylish template website showcasing a variety of daily wear and apparel options, tailored for businesses in the fashion and retail industries.',
    slug: 'daily-wear',
    imageLink1: '/DailyWear/1.png',
    imageLink2: '/DailyWear/2.png',
    imageLink3: '/DailyWear/3.png',
    liveDemo: 'https://shashanksangawar.github.io/Daily_wear/',
  },
  {
    id: 13,
    title: 'Personal Portfolio 1',
    description:
      'An earlier version of my personal portfolio, highlighting my professional achievements, skills, and past projects.',
    slug: 'portfolio-1',
    imageLink1: '/Portfolio-1/1.png',
    imageLink2: '/Portfolio-1/2.png',
    imageLink3: '/Portfolio-1/3.png',
    liveDemo: 'https://shashanksangawar.github.io/',
  },
  {
    id: 14,
    title: 'Personal Portfolio 2',
    description:
      'A more recent iteration of my personal portfolio, showcasing a refined design and updated content about my professional journey.',
    slug: 'portfolio-2',
    imageLink1: '/Portfolio-2/1.png',
    imageLink2: '/Portfolio-2/2.png',
    imageLink3: '/Portfolio-2/3.png',
    liveDemo: 'https://redhood-schizophrenic.netlify.app',
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-center mt-20 text-xl text-red-600">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className='text-xl font-semibold'>/<Link className='text-blue-400' href={`/projects`}>projects</Link>/{project.slug}</h1>
      <div className='flex justify-between items-start flex-col sm:flex-row p-10'>
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <Link
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Visit Live Demo
        </Link>
      </div>
      <p className="text-lg mb-8 text-gray-400 text-center">{project.description}</p>

      {project.imageLink1 || project.imageLink2 || project.imageLink3 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8">
          {project.imageLink1 && (
            <img
              src={project.imageLink1}
              alt={`${project.title} Image 1`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
          {project.imageLink2 && (
            <img
              src={project.imageLink2}
              alt={`${project.title} Image 2`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
          {project.imageLink3 && (
            <img
              src={project.imageLink3}
              alt={`${project.title} Image 3`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}
        </div>
      ) : null}

      <div className="text-center">
      </div>
    </div>
  );
}
