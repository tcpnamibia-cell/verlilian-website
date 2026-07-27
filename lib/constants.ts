export const COMPANY = {
  name: "Verlilian Investment CC",
  regNumber: "CC/2022/01587",
  address: "Erf 05 Brandberg Street, Kuisebmund, Walvis Bay, Namibia",
  email: "verensg@gmail.com",
  country: "Namibia",
} as const;

export const HERO = {
  headline: "AI-Native Solutions for African Agriculture & Logistics",
  description:
    "Verlilian Investment CC uses AI-native solutions to address agricultural and logistical challenges, empowering local producers in Namibia and across the continent.",
} as const;

export const PROBLEMS = [
  {
    icon: "🌡️",
    title: "Climate Volatility",
    description:
      "Erratic rainfall patterns and rising temperatures in Southern Africa directly threaten crop viability and farmer livelihoods.",
    bgColor: "bg-amber-100",
    textColor: "text-amber-700",
  },
  {
    icon: "🦠",
    title: "Crop Disease & Pests",
    description:
      "Limited access to agronomic expertise means diseases and pests often spread unchecked, destroying yields before intervention is possible.",
    bgColor: "bg-red-100",
    textColor: "text-red-700",
  },
  {
    icon: "🚛",
    title: "Supply Chain Gaps",
    description:
      "Inefficient logistics between rural farms and urban markets result in post-harvest losses and reduced income for producers.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
] as const;

export const SOLUTIONS = [
  {
    step: 1,
    title: "Crop Yield Optimization",
    description:
      "AI models analyze soil, weather, and satellite data to provide actionable planting and irrigation recommendations for Namibian farmers.",
  },
  {
    step: 2,
    title: "Disease Early Detection",
    description:
      "Computer vision systems identify crop stress and disease from smartphone images, enabling rapid response before spread.",
  },
  {
    step: 3,
    title: "Logistics Intelligence",
    description:
      "Route optimization and demand forecasting tools that connect rural producers directly to market opportunities with minimal waste.",
  },
] as const;

export const TECH_STACK = [
  { icon: "⚡", name: "Vercel", description: "Edge deployment & global CDN" },
  { icon: "🗄️", name: "Supabase", description: "PostgreSQL backend & real-time data" },
  { icon: "🐙", name: "GitHub", description: "Version control & CI/CD pipeline" },
] as const;
