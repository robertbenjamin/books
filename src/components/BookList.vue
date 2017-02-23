<template>
  <section class='book-list'>
    <book-item
      v-for='book in books'
      v-bind:book='book'>
    </book-item>
  </section>
</template>

<script>
import BookItem from './BookItem';

const books = [
  {
    title: 'The Goldfinch',
    author: 'Donna Tartt',
    description: "What if one happens to be possessed of a heart that can't be trusted--? What if the heart, for its own unfathomable reasons, leads one willfully and in a cloud of unspeakable radiance away from health, domesticity, civic responsibility and strong social connections and all the blandly-held common virtues and instead straight toward a beautiful flare of ruin, self-immolation, disaster?",
    image: 'the-goldfinch-donna-tartt.jpg'
  },
  {
    title: 'The Three Body Problem',
    author: 'Cixin Liu',
    description: 'It was impossible to expect a moral awakening from humankind itself, just like it was impossible to expect humans to lift off the earth by pulling up on their own hair. To achieve moral awakening required a force outside the human race.',
    image: 'the-three-body-problem-cixin-liu.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    description: `<p>"So this is it," said Arthur, "We are going to die."</p>
                  <p>"Yes," said Ford, "except... no! Wait a minute!" He suddenly lunged across the chamber at something behind Arthur's line of vision. "What's this switch?" he cried.</p>
                  <p>"What? Where?" cried Arthur, twisting round.</p>
                  <p>"No, I was only fooling," said Ford, "we are going to die after all.</p>`,
    image: 'the-hitchhikers-guide-to-the-galaxy-douglas-adams.jpg'
  },
  {
    title: "Cat's Cradle",
    author: 'Kurt Vonnegut',
    description: `<p>"Tiger got to hunt, bird got to fly;</p>
                  <p>Man got to sit and wonder 'why, why, why?'</p>
                  <p>Tiger got to sleep, bird got to land;</p>
                  <p>Man got to tell himself he understand."</p>`,
    image: 'cats-cradle-kurt-vonnegut.jpg'
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    description: 'If your goal is to never make a mistake in your life, you shouldn’t look for secrets. The prospect of being lonely but right—dedicating your life to something that no one else believes in—is already hard. The prospect of being lonely and wrong can be unbearable.',
    image: 'zero-to-one-peter-thiel.jpg'
  },
  {
    title: 'The Martian',
    author: 'The Martian',
    description: `If a hiker gets lost in the mountains, people will coordinate a search. If a train crashes, people will line up to give blood. If an earthquake levels a city, people all over the world will send emergency supplies. This is so fundamentally human that it's found in every culture without exception. Yes, there are assholes who just don't care, but they're massively outnumbered by the people who do.`,
    image: 'the-martian-andy-weir.jpg'
  },
  {
    title: 'Outliers',
    author: 'Malcolm Gladwell',
    description: 'Those three things - autonomy, complexity, and a connection between effort and reward - are, most people will agree, the three qualities that work has to have if it is to be satisfying.',
    image: 'outliers-malcolm-gladwell.jpg'
  },
  {
    title: 'Kitchen Confidential',
    author: 'Anthony Bourdain',
    description: `Do we really want to travel in hermetically sealed popemobiles through the rural provinces of France, Mexico and the Far East, eating only in Hard Rock Cafes and McDonalds? Or do we want to eat without fear, tearing into the local stew, the humble taqueria's mystery meat, the sincerely offered gift of a lightly grilled fish head? I know what I want. I want it all. I want to try everything once.`,
    image: 'kitchen-confidential-anthony-bourdain.jpg'
  },
  {
    title: 'The Brief Wondrous Life of Oscar Wao',
    author: 'Junot Diaz',
    description: 'It was like being at the bottom of an ocean, she said. There was no light and a whole ocean crushing down on you. But most people had gotten so used to it they thought it normal, they forgot even that there was a world above.',
    image: 'the-brief-wondrous-life-of-oscar-wao-junot-diaz.jpg'
  },
  {
    title: 'Essentialism',
    author: 'Greg Mckeown',
    description: 'If you don’t prioritize your life someone else will.',
    image: 'essentialism-greg-mckeown.jpg'
  }
];

export default {
  name: 'hello',
  data() {
    return {
      books
    };
  },
  components: {
    BookItem
  }
};
</script>

<style>
.book-list { margin-top: 15px; }
</style>
