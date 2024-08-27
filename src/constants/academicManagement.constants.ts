// academic semester options
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

// academic faculty options
export const facultyOptions = [
    {
        value: "Faculty of Web Development",
        label: "Faculty of Web Development"
    },
    {
        value: "Faculty of Computer Science Engineering",
        label: "Faculty of Computer Science Engineering"
    },
    {
        value: "Faculty of Programming",
        label: "Faculty of Programming"
    },
];
