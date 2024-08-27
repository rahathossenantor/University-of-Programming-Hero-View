const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const currentYear = new Date().getFullYear();

export const semesterOptions = [
    {
        value: "01",
        label: "Autumn"
    },
    {
        value: "02",
        label: "Summer"
    },
    {
        value: "03",
        label: "Fall"
    },
];

export const monthOptions = months.map((month) => ({
    value: month,
    label: month
}));

export const yearOptions = [0, 1, 2, 3, 4].map((num) => ({
    value: String(currentYear + num),
    label: String(currentYear + num)
}));

export const semesterYearFilterOptions = [0, 1, 2, 3, 4].map((num) => ({
    text: String(currentYear + num),
    value: String(currentYear + num)
}));
