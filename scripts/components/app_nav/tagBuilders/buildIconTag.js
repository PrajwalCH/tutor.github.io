export function buildIconTag(wrapperClass, iconName) {
    const ICONS_PATH = "assets/icons/app_nav/";
    const ICON_EXTENSION = ".svg";
    const imgTagClass = `${wrapperClass}__icon`;
    const icon = `${iconName}${ICON_EXTENSION}`;
    const fullPath = `${ICONS_PATH}${icon}`;
    const imgTag = document.createElement("img");
    imgTag.setAttribute("class", imgTagClass);
    imgTag.setAttribute("src", fullPath);
    return imgTag;
}
;
