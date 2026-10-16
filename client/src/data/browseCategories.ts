export interface BrowseCategory {
  name: string
  key: string
  icon: string
  category: string
  subcategory: string
}

export const categoryNames: Record<string, string> = {
  '20': 'Technology & Programming',
  '21': 'Writing & Translation',
  '22': 'Design',
  '23': 'Digital Marketing',
  '24': 'Video, Photo & Image',
  '25': 'Business',
  '26': 'Music & Audio',
  '27': 'Marketing, Branding & Sales',
  '28': 'Social Media'
}

export const categoryKeys: Record<string, string> = {
  '20': 'technology-programming',
  '21': 'writing-translation',
  '22': 'design',
  '23': 'digital-marketing',
  '24': 'video-photo-image',
  '25': 'business',
  '26': 'music-audio',
  '27': 'marketing-branding-sales',
  '28': 'social-media'
}

export const browseCategories: BrowseCategory[] = [
  { name: 'Graphic design', key: 'graphic-design', icon: 'Palette', category: '22', subcategory: '431' },
  { name: 'Web design', key: 'web-design', icon: 'Layers', category: '22', subcategory: '436' },
  { name: 'Accounting', key: 'accounting', icon: 'Calculator', category: '25', subcategory: '460' },
  { name: 'Mobile apps', key: 'mobile-apps', icon: 'Smartphone', category: '20', subcategory: '407' },
  { name: 'Software development', key: 'software-development', icon: 'CodeXml', category: '20', subcategory: '408' },
  { name: 'Game development', key: 'game-development', icon: 'Gamepad2', category: '20', subcategory: '406' },
  { name: 'Management', key: 'management', icon: 'ListChecks', category: '25', subcategory: '462' },
  { name: 'Video production', key: 'video-production', icon: 'Video', category: '24', subcategory: '456' },
  { name: 'Translation', key: 'translation', icon: 'Languages', category: '21', subcategory: '422' },
  { name: 'Legal services', key: 'legal-services', icon: 'Scale', category: '25', subcategory: '461' },
  { name: 'Databases', key: 'databases', icon: 'Database', category: '20', subcategory: '402' },
  { name: 'E-commerce', key: 'e-commerce', icon: 'ShoppingBag', category: '20', subcategory: '403' },
  { name: 'SEO', key: 'seo', icon: 'TrendingUp', category: '23', subcategory: '447' },
  { name: 'Content writing', key: 'content-writing', icon: 'PenLine', category: '21', subcategory: '413' },
  { name: 'Music production', key: 'music-production', icon: 'Music2', category: '26', subcategory: '475' },
  { name: 'Photography', key: 'photography', icon: 'Camera', category: '24', subcategory: '455' },
  { name: 'Website development', key: 'website-development', icon: 'Laptop', category: '20', subcategory: '411' },
  { name: 'Social media', key: 'social-media', icon: 'Hash', category: '28', subcategory: '507' },
  { name: 'Branding', key: 'branding', icon: 'Megaphone', category: '27', subcategory: '485' },
  { name: 'Illustration', key: 'illustration', icon: 'PencilRuler', category: '22', subcategory: '432' },
  { name: 'Research writing', key: 'research-writing', icon: 'BookOpen', category: '21', subcategory: '418' },
  { name: 'Audio editing', key: 'audio-editing', icon: 'Headphones', category: '26', subcategory: '464' },
  { name: 'Animation', key: 'animation', icon: 'Film', category: '22', subcategory: '424' },
  { name: 'Community management', key: 'community-management', icon: 'UsersRound', category: '28', subcategory: '497' }
]
