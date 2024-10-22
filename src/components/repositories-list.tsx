import React, { useState } from "react"
import { useActions } from "../hooks/use-actions"
import { useTypedSelector } from "../hooks/use-typed-selector";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions();
    const { loading, error, data } = useTypedSelector((state) => state.repositories)

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
             data.map((name) => <div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList;
