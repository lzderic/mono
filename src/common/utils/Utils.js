// Get Id from Url
export function getIdFromUrl() {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];
    return id;
};