function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ArAKsBZwbQ":
        Script1();
        break;
      case "5dReZZ973jn":
        Script2();
        break;
      case "68QiRQwfkop":
        Script3();
        break;
      case "6L71hbanEYr":
        Script4();
        break;
      case "5ZVZoF3aJU7":
        Script5();
        break;
      case "6Z0y3Pb03wC":
        Script6();
        break;
      case "6AQfdheIvtH":
        Script7();
        break;
      case "5mR5HAkt7mH":
        Script8();
        break;
      case "6WZWybewCYc":
        Script9();
        break;
      case "63HIzNyupGT":
        Script10();
        break;
      case "6kjoKGX4u3r":
        Script11();
        break;
      case "6hM0AfSsjj1":
        Script12();
        break;
      case "5VxhdgAY4jB":
        Script13();
        break;
      case "6EsHGXzBB1J":
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
