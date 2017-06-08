export default function getElementFromTemplate(string) {
  const template = document.createElement(`template`);
  template.innerHTML = string;
  const clone = template.content.cloneNode(true);

  return clone;
}
