function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NL2TwfH54I":
        Script1();
        break;
      case "5sh6CyeHI4Q":
        Script2();
        break;
      case "5spcpqsypdP":
        Script3();
        break;
      case "6ppTXXEfoZ5":
        Script4();
        break;
      case "6RwuNzLwvBo":
        Script5();
        break;
      case "6pCyXz7alCS":
        Script6();
        break;
      case "6MmdcalF9oa":
        Script7();
        break;
      case "6h12RVymIcM":
        Script8();
        break;
      case "5wqKrWZWiw3":
        Script9();
        break;
      case "5yBR7v6dAB3":
        Script10();
        break;
      case "5VF8PQm4hIA":
        Script11();
        break;
      case "6Q0ACawPtXA":
        Script12();
        break;
      case "6iFju1k0TtE":
        Script13();
        break;
      case "640gNfpEbox":
        Script14();
        break;
      case "6pMJGl9ytBd":
        Script15();
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
  const target = object('6G1KJTEXCsa');
const duration = 750;
const easing = 'ease-out';
const id = '6kKFuDfGSXE';
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

window.Script13 = function()
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
