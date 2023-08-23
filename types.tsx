export type contactAdress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
};

export type contactType = {
    id: string;
    name: string;
    email: string;
    address: contactAdress;
};
