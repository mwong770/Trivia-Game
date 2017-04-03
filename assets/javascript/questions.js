
//questions and choices
var competition = 
		[
			{
				question: "1/14 <br/> What created the spires and pinnacles in the desert?",
				choice1: "water",
				choice2: "dried sand",
				choice3: "minerals",
				choice4: "people",
				answer: "water",
				image: "assets/images/spire.jpg"
			},

			{
				question: "2/14 <br/> what kinds of competition are the ibex having?",
				choice1: "shelter",
				choice2: "water",
				choice3: "mate",
				choice4: "food",
				answer: "mate",
				image: "assets/images/mate.jpg"
			},

			{
				question: "3/14 <br/> Why is taking the high ground a more effective technique?",
				choice1: "It surprises their opponent, giving them more time to hit.",
				choice2: "It scares the animal they are fighting.",
				choice3: "It makes it easier to get away.",
				choice4: "It adds more force to their hits.",
				answer: "It adds more force to their hits.",
				image: "assets/images/highGround.jpg"
			},

			{
				question: "4/14 <br/> Why is the desert so full of lizards?",
				choice1: "The desert supports them.",
				choice2: "People put them there.",
				choice3: "It doesn't. Lizards are going extinct.",
				choice4: "Most are male lizards who travel to deserts to find a mate.",
				answer: "The desert supports them.",
				image: "assets/images/lizard.jpg"
			},

			{
				question: "5/14 <br/> How does an ibex fight dirty?",
				choice1: "by attacking from behind",
				choice2: "by going 2 against 1",
				choice3: "by using scare tactics",
				choice4: "by using the high ground",
				answer: "by going 2 against 1",
				image: "assets/images/fighting.jpg"
			},

			{
				question: "6/14 <br/> What resource are the lizards competing for?",
				choice1: "cool locations",
				choice2: "a mate",
				choice3: "water",
				choice4: "flies in the river",
				answer: "flies in the river",
				image: "assets/images/fly.jpg"
			},

			{
				question: "7/14 <br/> When does competition occur?",
				choice1: "when organisms are unstable - emotionally or physically",
				choice2: "when animals' genetics or upbringing make them aggressive",
				choice3: "when organisms have to compete for resources necessary for life",
				choice4: "when animals are jealous of what other animals have",
				answer: "when organisms have to compete for resources necessary for life",
				image: "assets/images/competition.jpg"
			},

			{
				question: "8/14 <br/> What is intra-specific competition?",
				choice1: "when at least three species compete",
				choice2: "when the same species compete",
				choice3: "when a family unit competes",
				choice4: "when different species compete",
				answer: "when the same species compete",
				image: "assets/images/intraSpecific.jpg"
			},

			{
				question: "9/14 <br/> What is inter-specific competition?",
				choice1: "when at least three species compete",
				choice2: "when the same species compete",
				choice3: "when a family unit competes",
				choice4: "when different species compete",
				answer: "when different species compete",
				image: "assets/images/interSpecific.jpg"
			},

			{
				question: "10/14 <br/> Which is an example of intra-specific competition?",
				choice1: "brother and sister lion competing",
				choice2: "lions competing for mates",
				choice3: "a lion and a hyena fighting a strong river current",
				choice4: "a flower competing with a tree for sunlight",
				answer: "lions competing for mates",
				image: "assets/images/lionMate.jpg"
			},

			{
				question: "11/14 <br/> Which is an example of inter-specific competition?",
				choice1: "brother and sister lion competing",
				choice2: "lions competing for mates",
				choice3: "a lion and a hyena fighting a strong river current",
				choice4: "a flower competing with a tree for sunlight",
				answer: "a flower competing with a tree for sunlight",
				image: "assets/images/flowerTree.jpg"
			},

			{
				question: "12/14 <br/> What is the competitive exclusion principle?",
				choice1: "two species that compete for the exact same resources cannot stably coexist.",
				choice2: "there must be more resources than animals for animals to survive",
				choice3: "populations will stabilize when resources are sufficient to meet animals' needs",
				choice4: "the introduction of a non-native species will adversely affect the native species",
				answer: "two species that compete for the exact same resources cannot stably coexist.",
				image: "assets/images/exclusionPrinciple.jpg"
			},

			{
				question: "13/14 <br/> Which are examples of the competitive exclusion principle?",
				choice1: "birds migrating because the cold hurts them",
				choice2: "two species feeding off different sized twigs and limbs",
				choice3: "birds migrating due to competition for food and vines climbing up trees for sunlight",
				choice4: "both b and c",
				answer: "both b and c",
				image: "assets/images/2birds.png"
			},

			{
				question: "14/14 <br/> Why are ibex fights 'dead serious'?",
				choice1: "The ibex can die during fights",
				choice2: "The loser can be forced out of the area",
				choice3: "The loser may never get a chance to breed.",
				choice4: "If an ibex dies during the fight, his young will be fatherless",
				answer: "The loser may never get a chance to breed.",
				image: "assets/images/ibexBaby.jpg"
			}

		];

