import {SubjectName} from "./SubjectName.js";
import {SubjectTopics} from "./SubjectTopics.js";

export class SubjectCard extends HTMLDivElement {
  constructor(subject, topics) {
    super();
    this.classList.add("subject-card");
    this._subject = subject;
    this._topics = topics
  }
  
  connectedCallback() {
    const subjectName = new SubjectName(this._subject);
    const subjectTopics = new SubjectTopics(this._topics);
    
    const subjectFragment = document.createDocumentFragment();
    subjectFragment.append(subjectName, subjectTopics);
    
    this.appendChild(subjectFragment);
  }
}
customElements.define("subject-card", SubjectCard, { extends: 'div' });