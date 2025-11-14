export const script = [
  // --- SCENE 1: ARRIVING IN WILLOWBROOK ---
  {
    type: 'title',
    text: 'CHAPTER 1: “Morning Air”',
  },
  {
    type: 'background',
    description: '/images/willowbrook-town.png',
  },
  {
    type: 'narration',
    text: 'The morning settles softly over Willowbrook, warm and bright, the way small towns always seem to remember who you used to be.',
  },
  {
    type: 'narration',
    text: 'CASS steps down from the small bus, carrying a satchel.',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: '(softly to themself) So this is Willowbrook again… it smells like rain and warm bread.',
  },
  {
    type: 'dialogue',
    character: 'BUS DRIVER',
    text: "Pretty little place, isn’t it? I can set your bags by the post office if you'd like.",
  },
  {
    type: 'choice',
    options: [
      {
        text: '“Yes please, that would be great.”',
        followUp: [
          {
            type: 'narration',
            text: 'His kindness feels like a warm coin slipped into your pocket.',
          },
        ],
      },
      {
        text: '“I’ve got it — thanks.”',
        followUp: [
          {
            type: 'narration',
            text: 'Independence steadies your nerves as your boots hit the cobblestone.',
          },
        ],
      },
      {
        text: '“Only if you want to arm-wrestle my suitcase.”',
        followUp: [
          {
            type: 'narration',
            text: 'He laughs loudly. The tension breaks; the town suddenly feels friendlier.',
          },
        ],
      },
    ],
  },

  // --- SCENE 2: INSIDE THE POST OFFICE ---
  {
    type: 'background',
    description: '/images/post-office.png',
  },
  {
    type: 'narration',
    text: 'The bell above the door jingles. Nora, the postmaster, is sorting envelopes by hand, humming softly.',
  },
  {
    type: 'dialogue',
    character: 'NORA',
    text: 'Well look at that — you found your way back. Thought the city might’ve swallowed you whole.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“It’s good to be back.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Good. We need someone who knows the lake path by heart.',
          },
        ],
      },
      {
        text: '“Reporting for duty.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Big words. Let’s see if you sort faster than you talk.',
          },
        ],
      },
      {
        text: '“Did you miss my chaotic sorting skills?”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Oh absolutely. The chaos really brought charm to the place.',
          },
        ],
      },
    ],
  },
  {
    type: 'dialogue',
    character: 'NORA',
    text: 'We’ve got two routes open today — east road or lakeside. Pick whichever suits your mood.',
  },
  {
    type: 'choice',
    options: [
      {
        text: 'Lakeside route — slow, scenic.',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'You’ll meet more smiles than mailboxes there.',
          },
          {
            type: 'narration',
            text: 'The satchel feels lighter already.',
          },
        ],
      },
      {
        text: 'East route — efficient, more stops.',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Very practical. You’ll be done before the kettle whistles.',
          },
          {
            type: 'narration',
            text: 'A productive day starts with purpose.',
          },
        ],
      },
      {
        text: 'Ask Nora for a quick tip about the townsfolk.',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Let’s see… Mrs. Whitlow bakes for strangers. The pier workers love a good story. And if you see Mateo, avoid mentioning clocks — he gets sentimental.',
          },
          {
            type: 'narration',
            text: 'You tuck the tips away like folded notes.',
          },
        ],
      },
    ],
  },

  // --- SCENE 3: FIRST DELIVERY WALK ---
  {
    type: 'background',
    description: '/images/lakeside-path.png',
  },
  {
    type: 'narration',
    text: 'Your feet crunch over the gravel path. The lake gleams like brushed glass, and the air tastes cleaner than you remembered.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“I needed this slow quiet.”',
        followUp: [
          { type: 'narration', text: 'Silence feels like healing in motion.' },
        ],
      },
      {
        text: '“Maybe this is the reset I was looking for.”',
        followUp: [
          {
            type: 'narration',
            text: 'The lake mirrors a steadier version of you.',
          },
        ],
      },
      {
        text: '“I hope the townspeople are as gentle as this view.”',
        followUp: [
          {
            type: 'narration',
            text: 'You breathe a quiet hope into the morning air.',
          },
        ],
      },
    ],
  },

// --- SCENE 4: FIRST DELIVERY: MATEO ON THE DOCK ---
  {
    type: 'background',
    description: '/images/mateo-dock.png',
  },
  {
    type: 'dialogue',
    character: 'MATEO',
    text: 'Hey there! New courier? Or returning courier? Hard to tell — the lake keeps secrets.',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: 'Delivery for Mateo Reyes. No secrets included. Probably.',
  },
  { // <--- THIS IS YOUR "CHOICE 5"
    type: 'choice',
    options: [
      {
        text: '“Nice place you’ve got here.”',
        followUp: [
          {
            type: 'dialogue', 
            character: 'MATEO',
            text: 'The lake’s the real landlord — I just borrow the view.',
          },
        ],
      },
      {
        text: '“Busy morning?”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MATEO',
            text: 'Only as busy as a boat decides to be.',
          },
        ],
      },
      {
        text: '“You said the lake keeps secrets?”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MATEO',
            text: 'Ah, don’t mind me. I grew up telling stories to passing winds.',
          },
        ],
      },
    ],
  },
  {
    type: 'dialogue',
    character: 'MATEO',
    text: 'If you’re staying long, the pier folk will get used to you quick. We like familiar faces.',
  },
  {
    type: 'narration',
    text: 'His voice blends easily with the waves.',
  },

  // --- SCENE 5: END OF DAY AT THE POST OFFICE ---
  {
    type: 'background',
    description: '/images/post-office-evening.png',
  },
  {
    type: 'narration',
    text: 'Interior with soft evening light, tea steaming on the counter, the cat now awake and stretching.',
  },
  {
    type: 'dialogue',
    character: 'NORA',
    text: 'How was day one? Still breathing?',
  },
  { // <--- THIS IS YOUR "CHOICE 6"
    type: 'choice',
    options: [
      {
        text: '“It felt peaceful. I missed this.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Good. Peace is our secret specialty.',
          },
        ],
      },
      {
        text: '“I think I’m going to like it here.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'That’s the reaction we hope for — not the ‘run back to the bus’ one.',
          },
        ],
      },
      {
        text: '“Met Mateo. He seems interesting.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'NORA',
            text: '(laughs softly) Interesting is one word. You’ll meet the rest soon.',
          },
        ],
      },
    ],
  },
  {
    type: 'narration',
    text: 'The day folds quietly into evening.',
  },
  {
    type: 'narration',
    text: 'And for the first time in a long while… your heart feels less heavy.',
  },

  // --- END OF CHAPTER ---
  {
    type: 'end',
  },
];