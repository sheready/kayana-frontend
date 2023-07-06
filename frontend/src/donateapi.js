const donate = [
    {
        id:"cottage-expo",
        name: "One Cottage expo per year",
        desc:"Every year we organize the primier event for kenyan businesses",
        price: 200,
    },
    {
        id:"passport-to-business",
        name:"Passport To Business",
        desc:"This is our accelerator program available for all members who would like to work at launching their businesses",
        price: 200,
    },
    {
        id:"advertise",
        name:"Advertise in Kayana News & Home Biz Catalog",
        desc:"We highlight our Member businesses in our Bi-monthly magazine (Kayana News).",
        price: 1700,
    },
    {
        id:"business-visit",
        name:"Business Visits",
        desc:"Kayana in collaboration with the Kenya Cottage Industry organizes quarterly Business visits to Companies that support SMEs I.e Packaging/Labelling, Food manufacturing companies, and Cosmetics manufacturing companies.We visit 15 businesses minimum.",
        price:100,
    },
    {
        id:"annual-membership",
        name:"Annual Membership",
        desc:"Sponsor a founder(s) to join the robust Kayana Community",
        price:100,
    },
    {
        id:"masterclasses",
        name:"Masterclasses",
        desc:"Kayana members have access to our 2023 Calendar of Member Activities and Masterclasses e.g.: Setting standards for your business, scaling your business, building a brand, Govt. regulatory processes that affect small businesses, etc. ",
        price:600,
    }
]

export function getDonations() {
    return donate.map(({ name, id }) => ({ name, id }));
}