export function buildLabelTag(wrapperClass, label) {
    const labelTagClass = `${wrapperClass}__label`;
    const labelName = document.createTextNode(label);
    const spanTag = document.createElement("span");
    spanTag.setAttribute("class", labelTagClass);
    spanTag.appendChild(labelName);
    return spanTag;
}
;
