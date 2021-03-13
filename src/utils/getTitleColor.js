export default color => {
    const c = color.substring(1); // strip #
    const rgb = parseInt(c, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue
    const luma = (Math.max(r, g, b) + Math.min(r, g , b)) / 5.10; // per ITU-R BT.709
        return luma < 50 ? '#eee' : '#000';
};