const { Pet, Owner, sequelize } = require('./models/index');

const insertOwner = async(firstName, lastName) => {
    const owner = await Owner.create({
        firstName: firstName,
        lastName: lastName
    });
    return owner;
}

const insertPet = async(name, age, petTypeId) => {
    const pet = await Pet.create({
        name: name,
        age: age,
        petTypeId: petTypeId
    });
    return pet;
}

const createData = async () => {
    const ownerD = await insertOwner('Dianne', 'Cunningham');
    const ownerT = await insertOwner('Tanya', "Unknown");
    const petAyo = await insertPet('Ayo', 1, 3);
    const petBen = await insertPet('Bentley', 1, 3);
    await insertPet('Smoky', 18, 2);

    await ownerD.addPet(petAyo);
    await ownerT.addPet(petBen)

    sequelize.close()
}

createData();
