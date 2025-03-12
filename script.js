// Dream vacation components
const shortVacations = [
    "Reykjavik Iceland",
    "Venice Italy",
    "Kyoto Japan",
    "New Orleans USA",
    "Marrakech Morocco",
    "Santorini Greece",
    "Miami USA",
    "Dubai UAE",
    "Queenstown New Zealand",
    "San Francisco USA",
    "Cusco Peru",
    "Cape Town South Africa",
    "Nashville USA",
    "Bangkok Thailand",
    "Paris France",
    "Honolulu USA",
    "Rio de Janeiro Brazil",
    "Stockholm Sweden",
    "Las Vegas USA",
    "Singapore",
    "Vancouver Canada"
];

const activities = [
    "with a personal chef",
    "featuring daily spa treatments",
    "including private helicopter tours",
    "with a luxury yacht",
    "complete with butler service",
    "featuring sunset champagne tastings",
    "with private cultural experiences",
    "including adventure excursions",
    "with meditation sessions",
    "featuring wildlife encounters"
];

// Oversharing confession templates
const confessionTemplates = [
    "I haven't {daily_task} in {embarrassing_time}...",
    "Sometimes when I'm alone I {weird_habit}...",
    "I still {childish_thing} when nobody is watching...",
    "My {family_member} doesn't know I {family_secret}...",
    "I've been using the same {personal_item} for {too_long}...",
    "Every time I {normal_activity}, I secretly {strange_twist}...",
    "I pretend to {fake_knowledge}, but actually {truth}...",
    "I keep {odd_collection} hidden in my {hiding_spot}...",
    "Whenever I'm nervous, I {nervous_habit}...",
    "I've never told anyone, but I {guilty_pleasure}..."
];

const confessionDetails = {
    daily_task: [
        "changed my sheets",
        "cleaned my shower",
        "washed my water bottle",
        "checked my mail",
        "done my laundry",
        "cleaned under my couch",
        "dusted my ceiling fan",
        "organized my fridge"
    ],
    embarrassing_time: [
        "three months",
        "way too long",
        "since last Christmas",
        "since I moved in",
        "since my mom visited",
        "almost a year",
        "since the pandemic started",
        "longer than I can remember"
    ],
    weird_habit: [
        "practice my Oscar acceptance speech",
        "eat dry ramen noodles",
        "talk to my houseplants",
        "smell all my books",
        "dance with my vacuum cleaner",
        "organize my sock drawer by color",
        "name the pigeons outside my window",
        "practice my signature like a celebrity"
    ],
    childish_thing: [
        "sleep with my childhood stuffed animal",
        "eat dinosaur-shaped chicken nuggets",
        "watch cartoons with cereal",
        "build pillow forts",
        "put googly eyes on my furniture",
        "name all my kitchen appliances",
        "collect Pokemon cards",
        "make shadow puppets before bed"
    ],
    family_member: [
        "mom",
        "roommate",
        "best friend",
        "partner",
        "sister",
        "dad",
        "cousin",
        "grandmother"
    ],
    family_secret: [
        "broke their favorite mug and blamed the cat",
        "accidentally killed their plant",
        "use their Netflix account",
        "ate their leftovers",
        "borrowed their clothes permanently",
        "am the one who clogged the toilet",
        "lost their spare house key",
        "dented their car in the driveway"
    ],
    personal_item: [
        "loofah",
        "toothbrush",
        "bath towel",
        "contact lens case",
        "gym shoes",
        "pillow",
        "shower curtain",
        "coffee mug"
    ],
    too_long: [
        "over two years",
        "since college",
        "longer than I'd admit to my doctor",
        "I don't even remember when I bought it",
        "way past its expiration date",
        "since my last relationship",
        "since before the iPhone existed",
        "probably a health hazard by now"
    ],
    normal_activity: [
        "go grocery shopping",
        "have a work meeting",
        "ride the elevator",
        "wait at traffic lights",
        "do the dishes",
        "check my mail",
        "brush my teeth",
        "walk my dog"
    ],
    strange_twist: [
        "pretend I'm in a music video",
        "make up songs about what I'm doing",
        "imagine I'm being interviewed",
        "practice different accents",
        "narrate my life in third person",
        "rehearse fake phone conversations",
        "act like I'm in a commercial",
        "pretend I'm a secret agent"
    ],
    fake_knowledge: [
        "understand wine tasting",
        "know about cryptocurrency",
        "enjoy jazz music",
        "read the news",
        "follow sports",
        "appreciate modern art",
        "understand car mechanics",
        "know about fashion trends"
    ],
    truth: [
        "just nod and smile",
        "google everything under the table",
        "make up most of my opinions",
        "just repeat what others say",
        "have no idea what's going on",
        "choose based on the pictures",
        "ask my smart speaker later",
        "pretend to be on my phone"
    ],
    odd_collection: [
        "all my old movie tickets",
        "empty hot sauce bottles",
        "fortune cookie fortunes",
        "rubber bands from produce",
        "hotel shampoo bottles",
        "takeout menus from 2018",
        "broken sunglasses",
        "expired gift cards"
    ],
    hiding_spot: [
        "sock drawer",
        "under my bed",
        "kitchen junk drawer",
        "old shoe box",
        "closet ceiling corner",
        "bathroom cabinet",
        "behind my bookshelf",
        "inside my winter boots"
    ],
    nervous_habit: [
        "organize my apps by color",
        "memorize license plates",
        "count ceiling tiles",
        "make lists of dog names",
        "fold paper into tiny squares",
        "alphabetize my spice rack",
        "braid my charging cables",
        "sort my loose change by year"
    ],
    guilty_pleasure: [
        "eat peanut butter straight from the jar",
        "watch infomercials at 3am",
        "look up my ex's LinkedIn",
        "practice handshakes in the mirror",
        "rehearse arguments in the shower",
        "google myself once a week",
        "collect free sauce packets",
        "name my houseplants after celebrities"
    ]
};

function generateVacation() {
    const vacation = shortVacations[Math.floor(Math.random() * shortVacations.length)];
    document.getElementById('vacation-result').textContent = vacation;
}

function generateConfessions() {
    let confessions = [];
    const usedTemplates = new Set();

    while (confessions.length < 4) {
        const template = confessionTemplates[Math.floor(Math.random() * confessionTemplates.length)];
        
        if (!usedTemplates.has(template)) {
            usedTemplates.add(template);
            let confession = template;

            // Replace all placeholders with random values
            for (const [key, values] of Object.entries(confessionDetails)) {
                const placeholder = `{${key}}`;
                if (confession.includes(placeholder)) {
                    const value = values[Math.floor(Math.random() * values.length)];
                    confession = confession.replace(placeholder, value);
                }
            }

            confessions.push(confession);
        }
    }

    document.getElementById('confessions-result').innerHTML = confessions.join('<br><br>');
}

// Initialize with random suggestions
generateVacation();
generateConfessions(); 