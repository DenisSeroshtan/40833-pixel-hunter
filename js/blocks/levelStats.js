export default (data) => {
  const node = Array.from(data.values(), (status) => `<li class="stats__result stats__result--${status}"></li>`).join(``);

  return node;
};
