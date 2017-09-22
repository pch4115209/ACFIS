/**
 * Created by PPan on 21/09/2017.
 */
import { Patient } from './models/patient';


export const DummyPatients = [
    new Patient(1, 'John Smith', 85, 'Male', 'Some note here',
                { streetNumber:46, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5082, country:'Australia' },
                [{ type:'w1', brief:'This is brief description', description:'This is long description' }]
    ),
    new Patient(2, 'Josie Lee', 65, 'Female', 'Some other note here',
        { streetNumber:108, streetName:'North East Road', suburb:'Walkerville', city:'Adelaide', state:'South Australia', postcode:5000, country:'Australia' },
        [{ type:'w1', brief:'This is brief description', description:'This is long description' }]
    )
];
