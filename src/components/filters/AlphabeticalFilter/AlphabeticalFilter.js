import { useState } from "react";


const AlphabeticalFilter = ({ updateFilter }) => {
    const [sortOrder, setSortOrder] = useState(null);

    const handleToggle = () => {
        const nextOrder = sortOrder === 'asc' ? 'desc'
                         : sortOrder === 'desc' ? null
                         : 'asc';
        setSortOrder(nextOrder);

        if (nextOrder === 'asc') {
            updateFilter('alphabetical', (data) =>
                [...data].sort((a, b) => a.description.localeCompare(b.description))
            );
        } else if (nextOrder === 'desc') {
            updateFilter('alphabetical', (data) =>
                [...data].sort((a, b) => b.description.localeCompare(a.description))
            );
        } else {
            updateFilter('alphabetical', null);
        }
    };

    const getLabel = () => {
        if (sortOrder === 'asc') return "А → Я";
        if (sortOrder === 'desc') return "Я → А";
        return "Без сортировки";
    };

    return (
        <button onClick={handleToggle}>
            Сортировка: {getLabel()}
        </button>
    );
};

export default AlphabeticalFilter;
