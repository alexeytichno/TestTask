import './app-info.css';

const AppInfo = ({countStuff}) => {

    
    return (
        <div className="app-info">
            <h1>Приложение по созданию заметок</h1>
            <h2>Общее число заметок - {countStuff} </h2>
        </div>
    )
}

export default AppInfo;