var abioticFactors = 
		[
			{
				question: "1/20 <br/> Where does most heat energy come from?",
				choice1: "the sun",
				choice2: "your body",
				choice3: "gas heaters",
				choice4: "ocean water when it hits high temperatures",
				answer: "the sun",
				image: "assets/images/sun.png"
			},

			{
				question: "2/20 <br/> Why is light important to plants?",
				choice1: "Light helps plants grow by keeping them warm",
				choice2: "Light gives plants required minerals",
				choice3: "Light makes plant stems brown",
				choice4: "Light allows plants to perform photosynthesis",
				answer: "Light allows plants to perform photosynthesis",
				image: "assets/images/photosynthesis.gif"
			},

			{
				question: "3/20 <br/> Why is respiration an aerobic process?",
				choice1: "Respiration produces low energy - only 2 ATP.",
				choice2: "Respiration does not require oxygen.",
				choice3: "Respiration turns oxygen and sugar to carbon dioxide and ethanol.",
				choice4: "Respiration turns oxygen and sugar to carbon dioxide and water.",
				answer: "Respiration turns oxygen and sugar to carbon dioxide and water.",
				image: "assets/images/aerobic.png"
			},

			{
				question: "4/20 <br/> What are the main components of air?",
				choice1: "78% oxygen and 21% nitrogen gas",
				choice2: "68% oxygen and 31% carbon dioxide",
				choice3: "78% nitrogen gas and 21% carbon dioxide",
				choice4: "78% nitrogen gas and 21% oxygen",
				answer: "78% nitrogen gas and 21% oxygen",
				image: "assets/images/air.png"
			},

			{
				question: "5/20 <br/> How is a continuous supply of water provided?",
				choice1: "forgetting to turn the shower faucet off",
				choice2: "the water cycle",
				choice3: "A continuous supply of water is not provided. We lose ocean water every year.",
				choice4: "the oxygen-carbon dioxide cycle",
				answer: "the water cycle",
				image: "assets/images/waterCycle.gif"
			},

			{
				question: "6/20 <br/> What are examples of abiotic factors?",
				choice1: "water and soil",
				choice2: "sunlight and heat",
				choice3: "air",
				choice4: "all of the above",
				answer: "all of the above",
				image: "assets/images/abioticFactors.jpg"
			},

			{
				question: "7/20 <br/> How is liquid water an incredibly powerful force?",
				choice1: "it shapes landscapes through erosion",
				choice2: "it brings down trees during storms",
				choice3: "most of the earth is comprised of water",
				choice4: "all organisms need it",
				answer: "it shapes landscapes through erosion",
				image: "assets/images/erosion.jpg"
			},

			{
				question: "8/20 <br/> Which is true about heat sinks?",
				choice1: "Oceans act as heat sinks that absorb excess heat",
				choice2: "Heat sinks absorb excessive or unwanted heat",
				choice3: "Heat sinks slow down the effects of large temperature changes",
				choice4: "all of the above",
				answer: "all of the above",
				image: "assets/images/heatSink.jpg"
			},

			{
				question: "9/20 <br/> How is water important to organisms?",
				choice1: "Living things are mostly made up of water.",
				choice2: "Water acts as a solvent that allows important chemicals to be absorbed",
				choice3: "Living things need water to bathe",
				choice4: "a and b",
				answer: "a and b",
				image: "assets/images/waterSolvent.png"
			},

			{
				question: "10/20 <br/> How is oxygen continuously recycled?",
				choice1: "oxygen-hydrogen cycle",
				choice2: "oxygen carbon-dioxide cycle",
				choice3: "oxygen carbon cycle",
				choice4: "oxygen nitrogen cycle",
				answer: "oxygen carbon-dioxide cycle",
				image: "assets/images/oxygenRecycled.jpg"
			},

			{
				question: "11/20 <br/> Which is a part of the oxygen carbon-dioxide cycle?",
				choice1: "Useless nitrogen is converted to useful nitrogen",
				choice2: "Aerobic (“oxygen-using”) respiration",
				choice3: "Anerobic ('without oxygen') respiration",
				choice4: "The sun comes out",
				answer: "Aerobic (“oxygen-using”) respiration",
				image: "assets/images/aerobicRespiration2.jpg"
			},

			{
				question: "12/20 <br/> What is another part of the oxygen carbon-dioxide cycle?",
				choice1: "Photosynthesis",
				choice2: "Useless nitrogen is converted to useful nitrogen",
				choice3: "Anerobic ('without oxygen') respiration",
				choice4: "The sun comes out",
				answer: "Photosynthesis",
				image: "assets/images/photosynthesis2.jpg"
			},

			{
				question: "13/20 <br/> Why is the nitrogen cycle important?",
				choice1: "plants need nitrogen for photosynthesis",
				choice2: "nitrogen is the most abundent nutrient for plants",
				choice3: "all living things need nitrogen components for DNA and protein",
				choice4: "b and c",
				answer: "all living things need nitrogen components for DNA and protein",
				image: "assets/images/nitrogen.jpg"
			},

			{
				question: "14/20 <br/> How are legumes important to the nitrogen cycle?",
				choice1: "nitrogen fixing bacteria that live in legumes' roots supply the legume with usable nitrogen (NH3).",
				choice2: "legumes convert useless nitrogen (NH2) to useful nitrogen (NH3).",
				choice3: "nitrogen fixing bacteria that lie in the legumes' leaves supply the legume with usable nitrogen (NH3).",
				choice4: "legumes give bacteria useless nitrogen (NH2) so the bacteria can convert NH2 to good nitrogen (NH3).",
				answer: "nitrogen fixing bacteria that live in legumes' roots supply the legume with usable nitrogen (NH3).",
				image: "assets/images/bacteriaPlant.jpg"
			},

			{
				question: "15/20 <br/> What types of minerals are found in soil?",
				choice1: "iron and zinc",
				choice2: "calcium and phosphorous",
				choice3: "carbon",
				choice4: "a and b",
				answer: "a and b",
				image: "assets/images/minerals.jpg"
			},

			{
				question: "16/20 <br/> What role does soil play in the nitrogen cycle?",
				choice1: "Soil is the home of bacteria that consume useful bacteria",
				choice2: "Soil is the home of plants that convert useless nitrogen to useful nitrogen.",
				choice3: "Soil is the site of both nitrogen fixation and de-nitrogen fixation.",
				choice4: "Soil provides useless nitrogen for bacteria to convert to useful nitrogen.",
				answer: "Soil is the site of both nitrogen fixation and de-nitrogen fixation.",
				image: "assets/images/nitrogenSoil.png"
			},

			{
				question: "17/20 <br/> Which of the following is true about humus?",
				choice1: "It is an organic component of soil because it consists mostly of carbon.",
				choice2: "Humus is organic matter that can't be used by microorganisms or plants.",
				choice3: "Dead plant and animal matter is decomposed by microorganisms in the soil, leaving just humus.",
				choice4: "all of the above",
				answer: "all of the above",
				image: "assets/images/humus.jpg"
			},

			{
				question: "18/20 <br/> Why is humus so important to good soil?",
				choice1: "It removes excess water from soil and it carries nutrients.",
				choice2: "It removes chemicals that are damaging to soil.",
				choice3: "It gives soil the ability to retain water and it carries nutrients.",
				choice4: "It cleans the soil, keeping it healthy.",
				answer: "It gives soil the ability to retain water and it carries nutrients.",
				image: "assets/images/humusMinerals.jpg"
			},

			{
				question: "19/20 <br/> Why is the amount of heat important to organisms?",
				choice1: "The biological processes in life, such as cellular respiration, are heat dependent.",
				choice2: "Physical processes, such as rock formation, are heat dependent.",
				choice3: "Animals cannot reproduce in the cold.",
				choice4: "Nutrients required for organism survival can only be produced in the cold.",
				answer: "The biological processes in life, such as cellular respiration, are heat dependent.",
				image: "assets/images/loveHeat.gif"
			},

			{
				question: "20/20 <br/> Which of the following processes depend on light?",
				choice1: "flowering in plants",
				choice2: "bird migration",
				choice3: "sight",
				choice4: "all of the above",
				answer: "all of the above",
				image: "assets/images/lightsKill.jpg"
			}

		];

