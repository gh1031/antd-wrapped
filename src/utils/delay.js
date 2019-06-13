
const delayOperation = (action, params, time) => new Promise((resolve) => {
  setTimeout(() => { action(params); resolve(); }, time);
});

export default delayOperation;
