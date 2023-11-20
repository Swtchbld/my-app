
import './app-info.css'
const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Counting employees in the company </h1>
            <h2>general number of employees: {employees} </h2>
            <h2>Award reward: {increased    } </h2>
             </div>
    )
}
export default AppInfo