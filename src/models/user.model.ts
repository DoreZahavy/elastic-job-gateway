interface Loc {
    lat: number
    lon: number
}

interface Experience {
    startTime: number
    endTime: number
    company: string
    title: string
}

interface UserWithoutPassword {
    email: string
    userName: string
    fullName: string
    loc: Loc
    skills: string[]
    experience: Experience[]
}

interface UserWithPassword extends UserWithoutPassword {
    password:string
}

export type User = UserWithoutPassword | UserWithPassword
