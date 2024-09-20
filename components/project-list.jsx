import { TagMaker } from "./tag-maker";
import config from '../config.json';

export function ProjectList() {
    const projectList = config.datastore.projects;
    return (
        projectList.map(item => {
            return (
                <div key={item.id} id={item.id}>
                    <h2>{item.name}<br></br>{item.role} - {item.time}</h2>
                    <p className="project-details">{item.description}</p>
                    <div className="tag-holder">
                    <TagMaker tags={item.tagList}/>
                    </div>
                </div>
            )
        })
    )
}
