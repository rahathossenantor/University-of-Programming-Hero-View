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
        label: "Autumn",
        value: "01",
    },
    {
        label: "Summer",
        value: "02",
    },
    {
        label: "Fall",
        value: "03",
    },
];

export const monthOptions = months.map((month) => ({
    label: month,
    value: month,
}));

export const yearOptions = [0, 1, 2, 3, 4].map((num) => ({
    label: String(currentYear + num),
    value: String(currentYear + num),
}));

export const semesterYearFilterOptions = [0, 1, 2, 3, 4].map((num) => ({
    text: String(currentYear + num),
    value: String(currentYear + num),
}));

// academic faculty options
export const facultyOptions = [
    {
        label: "Faculty of Web Development",
        value: "Faculty of Web Development",
    },
    {
        label: "Faculty of Computer Science Engineering",
        value: "Faculty of Computer Science Engineering",
    },
    {
        label: "Faculty of Programming",
        value: "Faculty of Programming",
    },
];

// academic department options
export const departmentOptions = [
    {
        label: "Department of Web Development",
        value: "Department of Web Development",
    },
    {
        label: "Department of Computer Science Engineering",
        value: "Department of Computer Science Engineering",
    },
    {
        label: "Department of Programming",
        value: "Department of Programming",
    },
];
