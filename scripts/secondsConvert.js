export const toMintsAndSeconds = (allTimeOnSeconds) => {
    const minits = Math.floor( allTimeOnSeconds / 60 )% 60;
    const seconds = allTimeOnSeconds % 60;

    return (minits < 10 ? "0" + minits : minits) + ":" + (seconds < 10 ? "0" + seconds : seconds)
}