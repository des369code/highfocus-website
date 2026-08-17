// Curated stock photography — swap these URLs for the client's real photos later.
const u = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("photo-1530124566582-a618bc2615dc", 1400), // engineers, hard hats & blueprints
  about: u("photo-1581091226825-a6a2a5aee158", 1200), // welder at work
  services: u("photo-1504328345606-18bbc8c9d7d1", 1400), // industrial plant floor
  programmes: u("photo-1513828583688-c52646db42da", 1400), // forklift in warehouse
  leadership: u("photo-1517245386807-bb43f82c33c4", 1200), // leadership presentation
  training: u("photo-1521737604893-d14cc237f11d", 1200), // team training session
  team: u("photo-1552664730-d307ca884978", 1200), // workshop collaboration
  cta: u("photo-1541888946425-d81bb19240f5", 1600), // construction site
  fallback: u("photo-1567789884554-0b844b597180", 1200), // warehouse
};
