const genders = ["Male", "Female", "Other"];

const bloodGroupes = [
    "A",
    "B",
    "AB",
    "O",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
];

export const genderOptions = genders.map(gender => ({
    label: gender,
    value: gender,
}));

export const bloodGroupOptions = bloodGroupes.map(bloodGroup => ({
    label: bloodGroup,
    value: bloodGroup
}));

const designations = [
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Lecturer",
    "Adjunct Professor",
    "Research Fellow",
    "Postdoctoral Researcher",
    "Dean",
    "Chancellor",
    "Academic Advisor"
];

export const designationOptions = designations.map(designation => ({
    label: designation,
    value: designation
}));
