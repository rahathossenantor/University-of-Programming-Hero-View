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
