export default function getElementFromTemplate(string) {
  const container = document.createElement(`template`);
  const stringTemplate = string;

  container.innerHTML = stringTemplate;

  return container.content;
}
