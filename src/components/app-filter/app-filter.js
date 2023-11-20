import './app-filter.css'
const AppFilter = (props) =>{
    const buttonsData =[
        {name : 'all', label:'all employees'},
        {name : 'rise', label:'on lvl Up'},
        {name : 'moreThan1000', label:'salary more than 1000$'},
    ];
    const buttons = buttonsData.map(({name,label})=>{
        const active =props.filter===name;
        const clazz =active ?'btn-light' : 'btn btn-outline-light'
        return (
            <button type='button'
            className={`btn ${clazz}`}
           
            key ={name}
            onClick={
                () =>props.onFilterSelect(name)}>
                {label}

            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
-
        </div>

    )
}

export default AppFilter;