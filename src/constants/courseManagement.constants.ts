const courses = [
    "Basic Computer Skill",
    "Hypertext Markup Language",
    "Cascading Style Sheets",
    "TailwindCSS",
    "DaisyUI",
    "Basic JavaScript",
    "Problem Solving with JS",
    "Dom Manipulation",
    "Basic React",
    "React Router Dom",
];

const prefixes = [
    "BASIC",
    "HTML",
    "CSS",
    "JS",
    "REACT",
];

const courseCodes = [
    {
        name: "Basic Computer Skill",
        code: "100",
    },
    {
        name: "Hypertext Markup Language",
        code: "101",
    },
    {
        name: "Cascading Style Sheets",
        code: "102",
    },
    {
        name: "TailwindCSS",
        code: "103",
    },
    {
        name: "DaisyUI",
        code: "104",
    },
    {
        name: "Basic JavaScript",
        code: "105",
    },
    {
        name: "Problem Solving with JS",
        code: "106",
    },
    {
        name: "Dom Manipulation",
        code: "107",
    },
    {
        name: "Basic React",
        code: "108",
    },
    {
        name: "React Router Dom",
        code: "109",
    },
];

export const courseOptions = courses.map(course => ({
    label: course,
    value: course,
}));

export const prefixOptions = prefixes.map(prefix => ({
    label: prefix,
    value: prefix,
}));

export const codeOptions = courseCodes.map(course => ({
    label: `${course.code} (${course.name})`,
    value: course.code,
}));
