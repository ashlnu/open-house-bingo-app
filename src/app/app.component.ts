import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'open-house-bingo-app';
  listItem!: string;
  remainingWordList: string[] = [];
  originalWordList: string[] = [
    'Gardening',

    'Drawing/Sketching',

    'Painting',

    'Gym/Working out',

    'Self-care',

    'Gaming',

    'Binge-watching movies/TV shows',

    'Singing',

    'Playing a musical instrument',

    'Dancing',
    'Munching/Eating',

    'Checking your phone',

    'Playing',

    'Sleeping/Dozing off',

    'Doing laundry',

    'Answering the door',

    'Cooking',

    'Listening to music',

    'Working out',

    'Watching a movie/TV show',
    'Loud chewing',

    'Being late',

    'Interrupting',

    'People walking too slow',

    'Staring at someone else’s phone',

    'Clipping nails in public',

    'Talking when your mouth is full',

    'Cracking knuckles',

    'Correcting grammar',

    'Leaving dirty dishes in sink',
    'Zoom parties ',

    'Spending more time with family',

    'Taking naps in between work from home',

    'Netflix and chill',

    'Collecting memes',

    'Listening to PM’s speeches',

    'Playing board games',

    'House parties',

    'Online shopping',

    'Zumba at home',

    'Learning your favourite hobby',

    'Spending time with loved ones',
    'Romantic dates at home with partner',
    'Routine',

    'Water Cooler Gossip/Chai pe Charcha',

    'Fun activities',

    'Team lunches/outings',

    'Parties',

    'Brainstorming sessions',

    'Office Pantry meals/Pandit ji ka khana',

    'Festival celebrations',

    'Leadership talks/Town-halls',
    'Sexist jokes',

    'HU jokes',

    'Relatable jokes about Managers',

    'Most people have no idea how their code works',

    'Hilarious memes',

    'Work From Home jokes',

    'COVID-related humor',
    'Great Place to Work',

    'Extreme Ownership',

    'Fun Culture',

    'Startup',

    'Awesome colleagues',

    'Learning environment',

    'Born in Cloud',

    'Exponential growth',
    'Tony and Neha kakkar songs',

    'Reels on Instagram',

    'Listening to bachpan ka pyaar song everywhere',

    'Workout videos of your friends',

    'The ringtone of teams/skype/ zoom calls',

    'Playing online games like ludo',

    'Arnab Goswami shouting onscreen',

    'BTS songs',

    'K-pop and K-drama references everywhere',

    'Cringe pre wedding photoshoots',

    'Self-proclaimed therapists online',
    'Coca cola',
    'Pepsi',

    'Sprite',

    'Maaza',

    'Thums up',
    'Cricket',

    'Soccer',

    'Tennis',

    'Basketball',

    'Badminton',
    'Americano',

    'Expresso',

    'Cappuccino',

    'latte',
  ];
  currentWord!: string;
  processedWordList: string[] = [];

  addListItem(): void {
    this.originalWordList.push(this.listItem);
    this.remainingWordList.push(this.listItem);
    this.listItem = '';
  }
  getNewWord(): void {
    const newWordIndex = this.getRandomInt();
    const newWord = this.remainingWordList[newWordIndex];
    this.currentWord = newWord;
    this.remainingWordList.splice(newWordIndex, 1);
    this.processedWordList.push(newWord);
    window.sessionStorage.setItem(
      'processedWordList',
      JSON.stringify(this.processedWordList)
    );
    window.sessionStorage.setItem(
      'remainingWordList',
      JSON.stringify(this.remainingWordList)
    );
  }
  getRandomInt() {
    const size = this.remainingWordList.length;
    return Math.floor(Math.random() * size);
  }

  isAlreadySelected(word: string) {
    return this.processedWordList.includes(word);
  }
  ngOnInit(): void {
    this.remainingWordList = [...this.originalWordList];
    this.processedWordList = JSON.parse(
      window.sessionStorage.getItem('processedWordList') || ''
    );
    this.remainingWordList = JSON.parse(
      window.sessionStorage.getItem('remainingWordList') || ''
    );
  }
  resetGame() {
    this.remainingWordList = [...this.originalWordList];
    this.processedWordList = [];
    this.currentWord = '';
    window.sessionStorage.removeItem('processedWordList');
    window.sessionStorage.removeItem('remainingWordList');
  }
}
