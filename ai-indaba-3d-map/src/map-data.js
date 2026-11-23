export const palette = {
  ink: 0x172037,
  navy: 0x1f4f87,
  purple: 0x6f2dbd,
  magenta: 0xf22cc2,
  cyan: 0x66c5ce,
  green: 0x87b96a,
  sand: 0xeadfbd,
  cream: 0xf3eee0,
  orange: 0xc56b08,
  blue: 0x9fc2e8,
  charcoal: 0x222631,
  gray: 0x8c98aa,
  white: 0xffffff
};

export const locations = [
  { id: 'field', name: 'Field area', category: 'Outdoor', position: [-30, 0], size: [12, 66, 0.35], color: palette.green, description: 'Large outdoor field area on the western edge of the venue.' },
  { id: 'food-trucks', name: 'Food trucks', category: 'Food', position: [-29, 28], size: [8, 17, 0.55], color: palette.sand, description: 'Food truck zone in the south-west section of the event site.' },
  { id: 'exhibitor-parking', name: 'Exhibitor parking', category: 'Parking', position: [-20, -8], size: [6, 20, 0.25], color: palette.orange, description: 'Dedicated exhibitor parking beside the exhibition hall.' },
  { id: 'vip-parking', name: 'VIP parking', category: 'Parking', position: [-18, -42], size: [28, 5, 0.25], color: palette.orange, description: 'VIP parking strip along the northern boundary.' },
  { id: 'skills-demos', name: 'Zone 3 skills demos', category: 'Program', position: [-35, -30], size: [4, 20, 0.25], color: palette.navy, description: 'Zone 3 skills demonstration area along the western boundary.' },
  { id: 'medics', name: 'Medics', category: 'Safety', position: [-35, -42], size: [4, 4, 0.5], color: palette.magenta, description: 'Medical support point shown beside the skills-demo zone.' },
  { id: 'washing', name: 'Washing & water', category: 'Facilities', position: [-27, -42], size: [6, 4, 0.5], color: palette.cyan, description: 'Washing and water point along the northern boundary.' },
  { id: 'security', name: 'Security block', category: 'Safety', position: [-5, -38], size: [12, 7, 2.5], color: palette.charcoal, description: 'Security block close to the northern exit.' },
  { id: 'toilets', name: 'Toilets', category: 'Facilities', position: [29, -39], size: [17, 5, 2.0], color: palette.gray, description: 'Toilet facilities at the north-east side of the site.' },
  { id: 'exhibition', name: 'Exhibition Hall - Zone 2', category: 'Program', position: [-7, -6], size: [24, 26, 0.4], color: palette.blue, description: 'Detailed exhibition layout with 42 numbered stands. The overview also marks this footprint as 500-pax seating.' },
  { id: 'networking', name: 'Networking meeting space', category: 'Program', position: [-7, -23], size: [12, 6, 0.55], color: palette.sand, description: 'Networking and meeting space immediately north of the exhibition hall.' },
  { id: 'vip-catering', name: 'VIP & exhibitor catering', category: 'Food', position: [-7, 10], size: [13, 6, 0.65], color: palette.magenta, description: 'VIP and exhibitor catering in a 10 x 15 m Bedouin tent, as labelled in the overview.' },
  { id: 'main-stage', name: 'Main Stage - 300 pax', category: 'Program', position: [16, 0], size: [8, 25, 1.1], color: palette.navy, description: 'Main stage zone labelled for 300 people.' },
  { id: 'tennis-courts', name: 'Tennis courts', category: 'Venue', position: [30, -7], size: [15, 24, 0.2], color: palette.green, description: 'Existing tennis-court area on the eastern side of the venue.' },
  { id: 'kitchen', name: 'Existing building / kitchen', category: 'Venue', position: [6, -31], size: [14, 7, 2.2], color: palette.cream, description: 'Existing building and kitchen identified on the source overview.' },
  { id: 'hackathon', name: 'Hackathon - 10 x 15 m', category: 'Program', position: [15, 31], size: [15, 10, 0.55], color: palette.purple, description: 'Hackathon tent and work-table area, labelled 10 x 15 m.' },
  { id: 'catering', name: 'Catering - 10 x 20 m', category: 'Food', position: [1, 31], size: [10, 6, 0.55], color: palette.sand, description: 'General catering zone, labelled 10 x 20 m.' },
  { id: 'registration', name: 'Registration', category: 'Arrival', position: [28, 34], size: [8, 4, 0.7], color: palette.cyan, description: 'Event registration point at the south-east entrance.' },
  { id: 'emergency', name: 'Emergency area', category: 'Safety', position: [33, -25], size: [5, 8, 0.5], color: palette.magenta, description: 'Emergency area shown on the eastern boundary.' }
];

