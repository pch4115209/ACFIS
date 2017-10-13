/**
 * Created by PPan on 21/09/2017.
 */
import { Patient } from './models/patient';


export const DummyPatients = [
    new Patient(1, 'John Smith', '12/10/1945' ,72, 'Male', 'Some note here',
                { room:'303', location: 'Location 1', dateOfAdmission:'10/10/2014' },
                { streetNumber:46, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5082, country:'Australia' },
                [
                    { name: 'Hannah James', phone:'(08) 8892 1241',  fax:'(08) 8892 1240'},
                    { name: 'Dwayee Swinney', phone:'(08) 8293 1241',  fax:'(08) 8811 8888'}
                ],
                [
                    { behaviourSummary:'Verbal', behaviourType:'Verbal Refusal of Care', behaviourCode:'V1',
                    behaviourDetails:"(The resident) has verbally declined staff to wash, dry, dress and attend to grooming requirements today. The resident states no thanks when offering care, I can do this myself. I had to reapproach several times today and sometimes I must get another staff member to try for me. We must explain that there is a risk of doing this by them self and give a lot of reassurance and TLC. Eventually the resident did accept care but it took a lot of staff time to get acceptance. Personal hygiene needs were met and dignity was enhanced." }
                ]
    ),
    new Patient(2, 'Josie Lee', '06/06/1952', 65, 'Female', 'Some other note here',
        { room:'108', location: 'Location 2', dateOfAdmission:'18/07/2012' },
        { streetNumber:108, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5000, country:'Australia' },
        [
            { name: 'Rebecca Chapman', phone:'(08) 8427 0844',  fax:'n/a'},
            { name: 'Dwan John', phone:'(08) 8487 9242',  fax:'(08) 8487 6666'}
        ],
        [
            { behaviourSummary:'Verbal', behaviourType:'Verbal Refusal of Care', behaviourCode:'V1',
            behaviourDetails:"(The Resident) verbally refused care today. Staff reapproached several times, gave simple explanations and reassurance why staff should help and eventually convinced the resident to accept staff help. Interventions where successful, resident was fully washed, dried, dressed, hair and teeth brushed. Dignity and personal appearance was optimised. Resident was settled." }
        ]
    )
];
