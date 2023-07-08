function collectPhones(arr) {
    const phoneObject = arr.reduce((acc, curr) => {
        const[name, phone] = curr.split(" ");
        acc[name] = phone;

        return acc;
    }, {})

    Object.keys(phoneObject).forEach((key) => {
        console.log(`${key} -> ${phoneObject[key]}`)
    })
}