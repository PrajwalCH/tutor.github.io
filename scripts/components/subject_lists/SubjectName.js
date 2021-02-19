export class SubjectName extends HTMLHeadingElement {
  constructor(subject) {
    super();
    this.classList.add("subject-name");
    this._subject = subject;
  }
  
  connectedCallback() {
    const subjectName = this._subject;
    this.appendChild(document.createTextNode(subjectName));
  }
}
customElements.define("subject-name", SubjectName, { extends: 'h3' });