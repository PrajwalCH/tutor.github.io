export function buildLink(labelForLink, iconTag, labelTag) {
    const LINK_FILE_EXTENSION = ".html";
    const linkFile = `${labelForLink}${LINK_FILE_EXTENSION}`;
    const liTag = document.createElement("li");
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", linkFile);
    anchorTag.append(iconTag, labelTag);
    liTag.appendChild(anchorTag);
    return liTag;
}
;