var symbiosis = 
		[
			{
				question: "1/17 <br/> What is a symbiotic relationship?",
				choice1: "a species benefits from another species",
				choice2: "various species compete for resources",
				choice3: "a species is hurt by other species in the environment",
				choice4: "two species live in close contact with each other",
				answer: "two species live in close contact with each other",
				image: "assets/images/symbiotic.jpg"
			},

			{
				question: "2/17 <br/> How are symbiotic relationships classified?",
				choice1: "harmful or helpful",
				choice2: "close contact or far contact",
				choice3: "type of species",
				choice4: "type of environment",
				answer: "harmful or helpful",
				image: "assets/images/harmHelp.gif"
			},

			{
				question: "3/17 <br/> Which are the following are symbiotic examples?",
				choice1: "mutualism and parasitism",
				choice2: "amensalism and commensalism",
				choice3: "all of the above",
				choice4: "none of the above",
				answer: "all of the above",
				image: "assets/images/symbiosisNames.jpg"
			},

			{
				question: "4/17 <br/> What is mutualism?",
				choice1: "one gets harmed while the other is unaffected",
				choice2: "benefits both",
				choice3: "one grows stronger by harming the other",
				choice4: "one benefits while the other is not affected",
				answer: "benefits both",
				image: "assets/images/mutualism.jpg"
			},

			{
				question: "5/17 <br/> What is an example of mutualism?",
				choice1: "A plover bird eats while a crocodile gets it's mouth cleaned.",
				choice2: "Orchids grow on trees to get sunlight.",
				choice3: "A bot fly goes into animals or burrows into an animals' skin where larvae (eggs) grow.",
				choice4: "Bread molds.",
				answer: "A plover bird eats while a crocodile gets it's mouth cleaned.",
				image: "assets/images/crocBird.jpg"
			},

			{
				question: "6/17 <br/> What is commensalism?",
				choice1: "one benefits while the other is not affected",
				choice2: "one grows stronger by harming the other",
				choice3: "benefits both",
				choice4: "one gets harmed while the other is unaffected",
				answer: "one benefits while the other is not affected",
				image: "assets/images/commensalism.jpg"
			},

			{
				question: "7/17 <br/> What is an example of commensalism?",
				choice1: "A plover bird eats while a crocodile gets it's mouth cleaned.",
				choice2: "Orchids grow on trees to get sunlight.",
				choice3: "A bot fly goes into animals or burrows into an animals' skin where larvae (eggs) grow.",
				choice4: "Bread molds.",
				answer: "Orchids grow on trees to get sunlight.",
				image: "assets/images/orchardsTree.jpg"
			},

			{
				question: "8/17 <br/> What is parasitism?",
				choice1: "one gets harmed while the other is unaffected",
				choice2: "benefits both",
				choice3: "one grows stronger by harming the other",
				choice4: "one gets a benefit while the other is not affected",
				answer: "one grows stronger by harming the other",
				image: "assets/images/parasitism.jpg"
			},

			{
				question: "9/17 <br/> What is an example of parasitism?",
				choice1: "A plover bird eats while a crocodile gets it's mouth cleaned.",
				choice2: "Orchids grow on trees to get sunlight.",
				choice3: "A bot fly goes into animals or burrows into an animals' skin where larvae (eggs) grow.",
				choice4: "Bread molds.",
				answer: "A bot fly goes into animals or burrows into an animals' skin where larvae (eggs) grow.",
				image: "assets/images/botfly.jpg"
			},

						{
				question: "10/17 <br/> What is amensalism?",
				choice1: "one gets harmed while the other is unaffected",
				choice2: "benefits both",
				choice3: "one grows stronger by harming the other",
				choice4: "one gets a benefit while the other is not affected",
				answer: "one gets harmed while the other is unaffected",
				image: "assets/images/amensalism.jpg"
			},

			{
				question: "11/17 <br/> What is an example of amensalism?",
				choice1: "A plover bird eats while a crocodile gets it's mouth cleaned.",
				choice2: "Orchids grow on trees to get sunlight.",
				choice3: "A bot fly goes into animals or burrows into an animals' skin where larvae grow.",
				choice4: "Bread molds.",
				answer: "Bread molds.",
				image: "assets/images/mold.jpg"
			},

			{
				question: "12/17 <br/> What is a human example of amensalism?",
				choice1: "a car accident in which both cars are damaged",
				choice2: "a person pays a restaurant for food they eat",
				choice3: "a bully steals a peer's lunch and eats it",
				choice4: "a factory or industry harms the environment",
				answer: "a factory or industry harms the environment",
				image: "assets/images/factories.jpg"
			},

			{
				question: "13/17 <br/> What did mitochondria supposedly evolve from?",
				choice1: "minerals",
				choice2: "bacteria",
				choice3: "water",
				choice4: "blood",
				answer: "bacteria",
				image: "assets/images/ancestor.gif"
			},

			{
				question: "14/17 <br/> What kind of symbiosis did mitochondria exhibit?",
				choice1: "commensalism",
				choice2: "mutualism",
				choice3: "parasitism",
				choice4: "amensalism",
				answer: "mutualism",
				image: "assets/images/mitochondriaFunction.jpg"
			},

			{
				question: "15/17 <br/> Why do we think mitochondria used to be separate organisms?",
				choice1: "It's DNA is circular.",
				choice2: "It is missing a membrane.",
				choice3: "It has another membrane.",
				choice4: "a and c",
				answer: "a and c",
				image: "assets/images/proof.jpg"
			},

			{
				question: "16/17 <br/> Bees and flowers are an example of which of the following?",
				choice1: "amensalism",
				choice2: "commensalism",
				choice3: "mutualism",
				choice4: "parasitism",
				answer: "mutualism",
				image: "assets/images/beesFlowers.jpg"
			},

			{
				question: "17/17 <br/> How are bees and flowers an example of mutualism?",
				choice1: "Bees eat part of the flowers, damaging them.",
				choice2: "Bees spread pollen and fertilize them. Flowers feed bees.",
				choice3: "Bees fertilize flowers without gaining a benefit",
				choice4: "Flowers feed bees. Bees feed flowers.",
				answer: "Bees spread pollen and fertilize them. Flowers feed bees.",
				image: "assets/images/beesFlowers2.jpg"
			}

];