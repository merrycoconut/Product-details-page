import './ProductTabs.css'

export default function ProductTabs ({ isActive, setActive, tabLists }) {
    const tab = tabLists.map(tabList => {
        const isSelected = tabList.id === isActive;

        return (
            <li 
                key={tabList.id} 
                className={isSelected? 'tab-list-tab-item tab-list-tab-item-active' : 'tab-list-tab-item'}
                onClick={() => setActive(tabList.id)}
            >
                {tabList.name} 
            </li>
        )
    });

    return (
        <div className='tab-list'>
            <nav className='tab-list-tabs'>
                <ul > {tab} </ul>
            </nav>
            <TabPanel tabList={tabLists[isActive]} />
        </div>
    )
}

function TabPanel({ tabList }) {
    const tabLabels = tabList.labels.map(label => {
        return (
            <div key={label.name} className='tab-panel-label'>
                <div className='tab-panel-label-icon'>
                    {label.icon}
                </div>
                <p className='tab-panel-label-name'>{label.name}</p>
            </div>
        )
    })

    return (
        <div className='tab-panel'>
            <div className='tab-panel-img-content' >
                <img className='tab-panel-img' src={tabList.image.src} alt={tabList.image.alt} />
            </div>
            <div className='tab-panel-text-content' >
                <p className='tab-panel-title'> {tabList.title} </p>
                <p className='tab-panel-description'> {tabList.description} </p>
                <div className='tab-panel-labels'>
                    {tabLabels}
                </div>
            </div>
        </div>
    )
}


