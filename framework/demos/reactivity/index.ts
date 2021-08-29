import { effect, reactive } from '../../reactivity';

const $counter = document.getElementById('counter');
const counter = reactive({ num: 0 });
let dummy;
let dummy2;
effect(() => {
  dummy = counter.num;
  $counter.innerText = dummy;
});
effect(() => {
  dummy2 = counter.num;
  console.log(dummy2);
});

document.getElementById('add-btn').onclick = () => {
  counter.num += 1;
}



