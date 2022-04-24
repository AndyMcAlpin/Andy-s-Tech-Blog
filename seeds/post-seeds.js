const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_text: 'asdf asdf asdf asdf asdf asdf asd f',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'qwerwqerqwerqwerqwerqwer qwer qwer ',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: ' rtyurtyutryurtyu urtyurtyurtyu ',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_text: 'oyuioyuioyuio yuioyuio yuio yuio ',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_text: 'ghjkghjk ghjk ghjk ghjk ghjk khj',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'hsdztasetzdt d tsd fsdftdsft d',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_text: 'egfdvwrgwerg wergwerg t',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'dfrthydrt srty wrtsdfgh wrfgh',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_text: '345345534 3455634534',
    user_id: 9
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