export const boothLayout = [
  [40,-8.2,-10.4,2.8,1.8],[39,-5.1,-10.4,2.8,1.8],[38,5.2,-10.4,2.8,1.8],[37,8.3,-10.4,2.8,1.8],
  [41,-10.2,-7.1,1.8,2.7],[42,-10.2,-4.1,1.8,2.7],[36,10.2,-6.8,1.8,2.7],[35,10.2,-3.8,1.8,2.7],[34,10.2,-0.8,1.8,2.7],[33,10.2,2.2,1.8,2.7],
  [1,-4.4,-6.8,5.3,2.3],[7,-5.7,-4.3,2.5,1.9],[6,-3.0,-4.3,2.5,1.9],
  [2,1.0,-6.8,2.5,2.3],[3,3.7,-6.8,2.5,2.3],[5,1.0,-4.3,2.5,1.9],[4,3.7,-4.3,2.5,1.9],
  [8,-5.6,-0.8,2.3,1.9],[9,-3.0,-0.8,2.3,1.9],[10,-0.4,-0.8,2.3,1.9],[11,2.2,-0.8,2.3,1.9],[12,4.8,-0.8,2.3,1.9],
  [17,-5.6,1.4,2.3,1.9],[16,-3.0,1.4,2.3,1.9],[15,-0.4,1.4,2.3,1.9],[14,2.2,1.4,2.3,1.9],[13,4.8,1.4,2.3,1.9],
  [18,-4.6,5.0,2.6,2.1],[19,-1.7,5.0,2.6,2.1],[20,1.2,5.0,2.6,2.1],[21,4.1,5.0,2.6,2.1],
  [25,-4.6,7.4,2.6,2.1],[24,-1.7,7.4,2.6,2.1],[23,1.2,7.4,2.6,2.1],[22,4.1,7.4,2.6,2.1],
  [26,-9.2,6.5,2.8,2.1],[32,8.6,6.5,2.8,2.1],
  [27,-5.6,10.3,2.3,1.9],[28,-3.0,10.3,2.3,1.9],[29,-0.4,10.3,2.3,1.9],[30,2.2,10.3,2.3,1.9],[31,4.8,10.3,2.3,1.9]
].map(([number,x,z,w,d]) => ({
  id: `booth-${number}`,
  number,
  name: `Exhibition stand ${number}`,
  category: 'Exhibition stand',
  position: [x,z],
  size: [w,d,1.25],
  description: `Numbered exhibition stand ${number} in the Zone 2 floorplan.`
}));

export const presets = {
  overview: { label: 'Overview', position: [76, 66, 78], target: [0, 0, 0] },
  exhibition: { label: 'Exhibition', position: [18, 34, 24], target: [-7, 0, -6] },
  stage: { label: 'Main stage', position: [43, 30, 28], target: [16, 0, 0] },
  hackathon: { label: 'Hackathon', position: [38, 28, 52], target: [15, 0, 31] },
  arrival: { label: 'Registration', position: [52, 25, 54], target: [28, 0, 34] }
};
