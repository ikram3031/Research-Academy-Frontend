export interface User {
    _id?: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    phoneNo?: string;
    email?: string;
    role?: 'ADMIN' | 'USER' | 'AUTHOR';
    image?: string;
    gender?: string;
    createdAt?: Date;
    updatedAt?: Date;
    select?: boolean;
}
