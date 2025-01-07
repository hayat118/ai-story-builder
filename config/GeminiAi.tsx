const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Create Kids story on description for 5-8 years kids.Educational story and all image in paper cut style.story of a boy  and magic school,give me 5 chapter,for detailed image text for each chapter and image prompt for story cover book and story name,all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "storyTitle": "The Boy Who Found Colors: A Magical School Adventure",\n  "cover": {\n    "imagePrompt": "A vibrant paper-cut style illustration of a young boy with tousled brown hair, wearing slightly oversized glasses, standing in front of a tall, whimsical school made of colorful, layered paper shapes. The school has mismatched windows and a crooked tower, surrounded by floating books and musical notes. The sky is a bright, patterned background with paper-cut stars and a crescent moon. The title \'The Boy Who Found Colors\' is written in playful, handcrafted paper letters at the top.",\n    "text": "A young boy stands in awe before a magical school made of paper. The vibrant colors draw the eye, promising adventure within."\n  },\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterTitle": "A Gray Day",\n      "storyText": "Toby lived in a world that felt… gray. Everything was the same shade of dull. His house, his toys, even his breakfast! One day, while kicking a pebble down the road (also gray!), he stumbled upon a hidden path.  At the end stood a school unlike any he’d ever seen! It shimmered with colors he’d never even imagined.",\n       "imagePrompt": "Paper-cut style illustration showing a young boy, Toby, with brown hair and glasses, walking down a gray street. The houses and objects around him are all different shades of gray.  He\'s looking surprised at a bright, colorful path leading away from the gray street, with the tip of the paper-cut magical school just visible at the end.",\n       "imageText": "Toby\'s world was a sea of gray, until he found a path bursting with color!"\n    },\n     {\n      "chapterNumber": 2,\n      "chapterTitle": "The Rainbow Room",\n      "storyText": "The school was even more amazing inside!  The first room Toby entered was the \'Rainbow Room\'.  Every wall was a different color - a sunny yellow, a vibrant blue, a grassy green.  The desks were shaped like crayons and the chairs were fluffy clouds!  A friendly paper owl perched on a bookshelf, blinking slowly.",\n      "imagePrompt": "Paper-cut style illustration of the inside of the \'Rainbow Room\'. The walls are layered paper in yellow, blue and green.  The desks are crayon-shaped with cloud chairs. A paper owl with big, round eyes is sitting on a shelf filled with colorful paper-cut books.",\n      "imageText": "The Rainbow Room filled Toby with joy, colors he\'d never seen before!"\n    },\n     {\n      "chapterNumber": 3,\n      "chapterTitle": "Learning to Mix",\n      "storyText":"A kind, paper-cut teacher with a paintbrush hat showed Toby how colors worked. He learned that yellow and blue could make green! Red and yellow made orange! He dipped his paper paintbrush into pots of magical color and mixed them on a big paper canvas, laughing as the colors swirled and changed.",\n      "imagePrompt": "Paper-cut style illustration of Toby at a large paper easel, mixing colors. A teacher with a paintbrush hat is smiling and pointing at the mixing colors. Pots of red, yellow, and blue paint are nearby. The canvas has swirling mixtures of green and orange.",\n       "imageText": "With every mix, Toby discovered how colors could create magic."\n    },\n     {\n      "chapterNumber": 4,\n      "chapterTitle": "Coloring the World",\n       "storyText": "Toby couldn\'t wait to bring the colors back to his world.  He carefully painted paper butterflies in every shade imaginable and let them fly out of the school windows. He drew colorful paper flowers that bloomed in the dull gray street. Soon, everything he touched turned bright and cheerful!",\n      "imagePrompt": "Paper-cut style illustration showing Toby standing outside the school, releasing paper-cut butterflies in various colors.  Below him, paper-cut flowers are growing from the once-gray ground. Houses in the background are starting to show colorful details.",\n      "imageText":"Toby brought the magic of colors to his gray world, one paper butterfly at a time."\n\n    },\n    {\n     "chapterNumber": 5,\n     "chapterTitle": "The World in Bloom",\n     "storyText": "Toby\'s town was now a happy place, filled with color and laughter. The gray was gone, replaced by the bright shades he had learned to mix and create. Toby visited the magical school every day, eager to learn more about the wonderful world of color. And he knew, that even the grayest of days could be transformed with a little imagination and a lot of color!",\n     "imagePrompt": "Paper-cut style illustration showing Toby\'s town completely transformed with color. Houses are now colorful and cheerful, paper-cut flowers are blooming everywhere, and children are playing happily in the bright setting. Toby stands smiling in the middle, holding a paper-cut paintbrush. The school is visible in the background, still shimmering with color.",\n      "imageText":"Toby\'s world now bloomed with color, showing that even gray can be turned into something beautiful."\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
