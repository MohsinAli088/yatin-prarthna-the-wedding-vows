// Wording for Bride Side (Bhatt Family) as per brideside.md
export const music = { src: 'audio/sajna.mp3', title: 'Sajna', volume: 0.6 }

export const couple = {
  bride: 'Prarthana',
  groom: 'Yatin',
  tagline: 'United as one - two souls, one journey.',
}

export const mantra = {
  shri: 'શ્રી',
  ganesh: '॥ શ્રી ગણેશાય નમઃ ॥',
  lalitambika: '॥ શ્રી લલિતામ્બિકાયૈ નમઃ ॥',
}

// MAIN PAGE 1: GANESH
export const opening = {
  shloka: [
    'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।',
    'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
  ],
  intro: 'Wedding invitation of',
  bride: { name: 'Prarthana', parents: '(Daughter of Hema and Bhrugesh Bhatt)' },
  groom: { name: 'Yatin', parents: '(Son of Sona and Pritesh Karia)' },
}

// SAPTABANDHAN CONCEPT
export const description = {
  title: 'Saptabandhan',
  subtitle: 'Our Wedding Journey in Seven Sacred Chapters',
  paragraphs: [
    [
      { text: "Our wedding journey unfolds in seven sacred chapters beginning with the decision to celebrate our " },
      { text: "Lotus", type: "element" },
      { text: "-like souls' union with all of you in the " },
      { text: "Kankotri Lekhan", type: "function" },
      { text: ". The groom and his family then introduced the bride to their customs and bound the souls in a " },
      { text: "“Sacred Wedding Knot”", type: "element" },
      { text: " during the " },
      { text: "Chundadi Function", type: "function" },
      { text: " followed by the fragrant, love-filled " },
      { text: "Waves", type: "element" },
      { text: " of the " },
      { text: "Mehandi Celebration", type: "function" },
      { text: " to both families." },
    ],
    [
      { text: "We then sought auspicious planetary blessings to direct us through life, like the " },
      { text: "North Star", type: "element" },
      { text: " with the auspicious " },
      { text: "Grah Shanti", type: "function" },
      { text: " before we go back to our roots, where all near and dear ones bless us " },
      { text: "Infinity", type: "element" },
      { text: " with health and prosperity through the customary healthy " },
      { text: "Haldi", type: "function" },
      { text: "." },
    ],
    [
      { text: "In the penultimate stage, all of us gather under the stars to dance and celebrate to the " },
      { text: "Moon and back", type: "element" },
      { text: " in " },
      { text: "Sangeet Night", type: "function" },
      { text: " leading finally to the ultimate " },
      { text: "Vivah", type: "function" },
      { text: ", where " },
      { text: "Agnidev (Agni)", type: "element" },
      { text: " witnesses and blesses our eternal union." },
    ],
  ],
}

// SEQUENCE OF ELEMENTS
export const sequenceOfElements = [
  { icon: 'lotus', name: 'Lotus', meaning: 'Purity, spiritual awakening and divine blessings.' },
  { icon: 'knot', name: 'The Sacred Knot', meaning: 'The sacred knot of marriage, symbolizing unity and commitment.' },
  { icon: 'waves', name: 'Waves', meaning: 'Love that comes in fragrant, joyous waves.' },
  { icon: 'north-star', name: 'The North Star', meaning: 'Guidance and protection of celestial bodies.' },
  { icon: 'infinity', name: 'Infinity', meaning: 'Deep roots and an unending bond of health and prosperity.' },
  { icon: 'sun-moon', name: 'Sun-Moon', meaning: 'Harmonious celebration balancing energies in the galaxy.' },
  { icon: 'agni', name: 'Agni', meaning: 'The sacred fire witnessing and blessing our eternal union.' },
]

const BANSIDHAR_APT = [
  'A-19/20 Bansidhar Apartment, Opp. Mitramilan Soc.,',
  'Nr. Mirambika School, Naranpura, Ahmedabad 380013',
]
const KAMLA_AMRUT = ['Kamla Amrut Farm']
const KALYAN_PUSHTI = ['Kalyan Pushti Haveli, Vastrapur', 'Ahmedabad, Gujarat']

export const events = [
  {
    id: 'wedding',
    title: 'Wedding – Eternity',
    theme: 'eternity',
    element: 'agni',
    invocation: { lang: 'gu', text: '॥ શ્રી લલિતામ્બિકાયૈ નમઃ ॥' },
    blessing: {
      verse: { lang: 'hi', lines: ['जेहि कें जेहि पर सत्य सनेहू।', 'सो तेहि मिलइ न कछु संदेहू॥'] },
      lines: [
        'With mantras in the air, blessings in our hearts, and the grace of the divine,',
        'We invite you to witness the sacred union of two hearts and two families.',
      ],
    },
    date: 'Tuesday, 24th November 2026',
    dateNote: 'Shukla Purnima, Vikram Samvant 2083',
    schedule: [
      { label: 'Hastmelap', time: '7:30 PM', note: '(followed by DINNER)' },
    ],
    dressCode: { label: 'Indian Traditional', colors: [] },
    venue: KAMLA_AMRUT,
    description:
      'The souls unite again in their eternal journey and vow togetherness in the presence of the most efficient purifiers – “The Agni”. The bond continues…',
  },
]

// PAGE: FAMILY (Bhatt Family)
export const family = {
  title: '|| A cordial invitation from ||',
  groups: [
    {
      members: [
        'Heavenly abode Mrs. Sharmishtaben Prasannakumar Bhatt',
        'Heavenly abode Mr. Prasannakumar Veniram Bhatt',
      ],
    },
    {
      members: [
        'Heavenly abode Mrs. Hema Bhrugesh Bhatt',
        'Mr. Bhrugesh Prasannakumar Bhatt',
      ],
    },
    {
      members: [
        'Mrs. Stuti Gaurav Bhatt',
        'Mr. Gaurav Janakkumar Bhatt',
        'Ms. Parthi Gaurav Bhatt',
      ],
    },
  ],
  awaits: 'Entire Bhatt Family awaits your presence',
  note: '',
}

export const mapsLink = (lines) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lines.join(' '))}`
