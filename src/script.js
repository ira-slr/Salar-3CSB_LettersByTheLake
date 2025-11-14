// src/script.js

export const script = [
  // =================================================================
  // --- CHAPTER 1: “Morning Air” ---
  // =================================================================

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
  {
    type: 'choice',
    options: [
      {
        text: '“Nice place you’ve got here.”',
        followUp: [
          {
            type: 'dialogue', // <<< TYPO FIX: Was 'dialogdialogue'
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
  {
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

  // =================================================================
  // --- CHAPTER 2: “The Note That Stayed” ---
  // =================================================================

  {
    type: 'title',
    text: 'CHAPTER 2: “The Note That Stayed”',
  },

  // --- SCENE 1: MORNING AT MIA’S CAFÉ ---
  {
    type: 'background',
    description: '/images/mias-cafe.png',
  },
  {
    type: 'narration',
    text: 'Mornings in Willowbrook don’t rush — they unfold, like pages in an old book.',
  },
  {
    type: 'dialogue',
    character: 'MIA',
    text: 'Refill on the house, Courier Cass. You’ve delivered more smiles than mail this week.',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: '(grinning) So I’m being paid in compliments now?',
  },
  {
    type: 'dialogue',
    character: 'MIA',
    text: 'You wish. Oh — Mrs. Whitlow left this for you. Said it’s “urgent in a non-urgent kind of way.”',
  },
  {
    type: 'narration',
    text: 'She slides over a small envelope sealed with a neat blue sticker.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“Should I be worried?”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: '(laughing) Only if you’re allergic to kindness.',
          },
        ],
      },
      {
        text: '“She’s always up to something sweet.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: 'That’s her way. Like a pie in human form.',
          },
        ],
      },
      {
        text: '“Better open it before the universe collapses.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: 'Dramatic. I like it.',
          },
        ],
      },
    ],
  },
  {
    type: 'picture',
    description: '/images/cass-holding-letter.png',
  },
  {
    type: 'narration',
    text: 'You slip a thumb under the seal. The paper smells faintly of lemon pie.',
  },

  // --- SCENE 2: THE LETTER ---
  {
    type: 'narration',
    text: '“Dear Cass,',
  },
  {
    type: 'narration',
    text: 'I heard whispers that you’ve been thinking about the city again.',
  },
  {
    type: 'narration',
    text: 'Before you go, I wanted to thank you — for reminding us what it’s like to give time, not just take it.',
  },
  {
    type: 'narration',
    text: 'You deliver presence, dear. Not just letters.”',
  },
  {
    type: 'narration',
    text: 'Presence.',
  },
  {
    type: 'narration',
    text: 'A word that fits heavier than it sounds — but warm, like a hand on your shoulder.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“Maybe I’m not ready to leave.”',
        followUp: [
          {
            type: 'narration',
            text: 'Roots grow quietly — you didn’t realize Willowbrook planted some in you.',
          },
        ],
      },
      {
        text: '“Maybe I can carry this pace with me.”',
        followUp: [
          {
            type: 'narration',
            text: 'Cities don’t have to be loud inside you.',
          },
        ],
      },
      {
        text: '“People really watch out for each other here.”',
        followUp: [
          {
            type: 'narration',
            text: 'The small things never stayed small in Willowbrook.',
          },
        ],
      },
    ],
  },

  // --- SCENE 3: MRS. WHITLOW’S PORCH ---
  {
    type: 'background',
    description: '/images/whitlows-porch.png',
  },
  {
    type: 'dialogue',
    character: 'MRS. WHITLOW',
    text: 'Oh, good morning, dear! You got my note?',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: 'I did. I wasn’t expecting something so… thoughtful.',
  },
  {
    type: 'dialogue',
    character: 'MRS. WHITLOW',
    text: 'Everything worth saying takes time. Now, come sit. You look like someone carrying words that don’t belong to you.',
  },
  {
    type: 'narration',
    text: 'Cass sits beside her as a breeze blows through the daisies.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“I don’t know if going back is the right choice.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MRS. WHITLOW',
            text: 'Leaving and staying are both choices of courage, dear.',
          },
        ],
      },
      {
        text: '“I thought I needed to rush back… maybe I don’t.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MRS. WHITLOW',
            text: 'Then don’t. Let the lake teach you how to breathe again.',
          },
        ],
      },
      {
        text: '“This town feels too good to be temporary.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MRS. WHITLOW',
            text: 'Then make it part of who you are, not where you are.',
          },
        ],
      },
    ],
  },
  {
    type: 'picture',
    description: '/images/cass-thoughtful-closeup.png',
  },
  {
    type: 'narration',
    text: 'Her words settle into you. Not pushing — just planting.',
  },

  // --- SCENE 4: THE LAST DELIVERY OF THE WEEK ---
  {
    type: 'background',
    description: '/images/golden-path-bicycle.png',
  },
  {
    type: 'narration',
    text: 'Funny thing about goodbyes — they never announce themselves.',
  },
  {
    type: 'narration',
    text: 'One day you’re new. The next… you’re part of the postcard.',
  },
  {
    type: 'narration',
    text: 'A final envelope rests in your satchel. No return address. Just a name you don’t recognize.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“Last one of the day. Let’s make it a good one.”',
        followUp: [
          {
            type: 'narration',
            text: 'Even the small tasks feel meaningful here.',
          },
        ],
      },
      {
        text: '“Whoever this is, I hope they need this letter.”',
        followUp: [
          {
            type: 'narration',
            text: 'Delivering things feels like delivering pieces of people.',
          },
        ],
      },
      {
        text: '“Weird… I swear I’ve never seen this name.”',
        followUp: [
          {
            type: 'narration',
            text: 'Mystery slips into the quiet afternoon.',
          },
        ],
      },
    ],
  },
  {
    type: 'picture',
    description: '/images/mailbox-by-lake.png',
  },
  {
    type: 'narration',
    text: 'Some deliveries aren’t meant to be solved — just sent.',
  },

  // --- SCENE 5: SUNSET AT THE LAKE ---
  {
    type: 'background',
    description: '/images/lake-sunset-golden.png',
  },
  {
    type: 'narration',
    text: 'You breathe in. The air tastes like stillness, like something inside you unclenching.',
  },
  {
    type: 'dialogue',
    character: 'CASS (voice-over)',
    text: 'Maybe peace isn’t a place. Maybe… it’s a pace.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“I’m staying. Even just for a while longer.”',
        followUp: [
          { type: 'narration', text: 'A decision rooted in quiet soil.' },
        ],
      },
      {
        text: '“I’ll go back eventually… but not yet.”',
        followUp: [
          { type: 'narration', text: 'Time feels negotiable here.' },
        ],
      },
      {
        text: '“Wherever I go next, I’m bringing this peace with me.”',
        followUp: [
          {
            type: 'narration',
            text: 'Willowbrook becomes a chapter you carry, not close.',
          },
        ],
      },
    ],
  },

  // --- END OF CHAPTER 2 IMAGE ---
  {
    type: 'background',
    description: '/images/cass-walking-home.png',
  },
  {
    type: 'narration',
    text: 'Tomorrow will bring more letters. More faces. More stories.',
  },
  {
    type: 'narration',
    text: 'But tonight — Willowbrook is enough.',
  },

  // =================================================================
  // --- CHAPTER 3: “What Stays, What Goes” ---
  // =================================================================

  {
    type: 'title',
    text: 'CHAPTER 3: “What Stays, What Goes”',
  },

  // --- SCENE 1: DAWN AT THE LAKESHORE ---
  {
    type: 'background',
    description: '/images/dawn-lakeshore.png',
  },
  {
    type: 'narration',
    text: 'Morning arrives quietly — almost shy.',
  },
  {
    type: 'narration',
    text: 'The lake breathes a soft fog, brushing past your cheeks like a greeting.',
  },
  {
    type: 'dialogue',
    character: 'CASS (voice-over)',
    text: 'A few weeks here… and my heart feels more mine than it has in years.',
  },
  {
    type: 'narration',
    text: 'FOOTSTEPS APPROACH. Mia appears with two steaming cups.',
  },
  {
    type: 'dialogue',
    character: 'MIA',
    text: 'I figured you’d be here. People don’t come to Willowbrook without learning to watch sunrises.',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: '(smiles) Guess I’m becoming predictable.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“I’m trying to soak in every last bit…”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: 'Then let the lake fill you up, Cass. It’s good at that.',
          },
        ],
      },
      {
        text: '“I’m torn. Really torn.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: 'Most things worth choosing tug a little.',
          },
        ],
      },
      {
        text: '“I feel… calm. Like myself again.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: 'Then maybe you’ve already found what you came for.',
          },
        ],
      },
    ],
  },
  {
    type: 'picture',
    description: '/images/cass-mia-dock.png',
  },

  // --- SCENE 2: THE TOWN GATHERS ---
  {
    type: 'background',
    description: '/images/town-square-gathering.png',
  },
  {
    type: 'narration',
    text: 'Word travels fast here — even whispers turn into warm gatherings.',
  },
  {
    type: 'narration',
    text: 'Mrs. Whitlow waves from her porch, apron flour-dusted. Mayor Hartley rushes over, cheeks rosy from the morning chill.',
  },
  {
    type: 'dialogue',
    character: 'MAYOR HARTLEY',
    text: 'Cass! We heard this might be your last week with us.',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: 'Maybe. I’m… still thinking.',
  },
  {
    type: 'dialogue',
    character: 'MRS. WHITLOW',
    text: 'Well, thinking is best done with pie. Come now — blueberry, just for you.',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“I’ve never felt so welcomed anywhere.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MRS. WHITLOW',
            text: 'And you’ll always be welcomed back.',
          },
        ],
      },
      {
        text: '“Leaving feels heavier than I expected.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MAYOR HARTLEY',
            text: 'Goodbyes only weigh what the memories are worth.',
          },
        ],
      },
      {
        text: '“I’m grateful. Truly.”',
        followUp: [
          {
            type: 'dialogue',
            character: 'MAYOR HARTLEY',
            text: 'Then let the gratitude guide you, like a compass.',
          },
        ],
      },
    ],
  },
  {
    type: 'picture',
    description: '/images/cass-town-farewell.png',
  },

  // --- SCENE 3: THE FINAL DELIVERY RUN ---
  {
    type: 'background',
    description: '/images/bicycle-leafy-tunnel.png',
  },
  {
    type: 'narration',
    text: 'Your final route feels different. Not like an ending — more like a full breath before the next step.',
  },
  {
    type: 'narration',
    text: 'You arrive at the last mailbox. The same star-painted one by the lake.',
  },
  {
    type: 'narration',
    text: 'Inside your satchel is a single letter, addressed simply: “To Cass.”',
  },
  {
    type: 'choice',
    options: [
      {
        text: '“Did someone know I’d end here?”',
        followUp: [
          {
            type: 'narration',
            text: 'Willowbrook has a talent for gentle surprises.',
          },
        ],
      },
      {
        text: '“Maybe it’s a goodbye.”',
        followUp: [
          {
            type: 'narration',
            text: 'Some goodbyes soften instead of sting.',
          },
        ],
      },
      {
        text: '“I’ll open it slowly… maybe too slowly.”',
        followUp: [
          {
            type: 'narration',
            text: 'You’re not ready — but you try.',
          },
        ],
      },
    ],
  },
  {
    type: 'narration',
    text: '“Cass,',
  },
  {
    type: 'narration',
    text: 'No matter where you go next,',
  },
  {
    type: 'narration',
    text: 'remember that stillness isn’t somewhere you find.',
  },
  {
    type: 'narration',
    text: 'It’s something you choose.',
  },
  {
    type: 'narration',
    text: 'And you chose it here first.',
  },
  {
    type: 'narration',
    text: '— Willowbrook”',
  },
  {
    type: 'narration',
    text: 'The words land softly. Like the last page of a letter you didnt want to finish.',
  },

  // --- SCENE 4: THE DECISION (NEW BRANCHING SCENE) ---
  // This scene is now the critical branching point.
  {
    type: 'background',
    description: '/images/sunset-goodbye-gathering.png',
  },
  {
    type: 'narration',
    text: 'Golden hour envelops the lake. The small bus to the city pulls up, its headlights cutting through the dusk. Its door hisses open.',
  },
  {
    type: 'narration',
    text: 'Mia, Mrs. Whitlow, and the Mayor stand nearby. This is it.',
  },
  {
    type: 'dialogue',
    character: 'MIA',
    text: 'So... that’s your bus, Cass. Are you... are you getting on it?',
  },
  {
    type: 'dialogue',
    character: 'CASS',
    text: 'I...',
  },
  {
    type: 'narration',
    text: 'This is the decision. What stays, and what goes.',
  },
  {
    type: 'choice',
    options: [
      {
        // --- "GO TO CITY" ENDING ---
        text: '“I have to go. But I’ll carry this place with me.”',
        isBranch: true, // This is a hard branch
        followUp: [
          // This array is now the ENTIRE "Go to City" ending
          {
            type: 'dialogue',
            character: 'MIA',
            text: '(nods sadly) We understand. Write us, okay?',
          },
          {
            type: 'narration',
            text: 'You give one last hug to each of them, and step onto the bus.',
          },
          {
            type: 'background',
            description: '/images/bus-ride-city-skyline.png',
          },
          {
            type: 'narration',
            text: 'The city feels the same — but you don’t.',
          },
          {
            type: 'narration',
            text: 'The noises aren’t as sharp. The pace not as demanding.',
          },
          {
            type: 'dialogue',
            character: 'CASS (voice-over)',
            text: 'I came to deliver letters. And somehow… I delivered myself back to me.',
          },
          {
            type: 'background',
            description: '/images/city-balcony-final.png',
          },
          {
            type: 'narration',
            text: 'Some places stay with you. Some people do, too.',
          },
          {
            type: 'title',
            text: 'Letters by the Lake',
          },
          { type: 'narration', text: '— THE END —' },
          { type: 'end' },
        ],
      },
      {
        // --- "STAY IN WILLOWBROOK" ENDING ---
        text: '“...I’m not getting on that bus.”',
        isBranch: true,
        followUp: [
          {
            type: 'dialogue',
            character: 'MIA',
            text: '(gasps) Cass... are you sure?',
          },
          {
            type: 'dialogue',
            character: 'CASS',
            text: 'I’m sure. My place is here. I’m staying.',
          },
          {
            type: 'narration',
            text: 'Mrs. Whitlow cheers. Mia pulls you into a tight hug as the bus door hisses shut and pulls away, empty.',
          },
          {
            type: 'background',
            description: '/images/post-office-new-day.png',
          },
          {
            type: 'narration',
            text: 'A few months later. The morning light feels familiar, like home.',
          },
          {
            type: 'narration',
            text: 'You hang your satchel on the hook in the post office. Your new home.',
          },
          {
            type: 'dialogue',
            character: 'NORA',
            text: 'Morning, Postmaster Cass. Got a busy day.',
          },
          {
            type: 'dialogue',
            character: 'CASS (voice-over)',
            text: 'I came to deliver letters. And I found the place they were meant for all along.',
          },
          {
            type: 'background',
            description: '/images/cass-at-home-lake.png',
          },
          {
            type: 'narration',
            text: 'Some people find their place. Some people make it.',
          },
          {
            type: 'title',
            text: 'Letters by the Lake',
          },
          { type: 'narration', text: '— THE END —' },
          { type: 'end' },
        ],
      },
    ],
  },
];