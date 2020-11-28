'use strict';
let currentScore = 0;
let currentQuestion = -1;

const quizQuestions = [
  {
    question: 'Are you in a relationship?',
    answer1: 'Yeah',
    answer2: 'Nope',
    answer3: 'With my right hand maybe',
    answer4: 'No, but I am seeing someone'
  },
  {
    question: 'How would you describe your bedroom persona?',
    answer1: 'I am the dominant one, grr',
    answer2: 'I am a pathetic little sub',
    answer3: 'I can switch roles if need be - not fussed',
    answer4: 'All this dom/sub shit is super weird...'
  },
  {
    question: 'Which celebrity should you make a lovely meal for?',
    answer1: 'Miley Cyrus',
    answer2: 'Danny Devito',
    answer3: 'Mia Khalifa',
    answer4: 'Gordon Ramsey'
  },
  {
    question: 'Big spoon or little spoon?',
    answer1: 'Big spoon',
    answer2: 'Little spoon',
    answer3: 'Why are we talking about spoons?'
  },
  {
    question: 'Your s/o says they\'re cold, what do you do?',
    answer1: '*baby voice* do you want a blanky and a cup of hot choccy :3?',
    answer2: 'Best way to get warm is to F**K',
    answer3: 'Tell them to grow up and to stop being a simp',
    answer4: 'You put the heating on'
  }
];

const quizAnswers = [
  'Nope',
  'All this dom/sub shit is super weird...',
  'Danny Devito',
  'Why are we talking about spoons?',
  'Tell them to grow up and to stop being a simp'
];

const quizExplanations = [
  'The greatest method to avoid simping is simply to avoid all relationships. To abstain from any and all simping is the true path to enlightenment.',
  'A dom is just a dominant simp. And a sub is obvious. Go donate to your favorite egirl you dirty simps.',
  'Jesus, Buddha, and Danny Devito are the only acceptable vessels for simpage. Maybe Gordon, but you really just want him to roast your lamb sauce. Mia or Miley? . . . Pathetic.',
  'This was simply a thought purity test. If you even know what big or little spoon means implies that you have dabbled in simpcraft.',
  'You\'re doing a service to the world by telling your s/o to stop being a simp. Baby voice?? *spits* kinda cRiNgE'
]