import {Outlet} from 'react-router-dom';
import List from './SubjectGrid/SubjectGrid';

 export default function Dashboard() {
    return(
        <div className="Dashboard">
            <List/>
        </div>
    )
 }