/**
 * Created by PPan on 21/09/2017.
 */
import { Patient } from './models/patient';


export const DummyPatients = [
    new Patient(1, 'John Smith', 85, 'Male', 'Some note here',
                { streetNumber:46, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5082, country:'Australia' },
                [{ behaviourSummary:'Verbal', behaviourType:'Verbal Refusal of Care', behaviourCode:'V1',
                    behaviourDetails:"(The resident) has verbally declined staff to wash, dry, dress and attend to grooming requirements today. The resident states no thanks when offering care, I can do this myself. I had to reapproach several times today and sometimes I must get another staff member to try for me. We must explain that there is a risk of doing this by them self and give a lot of reassurance and TLC. Eventually the resident did accept care but it took a lot of staff time to get acceptance. Personal hygiene needs were met and dignity was enhanced." }]
    ),
    new Patient(2, 'Josie Lee', 65, 'Female', 'Some other note here',
        { streetNumber:108, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5000, country:'Australia' },
        [{ behaviourSummary:'Verbal', behaviourType:'Verbal Refusal of Care', behaviourCode:'V1',
            behaviourDetails:"(The Resident) verbally refused care today. Staff reapproached several times, gave simple explanations and reassurance why staff should help and eventually convinced the resident to accept staff help. Interventions where successful, resident was fully washed, dried, dressed, hair and teeth brushed. Dignity and personal appearance was optimised. Resident was settled." }
            ]
    )
];
