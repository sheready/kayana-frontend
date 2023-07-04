const awards = [
    {
        name: "Commitment to staff development",
        id: "commitment-to-staff-development",
        description:"Small business owners working with a team must tap into the strengths and talents of employees to bring out the best in them. In this category, we consider mentorship opportunities within the organization, skill level-based training, flexible learning options, the development of soft skills and people skills, and the working environ",
        nominees:[
            {
                name:"Edibowl Foods",
                id:"edibowl-foods",
                description:"While hungry for a tasty pasta meal, Edith Orego set out on a trip to the supermarket to get some homegrown, homemade pasta sauce goodness only to find an array of imported brands.This set Edith on a passionate gap-filling journey to create recipes that would incorporate some of the rich, nutritious, and flavorful natural ingredients that are grown in our beautiful country. Thus was Edibowl’s range of Sauces born.The sauces were initially made specifically to pair up with pasta dishes but a new range of Marinades and Chilli sauces was added. All Edibowl Sauces are versatile and can be used in different recipes that are both local and international.",
                image:"./media/awards/ediblefoods.jpg",
            },
            {
                name: "Africa Elite Group",
                id:"africa-elite-group",
                description:"Established in 2010, African Elite Group is an award-winning boutique PR agency in Kenya, an innovative communication consultancy firm, and a digital marketing partner helping brands stand out, remain relevant, and win the battle. We are the people whose passion lies in giving added value to our client’s needs. As specialists in PR, we offer cutting-edge strategies as well as help you engage with your company’s targeted market. Effectively and efficiently, the African Elite Group will work by your side to perfect your ideas.",
                image:"./media/awards/Lucia.jpeg",
            },
            {
                name:"Ryaivas Foods",
                id:"ryaivas-foods",
                description:"We offer healthy breakfast cereal and granola bars. We ensure no preservatives, artificial flavors, or refined sugar that is used in our products. We have a range of muesli and granola bars.",
                image:"./media/awards/ryaivas.jpg",
            },
        ]
        
    },
    {
        name: "Community Impact",
        id: "community-impact",
        description:"The beauty of small businesses is the value they have to the communities around them. What impact have your businesses had in your community in terms of economic sustainability (e.g., employment opportunities), social consciousness, community cohesion, cultivating relationships, and providing intellectual resources?",
        nominees:[
            {
                name:"Tuendelee Foundation",
                id:"tuendelee-foundation",
                description:"We actualize community impact by availing scholarships, mentorship, internship, and job opportunities to the students, and then support them to impact the community via their own giving back projects. In addition to this transformation, we have recently, started a business consulting arm for SMEs which thrives on the manpower of our students to support SMEs to enhance their investor-readiness by having books of account. We therefore not only prepare the students for work but also provides work that further builds community impact, while supporting other SMEs in their financial management and growth endeavors.",
                image:"./media/awards/Gaha.jpg",
            },
            {
                name: "Farmer On Fire Ltd",
                id:"farmer-on-fire",
                description:"An organization based in Nairobi, Kenya, that provides end-to-end support for smallholder farmers in Africa. It also links established agribusinesses like AGRA, John Deere, Heifer International, and the Ministry of Agriculture to their farmer community of over 50,000 Smallholder farmers that follow the brand through digital channels.",
                image:"./media/awards/farmer.jpg",
            },
            {
                name:"Beatrice Fullal Foundation",
                id:"beatrice-fullal-foundation",
                description:"The aim of the foundation is to ensure that through education and mentorship, we can provide the marginalized communities within our home counties a chance at decent work, sustainable towns/communities, and sustainable economic growth.",
                image:"./media/awards/fullal.jpg",
            },
       
           
        ]
        
    },

]

export function getSession({ sessionId, awardId }) {
    return awards
      .find(({ id }) => id === awardId)
      .sessions.find(({ id }) => id === sessionId);
  }
  
export function getAward(awardId) {
    return awards.find(({ id }) => id === awardId);
}

export function getAwards() {
    return awards.map(({ name, id }) => ({ name, id }));
}