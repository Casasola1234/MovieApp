import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./App.css"

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3500/reviews/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:3500/reviews").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
    
        <div className=" p-20 flex flex-col mt-205">
        <div className="overflow-x-auto mt-205">
            <div className="p-15 w-full inline-block align-middle ">
            <div className="hidden sm:block p-2 ">
                        <Link to="/reviews/create" className="bg-green-600 py-1 my-3 rounded ">Add New (+)</Link>
                    </div>
                <div className="overflow-hidden border rounded-lg ">
                
                    <table className="min-w-full divide-y divide-gray-500  bg-slate-900 text-white">
                        <thead className="bg-gray-40 ">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    Movie
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                                >
                                    Review
                                </th>
                              
                                
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {empdata &&
                                empdata.map(item => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-400 whitespace-nowrap">
                                {item.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                                {item.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                                    {item.movie}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-400 whitespace-nowrap">
                                    {item.review}
                                </td>
                                
                                
                            </tr>
                                ))}
                                
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);
}

export default EmpListing;