import {lists} from "./listsOfSubject.js";
import {SubjectCard} from "./SubjectCard.js";

export class SubjectLists extends HTMLDivElement {
  constructor() {
    super();
    this.classList.add("subject-lists");
  }
  
  connectedCallback() {
    const listsOfSubject = lists;
    listsOfSubject.forEach(this.subjectIretator)
  }
  
  subjectIretator = (data) => {
    const subjectCard = new SubjectCard(data.subject, data.topics);
    this.appendChild(subjectCard);
  }
}
customElements.define("subject-lists", SubjectLists, { extends: 'div'});