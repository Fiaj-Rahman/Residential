const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('realEstate-Properties')

    if(storedJobApplication)
    {
        return JSON.parse(storedJobApplication)
    }
    return [];
}


const saveJobApplication = id =>{
const storedJobApplications = getStoredJobApplication()
const exists = storedJobApplications.find(jobId => jobId === id)
if(!exists)
{
    storedJobApplications.push(id)
    localStorage.setItem('realEstate-Properties',JSON.stringify(storedJobApplications))

}
}


export {getStoredJobApplication,saveJobApplication}