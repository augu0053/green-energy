let resources = {
    p1: {
        title: '<h2>Solar Panels for All</h2>',
        bodyText: '<p>Implementing affordable solar panel installations for average households involves several key steps: Conducting market research to understand energy needs and financial capacities; developing cost-effective solutions through bulk procurement, efficient technology, and standardized installations; offering flexible financing options such as low-interest loans, leases, and government subsidies; raising awareness through educational workshops and online resources; streamlining the installation process with simplified applications and professional services;These strategies collectively aim to make solar energy accessible and affordable, promoting a sustainable future.</p>',
        url: 'img/Solar.webp'
      },
    p2: {
        title: '<h2>Wind Energy Incentives</h2>',
        bodyText: '<p>Providing tax breaks and subsidies for small-scale wind energy projects can accelerate renewable energy adoption. These financial incentives lower the initial installation costs, making wind energy more feasible for residential areas, farms, schools, and businesses. Benefits include reduced energy bills, job creation, and enhanced energy security through localized power generation. Environmentally, small-scale wind projects reduce greenhouse gas emissions and reliance on fossil fuels. By offering deductions, credits, and grants, governments can support clean energy initiatives, contributing to climate change mitigation and promoting sustainable communities. In summary, such incentives make renewable energy more accessible and economically viable.</p>',
        url: 'img/Wind.webp'
    },
    p3: {
        title: '<h2>Energy-efficient Appliances</h2>',
        bodyText: '<p>Promoting the use of energy-efficient appliances through rebate programs and discounts can significantly reduce energy consumption and lower utility bills for consumers. Rebate programs offer financial incentives to purchase appliances like refrigerators, washing machines, and air conditioners that meet energy efficiency standards. Discounts at the point of sale make these appliances more affordable, encouraging more people to choose energy-efficient options. These programs benefit consumers by reducing their energy costs and contributing to environmental sustainability by decreasing overall energy demand and greenhouse gas emissions. By supporting the widespread adoption of energy-efficient appliances, rebate programs and discounts help create a more sustainable future.</p>',
        url: 'img/Appliances.webp'
    },
}

let buttons= document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

function selectPageButton(ev){
    let currentButton = ev.target;
   
    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2>
    <img class="solution-img" src="${resources[currentButton.id].url}" >
    <p class="solution-content">${resources[currentButton.id].bodyText}</p>
    `;
    buttons.forEach(button => button.classList.remove('active'));
    currentButton.classList.add('active');
}

dc.innerHTML = `
    <h2>${resources.p1.title}</h2>
    <img class="solution-img" src="${resources.p1.url}" >
    <p>${resources.p1.bodyText}</p>
`;
buttons[0].addEventListener('click', selectPageButton);
buttons[1].addEventListener('click', selectPageButton);
buttons[2].addEventListener('click', selectPageButton);