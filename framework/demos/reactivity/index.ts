import { effect, reactive } from '../../reactivity';

const $counter = document.getElementById('counter');
const counter = reactive({ num: 0 });
let dummy;
effect(() => {
  dummy = counter.num;
  $counter.innerText = dummy;
});

document.getElementById('add-btn').onclick = () => {
  counter.num += 1;
}



