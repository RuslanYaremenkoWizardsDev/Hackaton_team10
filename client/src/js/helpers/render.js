export const renderError = (node, value) => {
    if(!node || !value) return false;
    node.textContent = value;
}