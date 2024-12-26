export const getFirstAvailableImage = (property) => {
    for (let i = 1; i <= 30; i++) {
        if (property[`img${i}`]) return property[`img${i}`];
    }
    return '';
};
