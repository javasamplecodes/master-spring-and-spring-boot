const person = {
    name: 'Omer',
    address: {
        line1: '123 Street',
        city: 'Istanbul',
        country: 'Turkey'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfiles: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript () {
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfiles()}</div>
        </>
    )
}