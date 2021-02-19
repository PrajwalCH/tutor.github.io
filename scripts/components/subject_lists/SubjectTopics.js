export class SubjectTopics extends HTMLUListElement {

  constructor(topics) {
    super();
    this.classList.add("subject-topic");
    this._topics = topics;
  }

  connectedCallback() {
    const createdLists = this.createTopicLists();
    this.appendChild(createdLists);
  }

  createTopicLists() {
    const listsFragment = document.createDocumentFragment();
    
    this._topics.forEach(topic => {
      const list = document.createElement("li");
      const textNode = document.createTextNode(topic);
      list.appendChild(textNode);
      listsFragment.appendChild(list);
    });
    
    return listsFragment;
  }
}
customElements.define("subject-topics", SubjectTopics, { extends: 'ul' });