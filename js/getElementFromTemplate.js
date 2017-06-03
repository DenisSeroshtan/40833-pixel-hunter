export default function getElementFromTemplate(string) {
  const container = document.createElement(`div`);

  container.innerHTML = string;

  return container;
}
