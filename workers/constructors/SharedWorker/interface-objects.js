let prt;
function handleCall(e) {
  const log = [];
  for (let i = 0; i < e.data.length; ++i) {
    if (!(e.data[i] in self))
      log.push(e.data[i]);
  }
  prt.postMessage('These were missing: '+log.join(', '));
}
onconnect = function(e) {
  prt = e.ports[0];
  prt.onmessage = handleCall;
};
