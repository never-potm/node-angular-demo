// This is a blueprint of our model that we shall be using for our front-end
export class User {


    // Declaring public is equivalent to declaring variable and assigning it in constructor
    constructor(
        public email: string, 
        public password: string, 
        // ? means firstName, lastName can be optional
        public firstName?: string, 
        public lastName?: string) {}

}