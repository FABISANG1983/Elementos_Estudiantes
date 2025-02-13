function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6quDdmSHOnr":
        Script1();
        break;
      case "5v1lPo6De75":
        Script2();
        break;
      case "6j4mMX5EDNJ":
        Script3();
        break;
      case "6NrvAhYqgkb":
        Script4();
        break;
      case "5ddI7PG3TSj":
        Script5();
        break;
      case "6VzZzdV8Pj4":
        Script6();
        break;
      case "647Li8DfHHR":
        Script7();
        break;
      case "5kZzGvz41s2":
        Script8();
        break;
      case "6a12AxQopbF":
        Script9();
        break;
      case "5ut2PKVn9dQ":
        Script10();
        break;
      case "6Nb4EUHUZNz":
        Script11();
        break;
      case "6WRwzqPJm8x":
        Script12();
        break;
      case "6RuRB6KNgmY":
        Script13();
        break;
      case "6OJRdkYOFsk":
        Script14();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6RbEPsSR6t5');
const duration = 750;
const easing = 'ease-out';
const id = '5V5sfHqPlzO';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('63UyhyymA9r');
const duration = 1250;
const easing = 'ease-out';
const id = '6h0KV3KUTnk';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5azQECcpJhu');
const duration = 1250;
const easing = 'ease-out';
const id = '6oRn9STsyBI';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5dqbSPKCQpo');
const duration = 750;
const easing = 'ease-out';
const id = '6Sh19TUc8AZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6lB8uYm8d8l');
const duration = 750;
const easing = 'ease-out';
const id = '5pmlfGlBzoJ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6lB8uYm8d8l');
const duration = 750;
const easing = 'ease-out';
const id = '5pmlfGlBzoJ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6lB8uYm8d8l');
const duration = 750;
const easing = 'ease-out';
const id = '5pmlfGlBzoJ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6lB8uYm8d8l');
const duration = 750;
const easing = 'ease-out';
const id = '5pmlfGlBzoJ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6lB8uYm8d8l');
const duration = 750;
const easing = 'ease-out';
const id = '5pmlfGlBzoJ';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6Xw3fLGX46p');
const duration = 750;
const easing = 'ease-out';
const id = '6RKGKhk252b';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5qQ1zW7Epp6');
const duration = 750;
const easing = 'ease-out';
const id = '5iIPftlaDtW';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
