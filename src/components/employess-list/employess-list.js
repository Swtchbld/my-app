
import EmployeesListItem  from "../employess-list-item/employess-list-item";
import './employees-list.css';
const EmplyeesList = ({data,onDelete,onToggleIncrease,onToggleRise}) =>{

    const elements =data.map(item =>{
        const {id, ...itemProps}=item; 
        return (
            <EmployeesListItem
            key={id}
             {...itemProps}
             onDelete={()=>onDelete(id)}
             onToggleIncrease ={()=> onToggleIncrease(id)}
             onToggleRise ={()=> onToggleRise(id)}  />
        )
    })

    return (
        <ul className="class-list list-group">

       {elements}

        </ul>

    )
}
export default EmplyeesList;