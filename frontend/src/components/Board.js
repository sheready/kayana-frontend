import React from 'react'
import amos from '../media/board/Amos.jpg'
import joseph from '../media/board/Joseph.jpg'
import marion from '../media/board/Marion.jpg'
import pat from '../media/board/Pat.jpg'

const Board = () => {
  return (
    <>
      <h5 class=" text-gray text-1xl font-bold align-middle md:my-4">MEET OUR BOARD OF DIRECTORS</h5>
      <div id="accordion-collapse" data-accordion="open" class="mx-auto container">
        <h2 id="accordion-collapse-heading-1">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-center border border-b-0 border-green focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span class="text-green font-bold">MARION MWANGI</span>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0 fill-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div class="flex flex-col mx-auto md:flex-row">
            <div class="md:w-1/3 mx-10 my-2">
              <img src={marion} alt="board-member-marion"></img>
            </div>
            <div class="md:w-2/3">
              <p class="mb-2 text-gray text-center text-lg mx-4">Marion Mwangi is currently the Director of Healthcare at Africa Oxygen (AFROX), where she focuses on advancing Oxygen Access in Africa through gas and engineering solutions for Hospital Care and Home Care. AFROX, a member of the Linde Group, is a leading supplier of medical gases and related services in Africa. Prior to her current role, Marion served as the Managing Director of BOC Kenya Plc.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">In addition to her professional responsibilities, Marion leads the Women in Leadership (WILS) program at Strathmore Business School (SBS) on a part-time basis. Through this program, she has the opportunity to impact women in leadership by guiding them on effective leadership strategies and the relevance of Continual Improvement (CI) in their leadership journeys.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Marion is also actively involved in the community, serving as a long-standing director of The Palmhouse Foundation. She holds positions on various boards, including BOC Kenya PLC, BAT PLC, and Kenya Association of Manufacturers (KAM), where she contributes as a Non-Executive Director. Additionally, Marion is the Vice Chair of Women in Manufacturing (WIM) in Kenya and an active member of Women Corporate Directors (WCD) and Women on Boards Network (WoBN).</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">With over 20 years of experience in Senior Executive roles, Marion possesses expertise in Lean Manufacturing (CI/Kaizen), Performance Management (HK), Trade Marketing, and Strategy. She has a proven track record of successfully transitioning businesses in Turnaround Situations across various sectors, including Health Care, Industrial gas applications, FMCG, Commodity, Dairy, and Professional Services.</p>
            </div>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-green focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
            <span class="text-green font-bold">PATRICIA OKELO</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0 fill-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div class="flex flex-col mx-auto md:flex-row">
            <div class="md:w-1/3 mx-10 my-2">
              <img src={pat} alt="board-member-pat"></img>
            </div>
            <div class="md:w-2/3 mt-10">
              <p class="mb-2 text-gray text-center text-lg mx-4">Patricia is an entrepreneur with over 19 years of experience in running two successful small businesses, Willart Productions, and Conferencing In A Box.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">She is also the co-founder of Kayana Create, the premier space for female entrepreneurs, where women (and some men) come together to nurture small female-run businesses – 0-3 years through various educational and networking events, such as the very successful ‘Candid Conversations: Circles for Women in business’ and ‘The Kenya Cottage Industry Expo ‘19.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">She is passionate about Women in Business and co- authored ‘A Candid Handbook for Women Doing Business’ that has been received with good reviews. She deeply believes in the  “Spirit of Abundance” as the change the world needs.</p>

            </div>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-green focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span class="text-green font-bold">AMOS GACHUIRI</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0 fill-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
          <div class="flex flex-col mx-auto md:flex-row">
            <div class="md:w-1/3 mx-10 my-2">
              <img src={amos} alt="board-member-pat"></img>
            </div>
            <div class="md:w-2/3">
              <p class="mb-2 text-gray text-center text-lg mx-4">Amos is a CPA and member of the Institute of Certified Public Accountants of Kenya (ICPAK); Holds a Bachelor of Commerce degree from University of Nairobi and an MBA from European School of Management and Technology (ESMT), Berlin, Germany; a Diploma in in Private Sector Growth: SIPU-Swedish International Development Cooperation Agency (SIDA), Sweden. Amos has attended multiple training programs locally and internationally.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Amos has over 16 years’ experience across East Africa gained at PwC, KPMG, GroFin, Grassroots Business Fund and Msingi. His areas of expertise include finance, accounting, risk management, industry development, strategy, investments, portfolio, policy advocacy, policy development, management, banking, insurance, deal structuring, commercial & financial management, team management, transactions support and audit. Advisory experiences in financial services, telecoms, FMCGs, pharmaceutical, logistics, automotive, education, health, agriculture, SMEs and non-profits sectors.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Amos has served in both Public and private sector boards. Amos is currently in the Boards of Chinga Boys’ High School, Mathenge Technical Training Institute (both Public education institutions under the Ministry of Education). In addition, Amos serves as an advisory Member to ABNO Softwares International, a technology company with operations in Kenya and India and the Chair of the Risk and Finance Committee. Amos is member of the Tescom Board of Directors an Engineering group and serves as Chair of the Audit and Risk Committee.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Amos lives in Nairobi with his wife Alice, and 3 children. He enjoys a morning run, and an occasional marathon.</p>

            </div>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-green focus:ring-4 focus:ring-gray-200 hover:bg-gray-100" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
            <span class="text-green font-bold">JOSEPH OKELO</span>
            <svg data-accordion-icon class="w-6 h-6 shrink-0 fill-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
          <div class="flex flex-col mx-auto md:flex-row">
            <div class="md:w-1/3 mx-10 my-2">
              <img src={joseph} alt="board-member-joseph"></img>
            </div>
            <div class="md:w-2/3">
              <p class="mb-2 text-gray text-center text-lg mx-4">Joseph Okelo is the Founder and Chairman of the Association of Family Business Enterprises, the only Association in Kenya that represents the interests of family businesses in Kenya. He is the Country Director of the Global Travel and Tourism Partnership East Africa (GTTP-EA). GTTP is a multi-country educational program to introduce students to career opportunities in Travel & Tourism. To date, almost 3 million students in 15 countries/regions have participated in the GTTP program.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">He is the Founder and Director of Boresha Ltd, a learning company that creates online educational content and was recognized in 2015 by the Kenya ICT Board for its contribution to quality education for Kenyan schools.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">He sits on various Boards including, SHOFCO Kenya, a global NGO transforming and empowering impoverished urban youth, especially girls. In 2018, SHOFCO won the Hilton Humanitarian Award, one of the most prestigious awards for developmental and charitable organizations.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">He is also the Chairman of CBM Kenya, a part of CBM Global, a leading organization in disability-inclusive development that is committed to improving the quality of life of people living with disabilities in the poorest communities in the world.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Joseph received a BA in Sociology from the University of Western Ontario, Canada, and an M.B.A. from the University of Nottingham.</p>
              <p class="mb-2 text-gray text-center text-lg mx-4">Joseph is happily married to Patricia, a dynamic woman entrepreneur and they have 3 lovely children.</p>

            </div>
          </div>
        </div>
      </div>  
    </>

  )
}

export default Board