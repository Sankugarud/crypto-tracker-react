const convertDate = (num) => {
    const date = new Date(num);

    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${day}/${month}`;
}
export default convertDate;