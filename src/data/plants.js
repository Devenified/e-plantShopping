export const plantSections = [
  {
    id: 'aromatic',
    title: 'Aromatic Plants',
    description:
      'Fragrant house plants that bring a fresh, calming scent into reading corners, kitchens, and sunny windows.',
    plants: [
      {
        id: 'lavender',
        name: 'Lavender Calm',
        price: 18,
        cost: '$18.00',
        description: 'Soft purple blooms with a relaxing aroma that loves bright, airy rooms.',
        image:
          'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'mint',
        name: 'Kitchen Mint',
        price: 12,
        cost: '$12.00',
        description: 'Fast-growing mint with crisp leaves that brighten tea blends and window sills.',
        image:
          'https://images.unsplash.com/photo-1628556270448-4d4e4148e3e5?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'jasmine',
        name: 'Star Jasmine',
        price: 22,
        cost: '$22.00',
        description: 'A flowering climber with sweet perfume and glossy green leaves.',
        image:
          'https://images.unsplash.com/photo-1611048268330-53de574cae3f?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'medicinal',
    title: 'Medicinal Plants',
    description:
      'Trusted wellness plants known for soothing leaves, resilient growth, and easy indoor care routines.',
    plants: [
      {
        id: 'aloe',
        name: 'Aloe Vera',
        price: 16,
        cost: '$16.00',
        description: 'A sculptural succulent prized for cooling gel and low-maintenance care.',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'tulsi',
        name: 'Holy Basil Tulsi',
        price: 14,
        cost: '$14.00',
        description: 'A sacred herb with peppery fragrance and vibrant green foliage.',
        image:
          'https://images.unsplash.com/photo-1615485925879-9d44d5986f16?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'chamomile',
        name: 'Chamomile',
        price: 15,
        cost: '$15.00',
        description: 'Delicate daisy-like blooms that add softness and cottage-garden charm indoors.',
        image:
          'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
];

export const allPlants = plantSections.flatMap((section) =>
  section.plants.map((plant) => ({
    ...plant,
    sectionId: section.id,
    sectionTitle: section.title,
  })),
);
