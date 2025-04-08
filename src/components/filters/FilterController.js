import { useState, useEffect, Children, cloneElement } from "react";


const FilterController = ({ data, children, controls }) => {
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(data);

    const updateFilter = (name, filterFn) => {
        setFilters(prev => {
            const newFilters = prev.filter(f => f.name !== name);
            if (filterFn) {
                return [...newFilters, { name, fn: filterFn }];
            }
            return newFilters;
        });
    };

    useEffect(() => {
        let result = [...data];
        filters.forEach(filter => {
            if (typeof filter.fn === 'function') {
                result = filter.fn(result);
            }
        });
        setFilteredData(result);
    }, [data, filters]);

    return (
        <div>
            {children(filteredData)}

            {controls &&
                Children.map(controls, (child) =>
                    cloneElement(child, {
                        updateFilter
                    })
                )
            }
        </div>
    );
};

export default FilterController;
