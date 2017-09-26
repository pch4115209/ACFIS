/**
 * Created by PPan on 22/09/2017.
 */
export const DummyBehaviourSummary = [
    { id: 1, name: 'Verbal' },
    { id: 2, name: 'Wandering' },
    { id: 3, name: 'Physical Behaviour' }
];

export const DummyBehaviour = [
    { summary:'Verbal', type:'Verbal Refusal of Care', code:'V1' },
    { summary:'Verbal', type:'Verbal Disruption to others', code:'V2' },
    { summary:'Verbal', type:'Paranoid ideations that disturbs other residents', code:'V3' },
    { summary:'Verbal', type:'Verbally Sexual inappropriate', code:'V4' },
    { summary:'Wandering', type:'Interfering while Wandering', code:'W1' },
    { summary:'Wandering', type:'Trying to get into inappropriate areas', code:'W2' },
    { summary:'Physical Behaviour', type:'Physically Threatens or does harm to self or others', code:'P1' },
    { summary:'Physical Behaviour', type:'Socially Inappropriate behaviour that impacts on other care recipients', code:'P2' },
    { summary:'Physical Behaviour', type:'Constantly Physically agitated', code:'P3' },
];

export const DummyBehaviourDetails = [
    {
        code:'V1', details:[
                        '(The resident) has verbally declined staff to wash, dry, dress and attend to grooming requirements today. The resident states no thanks when offering care, I can do this myself. I had to reapproach several times today and <span class="text-success">sometimes I must get another staff member to try for me.</span> We must explain that there is a risk of doing this by them self and give a lot of reassurance and TLC. Eventually the resident did accept care but it took a lot of staff time to get acceptance. Personal hygiene needs were met and dignity was enhanced.',
                        '(The Resident) verbally refused care today. Staff reapproached several times, gave simple explanations and reassurance why staff should help and eventually convinced the resident to accept staff help. Interventions where successful, resident was fully washed, dried, dressed, hair and teeth brushed. Dignity and personal appearance was optimised. Resident was settled.',
                        '(The Resident) has refused all meals again today. The resident is very confused and will constantly refuse staff to feed. This is a usual occurrence and happens daily with every meal. Considerable time is spent with reapproaching, enticing with another meal option, moving the resident to another area to ensure the nutritional and hydration requirements of the resident are met.',
                        '(The resident) has refused toileting during my shift. I had to give a lot of encouragement and simple explanations as to why I need to toilet them. Eventually the resident accepted my care, I had to physically guide the resident to the toilet and sit them safely on the toilet. I then adjusted clothing and attended to perianal care. Toileting needs were met and continence was optimised.',
                        '(The Resident) would not let me change their pad today. The pad was wet but the resident refused my care. After considerable time and reapproaching I change the pad. Personal hygiene and dignity was enhanced. Interventions were effective.'
                    ]
    },
    {
        code:'V2', details:[
                        'The resident has been very repetitive today, has talked loudly over other residents while sitting in communal areas. <span class="text-danger">These actions have caused disruption to other residents sitting nearby, it irritates them and they get upset</span>. Staff had to redirect the resident to another area and get them to engage in another meaningful conversation. Staff spent time calming other residents down.',
                        'The resident was swearing in the communal areas today at staff and other residents. <span class="text-danger">This has upset other residents.</span> Staff had to intervene and move the resident to another area. Once engaged in another activity they settled down. Other residents were settled again. Staff gave reassurance and TLC to those involved.',
                        'The resident was screaming in their room today while attending to their ADL,s. <span class="text-danger">other residents nearby got upset and concerned as they could hear the loud noises</span>. Reassurance and simple explanation were given to pacify all concerned.',
                        'The resident displayed verbal combativeness when attending to them today. The resident was argumentative and non-compliant when trying to offer them assistance with the showering and toileting process. The resident then swore at me and told me to go way. Staff retreated and tried again later. Eventually the resident was settled, accepted care, <span class="text-danger">other residents that could hear were also settled and their fears were eased.</span>',
                        'The resident was calling out in the dining room at meals today for no reason, demanding food and drinks immediately even though they had been given a meal. <span class="text-danger">This upset other residents.</span> Reassurance was given and a desert was also given to calm the resident. <span class="text-danger">Staff had to settle the other residents for all to enjoy their meal.</span>',
                        'The resident was making loud noises in their room today. The resident was yelling. <span class="text-danger">This caused disruption to other residents requiring staff to intervene</span> and remind the resident not to yell and explain that <span class="text-danger">it was upsetting others.</span>'
                    ]
    },
    {
        code:'V3', details:[
                        'The resident is accusing other residents of stealing their things, going in to their room and stating that someone is trying to make them move out.  <span class="text-danger">This has upset other residents who became afraid and upset.</span>  <span class="text-success">Staff had to intervene and settle the other residents down.</span> Staff have to speak in a calm manner and relocate the resident to a more calming environment to aid relaxation and lessen the verbal accusations towards others.',
                        'The resident was telling <span class="text-danger">another resident</span> that someone had stolen their car from the front of the building, people are trying to kick them out and stealing from them. <span class="text-danger">These delusional thoughts upset other residents</span> and staff need to calm everyone down. Staff engaged with the resident, re direct their train of thought to reduce the suspicious thoughts. Staff need to initiate conversation that interests the resident.'
                    ]
    },
    {
        code:'V4', details:[
                        'The resident was making inappropriate verbal sexual comments at staff today. The resident was stating that they wanted to kiss/touch me which made staff very uncomfortable. Staff explained that this is inappropriate and retreated from the room. Another staff member attended to the resident.'
                    ]
    },
    {
        code:'W1', details:[
                        'The resident was wandering during my shift today into <span class="text-danger">other resident’s rooms when the other resident was present in the room. This disturbed the resident.</span> Especially when taking and touching their belongings. Staff needed to redirect the resident out of the area to ensure that others remained settled.',
                        'The resident has wandered into the office today and was touching papers, books etc. Staff redirected the resident back to the day area and encouraged them to participate in an activity.',
                        'The resident wandered into another residents room on my shift. <span class="text-danger">The other resident had visitors who complained to staff.</span> Staff monitored the resident and redirected to the communal lounge. They were given afternoon tea which settled the resident.'
                    ]
    },
    {
        code:'W2', details:[
                    'The resident was wandering over my shift. They were trying to enter inappropriate areas such as the office, other resident rooms and kitchen areas. This required staff to redirect the resident back to their own room. A drink was given to settle the resident.',
                    'The resident has tried to abscond from the facility over my shift. They have been trying to get out of locked doors stating I want to go home. <span class="text-success">Staff have monitored closely to ensure the resident remains safe. Staff remain diligent as to their whereabouts.</span>'
                ]
    },
    {
        code:'P1', details:[
                        '<span class="text-danger">The resident was physically threatening towards other residents today by trying to push their walker into them.</span> This made other residents afraid and upset. <span class="text-success">Staff had to redirect the resident, calm other residents down to ensure the safety of all residents.</span>',
                        'The resident was physically pushing staff away with their hands today when attending to their ADL,s. They were grabbing at staff arms and trying to scratch. Staff had to retreat from the room and reapproach later.',
                        'The resident was physically threatening on my shift. They started throwing things at staff. Staff tried to calm the resident, however staff had to retreat to allow the resident to calm down. The resident eventually settled down.',
                        'The resident was continuously pushing their walker into the walls today. They were damaging the property. Staff had to get the resident to engage in a favourite refreshment and offer an activity to participate in to ensure the resident remained calm and the threatening behaviour subsided.',
                        'The resident was physically threatening today. They were spitting at staff during personal hygiene. Staff explained that this was inappropriate and left the room to allow the resident to calm down.',
                        'The resident was kicking out at other residents as they walked past in the communal areas today. Other residents were scared by this behaviour. Staff removed the resident from the area and offered a drink and turned on the TV for them to watch. The resident’s behaviour subsided and other residents remained calm.'
                    ]
    },
    {
        code:'P2', details:[
                        'The resident was taking their clothes off in the lounge area today. <span class="text-danger">Other residents became very upset and concerned and complained to staff.</span> Staff intervened and removed the resident and redressed them. Other residents were given reassurance to calm them down.',
                        'The resident was disrobing in their room today with the blinds and doors open. <span class="text-danger">Visitors and other residents could see this and they became upset.</span> <span class="text-success">Staff needed to shut the blinds and doors and offer the other residents reassurance to calm them down.</span>',
                        'The resident had been incontinent of faeces in the lounge area. They had then placed their hand in their pad and smeared the faeces over the lounge chair and themselves. <span class="text-danger">Other residents became very upset and started shouting at the resident.</span> Staff quickly removed the resident to another area and cleaned and changed them. Other residents were given reassurance and simple explanations. Everyone in the day area was settled.',
                        'The resident was continuously rubbing their private areas in the day area on my shift. <span class="text-danger">Other residents became upset and began to complain and yell.</span> <span class="text-success">Staff settled the other residents and offered a drink and something to eat to the resident.</span> The inappropriate behaviour ceased.',
                        'The resident was constantly agitated at the dining table. They kept picking up others knives and forks and the condiments which did not belong to them. <span class="text-danger">Other residents were upset by these actions and became anxious.</span> Staff moved the condiments out of reach and gave some finger food to the resident to stop the handling of other things.'
                    ]
    },
    {
        code:'P3', details:[
                        'The resident was constantly physically agitated in the dining room during meals. They could not sit still, kept trying to get up from the table. <span class="text-danger">Other residents became agitated by this which then disrupted the dining room.</span> Staff ensured a meal was delivered quickly to reduce the agitation. Other residents settled down and enjoyed their meal.',
                        'The resident was constantly playing with their clothing and wriggling in their seat, unable to remain still when sitting in the common areas. <span class="text-danger">These repetitious actions make other residents nearby feel irritated.</span> Staff gave 1:1 time with the resident, offered some reassurance and simple conversation to reduce the agitation. Other residents calmed down and were more relaxed.',
                        'The resident was constantly physically agitated while in the common area. They were trying to pick imaginary objects out of the air. <span class="text-danger">Other residents became irritated and were yelling to Stop.</span> Staff relocated the resident to another more calming location to help to relax. The residents in the common area were happy and settled.',
                        'The resident was constantly physically agitated today in the lounge and dining area. They could not sit still, they kept rocking to and fro and patting at the table, tapping their cutlery <span class="text-danger">which annoyed other residents.</span> Staff removed the resident and relocated to a calmer area. Staff offered reassurance and spoke in a calming manner to reduce the agitation.'
                    ]
    }
];