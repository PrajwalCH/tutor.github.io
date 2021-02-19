import { menuLinks } from "./menuLinks.js";
import { buildIconTag, buildLabelTag, buildLink } from "./tagBuilders/index.js";
const template = document.createElement("template");
template.innerHTML = `
  <ul class="menu">
    
  </ul>
`;
export class AppNav extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add("app-nav");
        this.appendChild(template.content.cloneNode(true));
        this._navMenu = this.querySelector(".menu");
    }
    buildMenu() {
        const menulinks = menuLinks;
        const wrapperClass = this._navMenu.className;
        const linksFragment = document.createDocumentFragment();
        menulinks.forEach(link => {
            const iconTag = buildIconTag(wrapperClass, link.iconName);
            const labelTag = buildLabelTag(wrapperClass, link.label);
            const menuLink = buildLink(link.altHref ? link.altHref : link.label, iconTag, labelTag);
            linksFragment.appendChild(menuLink);
        });
        this._navMenu.appendChild(linksFragment);
    }
    connectedCallback() {
        this.buildMenu();
    }
}
customElements.define("app-nav", AppNav, { extends: 'div' });
