const donate = [
    {
        id:"cottage-expo",
        name: "One Cottage expo per year",
        desc:"Every year we organize the primier event for kenyan businesses",
        price: 200,
        img:require("./media/donate/cottage.jpeg"),
    },
    {
        id:"passport-to-business",
        name:"Passport To Business",
        desc:"This is our accelerator program available for all members who would like to work at launching their businesses",
        price: 200,
        img:require("./media/donate/passport.jpeg"),
    },
    {
        id:"advertise",
        name:"Advertise in Kayana News & Home Biz Catalog",
        desc:"We highlight our Member businesses in our Bi-monthly magazine (Kayana News).",
        price: 1700,
        img:require("./media/donate/advertising.jpeg"),
    },
    {
        id:"business-visit",
        name:"Business Visits",
        desc:"Kayana in collaboration with the Kenya Cottage Industry organizes quarterly Business visits to Companies that support SMEs.",
        price:100,
        img:require("./media/donate/visits.jpeg"),
    },
    {
        id:"annual-membership",
        name:"Annual Membership",
        desc:"Sponsor a founder(s) to join the robust Kayana Community",
        price:100,
        img:require("./media/donate/membership.jpeg"),
    },
    {
        id:"masterclasses",
        name:"Masterclasses",
        desc:"Kayana members have access to our 2023 Calendar of Member Activities and Masterclasses. ",
        price:600,
        img:require("./media/donate/masterclass.jpeg"),
    }
]

export function getDonations() {
    return donate.map(({ name, id, desc, price,img }) => ({ name, id, desc, price,img }));
}

export function getDonationstData(id) {
    let DonationData = donate.find(item => item.id === id);

    if (DonationData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return DonationData;
}



export {donate}